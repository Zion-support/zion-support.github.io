#!/usr/bin/env node

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
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, description) {
  log(`\n${colors.cyan}🔄 ${description}...${colors.reset}`);
  try {
    const output = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    log(`${colors.green}✅ ${description} completed successfully${colors.reset}`);
    return { success: true, output };
  } catch (error) {
    log(`${colors.red}❌ ${description} failed:${colors.reset}`, 'red');
    log(error.message, 'red');
    return { success: false, error: error.message };
  }
}

function checkEnvironment() {
  log(`\n${colors.blue}🔍 Checking deployment environment...${colors.reset}`);
  
  // Check if we're in a Git repository
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'pipe' });
    log(`${colors.green}✅ Git repository detected${colors.reset}`);
  } catch (error) {
    log(`${colors.red}❌ Not in a Git repository${colors.reset}`, 'red');
    return false;
  }
  
  // Check if dist directory exists
  if (fs.existsSync('dist')) {
    log(`${colors.green}✅ Build directory (dist) exists${colors.reset}`);
  } else {
    log(`${colors.yellow}⚠️  Build directory (dist) not found. Running build...${colors.reset}`);
    const buildResult = runCommand('npm run build', 'Building application');
    if (!buildResult.success) {
      return false;
    }
  }
  
  // Check for required environment variables
  const requiredEnvVars = ['NODE_ENV'];
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    log(`${colors.yellow}⚠️  Missing environment variables: ${missingVars.join(', ')}${colors.reset}`);
    log(`${colors.yellow}Setting NODE_ENV to production...${colors.reset}`);
    process.env.NODE_ENV = 'production';
  }
  
  return true;
}

function deployToVercel() {
  log(`\n${colors.blue}🚀 Deploying to Vercel...${colors.reset}`);
  
  // Check if Vercel CLI is installed
  try {
    execSync('vercel --version', { stdio: 'pipe' });
    log(`${colors.green}✅ Vercel CLI found${colors.reset}`);
  } catch (error) {
    log(`${colors.yellow}⚠️  Vercel CLI not found. Installing...${colors.reset}`);
    const installResult = runCommand('npm install -g vercel', 'Installing Vercel CLI');
    if (!installResult.success) {
      log(`${colors.red}❌ Failed to install Vercel CLI${colors.reset}`, 'red');
      return false;
    }
  }
  
  // Deploy to Vercel
  const deployResult = runCommand('vercel --prod', 'Deploying to Vercel');
  return deployResult.success;
}

function deployToNetlify() {
  log(`\n${colors.blue}🚀 Deploying to Netlify...${colors.reset}`);
  
  // Check if Netlify CLI is installed
  try {
    execSync('netlify --version', { stdio: 'pipe' });
    log(`${colors.green}✅ Netlify CLI found${colors.reset}`);
  } catch (error) {
    log(`${colors.yellow}⚠️  Netlify CLI not found. Installing...${colors.reset}`);
    const installResult = runCommand('npm install -g netlify-cli', 'Installing Netlify CLI');
    if (!installResult.success) {
      log(`${colors.red}❌ Failed to install Netlify CLI${colors.reset}`, 'red');
      return false;
    }
  }
  
  // Deploy to Netlify
  const deployResult = runCommand('netlify deploy --prod --dir=dist', 'Deploying to Netlify');
  return deployResult.success;
}

function createDeploymentScript() {
  log(`\n${colors.blue}📝 Creating deployment script...${colors.reset}`);
  
  const scriptContent = `#!/bin/bash

# Deployment script for Zion Tech Group Website
# This script handles deployment to various platforms

set -e

echo "🚀 Starting deployment process..."

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "📦 Building application..."
    npm run build
fi

# Deploy based on platform
case "$1" in
    "vercel")
        echo "🚀 Deploying to Vercel..."
        vercel --prod
        ;;
    "netlify")
        echo "🚀 Deploying to Netlify..."
        netlify deploy --prod --dir=dist
        ;;
    "github-pages")
        echo "🚀 Deploying to GitHub Pages..."
        npm run build
        npm run deploy:gh-pages
        ;;
    *)
        echo "❌ Unknown deployment target: $1"
        echo "Available targets: vercel, netlify, github-pages"
        exit 1
        ;;
esac

echo "✅ Deployment completed successfully!"
`;

  fs.writeFileSync('deploy.sh', scriptContent);
  execSync('chmod +x deploy.sh', { stdio: 'pipe' });
  log(`${colors.green}✅ Deployment script created: deploy.sh${colors.reset}`);
}

function main() {
  const args = process.argv.slice(2);
  const platform = args[0] || 'vercel';
  
  log(`${colors.bright}${colors.magenta}🚀 Starting Deployment Process${colors.reset}`);
  log(`${colors.blue}Platform: ${platform}${colors.reset}`);
  
  const startTime = Date.now();
  
  // Step 1: Check environment
  if (!checkEnvironment()) {
    log(`${colors.red}❌ Environment check failed${colors.reset}`, 'red');
    process.exit(1);
  }
  
  // Step 2: Create deployment script
  createDeploymentScript();
  
  // Step 3: Deploy based on platform
  let deploySuccess = false;
  
  switch (platform) {
    case 'vercel':
      deploySuccess = deployToVercel();
      break;
    case 'netlify':
      deploySuccess = deployToNetlify();
      break;
    case 'github-pages':
      log(`${colors.yellow}⚠️  GitHub Pages deployment requires manual setup${colors.reset}`);
      log(`${colors.blue}Please follow the GitHub Pages setup guide${colors.reset}`);
      deploySuccess = true;
      break;
    default:
      log(`${colors.red}❌ Unknown platform: ${platform}${colors.reset}`, 'red');
      log(`${colors.blue}Available platforms: vercel, netlify, github-pages${colors.reset}`);
      process.exit(1);
  }
  
  // Summary
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  log(`\n${colors.bright}${colors.blue}📊 Deployment Summary${colors.reset}`);
  log(`${colors.blue}Platform: ${platform}${colors.reset}`);
  log(`${colors.blue}Duration: ${duration}s${colors.reset}`);
  log(`${colors.blue}Status: ${deploySuccess ? '✅ Success' : '❌ Failed'}${colors.reset}`);
  
  if (deploySuccess) {
    log(`\n${colors.green}🎉 Deployment completed successfully!${colors.reset}`);
    process.exit(0);
  } else {
    log(`\n${colors.red}💥 Deployment failed${colors.reset}`, 'red');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, checkEnvironment, deployToVercel, deployToNetlify };