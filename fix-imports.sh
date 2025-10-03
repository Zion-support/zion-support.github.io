#!/bin/bash

# Fix next/link imports in all active files (excluding backup directories)
find . -name "*.tsx" -o -name "*.ts" | grep -v corrupted | grep -v backup | while read file; do
  if grep -q "import.*next/link" "$file"; then
    echo "Fixing imports in: $file"
    sed -i "s/import Link from 'next\/link';/import { Link } from 'react-router-dom';/g" "$file"
    sed -i "s/import { Link } from 'next\/link';/import { Link } from 'react-router-dom';/g" "$file"
  fi
done

echo "Import fixes completed!"