#!/usr/bin/env python3
<<<<<<< HEAD
import os
import re
import glob

def fix_imports_and_syntax(file_path):
    """Fix common import and syntax issues"""
=======
"""
Comprehensive syntax error fixer for the Next.js project - Advanced version
"""

import os
import re
import glob
from pathlib import Path

def fix_component_syntax(content):
    """Fix common component syntax issues"""
    # Fix malformed component declarations
    content = re.sub(r'const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*return\s*null\s*}\s*export\s+default\s+\1', 
                     r'const \1: React.FC = () => {\n  return null\n}\n\nexport default \1', content)
    
    # Fix missing return statements
    content = re.sub(r'const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{([^}]*)}', 
                     lambda m: f'const {m.group(1)}: React.FC = () => {{\n  return (\n    <div>\n      {m.group(2).strip()}\n    </div>\n  )\n}}', content)
    
    # Fix malformed JSX
    content = re.sub(r'<(\w+)\s*className="([^"]*)"\s*>\s*$', r'<\1 className="\2">\n        </\1>', content, flags=re.MULTILINE)
    
    return content

def fix_interface_declarations(content):
    """Fix interface and type declarations"""
    # Fix malformed interfaces
    content = re.sub(r'interface\s+(\w+)\s*{\s*([^}]*)\s*}\s*$', 
                     lambda m: f'interface {m.group(1)} {{\n  {m.group(2).strip()}\n}}', content, flags=re.MULTILINE)
    
    # Fix type declarations
    content = re.sub(r'type\s+(\w+)\s*=\s*([^;]+);?\s*$', r'type \1 = \2;', content, flags=re.MULTILINE)
    
    return content

def fix_jsx_fragments(content):
    """Fix JSX fragment issues"""
    # Fix unclosed fragments
    content = re.sub(r'<>\s*$', '<>\n        </>', content, flags=re.MULTILINE)
    
    # Fix malformed fragments
    content = re.sub(r'<>\s*([^<]+)\s*</>', r'<>\n          \1\n        </>', content)
    
    return content

def fix_function_declarations(content):
    """Fix function declaration issues"""
    # Fix arrow functions
    content = re.sub(r'const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{([^}]*)}', 
                     lambda m: f'const {m.group(1)} = () => {{\n  {m.group(2).strip()}\n}}', content)
    
    # Fix async functions
    content = re.sub(r'const\s+(\w+)\s*=\s*async\s*\(\s*\)\s*=>\s*{([^}]*)}', 
                     lambda m: f'const {m.group(1)} = async () => {{\n  {m.group(2).strip()}\n}}', content)
    
    return content

def fix_object_literals(content):
    """Fix object literal syntax"""
    # Fix missing commas in objects
    content = re.sub(r'(\w+):\s*([^,}\n]+)\s*\n(\s*[a-zA-Z])', r'\1: \2,\n\3', content)
    
    # Fix malformed objects
    content = re.sub(r'{\s*([^}]*)\s*}\s*$', lambda m: f'{{\n  {m.group(1).strip()}\n}}', content, flags=re.MULTILINE)
    
    return content

def fix_import_statements(content):
    """Fix import statement issues"""
    # Remove empty imports
    content = re.sub(r'import\s+{\s*}\s*from\s+["\'][^"\']+["\']\s*;?\s*', '', content)
    
    # Fix malformed imports
    content = re.sub(r'import\s+([^"\']+)\s*from\s*["\']([^"\']+)["\']\s*;?\s*', r'import \1 from "\2";', content)
    
    return content

def fix_export_statements(content):
    """Fix export statement issues"""
    # Remove duplicate exports
    lines = content.split('\n')
    seen_exports = set()
    fixed_lines = []
    
    for line in lines:
        if line.strip().startswith('export default'):
            export_name = line.strip().split()[-1].rstrip(';')
            if export_name in seen_exports:
                continue
            seen_exports.add(export_name)
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_jsx_attributes(content):
    """Fix JSX attribute issues"""
    # Fix malformed className attributes
    content = re.sub(r'className="([^"]*)"\s*>\s*$', r'className="\1">\n        </div>', content, flags=re.MULTILINE)
    
    # Fix missing closing tags
    content = re.sub(r'<(\w+)\s*([^>]*)\s*>\s*$', r'<\1 \2>\n        </\1>', content, flags=re.MULTILINE)
    
    return content

def fix_typescript_syntax(content):
    """Fix TypeScript specific syntax issues"""
    # Fix generic type parameters
    content = re.sub(r'<(\w+)>\s*$', r'<\1>', content, flags=re.MULTILINE)
    
    # Fix optional properties
    content = re.sub(r'(\w+)\?\s*:\s*([^;]+);?\s*$', r'\1?: \2;', content, flags=re.MULTILINE)
    
    # Fix union types
    content = re.sub(r'(\w+)\s*\|\s*(\w+)', r'\1 | \2', content)
    
    return content

