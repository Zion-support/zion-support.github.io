#!/usr/bin/env python3
import os
import re
import glob

def fix_imports_and_syntax(file_path):
    """Fix common import and syntax issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
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
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
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

if __name__ == "__main__":
    main()