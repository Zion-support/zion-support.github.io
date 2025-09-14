#!/bin/bash

echo "🔧 Renaming JavaScript files with JSX syntax to .jsx extension..."

# Find all .js files that contain JSX syntax and rename them
find src -name "*.js" -exec grep -l "JSX\|<div\|<span\|<button\|<Route\|<Link\|<React\|<Suspense\|<Fragment" {} \; | while read file; do
    if [[ "$file" != *.jsx ]]; then
        new_name="${file%.js}.jsx"
        echo "Renaming: $file -> $new_name"
        mv "$file" "$new_name"
    fi
done

echo "✅ JSX file renaming completed!"