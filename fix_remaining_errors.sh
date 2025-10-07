#!/bin/bash

# Script to fix remaining syntax errors
echo "Fixing remaining syntax errors..."

# Fix specific patterns that weren't caught by the previous script
find /workspace/src -name "*.tsx" -o -name "*.ts" | grep -v ".backup" | while read file; do
    echo "Processing: $file"
    
    # Fix import statements with commas
    sed -i 's/impo, r, t { moti, o, n } fr, o, m '\''fram, e, r-moti, o, n'\'';/import { motion } from '\''framer-motion'\'';/g' "$file"
    sed -i 's/impo, r, t { Li, n, k } fr, o, m '\''rea, c, t-rout, e, r-d, o, m'\'';/import { Link } from '\''react-router-dom'\'';/g' "$file"
    sed -i 's/impo, r, t { useSta, t, e, useEffe, c, t } fr, o, m '\''rea, c, t'\'';/import { useState, useEffect } from '\''react'\'';/g' "$file"
    sed -i 's/impo, r, t { useEffe, c, t } fr, o, m '\''rea, c, t'\'';/import { useEffect } from '\''react'\'';/g' "$file"
    sed -i 's/impo, r, t { useSta, t, e } fr, o, m '\''rea, c, t'\'';/import { useState } from '\''react'\'';/g' "$file"
    sed -i 's/impo, r, t { useRef } fr, o, m '\''rea, c, t'\'';/import { useRef } from '\''react'\'';/g' "$file"
    sed -i 's/impo, r, t { useMemo } fr, o, m '\''rea, c, t'\'';/import { useMemo } from '\''react'\'';/g' "$file"
    sed -i 's/impo, r, t { useCallback } fr, o, m '\''rea, c, t'\'';/import { useCallback } from '\''react'\'';/g' "$file"
    
    # Fix component names with commas
    sed -i 's/const, /const /g' "$file"
    sed -i 's/January2026RevolutionaryBreakthroughsBanne, r/January2026RevolutionaryBreakthroughsBanner/g' "$file"
    sed -i 's/December2025RevolutionaryBreakthroughContentBanne, r/December2025RevolutionaryBreakthroughContentBanner/g' "$file"
    sed -i 's/September30NewContentMegaBanne, r/September30NewContentMegaBanner/g' "$file"
    sed -i 's/EnhancedPromotionalBanne, r/EnhancedPromotionalBanner/g' "$file"
    sed -i 's/AIInnovationAdvertisingBanne, r/AIInnovationAdvertisingBanner/g' "$file"
    sed -i 's/AITrendsInsightsBanner202, 6/AITrendsInsightsBanner2026/g' "$file"
    
    # Fix variable names with commas
    sed -i 's/breakthrough, s/breakthroughs/g' "$file"
    sed -i 's/const, /const /g' "$file"
    sed -i 's/let, /let /g' "$file"
    sed -i 's/var, /var /g' "$file"
    
    # Fix function parameters with commas
    sed -i 's/const, /const /g' "$file"
    sed -i 's/function, /function /g' "$file"
    
    # Fix export statements
    sed -i 's/export, default, /export default /g' "$file"
    sed -i 's/export default, /export default /g' "$file"
    
    # Fix JSX attributes
    sed -i 's/classNam, e=/className=/g' "$file"
    sed -i 's/classNa, m, e=/className=/g' "$file"
    sed -i 's/onCl, i, c, k=/onClick=/g' "$file"
    sed -i 's/onChang, e=/onChange=/g' "$file"
    sed -i 's/onSubmi, t=/onSubmit=/g' "$file"
    
    # Fix common patterns
    sed -i 's/useSta, t, e/useState/g' "$file"
    sed -i 's/useEffe, c, t/useEffect/g' "$file"
    sed -i 's/useRef/useRef/g' "$file"
    sed -i 's/useMemo/useMemo/g' "$file"
    sed -i 's/useCallback/useCallback/g' "$file"
    
    # Fix React.FC
    sed -i 's/Rea, c, t\.FC/React.FC/g' "$file"
    
    # Fix return statements
    sed -i 's/retu, r, n /return /g' "$file"
    sed -i 's/retu, r, n(/return(/g' "$file"
    
    # Fix JSX closing tags
    sed -i 's/<\/d, i, v>/<\/div>/g' "$file"
    sed -i 's/<\/s, p, a, n>/<\/span>/g' "$file"
    sed -i 's/<\/h, 1>/<\/h1>/g' "$file"
    sed -i 's/<\/h, 2>/<\/h2>/g' "$file"
    sed -i 's/<\/h, 3>/<\/h3>/g' "$file"
    sed -i 's/<\/p>/<\/p>/g' "$file"
    sed -i 's/<\/a>/<\/a>/g' "$file"
    sed -i 's/<\/butt, o, n>/<\/button>/g' "$file"
    
    echo "Fixed: $file"
done

echo "Remaining syntax errors fixed!"