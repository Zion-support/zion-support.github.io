const fs = require('fs');
const path = require('path');

// Find all page.tsx files that use ContentPromotionBanner
const findFilesWithContentPromotionBanner = (dir) => {
  const files = [];
  
  const walkDir = (currentDir) => {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item === 'page.tsx') {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('ContentPromotionBanner')) {
          files.push(fullPath);
        }
      }
    }
  };
  
  walkDir(dir);
  return files;
};

// Fix a single file
const fixFile = (filePath) => {
  console.log(`Fixing ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace ContentPromotionBanner import with NewContentPromotionBanner
  content = content.replace(/import ContentPromotionBanner from ['"][^'"]*ContentPromotionBanner['"];/g, 'import NewContentPromotionBanner from \'../../components/NewContentPromotionBanner\';');
  
  // Replace ContentPromotionBanner usage with NewContentPromotionBanner
  content = content.replace(/<ContentPromotionBanner[^>]*\/>/g, '<NewContentPromotionBanner />');
  
  // Replace multi-line ContentPromotionBanner usage
  content = content.replace(/<ContentPromotionBanner[^>]*>[\s\S]*?<\/ContentPromotionBanner>/g, '<NewContentPromotionBanner />');
  
  fs.writeFileSync(filePath, content);
};

// Main execution
const appDir = '/workspace/app';
const filesToFix = findFilesWithContentPromotionBanner(appDir);

console.log(`Found ${filesToFix.length} files to fix`);

filesToFix.forEach(fixFile);

console.log('All files fixed!');