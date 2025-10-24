#!/usr/bin/env python3
"""
Script to fix specific syntax errors in TypeScript/JSX files
"""

import os
import re
import glob

def fix_specific_errors(file_path):
    """Fix specific syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Remove duplicate Footer imports
        lines = content.split('\n')
        footer_imports = []
        other_lines = []
        
        for line in lines:
            if 'import Footer from' in line:
                footer_imports.append(line)
            else:
                other_lines.append(line)
        
        # Keep only the last Footer import (the @/components one)
        if len(footer_imports) > 1:
            # Find the last Footer import
            last_footer_import = None
            for i in range(len(other_lines) - 1, -1, -1):
                if 'import Footer from' in other_lines[i]:
                    last_footer_import = other_lines[i]
                    other_lines[i] = ''  # Remove it from other_lines
                    break
            
            if last_footer_import:
                # Add it at the top after other imports
                import_end = 0
                for i, line in enumerate(other_lines):
                    if line.startswith('import ') and not line.startswith('import Footer'):
                        import_end = i + 1
                
                other_lines.insert(import_end, last_footer_import)
                content = '\n'.join(other_lines)
        
        # Fix 2: Fix malformed JSX structure
        content = re.sub(
            r'<div className="min-h-screen[^"]*">\s*</div><div className="[^"]*">,',
            r'<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">',
            content
        )
        
        # Fix 3: Fix malformed h1 tags
        content = re.sub(r'<h1([A-Z][a-zA-Z\s]*)', r'<h1>\1', content)
        
        # Fix 4: Fix malformed p tags
        content = re.sub(r'<p([A-Z][a-zA-Z\s]*)', r'<p>\1', content)
        
        # Fix 5: Fix missing closing tags
        content = re.sub(r'<h1>([^<]+)\n\s*</h1>', r'<h1>\1</h1>', content)
        content = re.sub(r'<p>([^<]+)\n\s*</p>', r'<p>\1</p>', content)
        
        # Fix 6: Fix malformed Link tags
        content = re.sub(r'<Link href="[^"]*"\n\s*className="[^"]*",', 
                        lambda m: m.group(0).replace(',', ''), content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed specific errors in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix specific errors in all files"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_specific_errors(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed specific errors in {files_fixed} files")

if __name__ == "__main__":
    main()