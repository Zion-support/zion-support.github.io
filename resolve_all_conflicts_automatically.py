#!/usr/bin/env python3
"""
Automatically resolve all merge conflicts by choosing the main branch version (HEAD)
This script will resolve conflicts in all files by keeping the HEAD version.
"""

import os
import re
import subprocess
import sys

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file by keeping HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content by conflict markers
        lines = content.split('\n')
        resolved_lines = []
        in_conflict = False
        keep_head = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                keep_head = True
                continue
            elif line.strip() == '=======':
                keep_head = False
                continue
            elif line.strip().startswith('>>>>>>> '):
                in_conflict = False
                keep_head = False
                continue
            
            if not in_conflict or keep_head:
                resolved_lines.append(line)
        
        # Write resolved content back
        resolved_content = '\n'.join(resolved_lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"✅ Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error resolving {file_path}: {e}")
        return False

def find_conflicted_files():
    """Find all files with merge conflicts"""
    try:
        result = subprocess.run(['git', 'status', '--porcelain'], 
                              capture_output=True, text=True, cwd='/workspace')
        
        conflicted_files = []
        for line in result.stdout.split('\n'):
            if line.startswith('UU') or line.startswith('AA') or line.startswith('DD'):
                file_path = line[3:].strip()
                if os.path.exists(file_path):
                    conflicted_files.append(file_path)
        
        return conflicted_files
    except Exception as e:
        print(f"Error finding conflicted files: {e}")
        return []

def main():
    print("🔧 Starting automatic conflict resolution...")
    
    # Find all conflicted files
    conflicted_files = find_conflicted_files()
    
    if not conflicted_files:
        print("✅ No conflicted files found!")
        return
    
    print(f"📁 Found {len(conflicted_files)} conflicted files")
    
    resolved_count = 0
    for file_path in conflicted_files:
        if resolve_conflicts_in_file(file_path):
            resolved_count += 1
    
    print(f"\n🎉 Resolved conflicts in {resolved_count}/{len(conflicted_files)} files")
    
    # Add all resolved files
    try:
        subprocess.run(['git', 'add', '.'], cwd='/workspace', check=True)
        print("✅ Added all resolved files to staging")
    except subprocess.CalledProcessError as e:
        print(f"❌ Error adding files: {e}")

if __name__ == "__main__":
    main()