#!/usr/bin/env python3
"""
Fix 'use client' directive placement in Next.js files.
This script ensures 'use client' is at the very top of files.
"""

import os
import re
import glob
from pathlib import Path

def fix_use_client_directive(file_path):
    """Fix 'use client' directive placement in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no 'use client' directive
        if "'use client'" not in content and '"use client"' not in content:
            return False
        
        # Check if 'use client' is already at the top
        lines = content.split('\n')
        if lines[0].strip() == "'use client'" or lines[0].strip() == '"use client"':
            return False
        
        # Find and remove existing 'use client' directive
        content = re.sub(r"^['\"]use client['\"];\s*\n?", '', content, flags=re.MULTILINE)
        content = re.sub(r"\n\s*['\"]use client['\"];\s*\n?", '\n', content)
        
        # Add 'use client' at the very top
        content = "'use client';\n" + content
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed 'use client' directive placement: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing 'use client' directive in {file_path}: {e}")
        return False

def find_tsx_files():
    """Find all TypeScript React files."""
    files = []
    
    # Search for TypeScript React files
    patterns = [
        'app/**/*.tsx',
        'src/**/*.tsx',
        'components/**/*.tsx'
    ]
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files.append(file_path)
    
    return files

def main():
    """Main function to fix 'use client' directive placement."""
    print("Starting 'use client' directive fixes...")
    
    # Find all TSX files
    tsx_files = find_tsx_files()
    print(f"Found {len(tsx_files)} TSX files")
    
    fixed_count = 0
    
    for file_path in tsx_files:
        if fix_use_client_directive(file_path):
            fixed_count += 1
    
    print(f"\n'use client' directive fixes complete:")
    print(f"  - Fixed: {fixed_count} files")

if __name__ == "__main__":
    main()