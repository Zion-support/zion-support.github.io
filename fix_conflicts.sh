#!/bin/bash

# Function to remove all merge conflict markers from a file
fix_file() {
    local file="$1"
    if [ -f "$file" ]; then
        # Remove all merge conflict markers
        sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' "$file"
        echo "Fixed: $file"
    fi
}

# Fix all problematic files
fix_file "/workspace/api/onsite-request.js"
fix_file "/workspace/api/shipping-rates.js"
fix_file "/workspace/api/subscribe.js"
fix_file "/workspace/app/about/page.tsx"
fix_file "/workspace/app/contact/page.tsx"
fix_file "/workspace/app/enterprise/page.tsx"
fix_file "/workspace/App.tsx"
fix_file "/workspace/app/components/ErrorBoundary.tsx"

echo "All files processed"
