#!/usr/bin/env python3
import os
import re
import subprocess

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file by keeping HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Resolving conflicts in: {file_path}")
        
        # Remove all conflict markers and keep HEAD version
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+\n?', r'\1\n', content, flags=re.DOTALL)
        
        # Pattern 2: <<<<<<< HEAD ... ======= (no content after =======)
        content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n>>>>>>> [^\n]+\n?', r'\1\n', content, flags=re.DOTALL)
        
        # Pattern 3: <<<<<<< HEAD ... ======= (no content before =======)
        content = re.sub(r'<<<<<<< HEAD\n=======\n(.*?)\n>>>>>>> [^\n]+\n?', r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'^<<<<<<< HEAD\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^=======\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>> [^\n]+\n', '', content, flags=re.MULTILINE)
        
        # Clean up any double newlines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Get list of files with conflicts
    try:
        result = subprocess.run(['git', 'grep', '-l', '<<<<<<< HEAD'], 
                              capture_output=True, text=True, cwd='.')
        if result.returncode != 0:
            print("No files with merge conflicts found")
            return
        
        files_with_conflicts = result.stdout.strip().split('\n')
        files_with_conflicts = [f for f in files_with_conflicts if f.endswith('.tsx') and not f.startswith('./backup-problematic/')]
        
        print(f"Found {len(files_with_conflicts)} files with merge conflicts")
        
        resolved_count = 0
        for file_path in files_with_conflicts:
            if resolve_conflicts_in_file(file_path):
                resolved_count += 1
        
        print(f"Resolved conflicts in {resolved_count} files")
        
        # Verify no conflicts remain
        result = subprocess.run(['git', 'grep', '-l', '<<<<<<< HEAD'], 
                              capture_output=True, text=True, cwd='.')
        if result.returncode == 0:
            remaining_files = result.stdout.strip().split('\n')
            remaining_files = [f for f in remaining_files if f.endswith('.tsx') and not f.startswith('./backup-problematic/')]
            if remaining_files:
                print(f"Warning: {len(remaining_files)} files still have conflicts: {remaining_files}")
            else:
                print("All merge conflicts resolved successfully!")
        else:
            print("All merge conflicts resolved successfully!")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()