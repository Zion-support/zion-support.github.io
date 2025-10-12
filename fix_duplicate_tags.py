#!/usr/bin/env python3
import os
import re
import glob

def fix_duplicate_tags(file_path):
    """Fix duplicate closing tags and malformed JSX"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix duplicate closing tags
        content = re.sub(r'</Link>\s*</Link>', '</Link>', content)
        content = re.sub(r'</div>\s*</div>', '</div>', content)
        content = re.sub(r'</p>\s*</p>', '</p>', content)
        content = re.sub(r'</h[1-6]>\s*</h[1-6]>', lambda m: m.group(0).split('</h')[0] + '</h' + m.group(0).split('</h')[1].split('>')[0] + '>', content)
        
        # Fix malformed Link components
        content = re.sub(
            r'<Link[^>]*>([^<]+)\n\s*<ArrowRight[^>]*/>\s*\n\s*</Link>\s*\n\s*</Link>',
            r'<Link to="/contact" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">\1\n            <ArrowRight className="ml-2 h-5 w-5" />\n          </Link>',
            content,
            flags=re.MULTILINE
        )
        
        # Fix missing className attributes
        content = re.sub(r'<p>([^<]+)</p>', r'<p className="text-lg text-gray-300 mb-8">\1</p>', content)
        
        # Fix malformed JSX structure
        lines = content.split('\n')
        fixed_lines = []
        i = 0
        while i < len(lines):
            line = lines[i]
            
            # Skip duplicate closing tags
            if re.search(r'^\s*</Link>\s*$', line) and i + 1 < len(lines):
                next_line = lines[i + 1]
                if re.search(r'^\s*</Link>\s*$', next_line):
                    fixed_lines.append(line)
                    i += 2
                    continue
            
            # Skip duplicate closing divs
            if re.search(r'^\s*</div>\s*$', line) and i + 1 < len(lines):
                next_line = lines[i + 1]
                if re.search(r'^\s*</div>\s*$', next_line):
                    fixed_lines.append(line)
                    i += 2
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
    """Fix duplicate tags in all TSX files"""
    app_dir = "/workspace/app"
    tsx_files = glob.glob(f"{app_dir}/**/*.tsx", recursive=True)
    
    fixed_count = 0
    total_count = len(tsx_files)
    
    print(f"Found {total_count} TSX files to check for duplicate tags...")
    
    for file_path in tsx_files:
        if fix_duplicate_tags(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()