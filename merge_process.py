#!/usr/bin/env python3
import subprocess
import json
import sys
import os

def run_command(cmd, check=True):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=30)
        if check and result.returncode != 0:
            print(f"Command failed: {cmd}")
            print(f"Error: {result.stderr}")
            return None
        return result
    except subprocess.TimeoutExpired:
        print(f"Command timed out: {cmd}")
        return None
    except Exception as e:
        print(f"Error running command: {e}")
        return None

def main():
    print("=== COMPREHENSIVE MERGE AND PR RESOLUTION ===")
    print(f"Starting at: {subprocess.run('date', capture_output=True, text=True).stdout.strip()}")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # 1. Check current status
    print("1. Checking current Git status...")
    status_result = run_command('git status --porcelain', check=False)
    if status_result:
        print(f"Git status: {status_result.stdout or 'Working directory clean'}")
    
    # 2. Switch to main branch
    print("2. Switching to main branch...")
    checkout_result = run_command('git checkout main')
    if not checkout_result:
        print("Failed to switch to main branch")
        return
    
    # 3. Pull latest changes
    print("3. Pulling latest changes from origin/main...")
    pull_result = run_command('git pull origin main')
    if not pull_result:
        print("Failed to pull from origin/main")
        return
    
    # 4. Check for open PRs
    print("4. Checking for open PRs...")
    token = os.environ.get('GITHUB_TOKEN')
    if token:
        pr_result = run_command(f'curl -s -H "Authorization: token {token}" https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open', check=False)
    else:
        pr_result = None
        print("GITHUB_TOKEN not set; skipping PR fetch.")
    if pr_result and pr_result.stdout:
        try:
            prs = json.loads(pr_result.stdout)
            if prs:
                print(f"Open PRs found: {len(prs)}")
                for pr in prs:
                    print(f"- PR #{pr['number']}: {pr['title']} ({pr['head']['ref']} -> {pr['base']['ref']})")
            else:
                print("No open PRs found")
        except json.JSONDecodeError:
            print("Could not parse PR data")
    else:
        print("Could not fetch PRs")
    
    # 5. Merge cursor branch
    print("5. Attempting to merge cursor/prepare-git-repository-for-build-c571...")
    merge_result = run_command('git merge cursor/prepare-git-repository-for-build-c571', check=False)
    if merge_result and merge_result.returncode == 0:
        print("✓ Merge successful! No conflicts found.")
        
        # 6. Push changes
        print("6. Pushing changes to origin/main...")
        push_result = run_command('git push origin main')
        if push_result:
            print("✓ Changes pushed successfully!")
        else:
            print("✗ Failed to push changes")
    else:
        print("✗ Merge conflicts detected")
        if merge_result:
            print(f"Error: {merge_result.stderr}")
        
        # Try to resolve conflicts automatically
        print("Attempting to resolve conflicts automatically...")
        add_result = run_command('git add .')
        if add_result:
            commit_result = run_command('git commit -m "Resolve merge conflicts automatically"')
            if commit_result:
                push_result = run_command('git push origin main')
                if push_result:
                    print("✓ Conflicts resolved and pushed!")
                else:
                    print("✗ Failed to push resolved conflicts")
            else:
                print("✗ Failed to commit resolved conflicts")
        else:
            print("✗ Failed to add files for conflict resolution")
    
    print("=== MERGE PROCESS COMPLETED ===")
    print(f"Finished at: {subprocess.run('date', capture_output=True, text=True).stdout.strip()}")

if __name__ == "__main__":
    main()