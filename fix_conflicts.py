#!/usr/bin/env python3
import os
import re
import subprocess

def resolve_conflicts():
    """Resolve merge conflicts by accepting main branch version"""
    
    # Find all files with conflict markers
    result = subprocess.run(['grep', '-r', '-l', '^<<<<<<<', '.'], 
                          capture_output=True, text=True, cwd='/workspace')
    
    if result.returncode != 0:
        print("No conflict files found")
        return
    
    conflict_files = result.stdout.strip().split('\n')
    print(f"Found {len(conflict_files)} files with conflicts")
    
    for file_path in conflict_files:
        if not file_path or '.git' in file_path:
            continue
            
        print(f"Resolving: {file_path}")
        
        try:
            # Read the file
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove conflict markers and keep the first version (HEAD)
            # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch
            pattern = r'<<<<<<< HEAD(.*?)=======(.*?)>>>>>>>.*?'
            resolved_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
            
            # Write the resolved content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
                
            print(f"Resolved: {file_path}")
            
        except Exception as e:
            print(f"Error resolving {file_path}: {e}")

if __name__ == "__main__":
    resolve_conflicts()