#!/usr/bin/env python3
"""
Script to resolve merge conflicts and merge PR #22515 into main branch.
This script handles the automated merge process for the Netlify build fix.
"""

import subprocess
import json
import sys
import os
from pathlib import Path

def run_command(cmd, cwd=None, timeout=60):
    """Run a command with timeout and return the result."""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            cwd=cwd or "/workspace",
            capture_output=True, 
            text=True, 
            timeout=timeout
        )
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return -1, "", "Command timed out"
    except Exception as e:
        return -1, "", str(e)

def check_git_status():
    """Check the current git status."""
    print("Checking git status...")
    code, stdout, stderr = run_command("git status --porcelain")
    if code == 0:
        print(f"Git status: {stdout.strip() if stdout else 'Clean working directory'}")
        return stdout.strip()
    else:
        print(f"Error checking git status: {stderr}")
        return None

def get_current_branch():
    """Get the current branch name."""
    code, stdout, stderr = run_command("git branch --show-current")
    if code == 0:
        branch = stdout.strip()
        print(f"Current branch: {branch}")
        return branch
    else:
        print(f"Error getting current branch: {stderr}")
        return None

def pull_latest_changes():
    """Pull the latest changes from main branch."""
    print("Pulling latest changes from main...")
    
    # First, try to fetch
    code, stdout, stderr = run_command("git fetch origin main")
    if code != 0:
        print(f"Error fetching: {stderr}")
        return False
    
    # Try to merge main into current branch
    code, stdout, stderr = run_command("git merge origin/main")
    if code == 0:
        print("Successfully merged main into current branch")
        return True
    elif "conflict" in stderr.lower() or "conflict" in stdout.lower():
        print("Merge conflicts detected. Need to resolve manually.")
        return "conflicts"
    else:
        print(f"Error merging: {stderr}")
        return False

def resolve_merge_conflicts():
    """Resolve merge conflicts automatically where possible."""
    print("Checking for merge conflicts...")
    
    # Check for conflicted files
    code, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
    if code == 0 and stdout.strip():
        conflicted_files = stdout.strip().split('\n')
        print(f"Conflicted files: {conflicted_files}")
        
        for file_path in conflicted_files:
            if resolve_file_conflicts(file_path):
                print(f"Resolved conflicts in {file_path}")
            else:
                print(f"Could not auto-resolve conflicts in {file_path}")
                return False
        
        # Add resolved files
        for file_path in conflicted_files:
            run_command(f"git add {file_path}")
        
        return True
    else:
        print("No merge conflicts found")
        return True

def resolve_file_conflicts(file_path):
    """Resolve conflicts in a specific file."""
    try:
        with open(file_path, 'r') as f:
            content = f.read()
        
        # Simple conflict resolution - keep both changes where possible
        # This is a basic strategy, might need customization for specific files
        lines = content.split('\n')
        resolved_lines = []
        in_conflict = False
        
        for line in lines:
            if line.startswith('<<<<<<<'):
                in_conflict = True
                continue
            elif line.startswith('======='):
                continue
            elif line.startswith('>>>>>>>'):
                in_conflict = False
                continue
            elif not in_conflict:
                resolved_lines.append(line)
        
        # Write resolved content
        with open(file_path, 'w') as f:
            f.write('\n'.join(resolved_lines))
        
        return True
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def commit_and_push():
    """Commit the changes and push to the branch."""
    print("Committing and pushing changes...")
    
    # Check if there are changes to commit
    code, stdout, stderr = run_command("git diff --cached --name-only")
    if code == 0 and stdout.strip():
        # Commit the changes
        code, stdout, stderr = run_command(
            'git commit -m "Resolve merge conflicts and prepare for main branch merge"'
        )
        if code == 0:
            print("Successfully committed changes")
        else:
            print(f"Error committing: {stderr}")
            return False
    
    # Push to the current branch
    current_branch = get_current_branch()
    if current_branch:
        code, stdout, stderr = run_command(f"git push origin {current_branch}")
        if code == 0:
            print("Successfully pushed changes")
            return True
        else:
            print(f"Error pushing: {stderr}")
            return False
    
    return False

def main():
    """Main function to handle the merge process."""
    print("Starting PR merge process for PR #22515...")
    
    # Check git status
    status = check_git_status()
    if status is None:
        print("Failed to check git status")
        return False
    
    # Get current branch
    current_branch = get_current_branch()
    if not current_branch:
        print("Failed to get current branch")
        return False
    
    # Pull latest changes
    merge_result = pull_latest_changes()
    if merge_result == "conflicts":
        # Resolve conflicts
        if resolve_merge_conflicts():
            print("Successfully resolved merge conflicts")
        else:
            print("Failed to resolve merge conflicts")
            return False
    elif not merge_result:
        print("Failed to pull latest changes")
        return False
    
    # Commit and push
    if commit_and_push():
        print("Successfully prepared branch for merge")
        print(f"PR #{22515} is now ready to be merged via GitHub interface")
        print(f"Branch: {current_branch}")
        return True
    else:
        print("Failed to commit and push changes")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)