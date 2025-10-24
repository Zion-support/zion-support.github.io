#!/usr/bin/env python3
"""
Script to fix 'use client' directive conflicts with metadata exports
"""
import os
import re
import glob

def fix_client_metadata(file_path):
    """Fix 'use client' directive conflicts with metadata exports"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has both 'use client' and metadata export
        if "'use client'" in content and 'export const metadata' in content:
            # Remove the 'use client' directive
            content = re.sub(r"'use client';\n?", '', content)
            
            # Write the fixed content back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Fixed client/metadata conflict in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all client/metadata conflicts"""
    # Find all TypeScript/JavaScript files in app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next']):
                continue
                
            total_files += 1
            if fix_client_metadata(file_path):
                fixed_count += 1
    
    print(f"\nFixed client/metadata conflicts in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()