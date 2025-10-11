#!/usr/bin/env python3
"""
Script to fix syntax errors caused by incomplete merge conflict resolution.
"""

import os
import re
import sys
from pathlib import Path

def fix_syntax_errors(file_path):
    """Fix syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common issues from merge conflicts
        
        # 1. Fix malformed object/array declarations
        # Pattern: const Component = () => { }, { ... }
        content = re.sub(r'const\s+\w+\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*\},\s*\{', 'const Component: React.FC = () => {\n  const data = [', content)
        
        # 2. Fix missing array declaration
        content = re.sub(r'const\s+\w+\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*\},\s*\[', 'const Component: React.FC = () => {\n  const data = [', content)
        
        # 3. Fix incomplete JSX elements
        # Look for unclosed JSX elements and try to close them
        content = fix_unclosed_jsx(content)
        
        # 4. Fix malformed object properties
        # Pattern: }, { title: '...', description: '...' }
        content = re.sub(r'\},\s*\{\s*title:\s*[\'"]([^\'"]*)[\'"],\s*description:\s*[\'"]([^\'"]*)[\'"]\s*\}', r'},\n    {\n      title: "\1",\n      description: "\2"\n    }', content)
        
        # 5. Fix missing closing brackets for arrays
        # Look for arrays that don't have proper closing
        if 'const data = [' in content and '];' not in content:
            # Find the last } and add ];
            last_brace = content.rfind('}')
            if last_brace != -1:
                content = content[:last_brace+1] + '\n  ];\n' + content[last_brace+1:]
        
        # 6. Fix missing return statement
        if 'return (' not in content and '<div' in content:
            # Find the first <div and add return before it
            div_pos = content.find('<div')
            if div_pos != -1:
                # Find the function body start
                func_start = content.find('() => {')
                if func_start != -1:
                    func_body_start = content.find('{', func_start) + 1
                    # Insert return statement
                    content = content[:func_body_start] + '\n  return ' + content[func_body_start:]
        
        # 7. Fix malformed JSX structure
        content = fix_jsx_structure(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_unclosed_jsx(content):
    """Fix unclosed JSX elements."""
    # This is a simplified approach - in practice, you'd want a more robust JSX parser
    # For now, let's fix common patterns
    
    # Fix unclosed h1 tags
    content = re.sub(r'<h1([^>]*)>([^<]*)', r'<h1\1>\2</h1>', content)
    
    # Fix unclosed div tags (basic approach)
    # This is tricky without a proper parser, so we'll be conservative
    
    return content

def fix_jsx_structure(content):
    """Fix JSX structure issues."""
    # Add missing closing tags for common patterns
    # This is a simplified approach
    
    # Fix missing closing tags for main sections
    if '<main' in content and '</main>' not in content:
        content += '\n    </main>'
    
    if '<section' in content and '</section>' not in content:
        content += '\n      </section>'
    
    # Fix missing closing divs
    div_count = content.count('<div')
    closing_div_count = content.count('</div>')
    if div_count > closing_div_count:
        missing_divs = div_count - closing_div_count
        content += '\n' + '  ' * missing_divs + '</div>' * missing_divs
    
    return content

def main():
    """Main function to process all files with syntax errors."""
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
            
            if fix_syntax_errors(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files with syntax errors")
    
    return files_fixed > 0

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)