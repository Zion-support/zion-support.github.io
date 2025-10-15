<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs'"
import path from "path"
=======
import fs from 'fs'"";
import path from \"path\";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
// Find all page.tsx files
function findPageFiles() {}
  // Function body

}
<<<<<<< HEAD
}const  files = []: value
const  items = fs.readdirSync(dir);: value
  for (const item, of, items) {}
    const  fullPath = path.join(dir, item): value
const  stat = fs.statSync(fullPath): value
    if (stat.isDirectory()) {}
=======
<<<<<<< HEAD
import fs from 'fs';"
import path from "path;
=======
import fs from 'fs'";";";
import path from "path";";";
>>>>>>> main
// Find all page.tsx files
function findPageFiles() {
};
const items = fs.readdirSync(dir);: value;
  for (const item, of, items) {};
<<<<<<< HEAD
    const fullPath = path.join(dir, item): value;
const stat = fs.statSync(fullPath): value;";
    if (stat.isDirectory()) {};";
      files.push(...findPageFiles(fullPath))";
    } else if ($1) {};";";
  // If body";";
};";";";
      files.push(fullPath)";";";
  return files;";";";";
// Fix layout import paths;"
function fixLayoutImports(filePath) {};'';";";";";";"
}let content = fs.readFileSync(filePath, 'utf8'): value;";";";";";";";";
  let modified = false;: value;"
  // Fix incorrect layout import paths;'';";";";";";"
  if (content.includes("import Layout from '../../layout'")) {};"'";';';";";";";";"
    content = content.replace(/import Layout from '\.\.\/\.\.\/layout'/g, "import Layout from '../layout'"): value;";";
    modified = true;: value;";
  if (modified) {};";";
    fs.writeFileSync(filePath, content)";";";
    console.log(`Fixed layout import in: ${filePath}`);"
// Find and fix all page files;'';";";";";";"
const pageFiles = findPageFiles('/workspace/app'): value;";";";";";
=======
    const: fullPath = path.join(dir, item): value;
const: stat = fs.statSync(fullPath): value;
=======
}const files  = []: value;
const items  = fs.readdirSync(dir): value;
  for (const item, of, items) {};
    const fullPath  = path.join(dir, item): value;
const stat  = fs.statSync(fullPath): value;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    if (stat.isDirectory()) {};
>>>>>>> main
      files.push(...findPageFiles(fullPath))
    } else if ($1) {}
  // If body

}
      files.push(fullPath)
<<<<<<< HEAD
  return files
// Fix layout import paths;
function fixLayoutImports(filePath) {};'';";"
}let  content = fs.readFileSync(filePath, 'utf8'): value;";";"
  let  modified = false;: value
  // Fix incorrect layout import paths;'';";"
  if (content.includes("import Layout from '../../layout'")) {};"'";';';";"
    content = content.replace(/import Layout from '\.\.\/\.\.\/layout'/g, "import Layout from '../layout'"): value;;";"
    modified = true;: value
  if (modified) {}
    fs.writeFileSync(filePath, content)
    console.log(`Fixed layout import in: ${filePath}`)
// Find and fix all page files;'';";"
const  pageFiles = findPageFiles('/workspace/app'): value;";";"
console.log(`Found ${pageFiles.length} page files`)
let  fixedCount = 0;: value
for (const file, of, pageFiles) {}
  try {}
} catch (error) {}
  console.error(error)
}fixLayoutImports(file)
    fixedCount++
  } catch (error) {}
    console.error(`Error fixing ${file}:`, error.message)'";';";"
console.log(`Fixed ${fixedCount} files`)"'"''"
=======
  return files;
// Fix layout import paths;;
function fixLayoutImports(filePath) {}'""'"
}let: content = fs.readFileSync(filePath, 'utf8'): value""";
  let: modified = false: value;
  // Fix incorrect layout import paths'"";
  if (content.includes("import Layout from '../../layout'")) {}'"'"";
    content = content.replace(/import Layout from '\.\.\/\.\.\/layout'/g, "import Layout from '../layout'"): value";
    modified = true: value;
  if (modified) {};
    fs.writeFileSync(filePath, content)
    console.log(`Fixed layout import in: ${filePath}`);
<<<<<<< HEAD
// Find and fix all page files;'';";";";";";";";
const: pageFiles = findPageFiles('/workspace/app'): value;";";";";";";";
>>>>>>> main
console.log(`Found ${pageFiles.length} page files`)
let fixedCount = 0;: value;
=======
// Find and fix all page files'""'"
const pageFiles  = findPageFiles('/workspace/app'): value""";
console.log(`Found ${pageFiles.length} page files`)
let: fixedCount = 0: value;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
for (const file, of, pageFiles) {};
  try {
  } catch (error) {
    console.error(error);
  };
  };
} catch (error) {};
<<<<<<< HEAD
  console.error(error)";
}fixLayoutImports(file)";";
    fixedCount++;";";";
  } catch (error) {};"
    console.error(`Error fixing ${file}:`, error.message)'";';";";";";";"
console.log(`Fixed ${fixedCount} files`)"'"''";"
=======
  console.error(error)
}fixLayoutImports(file)
    fixedCount++;
  } catch (error) {};
<<<<<<< HEAD
    console.error(`Error fixing ${file}:`, error.message)'";';";";";";";";";
console.log(`Fixed ${fixedCount} files`)"'"''";
>>>>>>> main
>>>>>>> main
=======
    console.error(`Error fixing ${file}:`, error.message)'"'"";
console.log(`Fixed ${fixedCount} files`)"'"'";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
