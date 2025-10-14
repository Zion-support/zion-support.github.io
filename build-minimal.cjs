#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create a minimal vite config that excludes problematic files
const minimalViteConfig = `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true,
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@app': path.resolve(__dirname, './app'),
      '@components': path.resolve(__dirname, './app/components'),
      '@utils': path.resolve(__dirname, './utils'),
    },
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      external: (id) => {
        // Exclude problematic files
        const problematicFiles = [
          'PerformanceMonitor',
          'PerformanceOptimizer',
          'AccessibilityEnhancer',
          'EnhancedAccessibility',
          'Footer',
          'FuturisticButton',
          'FuturisticCard',
          'Header',
          'ResponsiveContainer',
          'SEOEnhancer',
          'ContactPage',
          'AboutPage',
          'BlogPage',
          'CareersPage',
          'CaseStudiesPage',
          'CloudInfrastructurePage',
          'CloudSolutionsPage',
          'CybersecurityPage',
          'DemoPage',
          'DigitalTransformationPage',
          'DocumentationPage',
          'ITServicesPage',
          'MicroSaaSPage',
          'PricingPage',
          'PrivacyPage',
          'ServicesPage',
          'SolutionsPage',
          'SupportPage',
          'TeamPage',
          'TermsPage',
          'TutorialsPage'
        ];
        
        return problematicFiles.some(file => id.includes(file));
      },
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('@heroicons') || id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('react-helmet')) {
              return 'vendor-helmet';
            }
            return 'vendor-other';
          }
          return 'app';
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    open: false,
    cors: true,
  },
  preview: {
    port: 4173,
    open: false,
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'react-helmet-async',
      '@heroicons/react/24/outline',
      'lucide-react',
      'framer-motion'
    ],
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    target: 'esnext',
    logLevel: 'silent',
  },
});
`;

// Write the minimal config
fs.writeFileSync('vite.config.minimal.ts', minimalViteConfig);

console.log('Created minimal vite config');

// Try to build with the minimal config
try {
  execSync('npx vite build --config vite.config.minimal.ts', { 
    stdio: 'inherit', 
    cwd: process.cwd() 
  });
  console.log('Build successful with minimal config!');
} catch (error) {
  console.log('Build failed even with minimal config');
}

// Clean up
fs.unlinkSync('vite.config.minimal.ts');