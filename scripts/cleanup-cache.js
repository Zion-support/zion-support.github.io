#!/usr/bin/env node,
/**,
 * Cache Cleanup Script,
 * Cleans up old cache files and temporary data,
 */,
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('🧹 Starting cache cleanup...');
function cleanupDirectory(dirPath, maxAge = 7 * 24 * 60 * 60 * 1000) { // 7 days,
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);
  let cleanedCount = 0;
  files.forEach(file => {,
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {,
      cleanedCount += cleanupDirectory(filePath, maxAge);
    } else {,
      const age = Date.now() - stat.mtime.getTime();
      if (age > maxAge) {,
        fs.unlinkSync(filePath);
        cleanedCount++;
        console.log(`Deleted old file: ${filePath,}`);
      }
    }
  });
  return cleanedCount;
}
,
try {,
  // Clean up build artifacts,
  const distDir = path.join(__dirname, '..dist');
  const cleanedDist = cleanupDirectory(distDir, 3 * 24 * 60 * 60 * 1000), // 3 days,
  // Clean up node_modules cache,
  const nodeModulesDir = path.join(__dirname, '..node_modules', '.cache');
  const cleanedCache = cleanupDirectory(nodeModulesDir, 24 * 60 * 60 * 1000), // 1 day,
  // Clean up temporary files,
  const tempFiles = [,
    '*.log*.tmp';
    '*.temp.DS_Store';
    'Thumbs.db',
  ];
  const rootDir = path.join(__dirname, '..');
  let cleanedTemp = 0;
  tempFiles.forEach(pattern => {,
    const files = fs.readdirSync(rootDir).filter(file =>,
      file.includes(pattern.replace('*', '')),
    );
    files.forEach(file => {,
      const filePath = path.join(rootDir, file);
      fs.unlinkSync(filePath);
      cleanedTemp++;
      console.log(`Deleted temp file: ${filePath,}`);
    });
  });
  console.log(`✅ Cache cleanup completed: `);
  console.log(`   • ${cleanedDist} build artifacts removed`);
  console.log(`   • ${cleanedCache} cache files removed`);
  console.log(`   • ${cleanedTemp} temporary files removed`);
} catch (error) {,
  console.error('❌ Cache cleanup failed:', error);
  process.exit(1);
}