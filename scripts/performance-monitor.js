
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log('📊 Performance monitoring started...');

// Monitor bundle size
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  const files = fs.readdirSync(distPath);
  let totalSize = 0;
  
  files.forEach(file => {
    const filePath = path.join(distPath, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      totalSize += stats.size;
      // console.log(`📁 ${file}: ${(stats.size / 1024).toFixed(2)} KB`);
    }
  });
  
  // console.log(`📦 Total bundle size: ${(totalSize / 1024).toFixed(2)} KB`);
  
  // Check if bundle size is within acceptable limits
  const maxSize = 500 * 1024; // 500KB
  if (totalSize > maxSize) {
    // console.warn('⚠️  Bundle size exceeds recommended limit of 500KB');
  } else {
    // console.log('✅ Bundle size is within acceptable limits');
  }
} else {
  // console.log('❌ Dist folder not found. Run "npm run build" first.');
}
