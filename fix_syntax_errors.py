#!/usr/bin/env python3
"""
Script to fix common syntax errors in TypeScript/JavaScript files.
"""

import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing commas in array/object literals
        # Pattern: } followed by newline and {
        content = re.sub(r'}\s*\n\s*{', '},\n    {', content)
        
        # Fix missing semicolons after variable declarations
        content = re.sub(r'(\w+)\s*=\s*\[([^\]]+)\]\s*\n\s*{', r'\1 = [\2],\n    {', content)
        
        # Fix missing export statements
        if 'export default' not in content and 'const ' in content and 'React.FC' in content:
            # Find the component name
            match = re.search(r'const (\w+): React\.FC', content)
            if match:
                component_name = match.group(1)
                content += f'\n\nexport default {component_name};'
        
        # Fix missing imports
        if 'React' in content and 'import React' not in content:
            content = "import React from 'react';\n" + content
        
        # Fix missing semicolons at end of statements
        content = re.sub(r'(\w+)\s*=\s*\[([^\]]+)\]\s*$', r'\1 = [\2];', content, flags=re.MULTILINE)
        
        # Fix missing closing brackets
        if content.count('{') > content.count('}'):
            content += '\n}'
        
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

def main():
    """Main function to process all files."""
    patterns = [
        './app/**/*.tsx',
        './app/**/*.ts',
        './components/**/*.tsx',
        './components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_syntax_errors(file_path):
                    files_fixed += 1
                    print(f"Fixed syntax errors in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed syntax errors in {files_fixed} files")

if __name__ == "__main__":
    main()