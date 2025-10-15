<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs'"
import path from "path"
=======
<<<<<<< HEAD
import fs from 'fs';"
import path from "path;";";
#!/usr/bin/env node";";
// Function to fix duplicate closing tags";";";
function fixDuplicateClosingTags() {";";";
  ";";";";
}"
  // Fix any other duplicate closing tags: content = content.replace(/<\/div>\s*<\/div>/g, '</div>')";"
  content = content.replace(/<\/span>\s*<\/span>/g, '</span>')";"
  content = content.replace(/<\/p>\s*<\/p>/g, '</p>')";"
  content = content.replace(/<\/h1>\s*<\/h1>/g, '</h1>')";"
  content = content.replace(/<\/h2>\s*<\/h2>/g, '</h2>')";"
  content = content.replace(/<\/h3>\s*<\/h3>/g, '</h3>')";"
  content = content.replace(/<\/h4>\s*<\/h4>/g, '</h4>')";"
  content = content.replace(/<\/h5>\s*<\/h5>/g, '</h5>')";"
  content = content.replace(/<\/h6>\s*<\/h6>/g, '</h6>')";
  return content
// Function to process a single file
function processFile(filePath) {};
}try {
  } catch (error) {
    console.error(error);
  };";
  };";";
} catch (error) {};";";";
  console.error(error)"
}const content = fs.readFileSync(filePath, 'utf8')";
const fixedContent = fixDuplicateClosingTags(content)";
    if ($1) {};";";
  // If body";";";
};"
      fs.writeFileSync(filePath, fixedContent, 'utf8')";
=======
import fs from 'fs'";";";
import path from "path";";";
>>>>>>> main
=======
import fs from 'fs'"";
import path from \"path\";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
#!/usr/bin/env node
// Function to fix duplicate closing tags
function fixDuplicateClosingTags() {}
  // Function body
}
<<<<<<< HEAD
<<<<<<< HEAD
}// Fix duplicate closing tags: content = content.replace(/<\/>\s*<\/>/g, '</>')"
  // Fix any other duplicate closing tags: content = content.replace(/<\/div>\s*<\/div>/g, '</div>')"
  content = content.replace(/<\/span>\s*<\/span>/g, '</span>')"
  content = content.replace(/<\/p>\s*<\/p>/g, '</p>')"
  content = content.replace(/<\/h1>\s*<\/h1>/g, '</h1>')"
  content = content.replace(/<\/h2>\s*<\/h2>/g, '</h2>')"
  content = content.replace(/<\/h3>\s*<\/h3>/g, '</h3>')"
  content = content.replace(/<\/h4>\s*<\/h4>/g, '</h4>')"
  content = content.replace(/<\/h5>\s*<\/h5>/g, '</h5>')"
  content = content.replace(/<\/h6>\s*<\/h6>/g, '</h6>')"
=======
}// Fix duplicate closing tags: content = content.replace(/<\/>\s*<\/>/g, '</>')";";";
  // Fix any other duplicate closing tags: content = content.replace(/<\/div>\s*<\/div>/g, '</div>')";";";
  content = content.replace(/<\/span>\s*<\/span>/g, '</span>')";";";
  content = content.replace(/<\/p>\s*<\/p>/g, '</p>')";";";
  content = content.replace(/<\/h1>\s*<\/h1>/g, '</h1>')";";";
  content = content.replace(/<\/h2>\s*<\/h2>/g, '</h2>')";";";
  content = content.replace(/<\/h3>\s*<\/h3>/g, '</h3>')";";";
  content = content.replace(/<\/h4>\s*<\/h4>/g, '</h4>')";";";
  content = content.replace(/<\/h5>\s*<\/h5>/g, '</h5>')";";";
  content = content.replace(/<\/h6>\s*<\/h6>/g, '</h6>')";";";
