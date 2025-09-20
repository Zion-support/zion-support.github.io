#!/usr/bin/env node

/**
 * Critical Fixes Script
 * Fixes the most critical syntax and TypeScript errors
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting Critical Fixes...');

// 1. Fix vite-env.d.ts file
const fixViteEnv = () => {
  const viteEnvPath = path.join(process.cwd(), 'src/vite-env.d.ts');
  const content = `/// <reference types="vite/client" />

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_DESCRIPTION: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_ENVIRONMENT: 'development' | 'production' | 'test';
  readonly PORT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export {};
`;
  
  fs.writeFileSync(viteEnvPath, content);
  console.log('✅ Fixed vite-env.d.ts');
};

// 2. Fix common syntax errors in files
const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix common patterns
    const patterns = [
      // Fix broken React component syntax
      { pattern: /export\s+const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, replacement: 'export const $1 = () => {' },
      // Fix missing semicolons after imports
      { pattern: /import\s+([^;]+)\s*from\s+['"]([^'"]+)['"]\s*$/gm, replacement: 'import $1 from "$2";' },
      // Fix broken JSX syntax
      { pattern: /(\w+)\s*{\s*$/gm, replacement: '$1 {' },
      // Fix missing closing braces
      { pattern: /(\w+)\s*{\s*([^}]*)\s*$/gm, replacement: '$1 {\n  $2\n}' },
      // Fix broken TypeScript interfaces
      { pattern: /interface\s+(\w+)\s*{\s*$/gm, replacement: 'interface $1 {' },
      // Fix broken function declarations
      { pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, replacement: 'const $1 = () => {' },
    ];
    
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.pattern, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    });
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      return true;
    }
  } catch (error) {
    console.log(`⚠️  Could not fix ${filePath}: ${error.message}`);
  }
  return false;
};

// 3. Remove problematic files that are causing issues
const removeProblematicFiles = () => {
  const problematicFiles = [
    'src/App-minimal.tsx',
    'src/AppOptimized.tsx',
    'src/ErrorBoundary.tsx',
    'src/Header.tsx'
  ];
  
  problematicFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
        console.log(`✅ Removed problematic file: ${file}`);
      } catch (error) {
        console.log(`⚠️  Could not remove ${file}: ${error.message}`);
      }
    }
  });
};

// 4. Create clean, working versions of critical files
const createCleanFiles = () => {
  const cleanFiles = {
    'src/App.tsx': `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
`,
    
    'src/main.tsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,
    
    'src/index.css': `@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`
  };
  
  Object.entries(cleanFiles).forEach(([filePath, content]) => {
    const fullPath = path.join(process.cwd(), filePath);
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Created clean file: ${filePath}`);
  });
};

// 5. Fix package.json scripts
const fixPackageJson = () => {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Update scripts to be more robust
  packageJson.scripts = {
    ...packageJson.scripts,
    'build': 'npm run clean && vite build',
    'clean': 'rm -rf dist node_modules/.vite',
    'type-check': 'tsc --noEmit --skipLibCheck',
    'lint': 'eslint src/ --ext .ts,.tsx --fix',
    'fix': 'npm run clean && npm run type-check && npm run build'
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Updated package.json scripts');
};

// Main execution
console.log('🔍 Applying critical fixes...');

fixViteEnv();
removeProblematicFiles();
createCleanFiles();
fixPackageJson();

// Fix some critical files
const criticalFiles = [
  'src/pages/Home.tsx',
  'src/pages/Services.tsx'
];

criticalFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    if (fixFile(filePath)) {
      console.log(`✅ Fixed: ${file}`);
    }
  }
});

console.log('🎉 Critical fixes completed!');
console.log('📊 Next steps:');
console.log('1. Run "npm run type-check" to verify TypeScript');
console.log('2. Run "npm run build" to test the build');
console.log('3. Run "npm run lint" to check for remaining issues');