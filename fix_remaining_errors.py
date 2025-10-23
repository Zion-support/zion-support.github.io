#!/usr/bin/env python3
"""
Script to fix remaining JSX syntax errors
"""

import os
import re
import glob

def fix_jsx_file(file_path):
    """Fix remaining JSX syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing imports
        if 'import React' not in content and ('React.FC' in content or 'React.Fragment' in content):
            content = '"use client";\nimport React from "react";\n' + content
        
        # Fix missing Helmet import
        if '<Helmet>' in content and 'import { Helmet }' not in content:
            content = content.replace('"use client";\nimport React from "react";', 
                                   '"use client";\nimport React from "react";\nimport { Helmet } from "react-helmet-async";')
        
        # Fix incomplete JSX fragments
        if 'return (' in content and '<>' not in content and '<React.Fragment>' not in content:
            content = content.replace('return (', 'return (\n    <>')
            if not content.strip().endswith('</>'):
                content = content.rstrip() + '\n    </>\n  );'
        
        # Fix missing closing tags
        content = re.sub(r'<section[^>]*>\s*$', lambda m: m.group(0) + '\n        </section>', content)
        content = re.sub(r'<div[^>]*>\s*$', lambda m: m.group(0) + '\n              </div>', content)
        
        # Fix incomplete map functions
        if 'features.map(' in content and 'features = [' not in content:
            features_def = '''  const features = [
    {
      icon: () => null,
      title: "Feature",
      description: "Description",
    },
  ];'''
            content = content.replace('const ', features_def + '\n\n  const ')
        
        # Fix incomplete JSX elements
        content = re.sub(r'<button[^>]*>\s*$', lambda m: m.group(0) + '\n                Button Text\n              </button>', content)
        content = re.sub(r'<a[^>]*>\s*$', lambda m: m.group(0) + '\n                Link Text\n              </a>', content)
        
        # Fix missing closing tags in map functions
        content = re.sub(r'\{features\.map\([^}]*\)\s*$', 
                        lambda m: m.group(0) + '\n              ))}\n            </div>', content)
        
        # Fix incomplete return statements
        if 'return (' in content and not content.strip().endswith(');'):
            content = content.rstrip() + '\n  );'
        
        # Fix missing export
        if 'export default' not in content and 'const ' in content:
            component_name = re.search(r'const (\w+):', content)
            if component_name:
                content += f'\n\nexport default {component_name.group(1)};'
        
        # Fix extra closing braces
        content = re.sub(r'}\s*\)\s*$', '}', content)
        
        # Fix missing closing tags for common patterns
        if '<section' in content and '</section>' not in content:
            content += '\n        </section>'
        if '<div' in content and '</div>' not in content:
            content += '\n      </div>'
        if '<React.Fragment>' in content and '</React.Fragment>' not in content:
            content += '\n    </React.Fragment>'
        if '<>' in content and '</>' not in content:
            content += '\n    </>'
        
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
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix remaining JSX files"""
    # Find all TypeScript/JSX files in the app directory
    pattern = "app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        if fix_jsx_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files)} total files")

if __name__ == "__main__":
    main()