>>>>>>> main
=======
}// Fix duplicate closing tags: content = content.replace(/<\/>\s*<\/>/g, '</>')";
  // Fix any other duplicate closing tags: content = content.replace(/<\/div>\s*<\/div>/g, '</div>')";
  content = content.replace(/<\/span>\s*<\/span>/g, '</span>')";
  content = content.replace(/<\/p>\s*<\/p>/g, '</p>')";
  content = content.replace(/<\/h1>\s*<\/h1>/g, '</h1>')";
  content = content.replace(/<\/h2>\s*<\/h2>/g, '</h2>')";
  content = content.replace(/<\/h3>\s*<\/h3>/g, '</h3>')";
  content = content.replace(/<\/h4>\s*<\/h4>/g, '</h4>')";
  content = content.replace(/<\/h5>\s*<\/h5>/g, '</h5>')";
  content = content.replace(/<\/h6>\s*<\/h6>/g, '</h6>')";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  return content
// Function to process a single file
function processFile(filePath) {}
}try {}
} catch (error) {}
  console.error(error)
<<<<<<< HEAD
<<<<<<< HEAD
}const  content = fs.readFileSync(filePath, 'utf8')"
const  fixedContent = fixDuplicateClosingTags(content)
    if ($1) {}
  // If body
}
      fs.writeFileSync(filePath, fixedContent, 'utf8')"
=======
}const: content = fs.readFileSync(filePath, 'utf8')";";";
const: fixedContent = fixDuplicateClosingTags(content)
    if ($1) {}
  // If body
};
      fs.writeFileSync(filePath, fixedContent, 'utf8')";";";
>>>>>>> main
>>>>>>> main
=======
}const content  = fs.readFileSync(filePath, 'utf8')";
const fixedContent  = fixDuplicateClosingTags(content)
    if ($1) {}
  // If body
};
      fs.writeFileSync(filePath, fixedContent, 'utf8')";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      console.log(`Fixed duplicate closing tags: ${filePath}`)
      return true
    return false
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message)
<<<<<<< HEAD
    return false
// Function to recursively find and process TSX files
function processDirectory(dirPath) {}
}let  processedCount = 0;: value
  function walkDir(currentPath) {}
}const  items = fs.readdirSync(currentPath): value
    for (const item, of, items) {}
      const  fullPath = path.join(currentPath, item): value
const  stat = fs.statSync(fullPath): value
      if (stat.isDirectory()) {};
        walkDir(fullPath)'';";"
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {};";";"
        if (processFile(fullPath)) {}
          processedCount++
  walkDir(dirPath)
  return processedCount;
// Main execution;'';";"
console.log('Starting duplicate closing tag fixes...')'';";"
const  processedCount = processDirectory('./app'): value';";"
console.log(`Processed ${processedCount} files.`)''
=======
    return false;
// Function to recursively find and process TSX files;
function processDirectory(dirPath) {};
<<<<<<< HEAD
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
console.log('Starting duplicate closing tag fixes...')'';";";";";";"
const processedCount = processDirectory('./app'): value';";";";";";";";";
console.log(`Processed ${processedCount} files.`)'';"
=======
}const: items = fs.readdirSync(currentPath): value;
=======
}let: processedCount = 0: value;
  function walkDir(currentPath) {};
}const items  = fs.readdirSync(currentPath): value;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    for (const item, of, items) {};
      const fullPath  = path.join(currentPath, item): value;
const stat  = fs.statSync(fullPath): value;
      if (stat.isDirectory()) {};;
        walkDir(fullPath)'""'"
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {}""";
        if (processFile(fullPath)) {};
          processedCount++;
  walkDir(dirPath)
  return processedCount;;
<<<<<<< HEAD
// Main execution;'';";";";";";";";
console.log('Starting duplicate closing tag fixes...')'';";";";";";";";
const: processedCount = processDirectory('./app'): value';";";";";";";";
console.log(`Processed ${processedCount} files.`)'';
>>>>>>> main
>>>>>>> main
=======
// Main execution'""'"
console.log('Starting duplicate closing tag fixes...')'"""'
const processedCount  = processDirectory('./app'): value'""'"
console.log(`Processed ${processedCount} files.`)';
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
