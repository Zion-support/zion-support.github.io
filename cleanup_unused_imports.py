#!/usr/bin/env python3
"""
Script to automatically remove unused imports and variables from TypeScript/JavaScript files.
"""

import os
import re
import glob

def clean_unused_imports(file_path):
    """Clean unused imports and variables from a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove unused imports (simple heuristic - remove imports that are only used in import statements)
        lines = content.split('\n')
        cleaned_lines = []
        imports_to_remove = set()
        
        # First pass: identify unused imports
        for i, line in enumerate(lines):
            if line.strip().startswith('import ') and ' from ' in line:
                # Extract imported names
                import_match = re.match(r'import\s+(?:{[^}]+}|\w+)(?:\s*,\s*{[^}]+})*\s+from\s+', line)
                if import_match:
                    import_part = import_match.group(0)
                    rest_of_line = line[len(import_part):].strip()
                    
                    # Check if this import is used elsewhere in the file
                    is_used = False
                    for j, other_line in enumerate(lines):
                        if j != i and other_line.strip() and not other_line.strip().startswith('import '):
                            # Check if any imported name appears in the line
                            if rest_of_line in other_line or any(name.strip() in other_line for name in re.findall(r'\{([^}]+)\}', line)):
                                is_used = True
                                break
                    
                    if not is_used:
                        imports_to_remove.add(i)
        
        # Second pass: remove unused imports and clean up
        for i, line in enumerate(lines):
            if i not in imports_to_remove:
                cleaned_lines.append(line)
        
        # Join lines and clean up extra newlines
        new_content = '\n'.join(cleaned_lines)
        new_content = re.sub(r'\n\n\n+', '\n\n', new_content)
        
        # Only write if content changed
        if new_content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript/JavaScript files."""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'utils/**/*.js',
        'hooks/**/*.ts',
        'hooks/**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if clean_unused_imports(file_path):
                    files_fixed += 1
                    print(f"Cleaned unused imports in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Cleaned unused imports in {files_fixed} files")

if __name__ == "__main__":
    main()