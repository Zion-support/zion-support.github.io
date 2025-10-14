#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by accepting incoming changes
"""
import os
import re
import subprocess
import sys

def resolve_conflicts_in_file(file_path):
    """Resolve conflicts in a single file by accepting incoming changes"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match conflict markers
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        
        # Replace conflicts with incoming changes (the part after =======)
        def replace_conflict(match):
            incoming = match.group(2)
            return incoming
        
        resolved_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Write back the resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
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
                if file_path:
                    conflicted_files.append(file_path)
        
        return conflicted_files
    except Exception as e:
        print(f"Error finding conflicted files: {e}")
        return []

def main():
    print("Starting conflict resolution...")
    
    # Find all conflicted files
    conflicted_files = find_conflicted_files()
    
    if not conflicted_files:
        print("No conflicted files found.")
        return
    
    print(f"Found {len(conflicted_files)} conflicted files:")
    for file_path in conflicted_files:
        print(f"  - {file_path}")
    
    # Resolve conflicts in each file
    resolved_count = 0
    for file_path in conflicted_files:
        full_path = os.path.join('/workspace', file_path)
        if os.path.exists(full_path):
            if resolve_conflicts_in_file(full_path):
                resolved_count += 1
    
    print(f"\nResolved conflicts in {resolved_count}/{len(conflicted_files)} files")
    
    # Add resolved files to git
    try:
        subprocess.run(['git', 'add', '.'], cwd='/workspace', check=True)
        print("Added resolved files to git")
    except subprocess.CalledProcessError as e:
        print(f"Error adding files to git: {e}")

if __name__ == "__main__":
    main()