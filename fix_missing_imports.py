#!/usr/bin/env python3
"""
Script to add missing import statements to files that use SEOHead but don't import it.
"""

import os
import re

def fix_missing_imports(file_path):
    """Fix missing imports in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file uses SEOHead but doesn't import it
        if 'SEOHead' in content and 'import.*SEOHead' not in content:
            lines = content.split('\n')
            new_lines = []
            
            # Determine the correct import path based on file location
            if 'ai-services' in file_path:
                seohead_import = "import SEOHead from '../../components/SEOHead';"
            else:
                seohead_import = "import SEOHead from '../components/SEOHead';"
            
            # Add imports at the beginning
            new_lines.append('import React from \'react\';')
            new_lines.append(seohead_import)
            new_lines.append('')
            
            # Add the rest of the content
            for line in lines:
                if line.strip() and not line.startswith('import'):
                    new_lines.append(line)
                elif line.startswith('import'):
                    new_lines.append(line)
                else:
                    new_lines.append(line)
            
            new_content = '\n'.join(new_lines)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"Fixed imports in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix all files with missing imports."""
    # Get all files that use SEOHead but don't import it
    files_to_fix = []
    
    for root, dirs, files in os.walk('app'):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if 'SEOHead' in content and 'import.*SEOHead' not in content:
                        files_to_fix.append(file_path)
                except:
                    continue
    
    for file_path in files_to_fix:
        fix_missing_imports(file_path)

if __name__ == "__main__":
    main()