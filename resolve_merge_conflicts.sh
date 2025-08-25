#!/bin/bash

echo "🔧 Resolving all remaining merge conflicts..."

# Function to resolve conflicts in a file
resolve_file_conflicts() {
    local file="$1"
    if [ -f "$file" ]; then
        echo "Resolving conflicts in $file..."
        
        # Remove all merge conflict markers and keep HEAD version
        sed -i '/^<<<<<<< HEAD$/,/^=======$/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        # Remove any remaining conflict markers
        sed -i '/^<<<<<<< HEAD$/d' "$file"
        sed -i '/^=======$/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        echo "✅ Resolved conflicts in $file"
    fi
}

# List of files with conflicts to resolve
CONFLICTED_FILES=(
    "src/components/Footer.tsx"
    "src/components/Header.tsx"
    "src/data/comprehensiveServices.ts"
    "src/data/innovativeMicroSaasServices.ts"
    "src/data/specializedITServices.ts"
    "src/pages/Home.tsx"
    "src/pages/QuantumNeuralNetworkPlatform.tsx"
    "src/pages/Services.tsx"
)

# Resolve conflicts in each file
for file in "${CONFLICTED_FILES[@]}"; do
    resolve_file_conflicts "$file"
done

echo "🎉 All merge conflicts resolved!"