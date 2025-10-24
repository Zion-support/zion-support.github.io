#!/usr/bin/env python3
import subprocess
import sys
import time

def get_open_prs():
    """Get list of open PRs"""
    result = subprocess.run(['gh', 'pr', 'list', '--state', 'open', '--json', 'number,title,headRefName'], capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error getting PRs: {result.stderr}")
        return []
    
    import json
    prs = json.loads(result.stdout)
    return prs

def process_pr(pr_number, branch_name):
    """Process a single PR"""
    print(f"\n=== Processing PR #{pr_number} ({branch_name}) ===")
    
    try:
        # Checkout the branch
        print(f"Checking out branch: {branch_name}")
        result = subprocess.run(['git', 'checkout', branch_name], capture_output=True, text=True)
        if result.returncode != 0:
            print(f"Error checking out branch: {result.stderr}")
            return False
        
        # Merge main into the branch
        print("Merging main into branch...")
        result = subprocess.run(['git', 'merge', 'main'], capture_output=True, text=True)
        
        if result.returncode != 0:
            if "CONFLICT" in result.stdout or "conflict" in result.stdout.lower():
                print("Merge conflicts detected, resolving...")
                
                # Run our conflict resolution script
                result = subprocess.run(['python3', 'resolve_conflicts.py'], capture_output=True, text=True)
                if result.returncode != 0:
                    print(f"Error resolving conflicts: {result.stderr}")
                    return False
                
                # Commit the resolved conflicts
                result = subprocess.run(['git', 'commit', '-m', 'Resolve merge conflicts by choosing main branch version'], capture_output=True, text=True)
                if result.returncode != 0:
                    print(f"Error committing resolved conflicts: {result.stderr}")
                    return False
            else:
                print(f"Error merging: {result.stderr}")
                return False
        
        # Push the updated branch
        print("Pushing updated branch...")
        result = subprocess.run(['git', 'push', 'origin', branch_name], capture_output=True, text=True)
        if result.returncode != 0:
            print(f"Error pushing branch: {result.stderr}")
            return False
        
        # Try to merge the PR
        print("Attempting to merge PR...")
        result = subprocess.run(['gh', 'pr', 'merge', str(pr_number), '--merge', '--delete-branch'], capture_output=True, text=True)
        if result.returncode != 0:
            print(f"Error merging PR: {result.stderr}")
            return False
        
        print(f"Successfully merged PR #{pr_number}")
        return True
        
    except Exception as e:
        print(f"Error processing PR #{pr_number}: {e}")
        return False

def main():
    print("Getting list of open PRs...")
    prs = get_open_prs()
    
    if not prs:
        print("No open PRs found")
        return
    
    print(f"Found {len(prs)} open PRs")
    
    # Process each PR
    successful = 0
    failed = 0
    
    for pr in prs:
        pr_number = pr['number']
        branch_name = pr['headRefName']
        
        if process_pr(pr_number, branch_name):
            successful += 1
        else:
            failed += 1
        
        # Small delay between PRs
        time.sleep(2)
    
    print(f"\n=== Summary ===")
    print(f"Successfully processed: {successful}")
    print(f"Failed: {failed}")

if __name__ == "__main__":
    main()