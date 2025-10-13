#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
'
console.log('🔧 Starting comprehensive error fix...');

// Function to clean merge conflicts
function cleanMergeConflicts(content) {
  return content
    .replace(/
    .replace(/
    .replace(/
}

// Function to fix unterminated strings
function fixUnterminatedStrings(content) {
  // Fix common unterminated string patterns'
  content = content.replace(/'([^']*)$/gm, }'$1'});
  content = content.replace(/}([^}]*)$/gm, '}$1}');
  content = content.replace(/`([^`]*)$/gm, '`$1`');
  
  // Fix strings with extra quotes'}
  content = content.replace(/'([^']*)'/g, }'$1'});
  content = content.replace(/}([^}]*)}/g, '}$1}');
  content = content.replace(/`([^`]*)`/g, '`$1`');
  
  return content;
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix extra quotes and semicolons'
  content = content.replace(/;/g, ';);
  content = content.replace(/;/g, ';);
  content = content.replace(/;/g, ';);
  content = content.replace(/}/g, }');
  content = content.replace(/}/g, }');
  content = content.replace(/}/g, }');
  
  // Fix malformed JSX'
  content = content.replace(/<([^>]*)\s*>/g, '<$1>');
  content = content.replace(/<\/([^>]*)\s*>/g, '</$1>');
  
  // Fix object syntax'
  content = content.replace(/}/g, }');
  content = content.replace(/]/g, ']');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {'
    const content = fs.readFileSync(filePath, 'utf8');
    let cleaned = content;
    
    // Apply fixes
    cleaned = cleanMergeConflicts(cleaned);
    cleaned = fixUnterminatedStrings(cleaned);
    cleaned = fixSyntaxErrors(cleaned);
    
    // Only write if content changed
    if (cleaned !== content) {'
      fs.writeFileSync(filePath, cleaned, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {`
    console.log(`❌ Error processing ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find all relevant files'
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories'
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const rootDir = process.cwd();
const files = findFiles(rootDir);
`
console.log(`📁 Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}
`
console.log(`🎉 Fixed ${fixedCount} files!`);

// Fix specific critical files'
console.log('🔧 Fixing critical configuration files...');

// Fix vite.config.ts'
const viteConfigPath = path.join(rootDir, 'vite.config.ts');
if (fs.existsSync(viteConfigPath)) {'`
  const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true,'
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    alias: {'
      '@': path.resolve(__dirname, './'),'
      '@app': path.resolve(__dirname, './app'),'
      '@components': path.resolve(__dirname, './app/components'),'
      '@utils': path.resolve(__dirname, './utils'),
    },
  },
  build: {'
    outDir: 'dist','
    target: 'esnext','
    minify: 'esbuild','
    sourcemap: process.env.NODE_ENV === 'development',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {'
          if (id.includes('node_modules')) {'
            if (id.includes('react') || id.includes('react-dom')) {'
              return 'vendor-react';
            }'
            if (id.includes('react-router')) {'
              return 'vendor-router';
            }'
            if (id.includes('@heroicons') || id.includes('lucide-react')) {'
              return 'vendor-icons';
            }'
            if (id.includes('framer-motion')) {'
              return 'vendor-motion';
            }'
            if (id.includes('react-helmet')) {'
              return 'vendor-helmet';
            }'
            return 'vendor-other';
          }
          '
          if (id.includes('/app/pages/')) {'
            return 'pages';
          }'
          if (id.includes('/app/components/')) {'
            return 'components';
          }
        },
        assetFileNames: (assetInfo) => {'
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {`
            return \`assets/images/[name]-[hash][extname]\`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {`
            return \`assets/fonts/[name]-[hash][extname]\`;
          }`
          return \`assets/[name]-[hash][extname]\`;
        },'
        chunkFileNames: 'assets/js/[name]-[hash].js','
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    chunkSizeWarningLimit: 500,
    reportCompressedSize: true,
    treeshake: true,
  },
  server: {
    port: 3000,
    open: false,
    cors: true,
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 4173,
    open: false,
  },
  optimizeDeps: {
    include: ['
      'react','
      'react-dom','
      'react-router-dom','
      'react-helmet-async','
      '@heroicons/react/24/outline','
      'lucide-react','
      'framer-motion'
    ],'
    exclude: ['@vite/client', '@vite/env'],
  },
  esbuild: {'
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],'
    target: 'esnext',
  },
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  },
  css: {
    devSourcemap: true,
  },`
});;
  
  fs.writeFileSync(viteConfigPath, viteConfig);
  console.log('✅ Fixed vite.config.ts');
}
'
console.log('🎉 Error fixing completed!');