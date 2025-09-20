#!/bin/bash

echo "Fixing all final syntax errors..."

# Fix Blog.tsx - replace semicolons with commas in remaining objects
sed -i 's/category: '\''Quantum Computing'\'';/category: '\''Quantum Computing'\'',/g' src/pages/Blog.tsx
sed -i 's/href: '\''\/blog\/quantum-computing-breakthrough'\'';/href: '\''\/blog\/quantum-computing-breakthrough'\'',/g' src/pages/Blog.tsx
sed -i 's/image: '\''⚛️'\'';/image: '\''⚛️'\'',/g' src/pages/Blog.tsx

# Fix DeveloperPortal.tsx - fix JSX structure
sed -i 's/return (/  return (/' src/pages/DeveloperPortal.tsx
sed -i 's/<div className="min-h-screen bg-zion-blue">/    <div className="min-h-screen bg-zion-blue">/' src/pages/DeveloperPortal.tsx
sed -i 's/<div className="container mx-auto px-4 py-8">/      <div className="container mx-auto px-4 py-8">/' src/pages/DeveloperPortal.tsx

# Fix EquipmentPage.tsx - replace semicolons with commas in object properties
sed -i 's/nvidia-a100-server";/nvidia-a100-server",/g' src/pages/EquipmentPage.tsx
sed -i 's/NVIDIA A100 GPU Training Server";/NVIDIA A100 GPU Training Server",/g' src/pages/EquipmentPage.tsx
sed -i 's/High-performance AI training server with 8x A100 GPUs designed for demanding machine learning workloads.";/High-performance AI training server with 8x A100 GPUs designed for demanding machine learning workloads.",/g' src/pages/EquipmentPage.tsx
sed -i 's/category: "AI Hardware";/category: "AI Hardware",/g' src/pages/EquipmentPage.tsx

# Fix Home.tsx - fix JSX structure
sed -i 's/return (/  return (/' src/pages/Home.tsx
sed -i 's/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">/    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">/' src/pages/Home.tsx
sed -i 's/<div className="relative overflow-hidden">/      <div className="relative overflow-hidden">/' src/pages/Home.tsx
sed -i 's/<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">/        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">/' src/pages/Home.tsx

# Fix JobDetails.tsx - fix JSX structure
sed -i 's/isOpen={isApplyModalOpen}/isOpen={isApplyModalOpen}/g' src/pages/JobDetails.tsx
sed -i 's/onClose={() => setIsApplyModalOpen(false)}        \/>/onClose={() => setIsApplyModalOpen(false)}\n        \/>/g' src/pages/JobDetails.tsx

echo "All final syntax error fixes completed!"