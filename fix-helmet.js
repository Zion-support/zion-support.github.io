import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesToFix = [
  'app/micro-saas/page.tsx',
  'app/robotics/page.tsx',
  'app/sitemap-page.tsx',
  'app/iot-edge/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/it-services/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  'app/blog/ai-enterprise-transformation-2025/page.tsx',
  'app/case-studies/page.tsx',
  'app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx',
  'app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/ai-content-generation/page.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove react-helmet-async import
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
    
    // Replace Helmet with head
    content = content.replace(/<Helmet>/g, '<head>');
    content = content.replace(/<\/Helmet>/g, '</head>');
    
    // Remove React.Fragment wrapper if it only contains Helmet
    content = content.replace(/<>\s*<head>[\s\S]*?<\/head>\s*<\/>/g, (match) => {
      const headContent = match.replace(/<>\s*<head>|<\/head>\s*<\/>/g, '');
      return `<head>${headContent}</head>`;
    });
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All helmet imports fixed!');