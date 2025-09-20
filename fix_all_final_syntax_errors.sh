#!/bin/bash

echo "Fixing all final syntax errors..."

# Fix Blog.tsx - replace semicolons with commas in remaining objects
sed -i 's/Machine Learning in Production: Best Practices';/Machine Learning in Production: Best Practices',/g' src/pages/Blog.tsx
sed -i 's/Essential practices for deploying and maintaining machine learning models in production environments.';/Essential practices for deploying and maintaining machine learning models in production environments.',/g' src/pages/Blog.tsx
sed -i 's/2025-01-03';/2025-01-03',/g' src/pages/Blog.tsx
sed -i 's/9 min read';/9 min read',/g' src/pages/Blog.tsx

# Fix DeveloperPortal.tsx - fix JSX structure
sed -i 's/return (/  return (/' src/pages/DeveloperPortal.tsx
sed -i 's/<div className="min-h-screen bg-zion-blue">/    <div className="min-h-screen bg-zion-blue">/' src/pages/DeveloperPortal.tsx
sed -i 's/<div className="container mx-auto px-4 py-8">/      <div className="container mx-auto px-4 py-8">/' src/pages/DeveloperPortal.tsx

# Fix Home.tsx - fix JSX structure
sed -i 's/return (/  return (/' src/pages/Home.tsx
sed -i 's/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">/    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">/' src/pages/Home.tsx
sed -i 's/<div className="relative overflow-hidden">/      <div className="relative overflow-hidden">/' src/pages/Home.tsx
sed -i 's/<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">/        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">/' src/pages/Home.tsx

# Fix NotFound.tsx - fix JSX structure
sed -i 's/return (/  return (/' src/pages/NotFound.tsx
sed -i 's/<div className="min-h-screen bg-gray-50 flex items-center justify-center">/    <div className="min-h-screen bg-gray-50 flex items-center justify-center">/' src/pages/NotFound.tsx
sed -i 's/<div className="max-w-md w-full text-center">/      <div className="max-w-md w-full text-center">/' src/pages/NotFound.tsx

# Fix Signup.tsx - fix import statements
sed -i 's/import { useState,, useEffect,, ,  } from '\''react'\'';/import { useState, useEffect } from '\''react'\'';/g' src/pages/Signup.tsx
sed -i 's/import { useRouter,  } from '\''next\/router'\''/import { useRouter } from '\''next\/router'\''/g' src/pages/Signup.tsx
sed -i 's/import { useFormik,, ,  } from '\''formik'\'';/import { useFormik } from '\''formik'\'';/g' src/pages/Signup.tsx

echo "All final syntax error fixes completed!"