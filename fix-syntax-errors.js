#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix console statement syntax errors
function fixConsoleSyntax(content) {
  // Fix console statements with extra closing braces
  content = content.replace(
    /if \(process\.env\.NODE_ENV === 'development'\) console\.(log|error|warn|info)\([^)]*\); \}/g,
    (match) => {
      return match.replace(/; \}$/, '; }');
    }
  );
  
  // Fix console statements missing closing braces
  content = content.replace(
    /if \(process\.env\.NODE_ENV === 'development'\) console\.(log|error|warn|info)\([^)]*\);$/gm,
    (match) => {
      return match + ' }';
    }
  );
  
  // Fix typeof issues
  content = content.replace(
    /typeof\s+process\.env\.NODE_ENV/g,
    'typeof process.env.NODE_ENV'
  );
  
  return content;
}

// Files that need syntax fixes
const filesToFix = [
  'app/components/EnhancedErrorBoundary.tsx',
  'app/components/ImprovedErrorBoundary.tsx',
  'app/components/PWAInstaller.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/components/SystemMonitor.tsx',
  'app/hooks/useEnhancedPerformance.ts',
  'app/hooks/useForm.ts',
  'app/utils/advancedAnalytics.ts',
  'app/utils/advancedCaching.ts',
  'app/utils/analytics.ts',
  'app/utils/analyticsTracker.ts'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Apply fixes
    content = fixConsoleSyntax(content);
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Syntax errors fixed!');