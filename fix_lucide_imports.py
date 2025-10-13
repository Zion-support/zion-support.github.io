#!/usr/bin/env python3
"""
Script to fix missing lucide-react imports in TSX files.
"""

import os
import re
from pathlib import Path

def fix_lucide_imports_in_file(file_path):
    """Fix missing lucide-react imports in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file uses lucide-react icons but doesn't import them
        lucide_icons = [
            'ArrowRight', 'Brain', 'Shield', 'Zap', 'Globe', 'Star', 'Users', 'Award',
            'BarChart3', 'Cloud', 'Sparkles', 'Mail', 'Smartphone', 'CheckCircle',
            'TrendingUp', 'Target', 'DollarSign', 'Rocket', 'Satellite', 'Orbit',
            'Mic', 'Play', 'Settings', 'Cpu', 'Settings2', 'Wifi', 'Database',
            'Server', 'Monitor', 'Smartphone', 'Tablet', 'Laptop', 'Desktop',
            'Smartphone', 'Tablet', 'Laptop', 'Desktop', 'Monitor', 'Server',
            'Database', 'Wifi', 'Bluetooth', 'Radio', 'Signal', 'Activity',
            'PieChart', 'LineChart', 'BarChart', 'TrendingUp', 'TrendingDown',
            'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ChevronRight', 'ChevronLeft',
            'ChevronUp', 'ChevronDown', 'Plus', 'Minus', 'X', 'Check', 'AlertCircle',
            'AlertTriangle', 'Info', 'HelpCircle', 'ExternalLink', 'Download',
            'Upload', 'Edit', 'Trash', 'Copy', 'Save', 'Search', 'Filter',
            'SortAsc', 'SortDesc', 'Calendar', 'Clock', 'Timer', 'Stopwatch',
            'PlayCircle', 'PauseCircle', 'StopCircle', 'SkipForward', 'SkipBack',
            'Volume2', 'VolumeX', 'Volume1', 'Mic', 'MicOff', 'Video', 'VideoOff',
            'Camera', 'Image', 'File', 'Folder', 'FolderOpen', 'Archive',
            'Bookmark', 'Heart', 'ThumbsUp', 'ThumbsDown', 'MessageCircle',
            'MessageSquare', 'Mail', 'Phone', 'MapPin', 'Navigation', 'Compass',
            'Globe', 'Map', 'Layers', 'Grid', 'List', 'Menu', 'MoreHorizontal',
            'MoreVertical', 'Settings', 'Cog', 'Wrench', 'Tool', 'Hammer',
            'Wrench', 'Screwdriver', 'Key', 'Lock', 'Unlock', 'Eye', 'EyeOff',
            'Shield', 'ShieldCheck', 'ShieldAlert', 'ShieldX', 'Security',
            'Fingerprint', 'User', 'UserCheck', 'UserX', 'Users', 'UserPlus',
            'UserMinus', 'UserCog', 'UserEdit', 'UserSearch', 'UserShield',
            'UserStar', 'UserHeart', 'UserSmile', 'UserFrown', 'UserMeh',
            'UserCheck', 'UserX', 'UserPlus', 'UserMinus', 'UserCog', 'UserEdit',
            'UserSearch', 'UserShield', 'UserStar', 'UserHeart', 'UserSmile',
            'UserFrown', 'UserMeh', 'Home', 'Building', 'Building2', 'Store',
            'ShoppingCart', 'ShoppingBag', 'CreditCard', 'DollarSign', 'Euro',
            'Pound', 'Yen', 'Bitcoin', 'Coins', 'Wallet', 'PiggyBank', 'Banknote',
            'Receipt', 'FileText', 'File', 'FileImage', 'FileVideo', 'FileAudio',
            'FileCode', 'FileSpreadsheet', 'FilePdf', 'FileWord', 'FileExcel',
            'FilePowerpoint', 'FileArchive', 'FileCheck', 'FileX', 'FilePlus',
            'FileMinus', 'FileEdit', 'FileSearch', 'FileDownload', 'FileUpload',
            'Folder', 'FolderOpen', 'FolderPlus', 'FolderMinus', 'FolderEdit',
            'FolderSearch', 'FolderDownload', 'FolderUpload', 'FolderCheck',
            'FolderX', 'Archive', 'ArchiveRestore', 'ArchiveX', 'ArchiveCheck',
            'Package', 'Package2', 'PackageCheck', 'PackageX', 'PackagePlus',
            'PackageMinus', 'PackageEdit', 'PackageSearch', 'PackageDownload',
            'PackageUpload', 'Box', 'Boxes', 'BoxSelect', 'BoxCheck', 'BoxX',
            'BoxPlus', 'BoxMinus', 'BoxEdit', 'BoxSearch', 'BoxDownload',
            'BoxUpload', 'Truck', 'Truck2', 'TruckCheck', 'TruckX', 'TruckPlus',
            'TruckMinus', 'TruckEdit', 'TruckSearch', 'TruckDownload', 'TruckUpload',
            'Car', 'Car2', 'CarCheck', 'CarX', 'CarPlus', 'CarMinus', 'CarEdit',
            'CarSearch', 'CarDownload', 'CarUpload', 'Bike', 'Bike2', 'BikeCheck',
            'BikeX', 'BikePlus', 'BikeMinus', 'BikeEdit', 'BikeSearch', 'BikeDownload',
            'BikeUpload', 'Plane', 'Plane2', 'PlaneCheck', 'PlaneX', 'PlanePlus',
            'PlaneMinus', 'PlaneEdit', 'PlaneSearch', 'PlaneDownload', 'PlaneUpload',
            'Ship', 'Ship2', 'ShipCheck', 'ShipX', 'ShipPlus', 'ShipMinus',
            'ShipEdit', 'ShipSearch', 'ShipDownload', 'ShipUpload', 'Train',
            'Train2', 'TrainCheck', 'TrainX', 'TrainPlus', 'TrainMinus', 'TrainEdit',
            'TrainSearch', 'TrainDownload', 'TrainUpload', 'Bus', 'Bus2', 'BusCheck',
            'BusX', 'BusPlus', 'BusMinus', 'BusEdit', 'BusSearch', 'BusDownload',
            'BusUpload', 'Subway', 'Subway2', 'SubwayCheck', 'SubwayX', 'SubwayPlus',
            'SubwayMinus', 'SubwayEdit', 'SubwaySearch', 'SubwayDownload', 'SubwayUpload'
        ]
        
        used_icons = []
        for icon in lucide_icons:
            if f'<{icon}' in content or f'{icon} className' in content:
                used_icons.append(icon)
        
        if used_icons and 'lucide-react' not in content:
            print(f"Fixing lucide-react imports in: {file_path}")
            
            # Find the first import line
            lines = content.split('\n')
            import_line_index = -1
            
            for i, line in enumerate(lines):
                if line.strip().startswith('import '):
                    import_line_index = i
                elif line.strip() and not line.strip().startswith('//') and not line.strip().startswith('/*'):
                    break
            
            # Add the lucide-react import
            icons_str = ', '.join(used_icons)
            import_line = f"import {{ {icons_str} }} from 'lucide-react';"
            
            if import_line_index >= 0:
                lines.insert(import_line_index + 1, import_line)
            else:
                lines.insert(0, import_line)
            
            # Write the fixed content back
            fixed_content = '\n'.join(lines)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix lucide-react imports."""
    workspace_root = Path('/workspace')
    app_dir = workspace_root / 'app'
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all TSX files
    tsx_files = list(app_dir.rglob('*.tsx'))
    
    print(f"Found {len(tsx_files)} TSX files to check")
    
    fixed_count = 0
    for file_path in tsx_files:
        if fix_lucide_imports_in_file(file_path):
            fixed_count += 1
    
    print(f"Fixed lucide-react imports in {fixed_count} files")

if __name__ == "__main__":
    main()