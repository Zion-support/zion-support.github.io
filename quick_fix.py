#!/usr/bin/env python3

import os
import re
import glob

def quick_fix():
    """Quick fix for common syntax errors"""
    
    # Find all TypeScript/JavaScript files
    files = glob.glob("*.{ts,tsx,js,jsx}")
    files.extend(glob.glob("src/**/*.{ts,tsx,js,jsx}", recursive=True))
    files = [f for f in files if not f.startswith('node_modules') and not f.startswith('.next') and not f.startswith('.git')]
    
    print(f"Found {len(files)} files to process")
    
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Fix double commas
            content = re.sub(r',\s*,', ',', content)
            content = re.sub(r',\s*\)', ')', content)
            content = re.sub(r'\(\s*,', '(', content)
            
            # Fix missing function declarations
            if content.strip().startswith('return (') and 'function' not in content:
                content = 'export default function Component() {\n' + content + '\n}'
            
            # Fix missing React import
            if 'import React' not in content and ('from "react"' in content or 'from \'react\'' in content):
                content = 'import React from "react";\n' + content
            
            # Fix trailing commas
            content = re.sub(r',\s*}', '}', content)
            content = re.sub(r',\s*]', ']', content)
            
            # Fix JSX syntax
            content = re.sub(r'<(\w+),\s*', r'<\1 ', content)
            content = re.sub(r',\s*>', '>', content)
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed {file_path}")
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    quick_fix()