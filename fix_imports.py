#!/usr/bin/env python3
import os
import re
import glob

def fix_imports(file_path):
    """Fix malformed import statements in React/TypeScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed import statements
        # Fix: import {'Link'} from 'react-router-dom'
        content = re.sub(r"import \{'([^']+)'\} from '([^']+)'", r"import { \1 } from '\2'", content)
        
        # Fix: import { Helmet } from 'react-helmet-async', { useState } from 'react';
        content = re.sub(r"import \{ Helmet \} from 'react-helmet-async', \{ ([^}]+) \} from '([^']+)';", r"import { Helmet } from 'react-helmet-async';\nimport { \1 } from '\2';", content)
        
        # Fix: import { Helmet } from 'react-helmet-async' from 'react'
        content = re.sub(r"import \{ Helmet \} from 'react-helmet-async' from 'react'", "import { Helmet } from 'react-helmet-async'", content)
        
        # Fix: import React\nimport { ... } from '...'
        content = re.sub(r'import React\nimport', 'import React\nimport', content)
        
        # Fix missing semicolons
        content = re.sub(r"import \{ ([^}]+) \} from '([^']+)'$", r"import { \1 } from '\2';", content, flags=re.MULTILINE)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Remove trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed imports in: {file_path}")
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    fixed_count = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_imports(file_path):
                fixed_count += 1
    
    print(f"Fixed imports in {fixed_count} files")

if __name__ == "__main__":
    main()