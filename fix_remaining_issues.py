#!/usr/bin/env python3
"""
Script to fix remaining syntax issues in TSX/TS files
"""
import os
import re
import glob

def fix_malformed_classes(content):
    """Fix malformed CSS classes"""
    # Fix spaces in class names
    content = re.sub(r'className="([^"]*?)\s+([^"]*?)"', r'className="\1\2"', content)
    
    # Fix specific malformed patterns
    content = re.sub(r'm i n-h-screen', 'min-h-screen', content)
    content = re.sub(r'm a x-w-7xl', 'max-w-7xl', content)
    content = re.sub(r't e xt-', 'text-', content)
    content = re.sub(r'b g-g radient-to-r', 'bg-gradient-to-r', content)
    content = re.sub(r'w-5 h-5m l-2', 'w-5 h-5 ml-2', content)
    content = re.sub(r'font-boldtext-white', 'font-bold text-white', content)
    content = re.sub(r'text-lgtext-gray-300mb-8', 'text-lg text-gray-300 mb-8', content)
    content = re.sub(r'text-xl text-gray-300mb-8', 'text-xl text-gray-300 mb-8', content)
    content = re.sub(r'text-4xlmd:text-6xlfont-bold', 'text-4xl md:text-6xl font-bold', content)
    
    return content

def fix_duplicate_exports(content):
    """Fix duplicate export default statements"""
    lines = content.split('\n')
    export_lines = []
    other_lines = []
    
    for line in lines:
        if 'export default function' in line:
            export_lines.append(line)
        else:
            other_lines.append(line)
    
    # Keep only the first export default
    if len(export_lines) > 1:
        return export_lines[0] + '\n' + '\n'.join(other_lines)
    
    return content

def fix_duplicate_imports(content):
    """Remove duplicate imports"""
    lines = content.split('\n')
    seen_imports = set()
    filtered_lines = []
    
    for line in lines:
        if line.strip().startswith('import '):
            if line not in seen_imports:
                seen_imports.add(line)
                filtered_lines.append(line)
        else:
            filtered_lines.append(line)
    
    return '\n'.join(filtered_lines)

def fix_unused_imports(content):
    """Remove unused imports based on common patterns"""
    lines = content.split('\n')
    filtered_lines = []
    
    for line in lines:
        # Skip unused imports that are commonly unused
        if any(unused in line for unused in [
            'CheckCircle', 'Star', 'Users', 'Award', 'Zap', 'Shield', 'Brain',
            'Box', 'Palette', 'ArrowRight', 'Link'
        ]) and 'import' in line:
            # Check if the import is actually used in the content
            import_name = line.split('{')[1].split('}')[0].strip() if '{' in line else line.split(' ')[1]
            if import_name not in content.replace(line, ''):
                continue  # Skip this unused import
        filtered_lines.append(line)
    
    return '\n'.join(filtered_lines)

def fix_jsx_syntax(content):
    """Fix JSX syntax issues"""
    # Fix malformed JSX elements
    content = re.sub(r'<div key="\{index\}"', '<div key={index}', content)
    content = re.sub(r'<div key="\{itemIndex\}"', '<div key={itemIndex}', content)
    content = re.sub(r'<div key="\{featureIndex\}"', '<div key={featureIndex}', content)
    content = re.sub(r'<li key="\{itemIndex\}"', '<li key={itemIndex}', content)
    content = re.sub(r'<li key="\{featureIndex\}"', '<li key={featureIndex}', content)
    content = re.sub(r'<Star key="\{i\}"', '<Star key={i}', content)
    
    # Fix malformed template literals
    content = re.sub(r'className="\{`bg-gradient-to-br"', 'className={`bg-gradient-to-br', content)
    content = re.sub(r'className="\{`w-full"', 'className={`w-full', content)
    
    # Fix malformed closing tags
    content = re.sub(r'</div>\s*/>', '</div>', content)
    content = re.sub(r'</h3>\s*/>', '</h3>', content)
    content = re.sub(r'</h2>\s*/>', '</h2>', content)
    content = re.sub(r'</p>\s*/>', '</p>', content)
    content = re.sub(r'</ul>\s*/>', '</ul>', content)
    content = re.sub(r'</li>\s*/>', '</li>', content)
    content = re.sub(r'</Link>\s*/>', '</Link>', content)
    content = re.sub(r'</Star>\s*/>', '</Star>', content)
    
    return content

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_malformed_classes(content)
        content = fix_duplicate_exports(content)
        content = fix_duplicate_imports(content)
        content = fix_jsx_syntax(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files"""
    # Find all TSX and TS files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()