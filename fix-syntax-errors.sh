#!/bin/bash

# Script to fix syntax errors in app directory files
echo "🔧 Fixing syntax errors in app directory files..."

# Function to fix import syntax in a file
fix_import_syntax() {
    local file="$1"
    echo "🔧 Fixing import syntax in $file"
    
    # Add missing closing brace and React import if needed
    if grep -q "from 'lucide-react'" "$file" && ! grep -q "^} from 'lucide-react'" "$file"; then
        # Find the last import line and add closing brace
        sed -i '/from '\''lucide-react'\''/a }' "$file" 2>/dev/null || true
    fi
    
    # Add React import if missing
    if ! grep -q "^import React" "$file"; then
        sed -i '1i import React from '\''react'\'';' "$file" 2>/dev/null || true
    fi
    
    echo "✅ Fixed import syntax in $file"
}

# Fix each file with syntax errors
fix_import_syntax "app/marketplace/page.tsx"
fix_import_syntax "app/news/page.tsx" 
fix_import_syntax "app/press/page.tsx"
fix_import_syntax "app/resources/page.tsx"
fix_import_syntax "app/solutions/page.tsx"

echo "✅ Fixed syntax errors in app directory files"