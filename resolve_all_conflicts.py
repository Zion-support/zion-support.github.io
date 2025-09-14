#!/usr/bin/env python3

import os
import re
import glob

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflict markers
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Resolving conflicts in: {file_path}")
        
        # For TypeScript/JavaScript files, use a more sophisticated approach
        if file_path.endswith(('.tsx', '.ts', '.jsx', '.js')):
            # Remove conflict markers and keep both versions where possible
            lines = content.split('\n')
            resolved_lines = []
            in_conflict = False
            head_content = []
            branch_content = []
            
            for line in lines:
                if line.strip() == '<<<<<<< HEAD':
                    in_conflict = True
                    head_content = []
                elif line.strip() == '=======':
                    # Switch to collecting branch content
                    pass
                elif line.strip().startswith('>>>>>>> '):
                    # End of conflict, resolve it
                    in_conflict = False
                    
                    # For imports, combine both
                    if any('import' in line for line in head_content + branch_content):
                        # Collect all unique imports
                        all_imports = set()
                        for l in head_content + branch_content:
                            if 'import' in l and 'from' in l:
                                all_imports.add(l)
                        resolved_lines.extend(sorted(all_imports))
                    else:
                        # For other content, prefer the newer version (branch)
                        resolved_lines.extend(branch_content)
                    
                    head_content = []
                    branch_content = []
                elif in_conflict:
                    if line.strip() == '=======':
                        # Switch to branch content
                        pass
                    else:
                        branch_content.append(line)
                else:
                    resolved_lines.append(line)
            
            resolved_content = '\n'.join(resolved_lines)
        else:
            # For other files, use a simpler approach
            # Remove conflict markers and keep the branch version
            resolved_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]*\n?', '', content, flags=re.DOTALL)
        
        # Write the resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"✅ Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error resolving conflicts in {file_path}: {e}")
        return False

def main():
    print("🚀 Starting comprehensive conflict resolution...")
    print("=" * 60)
    
    # Find all files with conflict markers
    conflict_files = []
    
    # Search for files with conflict markers
    for root, dirs, files in os.walk('.'):
        # Skip certain directories
        if any(skip in root for skip in ['.git', 'node_modules', 'out', 'build', 'dist', 'backup']):
            continue
            
        for file in files:
            if file.endswith(('.tsx', '.ts', '.jsx', '.js', '.json', '.md', '.sh', '.py')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            conflict_files.append(file_path)
                except:
                    continue
    
    print(f"Found {len(conflict_files)} files with conflicts")
    
    # Resolve conflicts in each file
    resolved_count = 0
    for file_path in conflict_files:
        if resolve_conflicts_in_file(file_path):
            resolved_count += 1
    
    print(f"\n🎯 Resolution Summary:")
    print(f"Total files with conflicts: {len(conflict_files)}")
    print(f"Successfully resolved: {resolved_count}")
    print(f"Failed to resolve: {len(conflict_files) - resolved_count}")
    
    # Check if there are still conflicts
    remaining_conflicts = []
    for file_path in conflict_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content:
                    remaining_conflicts.append(file_path)
        except:
            continue
    
    if remaining_conflicts:
        print(f"\n⚠️  Still have conflicts in {len(remaining_conflicts)} files:")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  - {file_path}")
        if len(remaining_conflicts) > 10:
            print(f"  ... and {len(remaining_conflicts) - 10} more")
    else:
        print("\n✅ All conflicts resolved successfully!")
    
    print("\n🎉 Conflict resolution process completed!")

if __name__ == "__main__":
    main()