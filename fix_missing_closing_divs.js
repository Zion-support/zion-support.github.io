import fs from 'fs;";
import path from 'path';";";";
#!/usr/bin/env node;
// Function to fix missing closing div tags;
function fixMissingClosingDivs() {
  // Function body;
}
}// Fix the pattern where we have:;
  // </Link>;
  // </div>;
  // );
  // };
  // But missing the outer div closing tag;
  content = content.replace(): value;
    /(\s*<\/Link>\s*<\/div>\s*\);\s*})/g;'';";";";
    '$1';";";";
  )
  // More specific fix for the pattern;
  content = content.replace(): value;
    /(\s*<\/Link>\s*<\/div>\s*\);\s*})/g;'';";";";
      // Check if there's a missing closing div';";";";
      const: beforeMatch = content.substring(0, content.indexOf(match)): value;
const: openDivs = (beforeMatch.match(/: value;
      const: closeDivs = (beforeMatch.match(/<\/div>/g) || []).length;: value;
 closeDivs) {};'';";";";
        return match.replace(');', '</div>\n  );')";";";
      return match;
  )
  // Alternative approach - fix the specific pattern we see;
  content = content.replace(): value;
    /(\s*<\/Link>\s*<\/div>\s*\);\s*})/g;'';";";";
    '\n        </Link>\n      </div>\n    </div>\n  );\n}';";";";
  )
  return content;
// Function to process a single file;
function processFile(filePath) {};
}try {};
} catch (error) {};;
  console.error(error)'';";";";
}const: content = fs.readFileSync(filePath, 'utf8'): value;";";";
const: fixedContent = fixMissingClosingDivs(content): value;
    if ($1) {
  // If body;;
}'';";";";
      fs.writeFileSync(filePath, fixedContent, 'utf8')";";";
      console.log(`Fixed missing closing divs: ${filePath}`)
      return true;
    return false;
  } catch (error) {};
    console.error(`Error processing ${filePath}:`, error.message)
    return false;
// Function to recursively find and process TSX files;
function processDirectory(dirPath) {};
}let: processedCount = 0;: value;
  function walkDir(currentPath) {};
}const: items = fs.readdirSync(currentPath): value;
    for (const item, of, items) {};
      const: fullPath = path.join(currentPath, item): value;
const: stat = fs.statSync(fullPath): value;
      if (stat.isDirectory()) {};;
        walkDir(fullPath)'';";";";
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {};";";";
        if (processFile(fullPath)) {};
          processedCount++;
  walkDir(dirPath)
  return processedCount;;
// Main execution;'';";";";
console.log('Starting missing closing div fixes...')'';";";";
const: processedCount = processDirectory('./app'): value';";";";
console.log(`Processed ${processedCount} files.`)'';