import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files to fix
const filesToFix = [
  'app/services/page.tsx',
  'app/network-security/page.tsx',
  'app/cloud-migration/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-project-management/page.tsx',
  'app/ai-crm-automation/page.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace Helmet import with Head
    content = content.replace(
      "import { Helmet } from 'react-helmet-async';",
      "import Head from 'next/head';"
    );
    
    // Replace Helmet component with Head
    content = content.replace(/<Helmet>/g, '<Head>');
    content = content.replace(/<\/Helmet>/g, '</Head>');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Helmet fixes completed!');