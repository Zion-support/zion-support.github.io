#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the codebase
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove all merge conflict markers and keep the last version (usually the most complete)
        # This is a simple approach - in practice, you might want more sophisticated conflict resolution
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [a-f0-9]+', content, flags=re.DOTALL)
        
        # If we have multiple parts, take the last one (usually the most recent/complete)
        if len(parts) > 1:
            # Take the last part, but also check if there are any remaining conflict markers
            clean_content = parts[-1]
            
            # Remove any remaining conflict markers
            clean_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [a-f0-9]+', '', clean_content, flags=re.DOTALL)
            clean_content = re.sub(r'=======.*?>>>>>>> [a-f0-9]+', '', clean_content, flags=re.DOTALL)
            clean_content = re.sub(r'<<<<<<< HEAD.*?=======', '', clean_content, flags=re.DOTALL)
            
            # Clean up extra whitespace
            clean_content = re.sub(r'\n\s*\n\s*\n', '\n\n', clean_content)
            clean_content = clean_content.strip() + '\n'
            
            # Write the cleaned content back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(clean_content)
            
            return True
        else:
            # No conflicts found or already resolved
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other irrelevant directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build']):
                continue
                
            files_processed += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()