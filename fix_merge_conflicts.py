#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the codebase
"""
import os
import re
import glob

def fix_merge_conflict(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            # Try alternative pattern
            parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>>', content, flags=re.DOTALL)
        
        if len(parts) >= 3:
            # Keep the second part (after =======) which is usually the newer version
            new_content = parts[0] + parts[2] + parts[4] if len(parts) > 4 else parts[0] + parts[2]
            
            # Clean up any remaining conflict markers
            new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+\n?', '', new_content, flags=re.DOTALL)
            new_content = re.sub(r'=======\n?', '', new_content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            return True
        else:
            # If we can't parse it properly, try to remove all conflict markers
            new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
            new_content = re.sub(r'=======\n?', '', new_content)
            
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                return True
                
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
    return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            total_files += 1
            if fix_merge_conflict(file_path):
                files_fixed += 1
    
    print(f"\nFixed merge conflicts in {files_fixed} out of {total_files} files")
    
    # Check for remaining conflicts
    remaining_conflicts = []
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                if '<<<<<<< HEAD' in content:
                    remaining_conflicts.append(file_path)
            except:
                pass
    
    if remaining_conflicts:
        print(f"\nRemaining conflicts in {len(remaining_conflicts)} files:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
    else:
        print("\nAll merge conflicts have been resolved!")

if __name__ == "__main__":
    main()