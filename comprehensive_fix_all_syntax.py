#!/usr/bin/env python3

import os
import re
import glob

def fix_all_syntax_errors(file_path):
    """Fix all syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix metadata syntax errors
        content = re.sub(r'export const metadata: Metadata = {;', 'export const metadata: Metadata = {', content)
        
        # Fix malformed JSX fragments
        content = re.sub(r'<>,', '<>', content)
        content = re.sub(r'<>', '<React.Fragment>', content)
        content = re.sub(r'</>', '</React.Fragment>', content)
        
        # Fix corrupted title and description attributes
        content = re.sub(r'title="\[\\^"\]\*"', 'title="Page Title"', content)
        content = re.sub(r'description="\[\\^"\]\*"', 'description="Page Description"', content)
        
        # Fix trailing commas in JSX
        content = re.sub(r'(<[^>]+>),', r'\1', content)
        content = re.sub(r'(</[^>]+>),', r'\1', content)
        
        # Fix trailing commas in JSX attributes
        content = re.sub(r'(className="[^"]*"),', r'\1', content)
        content = re.sub(r'(title="[^"]*"),', r'\1', content)
        content = re.sub(r'(description="[^"]*"),', r'\1', content)
        content = re.sub(r'(keywords="[^"]*"),', r'\1', content)
        content = re.sub(r'(url="[^"]*"),', r'\1', content)
        
        # Fix malformed return statements
        content = re.sub(r'return \(;', 'return (', content)
        
        # Fix malformed closing braces
        content = re.sub(r'}\),$', '})', content, flags=re.MULTILINE)
        content = re.sub(r'}\),$', '})', content, flags=re.MULTILINE)
        
        # Fix trailing commas in function calls
        content = re.sub(r'\),$', ')', content, flags=re.MULTILINE)
        
        # Fix malformed JSX component syntax
        content = re.sub(r'<SEO,', '<SEO', content)
        content = re.sub(r'<ErrorBoundary,', '<ErrorBoundary', content)
        content = re.sub(r'<div,', '<div', content)
        
        # Fix malformed closing tags
        content = re.sub(r',</div>', '</div>', content)
        content = re.sub(r',</h1>', '</h1>', content)
        content = re.sub(r',</h2>', '</h2>', content)
        content = re.sub(r',</h3>', '</h3>', content)
        content = re.sub(r',</p>', '</p>', content)
        content = re.sub(r',</span>', '</span>', content)
        content = re.sub(r',</section>', '</section>', content)
        content = re.sub(r',</article>', '</article>', content)
        content = re.sub(r',</header>', '</header>', content)
        content = re.sub(r',</footer>', '</footer>', content)
        content = re.sub(r',</main>', '</main>', content)
        content = re.sub(r',</nav>', '</nav>', content)
        content = re.sub(r',</SEO>', '</SEO>', content)
        content = re.sub(r',</ErrorBoundary>', '</ErrorBoundary>', content)
        
        # Fix malformed object properties
        content = re.sub(r'description:,', 'description:', content)
        content = re.sub(r'title:,', 'title:', content)
        
        # Fix import statement syntax
        content = re.sub(r"import React from 'react';", "import React from 'react'", content)
        content = re.sub(r"import Link from 'next/link';", "import Link from 'next/link'", content)
        content = re.sub(r"import { Metadata } from 'next';", "import { Metadata } from 'next'", content)
        
        # Fix interface syntax
        content = re.sub(r'interface Props {,', 'interface Props {', content)
        content = re.sub(r'interface State {,', 'interface State {', content)
        
        # Fix class syntax
        content = re.sub(r'class \w+ extends \w+<[^>]+> {,', lambda m: m.group(0).replace(',', ''), content)
        
        # Fix constructor syntax
        content = re.sub(r'constructor\([^)]+\) {,', lambda m: m.group(0).replace(',', ''), content)
        
        # Fix method syntax
        content = re.sub(r'static \w+\([^)]*\): \w+ {,', lambda m: m.group(0).replace(',', ''), content)
        content = re.sub(r'\w+\([^)]*\) {,', lambda m: m.group(0).replace(',', ''), content)
        
        # Fix return statements in methods
        content = re.sub(r'return {[^}]+};', lambda m: m.group(0).replace(';', ','), content)
        
        # Fix console.error syntax
        content = re.sub(r"console\.error\('[^']*',[^)]+\);", lambda m: m.group(0).replace(';', ''), content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Fixed: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"❌ Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all syntax errors"""
    print("🔧 Comprehensive syntax fix for all app files...")
    
    # Find all .tsx files in the app directory
    tsx_files = glob.glob('app/**/*.tsx', recursive=True)
    
    fixed_count = 0
    total_count = len(tsx_files)
    
    for file_path in tsx_files:
        if fix_all_syntax_errors(file_path):
            fixed_count += 1
    
    print(f"✅ Comprehensive syntax fixes completed!")
    print(f"📊 Fixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()