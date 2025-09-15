#!/bin/bash

# Script to fix duplicate imports in all TypeScript/JavaScript files

echo "Fixing duplicate imports in all files..."

# Find all .tsx and .ts files
find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules | while read file; do
    if [[ -f "$file" ]]; then
        # Create a temporary file
        temp_file=$(mktemp)
        
        # Process the file to remove duplicate imports
        awk '
        BEGIN { 
            in_import = 0
            import_line = ""
            seen_imports = ""
        }
        /^import.*from/ {
            if (in_import) {
                # Process previous import line
                gsub(/^import\s*\{/, "", import_line)
                gsub(/\}\s*from.*$/, "", import_line)
                gsub(/\s+/, "", import_line)
                split(import_line, imports, ",")
                for (i in imports) {
                    if (imports[i] != "" && seen_imports !~ imports[i]) {
                        seen_imports = seen_imports "," imports[i]
                    }
                }
            }
            in_import = 1
            import_line = $0
        }
        /^[^[:space:]]/ && !/^import/ {
            if (in_import) {
                # Process the last import line
                gsub(/^import\s*\{/, "", import_line)
                gsub(/\}\s*from.*$/, "", import_line)
                gsub(/\s+/, "", import_line)
                split(import_line, imports, ",")
                for (i in imports) {
                    if (imports[i] != "" && seen_imports !~ imports[i]) {
                        seen_imports = seen_imports "," imports[i]
                    }
                }
                in_import = 0
            }
            print $0
        }
        /^[[:space:]]/ {
            print $0
        }
        ' "$file" > "$temp_file"
        
        # Replace the original file if changes were made
        if ! cmp -s "$file" "$temp_file"; then
            echo "Fixed duplicates in: $file"
            mv "$temp_file" "$file"
        else
            rm "$temp_file"
        fi
    fi
done

echo "Done fixing duplicate imports."