#!/usr/bin/env python3
"""
Comprehensive script to fix all syntax errors in the codebase.
"""

import os
import re
import sys
from pathlib import Path

def fix_file_syntax(file_path):
    """Fix syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Malformed function declarations with missing array declarations
        # Pattern: const Component: React.FC = () => { }, { ... }
        content = re.sub(
            r'const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*\},\s*\{',
            r'const \1: React.FC = () => {\n  const data = [\n    {',
            content
        )
        
        # Fix 2: Missing array declaration after function
        content = re.sub(
            r'const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*\},\s*\[',
            r'const \1: React.FC = () => {\n  const data = [',
            content
        )
        
        # Fix 3: Fix malformed object properties in arrays
        # Pattern: }, { title: '...', description: '...' }
        content = re.sub(
            r'\},\s*\{\s*title:\s*[\'"]([^\'"]*)[\'"],\s*description:\s*[\'"]([^\'"]*)[\'"]\s*\}',
            r'},\n    {\n      title: "\1",\n      description: "\2"\n    }',
            content
        )
        
        # Fix 4: Add missing closing brackets for arrays
        if 'const data = [' in content and '];' not in content:
            # Find the last } and add ];
            last_brace = content.rfind('}')
            if last_brace != -1:
                # Check if there's already a closing bracket
                after_brace = content[last_brace+1:].strip()
                if not after_brace.startswith('];') and not after_brace.startswith('return'):
                    content = content[:last_brace+1] + '\n  ];\n' + content[last_brace+1:]
        
        # Fix 5: Add missing return statement
        if 'return (' not in content and '<div' in content:
            # Find the first <div and add return before it
            div_pos = content.find('<div')
            if div_pos != -1:
                # Find the function body start
                func_start = content.find('() => {')
                if func_start != -1:
                    func_body_start = content.find('{', func_start) + 1
                    # Check if return is already there
                    before_div = content[func_body_start:div_pos].strip()
                    if 'return' not in before_div:
                        content = content[:func_body_start] + '\n  return ' + content[func_body_start:]
        
        # Fix 6: Fix malformed JSX elements
        content = fix_jsx_elements(content)
        
        # Fix 7: Fix missing closing tags
        content = fix_missing_closing_tags(content)
        
        # Fix 8: Fix malformed object destructuring
        content = re.sub(r'const\s+\{\s*([^}]+)\s*\}\s*=\s*([^;]+);', r'const { \1 } = \2;', content)
        
        # Fix 9: Fix incomplete function declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\s*\},\s*', r'const \1 = () => {\n  ', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_jsx_elements(content):
    """Fix malformed JSX elements."""
    # Fix unclosed h1 tags
    content = re.sub(r'<h1([^>]*)>([^<]*)', r'<h1\1>\2</h1>', content)
    
    # Fix unclosed h2 tags
    content = re.sub(r'<h2([^>]*)>([^<]*)', r'<h2\1>\2</h2>', content)
    
    # Fix unclosed h3 tags
    content = re.sub(r'<h3([^>]*)>([^<]*)', r'<h3\1>\3</h3>', content)
    
    return content

def fix_missing_closing_tags(content):
    """Fix missing closing tags."""
    # Count opening and closing tags
    div_open = content.count('<div')
    div_close = content.count('</div>')
    
    if div_open > div_close:
        missing_divs = div_open - div_close
        content += '\n' + '  ' * missing_divs + '</div>' * missing_divs
    
    # Fix missing main closing tag
    if '<main' in content and '</main>' not in content:
        content += '\n    </main>'
    
    # Fix missing section closing tag
    if '<section' in content and '</section>' not in content:
        content += '\n      </section>'
    
    return content

def main():
    """Main function to process all files."""
    workspace = Path('/workspace')
    
    # Find all TypeScript/JavaScript files
    file_patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in file_patterns:
        for file_path in workspace.glob(pattern):
            # Skip node_modules and other irrelevant directories
            if 'node_modules' in str(file_path) or '.git' in str(file_path):
                continue
                
            files_processed += 1
            
            if fix_file_syntax(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files with syntax errors")
    
    return files_fixed > 0

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)