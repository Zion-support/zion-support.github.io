#!/usr/bin/env python3
import os
import re

def fix_function_names():
    """Fix function names that start with numbers"""
    try:
        # Find all page.tsx files
        page_files = []
        for root, dirs, files in os.walk('app'):
            for file in files:
                if file == 'page.tsx':
                    page_files.append(os.path.join(root, file))
        
        fixed_count = 0
        
        for page_path in page_files:
            try:
                with open(page_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Fix function names that start with numbers
                if re.search(r'export default function \d', content):
                    # Extract the problematic function name
                    match = re.search(r'export default function (\d\w+)', content)
                    if match:
                        old_name = match.group(1)
                        # Convert number to word
                        number_map = {
                            '5': 'Five',
                            '4': 'Four', 
                            '3': 'Three',
                            '2': 'Two',
                            '1': 'One'
                        }
                        
                        new_name = old_name
                        for num, word in number_map.items():
                            if new_name.startswith(num):
                                new_name = word + new_name[1:]
                                break
                        
                        content = content.replace(f'export default function {old_name}', f'export default function {new_name}')
                        
                        with open(page_path, 'w', encoding='utf-8') as f:
                            f.write(content)
                        
                        fixed_count += 1
                        print(f"Fixed function name in: {page_path}")
                        
            except Exception as e:
                print(f"Error fixing {page_path}: {e}")
                continue
        
        print(f"Fixed {fixed_count} function names")
        return True
        
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    fix_function_names()
