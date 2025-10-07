#!/usr/bin/env python3
import os
import re
import glob

def fix_lucide_usage_final(file_path):
    """Fix lucide-react usage to remove Icon suffix"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has lucide-react imports
        if 'from \'lucide-react\'' not in content and 'from "lucide-react"' not in content:
            return False
        
        # Common icon mappings to remove Icon suffix
        icon_mappings = {
            'ArrowRightIcon': 'ArrowRight',
            'ArrowLeftIcon': 'ArrowLeft',
            'DollarSignIcon': 'DollarSign',
            'UsersIcon': 'Users',
            'UserIcon': 'User',
            'AwardIcon': 'Award',
            'ClockIcon': 'Clock',
            'CalendarIcon': 'Calendar',
            'BrainIcon': 'Brain',
            'TargetIcon': 'Target',
            'TrendingUpIcon': 'TrendingUp',
            'CheckCircleIcon': 'CheckCircle',
            'RocketIcon': 'Rocket',
            'SatelliteIcon': 'Satellite',
            'GlobeIcon': 'Globe',
            'TagIcon': 'Tag',
            'BarChart3Icon': 'BarChart3',
            'Share2Icon': 'Share2',
            'BookmarkIcon': 'Bookmark',
            'ZapIcon': 'Zap',
            'ShieldIcon': 'Shield',
            'BotIcon': 'Bot',
            'AtomIcon': 'Atom',
            'SparklesIcon': 'Sparkles',
            'StarIcon': 'Star'
        }
        
        modified = False
        
        # Replace icon usage in JSX
        for icon_with_suffix, icon_without_suffix in icon_mappings.items():
            # Replace <IconNameIcon with <IconName
            pattern = f'<{icon_with_suffix}(?![a-zA-Z])'
            replacement = f'<{icon_without_suffix}'
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
        if fix_lucide_usage_final(file_path):
            fixed_count += 1
            print(f"  ✓ Fixed lucide-react usage")
        else:
            print(f"  - No changes needed or error occurred")
    
    print(f"\nFixed lucide-react usage in {fixed_count} files")

if __name__ == "__main__":
    main()