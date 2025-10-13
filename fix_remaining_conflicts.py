#!/usr/bin/env python3
"""
Script to fix remaining merge conflicts by removing conflict markers and keeping the newer content
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove all merge conflict markers and keep content after =======
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        conflict_pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]+'
        
        def replace_conflict(match):
            # Get the content after ======= (newer version)
            newer_content = match.group(1)
            return newer_content
        
        # Replace all conflicts with the newer version
        resolved_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be orphaned markers
        resolved_content = re.sub(r'<<<<<<< HEAD.*?=======', '', resolved_content, flags=re.DOTALL)
        resolved_content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', resolved_content, flags=re.DOTALL)
        resolved_content = re.sub(r'>>>>>>> [^\n]+', '', resolved_content)
        resolved_content = re.sub(r'=======', '', resolved_content)
        resolved_content = re.sub(r'<<<<<<< HEAD', '', resolved_content)
        
        # Clean up extra whitespace
        resolved_content = re.sub(r'\n\s*\n\s*\n', '\n\n', resolved_content)
        
        # If content changed, write it back
        if resolved_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            print(f"✅ Fixed conflicts in: {file_path}")
            return True
        else:
            print(f"ℹ️  No conflicts found in: {file_path}")
            return False
            
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all remaining merge conflicts"""
    print("🔍 Fixing remaining merge conflicts...")
    
    # Files that were identified as having conflicts
    conflict_files = [
        './fix-corrupted-pages.js',
        './fix-remaining-conflicts.js', 
        './tailwind.config.js',
        './fix-5g-pages.js',
        './fix_merge_conflicts.js',
        './jest.config.js',
        './App.tsx',
        './fix-components.js',
        './EnhancedFooter.tsx',
        './vite.config.ts'
    ]
    
    # Also check for any remaining files with conflicts
    for pattern in ['*.tsx', '*.ts', '*.js', '*.jsx', '*.json']:
        for file_path in glob.glob(pattern):
            if file_path not in conflict_files:
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if any(marker in content for marker in ['<<<<<<< HEAD', '=======', '>>>>>>> ']):
                            conflict_files.append(file_path)
                except:
                    pass
    
    print(f"📊 Found {len(conflict_files)} files with conflicts")
    
    if not conflict_files:
        print("✅ No merge conflicts found!")
        return
    
    # Fix conflicts in each file
    fixed_count = 0
    for file_path in conflict_files:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
        else:
            print(f"⚠️  File not found: {file_path}")
    
    print(f"\n🎉 Successfully fixed conflicts in {fixed_count} files")
    print(f"📁 Total files processed: {len(conflict_files)}")

if __name__ == "__main__":
    main()