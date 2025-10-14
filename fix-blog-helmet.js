import fs from 'fs';
const blogFiles = [;
  'app//page.tsx',;
  'app//page.tsx',;
  'app//page.tsx',;
  'app//page.tsx';
];
function fixBlogHelmet(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove react-helmet-async import;
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
    // Remove Helmet wrapper;
    content = content.replace(/<div />\s*<Helmet />[\s\S]*?<\/Helmet>\s*/g, '');
    // Remove closing fragment;
    content = content.replace(/\s*<////\/>\s*$/gm, '');
    // Clean up any remaining empty lines;
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    fs.writeFileSync(filePath, content);
    console.log(`Fixed blog: ${filePath}""
    console.error(`Error fixing ${filePath}:"")