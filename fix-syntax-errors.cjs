const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Patterns to fix
const fixes = [
  // Fix missing quotes in import statements
  {
    pattern: /from 'react;/g,
    replacement: "from 'react';"
  },
  {
    pattern: /from 'react-helmet-async;/g,
    replacement: "from 'react-helmet-async';"
  },
  {
    pattern: /from 'react-router-dom;/g,
    replacement: "from 'react-router-dom';"
  },
  {
    pattern: /from 'lucide-react;/g,
    replacement: "from 'lucide-react';"
  },
  {
    pattern: /from '\.\.\/\.\.\/components\/Header;/g,
    replacement: "from '../../components/Header';"
  },
  {
    pattern: /from '\.\.\/\.\.\/components\/Footer;/g,
    replacement: "from '../../components/Footer';"
  },
  {
    pattern: /from '\.\.\/\.\.\/\.\.\/components\/Header;/g,
    replacement: "from '../../../components/Header';"
  },
  {
    pattern: /from '\.\.\/\.\.\/\.\.\/components\/Footer;/g,
    replacement: "from '../../../components/Footer';"
  },
  // Fix vite-env.d.ts reference directive
  {
    pattern: /\/\/\/ <reference types="vite\/client\/>/g,
    replacement: '/// <reference types="vite/client" />'
  },
  // Fix missing quotes in string literals
  {
    pattern: /className = 'sr-only;/g,
    replacement: "className = 'sr-only';"
  },
  {
    pattern: /id = 'announcements;/g,
    replacement: "id = 'announcements';"
  },
  {
    pattern: /className = 'skip-links;/g,
    replacement: "className = 'skip-links';"
  },
  {
    pattern: /fontSize = '100%;/g,
    replacement: "fontSize = '100%';"
  },
  {
    pattern: /minWidth = '44px;/g,
    replacement: "minWidth = '44px';"
  },
  {
    pattern: /minHeight = '44px;/g,
    replacement: "minHeight = '44px';"
  },
  // Fix type definitions
  {
    pattern: /'critical;/g,
    replacement: "'critical';"
  },
  {
    pattern: /'unknown;/g,
    replacement: "'unknown';"
  },
  {
    pattern: /'low;/g,
    replacement: "'low';"
  },
  {
    pattern: /'high;/g,
    replacement: "'high';"
  },
  {
    pattern: /'medium;/g,
    replacement: "'medium';"
  },
  {
    pattern: /'info;/g,
    replacement: "'info';"
  },
  // Fix resource loading
  {
    pattern: /rel = 'preload;/g,
    replacement: "rel = 'preload';"
  },
  {
    pattern: /'font' : 'image;/g,
    replacement: "'font' : 'image';"
  },
  {
    pattern: /crossOrigin = 'anonymous;/g,
    replacement: "crossOrigin = 'anonymous';"
  },
  {
    pattern: /img\.dataset\.src \|\| ';/g,
    replacement: "img.dataset.src || '';"
  },
  {
    pattern: /rel = 'prefetch;/g,
    replacement: "rel = 'prefetch';"
  },
  {
    pattern: /rel = 'preconnect;/g,
    replacement: "rel = 'preconnect';"
  },
  // Fix SEO and text processing
  {
    pattern: /truncated \+ '\.\.\.;/g,
    replacement: "truncated + '...';"
  },
  {
    pattern: /let description = ';/g,
    replacement: "let description = '';"
  },
  {
    pattern: /sentence\.trim\(\) \+ '\. ;/g,
    replacement: "sentence.trim() + '. ';"
  },
  {
    pattern: /const vowels = 'aeiouy;/g,
    replacement: "const vowels = 'aeiouy';"
  },
  {
    pattern: /'index, follow;/g,
    replacement: "'index, follow';"
  },
  {
    pattern: /'player;/g,
    replacement: "'player';"
  },
  {
    pattern: /url: 'https:\/\/ziontechgroup\.com\/logo\.png}/g,
    replacement: "url: 'https://ziontechgroup.com/logo.png'},"
  },
  {
    pattern: /'https:\/\/github\.com\/zion-holdings],/g,
    replacement: "'https://github.com/zion-holdings'],"
  },
  {
    pattern: /email: 'contact@ziontechgroup\.com}/g,
    replacement: "email: 'contact@ziontechgroup.com'}"
  },
  {
    pattern: /<lastmod>\$\{url\.lastmod\}<\/lastmod> \|\| ';/g,
    replacement: "<lastmod>${url.lastmod}</lastmod> || '';"
  },
  {
    pattern: /<changefreq>\$\{url\.changefreq\}<\/changefreq> \|\| ';/g,
    replacement: "<changefreq>${url.changefreq}</changefreq> || '';"
  },
  {
    pattern: /<priority>\$\{url\.priority\}<\/priority> \|\| ';/g,
    replacement: "<priority>${url.priority}</priority> || '';"
  },
  {
    pattern: /"'": '&#039;/g,
    replacement: "'\"': '&#039;'"
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript and TSX files
const files = glob.sync('src/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} TypeScript files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);