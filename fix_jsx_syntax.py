#!/usr/bin/env python3
import re
import os
import glob

def fix_jsx_syntax(file_path):
    """Fix common JSX syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed JSX tags with extra characters
        content = re.sub(r'/>\s*/\s*>>\s*>>', '>', content)
        content = re.sub(r'/>\s*/\s*>>\s*>', '>', content)
        content = re.sub(r'className="[^"]*"\s*/>\s*/\s*>>\s*>>', 'className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />', content)
        
        # Fix malformed span tags
        content = re.sub(r'<span>([^<]+)</span>/span>', r'<span>\1</span>', content)
        content = re.sub(r'<span>([^<]+)</span>/span>,', r'<span>\1</span>', content)
        
        # Fix malformed div tags
        content = re.sub(r'<div\s+>\s*$', '<div>', content, flags=re.MULTILINE)
        
        # Fix malformed closing tags
        content = re.sub(r'</[^>]+>\s*/\s*[^>]*>', lambda m: m.group(0).split('>')[0] + '>', content)
        
        # Fix unterminated strings in className
        content = re.sub(r'className="([^"]*)"\s*>', r'className="\1">', content)
        
        # Fix missing closing quotes
        content = re.sub(r'className="([^"]*)\s*$', r'className="\1"', content, flags=re.MULTILINE)
        
        # Fix malformed Link tags
        content = re.sub(r'<Link\s+to="([^"]*)\s*$', r'<Link to="\1">', content, flags=re.MULTILINE)
        
        # Fix malformed ArrowRight tags
        content = re.sub(r'<ArrowRight\s+className="([^"]*)"\s*>\s*$', r'<ArrowRight className="\1" />', content, flags=re.MULTILINE)
        
        # Fix malformed closing tags at end of file
        content = re.sub(r'\s+;\s*$', ';', content, flags=re.MULTILINE)
        
        # Fix malformed JSX closing
        content = re.sub(r'<>\s*$', '<>', content, flags=re.MULTILINE)
        content = re.sub(r'</>\s*$', '</>', content, flags=re.MULTILINE)
        
        # Fix duplicate content blocks
        lines = content.split('\n')
        fixed_lines = []
        seen_blocks = set()
        
        for line in lines:
            # Check for duplicate blocks (simple heuristic)
            line_stripped = line.strip()
            if line_stripped.startswith('<div className="bg-gradient-to-br'):
                block_signature = line_stripped[:100]  # First 100 chars
                if block_signature in seen_blocks:
                    continue  # Skip duplicate
                seen_blocks.add(block_signature)
            
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Fix incomplete closing tags
        content = re.sub(r'</([^>]+)\s*$', r'</\1>', content, flags=re.MULTILINE)
        
        # Write back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX syntax in: {file_path}")
            return True
        else:
            print(f"No changes needed in: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix JSX syntax errors in all TypeScript/TSX files"""
    print("🔧 Fixing JSX syntax errors...")
    
    # Find all TSX/TS files with potential JSX syntax errors
    patterns = [
        'src/**/*.tsx',
        'src/**/*.ts', 
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            total_files += 1
            if fix_jsx_syntax(file_path):
                files_fixed += 1
    
    print(f"\n✅ Fixed {files_fixed} out of {total_files} files")
    
    # Specifically fix the problematic file
    problem_file = 'src/pages/case-studies/fortune-100-autonomous-operations-transformation-2025.tsx'
    if os.path.exists(problem_file):
        print(f"\n🔧 Specifically fixing: {problem_file}")
        fix_jsx_syntax(problem_file)

if __name__ == "__main__":
    main()