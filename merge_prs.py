#!/usr/bin/env python3

import subprocess
import json
import requests
import time

def run_command(cmd):
    """Run a shell command and return the output"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def get_open_prs():
    """Get all open PRs"""
    url = "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    return []

def get_pr_details(pr_number):
    """Get details for a specific PR"""
    url = f"https://api.github.com/repos/Zion-Holdings/zion.app/pulls/{pr_number}"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    return None

def merge_pr(pr_number, head_ref):
    """Merge a PR into main"""
    print(f"Processing PR #{pr_number} with head ref: {head_ref}")
    
    # Fetch the branch
    success, stdout, stderr = run_command(f"git fetch origin {head_ref}")
    if not success:
        print(f"Failed to fetch branch {head_ref}: {stderr}")
        return False
    
    # Checkout the branch
    success, stdout, stderr = run_command(f"git checkout -b pr-{pr_number} origin/{head_ref}")
    if not success:
        # Try to checkout existing branch
        success, stdout, stderr = run_command(f"git checkout pr-{pr_number}")
        if not success:
            print(f"Failed to checkout branch {head_ref}: {stderr}")
            return False
    
    # Merge with main
    success, stdout, stderr = run_command("git merge main --no-edit")
    if not success:
        print(f"Merge conflict in PR #{pr_number}, resolving...")
        # Resolve conflicts by keeping main branch content
        run_command("git checkout --ours .")
        run_command("git add .")
        run_command(f"git commit -m 'Resolve merge conflicts - keep main branch content'")
    
    # Switch back to main and merge
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"Failed to checkout main: {stderr}")
        return False
    
    success, stdout, stderr = run_command(f"git merge pr-{pr_number} --no-edit")
    if not success:
        print(f"Failed to merge PR #{pr_number} into main: {stderr}")
        return False
    
    # Push to main
    success, stdout, stderr = run_command("git push origin main --force")
    if not success:
        print(f"Failed to push PR #{pr_number} to main: {stderr}")
        return False
    
    print(f"Successfully merged PR #{pr_number}")
    
    # Clean up
    run_command(f"git branch -D pr-{pr_number}")
    
    return True

def main():
    print("Starting to merge all open PRs...")
    
    # Get all open PRs
    prs = get_open_prs()
    if not prs:
        print("No open PRs found")
        return
    
    print(f"Found {len(prs)} open PRs")
    
    # Process each PR
    for pr in prs:
        pr_number = pr['number']
        head_ref = pr['head']['ref']
        
        try:
            success = merge_pr(pr_number, head_ref)
            if success:
                print(f"✅ Successfully merged PR #{pr_number}")
            else:
                print(f"❌ Failed to merge PR #{pr_number}")
        except Exception as e:
            print(f"❌ Error processing PR #{pr_number}: {e}")
        
        # Small delay to avoid rate limiting
        time.sleep(1)
    
    print("Finished processing all PRs")

if __name__ == "__main__":
    main()