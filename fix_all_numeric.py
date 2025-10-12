#!/usr/bin/env python3
"""
Script to fix all numeric component names by adding proper prefixes
"""
import os
import re

def fix_numeric_component(file_path):
    """Fix component names that start with numbers"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract the page name from the path
        path_parts = file_path.split('/')
        page_name = path_parts[-2]  # Get the directory name before page.tsx
        
        # Convert kebab-case to PascalCase for component name
        # Handle numeric prefixes by adding a proper prefix
        words = page_name.split('-')
        if words[0].isdigit():
            # Add a prefix for numeric components
            component_name = 'Page' + ''.join(word.capitalize() for word in words)
        else:
            component_name = ''.join(word.capitalize() for word in words)
        
        # Replace the component name in the content
        content = re.sub(r'export default function \w+\(\)', f'export default function {component_name}()', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed numeric component: {file_path} -> {component_name}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all numeric component files"""
    # Get all page files that might have numeric components
    page_files = []
    
    for root, dirs, files in os.walk('./app'):
        for file in files:
            if file.endswith('page.tsx'):
                page_files.append(os.path.join(root, file))
    
    # Filter for files that start with numbers
    numeric_files = [f for f in page_files if any(f.split('/')[-2].startswith(str(i)) for i in range(10))]
    
    print(f"Found {len(numeric_files)} files with numeric prefixes")
    
    fixed_count = 0
    for file_path in numeric_files:
        if fix_numeric_component(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} numeric component files")

if __name__ == "__main__":
    main()