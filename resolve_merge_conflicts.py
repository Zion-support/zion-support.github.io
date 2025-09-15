#!/usr/bin/env python3
<<<<<<< HEAD
"""
Comprehensive script to resolve merge conflicts and merge all PRs into main branch
"""

import subprocess
import json
import os
import sys
import time
from pathlib import Path

def run_command(cmd, timeout=60):
    """Run a command with timeout"""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            capture_output=True, 
            text=True, 
            timeout=timeout,
            cwd='/workspace'
        )
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return -1, "", "Command timed out"

def get_current_branch():
    """Get current branch name"""
    code, stdout, stderr = run_command("git branch --show-current")
    if code == 0:
        return stdout.strip()
    return None

def check_git_status():
    """Check git status"""
    code, stdout, stderr = run_command("git status --porcelain")
    if code == 0:
        return stdout.strip()
    return ""

def commit_changes():
    """Commit any uncommitted changes"""
    print("Checking for uncommitted changes...")
    status = check_git_status()
    if status:
        print("Found uncommitted changes, committing them...")
        code, stdout, stderr = run_command("git add .")
        if code != 0:
            print(f"Error adding files: {stderr}")
            return False
        
        code, stdout, stderr = run_command('git commit -m "Add comprehensive AI content and promotional components"')
        if code != 0:
            print(f"Error committing: {stderr}")
            return False
        print("Changes committed successfully")
    else:
        print("No uncommitted changes found")
    return True

def fetch_latest():
    """Fetch latest changes"""
    print("Fetching latest changes...")
    code, stdout, stderr = run_command("git fetch origin")
    if code != 0:
        print(f"Error fetching: {stderr}")
        return False
    return True

def merge_main():
    """Merge main branch"""
    print("Attempting to merge main branch...")
    code, stdout, stderr = run_command("git merge origin/main")
    if code == 0:
        print("Merge successful")
        return True
    else:
        print(f"Merge failed: {stderr}")
        return False

def resolve_conflicts():
    """Resolve merge conflicts automatically"""
    print("Resolving merge conflicts...")
    
    # Check for conflicted files
    code, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
    if code == 0 and stdout.strip():
        conflicted_files = stdout.strip().split('\n')
        print(f"Found {len(conflicted_files)} conflicted files")
        
        # Resolve conflicts by keeping our changes
        for file in conflicted_files:
            print(f"Resolving conflicts in {file}...")
            run_command(f"git checkout --ours {file}")
        
        # Add resolved files
        run_command("git add .")
        
        # Commit the merge
        code, stdout, stderr = run_command("git commit -m 'Resolve merge conflicts automatically'")
        if code == 0:
            print("Conflicts resolved and committed")
            return True
        else:
            print(f"Error committing resolved conflicts: {stderr}")
            return False
    else:
        print("No merge conflicts found")
        return True

def push_branch(branch_name):
    """Push branch to remote"""
    print(f"Pushing branch {branch_name}...")
    code, stdout, stderr = run_command(f"git push origin {branch_name}")
    if code == 0:
        print("Branch pushed successfully")
        return True
    else:
        print(f"Error pushing branch: {stderr}")
        return False

def get_open_prs():
    """Get open PRs from JSON file"""
    try:
        with open('/workspace/_open_prs.json', 'r') as f:
            prs = json.load(f)
        
        open_prs = [pr for pr in prs if pr.get('state') == 'open']
        return open_prs
    except Exception as e:
        print(f"Error reading PRs: {e}")
        return []

def merge_to_main():
    """Merge current branch to main"""
    print("Switching to main branch...")
    code, stdout, stderr = run_command("git checkout main")
    if code != 0:
        print(f"Error switching to main: {stderr}")
        return False
    
    print("Pulling latest main...")
    code, stdout, stderr = run_command("git pull origin main")
    if code != 0:
        print(f"Error pulling main: {stderr}")
        return False
    
    # Get the content branch name
    content_branch = "cursor/create-and-deploy-new-content-6e3b"
    
    print(f"Merging {content_branch} into main...")
    code, stdout, stderr = run_command(f"git merge {content_branch}")
    if code == 0:
        print("Successfully merged to main")
        
        print("Pushing main branch...")
        code, stdout, stderr = run_command("git push origin main")
        if code == 0:
            print("Main branch pushed successfully")
            return True
        else:
            print(f"Error pushing main: {stderr}")
            return False
    else:
        print(f"Error merging to main: {stderr}")
        return False

