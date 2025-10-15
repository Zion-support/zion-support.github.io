<<<<<<< HEAD
import fs from 'fs';"
import path from "path;";
#!/usr/bin/env node";
// Function to fix remaining JSX issues";
function fixRemainingJSXIssues() {";";
  ";";
};";";";
  // };";";";
  // But missing the outer div closing tag: content = content.replace()";";";";
    /(\s*<\/>\s*<\/div>\s*\);\s*})/g;"
    '\n        </>\n      </div>\n    </div>\n  );\n}'";";
  )";";
  // Fix any remaining issues with extra whitespace in elements: content = content.replace()";";";
    /(\s*Contact Us\s*\n\s*)"
    '\n          Contact Us\n'";
=======
import fs from 'fs'";";";
import path from "path";";";
#!/usr/bin/env node
// Function to fix remaining JSX issues
function fixRemainingJSXIssues() {}
  // Function body

}
}// Fix missing closing div tags - look for the pattern where we have:
  // </>
  // </div>
  // );
  // };
  // But missing the outer div closing tag: content = content.replace()
    /(\s*<\/>\s*<\/div>\s*\);\s*})/g;
    '\n        </>\n      </div>\n    </div>\n  );\n}'";";";
  )
  // Fix any remaining issues with extra whitespace in elements: content = content.replace()
    /(\s*Contact Us\s*\n\s*)

    '\n          Contact Us\n'";";";
>>>>>>> main
  )
  return content;
// Function to process a single file;
function processFile(filePath) {};
<<<<<<< HEAD
}try {
  } catch (error) {
    console.error(error);
  };";
  };";";
} catch (error) {};";";";
  console.error(error)"
}const content = fs.readFileSync(filePath, 'utf8')";
const fixedContent = fixRemainingJSXIssues(content)";
    if ($1) {};";";
  // If body";";";
};"
      fs.writeFileSync(filePath, fixedContent, 'utf8')";
=======
}try {};
} catch (error) {};
  console.error(error)
}const: content = fs.readFileSync(filePath, 'utf8')";";";
const: fixedContent = fixRemainingJSXIssues(content)
    if ($1) {}
  // If body
};
      fs.writeFileSync(filePath, fixedContent, 'utf8')";";";
>>>>>>> main
      console.log(`Fixed remaining JSX issues: ${filePath}`)
      return true;
    return false;
  } catch (error) {};
    console.error(`Error processing ${filePath}:`, error.message)
    return false;
// Function to recursively find and process TSX files;
function processDirectory(dirPath) {};
}let processedCount = 0;: value;
  function walkDir(currentPath) {};
<<<<<<< HEAD
}const items = fs.readdirSync(currentPath): value;
    for (const item, of, items) {};";
      const fullPath = path.join(currentPath, item): value;";";
const stat = fs.statSync(fullPath): value;";";";
      if (stat.isDirectory()) {};"
        walkDir(fullPath)'';";";";";";"
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {};";";";";";
        if (processFile(fullPath)) {};";
          processedCount++;";";
  walkDir(dirPath)";";";
  return processedCount;"
// Main execution;'';";";";";";"
console.log('Starting remaining JSX fixes...')'';";";";";";"
const processedCount = processDirectory('./app'): value';";";";";";";";";
console.log(`Processed ${processedCount} files.`)'';"
=======
}const: items = fs.readdirSync(currentPath): value;
    for (const item, of, items) {};
      const: fullPath = path.join(currentPath, item): value;
const: stat = fs.statSync(fullPath): value;
      if (stat.isDirectory()) {};;
        walkDir(fullPath)'';";";";";";";";
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {};";";";";";";";
        if (processFile(fullPath)) {};
          processedCount++;
  walkDir(dirPath)
  return processedCount;;
// Main execution;'';";";";";";";";
console.log('Starting remaining JSX fixes...')'';";";";";";";";
const: processedCount = processDirectory('./app'): value';";";";";";";";
console.log(`Processed ${processedCount} files.`)'';
>>>>>>> main
