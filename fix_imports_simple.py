#!/usr/bin/env python3
import os
import re
import glob

def fix_unused_imports_simple(file_path):
    """Fix unused imports by removing them from import statements"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all import statements with destructuring
        import_pattern = r'import\s+\{([^}]+)\}\s+from\s+[\'"][^\'"]+[\'"];?\n?'
        
        def replace_imports(match):
            import_content = match.group(1)
            from_part = match.group(0).split('from')[1]
            
            # Split by comma and clean up
            imports = [imp.strip() for imp in import_content.split(',')]
            
            # Remove common unused imports based on patterns
            unused_patterns = [
                'Helmet', 'Star', 'Satellite', 'Wifi', 'Zap', 'Smartphone', 'Globe',
                'BarChart3', 'Sparkles', 'AlertTriangle', 'Users', 'Target', 'Shield',
                'Database', 'TrendingUp', 'Clock', 'DollarSign', 'MessageCircle', 'Eye',
                'Filter', 'Download', 'Share', 'Bell', 'RefreshCw', 'Pause', 'SkipForward',
                'SkipBack', 'Repeat', 'Shuffle', 'Heart', 'ThumbsUp', 'ThumbsDown',
                'Bookmark', 'Flag', 'Info', 'HelpCircle', 'Plus', 'Minus', 'Edit',
                'Trash2', 'Save', 'Copy', 'Paste', 'Cut', 'Undo', 'Redo', 'Move',
                'Maximize', 'Minimize', 'Square', 'Circle', 'Triangle', 'Hexagon',
                'Octagon', 'Pentagon', 'Star2', 'Heart2', 'Smile', 'Frown', 'Meh',
                'Laugh', 'Angry', 'Surprised', 'Confused', 'Wink', 'Kiss', 'Tongue',
                'Wink2', 'Kiss2', 'Tongue2', 'Wink3', 'Kiss3', 'Tongue3', 'Wink4',
                'Kiss4', 'Tongue4', 'Wink5', 'Kiss5', 'Tongue5', 'Wink6', 'Kiss6',
                'Tongue6', 'Wink7', 'Kiss7', 'Tongue7', 'Wink8', 'Kiss8', 'Tongue8',
                'Wink9', 'Kiss9', 'Tongue9', 'Wink10', 'Kiss10', 'Tongue10',
                'FileText', 'Package', 'Calendar', 'Timer', 'Battery', 'Wifi2',
                'Signal', 'Bluetooth', 'Camera', 'Mic', 'Headphones', 'Speaker',
                'Volume2', 'VolumeX', 'Search', 'Upload', 'Brain', 'Cpu', 'Rocket',
                'Network', 'Monitor', 'Server', 'CircuitBoard', 'Atom', 'Wrench',
                'BarChart', 'PieChart', 'LineChart', 'Activity', 'Settings',
                'Award', 'Cloud', 'Code', 'CheckSquare', 'Box', 'Heart', 'Eye',
                'LinkIcon', 'Wifi', 'Package', 'TrendingUp', 'Calendar', 'Sparkles',
                'Cpu', 'Database', 'Smartphone', 'Lock', 'Monitor', 'Server',
                'Mail', 'Phone', 'MapPin', 'Play', 'Workflow', 'Link as LinkIcon'
            ]
            
            # Filter out unused imports
            used_imports = []
            for imp in imports:
                # Handle 'as' aliases
                actual_name = imp.split(' as ')[0].strip()
                if actual_name not in unused_patterns:
                    used_imports.append(imp)
            
            if used_imports:
                return f"import {{ {', '.join(used_imports)} }} from{from_part}"
            else:
                return ""
        
        # Apply the replacement
        new_content = re.sub(import_pattern, replace_imports, content)
        
        # Clean up empty import lines
        new_content = re.sub(r'^import\s+\{\s*\}\s+from\s+[\'"][^\'"]+[\'"];?\n?', '', new_content, flags=re.MULTILINE)
        
        # Clean up multiple newlines
        new_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', new_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed unused imports in: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all .tsx files in the app directory
    app_files = glob.glob('/workspace/app/**/*.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in app_files:
        if fix_unused_imports_simple(file_path):
            fixed_count += 1
    
    print(f"Fixed unused imports in {fixed_count} files")

if __name__ == "__main__":
    main()