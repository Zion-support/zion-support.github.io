#!/usr/bin/env python3
"""
Script to fix common syntax errors after merge conflict cleanup.
"""

import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix const className = {className} -> className={className}
        content = re.sub(r'const className\s*=\s*\{className\}', 'className={className}', content)
        
        # Fix const className = `...` -> className={`...`}
        content = re.sub(r'const className\s*=\s*`([^`]+)`', r'className={`\1`}', content)
        
        # Fix onClick="{onClick}" -> onClick={onClick}
        content = re.sub(r'onClick="\{([^}]+)\}"', r'onClick={\1}', content)
        
        # Fix whileHover="{{" -> whileHover={{
        content = re.sub(r'whileHover="\{\{\s*"', 'whileHover={{', content)
        content = re.sub(r'whileTap="\{\{\s*"', 'whileTap={{', content)
        content = re.sub(r'initial="\{\{\s*"', 'initial={{', content)
        content = re.sub(r'animate="\{\{\s*"', 'animate={{', content)
        content = re.sub(r'transition="\{\{\s*"', 'transition={{', content)
        
        # Fix }} -> }}
        content = re.sub(r'\s*\}\}\s*"', '}}', content)
        
        # Fix standalone <></> fragments
        content = re.sub(r'\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix missing closing tags
        content = re.sub(r'<motion\.div\s+([^>]+)\s*/>', r'<motion.div \1>', content)
        
        # Fix broken JSX attributes
        content = re.sub(r'(\w+)\s*=\s*`([^`]+)`', r'\1={`\2`}', content)
        
        # Fix broken className patterns
        content = re.sub(r'className="w-4h-4"', 'className="w-4 h-4"', content)
        
        # Fix broken rounded classes
        content = re.sub(r'rounded-2\s*xl', 'rounded-2xl', content)
        content = re.sub(r'rounded-2\s*x', 'rounded-2xl', content)
        
        # Fix broken shadow classes
        content = re.sub(r'shadow-2\s*xl', 'shadow-2xl', content)
        content = re.sub(r'shadow-2\s*x', 'shadow-2xl', content)
        
        # Fix broken transition classes
        content = re.sub(r'transition-opacityduration-500', 'transition-opacity duration-500', content)
        content = re.sub(r'transition-opacityduration-500blur-sm', 'transition-opacity duration-500 blur-sm', content)
        
        # Fix broken gradient classes
        content = re.sub(r'from-cyan-500/5\s*via-purple-500/5\s*to-cyan-500/5', 'from-cyan-500/5 via-purple-500/5 to-cyan-500/5', content)
        content = re.sub(r'from-cyan-500/20\s*via-purple-500/20\s*to-cyan-500/20', 'from-cyan-500/20 via-purple-500/20 to-cyan-500/20', content)
        
        # Fix broken border classes
        content = re.sub(r'hover:\s*border-indigo-400/50', 'hover:border-indigo-400/50', content)
        
        # Fix broken return statements
        content = re.sub(r'return\s*\'([^\']+)\';\s*,', r'return \'\1\';', content)
        
        # Fix broken function syntax
        content = re.sub(r'}\s*,\s*default:', '}\n  default:', content)
        
        # Fix broken JSX closing tags
        content = re.sub(r'</>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix broken JSX fragments
        content = re.sub(r'^\s*<>\s*$', '', content, flags=re.MULTILINE)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
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
    """Main function to fix syntax errors in all files."""
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            try:
                if fix_syntax_errors(file_path):
                    files_fixed += 1
                    print(f"✓ Fixed: {file_path}")
                files_processed += 1
                        
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"\nSummary:")
    print(f"Files processed: {files_processed}")
    print(f"Files fixed: {files_fixed}")

if __name__ == "__main__":
    main()