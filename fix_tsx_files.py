#!/usr/bin/env python3
import os
import re
import glob

def fix_tsx_file(file_path):
    """Fix common TypeScript/JSX issues in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix duplicate function declarations
        # Pattern: export default function PageTsxPage followed by another export default function
        pattern = r'export default function PageTsxPage\(\) \{[^}]*\}\s*export default function (\w+)'
        match = re.search(pattern, content, re.DOTALL)
        if match:
            # Remove the PageTsxPage function and keep the correct one
            content = re.sub(r'export default function PageTsxPage\(\) \{[^}]*\}\s*', '', content, flags=re.DOTALL)
        
        # Fix missing closing tags - look for unclosed div tags
        # This is a simple heuristic - count opening and closing div tags
        open_divs = content.count('<div')
        close_divs = content.count('</div>')
        
        if open_divs > close_divs:
            # Add missing closing div tags
            missing_divs = open_divs - close_divs
            # Find the last closing brace and add missing divs before it
            last_brace = content.rfind('}')
            if last_brace != -1:
                # Add missing closing div tags
                missing_tags = '\n' + '  ' * (missing_divs - 1) + '</div>' * missing_divs
                content = content[:last_brace] + missing_tags + '\n' + content[last_brace:]
        
        # Fix syntax errors in function declarations
        # Look for malformed function declarations
        def replace_function(match):
            func_name = match.group(1)
            import re
            title = re.sub(r'([A-Z])', r' \1', func_name).strip()
            return f'''export default function {func_name}() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced {title.lower()} solutions by Zion Tech Group
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}}'''
        
        content = re.sub(r'export default function (\w+)\(\) \{\s*return\s*\(\s*<div[^>]*>\s*<Helmet>[^<]*</Helmet>\s*<div[^>]*>\s*<div[^>]*>\s*<h1[^>]*>[^<]*</h1>\s*<p[^>]*>[^<]*</p>\s*</div>\s*<div[^>]*>\s*<div[^>]*>\s*<h2[^>]*>[^<]*</h2>\s*<p[^>]*>[^<]*</p>\s*</div>\s*</div>\s*</div>\s*</div>\s*\);\s*\}', 
                        replace_function, content, flags=re.DOTALL)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all problematic TSX files
    pattern = "/workspace/app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        if fix_tsx_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files)} checked")

if __name__ == "__main__":
    main()