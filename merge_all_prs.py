#!/usr/bin/env python3
"""
Script to automatically merge all open PRs
"""
import subprocess
import json
import sys
import time

def run_command(cmd, cwd='/workspace'):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=cwd)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def get_open_prs():
    """Get all open PRs"""
    success, stdout, stderr = run_command('gh pr list --state open --json number,title,headRefName,baseRefName,mergeable,mergeStateStatus')
    if not success:
        print(f"Error getting PRs: {stderr}")
        return []
    
    try:
        return json.loads(stdout)
    except json.JSONDecodeError as e:
        print(f"Error parsing PR data: {e}")
        return []

def merge_pr(pr_number, pr_title):
    """Merge a single PR"""
    print(f"\nProcessing PR #{pr_number}: {pr_title}")
    
    # First, try to merge directly
    success, stdout, stderr = run_command(f'gh pr merge {pr_number} --merge --delete-branch')
    if success:
        print(f"✅ Successfully merged PR #{pr_number}")
        return True
    
    # If direct merge fails, try to merge the branch manually
    print(f"Direct merge failed, trying manual merge for PR #{pr_number}")
    
    # Get the branch name
    success, stdout, stderr = run_command(f'gh pr view {pr_number} --json headRefName')
    if not success:
        print(f"Error getting branch name for PR #{pr_number}: {stderr}")
        return False
    
    try:
        pr_data = json.loads(stdout)
        branch_name = pr_data['headRefName']
    except (json.JSONDecodeError, KeyError) as e:
        print(f"Error parsing PR data for #{pr_number}: {e}")
        return False
    
    # Fetch the branch
    success, stdout, stderr = run_command(f'git fetch origin {branch_name}')
    if not success:
        print(f"Error fetching branch {branch_name}: {stderr}")
        return False
    
    # Try to merge
    success, stdout, stderr = run_command(f'git merge origin/{branch_name}')
    if not success:
        print(f"Merge conflict for PR #{pr_number}, resolving automatically...")
        
        # Run conflict resolution script
        success, stdout, stderr = run_command('python3 resolve_conflicts.py')
        if not success:
            print(f"Error resolving conflicts for PR #{pr_number}: {stderr}")
            return False
        
        # Add and commit resolved conflicts
        success, stdout, stderr = run_command('git add .')
        if not success:
            print(f"Error adding resolved files for PR #{pr_number}: {stderr}")
            return False
        
        success, stdout, stderr = run_command(f'git commit -m "Resolve conflicts for PR #{pr_number}: {pr_title}"')
        if not success:
            print(f"Error committing resolved conflicts for PR #{pr_number}: {stderr}")
            return False
    
    # Push changes
    success, stdout, stderr = run_command('git push origin main')
    if not success:
        print(f"Error pushing changes for PR #{pr_number}: {stderr}")
        return False
    
    print(f"✅ Successfully merged PR #{pr_number} manually")
    return True

def main():
    print("Starting automatic PR merge process...")
    
    # Get all open PRs
    prs = get_open_prs()
    if not prs:
        print("No open PRs found.")
        return
    
    print(f"Found {len(prs)} open PRs:")
    for pr in prs:
        print(f"  - PR #{pr['number']}: {pr['title']} ({pr['headRefName']})")
    
    # Process each PR
    successful_merges = 0
    failed_merges = 0
    
    for pr in prs:
        pr_number = pr['number']
        pr_title = pr['title']
        
        try:
            if merge_pr(pr_number, pr_title):
                successful_merges += 1
            else:
                failed_merges += 1
        except Exception as e:
            print(f"Error processing PR #{pr_number}: {e}")
            failed_merges += 1
        
        # Small delay between merges
        time.sleep(2)
    
    print(f"\nMerge process completed:")
    print(f"  ✅ Successful merges: {successful_merges}")
    print(f"  ❌ Failed merges: {failed_merges}")
    print(f"  📊 Total processed: {len(prs)}")

if __name__ == "__main__":
    main()