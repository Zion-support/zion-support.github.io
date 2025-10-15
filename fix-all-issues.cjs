#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

// Common unused imports to remove
const UNUSED_IMPORTS = [
  'Zap', 'Brain', 'MapPin', 'Download', 'Pause', 'RefreshCw', 'Eye', 'Filter',
  'Calendar', 'Target', 'Lock', 'Users', 'Award', 'TrendingUp', 'Database',
  'Radio', 'Antenna', 'Router', 'Server', 'Network', 'Activity', 'Cpu',
  'AlertTriangle', 'FileText', 'Smartphone', 'Cloud', 'Key', 'Search',
  'MessageCircle', 'Globe', 'Settings', 'Clock', 'Languages', 'Send',
  'ThumbsUp', 'ThumbsDown', 'AlertCircle', 'CheckSquare', 'XCircle',
  'ShoppingCart', 'CreditCard', 'Truck', 'Heart', 'StarIcon', 'ShoppingBag',
  'Tag', 'Headphones', 'Bell', 'Gift', 'memo', 'lazy', 'Suspense'
];

// Function to clean a single file
function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove console statements
    const consoleRegex = /console\.(log|warn|error|info|debug)\([^)]*\);?\s*/g;
    if (content.match(consoleRegex)) {
      content = content.replace(consoleRegex, '');
      modified = true;
    }
    
    // Remove unused imports from import statements
    const lines = content.split('\n');
    const cleanedLines = [];
    
    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        let cleanedLine = line;
        let hasChanges = false;
        
        // Remove unused imports from destructuring
        for (const unusedImport of UNUSED_IMPORTS) {
          const regex = new RegExp(`\\b${unusedImport}\\b,?\\s*`, 'g');
          if (cleanedLine.match(regex)) {
            cleanedLine = cleanedLine.replace(regex, '');
            hasChanges = true;
          }
        }
        
        // Clean up the line
        cleanedLine = cleanedLine.replace(/,\s*,/g, ','); // Remove double commas
        cleanedLine = cleanedLine.replace(/,\s*}/g, '}'); // Remove trailing comma before }
        cleanedLine = cleanedLine.replace(/{\s*,/g, '{'); // Remove leading comma after {
        cleanedLine = cleanedLine.replace(/{\s*}/g, ''); // Remove empty destructuring
        
        // Only keep the line if it's not empty or just whitespace
        if (cleanedLine.trim() && !cleanedLine.match(/^import\s*{\s*}\s*from/)) {
          cleanedLines.push(cleanedLine);
        } else if (cleanedLine.trim()) {
          cleanedLines.push(cleanedLine);
        }
        
        if (hasChanges) {
          modified = true;
        }
      } else {
        cleanedLines.push(line);
      }
    }
    
    // Remove unused variable declarations
    let finalContent = cleanedLines.join('\n');
    
    for (const unusedImport of UNUSED_IMPORTS) {
      // Remove const declarations
      const constRegex = new RegExp(`const\\s+${unusedImport}\\s*=\\s*[^;]+;?\\s*`, 'g');
      if (finalContent.match(constRegex)) {
        finalContent = finalContent.replace(constRegex, '');
        modified = true;
      }
      
      // Remove let declarations
      const letRegex = new RegExp(`let\\s+${unusedImport}\\s*=\\s*[^;]+;?\\s*`, 'g');
      if (finalContent.match(letRegex)) {
        finalContent = finalContent.replace(letRegex, '');
        modified = true;
      }
    }
    
    // Fix export issues - ensure components are properly exported
    if (finalContent.includes('const ') && finalContent.includes('Page') && !finalContent.includes('export default')) {
      // Find the component name
      const componentMatch = finalContent.match(/const\s+(\w+Page)\s*=/);
      if (componentMatch) {
        const componentName = componentMatch[1];
        finalContent += `\n\nexport default ${componentName};`;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, finalContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('🚀 Starting comprehensive code cleanup...\n');
  
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let allFiles = [];
  for (const pattern of patterns) {
    const files = glob.sync(pattern);
    allFiles = allFiles.concat(files);
  }
  
  console.log(`Found ${allFiles.length} files to process...\n`);
  
  let processedCount = 0;
  let errorCount = 0;
  
  for (const file of allFiles) {
    if (cleanFile(file)) {
      processedCount++;
      console.log(`✅ Cleaned: ${file}`);
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`- Files cleaned: ${processedCount}`);
  console.log(`- Total files: ${allFiles.length}`);
  console.log(`- Errors: ${errorCount}`);
  
  console.log('\n🎉 Cleanup completed!');
}

if (require.main === module) {
  main();
}

module.exports = { cleanFile };
