#!/usr/bin/env python3
"""
Comprehensive script to merge all open PRs and resolve conflicts
"""

import subprocess
import json
import sys
import os
from typing import List, Dict, Any

def run_command(cmd: str, check: bool = True) -> subprocess.CompletedProcess:
    """Run a command and return the result"""
    print(f"Running: {cmd}")
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if check and result.returncode != 0:
        print(f"Error running command: {cmd}")
        print(f"Error output: {result.stderr}")
        return result
    return result

def get_open_prs() -> List[Dict[str, Any]]:
    """Get list of open PRs from GitHub API"""
    try:
        # Get the repository name from git remote
        result = run_command("git remote get-url origin")
        if result.returncode != 0:
            print("Could not get remote URL")
            return []
        
        remote_url = result.stdout.strip()
        if "github.com" not in remote_url:
            print("Not a GitHub repository")
            return []
        
        # Extract owner/repo from URL
        if remote_url.startswith("https://github.com/"):
            repo_path = remote_url.replace("https://github.com/", "").replace(".git", "")
        elif remote_url.startswith("git@github.com:"):
            repo_path = remote_url.replace("git@github.com:", "").replace(".git", "")
        else:
            print("Could not parse repository path")
            return []
        
        # Get open PRs using GitHub CLI or API
        cmd = f"gh pr list --repo {repo_path} --state open --json number,title,headRefName,baseRefName"
        result = run_command(cmd, check=False)
        
        if result.returncode == 0:
            return json.loads(result.stdout)
        else:
            print("GitHub CLI not available, trying to get PRs from branches")
            return get_prs_from_branches()
    
    except Exception as e:
        print(f"Error getting PRs: {e}")
        return get_prs_from_branches()

def get_prs_from_branches() -> List[Dict[str, Any]]:
    """Get PRs by analyzing branch names"""
    result = run_command("git branch -r | grep 'cursor/' | head -20")
    if result.returncode != 0:
        return []
    
    branches = result.stdout.strip().split('\n')
    prs = []
    
    for i, branch in enumerate(branches):
        if branch.strip():
            branch_name = branch.strip().replace('origin/', '')
            prs.append({
                'number': i + 1,
                'title': f'Branch {branch_name}',
                'headRefName': branch_name,
                'baseRefName': 'main'
            })
    
    return prs

def resolve_merge_conflicts(branch: str) -> bool:
    """Resolve merge conflicts for a branch"""
    print(f"Resolving conflicts for branch: {branch}")
    
    # Checkout the branch
    result = run_command(f"git checkout {branch}", check=False)
    if result.returncode != 0:
        print(f"Could not checkout branch {branch}")
        return False
    
    # Try to merge with main
    result = run_command("git merge main", check=False)
    
    if result.returncode == 0:
        print(f"No conflicts in {branch}")
        return True
    
    # Check if there are conflicts
    result = run_command("git status --porcelain")
    if "UU" in result.stdout or "<<<<<<<" in result.stdout:
        print(f"Resolving conflicts in {branch}")
        
        # Try to resolve conflicts automatically
        conflicts_resolved = auto_resolve_conflicts()
        
        if conflicts_resolved:
            # Add resolved files
            run_command("git add .")
            run_command("git commit -m 'resolve: Auto-resolve merge conflicts'")
            print(f"Conflicts resolved for {branch}")
            return True
        else:
            print(f"Could not auto-resolve conflicts in {branch}")
            # Abort the merge
            run_command("git merge --abort")
            return False
    else:
        print(f"No conflicts detected in {branch}")
        return True

def auto_resolve_conflicts() -> bool:
    """Automatically resolve common merge conflicts"""
    try:
        # Find files with conflicts
        result = run_command("git diff --name-only --diff-filter=U")
        if result.returncode != 0:
            return False
        
        conflicted_files = result.stdout.strip().split('\n')
        if not conflicted_files or conflicted_files == ['']:
            return False
        
        for file_path in conflicted_files:
            if not file_path:
                continue
                
            print(f"Resolving conflicts in {file_path}")
            
            # Read the file
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Simple conflict resolution strategies
            resolved_content = resolve_file_conflicts(content, file_path)
            
            # Write back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
        
        return True
    
    except Exception as e:
        print(f"Error auto-resolving conflicts: {e}")
        return False

