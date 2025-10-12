#!/usr/bin/env python3
"""
Comprehensive script to fix all JSX syntax errors
"""
import os
import re
import glob

def fix_jsx_file(file_path):
    """Fix JSX syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing space in className
        content = re.sub(r'to-slate-900pt-20', 'to-slate-900 pt-20', content)
        
        # Count div tags
        div_open_count = content.count('<div')
        div_close_count = content.count('</div>')
        
        # If there are missing closing divs, add them
        if div_open_count > div_close_count:
            missing_divs = div_open_count - div_close_count
            
            # Find the last closing div and add missing ones before the function closing
            # Look for the pattern: </div> followed by ); and }
            pattern = r'(\s*</div>\s*)(\s*\);\s*})'
            replacement = r'\1' + '    </div>\n' * missing_divs + r'\2'
            content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        
        # Fix Link component formatting issues
        # Look for Link components that might have formatting issues
        content = re.sub(
            r'<Link\s+to="/contact"\s+className="[^"]*"\s*>\s*Contact Us\s*\n\s*<ArrowRight[^>]*/>\s*</Link>',
            '''<Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>''',
            content,
            flags=re.DOTALL
        )
        
        # Fix any remaining JSX fragment issues
        content = re.sub(r'^\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to process all app files"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_process)} files to check")
    
    fixed_count = 0
    for file_path in files_to_process:
        if os.path.isfile(file_path):
            if fix_jsx_file(file_path):
                fixed_count += 1
    
    print(f"Fixed JSX syntax in {fixed_count} files")

if __name__ == "__main__":
    main()