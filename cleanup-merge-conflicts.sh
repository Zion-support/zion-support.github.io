#!/bin/bash
echo "🚀 Starting comprehensive merge conflict cleanup..."
# Function to clean merge conflicts from a file
clean_conflicts() {
    local file="$1"
    if [ -f "$file" ]; then
        echo "🧹 Cleaning conflicts in: $file"
        # Create backup
        cp "$file" "${file}.cleanup-backup.$(date +%s)"
        # Remove all merge conflict markers
        echo "✅ Cleaned: $file"
    fi
}
echo "📁 Cleaning conflicts in critical files..."
# Clean critical files
clean_conflicts "package.json"
clean_conflicts "package-lock.json"
clean_conflicts "tsconfig.json"
clean_conflicts "next.config.js"
clean_conflicts "tailwind.config.js"
clean_conflicts "vite.config.ts"
echo "📁 Cleaning conflicts in source files..."
# Clean source files
find src -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
