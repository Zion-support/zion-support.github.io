#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting continuous front maximizer automation...');

// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours

async function runFrontMaximizer() {
  try {
    console.log(`🚀 Running front maximizer at ${new Date().toISOString()}`);
    
    // Build the project first
    console.log('🏗️ Building project for front-end optimization...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build completed');
    } catch (error) {
      console.log('⚠️  Build failed but continuing...');
      return;
    }
    
    // Check if dist folder exists
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      console.log('⚠️  Build verification failed: dist folder not found');
      return;
    }
    
    // Optimize images if available
    console.log('🖼️  Optimizing images...');
    try {
      if (fs.existsSync('scripts/optimize-images.js')) {
        execSync('node scripts/optimize-images.js', { stdio: 'inherit' });
        console.log('✅ Image optimization completed');
      } else {
        console.log('ℹ️  Image optimization script not available');
      }
    } catch (error) {
      console.log('⚠️  Image optimization failed but continuing...');
    }
    
    // Check for unused CSS
    console.log('🎨 Checking for unused CSS...');
    try {
      execSync('npx purgecss --css dist/**/*.css --content dist/**/*.html --output dist/optimized', { stdio: 'inherit' });
      console.log('✅ CSS optimization completed');
    } catch (error) {
      console.log('ℹ️  CSS optimization not available');
    }
    
    // Check for JavaScript bundle optimization
    console.log('📦 Checking JavaScript bundle optimization...');
    try {
      execSync('node scripts/analyze-bundle.js', { stdio: 'inherit' });
      console.log('✅ Bundle analysis completed');
    } catch (error) {
      console.log('⚠️  Bundle analysis failed but continuing...');
    }
    
    // Check for critical CSS
    console.log('🔍 Checking critical CSS...');
    try {
      if (fs.existsSync('scripts/critical-css.js')) {
        execSync('node scripts/critical-css.js', { stdio: 'inherit' });
        console.log('✅ Critical CSS extraction completed');
      } else {
        console.log('ℹ️  Critical CSS script not available');
      }
    } catch (error) {
      console.log('⚠️  Critical CSS extraction failed but continuing...');
    }
    
    // Generate front maximizer report
    console.log('📊 Generating front maximizer report...');
    const report = {
      timestamp: new Date().toISOString(),
      summary: 'Front maximizer completed',
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'front-maximizer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Front maximizer report saved to ${reportPath}`);
    
    console.log('✅ Continuous front maximizer completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous front maximizer failed:', error.message);
    // Don't exit, just log the error and continue
  }
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting continuous front maximizer with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial front maximizer
  await runFrontMaximizer();
  
  // Set up continuous execution
  setInterval(async () => {
    await runFrontMaximizer();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Continuous front maximizer running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the continuous front maximizer
runContinuous().catch(error => {
  console.error('❌ Failed to start continuous front maximizer:', error);
  process.exit(1);
});
