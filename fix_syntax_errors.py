#!/usr/bin/env python3
"""
Fix syntax errors in React components - missing closing braces, etc.
"""

import os
import re
import glob
from pathlib import Path

def fix_syntax_errors(file_path):
    """Fix syntax errors in React components"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing closing braces by adding them at the end
        # Count opening and closing braces
        open_braces = content.count('{')
        close_braces = content.count('}')
        
        if open_braces > close_braces:
            missing_braces = open_braces - close_braces
            # Add missing closing braces
            content += '\n' + '}' * missing_braces
        
        # Fix common syntax issues
        # Remove any trailing commas before closing braces
        content = re.sub(r',\s*}', '}', content)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
                
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
    return False

def main():
    """Main function to fix syntax errors"""
    workspace = Path('/workspace')
    
    # File extensions to process
    extensions = ['*.tsx', '*.jsx']
    
    total_files = 0
    fixed_files = 0
    
    print("Starting syntax error fixes...")
    
    for ext in extensions:
        pattern = workspace / 'app' / '**' / ext
        files = glob.glob(str(pattern), recursive=True)
        
        for file_path in files:
            # Skip specific files
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            total_files += 1
            
            if fix_syntax_errors(file_path):
                fixed_files += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nSyntax error fixes complete!")
    print(f"Total files processed: {total_files}")
    print(f"Files fixed: {fixed_files}")

if __name__ == "__main__":
    main()