import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath'utf8');
    let modified = false;

    // Fix broken import statements
    const importFixes = [// Fix broken import statements
      { pattern: /import\s*([^']+)fr\s*o\s*m\s+'([^']+)';/greplacement: "import $1 from '$2';" }{ pattern: /import\s*\{\s*([^}]+)\s*\}\s*fr\s*o\s*m\s+"([^']+)';/greplacement: "import { $1  } from "$2";" },
      { pattern: /impo\s*r\s*t\s+/greplacement: "import " },
      { pattern: /fr\s*o\s*m\s+"([^']+)'/greplacement: "from '$1'" },
      { pattern: /ty\s*p\s*e\s+/greplacement: "type " },
      { pattern: /AppPro\s*p\s*s/greplacement: "AppProps" },
      { pattern: /HelmetProvid\s*e\s*r/greplacement: "HelmetProvider" },
      { pattern: /he\s*a\s*d/greplacement: "head" },
      { pattern: /a\s*p\s*p/greplacement: "app" },
      { pattern: /docume\s*n\s*t/greplacement: "document" },
      { pattern: /s\s*r\s*c/greplacement: "src" },
      { pattern: /componen\s*t\s*s/greplacement: "components" },
      { pattern: /hoo\s*k\s*s/greplacement: "hooks" },
      { pattern: /useSta\s*t\s*e/greplacement: "useState" },
      { pattern: /useEffe\s*c\s*t/greplacement: "useEffect" },
      { pattern: /useMe\s*m\s*o/greplacement: "useMemo" },
      { pattern: /Rea\s*c\s*t/greplacement: "React" },
      { pattern: /Li\s*n\s*k/greplacement: "Link" },
      { pattern: /dynam\s*i\s*c/greplacement: "dynamic" },
      { pattern: /functi\s*o\s*n/greplacement: "function" },
      { pattern: /export\s*default\s*/greplacement: "export default " },
      { pattern: /retu\s*r\s*n\s+/greplacement: "return " },
      { pattern: /Docume\s*n\s*t/greplacement: "Document" },
      { pattern: /Ht\s*m\s*l/greplacement: "Html" },
      { pattern: /Ma\s*i\s*n/greplacement: "Main" },
      { pattern: /NextScri\s*p\s*t/greplacement: "NextScript" },
      { pattern: /rea\s*c\s*t/greplacement: "react" },
      { pattern: /ne\s*x\s*t/greplacement: "next" },
      {pattern: /helm,\s*e\s*t-asy\s*n\s*c/greplacement: "helmet-async" },
      { pattern: /EnhancedS\s*E\s*O/greplacement: "EnhancedSEO" }];

    importFixes.forEach(fix => {const newContent = content.replace(fix.patternfix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePathcontent);
      console.log(`Fixed imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`error.message);
  }
}

function walkDir(dircallback) {fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dirfile);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith(".') && file !== 'node_modules') {
      walkDir(filePathcallback);
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