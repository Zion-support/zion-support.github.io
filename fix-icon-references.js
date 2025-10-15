import fs from 'fs';
import path from 'path';

// Icon mapping from old names to new Lucide names
const iconMappings = {
  'ArrowRightIcon': 'ArrowRight',
  'PlayIcon': 'Play',
  'CpuChipIcon': 'Cpu',
  'ShieldCheckIcon': 'Shield',
  'CloudIcon': 'Cloud',
  'ChartBarIcon': 'BarChart3',
  'CheckIcon': 'CheckCircle',
  'StarIcon': 'Star'
};

// Function to fix icon references in a file
function fixIconReferences(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Replace all icon references
    for (const [oldName, newName] of Object.entries(iconMappings)) {
      const regex = new RegExp(`<${oldName}(\\s[^>]*)?>`, 'g');
      if (content.includes(oldName)) {
        content = content.replace(regex, `<${newName}$1>`);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed icon references in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively process all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixIconReferences(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting to fix icon references...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed icon references in ${fixedCount} files.`);