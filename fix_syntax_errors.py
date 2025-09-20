#!/usr/bin/env python3
"""
Fix TypeScript syntax errors by replacing semicolons with commas in function parameters
"""

import os
import re
import subprocess
from pathlib import Path

def fix_syntax_errors():
    """Fix common TypeScript syntax errors"""
    
    # Find all TypeScript files
    ts_files = []
    for root, dirs, files in os.walk('src'):
        for file in files:
            if file.endswith(('.ts', '.tsx')):
                ts_files.append(os.path.join(root, file))
    
    print(f"Found {len(ts_files)} TypeScript files to process")
    
    fixed_files = 0
    total_fixes = 0
    
    for file_path in ts_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Fix function parameter syntax: (param1; param2) -> (param1, param2)
            content = re.sub(r'\(([^)]*);([^)]*)\)', r'(\1,\2)', content)
            
            # Fix object destructuring: { prop1; prop2 } -> { prop1, prop2 }
            content = re.sub(r'\{([^}]*);([^}]*)\}', r'{\1,\2}', content)
            
            # Fix array syntax: [item1; item2] -> [item1, item2]
            content = re.sub(r'\[([^\]]*);([^\]]*)\]', r'[\1,\2]', content)
            
            # Fix specific patterns that are common
            patterns = [
                # Function parameters with semicolons
                (r'(\w+):\s*(\w+);\s*(\w+):\s*(\w+)', r'\1: \2, \3: \4'),
                # Object properties with semicolons
                (r'(\w+):\s*([^,;]+);\s*(\w+):\s*([^,;]+)', r'\1: \2, \3: \4'),
                # Array elements with semicolons
                (r'(\d+);\s*(\d+)', r'\1, \2'),
                # String literals with semicolons
                (r'"([^"]+)";\s*"([^"]+)"', r'"\1", "\2"'),
            ]
            
            for pattern, replacement in patterns:
                content = re.sub(pattern, replacement, content)
            
            # Only write if content changed
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                fixed_files += 1
                changes = len(re.findall(r';', original_content)) - len(re.findall(r';', content))
                total_fixes += changes
                print(f"Fixed {file_path}: {changes} changes")
        
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nFixed {total_fixes} syntax errors in {fixed_files} files")

if __name__ == "__main__":
    fix_syntax_errors()