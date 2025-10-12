#!/usr/bin/env python3
"""
Script to fix malformed import statements in TypeScript/JavaScript files.
"""

import os
import re
import glob
from pathlib import Path

def fix_imports_in_file(file_path):
    """Fix malformed import statements in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed import statements
        # Pattern: import React from 'react', Component from './Component';
        content = re.sub(r"import\s+([^,]+),\s*([^,]+)\s+from\s+'([^']+)';", 
                        r"import \1 from '\3';\nimport \2 from '\3';", content)
        
        # Pattern: import React, { Component } from 'react', Other from './Other';
        content = re.sub(r"import\s+([^,]+),\s*\{([^}]+)\}\s+from\s+'([^']+)',\s*([^,]+)\s+from\s+'([^']+)';", 
                        r"import \1, {\2} from '\3';\nimport \4 from '\5';", content)
        
        # Pattern: import React from 'react', { Component } from './Component';
        content = re.sub(r"import\s+([^,]+)\s+from\s+'([^']+)',\s*\{([^}]+)\}\s+from\s+'([^']+)';", 
                        r"import \1 from '\2';\nimport {\3} from '\4';", content)
        
        # Pattern: import React from 'react', Component from './Component', Other from './Other';
        content = re.sub(r"import\s+([^,]+)\s+from\s+'([^']+)',\s*([^,]+)\s+from\s+'([^']+)',\s*([^,]+)\s+from\s+'([^']+)';", 
                        r"import \1 from '\2';\nimport \3 from '\4';\nimport \5 from '\6';", content)
        
        # Fix any remaining malformed imports
        # Pattern: import statement with comma in wrong place
        content = re.sub(r"import\s+([^,]+),\s*([^,]+)\s+from\s+'([^']+)';", 
                        r"import \1 from '\3';\nimport \2 from '\3';", content)
        
        # Clean up any duplicate imports
        lines = content.split('\n')
        seen_imports = set()
        cleaned_lines = []
        
        for line in lines:
            if line.strip().startswith('import '):
                if line.strip() not in seen_imports:
                    seen_imports.add(line.strip())
                    cleaned_lines.append(line)
            else:
                cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with malformed imports."""
    # Get all TypeScript, JavaScript, and JSX files
    file_patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_to_process = []
    for pattern in file_patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to process
    files_to_process = [f for f in files_to_process if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', 'build', '.next', 'coverage'
    ])]
    
    print(f"Found {len(files_to_process)} files to check for malformed imports")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_imports_in_file(file_path):
            fixed_count += 1
            print(f"Fixed imports in: {file_path}")
    
    print(f"Fixed imports in {fixed_count} files")

if __name__ == "__main__":
    main()