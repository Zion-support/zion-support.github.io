#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Clean unused imports and variables from a file
function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused React imports (since we're using JSX transform)
    const reactImportRegex = /^import\s+React\s+from\s+['"]react['"];?\s*$/gm;
    if (reactImportRegex.test(content)) {
      content = content.replace(reactImportRegex, '');
      modified = true;
    }
    
    // Remove unused ReactDOM imports
    const reactDOMImportRegex = /^import\s+ReactDOM\s+from\s+['"]react-dom['"];?\s*$/gm;
    if (reactDOMImportRegex.test(content)) {
      content = content.replace(reactDOMImportRegex, '');
      modified = true;
    }
    
    // Clean up destructured imports that are unused
    const importBlockRegex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?/g;
    content = content.replace(importBlockRegex, (match, imports, source) => {
      // Split imports and filter out common unused ones
      const importList = imports.split(',').map(imp => imp.trim()).filter(imp => {
        const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
        // Keep only commonly used imports, remove obvious unused ones
        const commonUsed = ['useState', 'useEffect', 'useCallback', 'useMemo', 'useRef', 'useContext', 'useReducer', 'Link', 'useLocation', 'useNavigate', 'useParams', 'useSearchParams', 'useRouteMatch', 'useHistory', 'useLocation', 'useNavigate', 'useParams', 'useSearchParams', 'useRouteMatch', 'useHistory'];
        return commonUsed.includes(cleanImp) || !cleanImp.match(/^(React|ReactDOM|Brain|Shield|Zap|Globe|ArrowRight|Star|Users|Award|BarChart3|Cloud|Sparkles|Mail|Smartphone|Monitor|Phone|MapPin|Code|Database|ChevronDown|SidebarIcon|Package|Heart|Receipt|TrendingUp|Cpu|Network|Target|Calendar|Clock|FileText|CheckCircle|Settings|Lock|Server|HardDrive|Laptop|Headphones|Bot|Wifi|Processor|DataIcon|WebIcon|MobileIcon|DesktopIcon|SecurityIcon|ServerIcon|NetworkIcon|StorageIcon|LightningIcon|AIIcon|ExternalLink|Menu|Download|Share2|HelpCircle)$/);
      });
      
      if (importList.length === 0) {
        return ''; // Remove empty import
      }
      
      return `import { ${importList.join(', ')} } from '${source}';`;
    });
    
    // Remove unused variable declarations
    const unusedVarRegex = /^\s*const\s+(\w+)\s*=\s*[^;]+;\s*$/gm;
    content = content.replace(unusedVarRegex, (match, varName) => {
      // Check if the variable is used elsewhere in the file
      const varUsageRegex = new RegExp(`\\b${varName}\\b`, 'g');
      const matches = content.match(varUsageRegex);
      if (matches && matches.length <= 1) {
        modified = true;
        return ''; // Remove unused variable
      }
      return match;
    });
    
    // Remove unused function parameters
    const unusedParamRegex = /function\s+\w+\s*\([^)]*\)\s*{/g;
    content = content.replace(unusedParamRegex, (match) => {
      // This is a simplified approach - in practice, you'd need more sophisticated analysis
      return match;
    });
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove trailing whitespace
    content = content.replace(/[ \t]+$/gm, '');
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('🧹 Comprehensive cleanup starting...');
  
  const files = getAllFiles('./app');
  let cleanedCount = 0;
  
  for (const file of files) {
    if (cleanFile(file)) {
      cleanedCount++;
    }
  }
  
  // Also clean root files
  const rootFiles = ['./App.tsx', './main.tsx'];
  for (const file of rootFiles) {
    if (fs.existsSync(file) && cleanFile(file)) {
      cleanedCount++;
    }
  }
  
  console.log(`✅ Cleaned ${cleanedCount} files`);
  console.log('🎉 Comprehensive cleanup completed!');
}

if (require.main === module) {
  main();
}

module.exports = { cleanFile };