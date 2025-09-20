#!/bin/bash

echo "Fixing all syntax errors..."

# Fix semicolons in JSX closing tags
find src -name "*.tsx" -type f -exec sed -i 's/\(<\/[^>]*\)>;/\1>/g' {} \;

# Fix semicolons in JSX opening tags  
find src -name "*.tsx" -type f -exec sed -i 's/\(<[^>]*\)>;/\1>/g' {} \;

# Fix trailing commas before semicolons in interfaces
find src -name "*.tsx" -type f -exec sed -i 's/\([^;]\),;/\1;/g' {} \;
find src -name "*.ts" -type f -exec sed -i 's/\([^;]\),;/\1;/g' {} \;

# Fix trailing commas before semicolons in arrays
find src -name "*.tsx" -type f -exec sed -i 's/\([^;]\),;/\1;/g' {} \;
find src -name "*.ts" -type f -exec sed -i 's/\([^;]\),;/\1;/g' {} \;

# Fix trailing commas before semicolons in function parameters
find src -name "*.tsx" -type f -exec sed -i 's/\([^;]\),;/\1;/g' {} \;
find src -name "*.ts" -type f -exec sed -i 's/\([^;]\),;/\1;/g' {} \;

# Fix React Fragment syntax
find src -name "*.tsx" -type f -exec sed -i 's/<>;/<>/g' {} \;
find src -name "*.tsx" -type f -exec sed -i 's/<\/>;/<\/>/g' {} \;

# Fix function call syntax
find src -name "*.tsx" -type f -exec sed -i 's/\([^;]\),;/\1;/g' {} \;
find src -name "*.ts" -type f -exec sed -i 's/\([^;]\),;/\1;/g' {} \;

# Fix object syntax
find src -name "*.tsx" -type f -exec sed -i 's/\([^;]\),;/\1;/g' {} \;
find src -name "*.ts" -type f -exec sed -i 's/\([^;]\),;/\1;/g' {} \;

# Fix array elements
find src -name "*.tsx" -type f -exec sed -i 's/\([^;]\),;/\1;/g' {} \;
find src -name "*.ts" -type f -exec sed -i 's/\([^;]\),;/\1;/g' {} \;

echo "All syntax fixes completed!"