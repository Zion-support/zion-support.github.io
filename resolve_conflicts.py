#!/usr/bin/env python3
import os
import re
import subprocess

def resolve_merge_conflicts():
    """Resolve all merge conflicts by keeping the main branch version"""
    
    # Find all files with merge conflicts
    try:
        result = subprocess.run(['git', 'grep', '-l', '<<<<<<< HEAD'], 
                              capture_output=True, text=True, cwd='/workspace')
        if result.returncode != 0:
            print("No merge conflicts found")
            return
        
        files_with_conflicts = result.stdout.strip().split('\n')
        print(f"Found {len(files_with_conflicts)} files with merge conflicts")
        
        for file_path in files_with_conflicts:
            if not file_path or not os.path.exists(file_path):
                continue
                
            print(f"Resolving conflicts in: {file_path}")
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if '<<<<<<< HEAD' not in content:
                continue
            
            # Pattern 1: Keep everything after ======= (main branch version)
            pattern1 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n?'
            content = re.sub(pattern1, r'\2\n', content, flags=re.DOTALL)
            
            # Pattern 2: Remove simple HEAD markers
            pattern2 = r'<<<<<<< HEAD\n=======\n(.*?)\n>>>>>>> [^\n]+\n?'
            content = re.sub(pattern2, r'\1\n', content, flags=re.DOTALL)
            
            # Pattern 3: Remove any remaining conflict markers
            content = re.sub(r'<<<<<<< HEAD\n.*?=======\n.*?>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
            content = re.sub(r'^<<<<<<< HEAD\n', '', content, flags=re.MULTILINE)
            content = re.sub(r'^=======\n', '', content, flags=re.MULTILINE)
            content = re.sub(r'^>>>>>>> [^\n]+\n?', '', content, flags=re.MULTILINE)
            
            # Clean up any double newlines
            content = re.sub(r'\n\n\n+', '\n\n', content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✓ Resolved conflicts in {file_path}")
        
        print("All merge conflicts resolved!")
        
    except Exception as e:
        print(f"Error resolving conflicts: {e}")

if __name__ == "__main__":
    resolve_merge_conflicts()