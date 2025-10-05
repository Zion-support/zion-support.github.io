#!/usr/bin/env python3
"""
Script to fix all merge conflicts by removing conflict markers
"""

import os
import subprocess
import sys
import re

def run_command(cmd, check=True):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        return False, e.stdout, e.stderr

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        content = re.sub(r'=======.*?\n?', '', content)
        content = re.sub(r'>>>>>>> [a-f0-9]+\n?', '', content)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< .*\n?', '', content)
        content = re.sub(r'=======.*?\n?', '', content)
        content = re.sub(r'>>>>>>> .*\n?', '', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    print("🔧 Fixing all merge conflicts...")
    
    # Get all files with merge conflicts
    success, stdout, stderr = run_command("grep -r '<<<<<<< HEAD' . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist --exclude='*.py' -l")
    if not success:
        print("✅ No merge conflicts found!")
        return 0
    
    conflicted_files = stdout.strip().split('\n')
    conflicted_files = [f for f in conflicted_files if f.strip()]
    
    print(f"📋 Found {len(conflicted_files)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in conflicted_files:
        if fix_merge_conflicts_in_file(file_path):
            print(f"✅ Fixed: {file_path}")
            fixed_count += 1
        else:
            print(f"ℹ️  No changes needed: {file_path}")
    
    print(f"\n🎉 Fixed {fixed_count} files out of {len(conflicted_files)}")
    
    # Add all fixed files
    if fixed_count > 0:
        print("\n📝 Adding fixed files to git...")
        run_command("git add .")
        
        # Commit the fixes
        print("💾 Committing conflict fixes...")
        success, stdout, stderr = run_command("git commit -m 'Fix all merge conflicts - remove conflict markers'")
        if success:
            print("✅ Successfully committed conflict fixes!")
        else:
            print(f"❌ Failed to commit fixes: {stderr}")
            return 1
        
        # Push changes
        print("🚀 Pushing changes...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print("✅ Successfully pushed changes!")
        else:
            print(f"❌ Failed to push changes: {stderr}")
            return 1
    
    return 0

if __name__ == "__main__":
    sys.exit(main())