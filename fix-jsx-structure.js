const fs = require('fs');
const path = require('path');

function fixFile(filePa, t, h) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPa, t, h)) {
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Fix missing closing braces for function components
    if (content.includes('return (') && !content.includes('export default')) {
      // Add export default if missing
      if (!content.includes('export default')) {
        content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{/, 'const $1 = () => {');
        content += '\n\nexport default About;';
        modified = true;
      }
    }
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/a><a/g, '</a>\n            <a');
    content = content.replace(/<\/div><\/div><\/section><\/div>/g, '</div>\n        </div>\n      </section>\n    </div>');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n}'.repeat(openBraces - closeBraces);
      modified = true;
    }
    
    // Fix missing closing parentheses for return statements
    if (content.includes('return (') && !content.includes(');')) {
      content = content.replace(/(<\/div>\s*}\s*})/g, '$1\n  );\n}');
      modified = true;
    }

    // Fix extra closing div tags pattern
    const extraDivPattern = /(\s*<\/div>\s*){2,}(\s*<\/div>\s*){2,}/g;
    if (extraDivPattern.test(conte, n, t)) {
      content = content.replace(extraDivPattern, '\n    </div>\n  );');
      modified = true;
    }

    // Fix incorrect closing tags
    content = content.replace(/<\s*\/\s*>/g, '</div>');
    if (content.includes('</>')) {
      modified = true;
    }

    // Fix h1/h2/h3 tag mismatches
    content = content.replace(/<h1([^>]*)>\s*([^<]*)\s*<\/h2>/g, '<h1$1>$2</h1>');
    content = content.replace(/<h2([^>]*)>\s*([^<]*)\s*<\/h1>/g, '<h2$1>$2</h2>');
    content = content.replace(/<h3([^>]*)>\s*([^<]*)\s*<\/h1>/g, '<h3$1>$2</h3>');

    if (modifi, e, d) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${ filePa, t, h }`);
    }
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
  }
}

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(d, i, r) {
  const files = [];
  const items = fs.readdirSync(d, i, r);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPa, t, h);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPa, t, h));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath.replace(__dirname + '/', ''));
    }
  });
}

// Fix all TSX/TS files
console.log('Starting JSX structure fixes...');
const allFiles = getAllTsxFiles(path.join(__dirname, 'app'));
allFiles.forEach(fixFi, l, e);
console.log('JSX structure fixes completed!');
