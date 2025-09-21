#!/usr/bin/env node

// Set the OpenSSL legacy provider before importing Next.js
process.env.NODE_OPTIONS = '--openssl-legacy-provider';

// Import and run the Next.js build
const { spawn } = require('child_process');

const buildProcess = spawn('npx', ['next', 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_OPTIONS: '--openssl-legacy-provider'
  }
});

buildProcess.on('close', (code) => {
  process.exit(code);
});