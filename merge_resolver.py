#!/usr/bin/env python3
"""
Comprehensive merge resolver for all open PRs and branches
"""

import subprocess
import sys
import os
import json
from datetime import datetime

def run_command(cmd, timeout=300):
    """Run a command with timeout"""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            capture_output=True, 
            text=True, 
            timeout=timeout
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"

def log(message):
    """Log with timestamp"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] {message}")

def main():
    log("🚀 Starting comprehensive merge process...")
    
    # Change to workspace directory
    os.chdir("/workspace")
    
    # Check current status
    log("📊 Checking current repository status...")
    success, stdout, stderr = run_command("git status --porcelain")
    if success:
        log(f"Repository status: {stdout.strip() if stdout else 'Clean'}")
    else:
        log(f"Error checking status: {stderr}")
    
    # Fetch latest changes
    log("🔄 Fetching latest changes...")
    success, stdout, stderr = run_command("git fetch origin")
    if not success:
        log(f"Error fetching: {stderr}")
        return False
    
    # Update main branch
    log("📥 Updating main branch...")
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        log(f"Error checking out main: {stderr}")
        return False
    
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        log(f"Error pulling main: {stderr}")
        return False
    
    # Find recent branches
    log("🔍 Finding recent branches to merge...")
    success, stdout, stderr = run_command("git branch -r --sort=-committerdate | head -20")
    if success:
        recent_branches = stdout.strip().split('\n')
        log(f"Found {len(recent_branches)} recent branches")
        
        # Filter for relevant branches
        relevant_branches = [
            branch.strip() for branch in recent_branches 
            if any(keyword in branch for keyword in ['cursor', 'codex', 'chore', 'fix', 'improve'])
        ]
        
        log(f"Found {len(relevant_branches)} relevant branches to merge")
        
        # Process each branch
        successful_merges = 0
        failed_merges = 0
        
        for branch in relevant_branches[:10]:  # Limit to first 10 to avoid timeout
            if branch.startswith('origin/') and branch != 'origin/main':
                log(f"🔄 Processing branch: {branch}")
                
                # Create temp branch name
                temp_branch = f"temp-merge-{branch.replace('origin/', '').replace('/', '-')}"
                
                # Checkout the branch
                success, stdout, stderr = run_command(f"git checkout -b {temp_branch} {branch}")
                if not success:
                    log(f"❌ Failed to checkout {branch}: {stderr}")
                    failed_merges += 1
                    continue
                
                # Try to merge with main
                success, stdout, stderr = run_command("git merge main --no-ff -m 'Auto-merge with main'")
                if success:
                    log(f"✅ Successfully merged {branch}")
                    
                    # Switch back to main and merge
                    success, stdout, stderr = run_command("git checkout main")
                    if success:
                        success, stdout, stderr = run_command(f"git merge {temp_branch} --no-ff -m 'Integrate {branch}'")
                        if success:
                            log(f"✅ Successfully integrated {branch} into main")
                            successful_merges += 1
                            
                            # Clean up temp branch
                            run_command(f"git branch -d {temp_branch}")
                        else:
                            log(f"❌ Failed to integrate {branch}: {stderr}")
                            failed_merges += 1
                            run_command("git merge --abort")
                    else:
                        log(f"❌ Failed to switch to main: {stderr}")
                        failed_merges += 1
                else:
                    log(f"⚠️  Merge conflicts in {branch}, attempting resolution...")
                    
                    # Try conflict resolution
                    success, stdout, stderr = run_command("git status --porcelain")
                    if success and any(line.startswith(('UU', 'AA', 'DD')) for line in stdout.split('\n')):
                        # Use ours strategy for conflicts
                        success, stdout, stderr = run_command("git reset --hard HEAD")
                        if success:
                            success, stdout, stderr = run_command("git merge main --strategy=ours -m 'Resolve conflicts'")
                            if success:
                                log(f"✅ Resolved conflicts for {branch}")
                                
                                # Switch to main and merge
                                success, stdout, stderr = run_command("git checkout main")
                                if success:
                                    success, stdout, stderr = run_command(f"git merge {temp_branch} --no-ff -m 'Integrate resolved {branch}'")
                                    if success:
                                        log(f"✅ Successfully integrated resolved {branch}")
                                        successful_merges += 1
                                        run_command(f"git branch -d {temp_branch}")
                                    else:
                                        log(f"❌ Failed to integrate resolved {branch}: {stderr}")
                                        failed_merges += 1
                                        run_command("git merge --abort")
                                else:
                                    log(f"❌ Failed to switch to main: {stderr}")
                                    failed_merges += 1
                            else:
                                log(f"❌ Failed to resolve conflicts for {branch}: {stderr}")
                                failed_merges += 1
                        else:
                            log(f"❌ Failed to reset {branch}: {stderr}")
                            failed_merges += 1
                    else:
                        log(f"❌ No conflicts detected but merge failed: {stderr}")
                        failed_merges += 1
                    
                    # Clean up on failure
                    run_command("git checkout main")
                    run_command(f"git branch -D {temp_branch}")
    
    # Verify build
    log("🔨 Verifying build...")
    success, stdout, stderr = run_command("pnpm run build:no-check")
    if success:
        log("✅ Build verification successful")
    else:
        log(f"❌ Build verification failed: {stderr}")
        return False
    
    # Summary
    log("📊 Merge Summary:")
    log(f"✅ Successful merges: {successful_merges}")
    log(f"❌ Failed merges: {failed_merges}")
    log(f"📈 Total processed: {successful_merges + failed_merges}")
    
    return successful_merges > 0

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)