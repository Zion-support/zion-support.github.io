#!/bin/bash

echo "Fixing all remaining issues..."

# Fix merge conflicts in all files
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | while read file; do
    if grep -q "<<<<<<< HEAD\|=======\|>>>>>>> " "$file" 2>/dev/null; then
        echo "Fixing merge conflicts in: $file"
        # Remove merge conflict markers and keep the HEAD version
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
    fi
done

# Fix specific syntax issues
echo "Fixing specific syntax issues..."

# Fix AI marketing automation page
if [ -f "app/services/ai-marketing-automation/page.tsx" ]; then
    echo "Fixing AI marketing automation page..."
    # Remove function definitions that are outside of the component
    sed -i '/^function FeatureCard/,/^}/d' "app/services/ai-marketing-automation/page.tsx"
fi

# Fix AI project management suite page
if [ -f "app/services/ai-project-management-suite/page.tsx" ]; then
    echo "Fixing AI project management suite page..."
    # Remove duplicate metadata
    sed -i '/^export const metadata = {$/,/^};$/d' "app/services/ai-project-management-suite/page.tsx"
    # Add proper metadata at the top
    sed -i '3i\export const metadata = {\n  title: "AI Project Management Suite | Zion Tech Group",\n  description: "Professional AI project management suite services for your business needs.",\n  keywords: "ai-project-management-suite, services, business, technology"\n};\n' "app/services/ai-project-management-suite/page.tsx"
fi

# Fix data analytics page
if [ -f "app/services/data-analytics/page.tsx" ]; then
    echo "Fixing data analytics page..."
    # Remove merge conflict content
    sed -i '/=======/,/>>>>>>> /d' "app/services/data-analytics/page.tsx"
fi

# Fix IT services page
if [ -f "app/services/it-services/page.tsx" ]; then
    echo "Fixing IT services page..."
    # Remove merge conflict content
    sed -i '/=======/,/>>>>>>> /d' "app/services/it-services/page.tsx"
fi

echo "All issues fixed!"