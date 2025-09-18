#!/usr/bin/env python3
"""
Script to process open PRs, resolve conflicts, and merge them into main branch.
"""

import json
import subprocess
import sys
import os
from typing import List, Dict

def run_command(cmd: str, cwd: str = None) -> tuple[int, str, str]:
    """Run a command and return exit code, stdout, stderr."""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            capture_output=True, 
            text=True, 
            cwd=cwd or "/workspace"
        )
        return result.returncode, result.stdout, result.stderr
    except Exception as e:
        return 1, "", str(e)

def load_open_prs() -> List[Dict]:
    """Load open PRs from the JSON file."""
    try:
        with open('/workspace/_open_prs.json', 'r') as f:
            all_prs = json.load(f)
        
        # Filter only open PRs
        open_prs = [pr for pr in all_prs if pr.get('state') == 'open']
        return open_prs
    except Exception as e:
        print(f"Error loading PRs: {e}")
        return []

def get_pr_branch_name(pr: Dict) -> str:
    """Extract branch name from PR."""
    return pr['head']['ref']

def check_branch_exists(branch_name: str) -> bool:
    """Check if branch exists locally or remotely."""
    exit_code, stdout, stderr = run_command(f"git branch -r | grep '{branch_name}'")
    return exit_code == 0 and branch_name in stdout

def fetch_branch(branch_name: str) -> bool:
    """Fetch the branch from remote."""
    print(f"Fetching branch: {branch_name}")
    exit_code, stdout, stderr = run_command(f"git fetch origin {branch_name}")
    if exit_code != 0:
        print(f"Error fetching branch {branch_name}: {stderr}")
        return False
    return True

def checkout_branch(branch_name: str) -> bool:
    """Checkout the branch."""
    print(f"Checking out branch: {branch_name}")
    exit_code, stdout, stderr = run_command(f"git checkout {branch_name}")
    if exit_code != 0:
        print(f"Error checking out branch {branch_name}: {stderr}")
        return False
    return True

def merge_main_into_branch(branch_name: str) -> tuple[bool, str]:
    """Merge main into the branch to resolve conflicts."""
    print(f"Merging main into {branch_name}")
    exit_code, stdout, stderr = run_command("git merge main")
    
    if exit_code == 0:
        return True, "Merge successful"
    else:
        # Check if there are conflicts
        exit_code_conflicts, _, _ = run_command("git status --porcelain | grep '^UU\\|^AA\\|^DD'")
        if exit_code_conflicts == 0:
            return False, "Merge conflicts detected"
        else:
            return False, f"Merge failed: {stderr}"

def resolve_conflicts_automatically() -> bool:
    """Try to resolve conflicts automatically."""
    print("Attempting automatic conflict resolution...")
    
    # Get list of conflicted files
    exit_code, stdout, stderr = run_command("git status --porcelain | grep '^UU\\|^AA\\|^DD' | awk '{print $2}'")
    if exit_code != 0 or not stdout.strip():
        return False
    
    conflicted_files = stdout.strip().split('\n')
    print(f"Conflicted files: {conflicted_files}")
    
    resolved_count = 0
    for file_path in conflicted_files:
        if not file_path.strip():
            continue
            
        print(f"Processing conflicted file: {file_path}")
        
        # Try to resolve common conflicts automatically
        if resolve_file_conflicts(file_path):
            resolved_count += 1
    
    return resolved_count > 0

def resolve_file_conflicts(file_path: str) -> bool:
    """Resolve conflicts in a specific file."""
    try:
        with open(file_path, 'r') as f:
            content = f.read()
        
        # Simple conflict resolution strategies
        if '            # For most files, prefer the HEAD version (main branch)
            lines = content.split('\n')
            new_lines = []
            skip_until_marker = False
            
            for line in lines:
                if '                    skip_until_marker = False
                    continue
                elif '                    skip_until_marker = True
                    continue
                elif '>>>>>>>' in line:
                    skip_until_marker = False
                    continue
                
                if not skip_until_marker:
                    new_lines.append(line)
            
            # Write the resolved content
            with open(file_path, 'w') as f:
                f.write('\n'.join(new_lines))
            
            print(f"Resolved conflicts in {file_path}")
            return True
    
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
    
    return False

