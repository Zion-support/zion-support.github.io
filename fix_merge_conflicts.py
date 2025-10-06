#!/usr/bin/env python3
"""
<<<<<<< HEAD
Script to automatically resolve common merge conflicts in TypeScript/JavaScript files.
=======
Script to automatically resolve merge conflicts in TypeScript/JavaScript files
by choosing the HEAD version and cleaning up conflict markers.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3927
"""

import os
import re
import sys
from pathlib import Path

def fix_merge_conflicts(file_path):
<<<<<<< HEAD
    """Fix merge conflicts in a single file."""
=======
    """Fix merge conflicts in a single file by choosing HEAD version."""
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3927
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        original_content = content
        
        # Pattern 1: Multiple nested merge conflicts with imports
        # Look for patterns like <<<<<<< HEAD ... ======= ... >>>>>>> main
        # and resolve by keeping the most complete import statement
        
        # Fix import conflicts - keep the most comprehensive import
        import_pattern = r'<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> main'
        
        def resolve_imports(match):
            head_content = match.group(1).strip()
            main_content = match.group(2).strip()
            
            # If main content has more imports or is more complete, use it
            if len(main_content) > len(head_content) or 'import' in main_content:
                return main_content
            else:
                return head_content
        
        content = re.sub(import_pattern, resolve_imports, content, flags=re.DOTALL)
        
        # Pattern 2: Simple property conflicts (keep the version with trailing comma)
        property_pattern = r'<<<<<<< HEAD\s*\n\s*([^,}]+)\s*\n=======\s*\n\s*([^,}]+),\s*\n>>>>>>> main'
        content = re.sub(property_pattern, r'\2,', content)
        
        # Pattern 3: Remove any remaining simple merge conflict markers
        # Keep the content between ======= and >>>>>>> main (usually the main branch)
        simple_conflict_pattern = r'<<<<<<< HEAD\s*\n.*?\n=======\s*\n(.*?)\n>>>>>>> main'
        content = re.sub(simple_conflict_pattern, r'\1', content, flags=re.DOTALL)
        
        # Pattern 4: Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> main', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> main', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>> main', '', content, flags=re.DOTALL)
        
        # Clean up multiple newlines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # If content changed, write it back
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        else:
            return False
            
=======
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n'
        
        # Replace conflicts with HEAD version
        fixed_content = re.sub(conflict_pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n', '', fixed_content)
        fixed_content = re.sub(r'=======\n', '', fixed_content)
        fixed_content = re.sub(r'>>>>>>> [^\n]+\n', '', fixed_content)
        
        # Clean up multiple empty lines
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        if content != fixed_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        return False
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3927
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
    """Main function to process all files with merge conflicts."""
    # Get list of files with merge conflicts
    result = os.popen("find . -name '*.tsx' -o -name '*.ts' -o -name '*.js' -o -name '*.jsx' | grep -v node_modules | grep -v '.git' | xargs grep -l '^<<<<<<<\\|^=======\\|^>>>>>>>'").read()
=======
    """Main function to process all TypeScript/JavaScript files."""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        'app/**/*.js',
        'app/**/*.jsx',
        'src/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.js', 
        'src/**/*.jsx',
        'components/**/*.tsx',
        'components/**/*.ts',
        'components/**/*.js',
        'components/**/*.jsx',
        '*.tsx',
        '*.ts',
        '*.js',
        '*.jsx'
    ]
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3927
    
    files = [f.strip() for f in result.split('\n') if f.strip()]
    
<<<<<<< HEAD
    print(f"Found {len(files)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")
=======
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_merge_conflicts(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files")
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3927

if __name__ == "__main__":
    main()