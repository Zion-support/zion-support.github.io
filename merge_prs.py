#!/usr/bin/env python3

import requests
import json
import subprocess
import sys
import time

def get_open_prs():
    """Get all open PRs from GitHub API"""
    url = "https://api.github.com/repos/Zion-Holdings/zion.app/pulls"
    params = {"state": "open", "per_page": 100}
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching PRs: {e}")
        return []

def get_pr_details(pr_number):
    """Get detailed information about a specific PR"""
    url = f"https://api.github.com/repos/Zion-Holdings/zion.app/pulls/{pr_number}"
    
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching PR {pr_number}: {e}")
        return None

def run_git_command(command):
    """Run a git command and return the result"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def merge_pr(pr_number, head_ref, title):
    """Attempt to merge a PR"""
    print(f"Processing PR #{pr_number}: {title}")
    print(f"  Branch: {head_ref}")
    
    # Check if branch exists locally
    success, stdout, stderr = run_git_command(f"git show-ref --verify --quiet refs/heads/{head_ref}")
    if not success:
        print(f"  Fetching branch {head_ref}...")
        success, stdout, stderr = run_git_command(f"git fetch origin {head_ref}:{head_ref}")
        if not success:
            print(f"  ❌ Failed to fetch branch {head_ref}: {stderr}")
            return False
    
    # Try to merge
    print(f"  Attempting to merge {head_ref} into main...")
    success, stdout, stderr = run_git_command(f"git merge {head_ref} --no-edit")
    
    if success:
        print(f"  ✅ Successfully merged PR #{pr_number}")
        
        # Push the changes
        print("  Pushing changes...")
        success, stdout, stderr = run_git_command("git push origin main")
        if success:
            print(f"  ✅ Successfully pushed changes for PR #{pr_number}")
        else:
            print(f"  ⚠️  Failed to push changes for PR #{pr_number}: {stderr}")
        return True
    else:
        print(f"  ❌ Failed to merge PR #{pr_number} - resolving conflicts...")
        
        # Check for conflicts
        success, stdout, stderr = run_git_command("git status --porcelain")
        if "UU" in stdout or "AA" in stdout or "DD" in stdout:
            print("  Resolving conflicts automatically...")
            
            # For sitemap conflicts, use the newer version
            if "public/sitemap.xml" in stdout:
                print("  Resolving sitemap conflict...")
                run_git_command("git checkout --ours public/sitemap.xml")
                run_git_command("git add public/sitemap.xml")
            
            # For other conflicts, try to resolve automatically
            run_git_command("git add .")
            
            # Complete the merge
            success, stdout, stderr = run_git_command("git commit --no-edit")
            if success:
                print(f"  ✅ Resolved conflicts and merged PR #{pr_number}")
                
                # Push the changes
                success, stdout, stderr = run_git_command("git push origin main")
                if success:
                    print(f"  ✅ Successfully pushed resolved changes for PR #{pr_number}")
                else:
                    print(f"  ⚠️  Failed to push resolved changes for PR #{pr_number}: {stderr}")
                return True
            else:
                print(f"  ❌ Could not resolve conflicts for PR #{pr_number}: {stderr}")
                run_git_command("git merge --abort")
                return False
        else:
            print(f"  ❌ Merge failed for PR #{pr_number} (no conflicts detected): {stderr}")
            run_git_command("git merge --abort")
            return False

def main():
    print("Starting PR merge process...")
    
    # Get all open PRs
    prs = get_open_prs()
    if not prs:
        print("No open PRs found.")
        return
    
    print(f"Found {len(prs)} open PRs")
    
    # Counter for tracking
    count = 0
    success = 0
    failed = 0
    
    # Process each PR
    for pr in prs:
        count += 1
        pr_number = pr['number']
        head_ref = pr['head']['ref']
        title = pr['title']
        
        print(f"\n--- Processing PR #{pr_number} ({count}/{len(prs)}) ---")
        
        if merge_pr(pr_number, head_ref, title):
            success += 1
        else:
            failed += 1
        
        print("  ---")
        
        # Add a small delay to avoid rate limiting
        time.sleep(1)
    
    print(f"\nPR merge process completed!")
    print(f"Total PRs processed: {count}")
    print(f"Successfully merged: {success}")
    print(f"Failed to merge: {failed}")

if __name__ == "__main__":
    main()