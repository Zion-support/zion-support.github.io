#!/bin/bash
# Fix import.meta.env issues by replacing with process.env

find /workspace/src -type f \( -name "*.ts" -o -name "*.tsx" \) -exec sed -i 's/import\.meta\.env/process.env/g' {} \;

echo "Fixed import.meta.env references"
