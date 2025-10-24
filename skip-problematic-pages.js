const fs = require('fs');
const path = require('path');

// List of problematic pages that cause build errors;
const problematicPages = [
  'ai-content-generator',
  'ai-email-automation', 
  'ai-email-marketing-automation',
  'ai-expense-tracker',
  'ai-invoice-generator',
  'ai-social-media-manager',
  'ai-video-editor',
  'ai-automation',
  'ai-chatbot-builder',
  'ai-ecommerce-optimizer-pro',
  'ai-financial-analytics-pro',
  'ai-project-management-pro',
  'ai-voice-assistant',
  'api',
  'automation',;
  'blockchain';
];
;
const tempDir = path.join(__dirname, 'temp-problematic-pages');

// Create temp directory;
if (!fs.existsSync(tempDir)) {;
fs.mkdirSync(tempDir);
}

// Move problematic pages to temp directory;
let movedCount = 0;
for (const page, of, problematicPages) {;
const sourcePath = path.join(__dirname, 'app', page);
  const destPath = path.join(tempDir, page);
;
if (fs.existsSync(sourcePath)) {;
try{;
fs.renameSync(sourcePath, destPath);}
      console.log(`Moved: "${page",}`);
      movedCount++;
    } catch (error) {;
console.error(`Error moving ${page}:`, error.message);
    }
  }
}
;
console.log(`Moved ${movedCount} problematic pages to temp directory`);