#!/usr/bin/env python3
import os
import re
import subprocess

def resolve_merge_conflicts():
    """Resolve merge conflicts by choosing the main branch version (HEAD)"""
    
    # Get list of conflicted files
    result = subprocess.run(['git', 'status', '--porcelain'], capture_output=True, text=True)
    conflicted_files = []
    
    for line in result.stdout.split('\n'):
        if line.startswith('UU') or line.startswith('AA') or line.startswith('DD'):
            file_path = line[3:].strip()
            if file_path:
                conflicted_files.append(file_path)
    
    print(f"Found {len(conflicted_files)} conflicted files")
    
    for file_path in conflicted_files:
        if not os.path.exists(file_path):
            print(f"Skipping {file_path} - file doesn't exist")
            continue
            
        print(f"Resolving conflicts in {file_path}")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove conflict markers and keep only HEAD version
            # Pattern:  ...  ...             pattern = r'\n(.*?)\n\n(.*?)\n            
            def replace_conflict(match):
                head_content = match.group(1)
                return head_content
            
            resolved_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
            
            # Also handle cases where there might be different conflict markers
            # Pattern: <<<<<<< ...  ... >>>>>>> 
            pattern2 = r'<<<<<<< [^\n]+\n(.*?)\n\n(.*?)\n            resolved_content = re.sub(pattern2, replace_conflict, resolved_content, flags=re.DOTALL)
            
            # Write the resolved content back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
                
            print(f"Resolved conflicts in {file_path}")
            
        except Exception as e:
            print(f"Error resolving {file_path}: {e}")
            continue
    
    # Add all resolved files
    subprocess.run(['git', 'add', '.'])
    print("Added all resolved files to staging")

if __name__ == "__main__":
    resolve_merge_conflicts()