#!/usr/bin/env python3
import os
import re
import glob

def fix_all_jsx_errors():
    # Find all page.tsx files
    pattern = "app/**/page.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Fix the malformed JSX pattern - multiple variations
            patterns_to_fix = [
                (r'Page\n              </', 'Page\n              </'),
                (r'Page\n  </', 'Page\n              </'),
                (r'Page\n    </', 'Page\n              </'),
                (r'Page\n      </', 'Page\n              </'),
                (r'Page\n        </', 'Page\n              </'),
                (r'Page\n          </', 'Page\n              </'),
                (r'Page\n            </', 'Page\n              </'),
            ]
            
            for pattern, replacement in patterns_to_fix:
                content = re.sub(pattern, replacement, content)
            
            # Fix the specific malformed pattern with "Page" and "</"
            content = re.sub(
                r'Page\n              </',
                'Page\n              </',
                content
            )
            
            # Also fix the title and description based on the file path
            dir_name = os.path.dirname(file_path).split('/')[-1]
            if dir_name and dir_name != 'app':
                # Convert kebab-case to title case
                title = ' '.join(word.capitalize() for word in dir_name.split('-'))
                
                content = re.sub(
                    r'<title>Database Services \| Zion Tech Group</title>',
                    f'<title>{title} | Zion Tech Group</title>',
                    content
                )
                
                content = re.sub(
                    r'content="Professional Database Services by Zion Tech Group',
                    f'content="Professional {title} by Zion Tech Group',
                    content
                )
                
                content = re.sub(
                    r'content="database services, AI solutions, IT services, Zion Tech Group, database"',
                    f'content="{dir_name}, AI solutions, IT services, Zion Tech Group, {dir_name}"',
                    content
                )
            
            # Write the fixed content back if it changed
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                fixed_count += 1
                print(f"Fixed {file_path}")
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    fix_all_jsx_errors()