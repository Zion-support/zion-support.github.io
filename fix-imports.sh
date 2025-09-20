#!/bin/bash

# Fix common import syntax errors
find /workspace/src -name "*.tsx" -o -name "*.ts" | while read file; do
  # Fix double commas in imports
  sed -i 's/import { \([^}]*\),, \([^}]*\) }/import { \1, \2 }/g' "$file"
  sed -i 's/import { \([^}]*\),, }/import { \1 }/g' "$file"
  sed -i 's/import { , \([^}]*\) }/import { \1 }/g' "$file"
  sed -i 's/import { \([^}]*\), , }/import { \1 }/g' "$file"
  
  # Fix trailing commas in imports
  sed -i 's/import { \([^}]*\), }/import { \1 }/g' "$file"
  
  # Fix semicolons instead of commas
  sed -i 's/import { \([^}]*\); \([^}]*\) }/import { \1, \2 }/g' "$file"
  
  # Fix multiple spaces
  sed -i 's/import { \([^}]*\)  \([^}]*\) }/import { \1, \2 }/g' "$file"
done

echo "Import syntax fixes applied"