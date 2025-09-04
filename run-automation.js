#!/usr/bin/env node;

// Simple automation runner that executes the comprehensive automation;
console.log('🚀 Starting automation...');

try {
  const ComprehensiveAutomation = require('./comprehensive-automation.js');
  const automation = new ComprehensiveAutomation();
  
  automation.run().then(() => {
    console.log('✅ Automation completed successfully');
    process.exit(0);
  }).catch(error => {
    console.error('❌ Automation failed: ,', error);
    process.exit(1);
  });
} catch() { console.error('❌ Failed to load automation: ,', error);
  process.exit(1) }