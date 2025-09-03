const fs = require('fs');
const path = require('path');

// Function to fix Link issues in a file
function fixLinkIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if Link is already imported
    const hasLinkImport = content.includes("import Link from 'next/link'");

    // Fix <a href="/..."> to <Link href="/...">
    const linkPattern = /<a\s+href=['"]([^'"]*\/[^'"]*)['"]([^>]*)>/g;
    if (linkPattern.test(content)) {
      content = content.replace(linkPattern, '<Link href="$1"$2>');
      modified = true;

      // Add Link import if not present
      if (!hasLinkImport) {
        const importMatch = content.match(/import\s+React[^]*;/);
        if (importMatch) {
          content = content.replace(
            importMatch[0],
            importMatch[0] + "\nimport Link from 'next/link';"
          )}
      }
    }

    // Fix closing </a> tags that should be </Link>
    const closingPattern = /<\/a>/g;
    if (closingPattern.test(content)) {
      content = content.replace(closingPattern, '</Link>');
      modified = true}

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed Link issues in: ${filePath}`);
      return true}
    return false} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}

// Files to fix
const filesToFix = [
  './pages/index.p.tsx',
  './pages/privacy.tsx',
  './pages/terms.tsx' ];

console.log('Fixing Link issues...');
let fixedCount = 0;

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixLinkIssues(file)) {
      fixedCount++}
  } else {
    console.log(`File not found: ${file}`)}
});

console.log(`Fixed ${fixedCount} files`);
