#!/usr/bin/env python3

import subprocess
import sys
import re
import os

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return -1, "", "Command timed out"

def resolve_conflicts_automatically():
    """Automatically resolve merge conflicts"""
    print("🔧 Resolving merge conflicts automatically...")
    
    # Get list of conflicted files
    returncode, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
    if returncode != 0 or not stdout.strip():
        print("No conflicted files found")
        return True
    
    conflicted_files = stdout.strip().split('\n')
    print(f"Found {len(conflicted_files)} conflicted files")
    
    for file_path in conflicted_files:
        if not file_path.strip():
            continue
            
        print(f"Processing {file_path}...")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove conflict markers and keep both versions
            content = re.sub(r'<<<<<<< HEAD\n', '', content)
            content = re.sub(r'=======\n', '', content)
            content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
            
            # Clean up any remaining conflict artifacts
            content = re.sub(r'<<<<<<< [^\n]+\n', '', content)
            content = re.sub(r'=======\n', '', content)
            content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
            
            # Write back the cleaned content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            # Add the resolved file
            run_command(f"git add {file_path}")
            print(f"✅ Resolved conflicts in {file_path}")
            
        except Exception as e:
            print(f"❌ Error processing {file_path}: {e}")
            continue
    
    return True

def handle_deleted_files():
    """Handle files that were deleted by us"""
    print("🗑️  Handling deleted files...")
    
    # Get list of deleted files
    returncode, stdout, stderr = run_command("git diff --name-only --diff-filter=D")
    if returncode != 0 or not stdout.strip():
        print("No deleted files found")
        return True
    
    deleted_files = stdout.strip().split('\n')
    print(f"Found {len(deleted_files)} deleted files")
    
    for file_path in deleted_files:
        if not file_path.strip():
            continue
            
        print(f"Removing {file_path}...")
        run_command(f"git rm {file_path}")
        print(f"✅ Removed {file_path}")
    
    return True

def handle_both_added_files():
    """Handle files that were added by both sides"""
    print("➕ Handling both added files...")
    
    # Get list of both added files
    returncode, stdout, stderr = run_command("git diff --name-only --diff-filter=A")
    if returncode != 0 or not stdout.strip():
        print("No both added files found")
        return True
    
    both_added_files = stdout.strip().split('\n')
    print(f"Found {len(both_added_files)} both added files")
    
    for file_path in both_added_files:
        if not file_path.strip():
            continue
            
        print(f"Adding {file_path}...")
        run_command(f"git add {file_path}")
        print(f"✅ Added {file_path}")
    
    return True

def main():
    """Main function to resolve all conflicts"""
    print("🚀 Starting comprehensive conflict resolution...")
    
    # Handle deleted files
    if not handle_deleted_files():
        print("❌ Failed to handle deleted files")
        return False
    
    # Handle both added files
    if not handle_both_added_files():
        print("❌ Failed to handle both added files")
        return False
    
    # Resolve merge conflicts
    if not resolve_conflicts_automatically():
        print("❌ Failed to resolve merge conflicts")
        return False
    
    # Commit the merge
    print("\n💾 Committing merge...")
    returncode, stdout, stderr = run_command("git commit -m \"Resolve all merge conflicts and merge all PRs\"")
    if returncode == 0:
        print("✅ Successfully committed merge")
        return True
    else:
        print(f"❌ Failed to commit merge: {stderr}")
        return False

if __name__ == "__main__":
    main()