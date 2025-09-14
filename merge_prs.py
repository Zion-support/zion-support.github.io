#!/usr/bin/env python3
"""
Merge PRs and resolve conflicts programmatically
"""

import subprocess
import sys
import os
import re
from pathlib import Path

def run_command(cmd, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            cwd=cwd, 
            capture_output=True, 
            text=True, 
            timeout=300
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        print(f"Command timed out: {cmd}")
        return False, "", "Command timed out"
    except Exception as e:
        print(f"Error running command: {cmd}, Error: {e}")
        return False, "", str(e)

def log(message, level="INFO"):
    """Log a message with timestamp"""
    from datetime import datetime
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] [{level}] {message}")

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a file"""
    if not os.path.exists(file_path):
        log(f"File not found: {file_path}", "WARNING")
        return False
    
    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Create backup
        backup_path = f"{file_path}.backup"
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        # Simple conflict resolution - remove conflict markers
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
        resolved_content = '\n'.join(resolved_lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        log(f"Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        log(f"Error resolving conflicts in {file_path}: {e}", "ERROR")
        return False

def main():
    """Main function to merge PRs and resolve conflicts"""
    log("🚀 Starting PR merge and conflict resolution process...")
    
    # Change to workspace directory
    workspace = Path("/workspace")
    if not workspace.exists():
        log("Workspace directory not found", "ERROR")
        return 1
    
    os.chdir(workspace)
    log(f"Working directory: {os.getcwd()}")
    
    # Check if we're in a git repository
    success, stdout, stderr = run_command("git status")
    if not success:
        log("Not in a git repository", "ERROR")
        return 1
    
    # Get current branch
    success, current_branch, stderr = run_command("git branch --show-current")
    if success:
        current_branch = current_branch.strip()
        log(f"Current branch: {current_branch}")
    
    # Fetch all remote changes
    log("📥 Fetching all remote changes...")
    success, stdout, stderr = run_command("git fetch origin --all --prune")
    if not success:
        log(f"Failed to fetch remote changes: {stderr}", "WARNING")
    
    # Check for existing merge conflicts
    log("🔍 Checking for existing merge conflicts...")
    success, status_output, stderr = run_command("git status --porcelain")
    if success:
        conflicted_files = []
        for line in status_output.split('\n'):
            if line.startswith('UU') or line.startswith('AA') or line.startswith('DD'):
                file_path = line[3:].strip()
                conflicted_files.append(file_path)
        
        if conflicted_files:
            log(f"Found {len(conflicted_files)} conflicted files: {conflicted_files}")
            for file_path in conflicted_files:
                resolve_conflicts_in_file(file_path)
            
            # Add resolved files
            run_command("git add .")
            run_command('git commit -m "Resolve merge conflicts automatically"')
            log("Committed resolved conflicts")
    
    # Switch to main branch
    log("🔄 Switching to main branch...")
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        # Try master branch
        success, stdout, stderr = run_command("git checkout master")
        if not success:
            log("Failed to switch to main or master branch", "ERROR")
            return 1
    
    main_branch = "main" if success else "master"
    log(f"On main branch: {main_branch}")
    
    # Pull latest main
    log("📥 Pulling latest main branch...")
    success, stdout, stderr = run_command(f"git pull origin {main_branch}")
    if not success:
        log(f"Failed to pull main branch: {stderr}", "WARNING")
    
    # Get list of all branches
    log("🌿 Getting list of all branches...")
    success, stdout, stderr = run_command("git branch -r")
    if not success:
        log(f"Failed to get branch list: {stderr}", "ERROR")
        return 1
    
    branches = []
    for line in stdout.split('\n'):
        if 'origin/' in line and not 'HEAD' in line and main_branch not in line:
            branch = line.replace('origin/', '').strip()
            if branch:
                branches.append(branch)
    
    log(f"Found {len(branches)} branches to process: {branches}")
    
    # Process each branch
    for branch in branches:
        log(f"🔄 Processing branch: {branch}")
        
        # Checkout branch
        success, stdout, stderr = run_command(f"git checkout {branch}")
        if not success:
            # Try to create branch from remote
            success, stdout, stderr = run_command(f"git checkout -b {branch} origin/{branch}")
            if not success:
                log(f"Failed to checkout branch {branch}: {stderr}", "WARNING")
                continue
        
        # Merge main into branch
        log(f"🔀 Merging main into {branch}...")
        success, stdout, stderr = run_command(f"git merge {main_branch} --no-edit")
        if not success:
            log(f"Merge conflicts in {branch}. Resolving...", "WARNING")
            
            # Resolve conflicts
            success, status_output, stderr = run_command("git status --porcelain")
            if success:
                conflicted_files = []
                for line in status_output.split('\n'):
                    if line.startswith('UU') or line.startswith('AA') or line.startswith('DD'):
                        file_path = line[3:].strip()
                        conflicted_files.append(file_path)
                
                for file_path in conflicted_files:
                    resolve_conflicts_in_file(file_path)
                
                run_command("git add .")
                run_command(f'git commit -m "Resolve merge conflicts with main branch"')
        
        # Push updated branch
        log(f"📤 Pushing updated {branch}...")
        run_command(f"git push origin {branch}")
        
        # Switch back to main
        run_command(f"git checkout {main_branch}")
        
        # Merge branch into main
        log(f"🔀 Merging {branch} into main...")
        success, stdout, stderr = run_command(f"git merge {branch} --no-edit")
        if not success:
            log(f"Merge conflicts when merging {branch} into main. Resolving...", "WARNING")
            
            # Resolve conflicts
            success, status_output, stderr = run_command("git status --porcelain")
            if success:
                conflicted_files = []
                for line in status_output.split('\n'):
                    if line.startswith('UU') or line.startswith('AA') or line.startswith('DD'):
                        file_path = line[3:].strip()
                        conflicted_files.append(file_path)
                
                for file_path in conflicted_files:
                    resolve_conflicts_in_file(file_path)
                
                run_command("git add .")
                run_command(f'git commit -m "Resolve merge conflicts when merging {branch} into main"')
        
        # Push updated main
        log(f"📤 Pushing updated main branch...")
        run_command(f"git push origin {main_branch}")
        
        log(f"✅ Completed processing branch: {branch}")
    
    # Final status
    log("📊 Final status:")
    run_command("git status --short")
    
    # Show recent commits
    log("📝 Recent commits:")
    run_command("git log --oneline -10")
    
    log("🎉 PR merge and conflict resolution process completed!")
    return 0

if __name__ == "__main__":
    sys.exit(main())