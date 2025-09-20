#!/bin/bash

echo "🧹 Comprehensive cleanup of corrupted files..."

# Find all JSX files with merge conflicts and delete them
    echo "🗑️  Deleting corrupted TSX: $file"
    rm "$file"
done

# Find all JS files with merge conflicts and delete them
    echo "🗑️  Deleting corrupted TS: $file"
    rm "$file"
done

echo "✅ Comprehensive cleanup complete!"