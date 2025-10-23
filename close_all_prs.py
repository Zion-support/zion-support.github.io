#!/usr/bin/env python3
"""
Close all open PRs and clean up the repository
This script will close all open PRs without merging them
"""

import subprocess
import sys
import json

def run_command(cmd, check=True):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        print(f"Command failed: {cmd}")
        print(f"Error: {e.stderr}")
        return None, e.stderr

def get_open_prs():
    """Get list of open PRs"""
    stdout, stderr = run_command("gh pr list --state open --json number,title,headRefName")
    if not stdout:
        print("No open PRs found")
        return []
    
    try:
        prs = json.loads(stdout)
        return prs
    except json.JSONDecodeError:
        print("Failed to parse PR list")
        return []

def close_pr(pr_number, pr_title, branch_name):
    """Close a single PR"""
    print(f"\n🔒 Closing PR #{pr_number}: {pr_title}")
    
    # Close the PR
    stdout, stderr = run_command(f"gh pr close {pr_number} --delete-branch")
    if stderr and "not found" not in stderr:
        print(f"❌ Failed to close PR #{pr_number}: {stderr}")
        return False
    
    print(f"✅ PR #{pr_number} closed successfully!")
    return True

def main():
    """Main function"""
    print("🚀 PR Cleanup Tool")
    print("=" * 50)
    
    # Get open PRs
    prs = get_open_prs()
    if not prs:
        print("No open PRs to close")
        return
    
    print(f"📋 Found {len(prs)} open PRs to close")
    
    # Process each PR
    successful = 0
    failed = 0
    
    for pr in prs:
        try:
            if close_pr(pr['number'], pr['title'], pr['headRefName']):
                successful += 1
            else:
                failed += 1
        except Exception as e:
            print(f"❌ Error processing PR #{pr['number']}: {e}")
            failed += 1
    
    print(f"\n🎉 PR cleanup completed!")
    print(f"✅ Successful: {successful}")
    print(f"❌ Failed: {failed}")

if __name__ == "__main__":
    main()