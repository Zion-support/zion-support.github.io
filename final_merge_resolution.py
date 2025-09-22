#!/usr/bin/env python3

import subprocess
import json
import os
import time
from datetime import datetime

def log_message(message):
    """Log message with timestamp"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] {message}")

def run_command(cmd, timeout=300):
    """Run a command with timeout"""
    log_message(f"Running: {cmd}")
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        if result.returncode != 0:
            log_message(f"Command failed: {result.stderr}")
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        log_message("Command timed out")
        return -1, "", "Command timed out"

def main():
    """Main function"""
    log_message("=== Starting Final Merge Resolution ===")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Check current status
    log_message("Checking current git status...")
    code, stdout, stderr = run_command("git status --short")
    log_message(f"Git status:\n{stdout}")
    
    # Add any uncommitted changes
    if stdout.strip():
        log_message("Adding uncommitted changes...")
        run_command("git add .")
        run_command('git commit -m "Add remaining uncommitted changes"')
    
    # Check for merge conflicts
    log_message("Checking for merge conflicts...")
    code, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
    if code == 0 and stdout.strip():
        log_message(f"Found merge conflicts in: {stdout}")
        # Resolve conflicts
        for file in stdout.strip().split('\n'):
            if file.strip():
                log_message(f"Resolving conflict in {file}")
                run_command(f"git checkout --ours {file}")
                run_command(f"git add {file}")
        run_command('git commit -m "Resolve remaining merge conflicts"')
    
    # Fetch latest from origin
    log_message("Fetching latest from origin...")
    run_command("git fetch origin")
    
    # Check for open PRs using GitHub API
    log_message("Checking for open PRs...")
    try:
        import requests
        url = "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open"
        headers = {"Accept": "application/vnd.github.v3+json"}
        
        response = requests.get(url, headers=headers, timeout=30)
        if response.status_code == 200:
            prs = response.json()
            log_message(f"Found {len(prs)} open PRs")
            
            for pr in prs:
                pr_number = pr['number']
                branch_name = pr['head']['ref']
                title = pr['title']
                
                log_message(f"Processing PR #{pr_number}: {title}")
                
                # Fetch and merge
                run_command(f"git fetch origin {branch_name}")
                code, stdout, stderr = run_command(f"git merge origin/{branch_name}")
                
                if code != 0:
                    log_message(f"Merge conflict in PR #{pr_number}. Resolving...")
                    # Resolve conflicts
                    code, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
                    if code == 0 and stdout.strip():
                        for file in stdout.strip().split('\n'):
                            if file.strip():
                                run_command(f"git checkout --ours {file}")
                                run_command(f"git add {file}")
                    run_command(f'git commit -m "Resolve conflicts and merge PR #{pr_number}"')
                else:
                    run_command(f'git commit -m "Merge PR #{pr_number}: {title}"')
                
                log_message(f"Successfully processed PR #{pr_number}")
        else:
            log_message(f"Error fetching PRs: HTTP {response.status_code}")
    except ImportError:
        log_message("requests module not available, skipping PR check")
    except Exception as e:
        log_message(f"Error checking PRs: {e}")
    
    # Check for recent unmerged branches
    log_message("Checking for recent unmerged branches...")
    code, stdout, stderr = run_command("git branch -r")
    if code == 0:
        branches = [line.strip() for line in stdout.split('\n') if line.strip() and not 'main' in line and not 'HEAD' in line]
        
        for branch in branches:
            branch_name = branch.replace('origin/', '')
            
            # Skip certain patterns
            if any(skip in branch_name for skip in ['test', 'temp', 'backup', 'old', 'jules_wip', 'codex']):
                continue
            
            # Check if already merged
            code, stdout, stderr = run_command(f"git merge-base --is-ancestor {branch} main")
            if code == 0:  # Already merged
                continue
            
            # Check if recent (last 2 days)
            code, stdout, stderr = run_command(f"git log -1 --format=%ct {branch}")
            if code == 0:
                try:
                    last_commit_timestamp = int(stdout.strip())
                    current_timestamp = int(time.time())
                    days_diff = (current_timestamp - last_commit_timestamp) / 86400
                    
                    if days_diff <= 2:  # Recent branch
                        log_message(f"Merging recent branch: {branch_name} ({days_diff:.1f} days old)")
                        
                        run_command(f"git fetch origin {branch_name}")
                        code, stdout, stderr = run_command(f"git merge origin/{branch_name}")
                        
                        if code != 0:
                            log_message(f"Merge conflict in {branch_name}. Resolving...")
                            code, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
                            if code == 0 and stdout.strip():
                                for file in stdout.strip().split('\n'):
                                    if file.strip():
                                        run_command(f"git checkout --ours {file}")
                                        run_command(f"git add {file}")
                            run_command(f'git commit -m "Resolve conflicts and merge branch {branch_name}"')
                        else:
                            run_command(f'git commit -m "Merge branch {branch_name}"')
                        
                        log_message(f"Successfully merged {branch_name}")
                except ValueError:
                    log_message(f"Could not parse timestamp for branch {branch_name}")
    
    # Final commit for any remaining changes
    log_message("Finalizing changes...")
    run_command("git add .")
    run_command('git commit -m "Final merge resolution and improvements"')
    
    # Push to origin
    log_message("Pushing to origin...")
    code, stdout, stderr = run_command("git push origin main")
    if code == 0:
        log_message("Successfully pushed to origin")
    else:
        log_message(f"Error pushing to origin: {stderr}")
    
    log_message("=== Final Merge Resolution Complete ===")

if __name__ == "__main__":
    main()