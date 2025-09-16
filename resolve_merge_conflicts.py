#!/usr/bin/env python3
import os
import re
import sys

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts by choosing the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> .*?\n', content, flags=re.DOTALL)
        
        if len(parts) < 2:
            return False
            
        # Reconstruct content by choosing HEAD version
        resolved_content = parts[0]  # Content before first conflict
        
        for i in range(1, len(parts), 3):
            if i + 1 < len(parts):
                head_content = parts[i]  # HEAD version
                resolved_content += head_content
                if i + 2 < len(parts):
                    resolved_content += parts[i + 2]  # Content after conflict
        
        # Write resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
            
        print(f"Resolved merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all files with merge conflicts
    import subprocess
    result = subprocess.run(['find', '.', '-name', '*.js', '-o', '-name', '*.jsx', '-o', '-name', '*.ts', '-o', '-name', '*.tsx'], 
                          capture_output=True, text=True, cwd='/workspace')
    
    files = result.stdout.strip().split('\n')
    resolved_count = 0
    
    for file_path in files:
        if file_path and not file_path.startswith('./node_modules'):
            if resolve_merge_conflicts(file_path):
                resolved_count += 1
    
    print(f"Resolved merge conflicts in {resolved_count} files")

if __name__ == "__main__":
    main()