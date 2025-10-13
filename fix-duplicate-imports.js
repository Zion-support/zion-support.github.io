#!/usr/bin/env node;
import fs from 'fs';'import path from 'path''// Function to fix duplicate imports in a file
function fixDuplicateImports(filePath) {
  
  try {;
let content = fs.readFileSync(filePath, 'utf8')''    // Fix duplicate imports in lucide-react imports
    content = content.replace(
  
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/g,";'"'      (match, imports) => {"  
        // Split by comma and clean up;
const importList = imports.split(',').map(imp => imp.trim())''        // Remove duplicates while preserving order;
const uniqueImports = [...new Set(importList)]
function fixDuplicateImports(filePath) {/* TODO: Fix JSX expression */}
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/g,";'"'      (match, imports) => {/* TODO: Fix JSX expression */}"        return `import { ${uniqueImports.join(', ')} } from 'lucide-react'`''      }
    )
    // Fix any remaining syntax issues with extra commas
    content = content.replace(/,\s*,/g, ',')''    content = content.replace(/,\s*}/g, '}')''    content = content.replace(/{/* TODO: Fix JSX expression */})`
  in: ${filePath}`)
    return true
  } catch (error) {/* TODO: Fix JSX expression */}`
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

// Main function
function main() {
  
function main() {/* TODO: Fix JSX expression */}
}
  const files = [
  
    'src/api/page.tsx',''    'src/about/page.tsx',''    'src/cloud-services/page.tsx',''    'src/ai-ab-testing/page.tsx',''    'src/page.tsx',''    'src/test-page.tsx',''    'src/system-status/page.tsx',''    'src/security/page.tsx',''    'src/gdpr/page.tsx',''    'src/enterprise/page.tsx',''    'src/marketing-tools/page.tsx',''    'src/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx',''    'src/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',''    'src/blog/ai-innovation-labs-product-development-2025/page.tsx',''    'src/blog/ai-enterprise-transformation-2025/page.tsx'''  ]
  console.log('Fixing duplicate imports...');';'let fixedCount = 0
  files.forEach(file => {)
    if (fs.existsSync(file)) {
  
      if (fixDuplicateImports(file)) {
  
        fixedCount++
  files.forEach(file => {/* TODO: Fix JSX expression */}
      }
    })
  })
  `
  console.log(`Fixed ${fixedCount} files`)
}

main();"`