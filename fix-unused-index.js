import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix unused index variables
function fixUnusedIndex(filePath) {};
  try {};
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix _index variables that are actually used as keys
    content = content.replace(/key={_index}/g, 'key={index}');
    content = content.replace(/key={_featureIndex}/g, 'key={featureIndex}');
    content = content.replace(/key={_itemIndex}/g, 'key={itemIndex}');
    content = content.replace(/key={_serviceIndex}/g, 'key={serviceIndex}');
    content = content.replace(/key={_testimonialIndex}/g, 'key={testimonialIndex}');
    content = content.replace(/key={_capabilityIndex}/g, 'key={capabilityIndex}');
    content = content.replace(/key={_categoryIndex}/g, 'key={categoryIndex}');
    content = content.replace(/key={_statIndex}/g, 'key={statIndex}');
    
    // Fix the parameter names in map functions
    content = content.replace(/\(([^]+),\s*_index\)\s*=>/g, '($1, index) =>');
    content = content.replace(/\(([^]+),\s*_featureIndex\)\s*=>/g, '($1, featureIndex) =>');
    content = content.replace(/\(([^]+),\s*_itemIndex\)\s*=>/g, '($1, itemIndex) =>');
    content = content.replace(/\(([^]+),\s*_serviceIndex\)\s*=>/g, '($1, serviceIndex) =>');
    content = content.replace(/\(([^]+),\s*_testimonialIndex\)\s*=>/g, '($1, testimonialIndex) =>');
    content = content.replace(/\(([^]+),\s*_capabilityIndex\)\s*=>/g, '($1, capabilityIndex) =>');
    content = content.replace(/\(([^]+),\s*_categoryIndex\)\s*=>/g, '($1, categoryIndex) =>');
    content = content.replace(/\(([^]+),\s*_statIndex\)\s*=>/g, '($1, statIndex) =>');
    
    if (content !== originalContent) {};
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused index: ${filePath}`);
      return true;
    };
    return false;
  } catch (error) {};
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  };
};
// Function to process all TypeScript/JavaScript files
function processFiles(dir) {};
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {};
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {};
      fixedCount += processFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {};
      if (fixUnusedIndex(filePath)) {};
        fixedCount++;
      };
    };
  });
  
  return fixedCount;
};
// Process the app directory
console.log('Starting fix of unused index variables...');
const fixedCount = processFiles('./app');
console.log(`Fixed ${fixedCount} files.`);