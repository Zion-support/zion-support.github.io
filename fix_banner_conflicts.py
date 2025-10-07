#!/usr/bin/env python3
"""
Script to fix merge conflicts in banner components specifically.
"""

import re

def fix_banner_file(file_path):
    """Fix merge conflicts in banner files."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove all merge conflict markers and keep the main branch content
        # Pattern 1: Remove <<<<<<< HEAD ... ======= ... >>>>>>> main blocks
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> main', '', content, flags=re.DOTALL)
        
        # Pattern 2: Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> main', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>> main', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?=======', '', content, flags=re.DOTALL)
        
        # Clean up multiple newlines and whitespace
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        content = re.sub(r'^\s*\n', '', content, flags=re.MULTILINE)
        
        # Fix any broken JSX structure
        # Remove orphaned closing tags
        content = re.sub(r'</div>\s*</div>\s*</div>\s*</div>\s*</div>', '</div>', content)
        
        # Ensure proper JSX structure
        content = re.sub(r'<div>\s*<div>\s*<div>\s*<h3>', '<div className="text-center py-16 bg-gradient-to-r from-gray-900 to-gray-800">\n          <div className="container mx-auto px-4">\n            <h3 className="text-3xl font-bold text-white mb-4">', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed banner file: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

if __name__ == "__main__":
    files = [
        "app/components/September30NewContent2025Banner.tsx",
        "app/components/UltimateBusinessIntelligence2025Banner.tsx"
    ]
    
    for file_path in files:
        fix_banner_file(file_path)