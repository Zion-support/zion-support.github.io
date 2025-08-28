#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting PM2 automation processes...');

async function startPM2Processes() {
  try {
    // Check if PM2 is installed
    try {
      execSync('pm2 --version', { stdio: 'inherit' });
      console.log('✅ PM2 is installed');
    } catch (error) {
      console.log('📦 Installing PM2 globally...');
      execSync('npm install -g pm2', { stdio: 'inherit' });
      console.log('✅ PM2 installed successfully');
    }
    
    // Start main applications
    console.log('🚀 Starting main applications...');
    execSync('pm2 start ecosystem.config.js --only apps', { stdio: 'inherit' });
    console.log('✅ Main applications started');
    
    // Start automation processes
    console.log('🤖 Starting automation processes...');
    execSync('pm2 start ecosystem.config.js --only automation', { stdio: 'inherit' });
    console.log('✅ Automation processes started');
    
    // Save PM2 configuration
    console.log('💾 Saving PM2 configuration...');
    execSync('pm2 save', { stdio: 'inherit' });
    console.log('✅ PM2 configuration saved');
    
    // Setup PM2 startup script
    console.log('🔧 Setting up PM2 startup script...');
    execSync('pm2 startup', { stdio: 'inherit' });
    console.log('✅ PM2 startup script configured');
    
    // Show status
    console.log('\n📊 PM2 Status:');
    execSync('pm2 status', { stdio: 'inherit' });
    
    console.log('\n🎉 PM2 automation setup completed successfully!');
    console.log('\n📋 Available commands:');
    console.log('  pm2 start ecosystem.config.js --only apps          # Start main apps');
    console.log('  pm2 start ecosystem.config.js --only automation    # Start automation');
    console.log('  pm2 stop all                                       # Stop all processes');
    console.log('  pm2 restart all                                    # Restart all processes');
    console.log('  pm2 logs                                           # View logs');
    console.log('  pm2 monit                                          # Monitor processes');
    console.log('  pm2 delete all                                     # Remove all processes');
    
  } catch (error) {
    console.error('❌ PM2 startup failed:', error.message);
    process.exit(1);
  }
}

// Run the PM2 startup
startPM2Processes();
