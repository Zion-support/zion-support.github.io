import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix blog files with parsing errors
function fixBlogFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing parenthesis and return statement
    if (content.includes('};') && !content.includes('  );')) {
      content = content.replace(/};$/, '  );\n};');
      modified = true;
    }

    // Fix merge conflict markers
    if (content.includes('      console.log(`⚠ Found merge conflict markers in ${filePath}, skipping...`);
      return;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Fixed ${filePath}`);
    }
  } catch (error) {
    console.log(`✗ Error processing ${filePath}: ${error.message}`);
  }
}

// Main execution
console.log('🔧 Fixing blog files...\n');

const blogFiles = [
  'src/blog/ai-2026-april-revolutionary-breakthrough/page.tsx',
  'src/blog/ai-2026-april-ultimate-breakthrough-revolution/page.tsx',
  'src/blog/ai-2026-autonomous-agent-factories/page.tsx',
  'src/blog/ai-2026-autonomous-business-intelligence-breakthrough/page.tsx',
  'src/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page.tsx',
  'src/blog/ai-2026-autonomous-enterprise-architecture/page.tsx',
  'src/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page.tsx',
  'src/blog/ai-2026-consensus-intelligence-breakthrough/page.tsx',
  'src/blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page.tsx',
  'src/blog/ai-2026-enterprise-breakthrough/page.tsx',
  'src/blog/ai-2026-february-mega-breakthrough-revolution/page.tsx',
  'src/blog/ai-2026-february-ultimate-consciousness-breakthrough/page.tsx',
  'src/blog/ai-2026-hyperconscious-computing-revolution/page.tsx',
  'src/blog/ai-autonomous-business-systems-2026/page.tsx',
  'src/blog/ai-cost-optimization-breakthrough-2026/page.tsx',
  'src/blog/ai-enterprise-transformation-ultimate-guide-2025/page.tsx',
  'src/blog/ai-powered-autonomous-business-processes-2026/page.tsx',
  'src/blog/ai-trends-2026-future-enterprise-transformation/page.tsx'
];

for (const file of blogFiles) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixBlogFile(fullPath);
  }
}

console.log('\n✅ Blog files fixed!');