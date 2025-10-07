const fs = require('fs');
const path = require('path');

function fixCorruptedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix corrupted import statements
    content = content.replace(/impo, r, t/g, 'import');
    content = content.replace(/import,/g, 'import');
    content = content.replace(/fr, o, m/g, 'from');
    content = content.replace(/rea, c, t/g, 'react');
    content = content.replace(/componen, t, s/g, 'components');
    content = content.replace(/pag, e, s/g, 'pages');
    content = content.replace(/l, a, z, y/g, 'lazy');
    content = content.replace(/useEffe, c, t/g, 'useEffect');
    content = content.replace(/Suspen, s, e/g, 'Suspense');
    content = content.replace(/BrowserRouter/g, 'BrowserRouter');
    content = content.replace(/Rout, e, s/g, 'Routes');
    content = content.replace(/Rou, t, e/g, 'Route');
    content = content.replace(/ErrorBounda, r, y/g, 'ErrorBoundary');
    content = content.replace(/AlertTriang, l, e/g, 'AlertTriangle');
    content = content.replace(/Compone, n, t/g, 'Component');
    content = content.replace(/ErrorIn, f, o/g, 'ErrorInfo');
    content = content.replace(/ReactNo, d, e/g, 'ReactNode');
    content = content.replace(/luci, d, e-rea, c, t/g, 'lucide-react');
    content = content.replace(/con, s, t/g, 'const');
    content = content.replace(/functio, n/g, 'function');
    content = content.replace(/retur, n/g, 'return');
    content = content.replace(/if/g, 'if');
    content = content.replace(/els, e/g, 'else');
    content = content.replace(/cat, c, h/g, 'catch');
    content = content.replace(/t, r, y/g, 'try');
    content = content.replace(/thro, w/g, 'throw');
    content = content.replace(/ne, w/g, 'new');
    content = content.replace(/Erro, r/g, 'Error');
    content = content.replace(/conso, l, e/g, 'console');
    content = content.replace(/l, o, g/g, 'log');
    content = content.replace(/wa, r, n/g, 'warn');
    content = content.replace(/proce, s, s/g, 'process');
    content = content.replace(/e, n, v/g, 'env');
    content = content.replace(/NODE_E, N, V/g, 'NODE_ENV');
    content = content.replace(/product, i, o, n/g, 'production');
    content = content.replace(/docume, n, t/g, 'document');
    content = content.replace(/getElementBy, I, d/g, 'getElementById');
    content = content.replace(/r, o, o, t/g, 'root');
    content = content.replace(/containe, r/g, 'container');
    content = content.replace(/createRo, o, t/g, 'createRoot');
    content = content.replace(/rend, e, r/g, 'render');
    content = content.replace(/StrictMo, d, e/g, 'StrictMode');
    content = content.replace(/Web, Vita, l, s/g, 'web-vitals');
    content = content.replace(/onC, L, S/g, 'onCLS');
    content = content.replace(/onL, C, P/g, 'onLCP');
    content = content.replace(/onF, C, P/g, 'onFCP');
    content = content.replace(/onTT, F, B/g, 'onTTFB');
    content = content.replace(/metr, i, c/g, 'metric');
    content = content.replace(/na, m, e/g, 'name');
    content = content.replace(/stri, n, g/g, 'string');
    content = content.replace(/val, u, e/g, 'value');
    content = content.replace(/nu, m, b, e, r/g, 'number');
    content = content.replace(/Failed, to, load/g, 'Failed to load');
    content = content.replace(/err, o, r/g, 'error');
    content = content.replace(/w, e, b-vita, l, s/g, 'web-vitals');
    content = content.replace(/reportWebVita, l, s/g, 'reportWebVitals');
    content = content.replace(/async,/g, 'async');
    content = content.replace(/await,/g, 'await');
    content = content.replace(/impor, t/g, 'import');
    content = content.replace(/ind, e, x.c, s, s/g, 'index.css');
    content = content.replace(/A, p, p/g, 'App');
    content = content.replace(/Ho, m, e/g, 'Home');
    content = content.replace(/Abo, u, t/g, 'About');
    content = content.replace(/Servic, e, s/g, 'Services');
    content = content.replace(/Bl, o, g/g, 'Blog');
    content = content.replace(/Conta, c, t/g, 'Contact');
    content = content.replace(/Te, a, m/g, 'Team');
    content = content.replace(/Priva, c, y/g, 'Privacy');
    content = content.replace(/Ter, m, s/g, 'Terms');
    content = content.replace(/S, E, O/g, 'SEO');
    content = content.replace(/Loadi, n, g/g, 'Loading');
    content = content.replace(/Hom, e/g, 'Home');
    content = content.replace(/Abou, t/g, 'About');
    content = content.replace(/Service, s/g, 'Services');
    content = content.replace(/Blo, g/g, 'Blog');
    content = content.replace(/Contac, t/g, 'Contact');
    content = content.replace(/Tea, m/g, 'Team');
    content = content.replace(/Privac, y/g, 'Privacy');
    content = content.replace(/Term, s/g, 'Terms');
    content = content.replace(/Lazy,/g, 'Lazy');
    content = content.replace(/load,/g, 'load');
    content = content.replace(/pages,/g, 'pages');
    content = content.replace(/performance,/g, 'performance');
    content = content.replace(/Initialize,/g, 'Initialize');
    content = content.replace(/all,/g, 'all');
    content = content.replace(/optimization,/g, 'optimization');
    content = content.replace(/systems,/g, 'systems');
    content = content.replace(/monitoring,/g, 'monitoring');
    content = content.replace(/development,/g, 'development');
    content = content.replace(/console,/g, 'console');
    content = content.replace(/Initializing,/g, 'Initializing');
    content = content.replace(/optimizations,/g, 'optimizations');
    content = content.replace(/SEO,/g, 'SEO');
    content = content.replace(/optimizations,/g, 'optimizations');
    content = content.replace(/title,/g, 'title');
    content = content.replace(/Zion,/g, 'Zion');
    content = content.replace(/Tech,/g, 'Tech');
    content = content.replace(/Group,/g, 'Group');
    content = content.replace(/Advanced,/g, 'Advanced');
    content = content.replace(/AI,/g, 'AI');
    content = content.replace(/and,/g, 'and');
    content = content.replace(/IT,/g, 'IT');
    content = content.replace(/Solutions,/g, 'Solutions');
    content = content.replace(/Accessibility,/g, 'Accessibility');
    content = content.replace(/enhancements,/g, 'enhancements');
    content = content.replace(/document,/g, 'document');
    content = content.replace(/documentElement,/g, 'documentElement');
    content = content.replace(/setAttribute,/g, 'setAttribute');
    content = content.replace(/lang,/g, 'lang');
    content = content.replace(/en,/g, 'en');
    content = content.replace(/Security,/g, 'Security');
    content = content.replace(/headers,/g, 'headers');
    content = content.replace(/already,/g, 'already');
    content = content.replace(/set,/g, 'set');
    content = content.replace(/server,/g, 'server');
    content = content.replace(/querySelector,/g, 'querySelector');
    content = content.replace(/meta,/g, 'meta');
    content = content.replace(/http-equiv,/g, 'http-equiv');
    content = content.replace(/X-Content-Type-Options,/g, 'X-Content-Type-Options');
    content = content.replace(/content,/g, 'content');
    content = content.replace(/nosniff,/g, 'nosniff');
    content = content.replace(/createElement,/g, 'createElement');
    content = content.replace(/appendChild,/g, 'appendChild');
    content = content.replace(/head,/g, 'head');
    content = content.replace(/ErrorBoundary,/g, 'ErrorBoundary');
    content = content.replace(/Router,/g, 'Router');
    content = content.replace(/Suspense,/g, 'Suspense');
    content = content.replace(/fallback,/g, 'fallback');
    content = content.replace(/Loading,/g, 'Loading');
    content = content.replace(/Routes,/g, 'Routes');
    content = content.replace(/Route,/g, 'Route');
    content = content.replace(/path,/g, 'path');
    content = content.replace(/element,/g, 'element');
    content = content.replace(/Home,/g, 'Home');
    content = content.replace(/About,/g, 'About');
    content = content.replace(/Services,/g, 'Services');
    content = content.replace(/Blog,/g, 'Blog');
    content = content.replace(/Contact,/g, 'Contact');
    content = content.replace(/Team,/g, 'Team');
    content = content.replace(/Privacy,/g, 'Privacy');
    content = content.replace(/Terms,/g, 'Terms');
    content = content.replace(/slug,/g, 'slug');
    
    // Fix common patterns
    content = content.replace(/, /g, ' ');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    content = content.replace(/,\s*\)/g, ')');
    content = content.replace(/,\s*;/g, ';');
    content = content.replace(/,\s*$/gm, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find all TypeScript/TSX files
const srcDir = './src';
const files = [];

function findFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findFiles(fullPath);
    } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
}

findFiles(srcDir);

console.log(`Found ${files.length} TypeScript files to check...`);

let fixedCount = 0;
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('impo, r, t') || content.includes('import,')) {
    fixCorruptedImports(file);
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} corrupted files.`);