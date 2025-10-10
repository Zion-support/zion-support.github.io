#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_issues(file_path):
    """Fix JSX structure issues in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no JSX issues
        if 'tsx' not in file_path:
            return False
            
        print(f"Fixing JSX issues in: {file_path}")
        
        # Fix duplicate keys in object literals
        content = re.sub(r'description:\s*[\'"][^\'\"]*[\'"],\s*description:\s*[\'"][^\'\"]*[\'"]', 
                        lambda m: m.group(0).split(',')[0] + ',', content)
        
        # Fix JSX structure issues
        # Fix mismatched closing tags
        content = re.sub(r'</div>\s*\)\)\}\s*</div>', r'</div>\n              ))}', content)
        content = re.sub(r'</section>\s*</div>\s*</>', r'</section>\n      </div>\n    </>', content)
        content = re.sub(r'</div>\s*</>', r'</div>\n    </>', content)
        
        # Fix unterminated JSX elements
        content = re.sub(r'\)\)\}\s*</div>\s*</section>', r'</div>\n          </section>', content)
        content = re.sub(r'\)\)\}\s*</div>\s*</div>', r'</div>\n        </div>', content)
        
        # Fix missing closing tags
        if 'return (' in content and '</>' in content:
            # Ensure proper structure
            if not re.search(r'return \(\s*<>', content):
                content = re.sub(r'return \(', 'return (\n    <>', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix JSX structure in all relevant files"""
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_jsx_issues(file_path):
                    fixed_count += 1
    
    print(f"\nFixed JSX issues in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()