#!/usr/bin/env python3

import subprocess
import json
import sys
import os
import time
import re

def run_command(cmd, timeout=300):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        print(f"Command timed out: {cmd}")
        return -1, "", "Timeout"
    except Exception as e:
        print(f"Error running command: {cmd}, Error: {e}")
        return -1, "", str(e)

def get_open_prs():
    """Get list of open PRs from GitHub"""
    print("Fetching open PRs from GitHub...")
    
    # Try to get PRs using GitHub CLI if available
    returncode, stdout, stderr = run_command("gh pr list --state open --json number,title,headRefName,baseRefName")
    
    if returncode == 0:
        try:
            prs = json.loads(stdout)
            print(f"Found {len(prs)} open PRs")
            return prs
        except json.JSONDecodeError:
            print("Failed to parse PR list JSON")
            return []
    else:
        print(f"Failed to get PRs: {stderr}")
        # Fallback: try to get from git branches
        return get_prs_from_branches()
    
def get_prs_from_branches():
    """Fallback method to get PR branches"""
    print("Getting PR branches from git...")
    returncode, stdout, stderr = run_command("git branch -r | grep 'cursor/' | grep -v 'HEAD'")
    
    if returncode == 0:
        branches = stdout.strip().split('\n')
        prs = []
        for i, branch in enumerate(branches):
            if branch.strip():
                branch_name = branch.strip().replace('origin/', '')
                prs.append({
                    'number': i + 1,
                    'title': f'Branch: {branch_name}',
                    'headRefName': branch_name,
                    'baseRefName': 'main'
                })
        print(f"Found {len(prs)} cursor branches")
        return prs
    else:
        print(f"Failed to get branches: {stderr}")
        return []

def resolve_merge_conflicts(branch_name):
    """Resolve merge conflicts for a specific branch"""
    print(f"\nResolving merge conflicts for branch: {branch_name}")
    
    # Switch to main branch
    returncode, stdout, stderr = run_command("git checkout main")
    if returncode != 0:
        print(f"Failed to checkout main: {stderr}")
        return False
    
    # Pull latest changes
    returncode, stdout, stderr = run_command("git pull origin main")
    if returncode != 0:
        print(f"Failed to pull main: {stderr}")
    
    # Fetch the branch
    returncode, stdout, stderr = run_command(f"git fetch origin {branch_name}")
    if returncode != 0:
        print(f"Failed to fetch branch {branch_name}: {stderr}")
        return False
    
    # Try to merge
    print(f"Attempting to merge {branch_name} into main...")
    returncode, stdout, stderr = run_command(f"git merge origin/{branch_name}")
    
    if returncode == 0:
        print(f"Successfully merged {branch_name}")
        return True
    else:
        print(f"Merge conflict detected for {branch_name}")
        print(f"Conflict details: {stderr}")
        
        # Check for conflict markers
        returncode, stdout, stderr = run_command("git status --porcelain")
        if returncode == 0:
            conflict_files = [line for line in stdout.split('\n') if line.startswith('UU') or '<<<<<<< HEAD' in line]
            if conflict_files:
                print(f"Conflict files: {conflict_files}")
                return resolve_conflicts_automatically()
        
        return False

def resolve_conflicts_automatically():
    """Automatically resolve common merge conflicts"""
    print("Attempting automatic conflict resolution...")
    
    # Find all files with conflict markers
    returncode, stdout, stderr = run_command("grep -r '<<<<<<< HEAD' . --include='*.tsx' --include='*.ts' --include='*.js' --include='*.jsx' --include='*.json' | cut -d: -f1 | sort | uniq")
    
    if returncode == 0:
        conflict_files = stdout.strip().split('\n')
        conflict_files = [f for f in conflict_files if f.strip()]
        
        for file_path in conflict_files:
            print(f"Resolving conflicts in: {file_path}")
            resolve_file_conflicts(file_path)
    
    # Add resolved files
    returncode, stdout, stderr = run_command("git add .")
    if returncode == 0:
        # Commit the merge
        returncode, stdout, stderr = run_command('git commit -m "Resolve merge conflicts automatically"')
        if returncode == 0:
            print("Successfully resolved and committed conflicts")
            return True
        else:
            print(f"Failed to commit resolved conflicts: {stderr}")
    
    return False

def resolve_file_conflicts(file_path):
    """Resolve conflicts in a specific file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Simple conflict resolution strategies
        lines = content.split('\n')
        resolved_lines = []
        skip_until = None
        
        for line in lines:
            if skip_until:
                if line.strip().startswith(skip_until):
                    skip_until = None
                continue
            
            if line.strip().startswith('<<<<<<< HEAD'):
                skip_until = '======='
                continue
            elif line.strip().startswith('======='):
                skip_until = '>>>>>>>'
                continue
            elif line.strip().startswith('>>>>>>>'):
                skip_until = None
                continue
            else:
                resolved_lines.append(line)
        
        # Write resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        
        print(f"Resolved conflicts in {file_path}")
        
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")

def merge_all_prs():
    """Main function to merge all open PRs"""
    print("Starting PR merge process...")
    
    # Get open PRs
    prs = get_open_prs()
    
    if not prs:
        print("No open PRs found")
        return
    
    print(f"Found {len(prs)} PRs to merge:")
    for pr in prs:
        print(f"  - {pr['title']} ({pr['headRefName']})")
    
    successful_merges = 0
    failed_merges = 0
    
    for pr in prs:
        branch_name = pr['headRefName']
        print(f"\n{'='*50}")
        print(f"Processing PR: {pr['title']}")
        print(f"Branch: {branch_name}")
        print(f"{'='*50}")
        
        if resolve_merge_conflicts(branch_name):
            successful_merges += 1
            print(f"✅ Successfully merged {branch_name}")
        else:
            failed_merges += 1
            print(f"❌ Failed to merge {branch_name}")
            
            # Try to abort the merge
            run_command("git merge --abort")
    
    print(f"\n{'='*50}")
    print("MERGE SUMMARY")
    print(f"{'='*50}")
    print(f"✅ Successful merges: {successful_merges}")
    print(f"❌ Failed merges: {failed_merges}")
    print(f"📊 Total processed: {len(prs)}")
    
    if successful_merges > 0:
        print("\nPushing merged changes to main...")
        returncode, stdout, stderr = run_command("git push origin main")
        if returncode == 0:
            print("✅ Successfully pushed merged changes to main")
        else:
            print(f"❌ Failed to push changes: {stderr}")

def cleanup_merged_branches():
    """Clean up merged branches"""
    print("\nCleaning up merged branches...")
    
    # Get list of merged branches
    returncode, stdout, stderr = run_command("git branch -r --merged main | grep 'origin/cursor/' | grep -v 'HEAD'")
    
    if returncode == 0:
        merged_branches = stdout.strip().split('\n')
        merged_branches = [b.strip().replace('origin/', '') for b in merged_branches if b.strip()]
        
        if merged_branches:
            print(f"Found {len(merged_branches)} merged branches to cleanup:")
            for branch in merged_branches:
                print(f"  - {branch}")
                # Delete remote branch
                run_command(f"git push origin --delete {branch}")
        else:
            print("No merged branches found to cleanup")

if __name__ == "__main__":
    print("🚀 Starting comprehensive PR merge process...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Merge all PRs
    merge_all_prs()
    
    # Cleanup merged branches
    cleanup_merged_branches()
    
    print("\n🎉 PR merge process completed!")