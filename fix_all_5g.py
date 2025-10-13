#!/usr/bin/env python3
"""
Script to fix all 5G component names.
"""

import os

def fix_file(file_path, old_name, new_name):
    """Fix a single file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace(f'const {old_name}:', f'const {new_name}:')
    content = content.replace(f'export default {old_name};', f'export default {new_name};')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    """Fix all 5G files."""
    fixes = [
        ('app/5g-iot-solutions/page.tsx', '5gIotSolutions', 'FiveGIotSolutions'),
        ('app/5g-network-infrastructure/page.tsx', '5gNetworkInfrastructure', 'FiveGNetworkInfrastructure'),
        ('app/5g-private-networks/page.tsx', '5gPrivateNetworks', 'FiveGPrivateNetworks'),
        ('app/5g-smart-city-solutions/page.tsx', '5gSmartCitySolutions', 'FiveGSmartCitySolutions'),
    ]
    
    for file_path, old_name, new_name in fixes:
        if os.path.exists(file_path):
            fix_file(file_path, old_name, new_name)
            print(f"Fixed: {file_path}")

if __name__ == "__main__":
    main()