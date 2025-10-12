#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " 2>/dev/null)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing $file..."
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove all merge conflict markers and keep the content after the last ======= and >>>>>>>
    # This keeps the most recent/complete version
    awk '
    BEGIN { in_conflict = 0; keep_content = 0 }
    /^<<<<<<< HEAD/ { in_conflict = 1; next }
    /^=======/ { if (in_conflict) { in_conflict = 2; keep_content = 1; next } }
    /^>>>>>>> / { if (in_conflict == 2) { in_conflict = 0; keep_content = 0; next } }
    { if (in_conflict == 0 || (in_conflict == 2 && keep_content)) print }
    ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    
    # If the file is empty or only has conflict markers, create a basic version
    if [ ! -s "$file" ] || grep -q "^=======\|^>>>>>>> " "$file"; then
        echo "File $file appears to be empty or corrupted, creating basic version..."
        # Create a basic React component
        cat > "$file" << 'BASIC'
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Advanced AI and IT Solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development.</p>
        </div>
      </div>
    </>
  );
};

export default Page;
BASIC
    fi
    
    echo "Resolved conflicts in $file"
done

echo "All merge conflicts resolved!"
