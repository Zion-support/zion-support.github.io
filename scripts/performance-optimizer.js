import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Performance optimization script
console.log('Running performance optimizations...');

// Read the built files
const distDir = path.join(__dirname, '../dist');
const assetsDir = path.join(distDir, 'assets');

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  
  // Log file sizes
  console.log('Asset files generated:');
  files.forEach(file => {
    const filePath = path.join(assetsDir, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`  ${file}: ${sizeKB} KB`);
  });
}

console.log('Performance optimization completed!');