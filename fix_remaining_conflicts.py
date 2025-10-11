#!/usr/bin/env python3
"""
Advanced script to resolve complex merge conflicts
"""
import os
import re
import glob

def clean_conflict_markers(content):
    """Clean all types of conflict markers from content"""
    # Remove all conflict markers and their content
    patterns = [
        r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+',
        r'<<<<<<< HEAD.*?=======.*?>>>>>>>',
        r'<<<<<<< HEAD.*?=======',
        r'=======.*?>>>>>>> [^\n]+',
        r'=======.*?>>>>>>>',
        r'^<<<<<<< HEAD.*$',
        r'^=======.*$',
        r'^>>>>>>> .*$',
    ]
    
    for pattern in patterns:
        content = re.sub(pattern, '', content, flags=re.MULTILINE | re.DOTALL)
    
    # Clean up extra whitespace and empty lines
    content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
    content = re.sub(r'^\s*\n', '', content, flags=re.MULTILINE)
    
    return content

def fix_navigation_file(file_path):
    """Special handling for Navigation.tsx"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Clean conflict markers
        content = clean_conflict_markers(content)
        
        # Fix specific issues in Navigation.tsx
        # Remove duplicate/malformed lines
        lines = content.split('\n')
        cleaned_lines = []
        
        for i, line in enumerate(lines):
            # Skip malformed lines
            if '=======' in line and 'Zion Tech Group' not in line:
                continue
            if line.strip() == '=======':
                continue
            if '>>>>>>>' in line and 'cursor/' in line:
                continue
            if '<<<<<<< HEAD' in line:
                continue
            
            cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        # Fix the logo section specifically
        content = re.sub(
            r'<Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">\s*<span className="text-3xl mr-2">⚡</span>=======\s*<Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">\s*<span className="text-3xl mr-2">⚡</span>\s*Zion Tech Group\s*</Link>',
            '<Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">\n            <span className="text-3xl mr-2">⚡</span>\n            Zion Tech Group\n          </Link>',
            content,
            flags=re.DOTALL
        )
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed Navigation.tsx")
        return True
        
    except Exception as e:
        print(f"❌ Error fixing Navigation.tsx: {e}")
        return False

def fix_enhanced_error_boundary(file_path):
    """Special handling for EnhancedErrorBoundary.tsx"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Clean conflict markers
        content = clean_conflict_markers(content)
        
        # Fix any remaining issues
        content = re.sub(r'>>>>>>> cursor/[^\n]+', '', content)
        content = re.sub(r'<<<<<<< HEAD', '', content)
        content = re.sub(r'=======', '', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed EnhancedErrorBoundary.tsx")
        return True
        
    except Exception as e:
        print(f"❌ Error fixing EnhancedErrorBoundary.tsx: {e}")
        return False

def main():
    """Main function to fix remaining conflicts"""
    print("🔧 Fixing remaining merge conflicts...")
    
    # Fix specific problematic files
    files_to_fix = [
        'app/components/Navigation.tsx',
        'app/components/EnhancedErrorBoundary.tsx'
    ]
    
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if 'Navigation' in file_path:
                fix_navigation_file(file_path)
            elif 'EnhancedErrorBoundary' in file_path:
                fix_enhanced_error_boundary(file_path)
        else:
            print(f"⚠️  File not found: {file_path}")
    
    # Clean up all remaining files with simple conflict marker removal
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js'
    ]
    
    all_files = []
    for pattern in patterns:
        all_files.extend(glob.glob(pattern, recursive=True))
    
    for file_path in all_files:
        if 'node_modules' in file_path or '.git' in file_path:
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>>' in content:
                cleaned_content = clean_conflict_markers(content)
                
                if cleaned_content != content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(cleaned_content)
                    print(f"✅ Cleaned {file_path}")
                    
        except Exception as e:
            print(f"⚠️  Could not process {file_path}: {e}")
    
    print("\n✅ Conflict resolution complete!")

if __name__ == "__main__":
    main()