def main():
    """Main function"""
    print("Starting comprehensive merge resolution process...")
    
    # Check if we're in a git repository
    if not os.path.exists('/workspace/.git'):
        print("Not in a git repository")
        return False
    
    # Get current branch
    current_branch = get_current_branch()
    if not current_branch:
        print("Could not determine current branch")
        return False
    
    print(f"Current branch: {current_branch}")
    
    # Step 1: Commit any uncommitted changes
    if not commit_changes():
        return False
    
    # Step 2: Fetch latest changes
    if not fetch_latest():
        return False
    
    # Step 3: Try to merge main
    if not merge_main():
        # If merge failed, try to resolve conflicts
        if not resolve_conflicts():
            print("Failed to resolve conflicts")
            return False
    
    # Step 4: Push the branch
    if not push_branch(current_branch):
        return False
    
    # Step 5: Merge to main
    if not merge_to_main():
        print("Failed to merge to main")
        return False
    
    print("\n" + "="*50)
    print("MERGE PROCESS COMPLETED SUCCESSFULLY!")
    print("="*50)
    
    # Show open PRs
    open_prs = get_open_prs()
    if open_prs:
        print(f"\nFound {len(open_prs)} open PRs:")
        for pr in open_prs[:5]:  # Show first 5
            print(f"  - PR #{pr.get('number')}: {pr.get('title', 'No title')}")
    
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
=======

import subprocess
import os
import sys
from datetime import datetime

def run_command(cmd, check=True):
    """Run a git command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        if check:
            print(f"Error running command: {cmd}")
            print(f"Error: {e}")
            sys.exit(1)
        return None

def get_conflicted_files():
    """Get list of files with merge conflicts"""
    result = run_command("git diff --name-only --diff-filter=U", check=False)
    if result:
        return result.split('\n')
    return []

def resolve_conflict_strategy(file_path, strategy="theirs"):
    """Resolve conflict using specified strategy"""
    print(f"Resolving conflicts in {file_path} using {strategy} strategy...")
    
    if strategy == "theirs":
        # Use their version (remote main)
        run_command(f"git checkout --theirs {file_path}")
    elif strategy == "ours":
        # Use our version (local changes)
        run_command(f"git checkout --ours {file_path}")
    elif strategy == "both":
        # Keep both versions (manual resolution needed)
        print(f"⚠️  Manual resolution needed for {file_path}")
        return False
    
    # Mark as resolved
    run_command(f"git add {file_path}")
    return True

def resolve_conflicts_automatically():
    """Automatically resolve merge conflicts using intelligent strategies"""
    print("Starting automatic conflict resolution...")
    
    conflicted_files = get_conflicted_files()
    if not conflicted_files:
        print("No conflicted files found")
        return True
    
    print(f"Found {len(conflicted_files)} conflicted files")
    
    # Define resolution strategies for different file types
    resolution_strategies = {
        # Configuration files - prefer remote version
        "tailwind.config.js": "theirs",
        "next.config.js": "theirs",
        "package.json": "theirs",
        "tsconfig.json": "theirs",
        
        # Component files - prefer our version (merged PRs)
        "components/": "ours",
        "pages/": "ours",
        "src/": "ours",
        
        # Data files - prefer our version
        "data/": "ours",
        
        # Type definitions - prefer our version
        "types/": "ours",
        
        # Styles - prefer our version
        "styles/": "ours",
        
        # Scripts - prefer our version
        "*.sh": "ours",
        "*.py": "ours",
        
        # Documentation - prefer our version
        "*.md": "ours",
    }
    
    resolved_count = 0
    manual_resolution_needed = []
    
    for file_path in conflicted_files:
        if not file_path.strip():
            continue
            
        print(f"\nProcessing: {file_path}")
        
        # Determine strategy based on file type
        strategy = "theirs"  # Default to remote version
        
        for pattern, file_strategy in resolution_strategies.items():
            if pattern in file_path or file_path.endswith(pattern.replace("*", "")):
                strategy = file_strategy
                break
        
        # Apply resolution strategy
        if resolve_conflict_strategy(file_path, strategy):
            resolved_count += 1
            print(f"✓ Resolved {file_path}")
        else:
            manual_resolution_needed.append(file_path)
    
    print(f"\n=== Conflict Resolution Summary ===")
    print(f"Automatically resolved: {resolved_count}")
    print(f"Manual resolution needed: {len(manual_resolution_needed)}")
    
    if manual_resolution_needed:
        print("\nFiles requiring manual resolution:")
        for file_path in manual_resolution_needed:
            print(f"  - {file_path}")
    
    return len(manual_resolution_needed) == 0

def main():
    print("Starting merge conflict resolution...")
    
    # Check if we're in a merge state
    if not run_command("git status --porcelain", check=False):
        print("No merge in progress")
        return
    
    # Resolve conflicts automatically
    if resolve_conflicts_automatically():
        print("\nAll conflicts resolved automatically!")
        
        # Commit the merge
        commit_message = f"Merge remote main with local changes - {datetime.now()}"
        run_command(f"git commit -m '{commit_message}'")
        
        print("✓ Merge committed successfully!")
        print("You can now push to main: git push origin main")
    else:
        print("\n⚠️  Some conflicts require manual resolution")
        print("Please resolve the remaining conflicts manually and then:")
        print("1. git add <resolved-files>")
        print("2. git commit -m 'Resolve merge conflicts'")
        print("3. git push origin main")

if __name__ == "__main__":
    main()
>>>>>>> origin/auto/autonomy-17186719616
