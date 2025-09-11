#!/usr/bin/env node
const path = require('path');

try {
  const Enhancer = require(path.join(__dirname, 'security-enhancer.cjs'));
  if (typeof Enhancer === 'function') {
    const e = new Enhancer();
    e.runAllSecurityEnhancements && e.runAllSecurityEnhancements();
  } else {
    // Fallback: require the file to execute if it runs on import
    require(path.join(__dirname, 'security-enhancer.cjs'));
  }
} catch (e) {
  console.error('Failed to run security enhancer:', e.message);
  process.exit(1);
}