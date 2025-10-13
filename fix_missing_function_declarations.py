#!/usr/bin/env python3
"""
Fix missing function declarations in React components
"""

import os
import re
import glob
from pathlib import Path

def fix_missing_function_declarations(file_path):
    """Fix missing function declarations in React components"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Pattern to match files that start with imports and then have a return statement
        # without a function declaration
        pattern = r'^import.*?\n(?:import.*?\n)*\s*return\s*\('
        
        if re.search(pattern, content, re.MULTILINE | re.DOTALL):
            # Extract the imports
            import_lines = []
            lines = content.split('\n')
            in_imports = True
            
            for line in lines:
                if in_imports and (line.strip().startswith('import ') or line.strip() == ''):
                    import_lines.append(line)
                else:
                    in_imports = False
                    break
            
            # Create function name from file path
            file_name = Path(file_path).stem
            function_name = ''.join(word.capitalize() for word in file_name.split('-')) + 'Page'
            
            # Reconstruct the file
            imports = '\n'.join(import_lines)
            rest = '\n'.join(lines[len(import_lines):])
            
            # Remove the return statement and add function declaration
            rest = re.sub(r'^\s*return\s*\(', 'export default function ' + function_name + '() {\n  return (', rest, flags=re.MULTILINE)
            
            # Add closing brace if missing
            if not rest.strip().endswith('}'):
                rest += '\n}'
            
            new_content = imports + '\n\n' + rest
            
            if new_content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                return True
                
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
    return False

def main():
    """Main function to fix missing function declarations"""
    workspace = Path('/workspace')
    
    # File extensions to process
    extensions = ['*.tsx', '*.jsx']
    
    total_files = 0
    fixed_files = 0
    
    print("Starting function declaration fixes...")
    
    for ext in extensions:
        pattern = workspace / 'app' / '**' / ext
        files = glob.glob(str(pattern), recursive=True)
        
        for file_path in files:
            # Skip specific files
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            total_files += 1
            
            if fix_missing_function_declarations(file_path):
                fixed_files += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nFunction declaration fixes complete!")
    print(f"Total files processed: {total_files}")
    print(f"Files fixed: {fixed_files}")

if __name__ == "__main__":
    main()