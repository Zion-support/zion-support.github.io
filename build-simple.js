#!/usr/bin/env node

const { spawn } = require('child_process');

console.log('Building Next.js application...');

const buildProcess = spawn('npx', ['next', 'build'], {
  stdio: 'inherit',
  shell: true
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('Build completed successfully!');
  } else {
    console.error(`Build failed with exit code ${code}`);
  }
  process.exit(code);
});

buildProcess.on('error', (error) => {
  console.error('Failed to start build process:', error);
  process.exit(1);
});