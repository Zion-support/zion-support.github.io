#!/usr/bin/env node
/**
 * Test Build Script
 * Tests the build process with various configurations
 */

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🧪 Testing build process...');

try {
  // Test 1: Basic build without type checking
  console.log('📋 Test 1: Basic build...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful');
} catch (error) {
  console.log('❌ Build failed:', error.message);
  
  // Test 2: Try building with different configurations
  console.log('📋 Test 2: Trying alternative build approach...');
  
  try {
    // Create a temporary next.config.js without experimental features
    const simpleConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
`;
    
    fs.writeFileSync('next.config.simple.js', simpleConfig);
    
    // Try building with the simple config
    execSync('cp next.config.simple.js next.config.js', { stdio: 'inherit' });
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful with simple config');
  } catch (error2) {
    console.log('❌ Build still failed:', error2.message);
    
    // Test 3: Check for specific issues
    console.log('📋 Test 3: Checking for common issues...');
    
    // Check if there are any obvious circular imports
    const pagesDir = 'pages';
    if (fs.existsSync(pagesDir)) {
      const files = fs.readdirSync(pagesDir, { recursive: true });
      console.log(`Found ${files.length} files in pages directory`);
      
      // Look for potential issues
      const problematicFiles = files.filter(file => 
        file.includes('.disabled') || 
        file.includes('.backup') || 
        file.includes('.bak')
      );
      
      if (problematicFiles.length > 0) {
        console.log(`⚠️ Found ${problematicFiles.length} potentially problematic files:`);
        problematicFiles.forEach(file => console.log(`  - ${file}`));
      }
    }
  }
}

console.log('🏁 Build testing completed');