#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting build process with error handling...');

try {
  // Clean up any existing node_modules to prevent conflicts
  console.log('🧹 Cleaning up existing node_modules...');
  if (fs.existsSync('node_modules')) {
    fs.rmSync('node_modules', { recursive: true, force: true });
  }
  
  // Clean yarn cache
  console.log('🧹 Cleaning yarn cache...');
  try {
    execSync('yarn cache clean', { stdio: 'inherit' });
  } catch (error) {
    console.log('⚠️  Yarn cache clean failed, continuing...');
  }
  
  // Install dependencies with clean slate
  console.log('📦 Installing dependencies...');
  execSync('yarn install --frozen-lockfile --network-timeout 100000', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  // Run the build
  console.log('🔨 Running build...');
  execSync('yarn build', { stdio: 'inherit' });
  
  console.log('✅ Build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  
  // Try alternative approach
  console.log('🔄 Trying alternative build approach...');
  
  try {
    // Remove yarn.lock and reinstall
    if (fs.existsSync('yarn.lock')) {
      fs.unlinkSync('yarn.lock');
    }
    
<<<<<<< HEAD
    // Install with npm instead
    execSync('npm install', { stdio: 'inherit' });
    execSync('npm run build', { stdio: 'inherit' });
=======
    log(`${colors.green}✅ Cleanup completed${colors.reset}`);
  } catch (error) {
    log(`${colors.yellow}⚠️  Cleanup failed, continuing anyway: ${error.message}${colors.reset}`);
  }
}

function installDependencies() {
  log(`\n${colors.blue}📦 Installing dependencies${colors.reset}`);
  
  // Set environment variables for better dependency resolution
  process.env.YARN_ENABLE_IMMUTABLE_INSTALLS = 'false';
  process.env.YARN_DEDUPE = 'false';
  process.env.NPM_CONFIG_LEGACY_PEER_DEPS = 'true';
  process.env.NPM_CONFIG_FORCE = 'true';
  process.env.YARN_NETWORK_TIMEOUT = '600000';
  
  try {
    // Try yarn install with specific flags to handle the arg package issue
    runCommand('yarn install --no-frozen-lockfile --network-timeout 600000 --ignore-engines --ignore-optional', 'Install dependencies with Yarn');
  } catch (yarnError) {
    log(`${colors.yellow}⚠️  Yarn install failed, trying with cache cleanup${colors.reset}`);
    try {
      // Clear yarn cache and try again
      runCommand('yarn cache clean', 'Clear Yarn cache');
      runCommand('yarn install --no-frozen-lockfile --network-timeout 600000 --ignore-engines --ignore-optional', 'Retry Yarn install after cache clear');
    } catch (yarnRetryError) {
      log(`${colors.yellow}⚠️  Yarn retry failed, trying npm install${colors.reset}`);
      try {
        runCommand('npm ci --legacy-peer-deps --force', 'Install dependencies with npm');
      } catch (npmError) {
        log(`${colors.red}❌ All installation methods failed${colors.reset}`);
        throw new Error(`Dependency installation failed:\nYarn: ${yarnError.message}\nYarn Retry: ${yarnRetryError.message}\nNPM: ${npmError.message}`);
      }
    }
  }
}

function buildProject() {
  log(`\n${colors.blue}🏗️  Building project${colors.reset}`);
  
  try {
    runCommand('npm run build', 'Build the project');
  } catch (error) {
    log(`${colors.red}❌ Build failed${colors.reset}`);
    throw error;
  }
}

function verifyBuild() {
  log(`\n${colors.blue}🔍 Verifying build output${colors.reset}`);
  
  const distPath = path.join(process.cwd(), 'dist');
  
  if (!fs.existsSync(distPath)) {
    throw new Error('Build output directory "dist" not found');
  }
  
  const files = fs.readdirSync(distPath);
  if (files.length === 0) {
    throw new Error('Build output directory "dist" is empty');
  }
  
  log(`${colors.green}✅ Build verification passed${colors.reset}`);
  log(`${colors.cyan}📁 Build output contains ${files.length} files/directories${colors.reset}`);
}

async function main() {
  try {
    log(`${colors.bright}${colors.blue}🚀 Starting Netlify build with error handling${colors.reset}`);
    log(`${colors.cyan}Working directory: ${process.cwd()}${colors.reset}`);
    
    // Step 1: Clean node_modules if there are conflicts
    if (process.env.NETLIFY === 'true') {
      cleanNodeModules();
    }
    
    // Step 2: Install dependencies
    installDependencies();
    
    // Step 3: Build the project
    buildProject();
    
    // Step 4: Verify build output
    verifyBuild();
    
    log(`\n${colors.bright}${colors.green}🎉 Build completed successfully!${colors.reset}`);
    
  } catch (error) {
    log(`\n${colors.bright}${colors.red}💥 Build failed with error:${colors.reset}`);
    log(`${colors.red}${error.message}${colors.reset}`);
    
    // Log additional debugging information
    log(`\n${colors.yellow}🔍 Debug Information:${colors.reset}`);
    log(`- Node version: ${process.version}`);
    log(`- Platform: ${process.platform}`);
    log(`- Architecture: ${process.arch}`);
    log(`- Working directory: ${process.cwd()}`);
    log(`- Environment: ${JSON.stringify(process.env, null, 2)}`);
>>>>>>> pr-17256
    
    console.log('✅ Alternative build completed successfully!');
  } catch (altError) {
    console.error('❌ Alternative build also failed:', altError.message);
    process.exit(1);
  }
}