#!/usr/bin/env python3
"""
Script to fix syntax errors caused by merge conflict resolution.
This script will fix common patterns of broken syntax in React/TypeScript files.
"""

import os
import re
import glob
from pathlib import Path

def fix_syntax_errors_in_file(file_path):
    """Fix syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Remove duplicate export default function declarations
        # Pattern: export default function Name() { ... export default function Name() {
        content = re.sub(r'export default function (\w+)\(\) \{\s*export default function \1\(\) \{', 
                        r'export default function \1() {', content)
        
        # Fix 2: Fix broken JSX fragments - add missing closing tags
        # Pattern: <> without corresponding </>
        if content.count('<>') > content.count('</>'):
            # Add missing closing fragment tags
            content = re.sub(r'(\s*)(<>\s*)(.*?)(\s*)(</div>|\</main>|\</section>|\</article>|\</header>|\</footer>)', 
                           r'\1<>\n\3\n\1</>\n\1\5', content, flags=re.DOTALL)
        
        # Fix 3: Fix broken JSX - ensure proper closing tags
        # Pattern: Missing closing tags for common elements
        content = re.sub(r'<(\w+)([^>]*)>\s*$', r'<\1\2></\1>', content, flags=re.MULTILINE)
        
        # Fix 4: Fix broken function declarations
        # Pattern: export default function Name() { ... export default function Name() {
        content = re.sub(r'export default function (\w+)\(\) \{\s*export default function \1\(\) \{', 
                        r'export default function \1() {', content)
        
        # Fix 5: Fix broken JSX expressions
        # Pattern: Multiple return statements or broken JSX structure
        content = re.sub(r'return \(\s*export default function', 'return (\n    <div>', content)
        
        # Fix 6: Fix missing closing braces for functions
        # Pattern: Function without proper closing
        if content.count('{') > content.count('}'):
            # Add missing closing braces at the end
            missing_braces = content.count('{') - content.count('}')
            content += '\n' + '}' * missing_braces
        
        # Fix 7: Fix broken JSX structure - ensure single parent element
        # Pattern: Multiple root elements in return statement
        content = re.sub(r'return \(\s*<[^>]+>.*?</[^>]+>\s*<[^>]+>', 
                        r'return (\n    <div>', content, flags=re.DOTALL)
        
        # Fix 8: Remove orphaned text outside JSX
        # Pattern: Text outside JSX elements
        content = re.sub(r'(\s*)([A-Z][a-zA-Z\s]+)(\s*)(</div>|\</main>|\</section>|\</article>|\</header>|\</footer>)', 
                        r'\1<div>\2</div>\n\1\4', content)
        
        # Fix 9: Fix broken import statements
        # Pattern: Import statements with syntax errors
        content = re.sub(r'import\s+([^;]+);\s*import\s+([^;]+);', r'import \1, \2;', content)
        
        # Fix 10: Fix broken JSX attributes
        # Pattern: Missing quotes around attributes
        content = re.sub(r'className=([^"\s>]+)', r'className="\1"', content)
        content = re.sub(r'id=([^"\s>]+)', r'id="\1"', content)
        
        # Fix 11: Fix broken function calls in JSX
        # Pattern: Function calls without proper syntax
        content = re.sub(r'(\w+)\s*\(\s*\)\s*\{', r'\1() {', content)
        
        # Fix 12: Fix broken JSX closing tags
        # Pattern: Missing closing tags
        content = re.sub(r'<(\w+)([^>]*)>\s*([^<]+)\s*$', r'<\1\2>\3</\1>', content, flags=re.MULTILINE)
        
        # Fix 13: Fix broken return statements
        # Pattern: Multiple return statements or broken return
        content = re.sub(r'return\s+export default function', 'return (\n    <div>', content)
        
        # Fix 14: Fix broken JSX fragments
        # Pattern: Incomplete JSX fragments
        if '<>' in content and '</>' not in content:
            # Find the last JSX element and add closing fragment
            lines = content.split('\n')
            for i in range(len(lines) - 1, -1, -1):
                if '</div>' in lines[i] or '</main>' in lines[i] or '</section>' in lines[i]:
                    lines.insert(i + 1, '    </>')
                    break
            content = '\n'.join(lines)
        
        # Fix 15: Fix broken component structure
        # Pattern: Component without proper structure
        if 'export default function' in content and 'return' not in content:
            content = content.replace('export default function', 'export default function') + '\n  return (\n    <div>\n      <h1>Component</h1>\n    </div>\n  );'
        
        # Fix 16: Fix broken JSX expressions
        # Pattern: JSX without proper parent element
        content = re.sub(r'return \(\s*<[^>]+>.*?</[^>]+>\s*<[^>]+>', 
                        r'return (\n    <div>', content, flags=re.DOTALL)
        
        # Fix 17: Fix broken closing tags
        # Pattern: Missing closing tags for common elements
        content = re.sub(r'<(\w+)([^>]*)>\s*([^<]+)\s*$', r'<\1\2>\3</\1>', content, flags=re.MULTILINE)
        
        # Fix 18: Fix broken function declarations
        # Pattern: Function without proper closing
        if 'export default function' in content and content.count('{') > content.count('}'):
            content += '\n}'
        
        # Fix 19: Fix broken JSX structure
        # Pattern: Multiple root elements
        content = re.sub(r'return \(\s*<[^>]+>.*?</[^>]+>\s*<[^>]+>', 
                        r'return (\n    <div>', content, flags=re.DOTALL)
        
        # Fix 20: Fix broken closing tags
        # Pattern: Missing closing tags
        content = re.sub(r'<(\w+)([^>]*)>\s*([^<]+)\s*$', r'<\1\2>\3</\1>', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with syntax errors."""
    # Get all TypeScript, JavaScript, and JSX files
    file_patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_to_process = []
    for pattern in file_patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to process
    files_to_process = [f for f in files_to_process if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', 'build', '.next', 'coverage'
    ])]
    
    print(f"Found {len(files_to_process)} files to check for syntax errors")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_syntax_errors_in_file(file_path):
            fixed_count += 1
            print(f"Fixed syntax errors in: {file_path}")
    
    print(f"Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()