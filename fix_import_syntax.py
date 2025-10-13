#!/usr/bin/env python3
"""
Script to fix import syntax errors in React components
"""
import os
import re
import glob

def fix_import_syntax(file_path):
    """Fix import syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix escaped quotes in imports
        content = re.sub(r"from\s*\\'([^']*?)\\'", r"from '\1'", content)
        
        # Fix incomplete import statements
        content = re.sub(r'import\s*{\s*([^}]*?),\s*}\s*from\s*\'([^\']*?)\';', r'import { \1 } from \'\2\';', content)
        
        # Fix imports that are split across lines incorrectly
        lines = content.split('\n')
        new_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            # Check if this is an import line with issues
            if 'import' in line and 'from' in line and '\\' in line:
                # Fix the escaped quotes
                line = re.sub(r"\\'", "'", line)
                new_lines.append(line)
            elif 'import' in line and 'from' not in line and i + 1 < len(lines):
                # This might be a multi-line import that got broken
                import_lines = [line]
                j = i + 1
                while j < len(lines) and 'from' not in lines[j] and lines[j].strip():
                    import_lines.append(lines[j])
                    j += 1
                
                if j < len(lines) and 'from' in lines[j]:
                    import_lines.append(lines[j])
                    # Reconstruct the import
                    full_import = ' '.join(import_lines)
                    full_import = re.sub(r"\\'", "'", full_import)
                    new_lines.append(full_import)
                    i = j
                else:
                    new_lines.append(line)
            else:
                new_lines.append(line)
            
            i += 1
        
        content = '\n'.join(new_lines)
        
        # Write back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed import syntax in {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix import syntax errors"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    errors_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if fix_import_syntax(file_path):
                errors_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed import syntax in {errors_fixed} files")

if __name__ == "__main__":
    main()