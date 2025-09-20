#!/bin/bash

echo "Fixing all remaining syntax errors..."

# Fix WhitelabelContext.js - replace semicolons with commas in object properties
sed -i 's/companyName: '\''Zion Tech Group'\'';/companyName: '\''Zion Tech Group'\'',/g' src/context/WhitelabelContext.js
sed -i 's/logo: '\''\/logo\.svg'\'';/logo: '\''\/logo\.svg'\'',/g' src/context/WhitelabelContext.js
sed -i 's/primaryColor: '\''#1e40af'\'';/primaryColor: '\''#1e40af'\'',/g' src/context/WhitelabelContext.js
sed -i 's/secondaryColor: '\''#7c3aed'\'';/secondaryColor: '\''#7c3aed'\'',/g' src/context/WhitelabelContext.js

# Fix Blog.tsx - replace semicolons with commas in remaining objects
sed -i 's/AI Ethics: Building Responsible Technology';/AI Ethics: Building Responsible Technology',/g' src/pages/Blog.tsx
sed -i 's/The importance of ethical AI development and implementation in modern enterprises.';/The importance of ethical AI development and implementation in modern enterprises.',/g' src/pages/Blog.tsx
sed -i 's/2025-01-08';/2025-01-08',/g' src/pages/Blog.tsx
sed -i 's/8 min read';/8 min read',/g' src/pages/Blog.tsx

# Fix DeveloperPortal.tsx - fix JSX structure
sed -i 's/return (/  return (/' src/pages/DeveloperPortal.tsx
sed -i 's/<div className="min-h-screen bg-zion-blue">/    <div className="min-h-screen bg-zion-blue">/' src/pages/DeveloperPortal.tsx
sed -i 's/<div className="container mx-auto px-4 py-8">/      <div className="container mx-auto px-4 py-8">/' src/pages/DeveloperPortal.tsx

# Fix EquipmentPage.tsx - fix JSX structure
sed -i 's/return (/  return (/' src/pages/EquipmentPage.tsx
sed -i 's/<div className="container py-8">/    <div className="container py-8">/' src/pages/EquipmentPage.tsx
sed -i 's/<motion.div initial={{ opacity: 0 y: 20 }} animate={{ opacity: 1 y: 0 }} className="text-center mb-8">/      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">/' src/pages/EquipmentPage.tsx

# Fix Home.tsx - fix JSX structure
sed -i 's/return (/  return (/' src/pages/Home.tsx
sed -i 's/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">/    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">/' src/pages/Home.tsx
sed -i 's/<div className="relative overflow-hidden">/      <div className="relative overflow-hidden">/' src/pages/Home.tsx
sed -i 's/<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">/        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">/' src/pages/Home.tsx

echo "All remaining syntax error fixes completed!"