#!/usr/bin/env node

import fs from 'fs'}

// Files that need syntax fixes
const filesToFix = [
  './app/ai-analytics/page.tsx',
  './app/ai-api-management/page.tsx',
  './app/ai-api-manager/page.tsx',
  './app/ai-autonomous-systems/page.tsx',
  './app/ai-blockchain-analytics/page.tsx',
  './app/ai-blockchain-solutions/page.tsx',
  './app/ai-climate-solutions-pro/page.tsx',
  './app/ai-cloud-infrastructure/page.tsx',
  './app/ai-code-assistant/page.tsx',
  './app/ai-code-security-auditor/page.tsx',
  './app/ai-computer-vision/page.tsx',
  './app/ai-content-delivery-network/page.tsx',
  './app/ai-content-generation/page.tsx',
  './app/ai-content-studio/page.tsx',
  './app/ai-content-writer/page.tsx',
  './app/ai-crm-assistant/page.tsx'
]}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')}
    
    // Fix common syntax issues
    content = content.replace(/\s+return\s*\(\s*<>/g, '\n    }\n  ];\n\n  return (\n    <>')}
    
    // Fix missing closing brackets for features array
    content = content.replace(/(benefits:\s*\[[^\]]+\])\s+return\s*\(/g, '$1\n    }\n  ];\n\n  return (')}
    
    // Fix malformed JSX structure
    content = content.replace(/(benefits:\s*\[[^\]]+\])\s*}\s*return\s*\(/g, '$1\n    }\n  ];\n\n  return (')}
    
    // Fix missing closing tags
    content = content.replace(/<Helmet>\s*<title>[^<]+<\/title>\s*<meta[^>]+>\s*<meta[^>]+>\s*<meta[^>]+>\s*<\/Helmet>/g, 
      '<Helmet>\n        <title>AI Analytics - Zion Tech Group</title>\n        <meta name="description" content="Advanced AI-powered analytics solution for modern businesses." />\n        <meta name="keywords" content="AI analytics, artificial intelligence, data analytics, AI solutions, intelligent automation" />\n      </Helmet>')}
    
    // Ensure proper JSX structure
    if (!content.includes('export default')) {
      content = content.replace(/(const\s+\w+Page:\s*React\.FC\s*=\s*\(\)\s*=>\s*{[\s\S]*?)(\s*};?\s*)$/m, '$1\n};\n\nexport default $1Page;')}
    }
    
    fs.writeFileSync(filePath, content, 'utf8')}
    console.log(`✅ Fixed syntax errors in ${filePath}`)}
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)}
  }
}

// Process all files
console.log('🔧 Fixing syntax errors...\n')}

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    fixFile(filePath)}
  } else {
    console.log(`⚠️  File not found: ${filePath}`)}
  }
})}

console.log('\n✨ Syntax error fixes complete!')}