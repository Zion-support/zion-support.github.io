#!/usr/bin/env python3
"""
Script to fix remaining JSX syntax errors
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
        
        # Fix Link component formatting
        content = re.sub(
            r'<Link to="/contact"\s+className="[^"]*"\s*>\s*Contact Us\s*\n\s*<ArrowRight[^>]*/>\s*</Link>',
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
        
        # Ensure proper closing div tags
        # Count opening and closing divs
        div_open_count = content.count('<div')
        div_close_count = content.count('</div>')
        
        # Add missing closing divs
        missing_divs = div_open_count - div_close_count
        if missing_divs > 0:
            # Add the missing closing divs before the closing of the function
            content = re.sub(
                r'(\s*)(\s*</div>\s*)(\s*\);\s*})',
                r'\1' + '    </div>\n' * missing_divs + r'\2\3',
                content,
                flags=re.DOTALL
            )
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
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
    """Main function to process problematic files"""
    # List of known problematic files
    problematic_files = [
        'app/5g-edge-computing/page.tsx',
        'app/5g-implementation/page.tsx',
        'app/5g-iot-solutions/page.tsx',
        'app/5g-mobile-applications/page.tsx',
        'app/5g-network-infrastructure/page.tsx',
        'app/5g-private-networks/page.tsx',
        'app/5g-smart-city-solutions/page.tsx',
        'app/5g-solutions/page.tsx'
    ]
    
    fixed_count = 0
    for file_path in problematic_files:
        if os.path.isfile(file_path):
            if fix_jsx_file(file_path):
                fixed_count += 1
    
    print(f"Fixed JSX syntax in {fixed_count} files")

if __name__ == "__main__":
    main()