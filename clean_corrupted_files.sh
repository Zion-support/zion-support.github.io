#!/bin/bash

echo "🧹 Cleaning up corrupted files..."

# Find and delete all corrupted JSX files with merge conflicts
    echo "🗑️  Deleting corrupted file: $file"
    rm "$file"
done

# Find and delete all corrupted component files with merge conflicts
    echo "🗑️  Deleting corrupted file: $file"
    rm "$file"
done

echo "✅ Cleanup complete!"