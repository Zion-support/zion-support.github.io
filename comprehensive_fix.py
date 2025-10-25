#!/usr/bin/env python3
<<<<<<< HEAD
"""
Comprehensive script to fix all merge conflicts and syntax errors
"""
import os
import re
import glob
import json

def fix_jsx_syntax_errors(file_path):
    """Fix common JSX syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common JSX syntax issues
        # Fix missing closing tags
        content = re.sub(r'<(\w+)([^>]*)>\s*$', r'<\1\2></\1>', content, flags=re.MULTILINE)
        
        # Fix unclosed JSX elements
        content = re.sub(r'<(\w+)([^>]*?)(?<!/)>\s*$', r'<\1\2></\1>', content, flags=re.MULTILINE)
        
        # Fix missing semicolons in imports
        content = re.sub(r'import\s+.*?from\s+[\'"][^\'"]+[\'"]\s*$', lambda m: m.group(0) + ';', content, flags=re.MULTILINE)
        
        # Fix missing commas in object literals
        content = re.sub(r'(\w+):\s*([^,}\n]+)\s*\n\s*(\w+):', r'\1: \2,\n  \3:', content)
        
        # Fix missing closing parentheses
        content = re.sub(r'\(\s*$', '()', content, flags=re.MULTILINE)
        
        # Fix missing closing braces
        content = re.sub(r'{\s*$', '{}', content, flags=re.MULTILINE)
        
        # Fix any remaining syntax issues
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)  # Remove excessive newlines
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_merge_conflicts_comprehensive(file_path):
    """Comprehensive merge conflict resolution"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<<' not in content and '=======' not in content and '>>>>>>>' not in content:
            return False
        
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        conflict_sections = []
        current_section = []
        
        for line in lines:
            if line.strip().startswith('<<<<<<<'):
                if current_section:
                    conflict_sections.append(current_section)
                current_section = []
                in_conflict = True
            elif line.strip().startswith('======='):
                if current_section:
                    conflict_sections.append(current_section)
                current_section = []
            elif line.strip().startswith('>>>>>>>'):
                if current_section:
                    conflict_sections.append(current_section)
                current_section = []
                in_conflict = False
            elif in_conflict:
                current_section.append(line)
            else:
                fixed_lines.append(line)
        
        # Take the last section (most recent)
        if conflict_sections:
            fixed_lines.extend(conflict_sections[-1])
        
        # Clean up the result
        fixed_content = '\n'.join(fixed_lines)
        fixed_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', fixed_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing merge conflicts in {file_path}: {e}")
        return False

def fix_specific_syntax_issues(file_path):
    """Fix specific syntax issues based on file content"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix specific patterns based on the linting errors
        if 'app/components' in file_path or 'app/page' in file_path:
            # Fix missing closing tags
            content = re.sub(r'<section([^>]*)>\s*$', r'<section\1></section>', content, flags=re.MULTILINE)
            content = re.sub(r'<div([^>]*)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
            content = re.sub(r'<p([^>]*)>\s*$', r'<p\1></p>', content, flags=re.MULTILINE)
            
            # Fix JSX expressions
            content = re.sub(r'{\s*$', '{}', content, flags=re.MULTILINE)
            content = re.sub(r'\(\s*$', '()', content, flags=re.MULTILINE)
            
            # Fix missing semicolons
            content = re.sub(r'import\s+.*?from\s+[\'"][^\'"]+[\'"]\s*$', lambda m: m.group(0) + ';', content, flags=re.MULTILINE)
            
            # Fix object literal syntax
            content = re.sub(r'(\w+):\s*([^,}\n]+)\s*\n\s*(\w+):', r'\1: \2,\n  \3:', content)
        
        # Fix enum syntax
        if 'enum' in content:
            content = re.sub(r'enum\s+(\w+)\s*{\s*(\w+)\s*$', r'enum \1 {\n  \2\n}', content, flags=re.MULTILINE)
        
        # Fix function declarations
        content = re.sub(r'function\s+(\w+)\s*\(\s*\)\s*{\s*$', r'function \1() {\n  // TODO: implement\n}', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed specific syntax issues in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing specific syntax in {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts',
        'src/**/*.tsx',
        'src/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out backup files and node_modules
    files_to_fix = [f for f in files_to_fix if not f.endswith('.original') and 'node_modules' not in f and os.path.isfile(f)]
    
    print(f"Found {len(files_to_fix)} files to check and fix")
    
    fixed_count = 0
    for file_path in files_to_fix:
        try:
            # First fix merge conflicts
            if fix_merge_conflicts_comprehensive(file_path):
                fixed_count += 1
            
            # Then fix syntax errors
            if fix_jsx_syntax_errors(file_path):
                fixed_count += 1
            
            # Then fix specific issues
            if fix_specific_syntax_issues(file_path):
                fixed_count += 1
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Fixed issues in {fixed_count} files")

if __name__ == "__main__":
    main()