#!/usr/bin/env python3
"""
More aggressive script to fix remaining merge conflicts
"""
import os
import re
import glob

def fix_remaining_conflicts(file_path):
    """Fix remaining merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Count conflicts before
        conflicts_before = content.count('<<<<<<< HEAD')
        
        if conflicts_before == 0:
            return 0, 0
        
        # More aggressive patterns to handle various conflict formats
        patterns = [
            # Standard conflicts
            r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+',
            # Conflicts without proper separators
            r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+',
            # Conflicts with extra whitespace
            r'<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n.*?\n>>>>>>> [^\n]+',
            # Conflicts with different line endings
            r'<<<<<<< HEAD\r?\n(.*?)\r?\n=======\r?\n.*?\r?\n>>>>>>> [^\n]+',
        ]
        
        new_content = content
        for pattern in patterns:
            new_content = re.sub(pattern, r'\1', new_content, flags=re.DOTALL)
        
        # Also handle cases where there are just conflict markers without proper structure
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?\n', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'=======.*?\n', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'>>>>>>> [^\n]*\n?', '', new_content, flags=re.DOTALL)
        
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
    """Main function to fix remaining merge conflicts"""
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
            conflicts_before, conflicts_after = fix_remaining_conflicts(file_path)
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