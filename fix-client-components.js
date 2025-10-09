import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files to fix
const filesToFix = [
  'app/it-services/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/micro-saas/page.tsx',
  'app/robotics/page.tsx',
  'app/sitemap-page.tsx'
];

function fixClientComponent(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if file has "use client" directive
    if (content.includes("'use client'")) {
      // Remove metadata export from client components
      content = content.replace(/export const metadata: Metadata = \{[\s\S]*?\};\n\n/g, '');
      content = content.replace(/import { Metadata } from 'next';\n/g, '');
      
      // Add metadata to head using Next.js Head component or remove it entirely
      // For now, we'll remove the metadata export
      console.log(`Removed metadata export from client component: ${filePath}`);
    }

    // Fix syntax errors in case-studies
    if (filePath.includes('case-studies')) {
      // Fix the apostrophe issue
      content = content.replace(/300%\+/g, '300%+');
      content = content.replace(/we've/g, 'we have');
    }

    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixClientComponent);
console.log('Client component fixes completed!');