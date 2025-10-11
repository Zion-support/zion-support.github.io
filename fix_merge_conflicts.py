#!/usr/bin/env python3
"""
Script to fix merge conflicts in the codebase by resolving conflicts and cleaning up markers.
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
        
        # Skip if no merge conflicts
        if '<<<<<<<' not in content or '=======' not in content or '>>>>>>>' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<<[^>]*\n(.*?)\n=======\n(.*?)\n>>>>>>>[^\n]*\n?'
        
        def resolve_conflict(match):
            head_content = match.group(1).strip()
            incoming_content = match.group(2).strip()
            
            # Prefer the longer content (usually more complete)
            if len(incoming_content) > len(head_content):
                return incoming_content
            else:
                return head_content
        
        # Replace all merge conflicts
        new_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'<<<<<<<[^\n]*\n?', '', new_content)
        new_content = re.sub(r'=======\n?', '', new_content)
        new_content = re.sub(r'>>>>>>>[^\n]*\n?', '', new_content)
        
        # Clean up multiple consecutive newlines
        new_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', new_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_jsx_syntax_errors(file_path):
    """Fix common JSX syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix unescaped > characters in JSX
        content = re.sub(r'([^<])(>)([^>])', r'\1&gt;\3', content)
        
        # Fix unescaped < characters in JSX
        content = re.sub(r'([^<])(<)([^>])', r'\1&lt;\3', content)
        
        # Fix unescaped & characters
        content = re.sub(r'([^&])(&)([^;])', r'\1&amp;\3', content)
        
        # Fix unescaped quotes in JSX attributes
        content = re.sub(r'="([^"]*)"([^>]*)"([^"]*)"', r'="\1&quot;\3"', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
    except Exception as e:
        print(f"Error fixing JSX syntax in {file_path}: {e}")

def main():
    """Main function to fix all merge conflicts."""
    # Get all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip backup and disabled files
            if any(skip in file_path for skip in ['backup', 'disabled', '.original', 'node_modules']):
                continue
                
            files_processed += 1
            if fix_merge_conflicts_in_file(file_path):
                files_fixed += 1
                # Also fix JSX syntax errors
                if file_path.endswith(('.tsx', '.jsx')):
                    fix_jsx_syntax_errors(file_path)
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()