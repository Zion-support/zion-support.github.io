#!/usr/bin/env python3

import os
import re
import glob

def fix_jsx_syntax(file_path):
    """Fix JSX syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix trailing commas after JSX elements
        content = re.sub(r'(<[^>]+>),', r'\1', content)
        
        # Fix trailing commas after closing JSX tags
        content = re.sub(r'(</[^>]+>),', r'\1', content)
        
        # Fix trailing commas after JSX attributes
        content = re.sub(r'(className="[^"]*"),', r'\1', content)
        content = re.sub(r'(title="[^"]*"),', r'\1', content)
        content = re.sub(r'(description="[^"]*"),', r'\1', content)
        
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
    """Main function to fix all JSX syntax errors"""
    print("🔧 Fixing JSX syntax errors in app directory...")
    
    # Find all .tsx files in the app directory
    tsx_files = glob.glob('app/**/*.tsx', recursive=True)
    
    fixed_count = 0
    total_count = len(tsx_files)
    
    for file_path in tsx_files:
        if fix_jsx_syntax(file_path):
            fixed_count += 1
    
    print(f"✅ JSX syntax fixes completed!")
    print(f"📊 Fixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()