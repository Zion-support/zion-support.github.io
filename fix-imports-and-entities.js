const fs = require('fs');
const path = require('path');

// Function to fix imports and unescaped entities properly
function fixImportsAndEntities(content) {
  // Fix broken imports first
  content = content.replace(/from &apos;([^']+)'/g, "from '$1'");
  content = content.replace(/from &quot;([^"]+)&quot;/g, 'from "$1"');
  content = content.replace(/import {([^}]+)} from &apos;([^']+)'/g, "import {$1} from '$2'");
  content = content.replace(/import {([^}]+)} from &quot;([^"]+)&quot;/g, 'import {$1} from "$2"');
  
  // Fix broken object properties
  content = content.replace(/name: &quot;([^"]+)&quot;/g, 'name: "$1"');
  content = content.replace(/path: &quot;([^"]+)&quot;/g, 'path: "$1"');
  content = content.replace(/title: &quot;([^"]+)&quot;/g, 'title: "$1"');
  content = content.replace(/description: &quot;([^"]+)&quot;/g, 'description: "$1"');
  
  // Fix unescaped entities in JSX text content only (not in imports or object properties)
  // This is more targeted to avoid breaking imports
  content = content.replace(/([^&])'([^;])/g, '$1&apos;$2');
  
  // Fix specific common patterns in JSX text
  content = content.replace(/Don&apos;t/g, 'Don&apos;t');
  content = content.replace(/can&apos;t/g, 'can&apos;t');
  content = content.replace(/won&apos;t/g, 'won&apos;t');
  content = content.replace(/you&apos;re/g, 'you&apos;re');
  content = content.replace(/we&apos;re/g, 'we&apos;re');
  content = content.replace(/they&apos;re/g, 'they&apos;re');
  content = content.replace(/it&apos;s/g, 'it&apos;s');
  content = content.replace(/that&apos;s/g, 'that&apos;s');
  content = content.replace(/what&apos;s/g, 'what&apos;s');
  content = content.replace(/here&apos;s/g, 'here&apos;s');
  content = content.replace(/there&apos;s/g, 'there&apos;s');
  content = content.replace(/let&apos;s/g, 'let&apos;s');
  content = content.replace(/I&apos;m/g, 'I&apos;m');
  content = content.replace(/I&apos;ll/g, 'I&apos;ll');
  content = content.replace(/I&apos;ve/g, 'I&apos;ve');
  content = content.replace(/I&apos;d/g, 'I&apos;d');
  content = content.replace(/you&apos;ll/g, 'you&apos;ll');
  content = content.replace(/you&apos;ve/g, 'you&apos;ve');
  content = content.replace(/you&apos;d/g, 'you&apos;d');
  content = content.replace(/we&apos;ll/g, 'we&apos;ll');
  content = content.replace(/we&apos;ve/g, 'we&apos;ve');
  content = content.replace(/we&apos;d/g, 'we&apos;d');
  content = content.replace(/they&apos;ll/g, 'they&apos;ll');
  content = content.replace(/they&apos;ve/g, 'they&apos;ve');
  content = content.replace(/they&apos;d/g, 'they&apos;d');
  content = content.replace(/isn&apos;t/g, 'isn&apos;t');
  content = content.replace(/aren&apos;t/g, 'aren&apos;t');
  content = content.replace(/wasn&apos;t/g, 'wasn&apos;t');
  content = content.replace(/weren&apos;t/g, 'weren&apos;t');
  content = content.replace(/hasn&apos;t/g, 'hasn&apos;t');
  content = content.replace(/haven&apos;t/g, 'haven&apos;t');
  content = content.replace(/hadn&apos;t/g, 'hadn&apos;t');
  content = content.replace(/doesn&apos;t/g, 'doesn&apos;t');
  content = content.replace(/don&apos;t/g, 'don&apos;t');
  content = content.replace(/didn&apos;t/g, 'didn&apos;t');
  content = content.replace(/wouldn&apos;t/g, 'wouldn&apos;t');
  content = content.replace(/couldn&apos;t/g, 'couldn&apos;t');
  content = content.replace(/shouldn&apos;t/g, 'shouldn&apos;t');
  content = content.replace(/mightn&apos;t/g, 'mightn&apos;t');
  content = content.replace(/mustn&apos;t/g, 'mustn&apos;t');
  content = content.replace(/shan&apos;t/g, 'shan&apos;t');
  content = content.replace(/needn&apos;t/g, 'needn&apos;t');
  content = content.replace(/daren&apos;t/g, 'daren&apos;t');
  content = content.replace(/oughtn&apos;t/g, 'oughtn&apos;t');
  content = content.replace(/mayn&apos;t/g, 'mayn&apos;t');
  content = content.replace(/ain&apos;t/g, 'ain&apos;t');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixImportsAndEntities(content);
    
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

// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting import and entity fixes...');
const fixedCount = processDirectory('./app');
const fixedCountSrc = processDirectory('./src');
console.log(`Fixed ${fixedCount + fixedCountSrc} files`);