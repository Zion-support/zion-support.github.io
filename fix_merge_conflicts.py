#!/usr/bin/env python3
"""
Script to automatically resolve common merge conflicts in TypeScript/JavaScript files.
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
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts."""
    # Get list of files with merge conflicts
    result = os.popen("find . -name '*.tsx' -o -name '*.ts' -o -name '*.js' -o -name '*.jsx' | grep -v node_modules | grep -v '.git' | xargs grep -l '^<<<<<<<\\|^=======\\|^>>>>>>>'").read()
    
    files = [f.strip() for f in result.split('\n') if f.strip()]
    
    print(f"Found {len(files)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()