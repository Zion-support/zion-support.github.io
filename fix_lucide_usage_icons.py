#!/usr/bin/env python3
import os
import re
import glob

def fix_lucide_usage_icons(file_path):
    """Fix lucide-react usage to use Icon suffix versions"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has lucide-react imports
        if 'from \'lucide-react\'' not in content and 'from "lucide-react"' not in content:
            return False
        
        # Common icon mappings
        icon_mappings = {
            'ArrowRight': 'ArrowRightIcon',
            'ArrowLeft': 'ArrowLeftIcon',
            'DollarSign': 'DollarSignIcon',
            'Users': 'UsersIcon',
            'User': 'UserIcon',
            'Award': 'AwardIcon',
            'Clock': 'ClockIcon',
            'Calendar': 'CalendarIcon',
            'Brain': 'BrainIcon',
            'Target': 'TargetIcon',
            'TrendingUp': 'TrendingUpIcon',
            'CheckCircle': 'CheckCircleIcon',
            'Rocket': 'RocketIcon',
            'Satellite': 'SatelliteIcon',
            'Globe': 'GlobeIcon',
            'Tag': 'TagIcon',
            'BarChart3': 'BarChart3Icon',
            'Share2': 'Share2Icon',
            'Bookmark': 'BookmarkIcon',
            'Zap': 'ZapIcon',
            'Shield': 'ShieldIcon',
            'Bot': 'BotIcon',
            'Atom': 'AtomIcon',
            'Sparkles': 'SparklesIcon',
            'Star': 'StarIcon',
            'CheckCircle': 'CheckCircleIcon'
        }
        
        modified = False
        
        # Replace icon usage in JSX
        for old_name, new_name in icon_mappings.items():
            # Replace <IconName with <IconNameIcon
            pattern = f'<{old_name}(?![a-zA-Z])'
            replacement = f'<{new_name}'
            new_content = re.sub(pattern, replacement, content)
            if new_content != content:
                content = new_content
                modified = True
        
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TSX files with lucide-react imports
    tsx_files = []
    for root, dirs, files in os.walk('/workspace'):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if 'from \'lucide-react\'' in content or 'from "lucide-react"' in content:
                            tsx_files.append(file_path)
                except:
                    continue
    
    print(f"Found {len(tsx_files)} files with lucide-react imports")
    
    fixed_count = 0
    for file_path in tsx_files:
        print(f"Processing: {file_path}")
        if fix_lucide_usage_icons(file_path):
            fixed_count += 1
            print(f"  ✓ Fixed lucide-react usage")
        else:
            print(f"  - No changes needed or error occurred")
    
    print(f"\nFixed lucide-react usage in {fixed_count} files")

if __name__ == "__main__":
    main()