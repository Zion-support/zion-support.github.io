#!/usr/bin/env python3
"""
Comprehensive branch merger for handling thousands of branches
"""

import os
import subprocess
import sys
import time
from datetime import datetime

def run_command(cmd, timeout=300):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        print(f"Command timed out: {cmd}")
        return 1, "", "Timeout"
    except Exception as e:
        print(f"Error running command '{cmd}': {e}")
        return 1, "", str(e)

def get_all_branches():
    """Get all remote branches"""
    _, stdout, _ = run_command("git branch -r --format='%(refname:short)'")
    branches = [line.strip() for line in stdout.split('\n') if line.strip() and not line.strip().endswith('/main')]
    return branches

def get_important_branches():
    """Get important branches based on naming patterns"""
    all_branches = get_all_branches()
    
    # Priority patterns for important branches
    priority_patterns = [
        'comprehensive',
        'clean',
        'content',
        'improvements',
        'merge',
        'backup',
        'working',
        'final',
        'complete',
        'enhancement',
        'update',
        'fix',
        'main'
    ]
    
    important_branches = []
    for branch in all_branches:
        branch_lower = branch.lower()
        if any(pattern in branch_lower for pattern in priority_patterns):
            important_branches.append(branch)
    
    return important_branches[:50]  # Limit to 50 most important branches

def merge_branch(branch_name):
    """Attempt to merge a branch into main"""
    print(f"Attempting to merge {branch_name}...")
    
    # Checkout main first
    run_command("git checkout main")
    
    # Try to merge the branch
    returncode, stdout, stderr = run_command(f"git merge {branch_name} --no-edit", timeout=60)
    
    if returncode == 0:
        print(f"✅ Successfully merged {branch_name}")
        return True
    else:
        print(f"❌ Failed to merge {branch_name}: {stderr}")
        # Abort the merge
        run_command("git merge --abort")
        return False

def resolve_conflicts_automatically():
    """Automatically resolve common merge conflicts"""
    _, stdout, _ = run_command("git status --porcelain")
    conflicted_files = [line.split()[1] for line in stdout.split('\n') if line.startswith('UU') or line.startswith('AA')]
    
    if not conflicted_files:
        return True
    
    print(f"Found {len(conflicted_files)} conflicted files, attempting auto-resolution...")
    
    for file_path in conflicted_files:
        if not os.path.exists(file_path):
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Simple conflict resolution - favor HEAD
            if '<<<<<<< HEAD' in content:
                lines = content.split('\n')
                resolved_lines = []
                in_conflict = False
                keep_head = True
                
                for line in lines:
                    if line.strip() == '<<<<<<< HEAD':
                        in_conflict = True
                        keep_head = True
                        continue
                    elif line.strip() == '=======':
                        keep_head = False
                        continue
                    elif line.strip().startswith('>>>>>>>'):
                        in_conflict = False
                        keep_head = True
                        continue
                    
                    if not in_conflict or keep_head:
                        resolved_lines.append(line)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write('\n'.join(resolved_lines))
                
                print(f"Resolved conflicts in {file_path}")
        
        except Exception as e:
            print(f"Error resolving conflicts in {file_path}: {e}")
    
    # Add resolved files
    run_command("git add .")
    return True

def main():
    print("🚀 Starting comprehensive branch merger...")
    print(f"Timestamp: {datetime.now()}")
    
    # Get important branches
    important_branches = get_important_branches()
    print(f"Found {len(important_branches)} important branches to process")
    
    successful_merges = 0
    failed_merges = 0
    
    for i, branch in enumerate(important_branches, 1):
        print(f"\n[{i}/{len(important_branches)}] Processing {branch}")
        
        try:
            if merge_branch(branch):
                successful_merges += 1
                
                # Try to resolve any conflicts
                if not resolve_conflicts_automatically():
                    print(f"Failed to resolve conflicts for {branch}")
                    failed_merges += 1
                    continue
                
                # Commit the merge
                run_command("git commit -m f'Merge {branch} - automated merge'")
                
            else:
                failed_merges += 1
                
        except Exception as e:
            print(f"Error processing {branch}: {e}")
            failed_merges += 1
        
        # Small delay to prevent overwhelming the system
        time.sleep(1)
    
    print(f"\n📊 Merge Summary:")
    print(f"✅ Successful merges: {successful_merges}")
    print(f"❌ Failed merges: {failed_merges}")
    print(f"📈 Success rate: {successful_merges/(successful_merges+failed_merges)*100:.1f}%")
    
    # Push changes
    print("\n🚀 Pushing changes to origin...")
    returncode, stdout, stderr = run_command("git push origin main")
    if returncode == 0:
        print("✅ Successfully pushed to origin")
    else:
        print(f"❌ Failed to push: {stderr}")
    
    return successful_merges > 0

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)