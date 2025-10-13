#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the newer version (after =======)
"""
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        
        def replace_conflict(match):
            # Get the content after ======= (newer version)
            newer_content = match.group(2)
            return newer_content
        
        # Replace all conflicts with the newer version
        resolved_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # If content changed, write it back
        if resolved_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            print(f"✅ Resolved conflicts in: {file_path}")
            return True
        else:
            print(f"ℹ️  No conflicts found in: {file_path}")
            return False
            
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    print("🔍 Searching for files with merge conflicts...")
    
    # Find all files with merge conflict markers
    conflict_files = []
    
    # Search in common directories
    search_dirs = ['app', 'src', 'components', 'utils', 'hooks', 'scripts']
    
    for search_dir in search_dirs:
        if os.path.exists(search_dir):
            for root, dirs, files in os.walk(search_dir):
                for file in files:
                    if file.endswith(('.tsx', '.ts', '.js', '.jsx')):
                        file_path = os.path.join(root, file)
                        try:
                            with open(file_path, 'r', encoding='utf-8') as f:
                                content = f.read()
                                if '<<<<<<< HEAD' in content:
                                    conflict_files.append(file_path)
                        except:
                            pass
    
    # Also check root level files
    for pattern in ['*.tsx', '*.ts', '*.js', '*.jsx']:
        for file_path in glob.glob(pattern):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        conflict_files.append(file_path)
            except:
                pass
    
    print(f"📊 Found {len(conflict_files)} files with merge conflicts")
    
    if not conflict_files:
        print("✅ No merge conflicts found!")
        return
    
    # Resolve conflicts in each file
    resolved_count = 0
    for file_path in conflict_files:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
    
    print(f"\n🎉 Successfully resolved conflicts in {resolved_count} files")
    print(f"📁 Total files processed: {len(conflict_files)}")

if __name__ == "__main__":
    main()