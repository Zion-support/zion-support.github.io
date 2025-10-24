const fs = require('fs');
const path = require('path');

// Function to fix unescaped entities
function fixUnescapedEntities(content) {
  // Fix unescaped apostrophes in JSX text content
  content = content.replace(/([^&])'([^;])/g, '$1&apos;$2');
  
  // Fix unescaped quotes in JSX text content
  content = content.replace(/([^&])"([^;])/g, '$1&quot;$2');
  
  // Fix specific common patterns
  content = content.replace(/Don't/g, 'Don&apos;t');
  content = content.replace(/can't/g, 'can&apos;t');
  content = content.replace(/won't/g, 'won&apos;t');
  content = content.replace(/you're/g, 'you&apos;re');
  content = content.replace(/we're/g, 'we&apos;re');
  content = content.replace(/they're/g, 'they&apos;re');
  content = content.replace(/it's/g, 'it&apos;s');
  content = content.replace(/that's/g, 'that&apos;s');
  content = content.replace(/what's/g, 'what&apos;s');
  content = content.replace(/here's/g, 'here&apos;s');
  content = content.replace(/there's/g, 'there&apos;s');
  content = content.replace(/let's/g, 'let&apos;s');
  content = content.replace(/I'm/g, 'I&apos;m');
  content = content.replace(/I'll/g, 'I&apos;ll');
  content = content.replace(/I've/g, 'I&apos;ve');
  content = content.replace(/I'd/g, 'I&apos;d');
  content = content.replace(/you'll/g, 'you&apos;ll');
  content = content.replace(/you've/g, 'you&apos;ve');
  content = content.replace(/you'd/g, 'you&apos;d');
  content = content.replace(/we'll/g, 'we&apos;ll');
  content = content.replace(/we've/g, 'we&apos;ve');
  content = content.replace(/we'd/g, 'we&apos;d');
  content = content.replace(/they'll/g, 'they&apos;ll');
  content = content.replace(/they've/g, 'they&apos;ve');
  content = content.replace(/they'd/g, 'they&apos;d');
  content = content.replace(/isn't/g, 'isn&apos;t');
  content = content.replace(/aren't/g, 'aren&apos;t');
  content = content.replace(/wasn't/g, 'wasn&apos;t');
  content = content.replace(/weren't/g, 'weren&apos;t');
  content = content.replace(/hasn't/g, 'hasn&apos;t');
  content = content.replace(/haven't/g, 'haven&apos;t');
  content = content.replace(/hadn't/g, 'hadn&apos;t');
  content = content.replace(/doesn't/g, 'doesn&apos;t');
  content = content.replace(/don't/g, 'don&apos;t');
  content = content.replace(/didn't/g, 'didn&apos;t');
  content = content.replace(/wouldn't/g, 'wouldn&apos;t');
  content = content.replace(/couldn't/g, 'couldn&apos;t');
  content = content.replace(/shouldn't/g, 'shouldn&apos;t');
  content = content.replace(/mightn't/g, 'mightn&apos;t');
  content = content.replace(/mustn't/g, 'mustn&apos;t');
  content = content.replace(/shan't/g, 'shan&apos;t');
  content = content.replace(/needn't/g, 'needn&apos;t');
  content = content.replace(/daren't/g, 'daren&apos;t');
  content = content.replace(/oughtn't/g, 'oughtn&apos;t');
  content = content.replace(/mayn't/g, 'mayn&apos;t');
  content = content.replace(/ain't/g, 'ain&apos;t');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixUnescapedEntities(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed unescaped entities: ${filePath}`);
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
console.log('Starting unescaped entities fixes...');
const fixedCount = processDirectory('./app');
const fixedCountSrc = processDirectory('./src');
console.log(`Fixed unescaped entities in ${fixedCount + fixedCountSrc} files`);