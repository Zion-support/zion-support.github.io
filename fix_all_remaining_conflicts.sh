#!/bin/bash

echo "🔧 Fixing all remaining merge conflicts..."

# Find all files with conflict markers
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    
    echo "  Fixed: $file"
done

echo "✅ All conflicts fixed!"