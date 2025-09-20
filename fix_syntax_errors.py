#!/usr/bin/env python3
"""
Fix syntax errors in TypeScript and JavaScript files
"""
import os
import re
import glob

def fix_tsx_jsx_syntax(file_path):
    """Fix common syntax errors in TSX/JSX files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common syntax issues
        # Fix missing semicolons after interface declarations
        content = re.sub(r'(interface \w+ \{[^}]*\})\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # Fix missing semicolons after type declarations
        content = re.sub(r'(type \w+ = [^;]*)\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # Fix missing semicolons after export statements
        content = re.sub(r'(export [^;]*)\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # Fix JSX syntax issues - ensure proper closing tags
        content = re.sub(r'<([^>]+)>([^<]*)\s*$', r'<\1>\2</\1>', content)
        
        # Fix missing commas in object literals
        content = re.sub(r'(\w+):\s*([^,\n}]+)\s*\n(\s*\})', r'\1: \2,\n\3', content)
        
        # Fix missing commas in arrays
        content = re.sub(r'(\w+)\s*\n(\s*\])', r'\1,\n\2', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_js_syntax(file_path):
    """Fix common syntax errors in JS files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing commas in object literals
        content = re.sub(r'(\w+):\s*([^,\n}]+)\s*\n(\s*\})', r'\1: \2,\n\3', content)
        
        # Fix missing commas in arrays
        content = re.sub(r'(\w+)\s*\n(\s*\])', r'\1,\n\2', content)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix syntax errors"""
    print("🔧 Fixing syntax errors in TypeScript and JavaScript files...")
    
    # Get all TSX files
    tsx_files = glob.glob('src/**/*.tsx', recursive=True)
    jsx_files = glob.glob('src/**/*.jsx', recursive=True)
    ts_files = glob.glob('src/**/*.ts', recursive=True)
    js_files = glob.glob('src/**/*.js', recursive=True)
    
    all_files = tsx_files + jsx_files + ts_files + js_files
    
    print(f"📋 Found {len(all_files)} files to check")
    
    fixed_count = 0
    
    for file_path in all_files:
        print(f"🔍 Checking {file_path}...")
        
        if file_path.endswith(('.tsx', '.jsx')):
            if fix_tsx_jsx_syntax(file_path):
                print(f"✅ Fixed {file_path}")
                fixed_count += 1
        elif file_path.endswith(('.ts', '.js')):
            if fix_js_syntax(file_path):
                print(f"✅ Fixed {file_path}")
                fixed_count += 1
    
    print(f"\n🎉 Fixed syntax errors in {fixed_count} files!")
    
    # Test build after fixes
    print("🧪 Testing build after syntax fixes...")
    import subprocess
    try:
        result = subprocess.run(['npm', 'run', 'build'], capture_output=True, text=True, timeout=180)
        if result.returncode == 0:
            print("✅ Build test passed!")
        else:
            print(f"⚠️  Build test failed: {result.stderr}")
    except Exception as e:
        print(f"❌ Build test error: {e}")

if __name__ == "__main__":
    main()