const fs = require('fs');
const path = require('path');

// List of files that need comprehensive fixes
const filesToFix = [
  'app/ai-ecommerce-optimizer-pro/page.tsx',
  'app/ai-email-automation/page.tsx',
  'app/ai-financial-analytics-pro/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-services/page.tsx',
  'app/analytics/page.tsx',
  'app/api/page.tsx',
  'app/automation/page.tsx',
  'app/blockchain/page.tsx',
  'app/cloud-migration-pro/page.tsx'
];

console.log(`Fixing ${filesToFix.length} files comprehensively...`);

filesToFix.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add comprehensive imports
  const allImports = [
    'ArrowRight', 'CheckCircle', 'Star', 'Cpu', 'BarChart3', 'Zap', 'Shield', 
    'Users', 'TrendingUp', 'Bot', 'Database', 'Settings', 'Target', 'MessageCircle',
    'Clock', 'Globe', 'Smartphone', 'FileText', 'PenTool'
  ];
  
  // Replace the lucide-react import
  content = content.replace(
    /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"]/,
    `import { ${allImports.join(', ')} } from 'lucide-react'`
  );
  
  // Add Footer import if not present
  if (!content.includes('import Footer')) {
    const importMatch = content.match(/import.*from.*['"];?\s*\n/);
    if (importMatch) {
      const insertPoint = importMatch.index + importMatch[0].length;
      const footerImport = "import Footer from '../components/Footer';\n";
      content = content.slice(0, insertPoint) + footerImport + content.slice(insertPoint);
    }
  }
  
  // Fix JSX structure issues
  if (content.includes('</section>') && content.includes('<div className="min-h-screen')) {
    content = content.replace('</section>', '</div>');
  }
  
  // Add Footer component before closing
  if (!content.includes('<Footer') && content.includes('</>')) {
    content = content.replace('</>', '      <Footer />\n    </>');
  }
  
  // Ensure proper JSX structure
  if (content.includes('</div>') && !content.includes('</>') && content.includes('<>')) {
    content = content.replace('</div>', '</div>\n    </>');
  }
  
  // Fix any remaining parsing issues
  if (content.includes('export default') && !content.includes('export default function')) {
    content = content.replace(/export default\s+(\w+)/, 'export default function $1()');
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
});

console.log('All files comprehensively fixed!');
