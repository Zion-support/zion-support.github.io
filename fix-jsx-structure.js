#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Read the problematic page.tsx file
const filePath = 'app/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

console.log('Fixing JSX structure issues in page.tsx...');

// Fix 1: Remove the misplaced article tag and fix the structure
// The article tag on line 221 should not be there - it's wrapping the main hero content
content = content.replace(
  /<Suspense fallback={<ServiceCardSkeleton \/>}>\s*<article className="quantum-card p-4 sm:p-6 energy-pulse">/,
  '<Suspense fallback={<ServiceCardSkeleton />}>'
);

// Fix 2: Close the Suspense tag properly and remove the misplaced article closing tag
content = content.replace(
  /<\/article>\s*<\/Suspense>/,
  '</Suspense>'
);

// Fix 3: Fix the main structure - there are multiple issues with nested sections and divs
// Let's fix the structure step by step

// First, let's identify and fix the main structural issues
// The main issue is that there are mismatched opening and closing tags

// Fix the section structure - there should be proper opening and closing
// Let's fix the main content structure
content = content.replace(
  /<main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">\s*<section[^>]*>/,
  '<main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">\n          <section className="mb-16" aria-labelledby="hero-heading">'
);

// Fix the closing structure at the end
content = content.replace(
  /<\/main>\s*<Footer \/>\s*<\/div>\s*<\/React\.Fragment>/,
  '</main>\n      </React.Fragment>'
);

// Remove the duplicate Footer
content = content.replace(
  /<Footer \/>\s*<\/div>\s*<\/React\.Fragment>/,
  '</React.Fragment>'
);

// Fix the section closing issues
content = content.replace(
  /<\/div>\s*<\/section>\s*<\/main>/,
  '</section>\n        </main>'
);

// Write the fixed content back
fs.writeFileSync(filePath, content);

console.log('JSX structure fixes applied to page.tsx');
console.log('Please review the changes and test the build.');