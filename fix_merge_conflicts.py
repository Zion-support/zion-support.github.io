#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the latest version
(after the ======= marker) and removing conflict markers.
"""

import os
import re
import sys
from pathlib import Path

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Pattern to match merge conflict blocks
        # This will match from <<<<<<< HEAD to ======= to >>>>>>> branch
        conflict_pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]+'
        
        # Replace conflict blocks with the content after =======
        # The (.*?) captures everything after ======= and before >>>>>>>
        def replace_conflict(match):
            return match.group(1).strip()
        
        # Apply the replacement
        new_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be incomplete conflict markers
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?=======', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'>>>>>>> [^\n]+', '', new_content)
        
        # Clean up any extra whitespace
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts."""
    workspace = Path('/workspace')
    
    # Find all TypeScript/JavaScript files
    file_patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in file_patterns:
        for file_path in workspace.glob(pattern):
            # Skip node_modules and other irrelevant directories
            if 'node_modules' in str(file_path) or '.git' in str(file_path):
                continue
                
            files_processed += 1
            
            if fix_merge_conflicts(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files with merge conflicts")
    
    return files_fixed > 0

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)