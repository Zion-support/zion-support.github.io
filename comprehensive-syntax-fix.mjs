#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

console.log('🚀 Starting comprehensive syntax error fixes...');

// Common syntax error patterns to fix
const syntaxFixes = [
  // Fix comma-separated variable names
  {
    pattern: /([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)/g,
    replacement: (match, p1, p2, p3) => {
      // If it looks like a comma-separated word, join it
      if (match.includes(' ')) return match;
      return p1 + p2 + p3;
    }
  },
  // Fix comma-separated function names
  {
    pattern: /([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,
    replacement: (match, p1, p2, p3) => {
      return p1 + p2 + p3 + '(';
    }
  },
  // Fix comma-separated object properties
  {
    pattern: /([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g,
    replacement: (match, p1, p2, p3) => {
      return p1 + p2 + p3 + ':';
    }
  },
  // Fix comma-separated string literals
  {
    pattern: /'([^']*),\s*([^']*),\s*([^']*)'/g,
    replacement: (match, p1, p2, p3) => {
      return `'${p1}${p2}${p3}'`;
    }
  },
  // Fix comma-separated method calls
  {
    pattern: /\.([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,
    replacement: (match, p1, p2, p3) => {
      return `.${p1}${p2}${p3}(`;
    }
  },
  // Fix comma-separated variable declarations
  {
    pattern: /const\s+([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g,
    replacement: (match, p1, p2, p3) => {
      return `const ${p1}${p2}${p3} =`;
    }
  },
  // Fix specific common patterns
  {
    pattern: /isAuditi,\s*n,\s*g/g,
    replacement: 'isAuditing'
  },
  {
    pattern: /setIsAuditi,\s*n,\s*g/g,
    replacement: 'setIsAuditing'
  },
  {
    pattern: /auditAccessibili,\s*t,\s*y/g,
    replacement: 'auditAccessibility'
  },
  {
    pattern: /performSecuritySc,\s*a,\s*n/g,
    replacement: 'performSecurityScan'
  },
  {
    pattern: /securityAler,\s*t,\s*s/g,
    replacement: 'securityAlerts'
  },
  {
    pattern: /setSecurityAler,\s*t,\s*s/g,
    replacement: 'setSecurityAlerts'
  },
  {
    pattern: /navigati,\s*o,\s*n/g,
    replacement: 'navigation'
  },
  {
    pattern: /paintEntri,\s*e,\s*s/g,
    replacement: 'paintEntries'
  },
  {
    pattern: /getEntriesByTy,\s*p,\s*e/g,
    replacement: 'getEntriesByType'
  },
  {
    pattern: /PerformanceNavigationTimi,\s*n,\s*g/g,
    replacement: 'PerformanceNavigationTiming'
  },
  {
    pattern: /fir,\s*s,\s*t-contentf,\s*u,\s*l-pai,\s*n,\s*t/g,
    replacement: 'first-contentful-paint'
  },
  {
    pattern: /startTi,\s*m,\s*e/g,
    replacement: 'startTime'
  },
  {
    pattern: /awa,\s*i,\s*t/g,
    replacement: 'await'
  },
  {
    pattern: /getL,\s*C,\s*P/g,
    replacement: 'getLCP'
  },
  {
    pattern: /getF,\s*I,\s*D/g,
    replacement: 'getFID'
  },
  {
    pattern: /getC,\s*L,\s*S/g,
    replacement: 'getCLS'
  },
  {
    pattern: /memoryIn,\s*f,\s*o/g,
    replacement: 'memoryInfo'
  },
  {
    pattern: /networkLaten,\s*c,\s*y/g,
    replacement: 'networkLatency'
  },
  {
    pattern: /renderTi,\s*m,\s*e/g,
    replacement: 'renderTime'
  },
  {
    pattern: /newMetri,\s*c,\s*s/g,
    replacement: 'newMetrics'
  },
  {
    pattern: /loadT,\s*i,\s*m,\s*e/g,
    replacement: 'loadTime'
  },
  {
    pattern: /firstContentfulPai,\s*n,\s*t/g,
    replacement: 'firstContentfulPaint'
  },
  {
    pattern: /largestContentfulPai,\s*n,\s*t/g,
    replacement: 'largestContentfulPaint'
  },
  {
    pattern: /firstInputDel,\s*a,\s*y/g,
    replacement: 'firstInputDelay'
  },
  {
    pattern: /cumulativeLayoutShi,\s*f,\s*t/g,
    replacement: 'cumulativeLayoutShift'
  },
  {
    pattern: /threatLe,\s*v,\s*e,\s*l/g,
    replacement: 'threatLevel'
  },
  {
    pattern: /Ma,\s*t,\s*h/g,
    replacement: 'Math'
  },
  {
    pattern: /rand,\s*o,\s*m/g,
    replacement: 'random'
  },
  {
    pattern: /setTimeo,\s*u,\s*t/g,
    replacement: 'setTimeout'
  },
  {
    pattern: /resol,\s*v,\s*e/g,
    replacement: 'resolve'
  },
  {
    pattern: /n,\s*e,\s*w/g,
    replacement: 'new'
  },
  {
    pattern: /Promi,\s*s,\s*e/g,
    replacement: 'Promise'
  },
  // Fix string concatenation issues
  {
    pattern: /console\.error\('Performance analysis failed: '\s*error\)/g,
    replacement: "console.error('Performance analysis failed:', error)"
  },
  // Fix function parameter issues
  {
    pattern: /AdvancedAnalyticsInsigh,\s*t,\s*s\(/g,
    replacement: 'AdvancedAnalyticsInsights('
  },
  {
    pattern: /refreshInterval\s*=\s*300,\s*0,\s*0,/g,
    replacement: 'refreshInterval = 300000,'
  }
];

async function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    let changes = 0;

    for (const fix of syntaxFixes) {
      const originalContent = fixedContent;
      if (typeof fix.replacement === 'function') {
        fixedContent = fixedContent.replace(fix.pattern, fix.replacement);
      } else {
        fixedContent = fixedContent.replace(fix.pattern, fix.replacement);
      }
      if (fixedContent !== originalContent) {
        changes++;
      }
    }

    if (changes > 0) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed ${filePath} (${changes} patterns)`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  try {
    // Find all TypeScript and JavaScript files
    const files = await glob('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });
    
    let fixedCount = 0;
    for (const file of files) {
      const wasFixed = await fixFile(file);
      if (wasFixed) {
        fixedCount++;
      }
    }

    console.log(`✅ Fixed ${fixedCount} files`);
    console.log('📊 Comprehensive syntax fix completed!');
  } catch (error) {
    console.error('❌ Error during comprehensive syntax fix:', error);
    process.exit(1);
  }
}

main();