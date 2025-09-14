#!/usr/bin/env python3

import os
import re
import subprocess
import time

def run_command_safe(cmd, timeout=30):
    """Run a command with timeout and error handling"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        print(f"Command timed out: {cmd}")
        return -1, "", "Timeout"
    except Exception as e:
        print(f"Command failed: {cmd}, Error: {e}")
        return -1, "", str(e)

def find_and_resolve_conflicts():
    """Find and resolve merge conflicts"""
    print("Starting comprehensive merge conflict resolution...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Step 1: Check git status
    print("Step 1: Checking git status...")
    code, stdout, stderr = run_command_safe("git status --porcelain", 10)
    if code == 0:
        print("Git status retrieved successfully")
        if stdout.strip():
            print("Uncommitted changes found:")
            print(stdout)
    else:
        print(f"Git status failed: {stderr}")
    
    # Step 2: Check for merge conflicts
    print("Step 2: Checking for merge conflicts...")
    code, stdout, stderr = run_command_safe("git diff --name-only --diff-filter=U", 10)
    if code == 0 and stdout.strip():
        conflict_files = stdout.strip().split('\n')
        print(f"Found {len(conflict_files)} files with conflicts:")
        for file in conflict_files:
            print(f"  - {file}")
        
        # Resolve conflicts in each file
        for file in conflict_files:
            resolve_file_conflicts(file)
    else:
        print("No merge conflicts found")
    
    # Step 3: Check for uncommitted changes
    print("Step 3: Checking for uncommitted changes...")
    code, stdout, stderr = run_command_safe("git diff --name-only", 10)
    if code == 0 and stdout.strip():
        print("Found uncommitted changes, adding them...")
        run_command_safe("git add .", 30)
        run_command_safe("git commit -m 'Auto-commit changes before merge'", 30)
    
    # Step 4: Try to complete merge
    print("Step 4: Attempting to complete merge...")
    if os.path.exists('.git/MERGE_HEAD'):
        print("In merge state, completing merge...")
        run_command_safe("git commit -m 'Resolve merge conflicts'", 30)
    else:
        print("Not in merge state, attempting to pull latest changes...")
        run_command_safe("git pull origin main --no-edit", 60)
    
    print("Merge conflict resolution completed.")

def resolve_file_conflicts(filepath):
    """Resolve conflicts in a specific file"""
    print(f"Resolving conflicts in {filepath}...")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for conflict markers
        if '<<<<<<< HEAD' in content:
            print(f"Found conflict markers in {filepath}")
            
            # Remove conflict markers and keep both versions
            content = re.sub(r'<<<<<<< HEAD\n', '', content)
            content = re.sub(r'=======\n', '', content)
            content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
            
            # Write back the cleaned content
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            
            # Add the resolved file
            run_command_safe(f"git add {filepath}", 10)
            print(f"Resolved conflicts in {filepath}")
        else:
            print(f"No conflict markers found in {filepath}")
            
    except Exception as e:
        print(f"Error resolving conflicts in {filepath}: {e}")

def check_github_prs():
    """Check GitHub for open PRs"""
    print("Checking GitHub for open PRs...")
    
    # Try to get PR information
    code, stdout, stderr = run_command_safe("curl -s 'https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open'", 30)
    if code == 0:
        print("GitHub API response received")
        # Parse JSON response (simplified)
        if '"number"' in stdout:
            print("Open PRs found")
            # Extract PR numbers
            pr_numbers = re.findall(r'"number":\s*(\d+)', stdout)
            print(f"Found {len(pr_numbers)} open PRs: {pr_numbers}")
        else:
            print("No open PRs found")
    else:
        print(f"Failed to check GitHub PRs: {stderr}")

def main():
    """Main function"""
    print("Starting comprehensive merge resolution process...")
    
    # Step 1: Resolve conflicts
    find_and_resolve_conflicts()
    
    # Step 2: Check GitHub PRs
    check_github_prs()
    
    # Step 3: Final status check
    print("Final status check...")
    code, stdout, stderr = run_command_safe("git status", 10)
    if code == 0:
        print("Final git status:")
        print(stdout)
    
    print("Comprehensive merge resolution completed.")

if __name__ == "__main__":
    main()