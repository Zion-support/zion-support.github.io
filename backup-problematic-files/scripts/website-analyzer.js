#!/usr/bin/env node,"}),"})
import fs from,"}),"})
  'fs',"}),"})
import path from,"}),"})
  'path',"}),"})
import { fileURLToPath } from,"}),"})
  'url',"}),"})
,"}),"})

  const routeRegex = /path="([^"]+)"/g,"}),"})
  const routes = [],"}),"})
  let match,"}),"})
,"}),"})

,"}),"})
  // Check which pages exist,"}),"})
  const existingPages = [],"}),"})
  const missingPages = [],"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})

      }"}),"})
    }),"}),"})
  }"}),"})
,"}),"})
  scanDirectory(pagesDir),"}),"})
,"}),"})

ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    ),"}),"})
,"}),"})
    if (!hasPage) {,"}),"})

      }"}),"})
    }"}),"})
  }),"}),"})
,"}),"})

,"}),"})
  // Generate analysis report,"}),"})
  const report = {,"}),"})
    "timestamp": new Date().toISOString(),,"}),"})

    "routes": routes,,"}),"})
    "missing": missingPages,,"}),"})
    "placeholders": placeholderPages,,"}),"})
  },"}),"})
,"}),"})

,"}),"})
  return report,"}),"})
}"}),"})
,"}),"})
// Run the analysis,"}),"})
try {,"}),"})
  analyzeWebsite(),"}),"})
} catch (error) {,"}),"})

  '🔍 Analyzing Zion Tech Group Website...\n');
  const srcDir = path.join(__dirname, ';..', ';src');
  const pagesDir = path.join(srcDir, ';pages');
  const componentsDir = path.join(srcDir, ';components');
  // Read App.tsx to extract all routes;
  const appTsxPath = path.join(srcDir, ';App.tsx');
  const appContent = fs.readFileSync(appTsxPath, ';utf8');
    // Extract route paths from App.tsx;

  return report}
// Run the analysis;
try {
  analyzeWebsite()} catch (error) {
  console.error("
  '❌ Error analyzing "website": ', error.message);
  process.exit(1)}