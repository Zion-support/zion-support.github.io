#!/usr/bin/env python3
import os
import re
import glob

def fix_tsx_file(file_path):
    """Fix common TSX syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix function name issues (5GDataAnalyticsZionTechGroup -> proper function name)
        if '5GDataAnalyticsZionTechGroup' in content:
            # Extract the directory name to create a proper function name
            dir_name = os.path.basename(os.path.dirname(file_path))
            function_name = ''.join(word.capitalize() for word in dir_name.replace('-', ' ').split())
            content = re.sub(r'export default function 5GDataAnalyticsZionTechGroup', f'export default function {function_name}', content)
        
        # Fix malformed array syntax - missing opening braces
        # Pattern: array = [\n      key: value, -> array = [\n    {\n      key: value,
        content = re.sub(r'(\w+)\s*=\s*\[\s*\n\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'\1 = [\n    {\n      \2:', content)
        
        # Fix missing closing braces for objects in arrays
        # Pattern: },\n      key: value, -> },\n    {\n      key: value,
        content = re.sub(r'},\s*\n\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'},\n    {\n      \1:', content)
        
        # Fix malformed JSX - missing opening tags
        content = re.sub(r'<title />([^<]+)</title>', r'<title>\1</title>', content)
        
        # Fix malformed className attributes
        content = re.sub(r'className="([^"]*)\s+([^"]*)"', r'className="\1 \2"', content)
        
        # Fix malformed text content with missing spaces
        content = re.sub(r'text-(\d+)\s*xl', r'text-\1xl', content)
        content = re.sub(r'text-(\d+)\s*font-bold', r'text-\1 font-bold', content)
        content = re.sub(r'text-(\d+)\s*mb-(\d+)', r'text-\1 mb-\2', content)
        content = re.sub(r'text-(\d+)\s*text-(\w+)', r'text-\1 text-\2', content)
        
        # Fix malformed Link components
        content = re.sub(r'<Link\s+to="([^"]*)"\s+className="([^"]*)"\s*>\s*([^<]+)\s*<', r'<Link to="\1" className="\2">\3<', content)
        
        # Fix malformed closing tags
        content = re.sub(r'<([^>]+)\s*/>([^<]+)</\1>', r'<\1>\2</\1>', content)
        
        # Fix duplicate imports
        lines = content.split('\n')
        seen_imports = set()
        fixed_lines = []
        for line in lines:
            if line.strip().startswith('import '):
                if line not in seen_imports:
                    seen_imports.add(line)
                    fixed_lines.append(line)
            else:
                fixed_lines.append(line)
        content = '\n'.join(fixed_lines)
        
        # Fix malformed return statements
        content = re.sub(r'return\s*\(\s*\n\s*<title />', r'return (\n    <>\n      <Helmet>\n        <title>', content)
        
        # Fix missing closing tags for JSX elements
        content = re.sub(r'<p\s+className="([^"]*)"\s*>\s*([^<]+)\s*<', r'<p className="\1">\2</p>\n          <', content)
        
        # Fix malformed function declarations
        content = re.sub(r'export default function\s+(\d+)', r'export default function Component\1', content)
        
        # If content was modified, write it back
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
    """Fix all TSX files in the app directory"""
    app_dir = "/workspace/app"
    tsx_files = glob.glob(f"{app_dir}/**/*.tsx", recursive=True)
    
    fixed_count = 0
    total_count = len(tsx_files)
    
    print(f"Found {total_count} TSX files to check...")
    
    for file_path in tsx_files:
        if fix_tsx_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()