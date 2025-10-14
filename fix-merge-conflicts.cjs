const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the HEAD version (first part)
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
      
      // Clean up any remaining merge conflict markers
      content = content.replace(/<<<<<<< HEAD\n?/g, '');
      content = content.replace(/=======\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
      
      modified = true;
    }

    // Fix common syntax errors
    if (content.includes('classNam e =')) {
      content = content.replace(/classNam e =/g, 'className=');
      modified = true;
    }
    
    if (content.includes('targe t =')) {
      content = content.replace(/targe t =/g, 'target=');
      modified = true;
    }
    
    if (content.includes('re l =')) {
      content = content.replace(/re l =/g, 'rel=');
      modified = true;
    }
    
    if (content.includes('placeholde r =')) {
      content = content.replace(/placeholde r =/g, 'placeholder=');
      modified = true;
    }
    
    if (content.includes('t o =')) {
      content = content.replace(/t o =/g, 'to=');
      modified = true;
    }
    
    if (content.includes('key =')) {
      content = content.replace(/key =/g, 'key=');
      modified = true;
    }
    
    if (content.includes('max-w-7 xl')) {
      content = content.replace(/max-w-7 xl/g, 'max-w-7xl');
      modified = true;
    }
    
    if (content.includes('gridgrid-cols')) {
      content = content.replace(/gridgrid-cols/g, 'grid grid-cols');
      modified = true;
    }
    
    if (content.includes('flexitems-center')) {
      content = content.replace(/flexitems-center/g, 'flex items-center');
      modified = true;
    }
    
    if (content.includes('space-x-3')) {
      content = content.replace(/space-x-3/g, 'space-x-3');
    }
    
    if (content.includes('rounded-lgp-6')) {
      content = content.replace(/rounded-lgp-6/g, 'rounded-lg p-6');
      modified = true;
    }
    
    if (content.includes('text-xlfont-bold')) {
      content = content.replace(/text-xlfont-bold/g, 'text-xl font-bold');
      modified = true;
    }
    
    if (content.includes('text-smtext-gray-400')) {
      content = content.replace(/text-smtext-gray-400/g, 'text-sm text-gray-400');
      modified = true;
    }
    
    if (content.includes('text-whitefont-medium')) {
      content = content.replace(/text-whitefont-medium/g, 'text-white font-medium');
      modified = true;
    }
    
    if (content.includes('w-3 h-3ml-1')) {
      content = content.replace(/w-3 h-3ml-1/g, 'w-3 h-3 ml-1');
      modified = true;
    }
    
    if (content.includes('byZion')) {
      content = content.replace(/byZion/g, 'by Zion');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (!['node_modules', '.git', 'dist', 'out', '.next'].includes(item)) {
        processDirectory(fullPath);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      fixMergeConflicts(fullPath);
    }
  }
}

// Start processing from the app directory
console.log('Starting merge conflict fixes...');
processDirectory('./app');
console.log('Merge conflict fixes completed!');