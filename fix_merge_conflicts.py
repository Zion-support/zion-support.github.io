#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the codebase.
This script will:
1. Find all files with merge conflict markers
2. Resolve conflicts by choosing the appropriate version
3. Clean up the files
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
        
        # Check if file has merge conflict markers
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Split content by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        if len(parts) < 2:
            return False
        
        # Start with the content before the first conflict
        result = parts[0]
        
        # Process each conflict
        for i in range(1, len(parts), 3):
            if i + 2 < len(parts):
                head_content = parts[i]
                other_content = parts[i + 1]
                after_content = parts[i + 2]
                
                # Choose HEAD version (usually the more recent/complete version)
                # But check for specific patterns that might indicate which version to choose
                if 'import' in head_content and 'import' in other_content:
                    # For imports, prefer the more complete version
                    if len(head_content.strip()) > len(other_content.strip()):
                        result += head_content
                    else:
                        result += other_content
                elif 'export' in head_content or 'function' in head_content or 'const' in head_content:
                    # For code, prefer HEAD version
                    result += head_content
                else:
                    # Default to HEAD version
                    result += head_content
                
                result += after_content
        
        # Clean up any remaining merge conflict markers
        result = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n?', '', result, flags=re.DOTALL)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(result)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_jsx_syntax_errors(file_path):
    """Fix common JSX syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix common JSX issues
        # Remove any stray merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
        
        # Fix unclosed JSX tags by adding proper closing
        # This is a basic fix - more complex cases might need manual intervention
        lines = content.split('\n')
        fixed_lines = []
        open_tags = []
        
        for line in lines:
            # Skip empty lines that might be from merge conflicts
            if line.strip() == '':
                continue
                
            # Check for opening tags
            open_tag_matches = re.findall(r'<(\w+)(?:\s[^>]*)?(?:>|/>)', line)
            for tag in open_tag_matches:
                if not line.strip().endswith('/>'):
                    open_tags.append(tag)
            
            # Check for closing tags
            close_tag_matches = re.findall(r'</(\w+)>', line)
            for tag in close_tag_matches:
                if tag in open_tags:
                    open_tags.remove(tag)
            
            fixed_lines.append(line)
        
        # Add closing tags for any unclosed tags
        for tag in reversed(open_tags):
            fixed_lines.append(f'</{tag}>')
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(fixed_lines))
        
        return True
        
    except Exception as e:
        print(f"Error fixing JSX in {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    print("Starting merge conflict resolution...")
    
    # Find all TypeScript/JavaScript files
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
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            
            # First try to fix merge conflicts
            if fix_merge_conflicts_in_file(file_path):
                files_fixed += 1
                continue
            
            # Then try to fix JSX syntax errors
            if file_path.endswith(('.tsx', '.jsx')):
                if fix_jsx_syntax_errors(file_path):
                    files_fixed += 1
    
    print(f"Processed {files_processed} files")
    print(f"Fixed {files_fixed} files")
    print("Merge conflict resolution complete!")

if __name__ == "__main__":
    main()