def resolve_file_conflicts(content: str, file_path: str) -> str:
    """Resolve conflicts in a specific file"""
    lines = content.split('\n')
    resolved_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        if line.startswith('<<<<<<<'):
            # Start of conflict
            i += 1
            # Skip to the separator
            while i < len(lines) and not lines[i].startswith('======='):
                i += 1
            i += 1  # Skip separator
            # Take the incoming changes (after =======)
            while i < len(lines) and not lines[i].startswith('>>>>>>>'):
                resolved_lines.append(lines[i])
                i += 1
            i += 1  # Skip end marker
        else:
            resolved_lines.append(line)
            i += 1
    
    return '\n'.join(resolved_lines)

def merge_branch_to_main(branch: str) -> bool:
    """Merge a branch to main"""
    print(f"Merging {branch} to main")
    
    # Checkout main
    result = run_command("git checkout main")
    if result.returncode != 0:
        return False
    
    # Pull latest changes
    run_command("git pull origin main", check=False)
    
    # Try to merge the branch
    result = run_command(f"git merge {branch}", check=False)
    
    if result.returncode == 0:
        print(f"Successfully merged {branch}")
        return True
    else:
        # Try to resolve conflicts
        print(f"Conflicts detected, attempting to resolve...")
        if resolve_merge_conflicts(branch):
            # Try merge again
            result = run_command(f"git merge {branch}", check=False)
            if result.returncode == 0:
                print(f"Successfully merged {branch} after conflict resolution")
                return True
        
        print(f"Failed to merge {branch}")
        return False

def cleanup_branches():
    """Clean up merged branches"""
    print("Cleaning up merged branches...")
    
    # Get list of merged branches
    result = run_command("git branch --merged main")
    if result.returncode != 0:
        return
    
    branches = result.stdout.strip().split('\n')
    for branch in branches:
        branch = branch.strip().replace('*', '').strip()
        if branch and branch != 'main' and branch.startswith('cursor/'):
            print(f"Deleting merged branch: {branch}")
            run_command(f"git branch -d {branch}", check=False)
            run_command(f"git push origin --delete {branch}", check=False)

def main():
    """Main function to merge all PRs"""
    print("Starting comprehensive PR merge process...")
    
    # Ensure we're on main branch
    run_command("git checkout main")
    run_command("git pull origin main")
    
    # Get open PRs
    prs = get_open_prs()
    print(f"Found {len(prs)} PRs to process")
    
    if not prs:
        print("No PRs found, checking for local branches...")
        # Get local branches
        result = run_command("git branch -r | grep 'cursor/' | head -10")
        if result.returncode == 0:
            branches = result.stdout.strip().split('\n')
            for branch in branches:
                if branch.strip():
                    branch_name = branch.strip().replace('origin/', '')
                    print(f"Processing branch: {branch_name}")
                    # Fetch the branch
                    run_command(f"git fetch origin {branch_name}")
                    # Try to merge
                    merge_branch_to_main(branch_name)
        return
    
    # Process each PR
    successful_merges = 0
    failed_merges = 0
    
    for pr in prs:
        branch_name = pr['headRefName']
        pr_number = pr['number']
        pr_title = pr['title']
        
        print(f"\nProcessing PR #{pr_number}: {pr_title}")
        print(f"Branch: {branch_name}")
        
        # Fetch the branch
        run_command(f"git fetch origin {branch_name}")
        
        # Try to merge
        if merge_branch_to_main(branch_name):
            successful_merges += 1
            print(f"✅ Successfully merged PR #{pr_number}")
        else:
            failed_merges += 1
            print(f"❌ Failed to merge PR #{pr_number}")
    
    # Push all changes
    print("\nPushing all changes to main...")
    run_command("git push origin main")
    
    # Cleanup
    cleanup_branches()
    
    print(f"\nMerge process completed!")
    print(f"✅ Successful merges: {successful_merges}")
    print(f"❌ Failed merges: {failed_merges}")

if __name__ == "__main__":
    main()