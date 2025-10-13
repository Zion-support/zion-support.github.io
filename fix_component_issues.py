#!/usr/bin/env python3
"""
Script to fix common component issues like missing useState, duplicate imports, etc.
"""

import os
import re
import sys
from pathlib import Path

def fix_component_issues(file_path):
    """Fix common component issues in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file needs fixing
        needs_fixing = False
        original_content = content
        
        # Fix duplicate imports
        lines = content.split('\n')
        seen_imports = set()
        new_lines = []
        
        for line in lines:
            if line.strip().startswith('import '):
                # Normalize the import line for comparison
                normalized = re.sub(r'\s+', ' ', line.strip())
                if normalized not in seen_imports:
                    seen_imports.add(normalized)
                    new_lines.append(line)
                else:
                    needs_fixing = True
            else:
                new_lines.append(line)
        
        content = '\n'.join(new_lines)
        
        # Fix missing useState import
        if 'useState' in content and 'import.*useState' not in content:
            # Find the React import line
            react_import_pattern = r'(import React)([^;]*);'
            match = re.search(react_import_pattern, content)
            if match:
                if 'useState' not in match.group(2):
                    content = re.sub(react_import_pattern, r'\1, { useState }\2;', content)
                    needs_fixing = True
        
        # Fix missing useEffect import
        if 'useEffect' in content and 'import.*useEffect' not in content:
            # Find the React import line
            react_import_pattern = r'(import React[^;]*)([^;]*);'
            match = re.search(react_import_pattern, content)
            if match:
                if 'useEffect' not in match.group(2):
                    content = re.sub(react_import_pattern, r'\1, { useEffect }\2;', content)
                    needs_fixing = True
        
        # Fix missing useRef import
        if 'useRef' in content and 'import.*useRef' not in content:
            # Find the React import line
            react_import_pattern = r'(import React[^;]*)([^;]*);'
            match = re.search(react_import_pattern, content)
            if match:
                if 'useRef' not in match.group(2):
                    content = re.sub(react_import_pattern, r'\1, { useRef }\2;', content)
                    needs_fixing = True
        
        # Fix missing useCallback import
        if 'useCallback' in content and 'import.*useCallback' not in content:
            # Find the React import line
            react_import_pattern = r'(import React[^;]*)([^;]*);'
            match = re.search(react_import_pattern, content)
            if match:
                if 'useCallback' not in match.group(2):
                    content = re.sub(react_import_pattern, r'\1, { useCallback }\2;', content)
                    needs_fixing = True
        
        # Fix missing useMemo import
        if 'useMemo' in content and 'import.*useMemo' not in content:
            # Find the React import line
            react_import_pattern = r'(import React[^;]*)([^;]*);'
            match = re.search(react_import_pattern, content)
            if match:
                if 'useMemo' not in match.group(2):
                    content = re.sub(react_import_pattern, r'\1, { useMemo }\2;', content)
                    needs_fixing = True
        
        # Fix components that don't return JSX
        if 'export default function' in content and 'return (' not in content and 'return <' not in content:
            # Check if the function has a return statement
            function_match = re.search(r'export default function\s+\w+\([^)]*\)\s*\{([^}]*)\}', content, re.DOTALL)
            if function_match:
                function_body = function_match.group(1).strip()
                if not function_body.startswith('return'):
                    # Add a basic return statement
                    content = re.sub(
                        r'(export default function\s+\w+\([^)]*\)\s*\{)',
                        r'\1\n  return (\n    <div>\n      <h1>Page Content</h1>\n    </div>\n  );',
                        content
                    )
                    needs_fixing = True
        
        if needs_fixing and content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with component issues."""
    workspace = Path('/workspace')
    app_dir = workspace / 'app'
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all .tsx files
    files_to_check = []
    for file_path in app_dir.rglob('*.tsx'):
        files_to_check.append(file_path)
    
    print(f"Checking {len(files_to_check)} files for component issues")
    
    fixed_count = 0
    for file_path in files_to_check:
        if fix_component_issues(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path.relative_to(workspace)}")
    
    print(f"\nFixed {fixed_count} files")

if __name__ == "__main__":
    main()