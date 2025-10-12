#!/usr/bin/env python3
import os
import re
import glob

def fix_component_names():
    # Find all page.tsx files
    pattern = "app/**/page.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Get the directory name from the file path
            dir_name = os.path.dirname(file_path).split('/')[-1]
            if not dir_name or dir_name == 'app':
                continue
            
            # Convert kebab-case to PascalCase for component name
            title = ''.join(word.capitalize() for word in dir_name.split('-'))
            
            # Fix component names that start with numbers
            if re.match(r'^\d', title):
                # Convert numbers to words
                number_map = {
                    '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
                    '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine'
                }
                
                # Replace first character if it's a number
                if title[0] in number_map:
                    title = number_map[title[0]] + title[1:]
            
            # Fix the component declaration
            content = re.sub(
                r'const \w+Page: React\.FC = \(\) => \{',
                f'const {title}Page: React.FC = () => {{',
                content
            )
            
            # Fix the export statement
            content = re.sub(
                r'export default \w+Page',
                f'export default {title}Page',
                content
            )
            
            # Write the fixed content back if it changed
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                fixed_count += 1
                print(f"Fixed {file_path} -> {title}Page")
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    fix_component_names()