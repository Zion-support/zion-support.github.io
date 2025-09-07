#!/bin/bash

    # Create a temporary file
    temp_file=$(mktemp)
    # Process the file to resolve conflicts
    awk '
    /^
    in_other { next }
    { print }
    ' "$file" > "$temp_file"

    echo "Fixed: $file"
done


    fi
done

echo "Merge conflicts fixed!"





echo "Merge conflicts fixed!"


