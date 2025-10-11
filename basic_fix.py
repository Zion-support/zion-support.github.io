#!/usr/bin/env python3
"""
Basic script to fix the most common syntax errors without complex regex.
"""

import os
import sys
from pathlib import Path

def fix_file_syntax(file_path):
    """Fix syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        original_content = ''.join(lines)
        modified = False
        
        # Fix 1: Add missing closing h1 tags
        for i, line in enumerate(lines):
            if '<h1' in line and '</h1>' not in line and i + 1 < len(lines):
                next_line = lines[i + 1]
                if '<p' in next_line or '<div' in next_line:
                    # Add closing h1 tag
                    lines[i] = line.rstrip() + '</h1>\n'
                    modified = True
        
        # Fix 2: Add missing closing h2 tags
        for i, line in enumerate(lines):
            if '<h2' in line and '</h2>' not in line and i + 1 < len(lines):
                next_line = lines[i + 1]
                if '<p' in next_line or '<div' in next_line:
                    lines[i] = line.rstrip() + '</h2>\n'
                    modified = True
        
        # Fix 3: Add missing closing h3 tags
        for i, line in enumerate(lines):
            if '<h3' in line and '</h3>' not in line and i + 1 < len(lines):
                next_line = lines[i + 1]
                if '<p' in next_line or '<div' in next_line:
                    lines[i] = line.rstrip() + '</h3>\n'
                    modified = True
        
        # Fix 4: Add missing closing div tags
        div_count = 0
        for line in lines:
            div_count += line.count('<div')
            div_count -= line.count('</div>')
        
        if div_count > 0:
            # Add missing closing divs at the end
            for _ in range(div_count):
                lines.append('  </div>\n')
            modified = True
        
        # Fix 5: Add missing closing main tag
        has_main = any('<main' in line for line in lines)
        has_main_close = any('</main>' in line for line in lines)
        if has_main and not has_main_close:
            lines.append('    </main>\n')
            modified = True
        
        # Fix 6: Add missing closing section tag
        has_section = any('<section' in line for line in lines)
        has_section_close = any('</section>' in line for line in lines)
        if has_section and not has_section_close:
            lines.append('      </section>\n')
            modified = True
        
        # Only write if content changed
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.writelines(lines)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

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