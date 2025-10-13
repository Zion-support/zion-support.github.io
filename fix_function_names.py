#!/usr/bin/env python3
"""
Fix function names that contain invalid characters.
"""

import os
import re
import glob
from pathlib import Path

def fix_function_names():
    """Fix function names that contain invalid characters."""
    print("Fixing function names with invalid characters...")
    
    # Find all page.tsx files
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    
    for file_path in page_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract the service name from the path
            service_name = file_path.replace('app/', '').replace('/page.tsx', '')
            
            # Create a valid function name by replacing invalid characters
            function_name = service_name.replace('/', '').replace('-', '').replace('_', '')
            
            # Capitalize first letter
            function_name = function_name[0].upper() + function_name[1:] if function_name else 'Page'
            
            # Update the function name in the content
            old_pattern = r'export default function [^(]+\(\)'
            new_function = f'export default function {function_name}Page()'
            content = re.sub(old_pattern, new_function, content)
            
            # Also update the title in the JSX
            title_pattern = r'<h1[^>]*>([^<]+)</h1>'
            def replace_title(match):
                return f'<h1 className="text-4xl font-bold text-gray-900 mb-6">{service_name.replace("/", " ").replace("-", " ").title()}</h1>'
            content = re.sub(title_pattern, replace_title, content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Fixed function name in: {file_path}")
            
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")

def fix_types_file():
    """Fix the types/next.d.ts file."""
    print("Fixing types/next.d.ts...")
    
    types_content = """declare module 'next' {
  export interface NextPageProps {
    params: { [key: string]: string | string[] | undefined };
    searchParams: { [key: string]: string | string[] | undefined };
  }
}
"""
    
    with open('app/types/next.d.ts', 'w', encoding='utf-8') as f:
        f.write(types_content)
    
    print("Fixed types/next.d.ts")

def main():
    """Main function to fix function names."""
    print("Starting function name fixes...")
    
    fix_function_names()
    fix_types_file()
    
    print("Function name fixes complete!")

if __name__ == "__main__":
    main()