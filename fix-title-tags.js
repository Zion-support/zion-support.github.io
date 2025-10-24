const fs = require('fs');
const path = require('path');

// Function to fix missing title closing tags
function fixTitleTags(content) {
  let fixed = content;
  
  // Fix missing closing title tags
  fixed = fixed.replace(/<title>([^<]+)$/gm, '<title>$1</title>');
  
  // Fix missing closing Head tags
  fixed = fixed.replace(/<Head>\s*<title>([^<]+)<\/title>\s*<meta[^>]*\/>\s*$/gm, '<Head>\n        <title>$1</title>\n        <meta name="description" content="Professional services by Zion Tech Group." />\n      </Head>');
  
  // Fix missing closing tags for other elements
  fixed = fixed.replace(/<h1[^>]*>([^<]+)$/gm, '<h1 className="text-4xl font-bold text-white mb-6">$1</h1>');
  fixed = fixed.replace(/<p[^>]*>([^<]+)$/gm, '<p className="text-lg text-gray-300 mb-8">$1</p>');
  
  // Fix missing closing Link tags
  fixed = fixed.replace(/<Link[^>]*>([^<]+)$/gm, '<Link\n            href="/contact"\n            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"\n          >\n            $1\n            <ArrowRight className="ml-2 h-5 w-5" />\n          </Link>');
  
  return fixed;
}

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixTitleTags(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        fixedCount += fixFilesInDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting title tag fixes...');
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);