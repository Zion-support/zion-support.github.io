import fs from 'fs';
import path from 'path';

const conflictedFiles = [
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx'
];

console.log(`Resolving conflicts in ${conflictedFiles.length} files`);

conflictedFiles.forEach(file => {
  const filePath = path.join('/workspace', file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove conflict markers and keep our version (the one with proper types)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> cursor\/fix-errors-and-merge-to-main-7622/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Ensure the file has the correct TypeScript type
    if (content.includes('export default function Wrapped(props: any)')) {
      content = content.replace(
        'export default function Wrapped(props: any)',
        'export default function Wrapped(props: Record<string, unknown>)'
      );
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Resolved: ${file}`);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Conflict resolution complete');