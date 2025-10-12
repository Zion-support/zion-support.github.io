#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix syntax errors in React/TypeScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed import statements
        # Fix: import React\nimport { ... } from '...'
        content = re.sub(r'import React\nimport', 'import React\nimport', content)
        
        # Fix: import { Helmet } from 'react-helmet-async' from 'react'
        content = re.sub(r"import \{ Helmet \} from 'react-helmet-async' from 'react'", "import { Helmet } from 'react-helmet-async'", content)
        
        # Fix: import React\nimport { ... } from '...' from '...'
        content = re.sub(r"import React\nimport \{ ([^}]+) \} from '([^']+)' from '([^']+)'", r"import React, { \1 } from '\3'", content)
        
        # Fix missing 'from' in import statements
        lines = content.split('\n')
        new_lines = []
        i = 0
        while i < len(lines):
            line = lines[i]
            if line.strip().startswith('import ') and ' from ' not in line and i + 1 < len(lines):
                next_line = lines[i + 1]
                if next_line.strip().startswith('import ') and ' from ' in next_line:
                    # Merge the two import lines
                    import_part = line.strip()
                    from_part = next_line.strip()
                    if 'import {' in from_part:
                        # Extract the parts
                        match = re.match(r"import \{ ([^}]+) \} from '([^']+)'", from_part)
                        if match:
                            imports, module = match.groups()
                            new_line = f"import { {imports} } from '{module}'"
                            new_lines.append(new_line)
                            i += 2  # Skip both lines
                            continue
                new_lines.append(line)
            else:
                new_lines.append(line)
            i += 1
        
        content = '\n'.join(new_lines)
        
        # Clean up any remaining issues
        content = re.sub(r'\n\n\n+', '\n\n', content)
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
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
            if fix_syntax_errors(file_path):
                fixed_count += 1
    
    print(f"Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()