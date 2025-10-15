import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX structure issues
function fixJsxStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    
    // Fix malformed return statements in map functions
    newContent = newContent.replace(/^  return \(/gm, '                return (');
    
    // Fix unclosed JSX tags by checking for common patterns
    const lines = newContent.split('\n');
    const fixedLines = [];
    let openTags = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for opening tags
      const openTagMatch = line.match(/<(\w+)(?:\s[^>]*)?(?:>|$)/);
      if (openTagMatch && !line.includes('</')) {
        openTags.push(openTagMatch[1]);
      }
      
      // Check for closing tags
      const closeTagMatch = line.match(/<\/(\w+)>/);
      if (closeTagMatch) {
        const tagName = closeTagMatch[1];
        const lastOpenIndex = openTags.lastIndexOf(tagName);
        if (lastOpenIndex !== -1) {
          openTags.splice(lastOpenIndex, 1);
        }
      }
      
      // Fix malformed closing tags
      if (line.includes('</section>') && openTags.includes('div')) {
        // Replace </section> with </div> if we have an open div
        const divIndex = openTags.lastIndexOf('div');
        if (divIndex !== -1) {
          openTags.splice(divIndex, 1);
          fixedLines.push(line.replace('</section>', '</div>'));
          continue;
        }
      }
      
      if (line.includes('</div>') && openTags.includes('section')) {
        // Replace </div> with </section> if we have an open section
        const sectionIndex = openTags.lastIndexOf('section');
        if (sectionIndex !== -1) {
          openTags.splice(sectionIndex, 1);
          fixedLines.push(line.replace('</div>', '</section>'));
          continue;
        }
      }
      
      fixedLines.push(line);
    }
    
    newContent = fixedLines.join('\n');
    
    // Only write if content changed
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed JSX structure in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Find all TypeScript/JavaScript files in the app directory
  const files = await glob('app/**/*.{ts,tsx,js,jsx}');

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  for (const file of files) {
    const fullPath = path.join(process.cwd(), file);
    if (fixJsxStructure(fullPath)) {
      fixedCount++;
    }
  }

  console.log(`Fixed JSX structure in ${fixedCount} files`);
}

main().catch(console.error);