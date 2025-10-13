#!/usr/bin/env python3
"""
Aggressive merge conflict cleanup script
This script will clean up all merge conflict markers from the codebase more aggressively
"""

import os
import re
import glob
from pathlib import Path

def clean_merge_conflicts_aggressive(file_path):
    """Clean merge conflict markers from a single file aggressively"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove all merge conflict markers and keep the first version (HEAD)
        # Pattern to match:         pattern = r'        content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Handle cases where there might be just         pattern2 = r'        content = re.sub(pattern2, r'\1', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers completely
        content = re.sub(r'        content = re.sub(r'\s*\n?', '', content)
        content = re.sub(r'        
        # Clean up extra whitespace and empty lines
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        content = re.sub(r'^\s*\n+', '', content)
        content = re.sub(r'\n\s*$', '\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
    return False

def main():
    """Main function to clean all merge conflicts aggressively"""
    workspace = Path('/workspace')
    
    # File extensions to process
    extensions = ['*.tsx', '*.ts', '*.js', '*.jsx', '*.json', '*.md', '*.cjs', '*.mjs', '*.py']
    
    total_files = 0
    cleaned_files = 0
    
    print("Starting aggressive merge conflict cleanup...")
    
    for ext in extensions:
        pattern = workspace / '**' / ext
        files = glob.glob(str(pattern), recursive=True)
        
        for file_path in files:
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out', 'backup', 'corrupted', 'disabled', 'temp']):
                continue
                
            total_files += 1
            
            if clean_merge_conflicts_aggressive(file_path):
                cleaned_files += 1
                print(f"Cleaned: {file_path}")
    
    print(f"\nAggressive cleanup complete!")
    print(f"Total files processed: {total_files}")
    print(f"Files cleaned: {cleaned_files}")

if __name__ == "__main__":
    main()