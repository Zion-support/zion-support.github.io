#!/usr/bin/env python3
import os
import subprocess
import sys

def resolve_conflicts():
    """Resolve merge conflicts by choosing the main branch version"""
    
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
            print(f"File {file_path} doesn't exist, skipping")
            continue
            
        print(f"Resolving conflicts in {file_path}")
        
        try:
            # Read the file content
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if file has conflict markers
            if '<<<<<<< HEAD' in content and '=======' in content and '>>>>>>> main' in content:
                # Split by conflict markers and take the main branch version (after ======= and before >>>>>>> main)
                lines = content.split('\n')
                resolved_lines = []
                in_conflict = False
                take_main = False
                
                for line in lines:
                    if line.strip() == '<<<<<<< HEAD':
                        in_conflict = True
                        take_main = False
                    elif line.strip() == '=======':
                        take_main = True
                    elif line.strip() == '>>>>>>> main':
                        in_conflict = False
                        take_main = False
                    elif not in_conflict or take_main:
                        resolved_lines.append(line)
                
                # Write resolved content
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write('\n'.join(resolved_lines))
                
                print(f"Resolved conflicts in {file_path}")
            else:
                print(f"No conflict markers found in {file_path}")
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
            continue
    
    # Add resolved files
    subprocess.run(['git', 'add', '.'])
    
    print("All conflicts resolved and files staged")

if __name__ == "__main__":
    resolve_conflicts()