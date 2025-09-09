#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Unused dependencies to remove
const unusedDeps = [
  '@google-analytics/data',
  '@google/generative-ai',
  '@radix-ui/react-accordion',
  '@radix-ui/react-alert-dialog',
  '@radix-ui/react-avatar',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-collapsible',
  '@radix-ui/react-context-menu',
  '@radix-ui/react-dialog',
  '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-hover-card',
  '@radix-ui/react-menubar',
  '@radix-ui/react-navigation-menu',
  '@radix-ui/react-popover',
  '@radix-ui/react-scroll-area',
  '@radix-ui/react-separator',
  '@radix-ui/react-switch',
  '@radix-ui/react-tabs',
  '@radix-ui/react-toggle',
  '@radix-ui/react-toggle-group',
  '@radix-ui/react-tooltip',
  '@sendgrid/mail',
  '@stripe/react-stripe-js',
  '@stripe/stripe-js',
  '@types/lodash.debounce',
  'axios-retry',
  'cmdk',
  'firebase',
  'form-data',
  'formik',
  'fuse.js',
  'i18next-localstorage-cache',
  'inquirer',
  'jspdf-autotable',
  'lodash.debounce',
  'lottie-react',
  'mongoose',
  'morgan',
  'notistack',
  'react-datepicker',
  'react-day-picker',
  'react-error-boundary',
  'react-focus-lock',
  'react-loading-skeleton',
  'react-player',
  'react-resizable-panels',
  'recharts',
  'socket.io-client',
  'stripe',
  'vaul',
  'yup'
];

// Unused devDependencies to remove
const unusedDevDeps = [
  '@commitlint/cli',
  '@commitlint/config-conventional',
  '@tailwindcss/postcss',
  '@types/node-cron',
  'autoprefixer',
  'identity-obj-proxy',
  'jest-environment-jsdom',
  'node-mocks-http',
  'postcss',
  'prisma',
  'rimraf',
  'ts-jest'
];

console.log('🧹 Removing unused dependencies...');

// Remove unused dependencies
let removedCount = 0;
unusedDeps.forEach(dep => {
  if (packageJson.dependencies && packageJson.dependencies[dep]) {
    delete packageJson.dependencies[dep];
    removedCount++;
    console.log(`  ✓ Removed dependency: ${dep}`);
  }
});

// Remove unused devDependencies
unusedDevDeps.forEach(dep => {
  if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
    delete packageJson.devDependencies[dep];
    removedCount++;
    console.log(`  ✓ Removed devDependency: ${dep}`);
  }
});

// Write updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`\n✨ Removed ${removedCount} unused dependencies!`);
console.log('📦 Run "npm install" to update node_modules');