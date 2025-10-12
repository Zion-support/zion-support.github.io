#!/usr/bin/env python3
"""
Script to fix unused React imports in components
"""
import os
import re
import glob

def fix_unused_imports(file_path):
    """Fix unused React imports in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Check if React is imported but not used
        if 'import React' in content:
            # Check if React is actually used in JSX
            # Remove React from import if it's not used
            if 'React.' not in content and '<' not in content:
                # React is not used, remove it from import
                content = re.sub(r'import React,?\s*', '', content)
                content = re.sub(r'import React from [\'"]react[\'"];\s*\n?', '', content)
            elif 'React.' not in content and '<' in content:
                # React is used in JSX but not explicitly, keep the import
                pass
        
        # Fix other unused imports
        lines = content.split('\n')
        fixed_lines = []
        imports_to_remove = []
        
        for line in lines:
            if line.strip().startswith('import '):
                # Extract import names
                import_match = re.match(r'import\s+(?:{[^}]+}|\w+)\s+from\s+[\'"][^\'"]+[\'"]', line)
                if import_match:
                    import_part = import_match.group(1)
                    # Check if imported items are used
                    if '{' in import_part:
                        # Named imports
                        named_imports = re.findall(r'(\w+)', import_part)
                        used_imports = []
                        for imp in named_imports:
                            if imp in content.replace(line, ''):
                                used_imports.append(imp)
                        if used_imports:
                            fixed_lines.append(f"import {{ {', '.join(used_imports)} }} from {line.split('from ')[1]}")
                        else:
                            # No imports are used, skip this line
                            continue
                    else:
                        # Default import
                        if import_part in content.replace(line, ''):
                            fixed_lines.append(line)
                        else:
                            # Import not used, skip this line
                            continue
                else:
                    fixed_lines.append(line)
            else:
                fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = content.strip() + '\n'
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed imports: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # File patterns to process
    patterns = [
        'app/**/*.tsx',
        'app/**/*.jsx'
    ]
    
    fixed_count = 0
    total_count = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next']):
                continue
                
            total_count += 1
            if fix_unused_imports(file_path):
                fixed_count += 1
    
    print(f"\nProcessed {total_count} files, fixed {fixed_count} files")

if __name__ == "__main__":
    main()