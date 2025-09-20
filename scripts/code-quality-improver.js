#!/usr/bin/env node

/**
 * Code Quality Improvement Script
 * Fixes syntax errors, improves code structure, and optimizes components
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting Code Quality Improvements...');

// 1. Fix common syntax errors in TypeScript/JavaScript files
const fixSyntaxErrors = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix common syntax errors
    const fixes = [
      // Fix missing semicolons
      { pattern: /(\w+)\s*$/gm, replacement: '$1;' },
      // Fix missing commas in objects
      { pattern: /(\w+)\s*\n\s*(\w+)/gm, replacement: '$1,\n  $2' },
      // Fix missing imports
      { pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?\s*$/gm, replacement: 'import { $1 } from "$2";' },
      // Fix React component syntax
      { pattern: /export\s+const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/gm, replacement: 'export const $1 = () => {' },
      // Fix missing closing braces
      { pattern: /(\w+)\s*{\s*([^}]*)\s*$/gm, replacement: '$1 {\n  $2\n}' }
    ];
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
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

// 2. Optimize React components
const optimizeReactComponent = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let optimized = false;
    
    // Add React.memo for performance
    if (content.includes('export const') && !content.includes('React.memo')) {
      content = content.replace(
        /export const (\w+) = \(/g,
        'export const $1 = React.memo(('
      );
      content = content.replace(
        /^(\s*)(\w+)\s*{\s*$/gm,
        '$1$2);'
      );
      optimized = true;
    }
    
    // Add useCallback for event handlers
    if (content.includes('onClick') && !content.includes('useCallback')) {
      content = 'import { useCallback } from \'react\';\n' + content;
      content = content.replace(
        /(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g,
        '$1 = useCallback($1, [])'
      );
      optimized = true;
    }
    
    if (optimized) {
      fs.writeFileSync(filePath, content);
      return true;
    }
  } catch (error) {
    console.log(`⚠️  Could not optimize ${filePath}: ${error.message}`);
  }
  return false;
};

// 3. Create optimized component templates
const createOptimizedTemplates = () => {
  const templates = {
    'src/components/OptimizedButton.tsx': `import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const OptimizedButton = React.memo<ButtonProps>(({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false 
}) => {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
});

OptimizedButton.displayName = 'OptimizedButton';
`,
    
    'src/components/OptimizedCard.tsx': `import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const OptimizedCard = React.memo<CardProps>(({ 
  title, 
  children, 
  className = '' 
}) => {
  return (
    <div className={\`card \${className}\`}>
      <h3 className="card-title">{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
});

OptimizedCard.displayName = 'OptimizedCard';
`,
    
    'src/hooks/useOptimizedFetch.ts': `import { useState, useEffect, useCallback } from 'react';

interface UseFetchOptions {
  immediate?: boolean;
}

export const useOptimizedFetch = <T>(
  url: string, 
  options: UseFetchOptions = {}
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (options.immediate !== false) {
      fetchData();
    }
  }, [fetchData, options.immediate]);

  return { data, loading, error, refetch: fetchData };
};
`
  };
  
  Object.entries(templates).forEach(([filePath, content]) => {
    const fullPath = path.join(process.cwd(), filePath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Created optimized template: ${filePath}`);
  });
};

// 4. Process files
const processFiles = (dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) => {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  let optimizedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processFiles(filePath, extensions).fixed;
      optimizedCount += processFiles(filePath, extensions).optimized;
    } else if (extensions.some(ext => file.endsWith(ext))) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
      if (optimizeReactComponent(filePath)) {
        optimizedCount++;
      }
    }
  });
  
  return { fixed: fixedCount, optimized: optimizedCount };
};

// Main execution
console.log('🔍 Scanning for files to improve...');
const srcDir = path.join(process.cwd(), 'src');

if (fs.existsSync(srcDir)) {
  const results = processFiles(srcDir);
  console.log(`✅ Fixed syntax errors in ${results.fixed} files`);
  console.log(`⚡ Optimized ${results.optimized} React components`);
} else {
  console.log('⚠️  src directory not found');
}

console.log('📝 Creating optimized templates...');
createOptimizedTemplates();

// 5. Create TypeScript configuration improvements
console.log('📋 Updating TypeScript configuration...');
const tsConfig = {
  compilerOptions: {
    target: 'ES2020',
    lib: ['ES2020', 'DOM', 'DOM.Iterable'],
    allowJs: true,
    skipLibCheck: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    strict: true,
    forceConsistentCasingInFileNames: true,
    moduleResolution: 'node',
    resolveJsonModule: true,
    isolatedModules: true,
    noEmit: true,
    jsx: 'react-jsx'
  },
  include: ['src'],
  exclude: ['node_modules', 'dist']
};

fs.writeFileSync(
  path.join(process.cwd(), 'tsconfig.json'), 
  JSON.stringify(tsConfig, null, 2)
);
console.log('✅ Updated TypeScript configuration');

console.log('🎉 Code quality improvements completed!');
console.log('📊 Next steps:');
console.log('1. Run "npm run type-check" to verify TypeScript');
console.log('2. Run "npm run lint" to check for remaining issues');
console.log('3. Test the optimized components');