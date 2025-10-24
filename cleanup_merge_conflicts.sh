#!/bin/bash

# Function to clean merge conflicts in a file
clean_file() {
    local file="$1"
    echo "Cleaning merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "${file}.backup"
    
    # Remove merge conflict markers and keep the first version
    sed -i '/^<<<<<<< /,/^=======/!d; /^=======/d; /^>>>>>>> /d' "$file"
    
    # If the file is now empty or too small, restore from backup and try different approach
    if [ ! -s "$file" ] || [ $(wc -l < "$file") -lt 5 ]; then
        echo "File too small after cleaning, trying alternative approach for: $file"
        cp "${file}.backup" "$file"
        
        # Try to keep content between <<<<<<< and ======= (first version)
        sed -i '/^<<<<<<< /,/^=======/!d; /^=======/d; /^>>>>>>> /d' "$file"
        
        # If still empty, restore and keep everything before first conflict
        if [ ! -s "$file" ] || [ $(wc -l < "$file") -lt 5 ]; then
            echo "Using content before first conflict for: $file"
            cp "${file}.backup" "$file"
            head -n $(grep -n "^<<<<<<< " "$file" | head -1 | cut -d: -f1 | awk '{print $1-1}') "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
        fi
    fi
    
    # Remove backup
    rm "${file}.backup"
}

# Find all files with merge conflicts and clean them
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "^<<<<<<< \|^=======\|^>>>>>>> " "$file" 2>/dev/null; then
        clean_file "$file"
    fi
done

echo "Merge conflict cleanup completed!"
