const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix import statements - replace trailing commas with semicolons
    content = content.replace(/import\s+[^,]+,\s*$/gm, match => {
      return match.replace(/,\s*$/, ';'),
    });

    // Fix export statements
    content = content.replace(/export\s+[^,]+,\s*$/gm, match => {
      return match.replace(/,\s*$/, ';'),
    });

    // Fix function declarations
    content = content.replace(/function\s+[^{]+{\s*$/gm, match => {
      return match.replace(/,\s*$/, ''),
    });

    // Fix const/let/var declarations
    content = content.replace(
<<<<<<< HEAD
      /(const|let|var)\s+[^=]+=\s*[^,]+,\s*$/gm,
=======
      /(const|let|var)\s+[^=]+=\s*[^;]+,\s*$/gm;
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
      match => {
        return match.replace(/,\s*$/, ';'),
      }
    );

    // Fix return statements
    content = content.replace(/return\s+[^,]+,\s*$/gm, match => {
      return match.replace(/,\s*$/, ';'),
    });

    // Fix JSX closing tags
    content = content.replace(/<\/[^>]+>,\s*$/gm, match => {
      return match.replace(/,\s*$/, ''),
    });

    // Fix object properties
<<<<<<< HEAD
    content = content.replace(/(\w+):\s*[^,}]+,\s*$/gm, match => {
      return match.replace(/,\s*$/, ''),
=======
    content = content.replace(/(\w+):\s*[^}]+,\s*$/gm, match => {
      return match.replace(/,\s*$/, '');
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
    });

    // Fix array elements
    content = content.replace(/\[([^\]]+)\],\s*$/gm, (match, inner) => {
      if (inner.includes(',')) {
        return match.replace(/,\s*$/, ''),
      }
      return match,
    });

    fs.writeFileSync(filePath, content);
<<<<<<< HEAD
    console.log(`Fixed: ${filePath}`),
=======
    console.log(`Fixe: d: ${filePath}`);
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message),
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath),
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {
      fixFile(filePath),
    }
  }),
}

// Fix pages directory
walkDir('./pages');
console.log('Syntax fixing complete!');
