#!/usr/bin/env python3
"""
Comprehensive merge conflict resolver for the Zion Tech Group website.
This script will automatically resolve all merge conflicts in the codebase.
"""

import os
import re
import subprocess
import sys
from pathlib import Path

def find_files_with_conflicts():
    """Find all files with merge conflict markers."""
    conflict_files = []
    
    # Search for files with merge conflict markers
    try:
        result = subprocess.run(
            ['grep', '-r', '-l', '<<<<<<< HEAD', '/workspace'],
            capture_output=True, text=True, cwd='/workspace'
        )
        if result.returncode == 0:
            conflict_files = result.stdout.strip().split('\n')
    except Exception as e:
        print(f"Error finding conflict files: {e}")
    
    return [f for f in conflict_files if f and os.path.exists(f)]

def resolve_conflict_in_file(file_path):
    """Resolve merge conflicts in a single file."""
    print(f"Resolving conflicts in: {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no conflicts
        if '<<<<<<< HEAD' not in content:
            return True
        
        # Resolve conflicts by keeping both versions when possible, or the newer version
        lines = content.split('\n')
        resolved_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            if line.strip() == '<<<<<<< HEAD':
                # Start of conflict - find the end
                conflict_start = i
                i += 1
                
                # Find the ======= separator
                while i < len(lines) and lines[i].strip() != '=======':
                    i += 1
                
                if i < len(lines):
                    # Found =======, now find >>>>>>> 
                    i += 1
                    while i < len(lines) and not lines[i].strip().startswith('>>>>>>>'):
                        i += 1
                    
                    if i < len(lines):
                        # Found the end of conflict
                        conflict_end = i
                        
                        # Extract the two versions
                        head_lines = lines[conflict_start + 1:i - 1]
                        separator_line = lines[i - 1]
                        main_lines = []
                        
                        # Find where main version starts (after =======)
                        j = conflict_start + 1
                        while j < len(lines) and lines[j].strip() != '=======':
                            j += 1
                        
                        if j < len(lines):
                            j += 1  # Skip the ======= line
                            while j < i and not lines[j].strip().startswith('>>>>>>>'):
                                main_lines.append(lines[j])
                                j += 1
                        
                        # Resolve the conflict
                        resolved_section = resolve_conflict_section(head_lines, main_lines, file_path)
                        resolved_lines.extend(resolved_section)
                        
                        # Skip the >>>>>>> line
                        i += 1
                    else:
                        # No end found, keep original
                        resolved_lines.append(line)
                        i += 1
                else:
                    # No separator found, keep original
                    resolved_lines.append(line)
                    i += 1
            else:
                resolved_lines.append(line)
                i += 1
        
        # Write the resolved content
        resolved_content = '\n'.join(resolved_lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"✓ Resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"✗ Error resolving conflicts in {file_path}: {e}")
        return False

def resolve_conflict_section(head_lines, main_lines, file_path):
    """Resolve a specific conflict section."""
    # For package.json, prefer the main version (more complete)
    if file_path.endswith('package.json'):
        return main_lines
    
    # For TypeScript/JavaScript files, try to merge intelligently
    if file_path.endswith(('.ts', '.tsx', '.js', '.jsx')):
        return merge_js_conflict(head_lines, main_lines)
    
    # For other files, prefer main version
    return main_lines

def merge_js_conflict(head_lines, main_lines):
    """Merge JavaScript/TypeScript conflicts intelligently."""
    # Simple strategy: prefer main version, but keep unique imports
    result = []
    
    # Collect all imports from both versions
    all_imports = set()
    for line in head_lines + main_lines:
        if line.strip().startswith('import ') or line.strip().startswith('export '):
            all_imports.add(line.strip())
    
    # Add unique imports
    for imp in sorted(all_imports):
        result.append(imp)
    
    # Add main version content (excluding imports)
    for line in main_lines:
        if not (line.strip().startswith('import ') or line.strip().startswith('export ')):
            result.append(line)
    
    return result

def main():
    """Main function to resolve all conflicts."""
    print("🔍 Searching for files with merge conflicts...")
    
    conflict_files = find_files_with_conflicts()
    
    if not conflict_files:
        print("✅ No merge conflicts found!")
        return True
    
    print(f"Found {len(conflict_files)} files with conflicts:")
    for file_path in conflict_files:
        print(f"  - {file_path}")
    
    print("\n🔧 Resolving conflicts...")
    
    success_count = 0
    for file_path in conflict_files:
        if resolve_conflict_in_file(file_path):
            success_count += 1
    
    print(f"\n✅ Resolved conflicts in {success_count}/{len(conflict_files)} files")
    
    # Verify no conflicts remain
    remaining_conflicts = find_files_with_conflicts()
    if remaining_conflicts:
        print(f"⚠️  {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
        return False
    else:
        print("🎉 All merge conflicts resolved!")
        return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)