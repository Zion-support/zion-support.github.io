import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create static HTML files from the server directory
const serverDir = path.join(__dirname, 'out', 'server', 'pages');
const outDir = path.join(__dirname, 'out');

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Copy HTML files from server/pages to out root
if (fs.existsSync(serverDir)) {
  const files = fs.readdirSync(serverDir);
  
  files.forEach(file => {
    if (file.endsWith('.html')) {
      const sourcePath = path.join(serverDir, file);
      const destPath = path.join(outDir, file);
      
      try {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied ${file} to out directory`);
      } catch (error) {
        console.error(`Error copying ${file}:`, error.message);
      }
    }
  });
} else {
  console.log('Server directory not found, creating basic HTML files...');
  
  // Create basic HTML files if server directory doesn't exist
  const pages = ['index.html', 'about.html', 'contact.html', 'services.html', 'services-advertising.html', '404.html'];
  
  pages.forEach(page => {
    const content = `<!DOCTYPE html>
<html>
<head>
  <title>Zion Tech Group</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <h1>Zion Tech Group</h1>
  <p>Page: ${page}</p>
  <p>This is a placeholder page. The full content will be available after the build process is fixed.</p>
</body>
</html>`;
    
    fs.writeFileSync(path.join(outDir, page), content);
    console.log(`Created ${page}`);
  });
}

console.log('Static files generation completed!');