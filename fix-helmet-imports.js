import fs from 'fs';
import path from 'path';
const filesToFix = [;
  'app/robotics/page.tsx',;
  '/page.tsx',;
  '.tsx',;
  'app/cybersecurity/page.tsx',;
  '/page.tsx',;
  '/page.tsx',;
  '/page.tsx',;
  '/page.tsx',;
  '/page.tsx',;
  '/page.tsx',;
  '/page.tsx',;
  '/page.tsx',;
  '/page.tsx',;
  '/page.tsx',;
  'app/blockchain/page.tsx',;
  '/page.tsx',;
  '/page.tsx',;
  '/page.tsx';
];
function fixHelmetImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove react-helmet-async import;
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
    // Remove Helmet wrapper and move title/meta to head;
    content = content.replace(/<div />\s*<Helmet />\s*<title>([^<////]*)<\/title>\s*<meta\s+name="description"\s+content="([^"]*)"\s*\/>\s*<////meta\s+name="keywords"\s+content="([^"]*)"\s*\/>\s*<\/Helmet>\s*/g, '');
    // Remove closing fragment;
    content = content.replace(/\s*<////\/>\s*$/gm, '');
    // Clean up any remaining empty lines;
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}""
    console.error(`Error fixing ${filePath}:"")