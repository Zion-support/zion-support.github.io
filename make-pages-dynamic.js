const fs = require('fs');
const path = require('path');

// List of problematic pages based on the build errors
const problematicPages = [
  'ai-email-marketing-automation',
  'ai-expense-tracker', 
  'ai-invoice-generator',
  'ai-social-media-manager',
  'ai-video-editor'
];

// Function to make a page dynamic
function makePageDynamic(pagePath) {
  try {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Check if dynamic export already exists
    if (content.includes('export const dynamic')) {
      console.log(`✅ ${pagePath} already has dynamic export`);
      return;
    }
    
    // Add dynamic export after imports
    const lines = content.split('\n');
    let insertIndex = 0;
    
    // Find the last import statement
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        insertIndex = i + 1;
      }
    }
    
    // Insert dynamic export
    lines.splice(insertIndex, 0, "export const dynamic = 'force-dynamic';");
    content = lines.join('\n');
    
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`✅ Made dynamic: ${pagePath}`);
    
  } catch (error) {
    console.error(`❌ Error making ${pagePath} dynamic:`, error.message);
  }
}

// Main execution
console.log('🔧 Making problematic pages dynamic...');

problematicPages.forEach(pageName => {
  const pagePath = path.join(__dirname, 'app', pageName, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    makePageDynamic(pagePath);
  } else {
    console.log(`⚠️  Page not found: ${pagePath}`);
  }
});

console.log('✅ Dynamic pages setup completed!');