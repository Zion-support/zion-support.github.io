#!/usr/bin/env python3
import os
import re

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a file by keeping the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match merge conflicts
        conflict_pattern = r'<<<<<<< HEAD\s*(.*?)\s*=======.*?>>>>>>> .*?$'
        
        # Replace conflicts with HEAD content
        resolved_content = re.sub(conflict_pattern, r'\1', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        resolved_content = re.sub(r'<<<<<<< HEAD\s*', '', resolved_content)
        resolved_content = re.sub(r'=======.*?>>>>>>> .*?$', '', resolved_content, flags=re.DOTALL)
        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"✅ Resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error resolving conflicts in {file_path}: {e}")
        return False

def main():
    """Resolve merge conflicts in key files"""
    files_to_resolve = [
        'src/components/EnhancedErrorBoundary.tsx',
        'src/pages/About.tsx', 
        'src/pages/HomePage.tsx',
        'tsconfig.json'
    ]
    
    print("🔧 Resolving merge conflicts...")
    
    success_count = 0
    for file_path in files_to_resolve:
        if os.path.exists(file_path):
            if resolve_conflicts_in_file(file_path):
                success_count += 1
        else:
            print(f"⚠️  File not found: {file_path}")
    
    print(f"\n📊 Resolved conflicts in {success_count}/{len(files_to_resolve)} files")

if __name__ == "__main__":
    main()