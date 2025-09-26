#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Fixing malformed onClick handlers...\n');

// Function to fix malformed onClick handlers
function fixMalformedOnClick(content) {
  let fixes = 0;

  // Fix pattern: onClick={() = aria-label="functionName(...)}
  const malformedOnClickRegex = /onClick={() = aria-label="([^"]*)"([^}]*)}/g;
  content = content.replace(malformedOnClickRegex, (match, ariaLabel, rest) => {
    fixes++;
    // Extract function name from aria-label
    const functionName = ariaLabel.split('(')[0];
    return `onClick={() => ${functionName}(${rest})} aria-label="${ariaLabel}"`;
  });

  // Fix pattern: onClick={() = aria-label="setState(...)}
  const setStateRegex = /onClick={() = aria-label="set([^"]*)"([^}]*)}/g;
  content = content.replace(setStateRegex, (match, ariaLabel, rest) => {
    fixes++;
    const stateName = ariaLabel.replace('set', '').toLowerCase();
    return `onClick={() => set${stateName}(${rest})} aria-label="${ariaLabel}"`;
  });

  return { content, fixes };
}

// Function to fix malformed onClick in a file
function fixMalformedOnClickInFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const { content: fixedContent, fixes } = fixMalformedOnClick(content);

    if (fixes > 0) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✅ Fixed ${fixes} malformed onClick handlers in ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No malformed onClick handlers found in ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of files to check
const filesToCheck = [
  'src/components/AdvancedAnalyticsDashboard.tsx',
  'src/components/AdvancedErrorHandler.tsx',
  'src/components/AdvancedSecurityMonitor.tsx',
  'src/components/AnalyticsDashboard.tsx',
  'src/components/ChatSystem.tsx',
  'src/components/ContactForm.tsx',
  'src/components/EnhancedContactForm.tsx',
  'src/components/EnhancedNotificationSystem.tsx',
  'src/components/EnhancedSearch.tsx',
  'src/components/ErrorBoundary.tsx',
  'src/components/FileUpload.tsx',
  'src/components/Navigation.tsx',
  'src/components/PerformanceMetrics.tsx',
  'src/components/PricingCard.tsx',
  'src/components/ProjectManagement.tsx',
  'src/components/SecurityDashboard.tsx',
  'src/components/ServiceCard.tsx',
  'src/components/SettingsPanel.tsx',
  'src/components/TaskManager.tsx',
  'src/components/TestDashboard.tsx',
  'src/components/UserManagement.tsx'
];

let totalFixes = 0;
let filesFixed = 0;

console.log(`📁 Processing ${filesToCheck.length} files...\n`);

filesToCheck.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (fixMalformedOnClickInFile(fullPath)) {
    filesFixed++;
  }
});

console.log(`\n📊 Malformed onClick Fix Summary:`);
console.log(`- Files processed: ${filesToCheck.length}`);
console.log(`- Files fixed: ${filesFixed}`);
console.log(`- Total fixes applied: ${totalFixes}`);

console.log(`\n✅ Malformed onClick handlers fixed!`);