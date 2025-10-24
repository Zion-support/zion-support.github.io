<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

function fixJsxStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix self-closing section tags that have content after them
    content = content.replace(/<section([^>]*)><\/section>\s*<div/g, '<section$1>\n          <div');
    content = content.replace(/<div([^>]*)><\/div>\s*<div/g, '<div$1>\n            <div');
    content = content.replace(/<div([^>]*)><\/div>\s*<h/g, '<div$1>\n              <h');
    content = content.replace(/<div([^>]*)><\/div>\s*<p/g, '<div$1>\n              <p');
    content = content.replace(/<div([^>]*)><\/div>\s*<button/g, '<div$1>\n              <button');
    content = content.replace(/<div([^>]*)><\/div>\s*<ul/g, '<div$1>\n              <ul');
    content = content.replace(/<div([^>]*)><\/div>\s*<li/g, '<div$1>\n                <li');
    
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*<h1([^>]*)>([^<]*)<\/h1>\s*<p([^>]*)>([^<]*)<\/p>\s*<div([^>]*)>\s*<button([^>]*)>([^<]*)<\/button>\s*<button([^>]*)>([^<]*)<\/button>\s*<\/div>\s*<\/div>\s*<\/section>/g, 
      '<div$1>\n            <h1$2>$3</h1>\n            <p$4>$5</p>\n            <div$6>\n              <button$7>$8</button>\n              <button$9>$10</button>\n            </div>\n          </div>\n        </section>');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed JSX structure in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix specific problematic files
const problematicFiles = [
  './app/components/ContentPreviewCard.tsx',
  './app/components/ContentPromotionBanner.tsx',
  './app/components/EnhancedAccessibility.tsx',
  './app/components/EnhancedErrorBoundary.tsx',
  './app/components/EnhancedLoading.tsx',
  './app/components/EnhancedLoadingStates.tsx',
  './app/components/EnhancedPerformanceOptimizer.tsx',
  './app/components/EnhancedSEOHead.tsx',
  './app/components/EnhancedSkipLink.tsx',
  './app/components/ErrorBoundary.tsx',
  './app/components/FuturisticBackground.tsx',
  './app/components/Loading.tsx',
  './app/components/LoadingSpinner.tsx',
  './app/components/LoadingStates.tsx',
  './app/components/NeonButton.tsx',
  './app/components/OptimizedLoadingSpinner.tsx',
  './app/components/PerformanceDashboard.tsx',
  './app/components/PerformanceMonitor.tsx',
  './app/components/PerformanceOptimizations.tsx',
  './app/components/SEOHead.tsx',
  './app/components/SecurityEnhancer.tsx',
  './app/components/ServiceCard.tsx',
  './app/components/ServiceCardSkeleton.tsx',
  './app/components/ServiceWorker.tsx',
  './app/components/Sidebar.tsx',
  './app/components/SkipLink.tsx',
  './app/components/UserExperienceEnhancer.tsx'
];

problematicFiles.forEach(fixJsxStructure);
console.log('JSX structure fix completed!');
=======
import fs from '
  content = content.replace(/<div: className ="\$2" \/>/g, '<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">'
  content = content.replace(/<Helmet \/>/g, '<Helmet>'
  content = content.replace(/<div: className ="\$2" \/>/g, '<div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">'
  content = content.replace(/className="t e xt-4xl/g, 'className="text-4xl'
  content = content.replace(/className="t e xt-lg/g, 'className="text-lg'
  content = content.replace(/className="b g-g radient-to-r/g, 'className="bg-gradient-to-r'
  content = content.replace(/className="\$2"/g, '
  content = content.replace(/<\/Helmet>/g, '</Helmet>'
  content = content.replace(/<\/div>/g, '</div>'
      fs.writeFileSync(filePath, fixedContent, 'utf8'
      } else if (item.endsWith('.tsx') || item.endsWith('.ts'
console.log('Starting JSX structure fixes...'
const processedCount  = processDirectory('./app'
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
