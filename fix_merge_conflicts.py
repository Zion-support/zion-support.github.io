#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing HEAD version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by choosing HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Count conflicts before
        conflicts_before = content.count('<<<<<<< HEAD')
        
        if conflicts_before == 0:
            return 0, 0
        
        # Pattern to match merge conflicts and choose HEAD version
        # This pattern matches:
        # <<<<<<< HEAD
        # ... content from HEAD ...
        # =======
        # ... content from other branch ...
        # >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+'
        
        # Replace with HEAD content
        new_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Count conflicts after
        conflicts_after = new_content.count('<<<<<<< HEAD')
        
        # Write back if changes were made
        if conflicts_after < conflicts_before:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return conflicts_before, conflicts_after
        
        return conflicts_before, conflicts_after
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return 0, 0

def main():
    """Main function to fix merge conflicts in all relevant files"""
    # File patterns to process
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    total_files = 0
    total_conflicts_before = 0
    total_conflicts_after = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other irrelevant directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            total_files += 1
            conflicts_before, conflicts_after = fix_merge_conflicts(file_path)
            total_conflicts_before += conflicts_before
            total_conflicts_after += conflicts_after
            
            if conflicts_before > 0:
                print(f"Fixed {conflicts_before - conflicts_after} conflicts in {file_path}")
    
    print(f"\nSummary:")
    print(f"Files processed: {total_files}")
    print(f"Total conflicts before: {total_conflicts_before}")
    print(f"Total conflicts after: {total_conflicts_after}")
    print(f"Conflicts resolved: {total_conflicts_before - total_conflicts_after}")

if __name__ == "__main__":
    main()