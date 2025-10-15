#!/usr/bin/env python3
"""
Script to fix function names that start with numbers.
"""

import os
import glob
import re

def fix_function_names(file_path):
    """Fix function names that start with numbers."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix function names that start with numbers
        content = re.sub(r'export default function 5G(\w+)Page\(\)', r'export default function FiveG\1Page()', content)
        content = re.sub(r'export default function 5g(\w+)Page\(\)', r'export default function FiveG\1Page()', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed {file_path}")
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")

def main():
    """Fix all files with problematic function names."""
    # Find all TypeScript/JavaScript files
    files = glob.glob('**/*.tsx', recursive=True) + glob.glob('**/*.ts', recursive=True) + glob.glob('**/*.js', recursive=True) + glob.glob('**/*.jsx', recursive=True)
    
    # Filter out node_modules
    files = [f for f in files if 'node_modules' not in f]
    
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if file has function names starting with numbers
            if re.search(r'export default function 5[Gg]', content):
                fix_function_names(file_path)
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    main()