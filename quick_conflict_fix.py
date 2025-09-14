#!/usr/bin/env python3

import os
import re

def fix_conflicts_in_file(file_path):
    """Remove conflict markers from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error fixing {file_path}: {e}")
        return False

def main():
    print("🚀 Quick Conflict Fix")
    print("=" * 30)
    
    # Key files to fix
    key_files = [
        'app/page.tsx',
        'app/layout.tsx',
        'components/UltimateContentDiscoveryWidget2026.tsx',
        'components/ContentShowcase.tsx',
        'components/AI2026QuantumNeuralFusionBanner.tsx',
        'package.json',
        'tsconfig.json',
        'tailwind.config.ts'
    ]
    
    fixed_count = 0
    for file_path in key_files:
        if os.path.exists(file_path):
            if fix_conflicts_in_file(file_path):
                fixed_count += 1
    
    print(f"\n✅ Fixed conflicts in {fixed_count} files")
    print("🎯 Quick conflict fix completed!")

if __name__ == "__main__":
    main()