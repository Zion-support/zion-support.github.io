#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find app/ -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "
done

echo "Merge conflicts cleaned successfully"
