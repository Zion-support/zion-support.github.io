#!/usr/bin/env python3

import os
import subprocess
import re

def resolve_conflicts():
    """Automatically resolve merge conflicts by choosing the feature branch version"""
    
    print("Starting automatic conflict resolution...")
    
    # Get list of conflicted files
    result = subprocess.run(['git', 'status', '--porcelain'], capture_output=True, text=True)
    conflicted_files = []
    
    for line in result.stdout.split('\n'):
        if line.startswith('UU') or line.startswith('AA') or line.startswith('DD'):
            file_path = line[3:].strip()
            conflicted_files.append(file_path)
    
    print(f"Found {len(conflicted_files)} conflicted files")
    
    # For each conflicted file, choose the feature branch version (theirs)
    for file_path in conflicted_files:
        if os.path.exists(file_path):
            print(f"Resolving conflicts in {file_path}")
            
            # Read the file content
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace conflict markers with feature branch content
            # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
            # We want to keep the content between ======= and >>>>>>>
            
            # Split by conflict markers
            parts = re.split(r'<<<<<<< HEAD.*?=======(.*?)>>>>>>>.*', content, flags=re.DOTALL)
            
            if len(parts) > 1:
                # Keep the feature branch version (after =======)
                resolved_content = parts[0]
                for i in range(1, len(parts), 2):
                    if i + 1 < len(parts):
                        resolved_content += parts[i + 1]
                
                # Write the resolved content
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(resolved_content)
                
                print(f"Resolved conflicts in {file_path}")
            else:
                print(f"No conflict markers found in {file_path}")
    
    # Handle the tsconfig.tsbuildinfo file (modify/delete conflict)
    if os.path.exists('tsconfig.tsbuildinfo'):
        print("Removing tsconfig.tsbuildinfo (feature branch deleted it)")
        os.remove('tsconfig.tsbuildinfo')
    
    print("Conflict resolution completed!")
    
    # Add all resolved files
    subprocess.run(['git', 'add', '.'])
    
    print("All files added to staging area")

if __name__ == "__main__":
    resolve_conflicts()