#!/bin/bash

# Script to fix syntax errors in TypeScript/TSX files
echo "Fixing syntax errors in TypeScript/TSX files..."

# Find all .tsx and .ts files with syntax errors (excluding .backup files)
files_with_errors=$(find /workspace/src -name "*.tsx" -o -name "*.ts" | grep -v ".backup")

for file in $files_with_errors; do
    echo "Checking: $file"
    
    # Fix common import syntax errors
    sed -i 's/import, React, from '\''rea, c, t'\'';/import React from '\''react'\'';/g' "$file"
    sed -i 's/import, React, { useSta, t, e, useEffe, c, t } fr, o, m '\''rea, c, t'\'';/import React, { useState, useEffect } from '\''react'\'';/g' "$file"
    sed -i 's/import, React, { useEffe, c, t } fr, o, m '\''rea, c, t'\'';/import React, { useEffect } from '\''react'\'';/g' "$file"
    sed -i 's/import, React, { useSta, t, e } fr, o, m '\''rea, c, t'\'';/import React, { useState } from '\''react'\'';/g' "$file"
    sed -i 's/import, React, { useRef } fr, o, m '\''rea, c, t'\'';/import React, { useRef } from '\''react'\'';/g' "$file"
    sed -i 's/import, React, { useMemo } fr, o, m '\''rea, c, t'\'';/import React, { useMemo } from '\''react'\'';/g' "$file"
    sed -i 's/import, React, { useCallback } fr, o, m '\''rea, c, t'\'';/import React, { useCallback } from '\''react'\'';/g' "$file"
    
    # Fix other common syntax errors
    sed -i 's/interface, /interface /g' "$file"
    sed -i 's/const, /const /g' "$file"
    sed -i 's/let, /let /g' "$file"
    sed -i 's/var, /var /g' "$file"
    sed -i 's/function, /function /g' "$file"
    sed -i 's/export, /export /g' "$file"
    sed -i 's/import, /import /g' "$file"
    sed -i 's/from, /from /g' "$file"
    sed -i 's/class, /class /g' "$file"
    sed -i 's/type, /type /g' "$file"
    
    # Fix className syntax errors
    sed -i 's/classNam, e=/className=/g' "$file"
    sed -i 's/classNa, m, e=/className=/g' "$file"
    
    # Fix other common patterns
    sed -i 's/useSta, t, e/useState/g' "$file"
    sed -i 's/useEffe, c, t/useEffect/g' "$file"
    sed -i 's/useRef/useRef/g' "$file"
    sed -i 's/useMemo/useMemo/g' "$file"
    sed -i 's/useCallback/useCallback/g' "$file"
    
    # Fix React.FC syntax
    sed -i 's/Rea, c, t\.FC/React.FC/g' "$file"
    sed -i 's/React\.FC/React.FC/g' "$file"
    sed -i '/^/d' "$file"
    sed -i '/^/d' "$file"
    sed -i '/^    
