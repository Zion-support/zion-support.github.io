const fs = require('fs');
const path = require('path');

// Function to fix className spacing issues
function fixClassNameSpacing(content) {
  // Fix common patterns where spaces are missing between CSS classes
  const patterns = [
    // Fix patterns like "text-gray-600dark:text-gray-400" -> "text-gray-600 dark:text-gray-400"
    { regex: /([a-zA-Z0-9-]+)(dark:[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "w-3h-3" -> "w-3 h-3"
    { regex: /([a-zA-Z0-9-]+)([a-zA-Z])([0-9-]+)/g, replacement: '$1$2$3' },
    // Fix patterns like "px-4py-2" -> "px-4 py-2"
    { regex: /([a-zA-Z0-9-]+)([a-zA-Z])([0-9-]+)/g, replacement: '$1$2$3' },
    // Fix patterns like "bg-red-600hover:bg-red-700" -> "bg-red-600 hover:bg-red-700"
    { regex: /([a-zA-Z0-9-]+)(hover:[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(focus:[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(disabled:[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "text-white rounded-lg" -> "text-white rounded-lg" (already correct)
    // Fix patterns like "w-6h-6" -> "w-6 h-6"
    { regex: /w-([0-9]+)h-([0-9]+)/g, replacement: 'w-$1 h-$2' },
    // Fix patterns like "h-5w-5" -> "h-5 w-5"
    { regex: /h-([0-9]+)w-([0-9]+)/g, replacement: 'h-$1 w-$2' },
    // Fix patterns like "text-2xl font-bold" -> "text-2xl font-bold" (already correct)
    // Fix patterns like "bg-white dark:bg-gray-800rounded-lg" -> "bg-white dark:bg-gray-800 rounded-lg"
    { regex: /([a-zA-Z0-9-]+)(rounded-lg)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(shadow-lg)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(p-[0-9]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(m-[0-9]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(px-[0-9]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(py-[0-9]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(mx-[0-9]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(my-[0-9]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(mb-[0-9]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(mt-[0-9]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(ml-[0-9]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(mr-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "text-sm text-gray-600" -> "text-sm text-gray-600" (already correct)
    // Fix patterns like "bg-gray-100px-2py-1" -> "bg-gray-100 px-2 py-1"
    { regex: /([a-zA-Z0-9-]+)(px-[0-9]+)(py-[0-9]+)/g, replacement: '$1 $2 $3' },
    // Fix patterns like "text-xs bg-gray-100" -> "text-xs bg-gray-100" (already correct)
    // Fix patterns like "max-w-2xl w-full" -> "max-w-2xl w-full" (already correct)
    // Fix patterns like "grid-cols-1md:grid-cols-4" -> "grid-cols-1 md:grid-cols-4"
    { regex: /([a-zA-Z0-9-]+)(md:[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(lg:[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(sm:[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(xl:[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "space-y-2max-h-64" -> "space-y-2 max-h-64"
    { regex: /([a-zA-Z0-9-]+)(max-h-[0-9]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(min-h-[0-9]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(max-w-[0-9]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(min-w-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "overflow-y-auto" -> "overflow-y-auto" (already correct)
    // Fix patterns like "flex-1" -> "flex-1" (already correct)
    // Fix patterns like "items-center space-x-2mb-2" -> "items-center space-x-2 mb-2"
    { regex: /([a-zA-Z0-9-]+)(mb-[0-9]+)/g, replacement: '$1 $2' },
    { regex: /([a-zA-Z0-9-]+)(mt-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "text-gray-600dark:text-gray-400mb-2" -> "text-gray-600 dark:text-gray-400 mb-2"
    { regex: /([a-zA-Z0-9-]+)(mb-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "bg-blue-500animate-pulse" -> "bg-blue-500 animate-pulse"
    { regex: /([a-zA-Z0-9-]+)(animate-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "text-red-600bg-red-50" -> "text-red-600 bg-red-50"
    { regex: /([a-zA-Z0-9-]+)(bg-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "border-red-200" -> "border-red-200" (already correct)
    // Fix patterns like "text-center" -> "text-center" (already correct)
    // Fix patterns like "font-semiboldmb-3" -> "font-semibold mb-3"
    { regex: /([a-zA-Z0-9-]+)(mb-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "p-3borderrounded-lg" -> "p-3 border rounded-lg"
    { regex: /([a-zA-Z0-9-]+)(border)([a-zA-Z0-9-]+)/g, replacement: '$1 $2 $3' },
    // Fix patterns like "items-centerspace-x-3" -> "items-center space-x-3"
    { regex: /([a-zA-Z0-9-]+)(space-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "w-20bg-gray-200" -> "w-20 bg-gray-200"
    { regex: /([a-zA-Z0-9-]+)(bg-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "rounded-fullh-2" -> "rounded-full h-2"
    { regex: /([a-zA-Z0-9-]+)(h-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "bg-blue-600h-2" -> "bg-blue-600 h-2"
    { regex: /([a-zA-Z0-9-]+)(h-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "rounded-full" -> "rounded-full" (already correct)
    // Fix patterns like "text-xstext-gray-500" -> "text-xs text-gray-500"
    { regex: /([a-zA-Z0-9-]+)(text-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "space-x-2mb-1" -> "space-x-2 mb-1"
    { regex: /([a-zA-Z0-9-]+)(mb-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "text-xs bg-green-100" -> "text-xs bg-green-100" (already correct)
    // Fix patterns like "text-green-800px-2py-1" -> "text-green-800 px-2 py-1"
    { regex: /([a-zA-Z0-9-]+)(px-[0-9]+)(py-[0-9]+)/g, replacement: '$1 $2 $3' },
    // Fix patterns like "rounded" -> "rounded" (already correct)
    // Fix patterns like "text-sm text-gray-700mb-2" -> "text-sm text-gray-700 mb-2"
    { regex: /([a-zA-Z0-9-]+)(mb-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "text-xstext-gray-500" -> "text-xs text-gray-500"
    { regex: /([a-zA-Z0-9-]+)(text-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "flexspace-x-1" -> "flex space-x-1"
    { regex: /([a-zA-Z0-9-]+)(space-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "bg-gray-100px-2py-1" -> "bg-gray-100 px-2 py-1"
    { regex: /([a-zA-Z0-9-]+)(px-[0-9]+)(py-[0-9]+)/g, replacement: '$1 $2 $3' },
    // Fix patterns like "rounded" -> "rounded" (already correct)
    // Fix patterns like "p-3borderrounded-lg" -> "p-3 border rounded-lg"
    { regex: /([a-zA-Z0-9-]+)(border)([a-zA-Z0-9-]+)/g, replacement: '$1 $2 $3' },
    // Fix patterns like "text-xstext-gray-500" -> "text-xs text-gray-500"
    { regex: /([a-zA-Z0-9-]+)(text-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "h4className" -> "h4 className"
    { regex: /([a-zA-Z0-9-]+)(className)/g, replacement: '$1 $2' },
    // Fix patterns like "h3className" -> "h3 className"
    { regex: /([a-zA-Z0-9-]+)(className)/g, replacement: '$1 $2' },
    // Fix patterns like "h2className" -> "h2 className"
    { regex: /([a-zA-Z0-9-]+)(className)/g, replacement: '$1 $2' },
    // Fix patterns like "font-mediummb-1" -> "font-medium mb-1"
    { regex: /([a-zA-Z0-9-]+)(mb-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "text-sm text-gray-600mb-2" -> "text-sm text-gray-600 mb-2"
    { regex: /([a-zA-Z0-9-]+)(mb-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "text-xs text-green-600" -> "text-xs text-green-600" (already correct)
    // Fix patterns like "bg-green-50p-2" -> "bg-green-50 p-2"
    { regex: /([a-zA-Z0-9-]+)(p-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "rounded" -> "rounded" (already correct)
    // Fix patterns like "mt-2text-xs" -> "mt-2 text-xs"
    { regex: /([a-zA-Z0-9-]+)(text-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "text-green-600bg-green-50" -> "text-green-600 bg-green-50"
    { regex: /([a-zA-Z0-9-]+)(bg-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "p-2rounded" -> "p-2 rounded"
    { regex: /([a-zA-Z0-9-]+)(rounded)/g, replacement: '$1 $2' },
    // Fix patterns like "inset-0bg-black" -> "inset-0 bg-black"
    { regex: /([a-zA-Z0-9-]+)(bg-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "bg-opacity-50flex" -> "bg-opacity-50 flex"
    { regex: /([a-zA-Z0-9-]+)(flex)/g, replacement: '$1 $2' },
    // Fix patterns like "items-center justify-centerz-50" -> "items-center justify-center z-50"
    { regex: /([a-zA-Z0-9-]+)(z-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "bg-white rounded-lg p-6max-w-2xl" -> "bg-white rounded-lg p-6 max-w-2xl"
    { regex: /([a-zA-Z0-9-]+)(max-w-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "w-full mx-4max-h-96" -> "w-full mx-4 max-h-96"
    { regex: /([a-zA-Z0-9-]+)(max-h-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "overflow-y-auto" -> "overflow-y-auto" (already correct)
    // Fix patterns like "h3className" -> "h3 className"
    { regex: /([a-zA-Z0-9-]+)(className)/g, replacement: '$1 $2' },
    // Fix patterns like "text-lg font-semibold" -> "text-lg font-semibold" (already correct)
    // Fix patterns like "text-gray-500hover:text-gray-700" -> "text-gray-500 hover:text-gray-700"
    { regex: /([a-zA-Z0-9-]+)(hover:[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "space-y-4" -> "space-y-4" (already correct)
    // Fix patterns like "text-sm font-mediumtext-gray-600" -> "text-sm font-medium text-gray-600"
    { regex: /([a-zA-Z0-9-]+)(text-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "text-smtext-gray-900" -> "text-sm text-gray-900"
    { regex: /([a-zA-Z0-9-]+)(text-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "text-xs bg-gray-100" -> "text-xs bg-gray-100" (already correct)
    // Fix patterns like "p-3rounded" -> "p-3 rounded"
    { regex: /([a-zA-Z0-9-]+)(rounded)/g, replacement: '$1 $2' },
    // Fix patterns like "overflow-x-auto" -> "overflow-x-auto" (already correct)
    // Fix patterns like "grid-cols-2gap-4" -> "grid-cols-2 gap-4"
    { regex: /([a-zA-Z0-9-]+)(gap-[0-9]+)/g, replacement: '$1 $2' },
    // Fix patterns like "text-sm font-mediumtext-gray-600" -> "text-sm font-medium text-gray-600"
    { regex: /([a-zA-Z0-9-]+)(text-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "text-smtext-gray-900" -> "text-sm text-gray-900"
    { regex: /([a-zA-Z0-9-]+)(text-[a-zA-Z0-9-]+)/g, replacement: '$1 $2' },
    // Fix patterns like "text-sm text-gray-900truncate" -> "text-sm text-gray-900 truncate"
    { regex: /([a-zA-Z0-9-]+)(truncate)/g, replacement: '$1 $2' },
  ];

  let fixedContent = content;
  
  patterns.forEach(pattern => {
    fixedContent = fixedContent.replace(pattern.regex, pattern.replacement);
  });

  return fixedContent;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixClassNameSpacing(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to find all TypeScript/JavaScript files in src/components
function findComponentFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const componentsDir = path.join(__dirname, 'src', 'components');
const files = findComponentFiles(componentsDir);

console.log(`Found ${files.length} component files to process...`);

files.forEach(processFile);

console.log('Done processing files!');