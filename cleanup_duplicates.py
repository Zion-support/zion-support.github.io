#!/usr/bin/env python3
"""
Script to identify and clean up duplicate content directories.
"""

import os
import shutil
from pathlib import Path
from collections import defaultdict

def analyze_content_directories():
    """Analyze content directories to identify duplicates and similar content."""
    app_dir = Path("/workspace/app")
    content_dirs = []
    
    # Get all directories in app
    for item in app_dir.iterdir():
        if item.is_dir() and not item.name.startswith('.'):
            content_dirs.append(item.name)
    
    # Group similar directories
    groups = defaultdict(list)
    
    for dir_name in content_dirs:
        # Extract base keywords
        keywords = dir_name.lower().replace('-', ' ').split()
        
        # Group by common patterns
        if 'ai' in keywords and '2025' in keywords:
            groups['ai_2025'].append(dir_name)
        elif 'ai' in keywords and '2026' in keywords:
            groups['ai_2026'].append(dir_name)
        elif 'quantum' in keywords:
            groups['quantum'].append(dir_name)
        elif 'automation' in keywords:
            groups['automation'].append(dir_name)
        elif 'content' in keywords and 'showcase' in keywords:
            groups['content_showcase'].append(dir_name)
        elif 'future' in keywords and 'predictions' in keywords:
            groups['future_predictions'].append(dir_name)
        else:
            groups['other'].append(dir_name)
    
    return groups, content_dirs

def get_directory_info(dir_path):
    """Get information about a directory."""
    if not dir_path.exists():
        return None
    
    files = list(dir_path.rglob('*'))
    file_count = len([f for f in files if f.is_file()])
    total_size = sum(f.stat().st_size for f in files if f.is_file())
    
    return {
        'file_count': file_count,
        'total_size': total_size,
        'last_modified': max((f.stat().st_mtime for f in files if f.is_file()), default=0)
    }

def find_best_directory(group_dirs, app_dir):
    """Find the best directory to keep from a group."""
    if len(group_dirs) <= 1:
        return group_dirs[0] if group_dirs else None
    
    best_dir = None
    best_score = 0
    
    for dir_name in group_dirs:
        dir_path = app_dir / dir_name
        info = get_directory_info(dir_path)
        
        if not info:
            continue
        
        # Score based on file count, size, and recency
        score = (
            info['file_count'] * 10 +
            info['total_size'] / 1024 +  # Size in KB
            info['last_modified'] / 86400  # Days since modification
        )
        
        if score > best_score:
            best_score = score
            best_dir = dir_name
    
    return best_dir

def create_cleanup_report():
    """Create a cleanup report."""
    print("=== CONTENT DIRECTORY CLEANUP ANALYSIS ===\n")
    
    groups, all_dirs = analyze_content_directories()
    app_dir = Path("/workspace/app")
    
    total_dirs = len(all_dirs)
    duplicates_to_remove = []
    keep_dirs = []
    
    print(f"Total directories found: {total_dirs}\n")
    
    for group_name, dirs in groups.items():
        if len(dirs) <= 1:
            keep_dirs.extend(dirs)
            continue
            
        print(f"Group: {group_name} ({len(dirs)} directories)")
        best_dir = find_best_directory(dirs, app_dir)
        
        if best_dir:
            print(f"  Keep: {best_dir}")
            keep_dirs.append(best_dir)
            
            for dir_name in dirs:
                if dir_name != best_dir:
                    duplicates_to_remove.append(dir_name)
                    print(f"  Remove: {dir_name}")
        print()
    
    print(f"Directories to keep: {len(keep_dirs)}")
    print(f"Directories to remove: {len(duplicates_to_remove)}")
    print(f"Space to be freed: {sum(get_directory_info(app_dir / d)['total_size'] for d in duplicates_to_remove if get_directory_info(app_dir / d)) / 1024 / 1024:.2f} MB")
    
    return duplicates_to_remove, keep_dirs

def main():
    """Main function."""
    duplicates, keep = create_cleanup_report()
    
    if duplicates:
        print(f"\nWould remove {len(duplicates)} duplicate directories:")
        for dup in duplicates[:10]:  # Show first 10
            print(f"  - {dup}")
        if len(duplicates) > 10:
            print(f"  ... and {len(duplicates) - 10} more")
        
        print(f"\nTo clean up, run:")
        print(f"python3 cleanup_duplicates.py --execute")
    else:
        print("\nNo duplicates found!")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == "--execute":
        duplicates, keep = create_cleanup_report()
        app_dir = Path("/workspace/app")
        
        for dup in duplicates:
            dup_path = app_dir / dup
            if dup_path.exists():
                print(f"Removing {dup}...")
                shutil.rmtree(dup_path)
        
        print(f"Cleanup complete! Removed {len(duplicates)} directories.")
    else:
        main()