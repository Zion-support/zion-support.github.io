#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_structure(file_path):
    """Fix JSX structure issues in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no JSX issues
        if 'tsx' not in file_path:
            return False
            
        print(f"Fixing JSX structure in: {file_path}")
        
        # Fix common JSX structure issues
        
        # Fix mismatched closing tags - replace </article> with </div> when it should be div
        content = re.sub(r'</article>\s*\)\)\}\s*</div>', r'</div>\n              ))}', content)
        
        # Fix misplaced closing tags
        content = re.sub(r'</div>\s*\)\)\}\s*</div>', r'</div>\n              ))}', content)
        
        # Fix section/div mismatches
        content = re.sub(r'</section>\s*</div>\s*</>', r'</section>\n      </div>\n    </>', content)
        
        # Fix fragment/div mismatches
        content = re.sub(r'</div>\s*</>', r'</div>\n    </>', content)
        
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
                if fix_jsx_structure(file_path):
                    fixed_count += 1
    
    print(f"\nFixed JSX structure in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()