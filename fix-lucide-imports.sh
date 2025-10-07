#!/bin/bash

# Function to add lucide-react imports to a file
add_lucide_imports() {
    local file="$1"
    local temp_file=$(mktemp)
    
    # Check if file already has lucide-react import
    if grep -q "from 'lucide-react'" "$file"; then
        echo "Skipping $file - already has lucide-react import"
        return
    fi
    
    # Find all lucide icons used in the file
    local icons=$(grep -oE '\b(Award|DollarSign|TrendingUp|Clock|Users|ArrowRight|Brain|Target|Zap|Calendar|User|CheckCircle|ArrowLeft|Share2|Bookmark|BookOpen|Rocket|Satellite|Globe|Tag|BarChart3)\b' "$file" | sort -u | tr '\n' ', ' | sed 's/,$//')
    
    if [ -n "$icons" ]; then
        echo "Adding imports to $file: $icons"
        
        # Add import after the first import line
        awk -v icons="$icons" '
        /^import/ && !added {
            print $0
            print "import { " icons " } from \"lucide-react\";"
            added = 1
            next
        }
        { print }
        ' "$file" > "$temp_file"
        
        mv "$temp_file" "$file"
    fi
}

# Find and fix all TypeScript files in app directory
find app -name "*.tsx" -type f | while read -r file; do
    add_lucide_imports "$file"
done

echo "Done fixing lucide-react imports"
