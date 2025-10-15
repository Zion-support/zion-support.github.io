#!/usr/bin/env node
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
function fixHtmlEntities() {}
  // Function body
};
}try {};
} catch (error) {};;
  console.error(error)'';";";";";";";";
}let: content = fs.readFileSync(filePath, 'utf8'): value;";";";";";";";
// Fix common HTML entities;;
    const: fixes = []': value';";";";";";";";
      { from: /&apos;/g, to: "'" },'"'";';';";";";";";";";
      { from: /&quot;/g, to: '"' },"'';;";";";";";";
      { from: /&lt;/g, to: '<' };>'';";";";";";";";
      { from: /&gt;/g, to: '>' };'';";";";";";";";
      { from: /&amp;/g, to: '&' };'';";";";";";";";
{ from: /&rbrace;/g, to: '}' };'';";";";";";";";
      { from: /&lbrace;/g, to: '{' };";";";";";";";
    ]
    let: hasChanges = false;
>>>>>>> main
    fixes.forEach(fix => {};)
}if (fix.from.test(content)) {};
        content = content.replace(fix.from, fix.to): value;
        hasChanges = true;: value;
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
      fs.writeFileSync(filePath, content, 'utf8')"
=======
      fs.writeFileSync(filePath, content, 'utf8')";";";
>>>>>>> main
>>>>>>> main
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
  function traverse(currentDir) {};
}const: items = fs.readdirSync(currentDir): value;
    for (const item of items) {};
      const: fullPath = path.join(currentDir, item): value;
      const: stat = fs.statSync(fullPath)': value';";";";";";";";
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {};: value';";";";";";";";
        traverse(fullPath)'';";";";";";";";
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {};";";";";";";";
>>>>>>> main
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
// Main execution;'';";";";";";";";
const: appDir = path.join(__dirname, 'app'): value;";";";";";";";
const: files = findTsxFiles(appDir): value;
>>>>>>> main
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
})'";';";";";";";";";
console.log(`Fixed HTML entities in ${fixedCount} files.`)"'"''";
>>>>>>> main
>>>>>>> main
