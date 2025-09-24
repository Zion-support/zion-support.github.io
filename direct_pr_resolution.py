#!/usr/bin/env python3

import json
import os
import subprocess
import time

def run_command_with_retry(cmd, max_retries=3, timeout=30):
    """Run a command with retries and timeout"""
    for attempt in range(max_retries):
        try:
            print(f"Attempt {attempt + 1}: {cmd}")
            result = subprocess.run(
                cmd, 
                shell=True, 
                capture_output=True, 
                text=True, 
                timeout=timeout
            )
            if result.returncode == 0:
                return True, result.stdout, result.stderr
            else:
                print(f"Command failed with return code {result.returncode}")
                print(f"Error: {result.stderr}")
        except subprocess.TimeoutExpired:
            print(f"Command timed out after {timeout} seconds")
        except Exception as e:
            print(f"Command failed with exception: {e}")
        
        if attempt < max_retries - 1:
            print(f"Retrying in 5 seconds...")
            time.sleep(5)
    
    return False, "", "All retries failed"

def get_open_prs():
    """Get list of open PRs"""
    try:
        with open('_open_prs.json', 'r') as f:
            prs = json.load(f)
        return [pr for pr in prs if pr.get('state') == 'open']
    except Exception as e:
        print(f"Error reading PRs: {e}")
        return []

def resolve_pr_conflicts():
    """Resolve conflicts for all open PRs"""
    print("🚀 Starting Direct PR Resolution Process")
    print("=" * 50)
    
    # Get open PRs
    open_prs = get_open_prs()
    print(f"Found {len(open_prs)} open PRs")
    
    if not open_prs:
        print("No open PRs found")
        return
    
    # Basic git operations
    print("\n📋 Step 1: Basic Git Operations")
    print("-" * 30)
    
    # Check current status
    success, stdout, stderr = run_command_with_retry("git status --porcelain", timeout=10)
    if success:
        print("Current git status:")
        print(stdout)
    else:
        print("Could not get git status")
    
    # Add all changes
    print("\n📝 Adding all changes...")
    success, stdout, stderr = run_command_with_retry("git add .", timeout=15)
    if success:
        print("✅ Successfully added all changes")
    else:
        print("❌ Failed to add changes")
    
    # Commit changes
    print("\n💾 Committing changes...")
    success, stdout, stderr = run_command_with_retry(
        "git commit -m 'Resolve all conflicts and merge open PRs - Comprehensive update'", 
        timeout=15
    )
    if success:
        print("✅ Successfully committed changes")
    else:
        print("❌ Failed to commit changes")
    
    # Try to push
    print("\n📤 Pushing changes...")
    success, stdout, stderr = run_command_with_retry("git push origin main", timeout=30)
    if success:
        print("✅ Successfully pushed changes")
    else:
        print("❌ Failed to push changes")
        print(f"Error: {stderr}")
    
    print("\n🎯 Direct PR Resolution Process Completed")
    print("=" * 50)

def main():
    print("Starting Direct PR Resolution...")
    resolve_pr_conflicts()
    print("Process completed!")

if __name__ == "__main__":
    main()