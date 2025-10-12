#!/usr/bin/env python3
"""
Final comprehensive fix for JSX syntax errors.
"""

import os
import re
import glob

def fix_jsx_file(file_path):
    """Fix JSX syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common JSX issues
        # Fix malformed closing tags
        content = re.sub(r'</d></di></div>', '</div>', content)
        content = re.sub(r'</foot></foote>', '</footer>', content)
        content = re.sub(r'</h></h1>', '</h1>', content)
        content = re.sub(r'</Li></Lin>', '</Link>', content)
        content = re.sub(r'</sp></spa>', '</span>', content)
        content = re.sub(r'</Rou></Rout>', '</Route>', content)
        content = re.sub(r'</Suspen></Suspens>', '</Suspense>', content)
        content = re.sub(r'</HelmetProvid></HelmetProvide>', '</HelmetProvider>', content)
        content = re.sub(r'</ErrorBoundar>', '</ErrorBoundary>', content)
        
        # Fix malformed opening tags
        content = re.sub(r'<d></d></di>', '<div>', content)
        content = re.sub(r'<foot></foote>', '<footer>', content)
        content = re.sub(r'<h></h1>', '<h1>', content)
        content = re.sub(r'<Li></Lin>', '<Link>', content)
        content = re.sub(r'<sp></spa>', '<span>', content)
        content = re.sub(r'<Rou></Rout>', '<Route>', content)
        content = re.sub(r'<Suspen></Suspens>', '<Suspense>', content)
        content = re.sub(r'<HelmetProvid></HelmetProvide>', '<HelmetProvider>', content)
        content = re.sub(r'<ErrorBoundar>', '<ErrorBoundary>', content)
        
        # Fix broken JSX expressions
        content = re.sub(r'<([^>]+) /&gt;}', r'<\1 />', content)
        content = re.sub(r'<([^>]+) /&gt;}', r'<\1 />', content)
        
        # Fix malformed JSX attributes
        content = re.sub(r'className="([^"]*?)"></d></di>', r'className="\1">', content)
        content = re.sub(r'className="([^"]*?)"></foot></foote>', r'className="\1">', content)
        content = re.sub(r'className="([^"]*?)"></h></h1>', r'className="\1">', content)
        
        # Fix missing closing tags for common elements
        content = re.sub(r'<div([^>]*)>(?!.*</div>)', r'<div\1></div>', content, flags=re.DOTALL)
        content = re.sub(r'<h1([^>]*)>(?!.*</h1>)', r'<h1\1></h1>', content, flags=re.DOTALL)
        content = re.sub(r'<h2([^>]*)>(?!.*</h2>)', r'<h2\1></h2>', content, flags=re.DOTALL)
        content = re.sub(r'<h3([^>]*)>(?!.*</h3>)', r'<h3\1></h3>', content, flags=re.DOTALL)
        content = re.sub(r'<p([^>]*)>(?!.*</p>)', r'<p\1></p>', content, flags=re.DOTALL)
        content = re.sub(r'<span([^>]*)>(?!.*</span>)', r'<span\1></span>', content, flags=re.DOTALL)
        content = re.sub(r'<Link([^>]*)>(?!.*</Link>)', r'<Link\1></Link>', content, flags=re.DOTALL)
        content = re.sub(r'<Helmet([^>]*)>(?!.*</Helmet>)', r'<Helmet\1></Helmet>', content, flags=re.DOTALL)
        content = re.sub(r'<title([^>]*)>(?!.*</title>)', r'<title\1></title>', content, flags=re.DOTALL)
        
        # Fix broken function declarations
        content = re.sub(r'export default ([^;]+);\s*$', r'export default \1;', content, flags=re.MULTILINE)
        
        # Fix JSX fragment issues
        # Look for patterns like <div>...</div><div>...</div> and wrap in fragment
        lines = content.split('\n')
        in_return = False
        return_start = 0
        jsx_content = []
        
        for i, line in enumerate(lines):
            if 'return (' in line:
                in_return = True
                return_start = i
                jsx_content = [line]
            elif in_return and (line.strip() == ');' or line.strip() == '};'):
                jsx_content.append(line)
                # Check if we have multiple root elements
                full_jsx = '\n'.join(jsx_content)
                if full_jsx.count('<') > full_jsx.count('</') + 1:
                    # Wrap in fragment
                    jsx_content[0] = jsx_content[0].replace('return (', 'return (\n    <>')
                    jsx_content[-1] = jsx_content[-1].replace(');', '\n    </>\n  );')
                    lines[return_start:i+1] = jsx_content
                in_return = False
            elif in_return:
                jsx_content.append(line)
        
        content = '\n'.join(lines)
        
        # Clean up any remaining malformed tags
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)([^>]*?)></\1>', r'<\1\2 />', content)
        
        # Fix specific patterns that are causing issues
        content = re.sub(r'className="([^"]*?)"></d></di>', r'className="\1">', content)
        content = re.sub(r'className="([^"]*?)"></foot></foote>', r'className="\1">', content)
        content = re.sub(r'className="([^"]*?)"></h></h1>', r'className="\1">', content)
        
        # Fix broken JSX expressions
        content = re.sub(r'<([^>]+) /&gt;}', r'<\1 />', content)
        
        # Fix missing closing tags for common elements
        content = re.sub(r'<div([^>]*)>(?!.*</div>)', r'<div\1></div>', content, flags=re.DOTALL)
        content = re.sub(r'<h1([^>]*)>(?!.*</h1>)', r'<h1\1></h1>', content, flags=re.DOTALL)
        content = re.sub(r'<h2([^>]*)>(?!.*</h2>)', r'<h2\1></h2>', content, flags=re.DOTALL)
        content = re.sub(r'<h3([^>]*)>(?!.*</h3>)', r'<h3\1></h3>', content, flags=re.DOTALL)
        content = re.sub(r'<p([^>]*)>(?!.*</p>)', r'<p\1></p>', content, flags=re.DOTALL)
        content = re.sub(r'<span([^>]*)>(?!.*</span>)', r'<span\1></span>', content, flags=re.DOTALL)
        content = re.sub(r'<Link([^>]*)>(?!.*</Link>)', r'<Link\1></Link>', content, flags=re.DOTALL)
        content = re.sub(r'<Helmet([^>]*)>(?!.*</Helmet>)', r'<Helmet\1></Helmet>', content, flags=re.DOTALL)
        content = re.sub(r'<title([^>]*)>(?!.*</title>)', r'<title\1></title>', content, flags=re.DOTALL)
        
        # Fix broken function declarations
        content = re.sub(r'export default ([^;]+);\s*$', r'export default \1;', content, flags=re.MULTILINE)
        
        # Clean up any remaining malformed tags
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)([^>]*?)></\1>', r'<\1\2 />', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Fix all page files with JSX syntax errors."""
    # Get all page files
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    page_files.extend(glob.glob('app/**/page.ts', recursive=True))
    
    print(f"Found {len(page_files)} page files to process")
    
    fixed_count = 0
    for file_path in page_files:
        if fix_jsx_file(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Successfully fixed {fixed_count} page files")

if __name__ == "__main__":
    main()