#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in TypeScript/React files.
This script will clean up merge conflict markers and choose the most appropriate version.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in {file_path}")
        
        # Remove all merge conflict markers and keep the last version (usually the most recent)
        # This is a simple approach - in practice, you might want more sophisticated logic
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD.*?\n', content, flags=re.DOTALL)
        if len(parts) < 2:
            return False
            
        # For each part, remove the ======= and >>>>>>> lines and keep the last part
        cleaned_parts = []
        for part in parts:
            # Remove ======= and >>>>>>> lines
            part = re.sub(r'=======.*?\n', '', part, flags=re.DOTALL)
            part = re.sub(r'>>>>>>> .*?\n', '', part, flags=re.DOTALL)
            cleaned_parts.append(part)
        
        # Join the parts, keeping the last non-empty part
        final_content = ''
        for part in cleaned_parts:
            if part.strip():
                final_content = part.strip()
        
        # If we still have merge conflict markers, try a more aggressive approach
        if '<<<<<<< HEAD' in final_content or '=======' in final_content or '>>>>>>> ' in final_content:
            # Remove all lines with merge conflict markers
            lines = final_content.split('\n')
            cleaned_lines = []
            skip_until_end = False
            
            for line in lines:
                if '<<<<<<< HEAD' in line or '=======' in line or '>>>>>>> ' in line:
                    skip_until_end = True
                    continue
                if not skip_until_end:
                    cleaned_lines.append(line)
            
            final_content = '\n'.join(cleaned_lines)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(final_content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix merge conflicts in all relevant files."""
    # Find all TypeScript/React files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other irrelevant directories
    files_to_fix = [f for f in files_to_fix if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', '.next', 'out', 'backup', 'disabled'
    ])]
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()