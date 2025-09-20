#!/bin/bash

echo "Fixing all remaining syntax errors..."

# Fix Blog.tsx - replace semicolons with commas in remaining objects
sed -i 's/Quantum Computing Breakthrough: What It Means for Business';/Quantum Computing Breakthrough: What It Means for Business',/g' src/pages/Blog.tsx
sed -i 's/Understanding the latest quantum computing advances and their practical business applications.';/Understanding the latest quantum computing advances and their practical business applications.',/g' src/pages/Blog.tsx
sed -i 's/2025-01-12';/2025-01-12',/g' src/pages/Blog.tsx
sed -i 's/7 min read';/7 min read',/g' src/pages/Blog.tsx

# Fix DeveloperPortal.tsx - fix JSX structure
sed -i 's/return (/  return (/' src/pages/DeveloperPortal.tsx
sed -i 's/<div className="min-h-screen bg-zion-blue">/    <div className="min-h-screen bg-zion-blue">/' src/pages/DeveloperPortal.tsx
sed -i 's/<div className="container mx-auto px-4 py-8">/      <div className="container mx-auto px-4 py-8">/' src/pages/DeveloperPortal.tsx

# Fix EquipmentPage.tsx - fix import statements
sed -i 's/import { Badge,, ,  } from '\''@\/components\/ui\/badge'\'';/import { Badge } from '\''@\/components\/ui\/badge'\'';/g' src/pages/EquipmentPage.tsx
sed -i 's/import { Card,, CardContent,, CardHeader,, CardTitle,, ,  } from '\''@\/components\/ui\/card'\'';/import { Card, CardContent, CardHeader, CardTitle } from '\''@\/components\/ui\/card'\'';/g' src/pages/EquipmentPage.tsx
sed -i 's/import { EquipmentErrorBoundary,, ,  } from '\''@\/components\/EquipmentErrorBoundary'\'';/import { EquipmentErrorBoundary } from '\''@\/components\/EquipmentErrorBoundary'\'';/g' src/pages/EquipmentPage.tsx

# Fix Home.tsx - fix JSX structure
sed -i 's/return (/  return (/' src/pages/Home.tsx
sed -i 's/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">/    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">/' src/pages/Home.tsx

# Fix JobDetails.tsx - fix import statements
sed -i 's/import React { useState useEffect } from '\''react'\'';/import React, { useState, useEffect } from '\''react'\'';/g' src/pages/JobDetails.tsx
sed -i 's/import { ApplyToJobModal,, ,  } from '\''@\/components\/messaging\/job-application'\'';/import { ApplyToJobModal } from '\''@\/components\/messaging\/job-application'\'';/g' src/pages/JobDetails.tsx
sed -i 's/import { SEO,, ,  } from '\''@\/components\/SEO'\'';/import { SEO } from '\''@\/components\/SEO'\'';/g' src/pages/JobDetails.tsx

echo "All remaining syntax error fixes completed!"