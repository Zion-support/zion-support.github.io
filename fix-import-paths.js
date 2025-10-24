#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix import paths
function fixImportPaths(filePath) {
  const fullPath = path.join(__dirname, filePath);
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix import paths for micro-saas pages
    if (filePath.includes('micro-saas/')) {
      content = content.replace(
        "import Navigation from '../components/Navigation';",
        "import Navigation from '../../components/Navigation';"
      );
      content = content.replace(
        "import Footer from '../components/Footer';",
        "import Footer from '../../components/Footer';"
      );
      content = content.replace(
        "import { Helmet } from 'react-helmet-async';",
        "import { Helmet } from 'react-helmet-async';"
      );
    }
    
    // Fix import paths for micro-saas-services
    if (filePath.includes('micro-saas-services/')) {
      content = content.replace(
        "import Navigation from '../components/Navigation';",
        "import Navigation from '../../components/Navigation';"
      );
      content = content.replace(
        "import Footer from '../components/Footer';",
        "import Footer from '../../components/Footer';"
      );
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed import paths in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// List of files with import path issues
const filesWithImportIssues = [
  'app/micro-saas/ai-content-writer/page.tsx',
  'app/micro-saas/analytics-dashboard/page.tsx',
  'app/micro-saas/appointment-scheduler/page.tsx',
  'app/micro-saas/chat-analytics/page.tsx',
  'app/micro-saas/content-generator/page.tsx',
  'app/micro-saas/document-processor/page.tsx',
  'app/micro-saas/email-marketing/page.tsx',
  'app/micro-saas/expense-tracker/page.tsx',
  'app/micro-saas/inventory-management/page.tsx',
  'app/micro-saas/lead-scoring/page.tsx',
  'app/micro-saas/seo-optimizer/page.tsx',
  'app/micro-saas/social-manager/page.tsx',
  'app/micro-saas/support-bot/page.tsx',
  'app/micro-saas-services/microSaasServices.tsx',
  'app/micro-saas-services/services.tsx'
];

// Main function
function fixAllImportPaths() {
  console.log('Starting to fix import paths...');
  
  filesWithImportIssues.forEach(fixImportPaths);
  
  console.log('Finished fixing import paths!');
}

// Run the fix
fixAllImportPaths();