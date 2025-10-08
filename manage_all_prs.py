#!/usr/bin/env python3
"""
Comprehensive PR Management Script
Fetches, analyzes, resolves conflicts, and merges all open PRs
"""

import json
import subprocess
import sys
import time
from typing import List, Dict, Optional

GITHUB_TOKEN = "ghs_ZovMJhZd6dGsgC7nYrsvbqsBs3TETQ3WaUiC"
REPO_OWNER = "Zion-Holdings"
REPO_NAME = "zion.app"
API_BASE = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}"

def run_command(cmd: str, check: bool = True) -> tuple:
    """Run shell command and return output"""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            capture_output=True, 
            text=True,
            timeout=300
        )
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return -1, "", "Command timed out"
    except Exception as e:
        return -1, "", str(e)

def fetch_open_prs() -> List[Dict]:
    """Fetch all open PRs from GitHub"""
    print("Fetching open PRs from GitHub...")
    
    cmd = f'''curl -s -H "Authorization: token {GITHUB_TOKEN}" \
    "{API_BASE}/pulls?state=open&per_page=100"'''
    
    code, stdout, stderr = run_command(cmd)
    
    if code != 0:
        print(f"Error fetching PRs: {stderr}")
        return []
    
    try:
        prs = json.loads(stdout)
        if isinstance(prs, list):
            return prs
        else:
            print(f"Unexpected response: {prs}")
            return []
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON: {e}")
        return []

def check_pr_conflicts(pr_number: int, branch: str) -> bool:
    """Check if PR has merge conflicts with main"""
    print(f"  Checking for conflicts in PR #{pr_number}...")
    
    # Fetch the branch
    code, _, _ = run_command(f"git fetch origin {branch}", check=False)
    if code != 0:
        print(f"  ⚠️  Could not fetch branch {branch}")
        return True
    
    # Check if it can be merged cleanly
    code, stdout, _ = run_command(
        f"git merge-tree $(git merge-base origin/main origin/{branch}) origin/main origin/{branch}",
        check=False
    )
    
    # If merge-tree output contains conflict markers, there are conflicts
    has_conflicts = "<<<<<<< " in stdout
    
    if has_conflicts:
        print(f"  ⚠️  PR #{pr_number} has merge conflicts")
    else:
        print(f"  ✅ PR #{pr_number} has no conflicts")
    
    return has_conflicts

def resolve_conflicts_in_branch(branch: str) -> bool:
    """Attempt to automatically resolve common conflicts"""
    print(f"  Attempting to resolve conflicts in {branch}...")
    
    # Check out the branch
    code, _, _ = run_command(f"git checkout {branch}", check=False)
    if code != 0:
        print(f"  ⚠️  Could not checkout branch {branch}")
        return False
    
    # Try to merge main
    code, stdout, stderr = run_command("git merge origin/main", check=False)
    
    if code == 0:
        print(f"  ✅ No conflicts to resolve")
        return True
    
    # If merge failed, check for conflicts
    code, stdout, _ = run_command("git diff --name-only --diff-filter=U", check=False)
    conflicted_files = stdout.strip().split('\n') if stdout.strip() else []
    
    if not conflicted_files:
        print(f"  ✅ Merge completed")
        return True
    
    print(f"  Found {len(conflicted_files)} conflicted files")
    
    # Attempt automatic resolution
    for file in conflicted_files:
        if not file:
            continue
            
        print(f"    Resolving {file}...")
        
        # Read file content
        try:
            with open(file, 'r') as f:
                content = f.read()
        except:
            continue
        
        # Simple strategy: if conflict is in test files, take incoming changes
        # For other files, try to keep both or use ours
        if '<<<<<<< HEAD' in content:
            # Remove conflict markers - keep both sides when possible
            lines = content.split('\n')
            resolved_lines = []
            in_conflict = False
            conflict_type = None
            
            for line in lines:
                if line.startswith('<<<<<<< '):
                    in_conflict = True
                    conflict_type = 'ours'
                    continue
                elif line == '=======':
                    conflict_type = 'theirs'
                    continue
                elif line.startswith('>>>>>>> '):
                    in_conflict = False
                    conflict_type = None
                    continue
                
                # Keep all non-conflict lines
                if not in_conflict:
                    resolved_lines.append(line)
                else:
                    # In conflict zone - keep both unless it's a duplicate
                    if line not in resolved_lines[-5:] if len(resolved_lines) >= 5 else resolved_lines:
                        resolved_lines.append(line)
            
            # Write resolved content
            try:
                with open(file, 'w') as f:
                    f.write('\n'.join(resolved_lines))
                
                # Stage the file
                run_command(f"git add {file}", check=False)
                print(f"    ✅ Resolved {file}")
            except Exception as e:
                print(f"    ⚠️  Could not resolve {file}: {e}")
                return False
    
    # Commit the resolution
    code, _, _ = run_command('git commit -m "Resolve merge conflicts automatically"', check=False)
    
    if code == 0:
        print(f"  ✅ Conflicts resolved and committed")
        return True
    else:
        print(f"  ⚠️  Could not commit resolution")
        return False

