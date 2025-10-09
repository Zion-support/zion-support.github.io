const fs = require('fs');
const path = require('path');

// Find all files that contain merge conflict markers
const findFiles = (dir, files = []) => {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findFiles(filePath, files);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
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

    // Remove merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      // Remove entire conflict blocks
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>>[^\n]*/g, '');
      // Remove any remaining conflict markers
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>>[^\n]*/g, '');
      content = content.replace(/=======[\s\S]*?>>>>>>>[^\n]*/g, '');
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
      content = content.replace(/=======/g, '');
      content = content.replace(/>>>>>>>[^\n]*/g, '');
      
      // Clean up extra whitespace
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
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