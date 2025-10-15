#!/usr/bin/env python3
"""
Comprehensive script to fix merge conflicts and syntax errors in the codebase.
This script will:
1. Remove merge conflict markers
2. Fix malformed imports and syntax errors
3. Clean up corrupted files
4. Restore proper React/TypeScript structure
"""

import os
import re
import glob
from pathlib import Path

def fix_import_statements(content):
    """Fix malformed import statements"""
    # Fix imports with extra quotes and semicolons
    content = re.sub(r"import\s+([^;]+);'", r"import \1", content)
    content = re.sub(r"from\s+'([^']+)';'", r"from '\1'", content)
    content = re.sub(r"import\s+([^;]+);\"", r"import \1", content)
    content = re.sub(r"from\s+\"([^\"]+)\";\"", r"from \"\1\"", content)
    
    # Fix React imports
    content = re.sub(r"import\s+React\s+from\s+'react;'", "import React from 'react'", content)
    content = re.sub(r"import\s+React\s+from\s+\"react;\"", "import React from \"react\"", content)
    
    return content

def fix_jsx_syntax(content):
    """Fix malformed JSX syntax"""
    # Fix className attributes
    content = re.sub(r'className\s*=\s*"([^"]*)"\s*/>', r'className="\1" />', content)
    content = re.sub(r'className\s*=\s*"([^"]*)"\s*/>', r'className="\1" />', content)
    
    # Fix malformed JSX elements
    content = re.sub(r'<([A-Z][a-zA-Z]*):\s*className\s*=\s*"([^"]*)"\s*/>', r'<\1 className="\2" />', content)
    
    # Fix variable declarations
    content = re.sub(r'const:\s*([^=]+)\s*=\s*', r'const \1 = ', content)
    content = re.sub(r'const\s+([^=]+):\s*=\s*', r'const \1 = ', content)
    
    return content

def fix_merge_conflicts(content):
    """Remove merge conflict markers and keep the HEAD version"""
    lines = content.split('\n')
    result = []
    in_conflict = False
    conflict_type = None
    
    for line in lines:
        if line.strip().startswith('<<<<<<<'):
            in_conflict = True
            conflict_type = 'head'
            continue
        elif line.strip().startswith('======='):
            conflict_type = 'other'
            continue
        elif line.strip().startswith('>>>>>>>'):
            in_conflict = False
            conflict_type = None
            continue
        
        if not in_conflict or conflict_type == 'head':
            result.append(line)
    
    return '\n'.join(result)

def fix_syntax_errors(content):
    """Fix common syntax errors"""
    # Fix malformed quotes in strings
    content = re.sub(r"'([^']*)''", r"'\1'", content)
    content = re.sub(r'"([^"]*)""', r'"\1"', content)
    
    # Fix semicolons in wrong places
    content = re.sub(r';\s*"', r'"', content)
    content = re.sub(r';\s*\'', r"'", content)
    
    # Fix malformed object properties
    content = re.sub(r'{\s*;\s*', r'{', content)
    content = re.sub(r';\s*:\s*', r': ', content)
    
    # Fix array syntax
    content = re.sub(r'\[\s*;\s*', r'[', content)
    
    return content

def fix_react_component_structure(content):
    """Fix React component structure"""
    # Ensure proper component export
    if 'export default' not in content and 'const ' in content and '= () =>' in content:
        # Add export default at the end
        content = content.rstrip() + '\n\nexport default Page;'
    
    # Fix component function syntax
    content = re.sub(r'const:\s*Page\s*=\s*\(\)\s*=>\s*{', 'const Page = () => {', content)
    content = re.sub(r'const\s+Page:\s*=\s*\(\)\s*=>\s*{', 'const Page = () => {', content)
    
    return content

def clean_file(file_path):
    """Clean a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes in order
        content = fix_merge_conflicts(content)
        content = fix_import_statements(content)
        content = fix_jsx_syntax(content)
        content = fix_syntax_errors(content)
        content = fix_react_component_structure(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    print("Starting merge conflict cleanup...")
    
    # Get all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to process
    files_to_process = [f for f in files_to_process if 'node_modules' not in f and '.git' not in f]
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if clean_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files out of {len(files_to_process)} processed")

if __name__ == "__main__":
    main()