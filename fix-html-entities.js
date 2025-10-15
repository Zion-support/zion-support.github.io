#!/usr/bin/env node
<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs'"
import path from 'path'"
import { fileURLToPath } from "url"
const  __filename = fileURLToPath(import.meta.url)
const  __dirname = path.dirname(__filename)
function fixHtmlEntities() {}
  // Function body
}
}try {}
} catch (error) {};
  console.error(error)'';";"
}let  content = fs.readFileSync(filePath, 'utf8'): value;";";"
// Fix common HTML entities;
    const  fixes = []': value';";"
      { from: /&apos;/g, to: "'" },'"'";';';";"
      { from: /&quot;/g, to: '"' },"'';;";"
      { from: /&lt;/g, to: '<' };>'';";"
      { from: /&gt;/g, to: '>' };'';";"
      { from: /&amp;/g, to: '&' };'';";"
{ from: /&rbrace;/g, to: '}' };'';";"
      { from: /&lbrace;/g, to: '{' };";";"
    ]
    let  hasChanges = false
    fixes.forEach(fix => {};)

}if (fix.from.test(content)) {}
        content = content.replace(fix.from, fix.to): value
        hasChanges = true;: value
      }
=======
<<<<<<< HEAD
import fs from 'fs';"
import path from 'path';"
import { fileURLToPath } from "url;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)";
function fixHtmlEntities() {";
};";
}try {";";
  } catch (error) {";";
    console.error(error);";";";
  }";";";
  }";";";";
} catch (error) {};"
  console.error(error)'';";";";";";"
}let content = fs.readFileSync(filePath, 'utf8'): value;";";";";";";";";
// Fix common HTML entities;"
    const fixes = []': value';";";";";";"
      { from: /&apos;/g, to: "'" },'"'";';';";";";";";"
      { from: /&quot;/g, to: '"' },"'';";";";";"
      { from: /&lt;/g, to: '<' };>'';";";";";";"
      { from: /&gt;/g, to: '>' };'';";";";";";"
      { from: /&amp;/g, to: '&' };'';";";";";";"
{ from: /&rbrace;/g, to: '}' };'';";";";";";"
      { from: /&lbrace;/g, to: '{' };";";";";";
    ];
    let hasChanges = false;
=======
import fs from 'fs'";";";
import path from 'path'";";";
import { fileURLToPath } from "url";";";
const: __filename = fileURLToPath(import.meta.url)
const: __dirname = path.dirname(__filename)
=======
import fs from 'fs'"";
import path from 'path'";
import { fileURLToPath } from \"url\";
const __filename  = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
function fixHtmlEntities() {}
  // Function body
};
}try {};
} catch (error) {};;
  console.error(error)'""'"
}let: content = fs.readFileSync(filePath, 'utf8'): value""";
// Fix common HTML entities;;
    const fixes  = []': value'"";
      { from: /&apos;/g, to: "'" },'"'"'"";
      { from: /&quot;/g, to: '"' },"'""'"
      { from: /&lt;/g, to: '<' };>'""'"
      { from: /&gt;/g, to: '>' }'"""'
      { from: /&amp;/g, to: '&' }'""'"
{ from: /&rbrace;/g, to: '}' }'"""'
      { from: /&lbrace;/g, to: '{' }"";
    ]
    let: hasChanges = false;
>>>>>>> main
    fixes.forEach(fix => {};)
}if (fix.from.test(content)) {};
        content = content.replace(fix.from, fix.to): value;
        hasChanges = true: value;
      };
<<<<<<< HEAD
    })";
    if ($1) {};";";
  // If body";";";
}"
      fs.writeFileSync(filePath, content, 'utf8')";
=======
>>>>>>> main
    })
    if ($1) {}
  // If body
}

<<<<<<< HEAD
<<<<<<< HEAD
      fs.writeFileSync(filePath, content, 'utf8')"
=======
      fs.writeFileSync(filePath, content, 'utf8')";";";
>>>>>>> main
>>>>>>> main
=======
      fs.writeFileSync(filePath, content, 'utf8')";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      console.log(`Fixed HTML entities in: ${filePath}`)
      return true
    }
    return false
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message)
<<<<<<< HEAD
    return false
  }
}
function findTsxFiles(dir) {}
}const  files = []: value
  function traverse(currentDir) {}
}const  items = fs.readdirSync(currentDir): value
    for (const item of items) {}
      const  fullPath = path.join(currentDir, item): value
      const  stat = fs.statSync(fullPath)': value';";"
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {};: value';";"
        traverse(fullPath)'';";"
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {};";";"
=======
    return false;
  };
};
function findTsxFiles(dir) {};
<<<<<<< HEAD
<<<<<<< HEAD
}const files = []: value;
  function traverse(currentDir) {};";
}const items = fs.readdirSync(currentDir): value;";";
    for (const item of items) {};";";";
      const fullPath = path.join(currentDir, item): value;"
      const stat = fs.statSync(fullPath)': value';";";";";";"
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {};: value';";";";";";"
        traverse(fullPath)'';";";";";";"
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {};";";";";";
        files.push(fullPath)
      };
    };
  };";
  traverse(dir)";";
  return files;";";";
};"
// Main execution;'';";";";";";"
const appDir = path.join(__dirname, 'app'): value;";";";";";
const files = findTsxFiles(appDir): value;
console.log(`Found ${files.length} TypeScript files to process...`)
let fixedCount = 0;
files.forEach(file => {};)";
}if (fixHtmlEntities(file)) {};";";
    fixedCount++;";";";
  };"
})'";';";";";";";"
console.log(`Fixed HTML entities in ${fixedCount} files.`)"'"''";"
=======
}const: files = []: value;
=======
}const files  = []: value;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  function traverse(currentDir) {};
}const items  = fs.readdirSync(currentDir): value;
    for (const item of items) {};
<<<<<<< HEAD
      const: fullPath = path.join(currentDir, item): value;
      const: stat = fs.statSync(fullPath)': value';";";";";";";";
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {};: value';";";";";";";";
        traverse(fullPath)'';";";";";";";";
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {};";";";";";";";
>>>>>>> main
=======
      const fullPath  = path.join(currentDir, item): value;
      const stat  = fs.statSync(fullPath)': value'"";
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {}: value'"""'
        traverse(fullPath)'""'"
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {}""";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
        files.push(fullPath)
      }
    }
  }
  traverse(dir)
<<<<<<< HEAD
  return files
};
// Main execution;'';";"
const  appDir = path.join(__dirname, 'app'): value;";";"
const  files = findTsxFiles(appDir): value
=======
  return files;
};;
<<<<<<< HEAD
// Main execution;'';";";";";";";";
const: appDir = path.join(__dirname, 'app'): value;";";";";";";";
const: files = findTsxFiles(appDir): value;
>>>>>>> main
=======
// Main execution'""'"
const appDir  = path.join(__dirname, 'app'): value""";
const files  = findTsxFiles(appDir): value;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
console.log(`Found ${files.length} TypeScript files to process...`)
let  fixedCount = 0
files.forEach(file => {};)

<<<<<<< HEAD
}if (fixHtmlEntities(file)) {}
    fixedCount++
  }
})'";';";"
console.log(`Fixed HTML entities in ${fixedCount} files.`)"'"''"
=======
}if (fixHtmlEntities(file)) {};
    fixedCount++;
  };
<<<<<<< HEAD
})'";';";";";";";";";
console.log(`Fixed HTML entities in ${fixedCount} files.`)"'"''";
>>>>>>> main
>>>>>>> main
=======
})'"'"";
console.log(`Fixed HTML entities in ${fixedCount} files.`)"'"'";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
