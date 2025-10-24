#!/bin/bash

echo "Starting comprehensive syntax fixes..."

# Fix specific files with known issues
fix_file() {
    local file="$1"
    echo "Fixing $file"
    
    # Fix import statements
    sed -i 's/import, React/import React/g' "$file"
    sed -i 's/import { Link from "next\/link" } from;/import Link from "next\/link";/g' "$file"
    sed -i 's/import, React\s\+} from "react"/import React from "react"/g' "$file"
    sed -i 's/import { { { /import /g' "$file"
    sed -i 's/import { { /import { /g' "$file"
    
    # Fix JSX syntax issues
    sed -i 's/<div className="[^"]*" \/>/<div className="[^"]*">/g' "$file"
    sed -i 's/<h1 className="[^"]*" \/>/<h1 className="[^"]*">/g' "$file"
    sed -i 's/<p className="[^"]*" \/>/<p className="[^"]*">/g' "$file"
    sed -i 's/<Link[^>]*className="[^"]*" \/>/<Link[^>]*className="[^"]*">/g' "$file"
    
    # Fix function declarations
    sed -i 's/const Breadcrumb: "React\.FC = () => {/const Breadcrumb: React.FC = () => {/g' "$file"
    sed -i 's/const Breadcrumb: "React\.FC = () => {/const Breadcrumb: React.FC = () => {/g' "$file"
    
    # Fix export statements
    sed -i 's/export default Breadcrumb}\s*}}/export default Breadcrumb;/g' "$file"
    
    # Fix unterminated strings
    sed -i 's/className="[^"]*$/className="[^"]*"/g' "$file"
    
    # Fix JSX fragments
    sed -i 's/return \(<[^>]*\/> <[^>]*\/>,<[^>]*\/>/return (/g' "$file"
    
    # Fix missing closing tags
    sed -i 's/<\/h1>\s*<\/h1>/<\/h1>/g' "$file"
    sed -i 's/<\/p>\s*<\/p>/<\/p>/g' "$file"
    sed -i 's/<\/Link>\s*<\/Link>/<\/Link>/g' "$file"
    
    # Fix specific syntax patterns
    sed -i 's/const Breadcrumb: "React\.FC = () => {/const Breadcrumb: React.FC = () => {/g' "$file"
    sed -i 's/import { Link from "next\/link" } from;/import Link from "next\/link";/g' "$file"
    sed -i 's/import, React\s\+} from "react"/import React from "react"/g' "$file"
}

# Fix specific problematic files
fix_file "./app/components/Breadcrumb.tsx"
fix_file "./app/components/AnimatedText.tsx"
fix_file "./app/components/ContactForm.tsx"
fix_file "./app/components/ContentCarousel.tsx"
fix_file "./app/components/AdvancedErrorBoundary.tsx"
fix_file "./app/components/AdvancedPerformanceOptimizer.tsx"
fix_file "./app/components/Analytics.tsx"
fix_file "./app/components/AnalyticsProvider.tsx"
fix_file "./app/components/AnimatedCounter.tsx"

echo "Comprehensive fixes completed!"
