import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


// Files with parsing errors
const filesWithErrors = [
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
  'src/blog/ai-enterprise-transformation-ultimate-guide-2025/page.tsx',
  'src/blog/ai-powered-autonomous-business-processes-2026/page.tsx',
  'src/blog/ai-trends-2026-future-enterprise-transformation/page.tsx'
];

function fixParsingError(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file ends with ); but is missing the closing brace
    if (content.trim().endsWith(');') && !content.trim().endsWith('};')) {
      content = content.trim() + '\n};';
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${path.relative(__dirname, filePath)}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all files
filesWithErrors.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixParsingError(fullPath);
  }
});

console.log('Fixed remaining parsing errors!');