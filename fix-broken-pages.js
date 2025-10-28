import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = glob.sync('app/**/*.tsx', { cwd: '/workspace' });

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Check if file has PageComponent reference but no PageComponent function
  if (content.includes('<PageComponent') && !content.includes('function PageComponent()')) {
    // Extract the page name from the file path
    const pathParts = file.split('/');
    const pageName = pathParts[pathParts.length - 2] || 'Page';
    
    // Create a proper PageComponent function
    const pageComponentFunction = `function PageComponent() {
  return (
    <div>
      <h1>${pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
      <p>Professional ${pageName.replace(/-/g, ' ')} services by Zion Tech Group</p>
    </div>
  );
}`;

    // Insert the PageComponent function before the export default
    content = content.replace(
      /export default function Wrapped/,
      `${pageComponentFunction}\n\nexport default function Wrapped`
    );
    
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed broken page: ${file}`);
  }
});

console.log('Broken page fixes completed');