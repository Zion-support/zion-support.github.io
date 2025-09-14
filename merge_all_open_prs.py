#!/usr/bin/env python3

import json
import subprocess
import time
import os

def get_open_prs():
    """Get list of open PRs from the JSON file"""
    try:
        with open('_open_prs.json', 'r') as f:
            prs = json.load(f)
        return [pr for pr in prs if pr.get('state') == 'open']
    except Exception as e:
        print(f"Error reading PRs: {e}")
        return []

def merge_pr_via_api(pr_number):
    """Merge a PR using GitHub API"""
    try:
        # This would require GitHub token, for now we'll use git commands
        print(f"Attempting to merge PR #{pr_number} via git...")
        
        # Try to fetch and merge the PR
        branch_name = f"pr-{pr_number}"
        
        # Fetch the PR
        result = subprocess.run([
            'git', 'fetch', 'origin', f'pull/{pr_number}/head:{branch_name}'
        ], capture_output=True, text=True, timeout=30)
        
        if result.returncode != 0:
            print(f"Failed to fetch PR #{pr_number}: {result.stderr}")
            return False
        
        # Try to merge
        result = subprocess.run([
            'git', 'merge', branch_name, '--no-ff', '-m', f'Merge PR #{pr_number}'
        ], capture_output=True, text=True, timeout=30)
        
        if result.returncode == 0:
            print(f"✅ Successfully merged PR #{pr_number}")
            # Clean up branch
            subprocess.run(['git', 'branch', '-D', branch_name], capture_output=True)
            return True
        else:
            print(f"❌ Failed to merge PR #{pr_number}: {result.stderr}")
            # Clean up branch
            subprocess.run(['git', 'branch', '-D', branch_name], capture_output=True)
            return False
            
    except subprocess.TimeoutExpired:
        print(f"⏰ Timeout merging PR #{pr_number}")
        return False
    except Exception as e:
        print(f"❌ Error merging PR #{pr_number}: {e}")
        return False

def merge_all_prs():
    """Merge all open PRs"""
    print("🚀 Starting comprehensive PR merge process")
    print("=" * 50)
    
    # Get open PRs
    open_prs = get_open_prs()
    print(f"Found {len(open_prs)} open PRs")
    
    if not open_prs:
        print("No open PRs found")
        return
    
    # Sort PRs by number
    open_prs.sort(key=lambda x: x.get('number', 0))
    
    successful_merges = 0
    failed_merges = 0
    
    for pr in open_prs:
        pr_number = pr.get('number')
        pr_title = pr.get('title', 'Unknown')
        
        print(f"\n📋 Processing PR #{pr_number}: {pr_title}")
        
        if merge_pr_via_api(pr_number):
            successful_merges += 1
        else:
            failed_merges += 1
        
        # Small delay between merges
        time.sleep(1)
    
    print(f"\n🎯 Merge Summary:")
    print(f"Total PRs processed: {len(open_prs)}")
    print(f"Successfully merged: {successful_merges}")
    print(f"Failed to merge: {failed_merges}")
    
    # Push all changes
    if successful_merges > 0:
        print("\n📤 Pushing all merged changes...")
        try:
            result = subprocess.run(['git', 'push', 'origin', 'main'], 
                                  capture_output=True, text=True, timeout=60)
            if result.returncode == 0:
                print("✅ Successfully pushed all changes")
            else:
                print(f"⚠️ Failed to push changes: {result.stderr}")
        except Exception as e:
            print(f"⚠️ Error pushing changes: {e}")

def main():
    print("🚀 Comprehensive PR Merge Process")
    print("=" * 50)
    
    # Ensure we're on main branch
    try:
        subprocess.run(['git', 'checkout', 'main'], check=True, timeout=10)
        print("✅ Switched to main branch")
    except:
        print("⚠️ Could not switch to main branch")
    
    # Pull latest changes
    try:
        subprocess.run(['git', 'pull', 'origin', 'main'], check=True, timeout=30)
        print("✅ Pulled latest changes")
    except:
        print("⚠️ Could not pull latest changes")
    
    # Merge all PRs
    merge_all_prs()
    
    print("\n🎉 PR merge process completed!")

if __name__ == "__main__":
    main()