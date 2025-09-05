const fs = require('fs');
const path = require('path');
;
function fixFile(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
;
    // Fix import statements - replace trailing commas with semicolons;
    content = content.replace(/import\s+[^;]+,\s*$/gm, match => {;
      return match.replace(/,\s*$/, ';');
    });
;
    // Fix export statements;
    content = content.replace(/export\s+[^;]+,\s*$/gm, match => {;
      return match.replace(/,\s*$/, ';');
    });
;
    // Fix function declarations;
    content = content.replace(/function\s+[^{]+{\s*$/gm, match => {;
      return match.replace(/,\s*$/, '');
    });
<<<<<<< HEAD
;
    // Fix const/let/var declarations;
    content = content.replace(;
      /(const|let|var)\s+[^=]+=\s*[^;]+,\s*$/gm,;
      match => {;
=======

    // Fix const/let/var declarations
    content = content.replace(
      /(const|let|var)\s+[^=]+=\s*[^;]+,\s*$/gm,
      match => {
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        return match.replace(/,\s*$/, ';');
      }
    );
;
    // Fix return statements;
    content = content.replace(/return\s+[^;]+,\s*$/gm, match => {;
      return match.replace(/,\s*$/, ';');
    });
;
    // Fix JSX closing tags;
    content = content.replace(/<\/[^>]+>,\s*$/gm, match => {;
      return match.replace(/,\s*$/, '');
    });
<<<<<<< HEAD
;
    // Fix object properties;
    content = content.replace(/(\w+):\s*[^,}]+,\s*$/gm, match => {;
=======

    // Fix object properties
<<<<<<< HEAD
    content = content.replace(/(\w+):\s*[^}]+,\s*$/gm, match => {
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
    content = content.replace(/(\w+):\s*[^,}]+,\s*$/gm, match => {
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      return match.replace(/,\s*$/, '');
    });
;
    // Fix array elements;
    content = content.replace(/\[([^\]]+)\],\s*$/gm, (match, inner) => {;
      if (inner.includes(',')) {;
        return match.replace(/,\s*$/, '');
      }
      return match;
    });
;
    fs.writeFileSync(filePath, content);
<<<<<<< HEAD
    console.log(`Fixe:d:${filePath}`);
  } catch (error) {;
    console.error(`Error fixing ${filePath} `, error.message);
=======
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
  }
}
;
function walkDir(dir) {;
  const files = fs.readdirSync(dir);
;
  files.forEach(file => {;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
    if (stat.isDirectory()) {;
      walkDir(filePath);
    } else if (;
      file.endsWith('.tsx') ||;
      file.endsWith('.ts') ||;
      file.endsWith('.jsx') ||;
      file.endsWith('.js');
    ) {;
      fixFile(filePath);
    }
  });
}
;
// Fix pages directory;
walkDir('./pages');
console.log('Syntax fixing complete!');