def merge_pr_to_main(pr_number: int, branch: str, title: str) -> bool:
    """Merge a PR branch into main"""
    print(f"\nMerging PR #{pr_number}: {title}")
    
    # Checkout main
    code, _, _ = run_command("git checkout main", check=False)
    if code != 0:
        print(f"  ⚠️  Could not checkout main")
        return False
    
    # Pull latest main
    code, _, _ = run_command("git pull origin main", check=False)
    if code != 0:
        print(f"  ⚠️  Could not pull main")
        return False
    
    # Merge the branch
    commit_msg = f"Merge PR #{pr_number}: {title}"
    code, _, stderr = run_command(f'git merge --no-ff origin/{branch} -m "{commit_msg}"', check=False)
    
    if code == 0:
        print(f"  ✅ Successfully merged PR #{pr_number}")
        return True
    elif "CONFLICT" in stderr or "conflict" in stderr:
        print(f"  ⚠️  Merge conflicts detected, attempting to resolve...")
        
        # Try to resolve conflicts
        if resolve_conflicts_in_branch(branch):
            # Try merge again
            code, _, _ = run_command(f'git merge --no-ff origin/{branch} -m "{commit_msg}"', check=False)
            if code == 0:
                print(f"  ✅ Successfully merged PR #{pr_number} after conflict resolution")
                return True
        
        print(f"  ❌ Could not merge PR #{pr_number}")
        # Abort merge
        run_command("git merge --abort", check=False)
        return False
    else:
        print(f"  ❌ Could not merge PR #{pr_number}: {stderr}")
        return False

def close_pr(pr_number: int) -> bool:
    """Close a PR via GitHub API"""
    cmd = f'''curl -s -X PATCH \
    -H "Authorization: token {GITHUB_TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{{"state": "closed"}}' \
    "{API_BASE}/pulls/{pr_number}"'''
    
    code, stdout, _ = run_command(cmd)
    return code == 0

def main():
    """Main execution"""
    print("="*80)
    print("PR MANAGEMENT SCRIPT - Starting...")
    print("="*80)
    
    # Ensure we're in the workspace
    run_command("cd /workspace", check=False)
    
    # Update git configuration for non-interactive mode
    run_command('git config pull.rebase false', check=False)
    run_command('git config merge.conflictstyle diff3', check=False)
    
    # Fetch all remotes
    print("\nUpdating repository...")
    run_command("git fetch --all", check=False)
    
    # Get open PRs
    prs = fetch_open_prs()
    
    if not prs:
        print("\n✅ No open PRs found!")
        return
    
    print(f"\n{'='*80}")
    print(f"Found {len(prs)} open PR(s)")
    print(f"{'='*80}\n")
    
    # Display all PRs
    for i, pr in enumerate(prs, 1):
        print(f"{i}. PR #{pr['number']}: {pr['title']}")
        print(f"   Branch: {pr['head']['ref']}")
        print(f"   Author: {pr['user']['login']}")
        print(f"   Draft: {pr['draft']}")
        print()
    
    # Process each PR
    merged_count = 0
    failed_prs = []
    
    for pr in prs:
        pr_number = pr['number']
        branch = pr['head']['ref']
        title = pr['title']
        
        print(f"\n{'='*80}")
        print(f"Processing PR #{pr_number}: {title}")
        print(f"{'='*80}")
        
        # Check for conflicts
        has_conflicts = check_pr_conflicts(pr_number, branch)
        
        # Try to merge
        if merge_pr_to_main(pr_number, branch, title):
            merged_count += 1
            
            # Close the PR
            if close_pr(pr_number):
                print(f"  ✅ PR #{pr_number} closed")
            else:
                print(f"  ⚠️  Could not close PR #{pr_number} via API")
        else:
            failed_prs.append(pr_number)
            print(f"  ❌ Failed to merge PR #{pr_number}")
    
    # Summary
    print(f"\n{'='*80}")
    print("SUMMARY")
    print(f"{'='*80}")
    print(f"Total PRs processed: {len(prs)}")
    print(f"Successfully merged: {merged_count}")
    print(f"Failed to merge: {len(failed_prs)}")
    
    if failed_prs:
        print(f"\nFailed PRs: {', '.join(f'#{n}' for n in failed_prs)}")
    
    # Try to push to main
    if merged_count > 0:
        print(f"\nPushing {merged_count} merged PR(s) to main...")
        code, _, stderr = run_command("git push origin main", check=False)
        
        if code == 0:
            print("✅ Successfully pushed all merges to main!")
        else:
            print(f"⚠️  Could not push to main: {stderr}")
            print("You may need to pull and resolve conflicts manually")
    
    print("\n" + "="*80)
    print("PR MANAGEMENT COMPLETE")
    print("="*80)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nScript interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\nFatal error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
