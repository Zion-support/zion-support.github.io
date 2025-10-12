#!/usr/bin/env python3
"""
Script to fix merge conflicts and syntax errors in TSX/TS files
"""
import os
import re
import glob

def fix_merge_conflicts(content):
    """Remove merge conflict markers and keep the HEAD version"""
    # Remove merge conflict markers
    content = re.sub(r'<<<<<<< HEAD\n', '', content)
    content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
    content = re.sub(r'>>>>>>> .*\n', '', content)
    return content

def fix_jsx_syntax(content):
    """Fix common JSX syntax errors"""
    # Fix malformed className attributes
    content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
    
    # Fix missing spaces in className
    content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
    
    # Fix malformed gradient classes
    content = re.sub(r'bg-gradient-to-brfrom-', 'bg-gradient-to-br from-', content)
    content = re.sub(r'from-cyan-500to-', 'from-cyan-500 to-', content)
    content = re.sub(r'from-red-500to-', 'from-red-500 to-', content)
    content = re.sub(r'from-slate-800/50to-', 'from-slate-800/50 to-', content)
    
    # Fix malformed text classes
    content = re.sub(r'text-4xlmd:text-6xlfont-bold', 'text-4xl md:text-6xl font-bold', content)
    content = re.sub(r'text-lgtext-gray-300mb-8', 'text-lg text-gray-300 mb-8', content)
    content = re.sub(r'text-xl text-gray-300mb-8', 'text-xl text-gray-300 mb-8', content)
    
    # Fix malformed spacing classes
    content = re.sub(r'mx-autopx-4', 'mx-auto px-4', content)
    content = re.sub(r'w-5 h-5ml-2', 'w-5 h-5 ml-2', content)
    content = re.sub(r'flexitems-center', 'flex items-center', content)
    content = re.sub(r'hover:from-cyan-600', 'hover:from-cyan-600', content)
    content = re.sub(r'hover:to-purple-700', 'hover:to-purple-700', content)
    content = re.sub(r'hover:from-red-600', 'hover:from-red-600', content)
    content = re.sub(r'hover:to-purple-700', 'hover:to-purple-700', content)
    content = re.sub(r'hover:bg-white/10', 'hover:bg-white/10', content)
    content = re.sub(r'hover:border-red-400/40', 'hover:border-red-400/40', content)
    content = re.sub(r'hover:bg-red-400/10', 'hover:bg-red-400/10', content)
    content = re.sub(r'transition-allduration-300', 'transition-all duration-300', content)
    content = re.sub(r'borderborder-slate-700', 'border border-slate-700', content)
    content = re.sub(r'p-6border', 'p-6 border', content)
    content = re.sub(r'p-8border', 'p-8 border', content)
    content = re.sub(r'rounded-xl p-6border', 'rounded-xl p-6 border', content)
    content = re.sub(r'rounded-xl p-8border', 'rounded-xl p-8 border', content)
    
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
    
    # Fix malformed self-closing tags
    content = re.sub(r'<div key="\{index\}" className="[^"]*" />', lambda m: m.group(0).replace(' />', '>') + '</div>', content)
    content = re.sub(r'<div key="\{itemIndex\}" className="[^"]*" />', lambda m: m.group(0).replace(' />', '>') + '</div>', content)
    content = re.sub(r'<div key="\{featureIndex\}" className="[^"]*" />', lambda m: m.group(0).replace(' />', '>') + '</div>', content)
    content = re.sub(r'<li key="\{itemIndex\}" className="[^"]*" />', lambda m: m.group(0).replace(' />', '>') + '</li>', content)
    content = re.sub(r'<li key="\{featureIndex\}" className="[^"]*" />', lambda m: m.group(0).replace(' />', '>') + '</li>', content)
    content = re.sub(r'<Star key="\{i\}" className="[^"]*" />', lambda m: m.group(0).replace(' />', '>') + '</Star>', content)
    
    # Fix malformed sections
    content = re.sub(r'<section className="w-5 h-5ml-2" />', '<section className="py-16">', content)
    
    # Fix malformed divs with classes
    content = re.sub(r'<div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">', '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">', content)
    
    # Fix malformed headings
    content = re.sub(r'<h2 className="w-5 h-5ml-2" />', '<h2 className="text-3xl font-bold text-white mb-4">', content)
    content = re.sub(r'<h3 className="w-5 h-5ml-2" />', '<h3 className="text-xl font-semibold text-white mb-2">', content)
    content = re.sub(r'<p className="w-5 h-5ml-2">', '<p className="text-gray-300 mb-4">', content)
    
    # Fix malformed spans
    content = re.sub(r'<span className="w-5 h-5ml-2" />', '<span className="text-4xl font-bold text-white">', content)
    
    # Fix malformed ul elements
    content = re.sub(r'<ul className="w-5 h-5ml-2" />', '<ul className="space-y-2">', content)
    
    # Fix malformed div elements
    content = re.sub(r'<div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">', '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">', content)
    
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

def fix_duplicate_react_imports(content):
    """Fix duplicate React imports"""
    lines = content.split('\n')
    react_imports = []
    other_lines = []
    
    for line in lines:
        if 'import React' in line:
            react_imports.append(line)
        else:
            other_lines.append(line)
    
    # Keep only the first React import
    if react_imports:
        return react_imports[0] + '\n' + '\n'.join(other_lines)
    
    return content

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_merge_conflicts(content)
        content = fix_duplicate_imports(content)
        content = fix_duplicate_react_imports(content)
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