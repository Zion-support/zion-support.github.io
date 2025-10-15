const fs = require('fs');
const path = require('path');

// Function to fix a single file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the problematic pattern: export default function with return;
    if (content.includes('export default function') && content.includes('return;') && content.includes('},')) {
      console.log(`Fixing ${filePath}...`);
      
      const lines = content.split('\n');
      
      // Find the function declaration line
      let functionLineIndex = -1;
      let functionName = '';
      for (let i = 0; i < lines.length; i++) {
        const match = lines[i].match(/export default function (\w+)/);
        if (match) {
          functionLineIndex = i;
          functionName = match[1];
          break;
        }
      }
      
      if (functionLineIndex !== -1) {
        // Find the return; line
        let returnLineIndex = -1;
        for (let i = functionLineIndex; i < lines.length; i++) {
          if (lines[i].trim() === 'return;') {
            returnLineIndex = i;
            break;
          }
        }
        
        if (returnLineIndex !== -1) {
          // Find where the actual return statement starts (look for "return (")
          let actualReturnIndex = -1;
          for (let i = returnLineIndex; i < lines.length; i++) {
            if (lines[i].trim().startsWith('return (')) {
              actualReturnIndex = i;
              break;
            }
          }
          
          if (actualReturnIndex !== -1) {
            // Extract the data structures (between return; and actual return)
            const dataStructures = lines.slice(returnLineIndex + 1, actualReturnIndex).join('\n');
            
            // Extract the JSX content (from actual return to end)
            const jsxContent = lines.slice(actualReturnIndex).join('\n');
            
            // Reconstruct the file
            const beforeFunction = lines.slice(0, functionLineIndex).join('\n');
            
            // Add missing imports if needed
            let imports = beforeFunction;
            if (!imports.includes('FileText') && dataStructures.includes('FileText')) {
              imports = imports.replace('from \'lucide-react\';', 'from \'lucide-react\';');
              // Add missing imports
              const missingImports = ['FileText', 'BarChart3', 'Receipt', 'TrendingUp', 'Shield', 'Users', 'Clock', 'Star', 'Zap', 'Leaf', 'Database', 'Cpu', 'Brain', 'Eye', 'Video', 'Mic', 'ChartBar', 'Cloud', 'Lock', 'Mail', 'Package', 'File', 'Magnet', 'Activity', 'Folder', 'ShieldCheck', 'Calendar', 'Settings', 'Workflow'];
              const existingImports = imports.match(/import \{([^}]+)\}/);
              if (existingImports) {
                const currentImports = existingImports[1].split(',').map(s => s.trim());
                const newImports = [...new Set([...currentImports, ...missingImports.filter(imp => dataStructures.includes(imp))])];
                imports = imports.replace(/import \{([^}]+)\}/, `import { ${newImports.join(', ')} }`);
              }
            }
            
            const newContent = imports + '\n\n' + dataStructures + '\n\nexport default function ' + functionName + '() {\n  ' + jsxContent;
            
            fs.writeFileSync(filePath, newContent);
            console.log(`Fixed ${filePath}`);
            return true;
          }
        }
      }
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all page.tsx files in the app directory
const appDir = path.join(__dirname, 'app');
const files = [];

function findPageFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findPageFiles(fullPath);
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
}

findPageFiles(appDir);

console.log(`Found ${files.length} page.tsx files`);

let fixedCount = 0;
for (const file of files) {
  if (fixPageFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);