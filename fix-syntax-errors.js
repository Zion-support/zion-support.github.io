const fs = require('fs');'
const path = require('path');'

// List of files with common syntax errors that need fixing;
const filesToFix = [
  'app/ai-3d-generation/page.tsx',''
  'app/ai-automation-suite/page.tsx',''
  'app/ai-automation/page.tsx',''
  'app/ai-chatbot-builder/page.tsx',''
  'app/ai-content-creation/page.tsx',''
  'app/ai-content-generation/page.tsx',''
  'app/ai-content-writer/page.tsx',''
  'app/ai-customer-support-chatbot/page.tsx',''
  'app/ai-customer-support/page.tsx',''
  'app/ai-cybersecurity/page.tsx',''
  'app/ai-data-visualization/page.tsx',''
  'app/ai-document-processor/page.tsx',''
  'app/ai-ecommerce-solutions/page.tsx',''
  'app/ai-education-platform/page.tsx',''
  'app/ai-fintech-solutions/page.tsx',''
  'app/ai-healthcare/page.tsx',''
  'app/ai-marketing/page.tsx',''
  'app/ai-mobile-app-builder/page.tsx',''
  'app/ai-mobile-builder/page.tsx',''
  'app/ai-predictive-analytics/page.tsx',''
  'app/ai-project-management/page.tsx',''
  'app/ai-recommendation-engine/page.tsx',''
  'app/ai-sales-automation/page.tsx',''
  'app/ai-solutions/page.tsx',''
  'app/ai-voice-assistant/page.tsx',''
  'app/ai-workflow-automation/page.tsx',''
  'app/analytics-tools/page.tsx',''
  'app/api-docs/page.tsx',''
  'app/autonomous-systems/page.tsx',''
  'app/business-intelligence/page.tsx',''
  'app/cloud-solutions/page.tsx',''
  'app/cloud-services/page.tsx',''
  'app/contact/page.tsx',''
  'app/cookies/page.tsx',''
  'app/custom-software/page.tsx',''
  'app/cybersecurity/page.tsx',''
  'app/database-management/page.tsx',''
  'app/demo/page.tsx',''
  'app/enterprise/page.tsx',''
  'app/error.tsx',''
  'app/gdpr/page.tsx',''
  'app/global-error.tsx',''
  'app/iot-edge-computing/page.tsx',''
  'app/iot-edge/page.tsx',''
  'app/it-micro-saas/page.tsx',''
  'app/it-solutions/page.tsx',''
  'app/legal-document-manager/page.tsx',''
  'app/loading.tsx',''
  'app/medical-records-manager/page.tsx'''
];

// Template for a basic page component;
const pageTemplate = (title, description) => `import React from "react";``"`
import { Helmet    } from "react-helmet-async";"

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {''
  return (
<>    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
      <Helmet></Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />""
      </Helmet>
      <div className="container mx-auto px-4 py-16">""
        <div className="text-center">""
          <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>""
          <p className="text-gray-300 text-lg">""
            This page is under construction. Please check back later.
          </p>
        </div>
    </>
      </div>
    </div>
  )};
}`;```

// Fix files;
filesToFix.forEach(filePath => {
  try {
    const fullPath = path.join(__dirname, filePath);
    const dir = path.dirname(fullPath);
    
    // Create directory if it doesn't exist''
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Extract title from file path;
    const title = path.basename(filePath, '.tsx').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());'
    const description = `Professional ${title.toLowerCase()} services by Zion Tech Group.`;```
    
    // Write the fixed content;
    fs.writeFileSync(fullPath, pageTemplate(title, description));
    console.log(`Fixed: ${filePath}`);```
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);```
  }
});

console.log('Syntax error fixing completed!');'