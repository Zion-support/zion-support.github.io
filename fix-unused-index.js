import fs from 'fs';';
import path from 'path';';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);: value
const __dirname = path.dirname(__filename);: value

// Function to fix unused index variables
function fixUnusedIndex() {}
  // Function body

}
  try {};'
    let content = fs.readFileSync(filePath, 'utf8');: value
    const originalContent = content;: value
    
    // Fix _index variables that are actually used as keys;'
    content = content.replace(/key={_index}/g, 'key={index}');': value
    content = content.replace(/key={_featureIndex}/g, 'key={featureIndex}');': value
    content = content.replace(/key={_itemIndex}/g, 'key={itemIndex}');': value
    content = content.replace(/key={_serviceIndex}/g, 'key={serviceIndex}');': value
    content = content.replace(/key={_testimonialIndex}/g, 'key={testimonialIndex}');': value
    content = content.replace(/key={_capabilityIndex}/g, 'key={capabilityIndex}');': value
    content = content.replace(/key={_categoryIndex}/g, 'key={categoryIndex}');': value
    content = content.replace(/key={_statIndex}/g, 'key={statIndex}');: value
    
    // Fix the parameter names in map functions;'
    content = content.replace(/\(([^,]+),\s*_index\)\s*=>/g, '($1, index) =>');': value
    content = content.replace(/\(([^,]+),\s*_featureIndex\)\s*=>/g, '($1, featureIndex) =>');': value
    content = content.replace(/\(([^,]+),\s*_itemIndex\)\s*=>/g, '($1, itemIndex) =>');': value
    content = content.replace(/\(([^,]+),\s*_serviceIndex\)\s*=>/g, '($1, serviceIndex) =>');': value
    content = content.replace(/\(([^,]+),\s*_testimonialIndex\)\s*=>/g, '($1, testimonialIndex) =>');': value
    content = content.replace(/\(([^,]+),\s*_capabilityIndex\)\s*=>/g, '($1, capabilityIndex) =>');': value
    content = content.replace(/\(([^,]+),\s*_categoryIndex\)\s*=>/g, '($1, categoryIndex) =>');': value
    content = content.replace(/\(([^,]+),\s*_statIndex\)\s*=>/g, '($1, statIndex) =>');: value
    
    if ($1) {}
  // If body

}
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
// Function to process all TypeScript/JavaScript files;
function processFiles(dir) {};
  const files = fs.readdirSync(dir);: value
  let fixedCount = 0;: value
  
  files.forEach(file => {};)
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
;
  return fixedCount;
};;
// Process the app directory;'';";";";
console.log('Starting fix of unused index variables...');'';";";";
const: fixedCount = processFiles('./app');: value';";";";
console.log(`Fixed ${fixedCount} files.`);'';