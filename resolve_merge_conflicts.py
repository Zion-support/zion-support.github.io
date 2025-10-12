#!/usr/bin/env python3
"""
Script to resolve merge conflicts by choosing the incoming changes (PR branch)
"""
import os
import re
import subprocess
import sys

def resolve_merge_conflicts():
    """Resolve merge conflicts by choosing incoming changes"""
    
    # Get list of files with merge conflicts
    try:
        result = subprocess.run(['git', 'status', '--porcelain'], 
                              capture_output=True, text=True, check=True)
        conflicted_files = []
        
        for line in result.stdout.split('\n'):
            if line.startswith('UU ') or line.startswith('AA ') or line.startswith('DD '):
                file_path = line[3:].strip()
                if file_path:
                    conflicted_files.append(file_path)
        
        print(f"Found {len(conflicted_files)} files with merge conflicts")
        
        # Resolve conflicts by choosing incoming changes
        for file_path in conflicted_files:
            if not os.path.exists(file_path):
                print(f"File {file_path} does not exist, skipping...")
                continue
                
            print(f"Resolving conflicts in {file_path}...")
            
            try:
                # Read the file
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Remove merge conflict markers and keep incoming changes
                # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch
                pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]+'
                replacement = r'\1'
                
                # Apply the pattern multiple times to handle nested conflicts
                new_content = content
                while re.search(pattern, new_content, re.DOTALL):
                    new_content = re.sub(pattern, replacement, new_content, flags=re.DOTALL)
                
                # Also handle simple conflicts without branch names
                pattern2 = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>>'
                new_content = re.sub(pattern2, r'\1', new_content, flags=re.DOTALL)
                
                # Write the resolved content
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                
                # Add the file to staging
                subprocess.run(['git', 'add', file_path], check=True)
                print(f"✓ Resolved conflicts in {file_path}")
                
            except Exception as e:
                print(f"✗ Error resolving {file_path}: {e}")
                continue
        
        print(f"\nResolved conflicts in {len(conflicted_files)} files")
        
        # Check if there are any remaining conflicts
        result = subprocess.run(['git', 'status', '--porcelain'], 
                              capture_output=True, text=True, check=True)
        remaining_conflicts = [line for line in result.stdout.split('\n') 
                             if line.startswith('UU ') or line.startswith('AA ') or line.startswith('DD ')]
        
        if remaining_conflicts:
            print(f"Warning: {len(remaining_conflicts)} files still have conflicts")
            for conflict in remaining_conflicts:
                print(f"  - {conflict[3:]}")
        else:
            print("✓ All merge conflicts resolved!")
            
    except subprocess.CalledProcessError as e:
        print(f"Error running git command: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"Unexpected error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    resolve_merge_conflicts()