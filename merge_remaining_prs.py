#!/usr/bin/env python3
"""
Aggressive PR merger to handle remaining open PRs with conflict resolution
"""

import subprocess
import json
import sys
import time

def run_command(cmd, check=True, timeout=60):
    """Run a command and return the result"""
    print(f"→ {cmd}")
    try:
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=True,
            text=True,
            timeout=timeout
        )
        if result.stdout:
            print(result.stdout)
        if result.stderr and result.returncode != 0:
            print(f"Error: {result.stderr}")
        return result.returncode == 0, result.stdout.strip()
    except subprocess.TimeoutExpired:
        print(f"⚠ Command timed out")
        return False, ""
    except Exception as e:
        print(f"⚠ Exception: {e}")
        return False, ""

def get_open_prs():
    """Get all open PRs"""
    success, output = run_command("gh pr list --state open --json number,title,headRefName,mergeable")
    if not success:
        return []
    
    try:
        return json.loads(output)
    except json.JSONDecodeError:
        return []

def merge_pr_with_conflict_resolution(pr_number, title, branch):
    """Merge PR with automatic conflict resolution"""
    print(f"\n🔄 Processing PR #{pr_number}: {title}")
    print(f"Branch: {branch}")
    
    # Checkout the PR branch
    success, _ = run_command(f"gh pr checkout {pr_number}", check=False)
    if not success:
        print(f"❌ Failed to checkout PR #{pr_number}")
        return False
    
    # Fetch latest main
    run_command("git fetch origin main", check=False)
    
    # Try to merge main into the branch
    success, _ = run_command("git merge origin/main --no-edit", check=False)
    if not success:
        print("⚠ Merge conflicts detected, resolving automatically...")
        
        # Get list of conflicted files
        success, conflicts = run_command("git diff --name-only --diff-filter=U", check=False)
        if conflicts:
            conflict_files = conflicts.split('\n')
            for file in conflict_files:
                if file.strip():
                    print(f"  Resolving conflicts in {file}...")
                    # Use ours (main branch) for most files
                    run_command(f"git checkout --ours {file}", check=False)
                    run_command(f"git add {file}", check=False)
            
            # Commit the resolved conflicts
            run_command('git commit -m "Resolve merge conflicts automatically"', check=False)
            print("✅ Conflicts resolved")
    
    # Push the updated branch
    run_command(f"git push origin {branch}", check=False)
    
    # Switch back to main
    run_command("git checkout main", check=False)
    
    # Now try to merge the PR
    success, _ = run_command(f"gh pr merge {pr_number} --merge --delete-branch", check=False)
    if success:
        print(f"✅ Successfully merged PR #{pr_number}")
        return True
    else:
        print(f"❌ Failed to merge PR #{pr_number}")
        return False

def main():
    print("🚀 Starting aggressive PR merge process...")
    print("="*70)
    
    # Ensure we're on main and up to date
    run_command("git checkout main", check=False)
    run_command("git pull origin main", check=False)
    
    # Get all open PRs
    prs = get_open_prs()
    print(f"📊 Found {len(prs)} open PRs")
    
    if not prs:
        print("❌ No open PRs found")
        return
    
    # Sort by PR number (oldest first)
    prs.sort(key=lambda x: x['number'])
    
    merged_count = 0
    failed_count = 0
    
    for pr in prs:
        pr_number = pr['number']
        title = pr['title']
        branch = pr['headRefName']
        
        print(f"\n{'='*50}")
        print(f"Processing PR #{pr_number}")
        
        try:
            if merge_pr_with_conflict_resolution(pr_number, title, branch):
                merged_count += 1
            else:
                failed_count += 1
        except Exception as e:
            print(f"❌ Error processing PR #{pr_number}: {e}")
            failed_count += 1
        
        # Small delay between PRs
        time.sleep(1)
    
    print(f"\n{'='*70}")
    print(f"📊 Final Summary:")
    print(f"✅ Successfully merged: {merged_count}")
    print(f"❌ Failed to merge: {failed_count}")
    print(f"📋 Total processed: {len(prs)}")
    
    # Pull latest changes
    print("\n🔄 Pulling latest changes...")
    run_command("git pull origin main", check=False)
    
    print("\n🎉 PR merge process completed!")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nInterrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\nFatal error: {e}")
        sys.exit(1)