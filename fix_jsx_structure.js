<<<<<<< HEAD

const fs = require('fs')
const path = require('path')
function fixJsxStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Fix self-closing section tags that have content after them
    content = content.replace(/<section([^>]*)><\/section>\s*<div/g, '<section$1>\n          <div')
    content = content.replace(/<div([^>]*)><\/div>\s*<div/g, '<div$1>\n            <div')
    content = content.replace(/<div([^>]*)><\/div>\s*<h/g, '<div$1>\n              <h')
    content = content.replace(/<div([^>]*)><\/div>\s*<p/g, '<div$1>\n              <p')
    content = content.replace(/<div([^>]*)><\/div>\s*<button/g, '<div$1>\n              <button')
    content = content.replace(/<div([^>]*)><\/div>\s*<ul/g, '<div$1>\n              <ul')
    content = content.replace(/<div([^>]*)><\/div>\s*<li/g, '<div$1>\n                <li')
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*<h1([^>]*)>([^<]*)<\/h1>\s*<p([^>]*)>([^<]*)<\/p>\s*<div([^>]*)>\s*<button([^>]*)>([^<]*)<\/button>\s*<button([^>]*)>([^<]*)<\/button>\s*<\/div>\s*<\/div>\s*<\/section>/g
      '<div$1>\n            <h1$2>$3</h1>\n            <p$4>$5</p>\n            <div$6>\n              <button$7>$8</button>\n              <button$9>$10</button>\n            </div>\n          </div>\n        </section>')
    fs.writeFileSync(filePath, content, 'utf8')
    // eslint-disable-next-line no-console
    console.log(`Fixed JSX structure in: ${filePath}`)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fixing ${filePath}:`, error.message)
  }
}
// Fix specific problematic files
const problematicFiles = [
  './app/components/ContentPreviewCard.tsx'
  './app/components/ContentPromotionBanner.tsx'
  './app/components/EnhancedAccessibility.tsx'
  './app/components/EnhancedErrorBoundary.tsx'
  './app/components/EnhancedLoading.tsx'
  './app/components/EnhancedLoadingStates.tsx'
  './app/components/EnhancedPerformanceOptimizer.tsx'
  './app/components/EnhancedSEOHead.tsx'
  './app/components/EnhancedSkipLink.tsx'
  './app/components/ErrorBoundary.tsx'
  './app/components/FuturisticBackground.tsx'
  './app/components/Loading.tsx'
  './app/components/LoadingSpinner.tsx'
  './app/components/LoadingStates.tsx'
  './app/components/NeonButton.tsx'
  './app/components/OptimizedLoadingSpinner.tsx'
  './app/components/PerformanceDashboard.tsx'
  './app/components/PerformanceMonitor.tsx'
  './app/components/PerformanceOptimizations.tsx'
  './app/components/SEOHead.tsx'
  './app/components/SecurityEnhancer.tsx'
  './app/components/ServiceCard.tsx'
  './app/components/ServiceCardSkeleton.tsx'
  './app/components/ServiceWorker.tsx'
  './app/components/Sidebar.tsx'
  './app/components/SkipLink.tsx',
    './app/components/UserExperienceEnhancer.tsx'
  ]
problematicFiles.forEach(fixJsxStructure)
// eslint-disable-next-line no-console
    console.log('JSX structure fix completed!')
=======
const fs = require('fs');
const path = require('path');

function fixJSXStructure(content) {
  // Fix self-closing divs that should be opening divs
  content = content.replace(/<div className="[^"]*"><\/div>\s*{/g, (match) => {
    const className = match.match(/className="([^"]*)"/)[1];
    return `<div className="${className}">\n            {`;
  });
  
  // Fix self-closing sections that should be opening sections
  content = content.replace(/<section className="[^"]*"><\/section>\s*{/g, (match) => {
    const className = match.match(/className="([^"]*)"/)[1];
    return `<section className="${className}">\n          {`;
  });
  
  // Fix self-closing divs that should be opening divs (without className)
  content = content.replace(/<div><\/div>\s*{/g, '<div>\n            {');
  
  return content;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJSXStructure(content);
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all TSX files in app/components
const componentsDir = path.join(__dirname, 'app', 'components');
const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

files.forEach(file => {
  processFile(path.join(componentsDir, file));
});

console.log('JSX structure fixes completed');
>>>>>>> cursor/fix-errors-and-merge-to-main-4eef
