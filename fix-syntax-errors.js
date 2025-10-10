import { glob } from 'glob';
// Function to fix JSX syntax errors
function fixJSXSyntax(content) {
  let fixed = content;
  // Fix missing closing tags by analyzing the structure
  const openTags = [];
  const lines = fixed.split('\n');
  let result = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    result.push(line);
    // Track opening tags
    const openTagMatch = line.match(/<(\w+)(?:\s[^>]*)?(?:>|$)/g);
    if (openTagMatch) {
      for (const tag of openTagMatch) {
        const tagName = tag.match(/<(\w+)/)?.[1];
        if (tagName && !tag.includes('/>') && !['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
          openTags.push(tagName);
        };
      };
    };
    // Track closing tags
    const closeTagMatch = line.match(/<\/(\w+)>/g);
    if (closeTagMatch) {
      for (const tag of closeTagMatch) {
        const tagName = tag.match(/<\/(\w+)>/)?.[1];
        if (tagName) {
          const lastIndex = openTags.lastIndexOf(tagName);
          if (lastIndex !== -1) {
            openTags.splice(lastIndex, 1);
          };
        };
      };
    };
  };
  // Add missing closing tags at the end
  for (let i = openTags.length - 1; i >= 0; i--) {
    result.push(`</${openTags[i]}>`);
  };
  return result.join('\n');
};
// Function to fix TypeScript interface issues
function fixTypeScriptSyntax(content) {
  let fixed = content;
  // Fix missing commas in interfaces
  fixed = fixed.replace(/(\w+:\s*[^,;}\n]+)\n\s*(\w+:\s*)/g, '$1,\n  $2');
  // Fix missing semicolons
  fixed = fixed.replace(/([^;}])\n\s*}/g, '$1;\n}');
  // Fix missing closing braces
  fixed = fixed.replace(/([^}])\n\s*$/g, '$1\n}');
  // Fix property signature issues
  fixed = fixed.replace(/(\w+)\s*:\s*([^,;}\n]+)(?=\n\s*[^:])/g, '$1: $2;');
  return fixed;
};
// Function to fix specific parsing errors
function fixParsingErrors(content) {
  let fixed = content;
  // Fix JSX expressions must have one parent element
  fixed = fixed.replace(/(\s*)<(\w+)([^>]*)>\s*\n\s*<(\w+)([^>]*)>/g, '$1<>\n$1  <$2$3>\n$1    <$4$5>');
  fixed = fixed.replace(/(\s*)<\/\w+>\s*\n\s*<\/\w+>\s*\n\s*<\/\w+>/g, '$1    </div>\n$1  </div>\n$1</>');
  // Fix missing closing tags for common elements
  const commonElements = ['div', 'section', 'main', 'article', 'header', 'footer', 'nav', 'aside'];
  for (const element of commonElements) {
    const regex = new RegExp(`<${element}([^>]*)>(?!.*</${element}>)`, 'g');
    fixed = fixed.replace(regex, (match, attrs) => {
      // Count opening and closing tags
      const openMatches = (fixed.match(new RegExp(`<${element}`, 'g')) || []).length;
      const closeMatches = (fixed.match(new RegExp(`</${element}>`, 'g')) || []).length;
      if (openMatches > closeMatches) {
        return match + `</${element}>`;
      };
      return match;
    });
  };
  // Fix missing commas in object literals
  fixed = fixed.replace(/([^,}])\n\s*}/g, '$1,\n}');
  // Fix missing parentheses
  fixed = fixed.replace(/([^)])\n\s*}/g, '$1)\n}');
  return fixed;
};
// Main function to process files
async function processFiles() {
  console.log('Starting syntax error fixes...');
  const patterns = [
];
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  let processedCount = 0;
  let errorCount = 0;
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: [
        'node_modules/**',
        'dist/**',
        '*.disabled/**',
        '*-disabled/**',
        'backup*/**',
        '**/*.backup',
        '**/*.broken'
      ]
    });
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        // Check if file has syntax issues
        if (content.includes('JSX expressions must have one parent element') || 
            content.includes('Property or signature expected') ||
            content.includes('Expected corresponding JSX closing tag') ||
            content.includes('Declaration or statement expected')) {
          console.log(`Processing syntax errors in: ${file}`);
          let fixed = fixJSXSyntax(content);
          fixed = fixTypeScriptSyntax(fixed);
          fixed = fixParsingErrors(fixed);
          fs.writeFileSync(file, fixed);
          processedCount++;
        };
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorCount++;
import path from 'path';
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix missing commas before properties in object literals
    // Pattern: property: value\n        property: value (missing comma)
    content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, '$1: $&\n        $2:');
    // More specific pattern for missing commas
    content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, (match, p1, p2) => {
      const before = match.substring(0, match.lastIndexOf('\n'));
      const after = match.substring(match.lastIndexOf('\n'));
      return before + ',' + after;
    });
    // Fix specific patterns we know are problematic
    content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, (match, p1, p2) => {
      const lines = match.split('\n');
      if (lines.length >= 2) {
        const firstLine = lines[0];
        const secondLine = lines[1];
        if (!firstLine.includes(',') && secondLine.trim().startsWith(p2 + ':')) {
          return firstLine + ',' + '\n' + secondLine;
        };
      };
      return match;
    });
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    };
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  };
};
function findFilesWithSyntaxErrors(dir) {
  const files = [];
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      };
    };
  };
traverse(dir);
  return files;
};
// Main execution
const files = findFilesWithSyntaxErrors('/workspace');
console.log(`Checking ${files.length} files for syntax errors`);
let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  };
};
console.log(`Fixed ${fixedCount} files`);
