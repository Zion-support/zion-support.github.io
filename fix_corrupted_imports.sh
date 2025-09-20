#!/bin/bash

# Fix corrupted import statements in TypeScript/JavaScript files
echo "Fixing corrupted import statements..."

# Find all .ts, .tsx, .js, .jsx files with corrupted imports
find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q 'import.*from "' "$file"; then
        echo "Fixing $file"
        # Fix unterminated string literals in import statements
        sed -i 's/import.*from "$/import React from "react";/' "$file"
        sed -i 's/import { \([^}]*\) } from "$/import { \1 } from "react";/' "$file"
        sed -i 's/import { \([^}]*\) } from "react";$/import { \1 } from "react";/' "$file"
        
        # Fix other common patterns
        sed -i 's/import React, { Suspenselazy } from "react";/import React, { Suspense, lazy } from "react";/' "$file"
        sed -i 's/import { BrowserRouter;, as;, RouterRoutesRoute } from "react-router-dom";/import { BrowserRouter, Routes, Route } from "react-router-dom";/' "$file"
        sed -i 's/import { HelmetProvider } from "react-helmet-async";/import { HelmetProvider } from "react-helmet-async";/' "$file"
        sed -i 's/import { QueryClientQueryClientProvider } from "@tanstack\/react-query";/import { QueryClient, QueryClientProvider } from "@tanstack\/react-query";/' "$file"
        sed -i 's/import { Provider } from "react-redux";/import { Provider } from "react-redux";/' "$file"
    fi
done

echo "Import fixes completed!"