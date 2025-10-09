const fs = require('fs');
const path = require('path');

// List of files to fix
const filesToFix = [
  'src/ai-analytics/page.tsx',
  'src/ai-computer-vision/page.tsx',
  'src/ai-content-studio/page.tsx',
  'src/ai-customer-insights/page.tsx',
  'src/ai-customer-support-bot/page.tsx',
  'src/ai-design-assistant/page.tsx',
  'src/ai-document-processor/page.tsx',
  'src/ai-ecommerce-optimizer/page.tsx',
  'src/ai-edge-computing/page.tsx',
  'src/ai-email-marketing/page.tsx',
  'src/ai-hr-assistant/page.tsx',
  'src/ai-inventory-manager/page.tsx',
  'src/ai-invoice-generator/page.tsx',
  'src/ai-lead-scoring/page.tsx',
  'src/ai-ml-platform/page.tsx',
  'src/ai-mobile-builder/page.tsx',
  'src/ai-nlp/page.tsx',
  'src/ai-performance-tracker/page.tsx',
  'src/ai-predictive-analytics/page.tsx',
  'src/ai-research-development/page.tsx',
  'src/ai-robotics/page.tsx',
  'src/ai-sales-forecasting/page.tsx',
  'src/ai-scheduler/page.tsx',
  'src/ai-security-monitor/page.tsx',
  'src/ai-seo-optimizer/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing commas in features array
    // Pattern: },      icon: -> },    {    icon:
    content = content.replace(/},\s+icon:/g, '},\n    {\n      icon:');
    
    // Fix missing commas in benefits arrays
    // Pattern: 'benefit']      icon: -> 'benefit']\n    },\n    {\n      icon:
    content = content.replace(/(\w+'])\s+icon:/g, '$1\n    },\n    {\n      icon:');
    
    // Fix missing closing braces and parentheses
    content = content.replace(/}\s*\);\s*$/m, '}\n  );\n};');
    
    // Fix missing closing tags
    content = content.replace(/<\/main>\s*<Footer \/>\s*\);\s*$/m, '</main>\n\n      <Footer />\n    </div>\n  );\n};');
    
    // Fix missing closing divs
    content = content.replace(/<\/section>\s*<\/main>\s*<Footer \/>\s*\);\s*$/m, '</section>\n      </main>\n\n      <Footer />\n    </div>\n  );\n};');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Syntax error fixing completed!');