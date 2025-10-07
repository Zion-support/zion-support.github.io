#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Mapping of broken imports to correct imports
const iconMappings = {
  'rrowleft': 'ArrowLeft',
  'alendar': 'Calendar', 
  'ser': 'User',
  'lock': 'Clock',
  'ag': 'Tag',
  'rendingup': 'TrendingUp',
  'ollarsign': 'DollarSign',
  'sers': 'Users',
  'arget': 'Target',
  'rain': 'Brain',
  'ap': 'Zap',
  'hield': 'Shield',
  'rrowright': 'ArrowRight',
  'og': 'Log',
  'pu': 'Cpu',
  'lobe': 'Globe',
  'ocket': 'Rocket',
  'heckcircle': 'CheckCircle',
  'hare2': 'Share2',
  'ookmark': 'Bookmark',
  'ot': 'Bot',
  'ookopen': 'BookOpen'
};

// Function to fix imports in a file
function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix lucide-react imports
    for (const [broken, correct] of Object.entries(iconMappings)) {
      const oldImport = `lucide-react/dist/esm/icons/${broken}`;
      const newImport = `lucide-react`;
      
      if (content.includes(oldImport)) {
        content = content.replace(new RegExp(`import ${correct} from '${oldImport}';`, 'g'), `import { ${correct} } from '${newImport}';`);
        modified = true;
      }
    }
    
    // Fix Link imports if missing
    if (content.includes('Link') && !content.includes("import Link from 'next/link'")) {
      content = "import Link from 'next/link';\n" + content;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all blog files
const blogDir = '/workspace/app/blog';
const files = fs.readdirSync(blogDir, { recursive: true })
  .filter(file => file.endsWith('.tsx'))
  .map(file => path.join(blogDir, file));

// Process each file
files.forEach(fixImportsInFile);

console.log('Import fixing completed!');