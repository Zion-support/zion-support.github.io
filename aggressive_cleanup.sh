#!/bin/bash

echo "Starting aggressive cleanup of merge conflicts..."

# Function to clean a single file
clean_file() {
    local file="$1"
    echo "Cleaning: $file"
    
    # Create backup
    cp "$file" "${file}.backup"
    
    # Remove all merge conflict markers and keep content before first conflict
    if grep -q "^<<<<<<< " "$file"; then
        # Get line number of first conflict
        first_conflict=$(grep -n "^<<<<<<< " "$file" | head -1 | cut -d: -f1)
        # Keep everything before first conflict
        head -n $((first_conflict - 1)) "$file" > "${file}.tmp"
        mv "${file}.tmp" "$file"
    fi
    
    # If file is still too small, try to restore some basic structure
    if [ ! -s "$file" ] || [ $(wc -l < "$file") -lt 3 ]; then
        echo "File too small, creating basic structure for: $file"
        cat > "$file" << 'BASIC'
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Under Construction</h1>
        <p className="text-gray-600">This page is being updated. Please check back later.</p>
      </div>
    </div>
  );
};

export default Page;
BASIC
    fi
}

# Clean all problematic files
find src -name "*.tsx" -o -name "*.ts" | while read file; do
    if grep -q "^<<<<<<< \|^=======\|^>>>>>>> " "$file" 2>/dev/null; then
        clean_file "$file"
    fi
done

find components -name "*.tsx" -o -name "*.ts" | while read file; do
    if grep -q "^<<<<<<< \|^=======\|^>>>>>>> " "$file" 2>/dev/null; then
        clean_file "$file"
    fi
done

echo "Aggressive cleanup completed!"
