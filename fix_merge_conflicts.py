#!/usr/bin/env python3
"""
Script to fix merge conflicts in TypeScript/JavaScript files
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
        
        # Remove all merge conflict markers and choose the latest version
        # This is a simple approach - we'll take everything after the last =======
        lines = content.split('\n')
        cleaned_lines = []
        in_conflict = False
        conflict_depth = 0
        
        for line in lines:
            if line.strip().startswith('<<<<<<<'):
                in_conflict = True
                conflict_depth += 1
                continue
            elif line.strip().startswith('======='):
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                conflict_depth -= 1
                continue
            elif not in_conflict:
                cleaned_lines.append(line)
            elif in_conflict and conflict_depth == 1:
                # Take the first version (HEAD)
                cleaned_lines.append(line)
        
        # Clean up any remaining issues
        cleaned_content = '\n'.join(cleaned_lines)
        
        # Remove duplicate imports and clean up
        cleaned_content = re.sub(r'import\s+.*?;\s*\n\s*import\s+.*?;', '', cleaned_content, flags=re.MULTILINE)
        
        # Fix common syntax issues
        cleaned_content = re.sub(r'}\s*}\s*}\s*$', '}', cleaned_content)
        cleaned_content = re.sub(r'export\s+default\s+\w+;\s*export\s+default\s+\w+;', 'export default AIServicesPage;', cleaned_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
            
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"Fixed merge conflicts in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()