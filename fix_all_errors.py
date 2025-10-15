#!/usr/bin/env python3
"""
Comprehensive script to fix all errors in the codebase
"""
import os
import re
import glob
def fix_merge_conflicts(content):
    """Remove merge conflict markers and keep the first version"""
    # Remove merge conflict markers and their content
    # Keep the first version (HEAD) and remove the conflict markers
    pattern = r'<<<<<<<.*?\n(.*?)\n=======\n(.*?)\n>>>>>>>.*?\n'
    cleaned = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
    # Remove standalone conflict markers
    cleaned = re.sub(r'^<<<<<<<.*?\n', '', cleaned, flags=re.MULTILINE)
    cleaned = re.sub(r'^=======\n', '', cleaned, flags=re.MULTILINE)
    cleaned = re.sub(r'^>>>>>>>.*?\n', '', cleaned, flags=re.MULTILINE)
    return cleaned
def fix_syntax_errors(content):
    """Fix common syntax errors"""
    # Fix unterminated string literals
    content = re.sub(r"'([^']*?)$", r"'\1'", content, flags=re.MULTILINE)
    content = re.sub(r'"([^"]*?)$', r'"\1"', content, flags=re.MULTILINE)
    # Fix malformed JSX attributes
    content = re.sub(r'(\w+);>', r'\1>', content)
    content = re.sub(r'(\w+): value', r'\1', content)
    content = re.sub(r'(\w+)"', r'\1"', content)
    # Fix malformed function parameters
    content = re.sub(r'\(\s*{\s*([^}]*?)\s*;\s*:\s*value\s*}\s*\)', r'({\1})', content)
    # Fix malformed object properties
    content = re.sub(r'(\w+):\s*value', r'\1', content)
    return content
def fix_unused_imports(content):
    """Remove unused imports"""
    lines = content.split('\n')
    fixed_lines = []
    for line in lines:
        # Skip lines with unused imports that are clearly unused
        if 'useCallback' in line and 'is defined but never used' in line:
            continue
        if 'PerformanceMetrics' in line and 'is defined but never used' in line:
            continue
        fixed_lines.append(line)
    return '\n'.join(fixed_lines)
def fix_empty_interfaces(content):
    """Fix empty interface declarations"""
    # Replace empty interfaces with proper types
    content = re.sub(r'interface\s+(\w+)\s*{\s*}\s*', r'type \1 = Record<string, never>;', content)
    return content
def process_file(file_path):
    """Process a single file to fix all errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        original_content = content
        # Apply fixes
        content = fix_merge_conflicts(content)
        content = fix_syntax_errors(content)
        content = fix_unused_imports(content)
        content = fix_empty_interfaces(content)
        # Clean up extra whitespace
        content = re.sub(r'\n\n\n+', '\n\n', content)
        content = content.strip() + '\n'
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
def main():
    """Main function to fix all files"""
    # Get all relevant files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts',
        'api/**/*.tsx',
        'api/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    print(f"Processing {len(files_to_process)} files...")
    fixed_count = 0
    for file_path in files_to_process:
        if process_file(file_path):
            fixed_count += 1
    print(f"Fixed {fixed_count} files")
if __name__ == "__main__":
    main()