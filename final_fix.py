#!/usr/bin/env python3
"""

Final comprehensive fix for all remaining issues
"""

import os
import re
import glob
from pathlib import Path


def final_fix(content):
    """Final comprehensive fix"""
    # Fix malformed JSX elements with closing tags
    content = re.sub(r'</[A-Za-z]+ className="[^"]*" ><([A-Za-z]+) className="([^"]*?)" />', r'<\1 className="\2" />', content)
    
    # Fix malformed closing tags
    content = re.sub(r'</[A-Za-z]+ className="[^"]*" >', '', content)
    
    # Fix spaces in class names
    content = re.sub(r'w-8 h-8t ext-', 'w-8 h-8 text-', content)
    content = re.sub(r'w-6 h-6t ext-', 'w-6 h-6 text-', content)
    content = re.sub(r'w-4 h-4t ext-', 'w-4 h-4 text-', content)
    content = re.sub(r'w-5 h-5t ext-', 'w-5 h-5 text-', content)
    
    # Fix malformed function names
    content = re.sub(r'export default function (\d+[Gg])-([A-Za-z-]+)Page\(\)', 
                     lambda m: f'export default function {m.group(1).replace("5G", "FiveG").replace("5g", "FiveG")}{"".join(word.capitalize() for word in m.group(2).split("-"))}Page()', 
                     content)
    
    # Fix other function names with hyphens
    content = re.sub(r'export default function ([A-Za-z0-9]+)-([A-Za-z-]+)Page\(\)', 
                     lambda m: f'export default function {m.group(1)}{"".join(word.capitalize() for word in m.group(2).split("-"))}Page()', 
                     content)
    
    # Fix malformed JSX attributes
    content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
    
    # Fix specific patterns
    content = re.sub(r'text-cyan-400" >', 'text-cyan-400" />', content)
    content = re.sub(r'text-emerald-400" >', 'text-emerald-400" />', content)
    content = re.sub(r'text-purple-400" >', 'text-purple-400" />', content)
    content = re.sub(r'text-red-400" >', 'text-red-400" />', content)
    content = re.sub(r'text-orange-400" >', 'text-orange-400" />', content)
    content = re.sub(r'text-pink-400" >', 'text-pink-400" />', content)
    
    return content

def process_file(file_path):
    """Process a single file"""

    try:
        with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
            content = f.read()
        
        original_content = content
        content = final_fix(content)
        
\n.*?\n
        content = re.sub(r'\n.*?', '', content, flags=re.DOTALL)
        content = re.sub(r'=======\n.*?\n
        content = re.sub(r'\n', '', content)
        content = re.sub(r'
        
        # Fix invalid characters - replace with proper characters
        content = content.replace('"', '"').replace('"', '"')
        content = content.replace(''', "'").replace(''', "'")
        content = content.replace('…', '...')
        content = content.replace('–', '-').replace('—', '-')
        content = content.replace('•', '*')
        content = content.replace('→', '->')
        content = content.replace('←', '<-')
        content = content.replace('↑', '^')
        content = content.replace('↓', 'v')
        
        # Fix malformed imports
        content = re.sub(r'import\s+React\s+from\s+[\'"]react[\'"];', 'import React from \'react\';', content)
        content = re.sub(r'import\s+{\s*([^}]+)\s*}\s*from\s+[\'"]react-router-dom[\'"];', r'import { \1 } from \'react-router-dom\';', content)
        content = re.sub(r'import\s+{\s*([^}]+)\s*}\s*from\s+[\'"]lucide-react[\'"];', r'import { \1 } from \'lucide-react\';', content)
        content = re.sub(r'import\s+{\s*([^}]+)\s*}\s*from\s+[\'"]react-helmet-async[\'"];', r'import { \1 } from \'react-helmet-async\';', content)
        
        # Fix malformed function declarations
        content = re.sub(r'export default function\s+(\w+)\s*\(\s*\)\s*{', r'export default function \1() {', content)
        
        # Fix malformed JSX
        content = re.sub(r'<(\w+)([^>]*?)>\s*</\1>', r'<\1\2></\1>', content)
        
        # Fix missing return statements in React components
        if 'export default function' in content and 'return (' not in content and 'return <' not in content:
            # Find the function body and add return statement
            func_match = re.search(r'(export default function[^{]*{)([^}]*?)(})', content, flags=re.DOTALL)
            if func_match:
                func_start = func_match.group(1)
                func_body = func_match.group(2).strip()
                func_end = func_match.group(3)
                
                if func_body and not func_body.startswith('return'):
                    content = content.replace(func_match.group(0), f'{func_start}\n  return (\n    {func_body}\n  );\n{func_end}')
        
        # Fix malformed Helmet usage
        content = re.sub(r'<Helmet>\s*<title>([^<]+)</title>\s*<meta[^>]*/>\s*</Helmet>', r'<Helmet>\n        <title>\1</title>\n        <meta name="description" content="\1" />\n      </Helmet>', content)
        
        # Fix missing closing braces
        content = re.sub(r'(\w+)\s*\(\s*\)\s*{\s*([^}]*?)(?=\n\s*[a-zA-Z])', r'\1() {\n  \2\n}', content, flags=re.DOTALL)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = re.sub(r'^\s*\n', '', content, flags=re.MULTILINE)
        
=======
>>>>>>> main
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)

            print(f"Final fix applied: {file_path}")
            return True
        else:
            return False
            

    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():

    """Main function"""
    # Find all TypeScript/React files
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/*.tsx',
        '/workspace/*.ts'

    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    


    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:

        if process_file(file_path):
            fixed_count += 1
    
    print(f"Applied final fixes to {fixed_count} files")


if __name__ == "__main__":
    main()