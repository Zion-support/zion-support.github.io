#!/usr/bin/env python3

import os
import re
import glob

def final_syntax_fix(file_path):
    """Final targeted syntax fix for remaining issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix React.Fragment syntax - replace with simple div
        content = re.sub(r'<React\.Fragment>', '<div>', content)
        content = re.sub(r'</React\.Fragment>', '</div>', content)
        
        # Fix corrupted title and description attributes
        content = re.sub(r'title="\[\\^"\]\*"', 'title="Page Title"', content)
        content = re.sub(r'description="\[\\^"\]\*"', 'description="Page Description"', content)
        
        # Fix malformed className attributes
        content = re.sub(r'className="py-20 px-4 sm: px-6 lg:px-8"', 'className="py-20 px-4 sm:px-6 lg:px-8"', content)
        
        # Fix any remaining trailing commas in JSX
        content = re.sub(r'(<[^>]+>),', r'\1', content)
        content = re.sub(r'(</[^>]+>),', r'\1', content)
        
        # Fix trailing commas in JSX attributes
        content = re.sub(r'(className="[^"]*"),', r'\1', content)
        content = re.sub(r'(title="[^"]*"),', r'\1', content)
        content = re.sub(r'(description="[^"]*"),', r'\1', content)
        content = re.sub(r'(keywords="[^"]*"),', r'\1', content)
        content = re.sub(r'(url="[^"]*"),', r'\1', content)
        
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
    """Main function to fix remaining syntax errors"""
    print("🔧 Final syntax fix for remaining issues...")
    
    # Find all .tsx files in the app directory
    tsx_files = glob.glob('app/**/*.tsx', recursive=True)
    
    fixed_count = 0
    total_count = len(tsx_files)
    
    for file_path in tsx_files:
        if final_syntax_fix(file_path):
            fixed_count += 1
    
    print(f"✅ Final syntax fixes completed!")
    print(f"📊 Fixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()