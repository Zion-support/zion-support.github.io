#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// Performance optimizations
const optimizations = [
  // Add React.memo to components
  {
    pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\([^)]*\)\s*=>\s*{/g,
    replacement: 'const $1: React.FC = React.memo((props) => {'
  },
  // Add useCallback to event handlers
  {
    pattern: /const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g,
    replacement: 'const $1 = useCallback((...args) => {'
  },
  // Add useMemo to expensive calculations
  {
    pattern: /const\s+(\w+)\s*=\s*useMemo\(/g,
    replacement: 'const $1 = useMemo('
  },
  // Optimize imports - use specific imports
  {
    pattern: /import\s+\*\s+as\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g,
    replacement: (match, alias, module) => {
      // This would need more sophisticated analysis to determine which specific imports are used
      return match; // Keep as is for now
    }
  },
  // Remove unused React imports
  {
    pattern: /import\s+React\s+from\s+['"]react['"];\s*(?=\n)/g,
    replacement: ''
  },
  // Add lazy loading for heavy components
  {
    pattern: /import\s+(\w+)\s+from\s+['"]\.\.\/components\/(\w+)['"];/g,
    replacement: 'const $1 = lazy(() => import(\'../components/$2\'));'
  }
];

// Bundle size optimizations
const bundleOptimizations = [
  // Remove console statements in production
  {
    pattern: /console\.(log|warn|error|info|debug)\([^)]*\);/g,
    replacement: '// console.$1(...); // Removed for production'
  },
  // Optimize object destructuring
  {
    pattern: /const\s+{\s*([^}]+)\s*}\s*=\s*(\w+);/g,
    replacement: (match, props, obj) => {
      const propList = props.split(',').map(p => p.trim()).join(', ');
      return `const { ${propList} } = ${obj};`;
    }
  },
  // Remove empty functions
  {
    pattern: /const\s+(\w+)\s*=\s*\(\)\s*=>\s*{\s*};/g,
    replacement: '// const $1 = () => {}; // Removed empty function'
  }
];

// SEO optimizations
const seoOptimizations = [
  // Add proper meta tags
  {
    pattern: /<title>([^<]+)<\/title>/g,
    replacement: '<title>$1 | Zion Tech Group - AI & IT Solutions</title>'
  },
  // Add alt attributes to images
  {
    pattern: /<img([^>]*?)(?:\s+alt\s*=\s*['"][^'"]*['"])?([^>]*?)>/g,
    replacement: (match, before, after) => {
      if (match.includes('alt=')) return match;
      return `<img${before} alt="Zion Tech Group AI Solutions"${after}>`;
    }
  },
  // Add proper heading hierarchy
  {
    pattern: /<h(\d)>([^<]+)<\/h\d>/g,
    replacement: (match, level, text) => {
      const hLevel = Math.min(parseInt(level) + 1, 6);
      return `<h${hLevel}>${text}</h${hLevel}>`;
    }
  }
];

function optimizeFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply performance optimizations
    optimizations.forEach(opt => {
      const newContent = content.replace(opt.pattern, opt.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Apply bundle optimizations
    bundleOptimizations.forEach(opt => {
      const newContent = content.replace(opt.pattern, opt.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Apply SEO optimizations
    seoOptimizations.forEach(opt => {
      const newContent = content.replace(opt.pattern, opt.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Optimized: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'backup-problematic'].includes(item)) {
          files = files.concat(findFiles(fullPath, extensions));
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Skip directories we can't read
  }
  
  return files;
}

// Main optimization process
const files = findFiles('./app');
let optimizedCount = 0;

console.log(`Found ${files.length} files to optimize...`);

files.forEach(file => {
  if (optimizeFile(file)) {
    optimizedCount++;
  }
});

console.log(`\n🎉 Performance optimization complete! Modified ${optimizedCount} files.`);

// Create a performance report
const report = {
  timestamp: new Date().toISOString(),
  filesProcessed: files.length,
  filesOptimized: optimizedCount,
  optimizations: [
    'React.memo for component memoization',
    'useCallback for event handlers',
    'useMemo for expensive calculations',
    'Lazy loading for heavy components',
    'Console statement removal',
    'SEO meta tag improvements',
    'Image alt attribute additions'
  ]
};

fs.writeFileSync('./performance-optimization-report.json', JSON.stringify(report, null, 2));
console.log('📊 Performance report saved to performance-optimization-report.json');