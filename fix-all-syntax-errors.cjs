#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix missing commas in function parameters
  fixed = fixed.replace(/req: anyres: any/g, 'req: any, res: any');
  fixed = fixed.replace(/NextApiRequestNextApiResponse/g, 'NextApiRequest, NextApiResponse');
  fixed = fixed.replace(/NextApiRequestres: NextApiResponse/g, 'NextApiRequest, res: NextApiResponse');
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/([a-zA-Z0-9_]+)([a-zA-Z0-9_]+)/g, '$1, $2');
  fixed = fixed.replace(/([a-zA-Z0-9_]+)([a-zA-Z0-9_]+)([a-zA-Z0-9_]+)/g, '$1, $2, $3');
  
  // Fix broken useState declarations
  fixed = fixed.replace(/const \[isVisiblesetIsVisible\]/g, 'const [isVisible, setIsVisible]');
  fixed = fixed.replace(/const \[performanceMetricssetPerformanceMetrics\]/g, 'const [performanceMetrics, setPerformanceMetrics]');
  fixed = fixed.replace(/const \[isLoadingsetIsLoading\]/g, 'const [isLoading, setIsLoading]');
  
  // Fix broken useRef declarations
  fixed = fixed.replace(/const heroRef\s*=\s*useR, e, f\(null\)/g, 'const heroRef = useRef(null)');
  fixed = fixed.replace(/const featuresRef\s*=\s*useR, e, f\(null\)/g, 'const featuresRef = useRef(null)');
  
  // Fix broken useInView calls
  fixed = fixed.replace(/useInVi, e, w\(heroR, e, f\{ once: true \}\)/g, 'useInView(heroRef, { once: true })');
  fixed = fixed.replace(/useInVi, e, w\(featuresR, e, f, \{once: true \}\)/g, 'useInView(featuresRef, { once: true })');
  
  // Fix broken function calls
  fixed = fixed.replace(/setIsVisib, l, e\(true\)/g, 'setIsVisible(true)');
  fixed = fixed.replace(/setIsLoadi, ng\(false\)/g, 'setIsLoading(false)');
  fixed = fixed.replace(/setPerformanceMetri, c, s\(/g, 'setPerformanceMetrics(');
  
  // Fix missing commas in object literals
  fixed = fixed.replace(/loadTime: entry\.loadEventEnd - entry\.fetchStartdomContentLoaded/g, 'loadTime: entry.loadEventEnd - entry.fetchStart,\n              domContentLoaded');
  
  // Fix broken interface declarations
  fixed = fixed.replace(/interface HealthResponse \{\) \{/g, 'interface HealthResponse {\n  status: string;\n  timestamp: string;\n  uptime: number;\n  version: string;\n}\n\nexport default async function handler(req: NextApiRequest, res: NextApiResponse) {');
  
  // Fix missing closing braces and semicolons
  fixed = fixed.replace(/\(\{once: true \}\)/g, ', { once: true })');
  fixed = fixed.replace(/\(\{once: true\}\)/g, ', { once: true })');
  
  // Fix broken string literals
  fixed = fixed.replace(/from 'next\/link";/g, "from 'next/link';");
  
  // Fix broken JSX attributes
  fixed = fixed.replace(/<metaname=/g, '<meta name=');
  fixed = fixed.replace(/<linkrel=/g, '<link rel=');
  
  // Fix missing spaces in CSS classes
  fixed = fixed.replace(/content="width=device-widthinitial-scale=1shrink-to-fit=no"/g, 'content="width=device-width, initial-scale=1, shrink-to-fit=no"');
  fixed = fixed.replace(/content="width=device-widthinitial-scale=1,shrink-to-fit=no"/g, 'content="width=device-width, initial-scale=1, shrink-to-fit=no"');
  
  // Fix broken array joins
  fixed = fixed.replace(/keywords\.join\(''\)/g, "keywords.join(',')");
  
  // Fix broken conditional expressions
  fixed = fixed.replace(/\$\{noindex\?'noindex':'index'\}\$\{nofollow\?'nofollow':'follow'\}/g, '${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}');
  
  // Fix broken object properties
  fixed = fixed.replace(/description: fullDescriptionurl:/g, 'description: fullDescription,\n    url:');
  fixed = fixed.replace(/telephone: '\+1-555-0123'contactType:/g, "telephone: '+1-555-0123',\n      contactType:");
  fixed = fixed.replace(/contactType: 'customer service'availableLanguage:/g, "contactType: 'customer service',\n      availableLanguage:");
  fixed = fixed.replace(/addressCountry: 'US'\s*\}/g, "addressCountry: 'US'\n    }");
  
  // Fix broken type annotations
  fixed = fixed.replace(/'\@type': 'Person'name:/g, "'@type': 'Person',\n      name:");
  fixed = fixed.replace(/'\@type': 'Organization'name:/g, "'@type': 'Organization',\n      name:");
  
  // Fix broken return statements
  fixed = fixed.replace(/return \(<Head>/g, 'return (\n    <Head>');
  fixed = fixed.replace(/<\/Head>\s*\)\}/g, '</Head>\n  );');
  
  // Fix broken comments
  fixed = fixed.replace(/\/\* BasicMetaTags \*\//g, '/* Basic Meta Tags */');
  fixed = fixed.replace(/\/\* CanonicalURL \*\//g, '/* Canonical URL */');
  fixed = fixed.replace(/\/\* DNSPrefetch \*\//g, '/* DNS Prefetch */');
  fixed = fixed.replace(/\/\* Preconnectto externaldomains \*\//g, '/* Preconnect to external domains */');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = processDirectory('./pages') + processDirectory('./src');
console.log(`Fixed ${fixedCount} files.`);