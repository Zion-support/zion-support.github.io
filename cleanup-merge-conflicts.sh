#!/bin/bash

echo "🧹 Starting comprehensive merge conflict cleanup..."

# Function to clean merge conflicts in a file
clean_file() {
    local file="$1"
    if [ -f "$file" ]; then
        # Remove merge conflict markers and their content
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        # Remove any remaining individual markers
        sed -i '/^<<<<<<< HEAD/d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        # Remove empty lines that might be left
        sed -i '/^[[:space:]]*$/d' "$file"
        
        echo "✅ Cleaned: $file"
    fi
}

# Function to clean merge conflicts in a directory
clean_directory() {
    local dir="$1"
    local pattern="$2"
    
    if [ -d "$dir" ]; then
        find "$dir" -type f -name "$pattern" -exec bash -c 'clean_file "$0"' {} \;
    fi
}

# Clean main source files
echo "📁 Cleaning source files..."
clean_directory "src" "*.tsx"
clean_directory "src" "*.ts"
clean_directory "src" "*.jsx"
clean_directory "src" "*.js"

# Clean configuration files
echo "⚙️ Cleaning configuration files..."
clean_file "next.config.js"
clean_file "vite.config.ts"
clean_file "tailwind.config.ts"
clean_file "tsconfig.json"

# Clean server files
echo "🖥️ Cleaning server files..."
clean_directory "server" "*.ts"
clean_directory "server" "*.js"

# Clean utility files
echo "🔧 Cleaning utility files..."
clean_directory "utils" "*.ts"
clean_directory "utils" "*.js"

# Clean type files
echo "📝 Cleaning type files..."
clean_directory "types" "*.ts"
clean_directory "types" "*.d.ts"

# Clean test files
echo "🧪 Cleaning test files..."
clean_directory "tests" "*.tsx"
clean_directory "tests" "*.ts"

# Clean component files
echo "🧩 Cleaning component files..."
clean_directory "components" "*.tsx"
clean_directory "components" "*.tsx"

# Clean page files
echo "📄 Cleaning page files..."
clean_directory "pages" "*.tsx"
clean_directory "pages" "*.ts"

# Clean route files
echo "🛣️ Cleaning route files..."
clean_directory "routes" "*.tsx"
clean_directory "routes" "*.ts"

# Clean store files
echo "🏪 Cleaning store files..."
clean_directory "store" "*.ts"
clean_directory "store" "*.js"

# Clean service files
echo "🔌 Cleaning service files..."
clean_directory "services" "*.ts"
clean_directory "services" "*.js"

# Clean supabase function files
echo "🗄️ Cleaning Supabase function files..."
clean_directory "supabase/functions" "*.ts"

# Remove backup files that might have conflicts
echo "🗑️ Removing backup files with conflicts..."
find . -name "*.backup*" -type f -delete
find . -name "*.js.jsx" -type f -delete

# Check for remaining conflicts
echo "🔍 Checking for remaining conflicts..."
remaining_conflicts=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.md" --include="*.json" 2>/dev/null | wc -l)

if [ "$remaining_conflicts" -eq 0 ]; then
    echo "🎉 All merge conflicts have been resolved!"
else
    echo "⚠️ Found $remaining_conflicts remaining conflicts:"
    grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.md" --include="*.json" 2>/dev/null | head -20
fi

echo "✨ Merge conflict cleanup completed!"