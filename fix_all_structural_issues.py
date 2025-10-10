#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_structure(file_path):
    """Fix common JSX structural issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has JSX issues
        if not ('.tsx' in file_path and ('return (' in content or 'return(' in content)):
            return False
        
        # Fix common JSX issues
        fixes_applied = False
        
        # Fix missing opening fragment tags
        if 'return (' in content and '<div className=' in content and not content.strip().startswith('return (\n    <>'):
            content = content.replace('return (\n    <div', 'return (\n    <>\n      <div')
            fixes_applied = True
        
        # Fix missing closing fragment tags
        if '</div>\n  );\n};' in content and 'return (\n    <>' in content:
            content = content.replace('</div>\n  );\n};', '</div>\n    </>\n  );\n};')
            fixes_applied = True
        
        # Fix missing closing div tags
        if '))}\n          </div>\n        </section>' in content:
            content = content.replace('))}\n          </div>\n        </section>', '))}\n            </div>\n          </div>\n        </section>')
            fixes_applied = True
        
        # Fix broken JSX structure
        if '))}\n              </div>\n            </div>\n          </section>' in content:
            content = content.replace('))}\n              </div>\n            </div>\n          </section>', '))}\n              </div>\n            </div>\n          </div>\n        </section>')
            fixes_applied = True
        
        if fixes_applied:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX structure in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TSX files
    pattern = "app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        if fix_jsx_structure(file_path):
            fixed_count += 1
    
    print(f"Fixed JSX structure in {fixed_count} files")

if __name__ == "__main__":
    main()