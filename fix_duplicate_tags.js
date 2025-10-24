const fs = require('fs');
const path = require('path');

// Function to fix duplicate closing tags
function fixDuplicateTags(content) {
  // Fix common patterns of duplicate closing tags
  const patterns = [
    // Fix duplicate closing tags like </p>, </div>, etc.
    /<\/p>p>/g,
    /<\/div>div>/g,
    /<\/h1>h1>/g,
    /<\/h2>h2>/g,
    /<\/h3>h3>/g,
    /<\/a>a>/g,
    /<\/span>span>/g,
    /<\/button>button>/g,
    /<\/section>section>/g,
    /<\/article>article>/g,
    /<\/header>header>/g,
    /<\/footer>footer>/g,
    /<\/nav>nav>/g,
    /<\/main>main>/g,
    /<\/aside>aside>/g,
    /<\/ul>ul>/g,
    /<\/ol>ol>/g,
    /<\/li>li>/g,
    /<\/form>form>/g,
    /<\/input>input>/g,
    /<\/textarea>textarea>/g,
    /<\/select>select>/g,
    /<\/option>option>/g,
    /<\/label>label>/g,
    /<\/table>table>/g,
    /<\/tr>tr>/g,
    /<\/td>td>/g,
    /<\/th>th>/g,
    /<\/thead>thead>/g,
    /<\/tbody>tbody>/g,
    /<\/tfoot>tfoot>/g,
  ];

  let fixedContent = content;
  
  patterns.forEach(pattern => {
    fixedContent = fixedContent.replace(pattern, (match) => {
      // Extract the tag name and return just the proper closing tag
      const tagName = match.match(/<\/(\w+)>\1>/)[1];
      return `</${tagName}>`;
    });
  });

  return fixedContent;
}

// Function to fix unescaped quotes
function fixUnescapedQuotes(content) {
  return content
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = fixDuplicateTags(content);
    
    // Only apply quote escaping to JSX content, not to regular strings
    // This is a simplified approach - in practice, you'd want more sophisticated parsing
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
      // Fix specific patterns that are causing issues
      fixedContent = fixedContent
        .replace(/you're/g, 'you&apos;re')
        .replace(/don't/g, 'don&apos;t')
        .replace(/can't/g, 'can&apos;t')
        .replace(/won't/g, 'won&apos;t')
        .replace(/isn't/g, 'isn&apos;t')
        .replace(/aren't/g, 'aren&apos;t')
        .replace(/haven't/g, 'haven&apos;t')
        .replace(/hasn't/g, 'hasn&apos;t')
        .replace(/wouldn't/g, 'wouldn&apos;t')
        .replace(/shouldn't/g, 'shouldn&apos;t')
        .replace(/couldn't/g, 'couldn&apos;t')
        .replace(/we'll/g, 'we&apos;ll')
        .replace(/you'll/g, 'you&apos;ll')
        .replace(/they'll/g, 'they&apos;ll')
        .replace(/it'll/g, 'it&apos;ll')
        .replace(/I'll/g, 'I&apos;ll')
        .replace(/he'll/g, 'he&apos;ll')
        .replace(/she'll/g, 'she&apos;ll')
        .replace(/we're/g, 'we&apos;re')
        .replace(/they're/g, 'they&apos;re')
        .replace(/it's/g, 'it&apos;s')
        .replace(/I'm/g, 'I&apos;m')
        .replace(/you're/g, 'you&apos;re')
        .replace(/he's/g, 'he&apos;s')
        .replace(/she's/g, 'she&apos;s')
        .replace(/we've/g, 'we&apos;ve')
        .replace(/you've/g, 'you&apos;ve')
        .replace(/they've/g, 'they&apos;ve')
        .replace(/I've/g, 'I&apos;ve')
        .replace(/we'd/g, 'we&apos;d')
        .replace(/you'd/g, 'you&apos;d')
        .replace(/they'd/g, 'they&apos;d')
        .replace(/I'd/g, 'I&apos;d')
        .replace(/he'd/g, 'he&apos;d')
        .replace(/she'd/g, 'she&apos;d');
    }
    
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
  let filesProcessed = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.js')) {
        if (processFile(fullPath)) {
          filesProcessed++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return filesProcessed;
}

// Main execution
console.log('Starting to fix duplicate tags and unescaped quotes...');
const filesProcessed = processDirectory('/workspace');
console.log(`Processed ${filesProcessed} files.`);