import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Analyzing bundle size...');

const distPath = path.join(__dirname, '../dist');
const assetsPath = path.join(distPath, 'assets');

if (!fs.existsSync(assetsPath)) {
  console.log('No assets directory found. Run build first.');
  process.exit(1);
}

const files = fs.readdirSync(assetsPath);
const analysis = {
  totalSize: 0,
  files: [],
  recommendations: []
};

files.forEach(file => {
  const filePath = path.join(assetsPath, file);
  const stats = fs.statSync(filePath);
  const sizeInKB = Math.round(stats.size / 1024);
  
  analysis.totalSize += stats.size;
  analysis.files.push({
    name: file,
    size: stats.size,
    sizeKB: sizeInKB,
    type: path.extname(file)
  });
});

// Sort by size
analysis.files.sort((a, b) => b.size - a.size);

// Generate recommendations
if (analysis.totalSize > 1024 * 1024) { // 1MB
  analysis.recommendations.push('Bundle size is over 1MB. Consider code splitting.');
}

const largeFiles = analysis.files.filter(f => f.size > 100 * 1024); // 100KB
if (largeFiles.length > 0) {
  analysis.recommendations.push(`Large files detected: ${largeFiles.map(f => f.name).join(', ')}`);
}

// Check for unused dependencies
analysis.recommendations.push('Consider using bundle analyzer to identify unused code.');

console.log('\n=== Bundle Analysis ===');
console.log(`Total size: ${Math.round(analysis.totalSize / 1024)} KB`);
console.log(`Number of files: ${analysis.files.length}`);

console.log('\n=== Largest Files ===');
analysis.files.slice(0, 10).forEach(file => {
  console.log(`${file.name}: ${file.sizeKB} KB`);
});

console.log('\n=== Recommendations ===');
analysis.recommendations.forEach(rec => {
  console.log(`- ${rec}`);
});

// Write analysis to file
fs.writeFileSync(
  path.join(distPath, 'bundle-analysis.json'),
  JSON.stringify(analysis, null, 2)
);

console.log('\nBundle analysis complete. Results saved to dist/bundle-analysis.json');