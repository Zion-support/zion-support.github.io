#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files with known syntax errors
const filesToFix = [
  'src/components/October2025LatestAIBreakthroughsBanner.tsx',
  'src/components/October2025AutonomousInfrastructureBanner.tsx',
  'src/components/October2025CognitiveMeshLaunchBanner.tsx',
  'src/components/October2025FraudDetectionBanner.tsx',
  'src/components/October2025AdvancedAIInnovationsBanner.tsx',
  'src/components/October2025AIOperationsBanner.tsx',
  'src/components/NewContentAdvertisingBanner.tsx',
  'src/components/AdvancedPerformanceMonitor.tsx',
  'src/components/AdvancedDashboard.tsx'
];

function fixSyntaxErrors() {
  console.log('🔧 Starting comprehensive syntax error fixes...');
  
  let totalFixed = 0;
  
  filesToFix.forEach(filePath => {
    const fullPath = path.join(process.cwd(), filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return;
    }
    
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      let fixed = false;
      
      // Fix common syntax errors
      
      // 1. Fix duplicate elements
      content = content.replace(/(<[^>]+>)\s*\1/g, '$1');
      
      // 2. Fix malformed JSX attributes
      content = content.replace(/placeholder="[^"]*<[^>]*>/g, (match) => {
        const placeholder = match.match(/placeholder="([^"]*)/)[1];
        return `placeholder="${placeholder.replace(/<[^>]*>/g, '')}"`;
      });
      
      // 3. Fix mismatched tags
      content = content.replace(/<div[^>]*>\s*<\/Link>/g, '</Link>');
      content = content.replace(/<Link[^>]*>\s*<\/div>/g, '</Link>');
      
      // 4. Fix unterminated regular expressions (usually caused by malformed JSX)
      content = content.replace(/\/\*[^*]*\*\/\s*<div[^>]*>\s*$/gm, '');
      
      // 5. Fix malformed aria-hidden attributes
      content = content.replace(/aria-hidden="true"\s*\/>/g, 'aria-hidden="true" />');
      
      // 6. Fix duplicate closing tags
      content = content.replace(/(<\/[^>]+>)\s*\1/g, '$1');
      
      // 7. Fix missing closing tags
      const openDivs = (content.match(/<div[^>]*>/g) || []).length;
      const closeDivs = (content.match(/<\/div>/g) || []).length;
      
      if (openDivs > closeDivs) {
        const missingDivs = openDivs - closeDivs;
        content += '\n' + '</div>'.repeat(missingDivs);
        fixed = true;
      }
      
      // 8. Fix malformed className attributes
      content = content.replace(/className="[^"]*<[^>]*>/g, (match) => {
        const className = match.match(/className="([^"]*)/)[1];
        return `className="${className.replace(/<[^>]*>/g, '')}"`;
      });
      
      // 9. Fix broken JSX structure
      content = content.replace(/<([^>]+)>\s*<\/\1>\s*<([^>]+)>/g, '<$2>');
      
      // 10. Fix malformed Link components
      content = content.replace(/<Link[^>]*>\s*<div[^>]*>\s*<\/div>\s*<\/Link>/g, '<Link$1></Link>');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`✅ Fixed: ${filePath}`);
        totalFixed++;
        fixed = true;
      } else {
        console.log(`ℹ️  No changes needed: ${filePath}`);
      }
      
    } catch (error) {
      console.error(`❌ Error fixing ${filePath}:`, error.message);
    }
  });
  
  console.log(`\n🎉 Syntax error fixing completed!`);
  console.log(`📊 Total files fixed: ${totalFixed}`);
  
  return totalFixed > 0;
}

// Run the fix
if (require.main === module) {
  fixSyntaxErrors();
}

module.exports = { fixSyntaxErrors };