#!/usr/bin/env node

import fs from 'fs'
// Function to fix remaining import issues
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Fix duplicate imports more aggressively
    content = content.replace(
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/g,
      (match, imports) => {
        // Split by comma and clean up
        const importList = imports.split(',').map(imp => imp.trim())
        // Remove duplicates while preserving order
        const uniqueImports = [...new Set(importList)]
        return `import { ${uniqueImports.join(', ')} } from 'lucide-react'`
      }
    )
    // Fix any remaining syntax issues
    content = content.replace(/,\s*,/g, ',')
    content = content.replace(/,\s*}/g, '}')
    content = content.replace(/{\s*,/g, '{')
    content = content.replace(/,\s*from/g, ' from')
    fs.writeFileSync(filePath, content)
    console.log(`Fixed imports in: ${filePath}`)
    return true
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

// Main function
function main() {
  const files = [
    'src/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx',
    'src/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
    'src/blog/ai-enterprise-transformation-2025/page.tsx',
    'src/blog/ai-innovation-labs-product-development-2025/page.tsx',
    'src/enterprise/page.tsx',
    'src/gdpr/page.tsx',
    'src/marketing-tools/page.tsx',
    'src/security/page.tsx',
    'src/system-status/page.tsx',
    'src/test-page.tsx'
  ]
  console.log('Fixing remaining import issues...')
  let fixedCount = 0
  files.forEach(file => {
    if (fs.existsSync(file)) {
      if (fixImports(file)) {
        fixedCount++
      }
    }
  })
  console.log(`Fixed ${fixedCount} files`)
}

main()