def commit_resolved_conflicts() -> bool:
    """Commit the resolved conflicts."""
    print("Committing resolved conflicts...")
    exit_code, stdout, stderr = run_command("git add .")
    if exit_code != 0:
        print(f"Error adding files: {stderr}")
        return False
    
    exit_code, stdout, stderr = run_command('git commit -m "Resolve merge conflicts automatically"')
    if exit_code != 0:
        print(f"Error committing: {stderr}")
        return False
    
    return True

def push_branch(branch_name: str) -> bool:
    """Push the branch back to remote."""
    print(f"Pushing branch: {branch_name}")
    exit_code, stdout, stderr = run_command(f"git push origin {branch_name}")
    if exit_code != 0:
        print(f"Error pushing branch {branch_name}: {stderr}")
        return False
    return True

def merge_pr_to_main(branch_name: str, pr_number: int) -> bool:
    """Merge the PR branch into main."""
    print(f"Merging PR #{pr_number} ({branch_name}) into main...")
    
    # Switch to main branch
    exit_code, _, stderr = run_command("git checkout main")
    if exit_code != 0:
        print(f"Error switching to main: {stderr}")
        return False
    
    # Pull latest main
    exit_code, _, stderr = run_command("git pull origin main")
    if exit_code != 0:
        print(f"Error pulling main: {stderr}")
        return False
    
    # Merge the branch
    exit_code, stdout, stderr = run_command(f"git merge {branch_name}")
    if exit_code != 0:
        print(f"Error merging {branch_name}: {stderr}")
        return False
    
    # Push to main
    exit_code, _, stderr = run_command("git push origin main")
    if exit_code != 0:
        print(f"Error pushing main: {stderr}")
        return False
    
    print(f"Successfully merged PR #{pr_number} ({branch_name}) into main")
    return True

def process_pr(pr: Dict) -> bool:
    """Process a single PR."""
    pr_number = pr['number']
    branch_name = get_pr_branch_name(pr)
    title = pr['title']
    
    print(f"\n{'='*60}")
    print(f"Processing PR #{pr_number}: {title}")
    print(f"Branch: {branch_name}")
    print(f"{'='*60}")
    
    # Fetch and checkout the branch
    if not fetch_branch(branch_name):
        print(f"Failed to fetch branch {branch_name}")
        return False
    
    if not checkout_branch(branch_name):
        print(f"Failed to checkout branch {branch_name}")
        return False
    
    # Try to merge main into the branch
    merge_success, merge_message = merge_main_into_branch(branch_name)
    
    if not merge_success:
        if "Merge conflicts detected" in merge_message:
            print("Merge conflicts detected, attempting resolution...")
            
            # Try to resolve conflicts automatically
            if resolve_conflicts_automatically():
                if commit_resolved_conflicts():
                    # Push the resolved branch
                    if push_branch(branch_name):
                        print(f"Successfully resolved and pushed conflicts for {branch_name}")
                    else:
                        print(f"Failed to push resolved branch {branch_name}")
                        return False
                else:
                    print(f"Failed to commit resolved conflicts for {branch_name}")
                    return False
            else:
                print(f"Failed to resolve conflicts automatically for {branch_name}")
                return False
        else:
            print(f"Merge failed: {merge_message}")
            return False
    
    # Now merge the PR into main
    if merge_pr_to_main(branch_name, pr_number):
        # Clean up the branch
        run_command(f"git branch -d {branch_name}")
        run_command(f"git push origin --delete {branch_name}")
        return True
    else:
        print(f"Failed to merge PR #{pr_number} into main")
        return False

def main():
    """Main function to process all open PRs."""
    print("Starting PR processing...")
    
    # Ensure we're in the right directory
    os.chdir('/workspace')
    
    # Load open PRs
    open_prs = load_open_prs()
    if not open_prs:
        print("No open PRs found")
        return
    
    print(f"Found {len(open_prs)} open PRs")
    
    # Sort PRs by number (oldest first)
    open_prs.sort(key=lambda x: x['number'])
    
    successful_merges = 0
    failed_merges = 0
    
    for pr in open_prs:
        try:
            if process_pr(pr):
                successful_merges += 1
            else:
                failed_merges += 1
        except Exception as e:
            print(f"Error processing PR #{pr['number']}: {e}")
            failed_merges += 1
    
    print(f"\n{'='*60}")
    print("PR Processing Summary:")
    print(f"Successful merges: {successful_merges}")
    print(f"Failed merges: {failed_merges}")
    print(f"Total PRs processed: {len(open_prs)}")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()