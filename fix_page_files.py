#!/usr/bin/env python3
"""
Script to fix all page files with missing function declarations
"""
import os
import re

def fix_page_file(file_path):
    """Fix a page file by adding missing function declaration"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if it already has a function declaration
        if 'const ' in content and 'React.FC' in content:
            return True
        
        # Find the first const declaration that looks like state
        lines = content.split('\n')
        fixed_lines = []
        function_added = False
        
        for i, line in enumerate(lines):
            # Look for the first const declaration that's likely state
            if not function_added and line.strip().startswith('const ') and ('useState' in line or '[' in line):
                # Add function declaration before this line
                fixed_lines.append('const ' + os.path.basename(file_path).replace('.tsx', '').replace('.ts', '') + 'Page: React.FC = () => {')
                fixed_lines.append('')
                function_added = True
            
            fixed_lines.append(line)
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(fixed_lines))
        
        return True
    except Exception as e:
        print(f"❌ Error fixing {file_path}: {e}")
        return False

def main():
    """Main function"""
    print("🚀 Fixing page files...")
    
    # List of page files to fix
    page_files = [
        'app/pages/AboutPage.tsx',
        'app/pages/AISolutionsPage.tsx',
        'app/pages/CloudSolutionsPage.tsx',
        'app/pages/CommunityPage.tsx',
        'app/pages/HomePage.tsx',
        'app/pages/PricingPage.tsx',
        'app/pages/StatusPage.tsx',
        'app/pages/TermsPage.tsx',
        'app/pages/TutorialsPage.tsx',
    ]
    
    for file_path in page_files:
        if os.path.exists(file_path):
            print(f"🔧 Fixing {file_path}")
            fix_page_file(file_path)
    
    print("✅ Page files fixed!")

if __name__ == "__main__":
    main()