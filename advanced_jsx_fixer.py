#!/usr/bin/env python3
import re
import os
import glob

def fix_advanced_jsx_syntax(file_path):
    """Fix advanced JSX syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed JSX expressions
        content = re.sub(r'<span>([^<]+)</span>/span>', r'<span>\1</span>', content)
        content = re.sub(r'<div>([^<]+)</div>/div>', r'<div>\1</div>', content)
        
        # Fix malformed className attributes
        content = re.sub(r'className="([^"]*)"\s*>\s*$', r'className="\1">', content, flags=re.MULTILINE)
        
        # Fix malformed closing tags
        content = re.sub(r'</([^>]+)\s*$', r'</\1>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX opening tags
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*)\s*$', r'<\1 \2>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX self-closing tags
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*)\s*/>\s*$', r'<\1 \2 />', content, flags=re.MULTILINE)
        
        # Fix unterminated strings in JSX
        content = re.sub(r'className="([^"]*)\s*$', r'className="\1"', content, flags=re.MULTILINE)
        
        # Fix malformed JSX expressions with unexpected tokens
        content = re.sub(r'>\s*/\s*>\s*>\s*$', '>', content, flags=re.MULTILINE)
        content = re.sub(r'>\s*/\s*>\s*$', '>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX closing
        content = re.sub(r'</>\s*$', '</>', content, flags=re.MULTILINE)
        content = re.sub(r'<>\s*$', '<>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX elements
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*)\s*>\s*$', r'<\1 \2>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX attributes
        content = re.sub(r'([a-zA-Z-]+)="([^"]*)"\s*$', r'\1="\2"', content, flags=re.MULTILINE)
        
        # Fix malformed JSX expressions
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*)\s*>\s*$', r'<\1 \2>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX closing tags
        content = re.sub(r'</([a-zA-Z][a-zA-Z0-9]*)\s*$', r'</\1>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX self-closing tags
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*)\s*/>\s*$', r'<\1 \2 />', content, flags=re.MULTILINE)
        
        # Fix malformed JSX expressions with unexpected tokens
        content = re.sub(r'>\s*/\s*>\s*>\s*$', '>', content, flags=re.MULTILINE)
        content = re.sub(r'>\s*/\s*>\s*$', '>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX closing
        content = re.sub(r'</>\s*$', '</>', content, flags=re.MULTILINE)
        content = re.sub(r'<>\s*$', '<>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX elements
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*)\s*>\s*$', r'<\1 \2>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX attributes
        content = re.sub(r'([a-zA-Z-]+)="([^"]*)"\s*$', r'\1="\2"', content, flags=re.MULTILINE)
        
        # Fix malformed JSX expressions
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*)\s*>\s*$', r'<\1 \2>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX closing tags
        content = re.sub(r'</([a-zA-Z][a-zA-Z0-9]*)\s*$', r'</\1>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX self-closing tags
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*)\s*/>\s*$', r'<\1 \2 />', content, flags=re.MULTILINE)
        
        # Fix malformed JSX expressions with unexpected tokens
        content = re.sub(r'>\s*/\s*>\s*>\s*$', '>', content, flags=re.MULTILINE)
        content = re.sub(r'>\s*/\s*>\s*$', '>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX closing
        content = re.sub(r'</>\s*$', '</>', content, flags=re.MULTILINE)
        content = re.sub(r'<>\s*$', '<>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX elements
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*)\s*>\s*$', r'<\1 \2>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX attributes
        content = re.sub(r'([a-zA-Z-]+)="([^"]*)"\s*$', r'\1="\2"', content, flags=re.MULTILINE)
        
        # Fix malformed JSX expressions
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*)\s*>\s*$', r'<\1 \2>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX closing tags
        content = re.sub(r'</([a-zA-Z][a-zA-Z0-9]*)\s*$', r'</\1>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX self-closing tags
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*)\s*/>\s*$', r'<\1 \2 />', content, flags=re.MULTILINE)
        
        # Fix malformed JSX expressions with unexpected tokens
        content = re.sub(r'>\s*/\s*>\s*>\s*$', '>', content, flags=re.MULTILINE)
        content = re.sub(r'>\s*/\s*>\s*$', '>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX closing
        content = re.sub(r'</>\s*$', '</>', content, flags=re.MULTILINE)
        content = re.sub(r'<>\s*$', '<>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX elements
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*)\s*>\s*$', r'<\1 \2>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX attributes
        content = re.sub(r'([a-zA-Z-]+)="([^"]*)"\s*$', r'\1="\2"', content, flags=re.MULTILINE)
        
        # Write back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed advanced JSX syntax in: {file_path}")
            return True
        else:
            print(f"No changes needed in: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix advanced JSX syntax errors in problematic files"""
    print("🔧 Fixing advanced JSX syntax errors...")
    
    # Focus on the most problematic files
    problematic_files = [
        'app/case-studies/ai-2025-2026-mega-transformation-success/page.tsx',
        'app/case-studies/ai-2025-december-autonomous-revolution-2-8-billion-success/page.tsx',
        'app/case-studies/ai-2025-december-autonomous-systems-500-million-success/page.tsx'
    ]
    
    files_fixed = 0
    
    for file_path in problematic_files:
        if os.path.exists(file_path):
            if fix_advanced_jsx_syntax(file_path):
                files_fixed += 1
    
    print(f"\n✅ Fixed {files_fixed} problematic files")

if __name__ == "__main__":
    main()