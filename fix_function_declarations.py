#!/usr/bin/env python3
import os
import re
import glob

def fix_function_declarations(file_path):
    """Fix missing function declarations in React components"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has React imports but no function declaration
        if 'import React' in content and 'export default' in content:
            lines = content.split('\n')
            new_lines = []
            has_function_declaration = False
            
            for i, line in enumerate(lines):
                # Check if this is the first line after imports that should be a function declaration
                if (line.strip().startswith('const ') or 
                    line.strip().startswith('let ') or 
                    line.strip().startswith('var ') or
                    line.strip().startswith('interface ') or
                    line.strip().startswith('type ') or
                    line.strip().startswith('const ') or
                    line.strip().startswith('  const ') or
                    line.strip().startswith('  let ') or
                    line.strip().startswith('  var ')):
                    
                    # Check if this is likely a component (has JSX or React patterns)
                    if any(keyword in line for keyword in ['useState', 'useEffect', 'React.FC', '= () =>', '= () => {']):
                        # Add function declaration before this line
                        if not has_function_declaration:
                            # Extract component name from export default line
                            export_line = None
                            for j in range(i, len(lines)):
                                if 'export default' in lines[j]:
                                    export_line = lines[j]
                                    break
                            
                            if export_line:
                                component_name = export_line.split()[-1]
                                new_lines.append(f'export default function {component_name}() {{')
                                has_function_declaration = True
                            else:
                                new_lines.append('export default function Component() {')
                                has_function_declaration = True
                    
                    new_lines.append(line)
                else:
                    new_lines.append(line)
            
            # If we added a function declaration, we need to close it
            if has_function_declaration and not content.strip().endswith('}'):
                new_lines.append('}')
            
            # Write the cleaned content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(new_lines))
            
            print(f"Fixed function declaration in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files
    pattern = "/workspace/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        if fix_function_declarations(file_path):
            fixed_count += 1
    
    print(f"Fixed function declarations in {fixed_count} files")

if __name__ == "__main__":
    main()