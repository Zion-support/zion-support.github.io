#!/usr/bin/env python3
"""
Script to fix JSX syntax errors in React/TypeScript files
"""

import os
import re
import glob

def fix_jsx_errors(file_path):
    """Fix JSX syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix mismatched JSX tags
        # Pattern: <div>...<Link>...</div> should be <div>...<Link>...</Link></div>
        content = re.sub(r'<div([^>]*)>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)</div>', 
                        r'<div\1>\2<Link\3>\4</Link>\5</div>', content)
        
        # Fix missing closing tags
        # Pattern: <Link>...</Link> followed by <Link without proper closing
        content = re.sub(r'<Link([^>]*)>([^<]*)</Link>\s*<Link', r'<Link\1>\2</Link>\n                <Link', content)
        
        # Fix missing opening tags
        # Pattern: </Link> without matching opening tag
        content = re.sub(r'([^<])</Link>', r'\1</Link>', content)
        
        # Fix missing closing div tags
        # Pattern: <div>...<Link>...</Link> without closing div
        content = re.sub(r'<div([^>]*)>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)(?!</div>)', 
                        r'<div\1>\2<Link\3>\4</Link>\5</div>', content)
        
        # Fix specific pattern from the error
        # Pattern: </Link> followed by <Link to= without proper structure
        content = re.sub(r'</Link>\s*<Link\s+to=', r'</Link>\n                <Link to=', content)
        
        # Fix missing closing tags in button groups
        content = re.sub(r'<div([^>]*class="[^"]*flex[^"]*"[^>]*)>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)(?!</div>)', 
                        r'<div\1>\2<Link\3>\4</Link>\5<Link\6>\7</Link>\8</div>', content)
        
        # Fix missing closing tags in CTA sections
        content = re.sub(r'<div([^>]*class="[^"]*flex[^"]*"[^>]*)>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)(?!</div>)', 
                        r'<div\1>\2<Link\3>\4</Link>\5<Link\6>\7</Link>\8</div>', content)
        
        # Fix missing closing tags in button groups with specific classes
        content = re.sub(r'<div([^>]*class="[^"]*flex[^"]*gap[^"]*"[^>]*)>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)(?!</div>)', 
                        r'<div\1>\2<Link\3>\4</Link>\5<Link\6>\7</Link>\8</div>', content)
        
        # Fix missing closing tags in justify-center groups
        content = re.sub(r'<div([^>]*class="[^"]*justify-center[^"]*"[^>]*)>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)(?!</div>)', 
                        r'<div\1>\2<Link\3>\4</Link>\5<Link\6>\7</Link>\8</div>', content)
        
        # Fix missing closing tags in flex-col sm:flex-row groups
        content = re.sub(r'<div([^>]*class="[^"]*flex-col[^"]*sm:flex-row[^"]*"[^>]*)>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)(?!</div>)', 
                        r'<div\1>\2<Link\3>\4</Link>\5<Link\6>\7</Link>\8</div>', content)
        
        # Fix missing closing tags in gap-4 groups
        content = re.sub(r'<div([^>]*class="[^"]*gap-4[^"]*"[^>]*)>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)(?!</div>)', 
                        r'<div\1>\2<Link\3>\4</Link>\5<Link\6>\7</Link>\8</div>', content)
        
        # Fix missing closing tags in justify-center gap-4 groups
        content = re.sub(r'<div([^>]*class="[^"]*justify-center[^"]*gap-4[^"]*"[^>]*)>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)(?!</div>)', 
                        r'<div\1>\2<Link\3>\4</Link>\5<Link\6>\7</Link>\8</div>', content)
        
        # Fix missing closing tags in flex flex-col sm:flex-row gap-4 justify-center groups
        content = re.sub(r'<div([^>]*class="[^"]*flex[^"]*flex-col[^"]*sm:flex-row[^"]*gap-4[^"]*justify-center[^"]*"[^>]*)>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)(?!</div>)', 
                        r'<div\1>\2<Link\3>\4</Link>\5<Link\6>\7</Link>\8</div>', content)
        
        # Fix missing closing tags in any flex group with Links
        content = re.sub(r'<div([^>]*class="[^"]*flex[^"]*"[^>]*)>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)(?!</div>)', 
                        r'<div\1>\2<Link\3>\4</Link>\5<Link\6>\7</Link>\8</div>', content)
        
        # Fix missing closing tags in any div with Links
        content = re.sub(r'<div([^>]*)>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)<Link([^>]*)>([^<]*)</Link>([^<]*)(?!</div>)', 
                        r'<div\1>\2<Link\3>\4</Link>\5<Link\6>\7</Link>\8</div>', content)
        
        # Clean up any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>>.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>>.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content)
        content = re.sub(r'=======.*?\n', '', content)
        content = re.sub(r'>>>>>>>.*?\n', '', content)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD|=======|>>>>>>>.*', '', content)
        
        # Clean up excessive whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = re.sub(r'^\s*\n', '', content)
        content = content.strip() + '\n'
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
            
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix JSX errors in all files"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_jsx_errors(file_path):
                    files_fixed += 1
                    print(f"Fixed JSX errors in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed JSX errors in {files_fixed} files")

if __name__ == "__main__":
    main()