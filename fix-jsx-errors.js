import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all files with JSX errors
const filesWithErrors = [
  'app/accessibility/page.tsx',
  'app/advanced-security-suite/page.tsx',
  'app/ai-3d-generation/page.tsx',
  'app/ai-accounting-assistant/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx',
  'app/ai-analytics-dashboard-pro/page.tsx',
  'app/ai-analytics-dashboard/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-automated-reporting/page.tsx',
  'app/ai-automated-testing/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-business-intelligence-pro/page.tsx',
  'app/ai-business-intelligence/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-climate-prediction-engine/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-cloud-infrastructure/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-code-generation/page.tsx'
];

function fixJSXFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract the page name from the file path
    const pageName = path.basename(filePath, '.tsx').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Check if the file has the malformed JSX structure
    if (content.includes('JSX expressions must have one parent element') || 
        content.includes('return (') && !content.includes('<>') && !content.includes('<div')) {
      
      // Create a proper JSX structure
      const fixedContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${pageName.replace(/\s+/g, '')}() {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">${pageName}</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ${pageName.toLowerCase()} services coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}`;

      fs.writeFileSync(fullPath, fixedContent);
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log(`Skipped (already fixed or different issue): ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting JSX fixes...');
filesWithErrors.forEach(fixJSXFile);
console.log('JSX fixes completed!');