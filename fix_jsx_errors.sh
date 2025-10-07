#!/bin/bash

# Script to fix JSX syntax errors
echo "Starting JSX error fixes..."

# List of files with known issues
problem_files=(
    "/workspace/app/components/NewestContent2025Banner.tsx"
    "/workspace/app/components/September30NewContent2025Banner.tsx"
    "/workspace/app/components/UltimateBusinessIntelligence2025Banner.tsx"
    "/workspace/app/components/UltimateBusinessIntelligenceShowcase2025.tsx"
    "/workspace/app/contact/page.tsx"
    "/workspace/app/enterprise/page.tsx"
    "/workspace/app/guides/ai-2026-implementation-roadmap/page.tsx"
    "/workspace/app/guides/ai-2027-implementation-roadmap/page.tsx"
    "/workspace/app/guides/autonomous-business-processes-implementation-guide-2026/page.tsx"
    "/workspace/app/not-found.tsx"
    "/workspace/app/page-minimal.tsx"
    "/workspace/app/page-optimized.tsx"
    "/workspace/app/services-advertising/page.tsx"
)

for file in "${problem_files[@]}"; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Create backup
        cp "$file" "$file.jsx-backup"
        
        # Fix common JSX issues
        # 1. Remove extra closing tags like /span>/span>/span>
        sed -i 's|/span>/span>/span>||g' "$file"
        sed -i 's|/span>/span>||g' "$file"
        
        # 2. Fix unterminated strings
        sed -i 's|type="text$|type="text"|g' "$file"
        sed -i 's|type="email$|type="email"|g' "$file"
        sed -i 's|className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500$|className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"|g' "$file"
        
        # 3. Fix malformed JSX structure
        sed -i 's|></div>|>|g' "$file"
        sed -i 's|></div>|>|g' "$file"
        
        # 4. Remove stray quotes
        sed -i 's|"></div>"||g' "$file"
        
        echo "Fixed: $file"
    fi
done

echo "JSX error fixes completed."
