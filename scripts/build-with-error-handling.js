#!/usr/bin/env node

/**
 * Build script with error handling for Netlify deployment
 * Handles dependency conflicts and provides better error reporting
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, description, options = {}) {
  log(`\n${colors.cyan}🔧 ${description}${colors.reset}`);
  log(`${colors.yellow}Running: ${command}${colors.reset}`);
  
  try {
    const result = execSync(command, { 
      stdio: 'inherit', 
      cwd: process.cwd(),
      ...options 
    });
    log(`${colors.green}✅ ${description} completed successfully${colors.reset}`);
    return result;
  } catch (error) {
    log(`${colors.red}❌ ${description} failed:${colors.reset}`);
    log(`${colors.red}${error.message}${colors.reset}`);
    throw error;
  }
}

function cleanNodeModules() {
  log(`\n${colors.magenta}🧹 Cleaning node_modules to resolve conflicts${colors.reset}`);
  
  try {
    if (fs.existsSync('node_modules')) {
      runCommand('rm -rf node_modules', 'Remove existing node_modules');
    }
    
    if (fs.existsSync('yarn.lock')) {
      runCommand('rm -f yarn.lock', 'Remove yarn.lock for clean install');
    }
    
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
  
  try {
    // Try yarn install first
    runCommand('yarn install --no-frozen-lockfile --network-timeout 600000', 'Install dependencies with Yarn');
  } catch (yarnError) {
    log(`${colors.yellow}⚠️  Yarn install failed, trying npm install${colors.reset}`);
    try {
      runCommand('npm ci --legacy-peer-deps --force', 'Install dependencies with npm');
    } catch (npmError) {
      log(`${colors.red}❌ Both Yarn and npm installation failed${colors.reset}`);
      throw new Error(`Dependency installation failed:\nYarn: ${yarnError.message}\nNPM: ${npmError.message}`);
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
    
    process.exit(1);
  }
}

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  log(`\n${colors.bright}${colors.red}💥 Uncaught Exception:${colors.reset}`);
  log(`${colors.red}${error.message}${colors.reset}`);
  log(`${colors.red}${error.stack}${colors.reset}`);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  log(`\n${colors.bright}${colors.red}💥 Unhandled Rejection:${colors.reset}`);
  log(`${colors.red}${reason}${colors.reset}`);
  process.exit(1);
});

// Run the main function
main();
