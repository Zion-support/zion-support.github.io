#!/usr/bin/env python3
"""
Script to clean up merge conflicts and fix common syntax errors in the codebase
"""

import os
import re
import glob
from pathlib import Path

def clean_merge_conflicts(content):
    """Remove merge conflict markers and keep the HEAD version"""
    lines = content.split('\n')
    cleaned_lines = []
    in_conflict = False
    keep_lines = True
    
    for line in lines:
        if line.strip().startswith('<<<<<<<'):
            in_conflict = True
            keep_lines = True
            continue
        elif line.strip().startswith('======='):
            keep_lines = False
            continue
        elif line.strip().startswith('>>>>>>>'):
            in_conflict = False
            keep_lines = True
            continue
        elif in_conflict and not keep_lines:
            continue
        else:
            cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)

def fix_common_syntax_errors(content):
    """Fix common syntax errors"""
    # Fix JSX fragment issues
    content = re.sub(r'<>([^<]*)</>', r'<React.Fragment>\1</React.Fragment>', content)
    
    # Fix unclosed JSX tags
    content = re.sub(r'<meta([^>]*)>', r'<meta\1 />', content)
    
    # Fix missing semicolons in object properties
    content = re.sub(r'(\w+):\s*([^,}\n]+)(?=\s*[,}])', r'\1: \2', content)
    
    # Fix missing commas in object literals
    content = re.sub(r'(\w+):\s*([^,}\n]+)\n\s*(\w+):', r'\1: \2,\n  \3:', content)
    
    return content

def remove_unused_imports(content):
    """Remove unused imports based on common patterns"""
    lines = content.split('\n')
    import_lines = []
    other_lines = []
    
    for line in lines:
        if line.strip().startswith('import '):
            import_lines.append(line)
        else:
            other_lines.append(line)
    
    # Find which imports are actually used
    content_text = '\n'.join(other_lines)
    used_imports = []
    
    for import_line in import_lines:
        # Extract imported names
        if 'from' in import_line:
            # Named imports
            match = re.search(r'import\s*\{\s*([^}]+)\s*\}', import_line)
            if match:
                imports = [imp.strip() for imp in match.group(1).split(',')]
                used_imports_in_line = [imp for imp in imports if imp in content_text]
                if used_imports_in_line:
                    # Reconstruct the import line with only used imports
                    if len(used_imports_in_line) == 1:
                        new_import = import_line.replace('{' + match.group(1) + '}', used_imports_in_line[0])
                    else:
                        new_import = import_line.replace(match.group(1), ', '.join(used_imports_in_line))
                    used_imports.append(new_import)
            else:
                # Default import
                used_imports.append(import_line)
        else:
            # Side-effect import
            used_imports.append(import_line)
    
    return '\n'.join(used_imports + other_lines)

def fix_jsx_syntax(content):
    """Fix common JSX syntax issues"""
    # Fix unclosed tags
    content = re.sub(r'<(\w+)([^>]*)>(?!.*</\1>)', r'<\1\2 />', content, flags=re.DOTALL)
    
    # Fix malformed JSX expressions
    content = re.sub(r'\{([^}]*)\}', r'{\1}', content)
    
    return content

def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Clean merge conflicts
        content = clean_merge_conflicts(content)
        
        # Fix syntax errors
        content = fix_common_syntax_errors(content)
        
        # Fix JSX syntax
        content = fix_jsx_syntax(content)
        
        # Remove unused imports
        content = remove_unused_imports(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Find all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if process_file(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()