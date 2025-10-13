#!/bin/bash

echo "Fixing broken files..."

# Find all broken TypeScript/JavaScript files
broken_files=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" | xargs grep -l "Expected.*but found end of file\|Unexpected end of file" 2>/dev/null)

if [ -z "$broken_files" ]; then
    echo "No broken files found with syntax errors"
else
    echo "Found broken files:"
    echo "$broken_files"
    
    for file in $broken_files; do
        echo "Checking file: $file"
        
        # Check if file is incomplete (missing closing brackets, etc.)
        if [ -f "$file" ]; then
            # Count opening and closing brackets
            open_braces=$(grep -o '{' "$file" | wc -l)
            close_braces=$(grep -o '}' "$file" | wc -l)
            open_parens=$(grep -o '(' "$file" | wc -l)
            close_parens=$(grep -o ')' "$file" | wc -l)
            open_brackets=$(grep -o '\[' "$file" | wc -l)
            close_brackets=$(grep -o '\]' "$file" | wc -l)
            
            echo "File: $file"
            echo "  Braces: $open_braces open, $close_braces close"
            echo "  Parens: $open_parens open, $close_parens close"
            echo "  Brackets: $open_brackets open, $close_brackets close"
            
            # If there's a mismatch, try to fix it
            if [ $open_braces -gt $close_braces ]; then
                echo "  Missing closing braces, adding them..."
                missing_braces=$((open_braces - close_braces))
                for i in $(seq 1 $missing_braces); do
                    echo "}" >> "$file"
                done
            fi
            
            if [ $open_parens -gt $close_parens ]; then
                echo "  Missing closing parens, adding them..."
                missing_parens=$((open_parens - close_parens))
                for i in $(seq 1 $missing_parens); do
                    echo ")" >> "$file"
                done
            fi
            
            if [ $open_brackets -gt $close_brackets ]; then
                echo "  Missing closing brackets, adding them..."
                missing_brackets=$((open_brackets - close_brackets))
                for i in $(seq 1 $missing_brackets); do
                    echo "]" >> "$file"
                done
            fi
        fi
    done
fi

echo "Broken file fix completed!"