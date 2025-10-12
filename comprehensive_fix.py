#!/usr/bin/env python3
"""
Comprehensive fix for all parsing errors
"""

import os
import re
import glob

def fix_broken_imports(file_path):
    """Fix broken import statements"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix broken imports like "import  from" -> remove the line
        content = re.sub(r'^import\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        
        # Fix broken imports like "import { } from" -> remove the line
        content = re.sub(r'^import\s+{\s*}\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        
        # Fix broken imports like "import , from" -> remove the line
        content = re.sub(r'^import\s+,\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_jsx_syntax_errors(file_path):
    """Fix common JSX syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed JSX fragments
        content = re.sub(r'^\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix malformed JSX fragments in the middle of lines
        content = re.sub(r'\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*', '', content, flags=re.MULTILINE)
        
        # Fix missing spaces in className attributes
        content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
        
        # Fix missing spaces in other attributes
        content = re.sub(r'(\w)([A-Z])', r'\1 \2', content)
        
        # Fix malformed JSX tags
        content = re.sub(r'<([^>]*?)([a-zA-Z])([a-zA-Z])([^>]*?)>', r'<\1\2 \3\4>', content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all parsing errors"""
    # Get all TypeScript and JavaScript files
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
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            files_processed += 1
            fixed = False
            
            if fix_broken_imports(file_path):
                fixed = True
                print(f"Fixed broken imports in: {file_path}")
            
            if fix_jsx_syntax_errors(file_path):
                fixed = True
                print(f"Fixed JSX syntax errors in: {file_path}")
            
            if fixed:
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed errors in {files_fixed} files")

if __name__ == "__main__":
    main()