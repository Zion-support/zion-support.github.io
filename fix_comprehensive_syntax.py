#!/usr/bin/env python3
"""
Comprehensive syntax error fixes for React components
"""

import os
import re
import glob
from pathlib import Path

def fix_comprehensive_syntax(file_path):
    """Fix comprehensive syntax errors in React components"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common syntax issues
        
        # Fix missing semicolons after imports
        content = re.sub(r'import.*?from.*?[\'"]\s*([a-zA-Z_])', r'import \1', content)
        
        # Fix malformed JSX attributes
        content = re.sub(r'<a;\s*', '<a ', content)
        content = re.sub(r'Go Home;\s*', 'Go Home', content)
        
        # Fix missing closing tags
        content = re.sub(r'<a\s+([^>]*?)\s*>\s*([^<]*?)\s*</a>', r'<a \1>\2</a>', content)
        
        # Fix missing Helmet import
        if 'Helmet' in content and 'import.*Helmet' not in content:
            content = "import { Helmet } from 'react-helmet-async';\n" + content
        
        # Fix duplicate function declarations
        lines = content.split('\n')
        new_lines = []
        in_function = False
        function_count = 0
        
        for line in lines:
            if 'export default function' in line:
                function_count += 1
                if function_count == 1:
                    new_lines.append(line)
                in_function = True
            elif in_function and line.strip() == '}':
                new_lines.append(line)
                in_function = False
            elif not in_function or function_count == 1:
                new_lines.append(line)
        
        content = '\n'.join(new_lines)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
                
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
    return False

def main():
    """Main function to fix comprehensive syntax errors"""
    workspace = Path('/workspace')
    
    # File extensions to process
    extensions = ['*.tsx', '*.jsx']
    
    total_files = 0
    fixed_files = 0
    
    print("Starting comprehensive syntax error fixes...")
    
    for ext in extensions:
        pattern = workspace / 'app' / '**' / ext
        files = glob.glob(str(pattern), recursive=True)
        
        for file_path in files:
            # Skip specific files
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            total_files += 1
            
            if fix_comprehensive_syntax(file_path):
                fixed_files += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nComprehensive syntax error fixes complete!")
    print(f"Total files processed: {total_files}")
    print(f"Files fixed: {fixed_files}")

if __name__ == "__main__":
    main()