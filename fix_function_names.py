#!/usr/bin/env python3
import os
import re

def fix_function_names(file_path):
    """Fix function names that start with numbers"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix function names that start with numbers
        content = re.sub(r'function 5g(\w+)Page\(\)', r'function FiveG\1Page()', content)
        content = re.sub(r'function (\d+)(\w+)Page\(\)', r'function \2Page()', content)
        
        # Fix specific patterns
        content = re.sub(r'function 5gedgecomputingPage\(\)', 'function FiveGEdgeComputingPage()', content)
        content = re.sub(r'function 5gimplementationPage\(\)', 'function FiveGImplementationPage()', content)
        content = re.sub(r'function 5giotsolutionsPage\(\)', 'function FiveGIotSolutionsPage()', content)
        content = re.sub(r'function 5gmobileapplicationsPage\(\)', 'function FiveGMobileApplicationsPage()', content)
        content = re.sub(r'function 5gnetworkinfrastructurePage\(\)', 'function FiveGNetworkInfrastructurePage()', content)
        content = re.sub(r'function 5gprivatenetworksPage\(\)', 'function FiveGPrivateNetworksPage()', content)
        content = re.sub(r'function 5gsmartcitysolutionsPage\(\)', 'function FiveGSmartCitySolutionsPage()', content)
        content = re.sub(r'function 5gsolutionsPage\(\)', 'function FiveGSolutionsPage()', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed function names in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Fix 5G pages
    files_to_fix = [
        'app/5g-edge-computing/page.tsx',
        'app/5g-implementation/page.tsx',
        'app/5g-iot-solutions/page.tsx',
        'app/5g-mobile-applications/page.tsx',
        'app/5g-network-infrastructure/page.tsx',
        'app/5g-private-networks/page.tsx',
        'app/5g-smart-city-solutions/page.tsx',
        'app/5g-solutions/page.tsx'
    ]
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_function_names(file_path):
                fixed_count += 1
    
    print(f"Fixed function names in {fixed_count} files")

if __name__ == "__main__":
    main()