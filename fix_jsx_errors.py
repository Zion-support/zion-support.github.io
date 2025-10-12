#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_file(file_path):
    """Fix JSX closing tag errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed JSX structure - missing closing tags
        # Pattern: <div className="...">\n        <h1>...\n        <p>...\n      </div>\n    </>\n  )
        # Should be: <div className="...">\n        <h1>...</h1>\n        <p>...</p>\n      </div>\n    </>\n  )
        
        # Fix missing closing tags for common elements
        content = re.sub(r'<h1([^>]*)>([^<]+)\n', r'<h1\1>\2</h1>\n', content)
        content = re.sub(r'<h2([^>]*)>([^<]+)\n', r'<h2\1>\2</h2>\n', content)
        content = re.sub(r'<h3([^>]*)>([^<]+)\n', r'<h3\1>\2</h3>\n', content)
        content = re.sub(r'<p([^>]*)>([^<]+)\n', r'<p\1>\2</p>\n', content)
        content = re.sub(r'<span([^>]*)>([^<]+)\n', r'<span\1>\2</span>\n', content)
        content = re.sub(r'<div([^>]*)>([^<]+)\n', r'<div\1>\2</div>\n', content)
        
        # Fix specific patterns that are common in the errors
        # Pattern: <div className="...">\n        <h1>...\n        <p>...\n      </div>
        content = re.sub(
            r'<div className="([^"]*)"[^>]*>\s*\n\s*<h1[^>]*>([^<]+)\s*\n\s*<p[^>]*>([^<]+)\s*\n\s*</div>',
            r'<div className="\1">\n        <h1>\2</h1>\n        <p>\3</p>\n      </div>',
            content,
            flags=re.MULTILINE
        )
        
        # Fix malformed return statements
        # Pattern: return (\n    <>\n      <Helmet>\n        <title>...\n      </Helmet>\n      <div>...\n    </>\n  )
        content = re.sub(
            r'return\s*\(\s*\n\s*<>\s*\n\s*<Helmet>\s*\n\s*<title>([^<]+)</title>\s*\n\s*</Helmet>\s*\n\s*<div[^>]*>([^<]+)</div>\s*\n\s*</>\s*\n\s*\)',
            r'return (\n    <>\n      <Helmet>\n        <title>\1</title>\n      </Helmet>\n      <div>\2</div>\n    </>\n  )',
            content,
            flags=re.MULTILINE
        )
        
        # Fix missing closing tags in JSX fragments
        content = re.sub(r'<>\s*\n\s*<Helmet>\s*\n\s*<title>([^<]+)</title>\s*\n\s*</Helmet>\s*\n\s*<div[^>]*>([^<]+)</div>\s*\n\s*</>', 
                        r'<>\n      <Helmet>\n        <title>\1</title>\n      </Helmet>\n      <div>\2</div>\n    </>', content)
        
        # Fix malformed function declarations
        content = re.sub(r'export default function\s+(\d+)', r'export default function Component\1', content)
        
        # Fix specific JSX structure issues
        lines = content.split('\n')
        fixed_lines = []
        i = 0
        while i < len(lines):
            line = lines[i]
            
            # Fix lines that have malformed JSX
            if re.search(r'<h[1-6][^>]*>[^<]+$', line) and i + 1 < len(lines):
                # This is a heading without closing tag
                next_line = lines[i + 1]
                if not next_line.strip().startswith('</h'):
                    # Add closing tag
                    tag_match = re.search(r'<h([1-6])', line)
                    if tag_match:
                        level = tag_match.group(1)
                        fixed_lines.append(line + f'</h{level}>')
                        i += 1
                        continue
            
            # Fix lines that have malformed paragraphs
            if re.search(r'<p[^>]*>[^<]+$', line) and i + 1 < len(lines):
                next_line = lines[i + 1]
                if not next_line.strip().startswith('</p'):
                    fixed_lines.append(line + '</p>')
                    i += 1
                    continue
            
            # Fix lines that have malformed divs
            if re.search(r'<div[^>]*>[^<]+$', line) and i + 1 < len(lines):
                next_line = lines[i + 1]
                if not next_line.strip().startswith('</div'):
                    fixed_lines.append(line + '</div>')
                    i += 1
                    continue
            
            fixed_lines.append(line)
            i += 1
        
        content = '\n'.join(fixed_lines)
        
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
    """Fix all TSX files with JSX errors"""
    app_dir = "/workspace/app"
    tsx_files = glob.glob(f"{app_dir}/**/*.tsx", recursive=True)
    
    fixed_count = 0
    total_count = len(tsx_files)
    
    print(f"Found {total_count} TSX files to check for JSX errors...")
    
    for file_path in tsx_files:
        if fix_jsx_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()