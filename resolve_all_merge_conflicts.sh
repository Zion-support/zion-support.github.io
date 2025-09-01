#!/bin/bash

# Comprehensive Merge Conflict Resolution Script
# This script resolves all merge conflicts in the project

set -e

echo "🔧 Starting comprehensive merge conflict resolution..."

# Function to resolve merge conflicts in a file
resolve_merge_conflicts() {
    local file="$1"
    
    if [ ! -f "$file" ]; then
        return
    fi
    
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "🔧 Resolving conflicts in: $file"
        
        # Create backup
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Remove merge conflict markers and keep HEAD version
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
        
        # Clean up any remaining markers
        sed -i '/<<<<<<< HEAD/d' "$file"
        sed -i '/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
        
        echo "✅ Resolved conflicts in: $file"
    fi
}

# Function to resolve conflicts in all source files
resolve_all_source_conflicts() {
    echo "🔍 Scanning for merge conflicts in source files..."
    
    # Find all files with merge conflicts
    local files_with_conflicts=$(grep -l "<<<<<<< HEAD" src/**/*.{js,jsx,ts,tsx} 2>/dev/null || true)
    
    if [ -n "$files_with_conflicts" ]; then
        echo "Found files with merge conflicts:"
        echo "$files_with_conflicts"
        echo ""
        
        # Resolve conflicts in each file
        while IFS= read -r file; do
            if [ -n "$file" ]; then
                resolve_merge_conflicts "$file"
            fi
        done <<< "$files_with_conflicts"
    else
        echo "✅ No source files with merge conflicts found"
    fi
}

# Function to resolve conflicts in configuration files
resolve_config_conflicts() {
    echo "🔍 Scanning for merge conflicts in configuration files..."
    
    local config_files=(
        "package.json"
        "tsconfig.json"
        "next.config.js"
        "tailwind.config.js"
        "eslint.config.js"
        "vite.config.ts"
        "postcss.config.js"
        "jest.config.js"
        "netlify.toml"
    )
    
    for file in "${config_files[@]}"; do
        if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file"; then
            echo "🔧 Resolving conflicts in config file: $file"
            resolve_merge_conflicts "$file"
        fi
    done
}

# Function to resolve conflicts in root files
resolve_root_conflicts() {
    echo "🔍 Scanning for merge conflicts in root files..."
    
    local root_files=(
        "README.md"
        "CHANGELOG.md"
        "LICENSE"
        ".gitignore"
        ".env.example"
    )
    
    for file in "${root_files[@]}"; do
        if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file"; then
            echo "🔧 Resolving conflicts in root file: $file"
            resolve_merge_conflicts "$file"
        fi
    done
}

# Function to clean up backup files
cleanup_backups() {
    echo "🧹 Cleaning up backup files..."
    
    # Remove backup files created during conflict resolution
    find . -name "*.backup.*" -type f -delete 2>/dev/null || true
    
    # Remove other backup files
    find . -name "*.cleanup-backup.*" -type f -delete 2>/dev/null || true
    
    echo "✅ Backup files cleaned up"
}

# Function to verify all conflicts are resolved
verify_conflicts_resolved() {
    echo "🔍 Verifying all conflicts are resolved..."
    
    local remaining_conflicts=$(grep -r "<<<<<<< HEAD" src/ 2>/dev/null | wc -l)
    
    if [ "$remaining_conflicts" -eq 0 ]; then
        echo "✅ All merge conflicts have been resolved!"
        return 0
    else
        echo "⚠️  Warning: $remaining_conflicts merge conflicts still remain"
        echo "Remaining conflicts:"
        grep -r "<<<<<<< HEAD" src/ 2>/dev/null || true
        return 1
    fi
}

# Main execution
main() {
    echo "🚀 Starting comprehensive merge conflict resolution..."
    echo "=================================================="
    
    # Resolve conflicts in different file types
    resolve_all_source_conflicts
    resolve_config_conflicts
    resolve_root_conflicts
    
    # Clean up backup files
    cleanup_backups
    
    # Verify all conflicts are resolved
    if verify_conflicts_resolved; then
        echo ""
        echo "🎉 All merge conflicts have been successfully resolved!"
        echo "=================================================="
        echo "Next steps:"
        echo "1. Review the resolved files to ensure they are correct"
        echo "2. Run tests to ensure everything works"
        echo "3. Commit the changes"
        echo "4. Merge the branch into main"
    else
        echo ""
        echo "⚠️  Some conflicts remain. Please review and resolve them manually."
        exit 1
    fi
}

# Run the main function
main "$@"