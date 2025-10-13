#!/usr/bin/env python3
"""
Script to fix merge conflicts by removing conflict markers and keeping the correct content.
This script will:
1. Find all files with merge conflict markers
2. Remove the conflict markers and keep the content after the ======= marker
3. Fix common syntax issues that result from merge conflicts
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove merge conflict markers and keep the content after =======
        # Pattern: <<<<<<< ... ======= ... >>>>>>>
        conflict_pattern = r'<<<<<<<[^>]*=======([^>]*)>>>>>>>'
        content = re.sub(conflict_pattern, r'\1', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<<[^>]*', '', content)
        content = re.sub(r'=======[^>]*', '', content)
        content = re.sub(r'>>>>>>>[^>]*', '', content)
        
        # Fix common syntax issues
        # Fix unclosed JSX tags by adding proper closing tags
        content = fix_jsx_syntax(content)
        
        # Remove empty lines that might have been left by conflict markers
        lines = content.split('\n')
        cleaned_lines = []
        for line in lines:
            # Skip lines that are just whitespace or conflict remnants
            if line.strip() and not re.match(r'^[\s]*$', line):
                cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        else:
            print(f"No conflicts found in: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_jsx_syntax(content):
    """Fix common JSX syntax issues."""
    # Fix unclosed div tags
    content = re.sub(r'<div([^>]*)>(?!.*</div>)', r'<div\1></div>', content, flags=re.DOTALL)
    
    # Fix unclosed p tags
    content = re.sub(r'<p([^>]*)>(?!.*</p>)', r'<p\1></p>', content, flags=re.DOTALL)
    
    # Fix unclosed span tags
    content = re.sub(r'<span([^>]*)>(?!.*</span>)', r'<span\1></span>', content, flags=re.DOTALL)
    
    # Fix unclosed section tags
    content = re.sub(r'<section([^>]*)>(?!.*</section>)', r'<section\1></section>', content, flags=re.DOTALL)
    
    # Fix unclosed main tags
    content = re.sub(r'<main([^>]*)>(?!.*</main>)', r'<main\1></main>', content, flags=re.DOTALL)
    
    # Fix unclosed header tags
    content = re.sub(r'<header([^>]*)>(?!.*</header>)', r'<header\1></header>', content, flags=re.DOTALL)
    
    # Fix unclosed footer tags
    content = re.sub(r'<footer([^>]*)>(?!.*</footer>)', r'<footer\1></footer>', content, flags=re.DOTALL)
    
    return content

def find_files_with_conflicts():
    """Find all files with merge conflict markers."""
    conflict_files = []
    
    # Search for TypeScript/JavaScript files
    for pattern in ['**/*.tsx', '**/*.ts', '**/*.jsx', '**/*.js']:
        for file_path in glob.glob(pattern, recursive=True):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<<' in content or '=======' in content or '>>>>>>>' in content:
                        conflict_files.append(file_path)
            except:
                continue
    
    return conflict_files

def main():
    """Main function to fix all merge conflicts."""
    print("Finding files with merge conflicts...")
    conflict_files = find_files_with_conflicts()
    
    if not conflict_files:
        print("No files with merge conflicts found.")
        return
    
    print(f"Found {len(conflict_files)} files with merge conflicts.")
    
    fixed_count = 0
    for file_path in conflict_files:
        if fix_merge_conflicts_in_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files.")
    print("Merge conflict resolution complete!")

if __name__ == "__main__":
    main()