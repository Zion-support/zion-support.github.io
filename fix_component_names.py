#!/usr/bin/env python3
"""
Script to fix component names that start with numbers.
"""

import os
import re
import glob
from pathlib import Path

def fix_component_name(file_path):
    """Fix component names that start with numbers"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Extract directory name for proper component naming
        dir_name = Path(file_path).parent.name
        
        # Convert kebab-case to PascalCase
        component_name = ''.join(word.capitalize() for word in dir_name.split('-'))
        
        # Fix component declaration
        content = re.sub(r'const \d+[a-zA-Z]+: React\.FC = \(\) => {', 
                        f'const {component_name}: React.FC = () => {{', content)
        
        # Fix export statement
        content = re.sub(r'export default \d+[a-zA-Z]+;', 
                        f'export default {component_name};', content)
        
        # Fix title in Helmet
        content = re.sub(r'<title>\d+[a-zA-Z]+ \| Zion Tech Group</title>', 
                        f'<title>{component_name} | Zion Tech Group</title>', content)
        
        # Fix description
        content = re.sub(r'content="Professional \d+[a-zA-Z]+ services and solutions for your business needs."', 
                        f'content="Professional {component_name} services and solutions for your business needs."', content)
        
        # Fix h1 title
        content = re.sub(r'<h1[^>]*>\d+[a-zA-Z]+</h1>', 
                        f'<h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">{component_name}</h1>', content)
        
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
    """Main function to fix component names"""
    print("Starting component name fixes...")
    
    # Find all page files that might have number-prefixed component names
    patterns = [
        'app/5g-*/page.tsx',
        'app/ai-*/page.tsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_fix)} files to check")
    
    # Fix each file
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_component_name(file_path):
            fixed_count += 1
            print(f"Fixed component name in: {file_path}")
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()