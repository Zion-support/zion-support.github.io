  // Fix missing closing tags and malformed JSX
  // Pattern 1: Fix missing closing tags for common elements
  const tagPatterns = [
    { open: /<h3[^>]*>/g, close: '</h3>' },
    { open: /<p[^>]*>/g, close: '</p>' },
    { open: /<section[^>]*>/g, close: '</section>' },
    { open: /<div[^>]*>/g, close: '</div>' },
    { open: /<Router[^>]*>/g, close: '</Router>' },
    { open: /<HelmetProvider[^>]*>/g, close: '</HelmetProvider>' }
  ];

  // Fix malformed className attributes (missing spaces)
  fixed = fixed.replace(/className="([^"]*?)([a-zA-Z])([a-zA-Z])/g, (match, prefix, char1, char2) => {
    if (char1 === char1.toUpperCase() && char2 === char2.toLowerCase()) {
      return `className="${prefix}${char1} ${char2}`;
    }
    return match;
  });

  // Fix missing spaces in className attributes
  fixed = fixed.replace(/className="([^"]*?)([a-zA-Z])([0-9])/g, 'className="$1$2 $3');
  fixed = fixed.replace(/className="([^"]*?)([0-9])([a-zA-Z])/g, 'className="$1$2 $3');
  
  // Fix malformed grid classes
  fixed = fixed.replace(/grid-cols-(\d+)gap-/g, 'grid-cols-$1 gap-');
  fixed = fixed.replace(/gap-(\d+)mt-/g, 'gap-$1 mt-');
  
  // Fix malformed padding/margin classes
  fixed = fixed.replace(/px-(\d+)py-/g, 'px-$1 py-');
  fixed = fixed.replace(/py-(\d+)px-/g, 'py-$1 px-');
  fixed = fixed.replace(/p-(\d+)mt-/g, 'p-$1 mt-');
  fixed = fixed.replace(/mt-(\d+)p-/g, 'mt-$1 p-');
  
  // Fix malformed text color classes
  fixed = fixed.replace(/text-([a-zA-Z]+)(\d+)/g, 'text-$1-$2');
  fixed = fixed.replace(/bg-([a-zA-Z]+)(\d+)/g, 'bg-$1-$2');
  fixed = fixed.replace(/border-([a-zA-Z]+)(\d+)/g, 'border-$1-$2');
  
  // Fix malformed rounded classes
  fixed = fixed.replace(/rounded-lgp-/g, 'rounded-lg p-');
  fixed = fixed.replace(/rounded-lgp(\d+)/g, 'rounded-lg p$1');
  
  // Fix malformed font classes
  fixed = fixed.replace(/font-boldtext-/g, 'font-bold text-');
  fixed = fixed.replace(/font-semiboldtext-/g, 'font-semibold text-');
  
  // Fix malformed container classes
  fixed = fixed.replace(/mx-autopx-/g, 'mx-auto px-');
  fixed = fixed.replace(/mx-autopx-(\d+)py-/g, 'mx-auto px-$1 py-');
  
  // Fix malformed gradient classes
  fixed = fixed.replace(/from-slate-9\s+00via-purple-9\s+0\s+0to-slate-9\s+0\s+0/g, 'from-slate-900 via-purple-900 to-slate-900');
  
  // Fix malformed text classes
  fixed = fixed.replace(/text-gray-30\s+0/g, 'text-gray-300');
  fixed = fixed.replace(/text-blue-90\s+0/g, 'text-blue-900');
  fixed = fixed.replace(/text-green-90\s+0/g, 'text-green-900');
  fixed = fixed.replace(/text-purple-90\s+0/g, 'text-purple-900');
  fixed = fixed.replace(/text-blue-70\s+0/g, 'text-blue-700');
  fixed = fixed.replace(/text-green-70\s+0/g, 'text-green-700');
  fixed = fixed.replace(/text-purple-70\s+0/g, 'text-purple-700');
  
  // Fix malformed border classes
  fixed = fixed.replace(/border-blue-20\s+0/g, 'border-blue-200');
  fixed = fixed.replace(/border-green-20\s+0/g, 'border-green-200');
  fixed = fixed.replace(/border-purple-20\s+0/g, 'border-purple-200');
  
  // Fix malformed background classes
  fixed = fixed.replace(/bg-blue-50\s+/g, 'bg-blue-50 ');
  fixed = fixed.replace(/bg-green-50\s+/g, 'bg-green-50 ');
  fixed = fixed.replace(/bg-purple-50\s+/g, 'bg-purple-50 ');
  
  // Fix missing closing tags by analyzing the structure
  const lines = fixed.split('\n');
  const fixedLines = [];
  const tagStack = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // Check for opening tags
    const openTagMatch = trimmedLine.match(/<(\w+)(?:\s[^>]*)?(?:>|$)/);
    if (openTagMatch && !trimmedLine.includes('/>')) {
      const tagName = openTagMatch[1];
      // Skip self-closing tags and script/style tags
      if (!['img', 'br', 'hr', 'input', 'meta', 'link', 'script', 'style'].includes(tagName)) {
        tagStack.push({ tag: tagName, line: i });
      }
    }
    
    // Check for closing tags
    const closeTagMatch = trimmedLine.match(/<\/(\w+)>/);
    if (closeTagMatch) {
      const tagName = closeTagMatch[1];
      // Remove from stack
      const lastIndex = tagStack.findLastIndex(item => item.tag === tagName);
      if (lastIndex !== -1) {
        tagStack.splice(lastIndex, 1);
      }
    }
    
    fixedLines.push(line);
  }
  
  // Add missing closing tags
  while (tagStack.length > 0) {
    const { tag } = tagStack.pop();
    fixedLines.push(`</${tag}>`);
  }
  
  fixed = fixedLines.join('\n');
  
  // Fix specific malformed patterns
  fixed = fixed.replace(/;\s*$/gm, '');
  fixed = fixed.replace(/>\s*;\s*$/gm, '>');
  
  // Fix missing closing parentheses in JSX
  const openParens = (fixed.match(/\(/g) || []).length;
  const closeParens = (fixed.match(/\)/g) || []).length;
  if (openParens > closeParens) {
    const missingParens = openParens - closeParens;
    fixed += ')'.repeat(missingParens);
  }
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/^\s*<\/>/gm, '</>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/\s*>/g, '');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJSXErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
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
  console.log('Starting JSX error fixing...');
  
  // Get all TypeScript/JavaScript files in the app directory
  const pattern = 'app/**/*.{ts,tsx,js,jsx}';
  const files = glob.sync(pattern);
  
  let fixedCount = 0;
  let totalFiles = files.length;
  
  console.log(`Found ${totalFiles} files to process`);
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('JSX error fixing completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixJSXErrors, processFile };
