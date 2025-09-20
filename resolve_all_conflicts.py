#!/usr/bin/env python3

import os
import re

def resolve_merge_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return True
        
        # Remove merge conflict markers and keep the HEAD version (our version)
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> .*?\n', r'\1', content, flags=re.DOTALL)
        
        # Pattern 2: Just remove conflict markers if they exist alone
        content = re.sub(r'^<<<<<<< .*?\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^=======\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>> .*?\n', '', content, flags=re.MULTILINE)
        
        # Clean up extra newlines
        content = re.sub(r'\n{3,}', '\n\n', content)
        
        # Clean up trailing whitespace
        content = re.sub(r'\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def main():
    """Resolve all merge conflicts in source files"""
    print("🔧 Resolving all merge conflicts...")
    
    # Get all source files with conflicts
    source_files = [
        '/workspace/src/components/ui/separator.tsx',
        '/workspace/src/components/ui/label.tsx',
        '/workspace/src/components/ui/input.tsx',
        '/workspace/src/components/ui/switch.tsx',
        '/workspace/src/components/ui/badge.tsx',
        '/workspace/src/components/Header.tsx',
        '/workspace/src/components/ProtectedRoute.tsx',
        '/workspace/src/components/jobs/applications.tsx',
        '/workspace/src/components/CategoryCard.tsx',
        '/workspace/src/pages/index.tsx',
        '/workspace/src/pages/Wishlist.tsx',
        '/workspace/src/pages/Contact.tsx',
        '/workspace/src/pages/_app.tsx',
        '/workspace/src/utils/performanceOptimizer.ts',
        '/workspace/src/utils/getStripe.ts'
    ]
    
    resolved_count = 0
    failed_count = 0
    
    for file_path in source_files:
        if os.path.exists(file_path):
            print(f"Resolving conflicts in {file_path}...")
            if resolve_merge_conflicts_in_file(file_path):
                print(f"✅ Resolved conflicts in {file_path}")
                resolved_count += 1
            else:
                print(f"❌ Failed to resolve conflicts in {file_path}")
                failed_count += 1
        else:
            print(f"⚠️  File not found: {file_path}")
    
    print(f"\n🎉 Merge conflict resolution completed!")
    print(f"✅ Successfully resolved: {resolved_count}")
    print(f"❌ Failed to resolve: {failed_count}")

if __name__ == "__main__":
    main()