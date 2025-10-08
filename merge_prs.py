#!/usr/bin/env python3
"""
Script to merge all open PRs into main branch
"""

import subprocess
import sys
import json

# GitHub API configuration
GITHUB_TOKEN = "ghs_zt537J9SHK92qBViUAdhjEtLWqNYwH0po8A9"
REPO = "Zion-Holdings/zion.app"

def run_command(cmd, check=True):
    """Run a shell command and return output"""
    try:
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=True,
            text=True,
            check=check
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        return False, e.stdout, e.stderr

def get_open_prs():
    """Get list of open PRs from GitHub"""
    cmd = f'curl -s -H "Authorization: token {GITHUB_TOKEN}" "https://api.github.com/repos/{REPO}/pulls?state=open&per_page=100"'
    success, stdout, stderr = run_command(cmd, check=False)
    
    if not success:
        print(f"Error getting PRs: {stderr}")
        return []
    
    try:
        prs = json.loads(stdout)
        return [(pr['number'], pr['head']['ref'], pr['title']) for pr in prs]
    except json.JSONDecodeError:
        print(f"Error parsing PR data")
        return []

def merge_pr(pr_num, branch_name, title):
    """Attempt to merge a single PR"""
    print(f"\n{'='*60}")
    print(f"Processing PR #{pr_num}: {title[:40]}...")
    print(f"Branch: {branch_name}")
    print(f"{'='*60}")
    
    # Try to merge
    success, stdout, stderr = run_command(f"git merge --no-edit origin/{branch_name}", check=False)
    
    if success:
        print(f"✓ Successfully merged PR #{pr_num}")
        return "merged"
    
    # Check if there are conflicts
    success, stdout, stderr = run_command("git diff --name-only --diff-filter=U", check=False)
    conflicted_files = stdout.strip().split('\n') if stdout.strip() else []
    
    if conflicted_files:
        print(f"⚠ Merge conflicts detected in {len(conflicted_files)} files")
        print("Attempting auto-resolution...")
        
        # Try to auto-resolve by accepting theirs
        for file in conflicted_files:
            if file:
                run_command(f'git checkout --theirs "{file}"', check=False)
                run_command(f'git add "{file}"', check=False)
        
        # Complete the merge
        success, stdout, stderr = run_command("git commit --no-edit", check=False)
        if success:
            print(f"✓ Auto-resolved and merged PR #{pr_num}")
            return "resolved"
        else:
            print(f"✗ Failed to auto-resolve PR #{pr_num}")
            run_command("git merge --abort", check=False)
            return "conflict"
    else:
        print(f"✗ Failed to merge PR #{pr_num}: {stderr[:200]}")
        run_command("git merge --abort", check=False)
        return "error"

def main():
    print("Starting PR merge process...")
    print("="*60)
    
    # Ensure we're on main
    run_command("git checkout main")
    run_command("git pull origin main")
    
    # Get open PRs
    prs = get_open_prs()
    print(f"\nFound {len(prs)} open PRs")
    
    if not prs:
        print("No open PRs found or error getting PRs")
        return
    
    # Merge statistics
    stats = {"merged": 0, "resolved": 0, "conflict": 0, "error": 0}
    
    # Merge each PR
    for pr_num, branch_name, title in prs:
        result = merge_pr(pr_num, branch_name, title)
        stats[result] = stats.get(result, 0) + 1
    
    # Print summary
    print("\n" + "="*60)
    print("MERGE SUMMARY")
    print("="*60)
    print(f"✓ Successfully merged: {stats['merged']}")
    print(f"✓ Auto-resolved: {stats['resolved']}")
    print(f"⚠ Conflicts (unresolved): {stats['conflict']}")
    print(f"✗ Errors: {stats['error']}")
    print("="*60)
    
    # Push if we merged anything
    if stats['merged'] + stats['resolved'] > 0:
        print("\nPushing changes to main...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print("✓ Successfully pushed changes to main")
        else:
            print(f"✗ Failed to push changes: {stderr[:200]}")
            sys.exit(1)
    
    print("\nDone!")

if __name__ == "__main__":
    main()