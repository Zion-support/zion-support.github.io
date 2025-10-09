const fs = require('fs');
const path = require('path');

// Find all files that contain cursor references
const findFiles = (dir, files = []) => {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findFiles(filePath, files);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      files.push(filePath);
    }
  }
  return files;
};

const files = findFiles('/workspace/app');
let fixedCount = 0;

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove cursor references
    if (content.includes('cursor/analyze-improve-and-deploy-application-cde4')) {
      content = content.replace(/\s*cursor\/analyze-improve-and-deploy-application-cde4\s*/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);