#!/usr/bin/env node

/**
 * Zion Project Error Capture Script
 * 
 * Quick script to capture console errors from the Zion project
 */

const { spawn } = require('child_process');
const path = require('path');

async function captureZionErrors() {
  console.log('🚀 Starting Zion Error Capture...');
  
  const automationDir = path.join(__dirname, 'automation');
  const automationScript = path.join(automationDir, 'console-error-capture.js');
  
  if (!require('fs').existsSync(automationScript)) {
    console.error('❌ Automation script not found. Run the integration first.');
    process.exit(1);
  }
  
  // Change to automation directory
  process.chdir(automationDir);
  
  // Run the automation
  const child = spawn('node', ['console-error-capture.js', '--headless'], {
    stdio: 'inherit',
    env: { ...process.env, ZION_INTEGRATION: 'true' }
  });
  
  child.on('close', (code) => {
    console.log(`\n🎯 Error capture completed with code: ${code}`);
    process.exit(code);
  });
  
  child.on('error', (error) => {
    console.error('❌ Failed to start error capture:', error);
    process.exit(1);
  });
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down gracefully...');
  process.exit(0);
});

captureZionErrors().catch(console.error);