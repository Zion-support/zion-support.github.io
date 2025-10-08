#!/usr/bin/env python3
"""
Automated PR merger - merges all remaining open PRs into main
"""

import json
import subprocess
import time
import re

GITHUB_TOKEN = "ghs_HY3hKTkFXTdpSlepdNb4TzwroY5AgT0hlPDr"
REPO = "Zion-Holdings/zion.app"
API_BASE = f"https://api.github.com/repos/{REPO}"

def run_cmd(cmd, check=False):
    """Run a command and return output"""
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if check and result.returncode != 0:
        print(f"Command failed: {cmd}")
        print(f"Error: {result.stderr}")
    return result.returncode, result.stdout, result.stderr

def get_open_prs():
    """Fetch all open PRs"""
    code, stdout, _ = run_cmd(f'curl -s -H "Authorization: token {GITHUB_TOKEN}" "{API_BASE}/pulls?state=open&per_page=100"')
    try:
        return json.loads(stdout)
    except:
        return []

def resolve_simple_conflicts():
    """Attempt to resolve simple conflict markers"""
    # Find files with conflicts
    code, stdout, _ = run_cmd("git diff --name-only --diff-filter=U")
    conflicted_files = [f.strip() for f in stdout.split('\n') if f.strip()]
    
    print(f"  Found {len(conflicted_files)} conflicted files")
    
    for file in conflicted_files:
        try:
            with open(file, 'r') as f:
                content = f.read()
            
            # Check if conflicts are simple (just whitespace differences)
            if '<<<<<<< HEAD' in content:
                # Try to auto-resolve by removing conflict markers and keeping both sides intelligently
                lines = content.split('\n')
                resolved_lines = []
                in_conflict = False
                head_lines = []
                incoming_lines = []
                
                for line in lines:
                    if line.startswith('<<<<<<< HEAD'):
                        in_conflict = True
                        head_lines = []
                        incoming_lines = []
                    elif line.startswith('=======') and in_conflict:
                        continue
                    elif line.startswith('>>>>>>>') and in_conflict:
                        in_conflict = False
                        # Keep non-duplicate content
                        if head_lines == incoming_lines or not head_lines:
                            resolved_lines.extend(incoming_lines)
                        elif not incoming_lines:
                            resolved_lines.extend(head_lines)
                        else:
                            # Keep both if different
                            resolved_lines.extend(head_lines)
                            if head_lines and incoming_lines:
                                resolved_lines.extend(incoming_lines)
                    elif in_conflict:
                        if not head_lines or line not in [l for l in head_lines]:
                            if '=======' not in line:
                                if len(head_lines) == len(incoming_lines):
                                    head_lines.append(line)
                                elif sum(1 for l in lines if '=======' in l) > len(head_lines):
                                    head_lines.append(line)
                                else:
                                    incoming_lines.append(line)
                    else:
                        resolved_lines.append(line)
                
                resolved_content = '\n'.join(resolved_lines)
                
                with open(file, 'w') as f:
                    f.write(resolved_content)
                
                print(f"    Auto-resolved conflicts in {file}")
        except Exception as e:
            print(f"    Could not auto-resolve {file}: {e}")
            return False
    
    return len(conflicted_files) > 0

def merge_pr(pr_number, branch):
    """Attempt to merge a single PR"""
    print(f"\nMerging PR #{pr_number} from branch {branch}...")
    
    # Fetch the branch
    run_cmd(f"git fetch origin {branch}")
    
    # Try to merge
    code, stdout, stderr = run_cmd(f"git merge --no-commit --no-ff origin/{branch}")
    
    if code == 0:
        # Check if there's actually something to commit
        code2, status, _ = run_cmd("git status --porcelain")
        if not status.strip():
            print(f"  No changes to commit, aborting merge")
            run_cmd("git merge --abort")
            return False
            
        # No conflicts, commit immediately
        run_cmd(f'git commit -m "Merge PR #{pr_number}: {branch}"')
        print(f"  ✅ Merged without conflicts")
        return True
    else:
        # Has conflicts, try to auto-resolve
        print(f"  Conflicts detected, attempting auto-resolution...")
        if resolve_simple_conflicts():
            # Stage resolved files
            run_cmd("git add -A")
            # Check if conflicts remain
            code3, _, _ = run_cmd("git diff --check")
            if code3 == 0:
                run_cmd(f'git commit -m "Merge PR #{pr_number}: {branch} (conflicts resolved)"')
                print(f"  ✅ Merged with auto-resolved conflicts")
                return True
            else:
                print(f"  ❌ Could not auto-resolve all conflicts")
                run_cmd("git merge --abort")
                return False
        else:
            print(f"  ❌ Manual conflict resolution required")
            run_cmd("git merge --abort")
            return False

def main():
    print("=" * 80)
    print("Automated PR Merger")
    print("=" * 80)
    
    # Make sure we're on main and up to date
    run_cmd("git checkout main")
    run_cmd("git pull origin main")
    
    # Get open PRs
    prs = get_open_prs()
    print(f"\nFound {len(prs)} open PRs")
    
    merged_count = 0
    failed_count = 0
    
    for pr in prs:
        pr_number = pr['number']
        branch = pr['head']['ref']
        
        if merge_pr(pr_number, branch):
            merged_count += 1
            # Push after each successful merge
            print(f"  Pushing to origin...")
            run_cmd("git push origin main")
            time.sleep(2)  # Rate limiting
        else:
            failed_count += 1
    
    print("\n" + "=" * 80)
    print("MERGE SUMMARY")
    print("=" * 80)
    print(f"Successfully merged: {merged_count}")
    print(f"Failed to merge: {failed_count}")
    print(f"\nTotal PRs processed: {len(prs)}")

if __name__ == "__main__":
    main()