#!/usr/bin/env python3

import os
import re
import glob

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove merge conflict markers and keep the latest version (after =======)
        content = re.sub(r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]+', r'\1', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< [^\n]+.*?=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Clean up orphaned markers
        content = re.sub(r'<<<<<<< [^\n]+', '', content)
        content = re.sub(r'=======', '', content)
        content = re.sub(r'>>>>>>> [^\n]+', '', content)
        
        # Remove duplicate lines
        lines = content.split('\n')
        seen = set()
        unique_lines = []
        
        for line in lines:
            stripped = line.strip()
            if stripped and stripped not in seen:
                seen.add(stripped)
                unique_lines.append(line)
            elif not stripped:
                unique_lines.append(line)
        
        content = '\n'.join(unique_lines)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Resolved conflicts in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    print("🚀 Starting simple merge conflict resolution...")
    
    # Find files with merge conflicts
    patterns = [
        '/workspace/**/*.ts',
        '/workspace/**/*.tsx', 
        '/workspace/**/*.js',
        '/workspace/**/*.jsx',
        '/workspace/**/*.json',
        '/workspace/**/*.md'
    ]
    
    files_with_conflicts = []
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<<' in content or '=======' in content or '>>>>>>>' in content:
                            files_with_conflicts.append(file_path)
                except:
                    continue
    
    print(f"📊 Found {len(files_with_conflicts)} files with merge conflicts")
    
    resolved_count = 0
    for file_path in files_with_conflicts[:50]:  # Limit to first 50 files
        if resolve_conflicts_in_file(file_path):
            resolved_count += 1
    
    print(f"\n📈 Resolution Summary:")
    print(f"✅ Successfully resolved: {resolved_count} files")
    print(f"📁 Total processed: {min(len(files_with_conflicts), 50)} files")
    
    print("\n🎉 Simple merge conflict resolution completed!")

if __name__ == "__main__":
    main()