
#!/bin/bash

echo "🔍 Build Analysis Report"
echo "========================"

# Check build size
if [ -d "dist" ]; then
    echo "📦 Build Size:"
    du -sh dist/
    echo ""
    
    echo "📁 Largest files:"
    find dist -type f -exec du -h {} + | sort -rh | head -10
    echo ""
    
    echo "📄 File count:"
    find dist -type f | wc -l
    echo ""
else
    echo "❌ No dist folder found. Run 'npm run build:netlify' first."
fi

# Check for common issues
echo "🔍 Checking for common issues:"
echo ""

# Check for large files
if [ -d "dist" ]; then
    large_files=$(find dist -type f -size +1M)
    if [ -n "$large_files" ]; then
        echo "⚠️  Large files found:"
        echo "$large_files"
    else
        echo "✅ No large files found"
    fi
fi

echo ""
echo "✅ Build analysis complete"
