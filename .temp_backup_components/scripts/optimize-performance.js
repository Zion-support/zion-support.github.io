#!/usr/bin/env node

/**
 * Performance Optimization Script
 * Optimizes the application for better performance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Performance Optimization...');

// Optimize images
function optimizeImages() {
  console.log('📸 Optimizing images...');
  try {
    execSync('npx @squoosh/cli --webp auto src/assets/images/*', { stdio: 'inherit' });
    console.log('✅ Images optimized');
  } catch (error) {
    console.log('⚠️ Image optimization skipped (squoosh not available)');
  }
}

// Generate sitemap
function generateSitemap() {
  console.log('🗺️ Generating sitemap...');
  try {
    execSync('npm run sitemap', { stdio: 'inherit' });
    console.log('✅ Sitemap generated');
  } catch (error) {
    console.log('❌ Sitemap generation failed');
  }
}

// Bundle analysis
function analyzeBundle() {
  console.log('📊 Analyzing bundle...');
  try {
    execSync('npm run analyze', { stdio: 'inherit' });
    console.log('✅ Bundle analysis complete');
  } catch (error) {
    console.log('❌ Bundle analysis failed');
  }
}

// Run optimizations
async function optimize() {
  optimizeImages();
  generateSitemap();
  analyzeBundle();
  
  console.log('🎉 Performance optimization complete!');
}

optimize().catch(console.error);
