import fs from 'fs';
import { execSync } from 'child_process';

// Function to clean up duplicate content and malformed JSX
function cleanupFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate closing tags
    content = content.replace(/<\/div className="[^"]*">/g, '');
    content = content.replace(/<\/section className="[^"]*">/g, '');
    content = content.replace(/<\/Helmet>/g, '');
    content = content.replace(/<\/title>/g, '');
    content = content.replace(/<\/meta[^>]*>/g, '');

    // Fix malformed JSX comments
    content = content.replace(/<\/\/[^>]*>/g, '');
    content = content.replace(/<\/\/[^>]*>/g, '');

    // Fix duplicate attributes
    content = content.replace(/className="([^"]*)"[^>]*className="[^"]*"/g, 'className="$1"');
    content = content.replace(/name="([^"]*)"[^>]*name="[^"]*"/g, 'name="$1"');
    content = content.replace(/content="([^"]*)"[^>]*content="[^"]*"/g, 'content="$1"');

    // Fix duplicate closing tags
    content = content.replace(/<\/div><\/div>/g, '</div>');
    content = content.replace(/<\/section><\/section>/g, '</section>');

    // Fix malformed self-closing tags
    content = content.replace(/<([^>]+)><\/\1>/g, '<$1 />');

    // Fix duplicate content in JSX
    content = content.replace(/(<[^>]+>)\s*\1/g, '$1');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      modified = true;
    }
    return modified;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Get all TSX files
const files = execSync('find app -name "*.tsx"', { encoding: 'utf8' }).trim().split('\n');

let cleanedCount = 0;
files.forEach(file => {
  if (cleanupFile(file)) {
    cleanedCount++;
  }
});

console.log(`Cleaned ${cleanedCount} files`);