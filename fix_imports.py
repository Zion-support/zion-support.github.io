#!/usr/bin/env python3

import re

def fix_duplicate_imports(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Split into lines
    lines = content.split('\n')
    
    # Track seen imports by name (not full line)
    seen_imports = {}
    new_lines = []
    
    for line in lines:
        # Check if it's an import line
        if line.strip().startswith('import '):
            # Extract the import name (the part before 'from')
            match = re.match(r'import\s+([^,\s]+)', line)
            if match:
                import_name = match.group(1)
                
                # If we've seen this import name before, skip it
                if import_name in seen_imports:
                    print(f"Removing duplicate import: {import_name}")
                    continue
                else:
                    seen_imports[import_name] = line
        
        new_lines.append(line)
    
    # Write the cleaned content back
    with open(file_path, 'w') as f:
        f.write('\n'.join(new_lines))
    
    print(f"Fixed duplicate imports in {file_path}")

if __name__ == "__main__":
    fix_duplicate_imports('/workspace/App.tsx')