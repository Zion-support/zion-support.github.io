#!/usr/bin/env python3
"""
Script to fix syntax errors in TSX files after merge conflict resolution.
"""

import os
import re
import glob

def fix_syntax_errors():
    """Fix common syntax errors in TSX files"""
    
    # Find all TSX files
    tsx_files = []
    for root, dirs, files in os.walk('/workspace/app'):
        for file in files:
            if file.endswith('.tsx'):
                tsx_files.append(os.path.join(root, file))
    
    print(f"Found {len(tsx_files)} TSX files to check")
    
    fixed_count = 0
    
    for file_path in tsx_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Fix 1: Remove duplicate Footer imports
            content = re.sub(
                r"import Footer from '\.\./components/Footer';\s*\n\s*import Footer from '@/components/Footer';",
                "import Footer from '@/components/Footer';",
                content
            )
            
            # Fix 2: Fix malformed JSX with missing opening tags
            content = re.sub(
                r'<h1([^>]*?)([A-Za-z\s]+)\s*</h1>',
                r'<h1\1>\2</h1>',
                content
            )
            
            content = re.sub(
                r'<p([^>]*?)([A-Za-z\s]+)\s*</p>',
                r'<p\1>\2</p>',
                content
            )
            
            # Fix 3: Fix malformed div elements with commas
            content = re.sub(
                r'<div([^>]*?)>\s*</div><div([^>]*?)>,\s*',
                r'<div\1>\n        <div\2>\n          ',
                content
            )
            
            # Fix 4: Fix Helmet closing tags to Head
            content = re.sub(r'</Helmet>', '</Head>', content)
            
            # Fix 5: Fix function declarations with trailing commas
            content = re.sub(r'const\s+(\w+):\s+React\.FC\s*=\s*\(\)\s*=>\s*{,\s*', r'const \1: React.FC = () => {\n  ', content)
            
            # Fix 6: Fix missing semicolons after variable declarations
            content = re.sub(r'const\s+(\w+)\s*=\s*([^;]+)\n', r'const \1 = \2;\n', content)
            
            # Fix 7: Clean up extra whitespace and newlines
            content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                fixed_count += 1
                print(f"Fixed syntax errors in: {file_path}")
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Successfully fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    fix_syntax_errors()