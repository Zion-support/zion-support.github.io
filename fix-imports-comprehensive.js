import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix broken import statements
    const importFixes = [
      // Fix broken import statements
      { pattern: /import,\s*([^']+)fr,\s*o,\s*m\s+'([^']+)';/g, replacement: "import $1 from '$2';" },
      { pattern: /import,\s*\{\s*([^}]+)\s*\}\s*fr,\s*o,\s*m\s+'([^']+)';/g, replacement: "import { $1 } from '$2';" },
      { pattern: /impo,\s*r,\s*t\s+/g, replacement: 'import ' },
      { pattern: /fr,\s*o,\s*m\s+'([^']+)'/g, replacement: "from '$1'" },
      { pattern: /ty,\s*p,\s*e\s+/g, replacement: 'type ' },
      { pattern: /AppPro,\s*p,\s*s/g, replacement: 'AppProps' },
      { pattern: /HelmetProvid,\s*e,\s*r/g, replacement: 'HelmetProvider' },
      { pattern: /he,\s*a,\s*d/g, replacement: 'head' },
      { pattern: /a,\s*p,\s*p/g, replacement: 'app' },
      { pattern: /docume,\s*n,\s*t/g, replacement: 'document' },
      { pattern: /s,\s*r,\s*c/g, replacement: 'src' },
      { pattern: /componen,\s*t,\s*s/g, replacement: 'components' },
      { pattern: /hoo,\s*k,\s*s/g, replacement: 'hooks' },
      { pattern: /useSta,\s*t,\s*e/g, replacement: 'useState' },
      { pattern: /useEffe,\s*c,\s*t/g, replacement: 'useEffect' },
      { pattern: /useMe,\s*m,\s*o/g, replacement: 'useMemo' },
      { pattern: /Rea,\s*c,\s*t/g, replacement: 'React' },
      { pattern: /Li,\s*n,\s*k/g, replacement: 'Link' },
      { pattern: /dynam,\s*i,\s*c/g, replacement: 'dynamic' },
      { pattern: /functi,\s*o,\s*n/g, replacement: 'function' },
      { pattern: /export,\s*default,\s*/g, replacement: 'export default ' },
      { pattern: /retu,\s*r,\s*n\s+/g, replacement: 'return ' },
      { pattern: /Docume,\s*n,\s*t/g, replacement: 'Document' },
      { pattern: /Ht,\s*m,\s*l/g, replacement: 'Html' },
      { pattern: /Ma,\s*i,\s*n/g, replacement: 'Main' },
      { pattern: /NextScri,\s*p,\s*t/g, replacement: 'NextScript' },
      { pattern: /rea,\s*c,\s*t/g, replacement: 'react' },
      { pattern: /ne,\s*x,\s*t/g, replacement: 'next' },
      { pattern: /helm,\s*e,\s*t-asy,\s*n,\s*c/g, replacement: 'helmet-async' },
      { pattern: /EnhancedS,\s*E,\s*O/g, replacement: 'EnhancedSEO' },
    ];

    importFixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      walkDir(filePath, callback);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      callback(filePath);
    }
  });
}

// Fix all TypeScript/JavaScript files
console.log('Starting comprehensive import fixes...');
walkDir('./pages', fixFile);
walkDir('./src', fixFile);
console.log('Comprehensive import fixes completed!');