#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const filesToFix = [
  'src/components/AnalyticsDashboard.tsx',
  'src/components/ChatSystem.tsx',
  'src/components/ContactForm.tsx',
  'src/components/EnhancedContactForm.tsx',
  'src/components/EnhancedErrorBoundary.tsx',
  'src/components/EnhancedNotificationSystem.tsx',
  'src/components/EnhancedSearch.tsx',
  'src/components/ErrorBoundary.tsx',
  'src/components/FileUpload.tsx',
  'src/components/Navigation.tsx',
  'src/components/PerformanceMetrics.tsx',
  'src/components/PerformanceOptimizations.tsx',
  'src/components/PricingCard.tsx',
  'src/components/ProjectManagement.tsx',
  'src/components/SecurityDashboard.tsx',
  'src/components/ServiceCard.tsx',
  'src/components/SettingsPanel.tsx',
  'src/components/TaskManager.tsx',
  'src/components/TestDashboard.tsx',
  'src/components/UserManagement.tsx'
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed onClick handlers
    content = content.replace(
      /onClick=\{\(\)\s*=\s*aria-label="([^"]+)\)/g,
      'onClick={() => $1}\n            aria-label="$1"'
    );

    // Fix malformed onClick with setState
    content = content.replace(
      /onClick=\{\(\)\s*=\s*aria-label="([^"]+)\)/g,
      'onClick={() => $1}\n            aria-label="$1"'
    );

    // Fix malformed JSX attributes
    content = content.replace(
      /(\w+)\s*=\s*aria-label="([^"]+)\)/g,
      '$1={() => $2}\n            aria-label="$2"'
    );

    // Fix missing commas in object literals
    content = content.replace(
      /(\w+):\s*([^,}]+)\s*(\w+):/g,
      '$1: $2,\n    $3:'
    );

    // Fix malformed template literals
    content = content.replace(
      /`([^`]*)\$\{([^}]+)\}([^`]*)`\s*className/g,
      '`$1${$2}$3`\n            className'
    );

    // Fix unterminated string literals
    content = content.replace(
      /"([^"]*)\n([^"]*)"([^"]*)/g,
      '"$1$2$3"'
    );

    // Fix missing closing tags
    content = content.replace(
      /<motion\.button([^>]*)>\s*$/gm,
      '<motion.button$1>'
    );

    // Fix malformed className attributes
    content = content.replace(
      /className="([^"]*)\n([^"]*)"([^"]*)/g,
      'className="$1$2$3"'
    );

    // Fix missing semicolons
    content = content.replace(
      /(\w+)\s*=\s*([^;]+)\s*$/gm,
      '$1 = $2;'
    );

    // Fix malformed function calls
    content = content.replace(
      /(\w+)\s*=\s*([^,]+)\s*,\s*$/gm,
      '$1 = $2,'
    );

    // Fix malformed JSX expressions
    content = content.replace(
      /\{([^}]*)\n([^}]*)\}/g,
      '{$1$2}'
    );

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      modified = true;
    } else {
      console.log(`No changes needed: ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all files
let fixedCount = 0;
for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} out of ${filesToFix.length} files.`);