def fix_file(file_path):
    """Fix a single file with comprehensive fixes"""
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
<<<<<<< HEAD
        # Fix missing imports for common components
        if 'Helmet' in content and 'import { Helmet }' not in content:
            content = content.replace(
                "'use client'",
                "'use client'\nimport { Helmet } from 'react-helmet-async'"
            )
        
        if 'Navigation' in content and 'import Navigation' not in content:
            content = content.replace(
                "'use client'",
                "'use client'\nimport Navigation from './Navigation'"
            )
        
        if 'Footer' in content and 'import Footer' not in content:
            content = content.replace(
                "'use client'",
                "'use client'\nimport Footer from './Footer'"
            )
        
        # Fix missing lucide-react imports
        lucide_icons = ['ArrowRight', 'CheckCircle', 'Download', 'X', 'Brain', 'BarChart', 'Target', 'TrendingUp']
        missing_icons = [icon for icon in lucide_icons if icon in content and f'import {{ {icon}' not in content]
        if missing_icons:
            import_line = f"import {{ {', '.join(missing_icons)} }} from 'lucide-react'"
            if 'import { Helmet }' in content:
                content = content.replace("import { Helmet } from 'react-helmet-async'", f"import {{ Helmet }} from 'react-helmet-async'\n{import_line}")
            else:
                content = content.replace("'use client'", f"'use client'\n{import_line}")
        
        # Fix unescaped entities
        content = re.sub(r"Let's", "Let&apos;s", content)
        content = re.sub(r"Don't", "Don&apos;t", content)
        content = re.sub(r"can't", "can&apos;t", content)
        content = re.sub(r"won't", "won&apos;t", content)
        content = re.sub(r"it's", "it&apos;s", content)
        content = re.sub(r"we're", "we&apos;re", content)
        content = re.sub(r"you're", "you&apos;re", content)
        content = re.sub(r"they're", "they&apos;re", content)
        content = re.sub(r"isn't", "isn&apos;t", content)
        content = re.sub(r"aren't", "aren&apos;t", content)
        content = re.sub(r"wasn't", "wasn&apos;t", content)
        content = re.sub(r"weren't", "weren&apos;t", content)
        content = re.sub(r"hasn't", "hasn&apos;t", content)
        content = re.sub(r"haven't", "haven&apos;t", content)
        content = re.sub(r"hadn't", "hadn&apos;t", content)
        content = re.sub(r"wouldn't", "wouldn&apos;t", content)
        content = re.sub(r"shouldn't", "shouldn&apos;t", content)
        content = re.sub(r"couldn't", "couldn&apos;t", content)
        content = re.sub(r"didn't", "didn&apos;t", content)
        content = re.sub(r"doesn't", "doesn&apos;t", content)
        content = re.sub(r"do n't", "don&apos;t", content)
        
        # Fix quotes
        content = re.sub(r'"([^"]*)"', r'&quot;\1&quot;', content)
        
        # Fix console statements (comment them out)
        content = re.sub(r'console\.(log|warn|error)\([^)]*\);?', r'// \g<0>', content)
        
        # Fix missing display names for components
        if 'export default function' in content and 'displayName' not in content:
            # Find the function name
            match = re.search(r'export default function (\w+)', content)
            if match:
                func_name = match.group(1)
                content = content.replace(
                    f'export default function {func_name}',
                    f'export default function {func_name}\n{func_name}.displayName = "{func_name}"'
                )
        
        # Fix const vs let issues
        content = re.sub(r'let clsEntries', 'const clsEntries', content)
        
        # Fix missing closing tags (basic fixes)
        content = re.sub(r'<div([^>]*)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
        content = re.sub(r'<section([^>]*)>\s*$', r'<section\1></section>', content, flags=re.MULTILINE)
        
        # Fix merge conflict markers that might have been missed
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>>.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>>.*?\n', '', content, flags=re.DOTALL)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed issues in: {file_path}")
            return True
        return False
=======
        # Apply all fixes
        content = fix_component_syntax(content)
        content = fix_interface_declarations(content)
        content = fix_jsx_fragments(content)
        content = fix_function_declarations(content)
        content = fix_object_literals(content)
        content = fix_import_statements(content)
        content = fix_export_statements(content)
        content = fix_jsx_attributes(content)
        content = fix_typescript_syntax(content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
    # Find all TypeScript/TSX files
=======
    """Main function to fix all files"""
    # Get all TypeScript/JavaScript files
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
<<<<<<< HEAD
        'components/**/*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_imports_and_syntax(file_path):
                    fixed_count += 1
    
    print(f"\nFixed issues in {fixed_count} out of {total_files} files")
=======
        'components/**/*.ts',
        'api/**/*.ts',
        'api/**/*.js',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates and sort
    files_to_fix = sorted(list(set(files_to_fix)))
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_file(file_path):
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files_to_fix)} checked")
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a

if __name__ == "__main__":
    main()