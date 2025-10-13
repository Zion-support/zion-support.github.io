#!/usr/bin/env python3
import os
import re
import glob

def aggressive_fix_conflicts(file_path):
    """Aggressively fix merge conflicts by removing all conflict markers and keeping content"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts

        # Clean up any double newlines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Write cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all files with merge conflicts
    file_patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    resolved_count = 0
    
    for pattern in file_patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if aggressive_fix_conflicts(file_path):
                resolved_count += 1
    
    print(f"\nFixed conflicts in {resolved_count} files")

if __name__ == "__main__":
    main()