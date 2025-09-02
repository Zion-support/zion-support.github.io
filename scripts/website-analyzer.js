#!/usr/bin/env node

import fs from
  'fs';
import path from
  'path';
import { fileURLToPath } from
  'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Analyze the website structure and identify issues
function analyzeWebsite() {
  console.log(
  '🔍 Analyzing Zion Tech Group Website...\n');

ursor/automate-test-fix-improve-and-merge-code-99d1
  // Extract route paths from App.tsx
  const routeRegex = /path="([^"]+)"/g;
  const routes = [];
  let match;

  while ((match = routeRegex.exec(appContent)) !== null) {
    routes.push(match[1]);
  }

  console.log(`📊 Found ${routes.length} routes in App.tsx:`);
  routes.forEach(route => console.log(`  - ${route}`));

  // Check which pages exist
  const existingPages = [];
  const missingPages = [];
ursor/automate-test-fix-improve-and-merge-code-99d1
    const items = fs.readdirSync(dir);

    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scanDirectory(fullPath, path.join(basePath, item));
      } else if (item.endsWith('.tsx
  ') || item.endsWith('.jsx
  ')) {
        const pagePath = path.join(basePath, item.replace(/\.(tsx|jsx)$/, ''));
        existingPages.push(pagePath);
      }
    });
  }

  scanDirectory(pagesDir);

  console.log(`\n📁 Found ${existingPages.length} existing page files:`);
  existingPages.forEach(page => console.log(`  - ${page}`));

  // Check for missing pages
  routes.forEach(route => {
ursor/automate-test-fix-improve-and-merge-code-99d1
    );

    if (!hasPage) {
      missingPages.push(route);
    }
  });

  console.log(`\n❌ Found ${missingPages.length} missing pages:`);
  missingPages.forEach(page => console.log(`  - ${page}`));

  // Check for placeholder pages (files with minimal content)
  const placeholderPages = [];
  existingPages.forEach(pagePath => {
    const fullPath = path.join(pagesDir, pagePath +
  '.tsx');
    if (fs.existsSync(fullPath)) {
ursor/automate-test-fix-improve-and-merge-code-99d1
        placeholderPages.push(pagePath);
      }
    }
  });

  console.log(
    `\n⚠️  Found ${placeholderPages.length} placeholder pages (minimal content):`
  );
  placeholderPages.forEach(page => console.log(`  - ${page}`));

  // Generate analysis report
  const report = {
    timestamp: new Date().toISOString(),
    totalRoutes: routes.length,
    existingPages: existingPages.length,
    missingPages: missingPages.length,
    placeholderPages: placeholderPages.length,
    routes: routes,
    missing: missingPages,
    placeholders: placeholderPages,
  };

  fs.writeFileSync(
    path.join(__dirname,
  '..',
  'website-analysis-report.json'),
    JSON.stringify(report, null, 2)
  );

  console.log(`\n📝 Analysis report saved to website-analysis-report.json`);

  return report;
}

// Run the analysis
try {
  analyzeWebsite();
} catch (error) {
  console.error(
  '❌ Error analyzing website:', error.message);
  process.exit(1);
}
