import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript/JavaScript files in the app directory
const files = await glob('app/**/*.{ts,tsx,js,jsx}');

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove react-helmet-async import
  content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?\s*\n?/g, '');
  content = content.replace(/import\s*Helmet\s*from\s*['"]react-helmet-async['"];?\s*\n?/g, '');
  
  // Remove Helmet usage
  content = content.replace(/<Helmet[^>]*>[\s\S]*?<\/Helmet>/g, '');
  content = content.replace(/<Helmet[^>]*\/>/g, '');
  
  // Clean up extra whitespace
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  fs.writeFileSync(filePath, content);
  console.log(`Processed: ${file}`);
}

console.log('Helmet removal completed!');