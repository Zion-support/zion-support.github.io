#!/usr/bin/env python3
"""
Fix extra closing braces in React components
"""

import os
import re
import glob
from pathlib import Path

def fix_extra_braces(file_path):
    """Fix extra closing braces in React components"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove extra closing braces at the end
        content = re.sub(r'\n\s*}\s*$', '', content)
        
        # Ensure proper closing
        if not content.strip().endswith('}'):
            content += '\n}'
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
                
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
    return False

def main():
    """Main function to fix extra braces"""
    workspace = Path('/workspace')
    
    # File extensions to process
    extensions = ['*.tsx', '*.jsx']
    
    total_files = 0
    fixed_files = 0
    
    print("Starting extra braces fixes...")
    
    for ext in extensions:
        pattern = workspace / 'app' / '**' / ext
        files = glob.glob(str(pattern), recursive=True)
        
        for file_path in files:
            # Skip specific files
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            total_files += 1
            
            if fix_extra_braces(file_path):
                fixed_files += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nExtra braces fixes complete!")
    print(f"Total files processed: {total_files}")
    print(f"Files fixed: {fixed_files}")

if __name__ == "__main__":
    main()