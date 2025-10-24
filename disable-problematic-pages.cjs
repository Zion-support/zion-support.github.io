#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of problematic pages to disable
const problematicPages = [
  'accessibility',
  'ai-analytics',
  'ai-api-management',
  'ai-api-manager',
  'ai-automated-reporting',
  'ai-business-intelligence',
  'ai-content-generator',
  'ai-content-management',
  'ai-customer-support',
  'ai-cybersecurity',
  'ai-data-analytics',
  'ai-sentiment-analyzer',
  'ai-telepathic-interface',
  'analytics-tools',
  'api-development',
  'api-docs',
  'blockchain-solutions-pro',
  'compliance',
  'database-services',
  'gdpr',
  'it-training',
  'mobile-development',
  'security',
  'security-automation',
  'security-monitoring',
  'security-monitoring-suite',
  'smart-city-infrastructure',
  'smart-contract-security-audit',
  'specialized-services',
  'system-administration',
  'system-integration',
  'system-status',
  'team'
];

// Create disabled directory
const disabledDir = './app-disabled-temp';
if (!fs.existsSync(disabledDir)) {
  fs.mkdirSync(disabledDir, { recursive: true });
}

// Move problematic pages
let movedCount = 0;
problematicPages.forEach(page => {
  const sourcePath = `./app/${page}`;
  const targetPath = `${disabledDir}/${page}`;
  
  if (fs.existsSync(sourcePath)) {
    try {
      fs.renameSync(sourcePath, targetPath);
      console.log(`Moved: ${page}`);
      movedCount++;
    } catch (error) {
      console.error(`Error moving ${page}:`, error.message);
    }
  }
});

console.log(`Moved ${movedCount} problematic pages to disabled directory.`);