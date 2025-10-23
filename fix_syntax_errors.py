#!/usr/bin/env python3
"""
Fix specific syntax errors in the codebase.
"""

import os
import re
from pathlib import Path

def fix_html_entities(content):
    """Fix HTML entities in JavaScript/TypeScript files."""
    # Fix &quot; to regular quotes
    content = content.replace('&quot;', '"')
    content = content.replace('&lt;', '<')
    content = content.replace('&gt;', '>')
    content = content.replace('&amp;', '&')
    
    return content

def fix_duplicate_imports(content):
    """Remove duplicate imports and clean up import statements."""
    lines = content.split('\n')
    seen_imports = set()
    cleaned_lines = []
    
    for line in lines:
        if line.strip().startswith('import '):
            if line not in seen_imports:
                seen_imports.add(line)
                cleaned_lines.append(line)
        else:
            cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)

def fix_missing_semicolons(content):
    """Add missing semicolons where needed."""
    # Fix "use client" directive
    content = re.sub(r'^"use client"$', '"use client";', content, flags=re.MULTILINE)
    
    # Fix import statements
    content = re.sub(r'(import [^;]+)(\n)', r'\1;\2', content)
    
    # Fix export statements
    content = re.sub(r'(export [^;]+)(\n)', r'\1;\2', content)
    
    return content

def fix_jsx_syntax(content):
    """Fix JSX syntax issues."""
    # Fix malformed div tags
    content = re.sub(r'<div>div>', '<div></div>', content)
    content = re.sub(r'<div>([^<]*)div>', r'<div>\1</div>', content)
    
    # Fix missing closing tags
    content = re.sub(r'<div([^>]*)>([^<]*)div>', r'<div\1>\2</div>', content)
    
    return content

def fix_component_structure(content):
    """Fix React component structure."""
    # Remove duplicate component definitions
    if 'const AccessibilityComponents: React.FC = () => {' in content:
        # Keep only the first definition
        parts = content.split('const AccessibilityComponents: React.FC = () => {')
        if len(parts) > 1:
            content = parts[0] + 'const AccessibilityComponents: React.FC = () => {' + parts[1].split('export default AccessibilityComponents;')[0] + 'export default AccessibilityComponents;'
    
    return content

def process_file(file_path):
    """Process a single file to fix syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_html_entities(content)
        content = fix_duplicate_imports(content)
        content = fix_missing_semicolons(content)
        content = fix_jsx_syntax(content)
        content = fix_component_structure(content)
        
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
    """Main function to process all files."""
    workspace = Path('/workspace')
    
    # File patterns to process
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
    ]
    
    total_files = 0
    fixed_files = 0
    
    for pattern in patterns:
        for file_path in workspace.glob(pattern):
            if file_path.is_file():
                total_files += 1
                if process_file(file_path):
                    fixed_files += 1
    
    print(f"\nProcessed {total_files} files, fixed {fixed_files} files")

if __name__ == "__main__":
    main()