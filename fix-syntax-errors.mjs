#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files with syntax errors
const filesToFix = [
  'src/components/ChatSystem.tsx',
  'src/components/ContactForm.tsx',
  'src/components/EnhancedContactForm.tsx',
  'src/components/EnhancedErrorBoundary.tsx',
  'src/components/EnhancedNotificationSystem.tsx',
  'src/components/EnhancedSearch.tsx',
  'src/components/ErrorBoundary.tsx',
  'src/components/FileUpload.tsx',
  'src/components/Navigation.tsx',
  'src/components/PerformanceDashboard.tsx',
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

// Common patterns to fix
const fixes = [
  // Fix malformed onClick handlers
  {
    pattern: /onClick=\{\(\)\s*=\s*aria-label="([^"]+)\)/g,
    replacement: 'onClick={() => $1}\n            aria-label="$1"'
  },
  // Fix malformed onClick with setState
  {
    pattern: /onClick=\{\(\)\s*=\s*aria-label="([^"]+)\)/g,
    replacement: 'onClick={() => $1}\n            aria-label="$1"'
  },
  // Fix malformed onClick with function calls
  {
    pattern: /onClick=\{\(\)\s*=\s*aria-label="([^"]+)\)/g,
    replacement: 'onClick={() => $1}\n            aria-label="$1"'
  },
  // Fix missing closing tags
  {
    pattern: /<motion\.button([^>]*)>\s*$/gm,
    replacement: '<motion.button$1>'
  },
  // Fix malformed JSX attributes
  {
    pattern: /(\w+)\s*=\s*aria-label="([^"]+)\)/g,
    replacement: '$1={() => $2}\n            aria-label="$2"'
  },
  // Fix missing commas in object literals
  {
    pattern: /(\w+):\s*([^,}]+)\s*(\w+):/g,
    replacement: '$1: $2,\n    $3:'
  },
  // Fix malformed template literals
  {
    pattern: /`([^`]*)\$\{([^}]+)\}([^`]*)`\s*className/g,
    replacement: '`$1${$2}$3`\n            className'
  }
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    // Additional specific fixes
    // Fix malformed onClick handlers with aria-label
    content = content.replace(
      /onClick=\{\(\)\s*=\s*aria-label="([^"]+)\)/g,
      'onClick={() => $1}\n            aria-label="$1"'
    );

    // Fix malformed onClick with setState
    content = content.replace(
      /onClick=\{\(\)\s*=\s*aria-label="([^"]+)\)/g,
      'onClick={() => $1}\n            aria-label="$1"'
    );

    // Fix missing closing tags for motion.button
    content = content.replace(
      /<motion\.button([^>]*)>\s*$/gm,
      '<motion.button$1>'
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

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`No changes needed: ${filePath}`);
      return false;
    }
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