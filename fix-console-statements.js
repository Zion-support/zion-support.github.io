import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
#!/usr/bin/env node





const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to properly fix console statements
function fixConsoleStatements(content) {
  // Fix console statements that are already wrapped in if conditions
  content = content.replace(
    /if \(process\.env\.NODE_ENV === 'development'\) console\.(log|error|warn|info)\([^)]*\); \}/g,
    match => {
      return match.replace(/; \}$/, '; }');
    }
  );

  // Fix console statements that are missing closing brace
  content = content.replace(
    /if \(process\.env\.NODE_ENV === 'development'\) console\.(log|error|warn|info)\([^)]*\);$/gm,
    match => {
      return match + ' }';
    }
  );

  // Fix console statements that have extra closing brace
  content = content.replace(
    /if \(process\.env\.NODE_ENV === 'development'\) console\.(log|error|warn|info)\([^)]*\); \}\s*$/gm,
    match => {
      return match.replace(/; \}\s*$/, '; }');
    }
  );

  return content;
}

// Files that need console statement fixes
const filesToFix = [
  'app/components/AdvancedPerformanceMonitor.tsx',
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
  'app/utils/analyticsTracker.ts',
];

function fixFile(filePath) {
  try {
    const _fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {

      return;
    }

    let _content = fs.readFileSync(fullPath, 'utf8');

    // Apply fixes
    content = fixConsoleStatements(content);

    fs.writeFileSync(fullPath, content);

  } catch (error) {

  }
}

// Fix all files
filesToFix.forEach(fixFile);
