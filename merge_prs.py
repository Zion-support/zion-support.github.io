#!/usr/bin/env python3
"""
Script to merge all open PRs into main branch using GitHub API
"""

import json
import subprocess
import sys
import os

def run_command(cmd, check=True):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        return False, e.stdout, e.stderr

def main():
    print("🚀 Starting PR merge process...")
    
    # Read the open PRs from the JSON file
    try:
        with open('open_prs.json', 'r') as f:
            prs = json.load(f)
    except FileNotFoundError:
        print("❌ Could not find open_prs.json file")
        return 1
    
    print(f"📋 Found {len(prs)} open PRs to process")
    
    # Process each PR
    for i, pr in enumerate(prs, 1):
        pr_number = pr['number']
        pr_title = pr['title']
        branch_name = pr['head']['ref']
        is_draft = pr.get('draft', False)
        
        print(f"\n📝 Processing PR #{pr_number}: {pr_title}")
        print(f"   Branch: {branch_name}")
        print(f"   Draft: {is_draft}")
        
        # Process draft PRs as well since user wants to merge all open PRs
        if is_draft:
            print(f"   📝 PR #{pr_number} is a draft - processing anyway")
        
        # Try to merge the PR
        print(f"   🔄 Attempting to merge PR #{pr_number}...")
        
        # First, let's try to checkout the branch and merge it
        checkout_cmd = f"git checkout origin/{branch_name}"
        success, stdout, stderr = run_command(checkout_cmd, check=False)
        
        if not success:
            print(f"   ❌ Could not checkout branch {branch_name}: {stderr}")
            continue
        
        # Try to merge into main
        merge_cmd = "git checkout main && git merge --no-ff origin/{branch_name} -m 'Merge PR #{pr_number}: {pr_title}'"
        success, stdout, stderr = run_command(merge_cmd, check=False)
        
        if success:
            print(f"   ✅ Successfully merged PR #{pr_number}")
        else:
            print(f"   ❌ Failed to merge PR #{pr_number}: {stderr}")
            # Try to abort the merge
            run_command("git merge --abort", check=False)
    
    print("\n🎉 PR merge process completed!")
    return 0

if __name__ == "__main__":
    sys.exit(main())