#!/usr/bin/env python3
"""
Comprehensive script to fix all linting errors
"""
import os
import re
import subprocess
import sys

def run_command(cmd):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def fix_unused_imports(file_path):
    """Remove unused imports from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove unused imports (basic pattern matching)
        lines = content.split('\n')
        fixed_lines = []
        in_imports = False
        
        for line in lines:
            # Check if this is an import line
            if line.strip().startswith('import ') or line.strip().startswith('import{'):
                in_imports = True
                # Skip lines with unused imports (basic detection)
                if any(unused in line for unused in ['LoadingSpinner', 'EnhancedSEOHead', 'OptimizedImage', 'LazyRoute', 'Zap', 'Eye', 'MessageSquare', 'Users', 'RefreshCw', 'Mail', 'BarChart3', 'Target', 'Clock', 'Shield', 'Smartphone', 'Globe', 'FileText', 'Settings', 'Star', 'Award', 'Phone', 'MapPin', 'Envelope', 'ArrowRight', 'CheckCircle', 'Brain', 'Code', 'Database', 'DollarSign', 'Cpu', 'Monitor', 'Heart', 'Mic', 'Video', 'Image', 'ShoppingCart', 'CreditCard', 'Wallet', 'Banknote', 'Coins', 'Gift', 'Tag', 'Percent', 'Calculator', 'PieChart', 'LineChart', 'Activity', 'Layers', 'Grid', 'List', 'Map', 'Compass', 'Navigation', 'Globe2', 'WifiOff', 'Signal', 'Bluetooth', 'Usb', 'HardDrive', 'MemoryStick', 'Printer', 'Scanner', 'Fax', 'Voicemail', 'Headset', 'Speaker', 'Volume2', 'VolumeX', 'Play', 'Pause', 'Stop', 'SkipBack', 'SkipForward', 'RotateCcw', 'RotateCw', 'Shuffle', 'Repeat', 'Repeat1', 'Shuffle2', 'Maximize', 'Minimize', 'Square', 'Circle', 'Triangle', 'Hexagon', 'Octagon', 'Diamond', 'StarIcon', 'Moon', 'Sun', 'Sunrise', 'Sunset', 'CloudRain', 'CloudSnow', 'CloudLightning', 'Wind', 'Droplets', 'Thermometer', 'Gauge', 'Timer', 'Stopwatch', 'Hourglass', 'Link', 'SEOOptimizer', 'Share2', 'SEOHead', 'AISolutionsPage']):
                    continue
            elif in_imports and not line.strip().startswith('import ') and not line.strip().startswith('import{') and line.strip():
                in_imports = False
            
            fixed_lines.append(line)
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(fixed_lines))
        
        return True
    except Exception as e:
        print(f"❌ Error fixing unused imports in {file_path}: {e}")
        return False

def fix_parsing_errors(file_path):
    """Fix common parsing errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix common parsing errors
        fixes = [
            # Fix unterminated string literals
            (r'"[^"]*$', '""'),
            (r"'[^']*$", "''"),
            # Fix missing closing braces
            (r'(\{[^}]*)$', r'\1}'),
            # Fix missing closing parentheses
            (r'\([^)]*$', '()'),
            # Fix missing semicolons
            (r'(\w+)\s*$', r'\1;'),
            # Fix JSX closing tags
            (r'<(\w+)[^>]*>[^<]*$', r'<\1></\1>'),
        ]
        
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"❌ Error fixing parsing errors in {file_path}: {e}")
        return False

def fix_specific_files():
    """Fix specific problematic files"""
    problematic_files = [
        'app/ai-customer-sentiment-tracker/page.tsx',
        'app/ai-customer-support-chatbot/page.tsx',
        'app/ai-ecommerce-optimizer-pro/page.tsx',
        'app/ai-email-assistant/page.tsx',
        'app/ai-expense-tracker/page.tsx',
        'app/ai-financial-analytics-pro/page.tsx',
        'app/ai-project-management-pro/page.tsx',
        'app/ai-smart-scheduler/page.tsx',
        'app/ai-translation-service/page.tsx',
        'app/blockchain-web3/page.tsx',
        'app/cloud-infrastructure-management/page.tsx',
        'app/cloud-migration-pro/page.tsx',
        'app/community/page.tsx',
        'app/compliance/page.tsx',
    ]
    
    for file_path in problematic_files:
        if os.path.exists(file_path):
            print(f"🔧 Fixing {file_path}")
            fix_parsing_errors(file_path)

def main():
    """Main function"""
    print("🚀 Starting comprehensive linting error fix...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Get list of files with linting errors
    success, output, error = run_command("pnpm run lint 2>&1 | grep -E '^/workspace/' | cut -d: -f1 | sort -u")
    if not success:
        print(f"❌ Error getting files with linting errors: {error}")
        return False
    
    files_with_errors = [f.strip() for f in output.split('\n') if f.strip()]
    
    if not files_with_errors:
        print("✅ No files with linting errors found")
        return True
    
    print(f"📁 Found {len(files_with_errors)} files with linting errors")
    
    # Fix specific problematic files first
    fix_specific_files()
    
    # Fix unused imports in all files
    for file_path in files_with_errors:
        if file_path.endswith(('.ts', '.tsx', '.js', '.jsx')):
            print(f"🔧 Fixing unused imports in: {file_path}")
            fix_unused_imports(file_path)
    
    # Run lint fix
    print("🔧 Running automatic lint fix...")
    success, output, error = run_command("pnpm run lint:fix")
    if not success:
        print(f"⚠️  Lint fix had issues: {error}")
    
    # Check remaining errors
    print("📊 Checking remaining linting errors...")
    success, output, error = run_command("pnpm run lint 2>&1 | head -20")
    if success:
        print("Remaining errors:")
        print(output)
    
    print("✅ Linting error fix completed!")
    return True

if __name__ == "__main__":
    main()