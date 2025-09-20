#!/bin/bash

# Script to clean up remaining merge conflict markers
echo "Cleaning up remaining merge conflict markers..."

# Function to clean merge conflicts from a file
clean_file() {
    local file="$1"
    echo "Cleaning merge conflicts from: $file"
    
    if [[ -f "$file" ]]; then
        # Remove merge conflict markers and keep the HEAD version (before =======)
        sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file" 2>/dev/null || true
        sed -i '/^<<<<<<< HEAD/d' "$file" 2>/dev/null || true
        sed -i '/^=======/d' "$file" 2>/dev/null || true
        sed -i '/^>>>>>>> /d' "$file" 2>/dev/null || true
        
        # Fix common syntax issues
        sed -i 's/;$/;/g' "$file" 2>/dev/null || true
        sed -i 's/,$/;/g' "$file" 2>/dev/null || true
        sed -i 's/impor; t;/import /g' "$file" 2>/dev/null || true
        sed -i 's/useStat, e,/useState,/g' "$file" 2>/dev/null || true
        sed -i 's/Lin, k,/Link,/g' "$file" 2>/dev/null || true
        sed -i 's/Men, u,/Menu,/g' "$file" 2>/dev/null || true
        sed -i 's/Searc, h,/Search,/g' "$file" 2>/dev/null || true
        sed -i 's/Brai, n,/Brain,/g' "$file" 2>/dev/null || true
        sed -i 's/User, s,/Users,/g' "$file" 2>/dev/null || true
        sed -i 's/BarChart, 3,/BarChart3,/g' "$file" 2>/dev/null || true
        sed -i 's/Cod, e,/Code,/g' "$file" 2>/dev/null || true
        sed -i 's/Palett, e,/Palette,/g' "$file" 2>/dev/null || true
        sed -i 's/Targe, t,/Target,/g' "$file" 2>/dev/null || true
        sed -i 's/Shiel, d,/Shield,/g' "$file" 2>/dev/null || true
        sed -i 's/Hear, t,/Heart,/g' "$file" 2>/dev/null || true
        sed -i 's/Databas, e,/Database,/g' "$file" 2>/dev/null || true
        sed -i 's/Buildin, g,/Building,/g' "$file" 2>/dev/null || true
        sed -i 's/Cp, u,/Cpu,/g' "$file" 2>/dev/null || true
        sed -i 's/Networ, k,/Network,/g' "$file" 2>/dev/null || true
        sed -i 's/Clou, d,/Cloud,/g' "$file" 2>/dev/null || true
        sed -i 's/Cloc, k,/Clock,/g' "$file" 2>/dev/null || true
        sed -i 's/Rocke, t,/Rocket,/g' "$file" 2>/dev/null || true
        sed -i 's/Glob, e,/Globe,/g' "$file" 2>/dev/null || true
        sed -i 's/Loc, k,/Lock,/g' "$file" 2>/dev/null || true
        sed -i 's/ArrowRigh, t,/ArrowRight,/g' "$file" 2>/dev/null || true
        sed -i 's/ChevronDown/ChevronDown/g' "$file" 2>/dev/null || true
        
        # Fix import statements
        sed -i 's/import { Navigate,useLocation  } from "react-router-dom",/import { Navigate, useLocation } from "react-router-dom";/g' "$file" 2>/dev/null || true
        sed -i 's/import { Navigate,useLocation } from &apos;react-router-dom&apos,&apos,&apos;/import { Navigate, useLocation } from "react-router-dom";/g' "$file" 2>/dev/null || true
        sed -i 's/import { Navigate,useLocation } from "react-router-dom",", ";"/import { Navigate, useLocation } from "react-router-dom";/g' "$file" 2>/dev/null || true
    fi
}

# List of files with merge conflicts
conflicted_files=(
    "src/components/Header.tsx"
    "src/components/ProtectedRoute.tsx"
    "src/components/SEO.tsx"
    "src/components/jobs/applications.tsx"
    "src/components/ui/button.tsx"
)

# Clean each file
for file in "${conflicted_files[@]}"; do
    clean_file "$file"
done

# Add all cleaned files
git add .

echo "Merge conflicts cleaned up!"