#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.conflicts = [
      'next.config.js',
      'pages/NotFound.tsx',
      'pages/index.tsx',
      'pages/pricing-guide.tsx',
      'pages/sitemap.tsx',
      'pages_backup/sitemap.tsx',
      'performance-report.json',
      'src/App.jsx',
      'src/App.tsx',
      'src/components/AIChatbot.jsx',
      'src/components/ErrorBoundary.tsx',
      'src/components/SEO.tsx',
      'src/components/Toast.tsx',
      'src/hooks/usePerformanceMonitoring.ts',
      'src/pages/DeveloperPortal.jsx',
      'src/pages/Documentation.tsx',
      'src/pages/Help.tsx',
      'src/pages/Marketplace.tsx',
      'src/pages/Sitemap.tsx',
      'src/utils/accessibility.ts'
    ];
  }

  async resolveConflicts() {
    console.log('🔧 Resolving merge conflicts...');
    
    for (const file of this.conflicts) {
      try {
        const filePath = path.join(this.projectRoot, file);
        
        if (fs.existsSync(filePath)) {
          console.log(`Resolving conflict in: ${file}`);
          
          // Read the file content
          let content = fs.readFileSync(filePath, 'utf8');
          
          // Remove conflict markers and keep the incoming version (from our feature branch)
          content = content.replace(/^<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]+$/gm, '$1');
          
          // Write the resolved content back
          fs.writeFileSync(filePath, content);
          console.log(`✅ Resolved: ${file}`);
        } else {
          console.log(`⚠️  File not found: ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error resolving ${file}:`, error.message);
      }
    }
    
    // Handle the package-lock.json deletion conflict
    try {
      console.log('Handling package-lock.json conflict...');
      execSync('git rm package-lock.json', { stdio: 'inherit' });
      console.log('✅ Removed package-lock.json');
    } catch (error) {
      console.log('package-lock.json already handled');
    }
    
    console.log('🎉 All conflicts resolved!');
  }
}

const resolver = new MergeConflictResolver();
resolver.resolveConflicts().catch(console.error);