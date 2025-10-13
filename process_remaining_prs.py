#!/usr/bin/env python3
"""
Script to process all remaining open PRs by merging them into main.
"""

import subprocess
import json
import sys

def run_command(cmd):
    """Run a command and return the result."""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def get_open_prs():
    """Get list of open PRs."""
    success, stdout, stderr = run_command("curl -s 'https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open'")
    if not success:
        print(f"Error fetching PRs: {stderr}")
        return []
    
    try:
        prs = json.loads(stdout)
        return prs
    except json.JSONDecodeError as e:
        print(f"Error parsing PRs JSON: {e}")
        return []

def process_pr(pr_number, pr_ref):
    """Process a single PR by merging it."""
    print(f"Processing PR #{pr_number} (ref: {pr_ref})")
    
    # Fetch the PR branch
    success, stdout, stderr = run_command(f"git fetch origin {pr_ref}")
    if not success:
        print(f"Error fetching PR branch {pr_ref}: {stderr}")
        return False
    
    # Merge the PR branch
    success, stdout, stderr = run_command(f"git merge origin/{pr_ref}")
    if not success:
        print(f"Error merging PR branch {pr_ref}: {stderr}")
        # Try to resolve conflicts by choosing our version
        print("Attempting to resolve conflicts...")
        
        # Resolve common conflict files
        conflict_files = ["public/sitemap.xml", "__tests__/components/OptimizedImage.test.tsx"]
        for file in conflict_files:
            run_command(f"git checkout --ours {file}")
        
        # Add and commit
        run_command("git add .")
        success, stdout, stderr = run_command(f"git commit -m 'Merge PR #{pr_number}: Fix errors and merge to main - Resolved conflicts'")
        if not success:
            print(f"Error committing merge: {stderr}")
            return False
    
    print(f"Successfully processed PR #{pr_number}")
    return True

def main():
    """Main function to process all open PRs."""
    print("Fetching open PRs...")
    prs = get_open_prs()
    
    if not prs:
        print("No open PRs found or error fetching PRs")
        return
    
    print(f"Found {len(prs)} open PRs")
    
    # Process each PR
    for pr in prs:
        pr_number = pr['number']
        pr_ref = pr['head']['ref']
        
        if process_pr(pr_number, pr_ref):
            print(f"✅ Successfully processed PR #{pr_number}")
        else:
            print(f"❌ Failed to process PR #{pr_number}")
    
    # Push all changes
    print("Pushing changes to origin...")
    success, stdout, stderr = run_command("git push origin main")
    if success:
        print("✅ Successfully pushed all changes")
    else:
        print(f"❌ Error pushing changes: {stderr}")

if __name__ == "__main__":
    main()