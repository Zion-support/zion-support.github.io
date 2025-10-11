#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// 1. Clean previous builds

try {
  execSync('rm -rf dist node_modules/.vite .turbo', { stdio: 'inherit' });

} catch (error) {

}

// 2. Optimize package.json scripts

const _packageJsonPath = path.join(process.cwd(), 'package.json');
const _packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add optimized build scripts
packageJson.scripts = {
  ...packageJson.scripts,
  'build:optimized': 'NODE_OPTIONS="--max-old-space-size=4096 --no-warnings" vite build --mode production --minify terser',
  'build:fast': 'NODE_OPTIONS="--max-old-space-size=2048" vite build --mode production --minify esbuild',
  'build:analyze': 'NODE_OPTIONS="--max-old-space-size=4096" vite build --mode analyze && npx vite-bundle-analyzer dist/stats.html',
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// 3. Create optimized vite config

const _viteConfigPath = path.join(process.cwd(), 'vite.config.js');
let _viteConfig = fs.readFileSync(viteConfigPath, 'utf8');

// Add performance optimizations
const optimizations = `
  // Performance optimizations
  esbuild: {
    target: 'es2015',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
  // Reduce memory usage
  build: {
    ...build,
    rollupOptions: {
      ...rollupOptions,
      maxParallelFileOps: 1, // Reduce parallel operations to prevent memory issues
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
    },
  },
`;

// Insert optimizations before the closing bracket
viteConfig = viteConfig.replace(
  /(\s+}\s*);\s*$/,
  `$1,${optimizations}\n});`
);

fs.writeFileSync(viteConfigPath, viteConfig);

// 4. Create .npmrc for better caching

const npmrcContent = `# Optimize npm for better performance
prefer-offline=true
audit-level=moderate
fund=false
update-notifier=false
# Reduce memory usage
maxsockets=1
`;

fs.writeFileSync('.npmrc', npmrcContent);

// 5. Create optimized netlify.toml

const _netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
let _netlifyToml = fs.readFileSync(netlifyTomlPath, 'utf8');

// Add build optimizations
const buildOptimizations = `
# Build optimizations
[build.processing]
  skip_processing = false

[build.processing.css]
  bundle = true
  minify = true

[build.processing.js]
  bundle = true
  minify = true

[build.processing.html]
  pretty_urls = true

[build.processing.images]
  compress = true
`;

// Insert optimizations before the [dev] section
netlifyToml = netlifyToml.replace(
  /(\[dev\])/,
  `${buildOptimizations}\n$1`
);

fs.writeFileSync(netlifyTomlPath, netlifyToml);


