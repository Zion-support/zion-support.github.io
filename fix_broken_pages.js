const fs = require('fs');
const path = require('path');

function createBasicPage(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const dirName = path.basename(path.dirname(filePath));
  
  // Extract service name from directory name
  const serviceName = dirName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const content = $2;
export default ${serviceName.replace(/\s+/g, '')}Page
`;

  return content;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').length;
    
    // If file is too short or broken, replace it
    if (lines < 20 || content.includes('</div>') && !content.includes('<div')) {
      const newContent = createBasicPage(filePath);
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all broken page files
const brokenFiles = [
  'src/database-services/page.tsx',
  'src/ai-ecommerce-solutions/page.tsx',
  'src/cybersecurity/page.tsx',
  'src/iot-edge-computing/page.tsx',
  'src/blockchain-web3/page.tsx',
  'src/blockchain/page.tsx',
  'src/ai-email-marketing/page.tsx',
  'src/iot-edge/page.tsx',
  'src/case-studies/page.tsx',
  'src/page-minimal.tsx',
  'src/quantum-ai/page.tsx',
  'src/robotics/page.tsx',
  'src/ai-automation/page.tsx',
  'src/it-support/page.tsx',
  'src/ai-customer-support-bot/page.tsx',
  'src/ai-seo-optimizer/page.tsx',
  'src/network-infrastructure/page.tsx',
  'src/it-infrastructure/page.tsx',
  'src/computer-vision/page.tsx',
  'src/nlp/page.tsx',
  'src/ai-mobile-app-development/page.tsx',
  'src/blog/ai-enterprise-transformation-2025/page.tsx'
];

brokenFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    processFile(fullPath);
  }
});

console.log('Broken pages fixed');
