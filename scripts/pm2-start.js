#!/usr/bin/env node,
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
console.log('🚀 Starting PM2 automation processes...');
// Check if PM2 is installed,
try {,
  execSync('pm2 --version', { stdio: 'pipe' ,});
  console.log('✅ PM2 is installed');
} catch (error) {,
  console.error('❌ PM2 is not installed. Please install it first: npm install -g pm2');
  process.exit(1),
}
,
// Function to start automation processes,
async function startAutomation() {,
  try {,
    // Start the main application,
    console.log('📱 Starting main application...');
    execSync('pm2 start ecosystem.config.cjs --only apps', { stdio: 'inherit' ,});
    // Wait a moment for apps to start,
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Start automation processes,
    console.log('🤖 Starting automation processes...');
    execSync('pm2 start ecosystem.config.cjs --only automation', { stdio: 'inherit' ,});
    // Save PM2 configuration,
    console.log('💾 Saving PM2 configuration...');
    execSync('pm2 save', { stdio: 'inherit' ,});
    // Show status,
    console.log('📊 PM2 Status: ');
    execSync('pm2 list', { stdio: 'inherit' ,});
    console.log('✅ All PM2 processes started successfully!');
    console.log('📝 Use "pm2 logs" to view logs');
    console.log('📊 Use "pm2 monit" to monitor processes');
    console.log('🛑 Use "pm2 stop all" to stop all processes');
  } catch (error) {,
    console.error('❌ Failed to start PM2 processes:', error.message);
    process.exit(1);
  }
}
,
// Handle graceful shutdown,
process.on('SIGINT', () => {,
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});
process.on('SIGTERM', () => {,
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});
// Start automation,
startAutomation().catch(error => {,
  console.error('❌ Failed to start automation:', error);
  process.exit(1);
});