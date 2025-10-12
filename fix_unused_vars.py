#!/usr/bin/env python3
import re
import glob

def fix_unused_imports(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find unused imports by checking if they're used in the file
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Check if this is an import line
        if line.strip().startswith('import ') and 'from ' in line:
            # Extract the imported items
            match = re.search(r'from [^}]+ import \{([^}]+)\}', line)
            if match:
                imports = [imp.strip() for imp in match.group(1).split(',')]
                used_imports = []
                
                for imp in imports:
                    # Check if this import is used in the file
                    if imp in content and content.count(imp) > 1:  # More than just the import line
                        used_imports.append(imp)
                
                if used_imports:
                    # Reconstruct the import line with only used imports
                    from_part = line.split(' from ')[0]
                    module_part = line.split(' from ')[1].split(' import ')[0]
                    new_line = f"{from_part} from {module_part} import {{{', '.join(used_imports)}}}"
                    fixed_lines.append(new_line)
                else:
                    # Remove the entire import line if no imports are used
                    continue
            else:
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)
    
    # Write the fixed content back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(fixed_lines))

# Fix specific files with unused imports
files_to_fix = [
    'app/ai-content-generator/page.tsx',
    'app/ai-cybersecurity-suite-pro/page.tsx',
    'app/ai-services/page.tsx',
    'app/ai-smart-scheduler/page.tsx'
]

for file_path in files_to_fix:
    try:
        fix_unused_imports(file_path)
        print(f"Fixed unused imports in: {file_path}")
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")

print("Unused import fixes completed!")
