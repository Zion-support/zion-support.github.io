#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix corrupted variable names and function calls
function fixCorruptedCode(content) {
  // Fix common patterns where commas were inserted
  let fixed = content;
  
  // Fix variable names with commas
  fixed = fixed.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z0-9_]+),\s*([a-zA-Z0-9_]+)\b/g, (match, p1, p2, p3) => {
    // If it looks like a corrupted variable name, reconstruct it
    if (p2.length === 1 && p3.length === 1) {
      return p1 + p2 + p3;
    }
    return match;
  });
  
  // Fix function calls with commas
  fixed = fixed.replace(/(\w+),\s*(\w+),\s*(\w+)\s*\(/g, (match, p1, p2, p3) => {
    if (p2.length === 1 && p3.length === 1) {
      return p1 + p2 + p3 + '(';
    }
    return match;
  });
  
  // Fix specific corrupted patterns
  const patterns = [
    // Variable declarations
    { from: /\bselectedFilt,\s*e,\s*r\b/g, to: 'selectedFilter' },
    { from: /\bsetSelectedFilt,\s*e,\s*r\b/g, to: 'setSelectedFilter' },
    { from: /\bselectedSeveri,\s*t,\s*y\b/g, to: 'selectedSeverity' },
    { from: /\bsetSelectedSeveri,\s*t,\s*y\b/g, to: 'setSelectedSeverity' },
    { from: /\bisAuditi,\s*n,\s*g\b/g, to: 'isAuditing' },
    { from: /\bsetIsAuditi,\s*n,\s*g\b/g, to: 'setIsAuditing' },
    { from: /\bauditAccessibili,\s*t,\s*y\b/g, to: 'auditAccessibility' },
    { from: /\bimag,\s*e,\s*s\b/g, to: 'images' },
    { from: /\bissu,\s*e,\s*s\b/g, to: 'issues' },
    { from: /\bforEa,\s*c,\s*h\b/g, to: 'forEach' },
    { from: /\bind,\s*e,\s*x\b/g, to: 'index' },
    { from: /\bi,\s*m,\s*g\b/g, to: 'img' },
    { from: /\bdescripti,\s*o,\s*n\b/g, to: 'description' },
    { from: /\bselect,\s*o,\s*r\b/g, to: 'selector' },
    { from: /\bimpa,\s*c,\s*t\b/g, to: 'impact' },
    { from: /\bhe,\s*l,\s*p\b/g, to: 'help' },
    { from: /\bgetSelect,\s*o,\s*r\b/g, to: 'getSelector' },
    { from: /\bdocume,\s*n,\s*t\b/g, to: 'document' },
    { from: /\bquerySelect,\s*o,\s*r\b/g, to: 'querySelector' },
    { from: /\bgetAttribu,\s*t,\s*e\b/g, to: 'getAttribute' },
    { from: /\btagNa,\s*m,\s*e\b/g, to: 'tagName' },
    { from: /\bariaLab,\s*e,\s*l\b/g, to: 'ariaLabel' },
    { from: /\bariaLabelled,\s*b,\s*y\b/g, to: 'ariaLabelledBy' },
    { from: /\blab,\s*e,\s*l\b/g, to: 'label' },
    { from: /\binp,\s*u,\s*t\b/g, to: 'input' },
    { from: /\binpu,\s*t,\s*s\b/g, to: 'inputs' },
    { from: /\btextar,\s*e,\s*a\b/g, to: 'textarea' },
    { from: /\bsele,\s*c,\s*t\b/g, to: 'select' },
    { from: /\bche,\s*c,\s*k\b/g, to: 'check' },
    { from: /\bfo,\s*r\b/g, to: 'for' },
    { from: /\bmissi,\s*n,\s*g\b/g, to: 'missing' },
    { from: /\ba,\s*l,\s*t\b/g, to: 'alt' },
    { from: /\bte,\s*x,\s*t\b/g, to: 'text' },
    { from: /\bima,\s*g,\s*e\b/g, to: 'image' },
    { from: /\bpurpo,\s*s,\s*e\b/g, to: 'purpose' },
    { from: /\bth,\s*i,\s*s\b/g, to: 'this' },
    { from: /\bconte,\s*n,\s*t\b/g, to: 'content' },
    { from: /\bA,\s*d,\s*d\b/g, to: 'Add' },
    { from: /\battribu,\s*t,\s*e\b/g, to: 'attribute' },
    { from: /\bdescri,\s*b,\s*e\b/g, to: 'describe' },
    { from: /\bconve,\s*y\b/g, to: 'convey' },
    { from: /\bcann,\s*o,\s*t\b/g, to: 'cannot' },
    { from: /\bScre,\s*e,\s*n\b/g, to: 'Screen' },
    { from: /\breade,\s*r,\s*s\b/g, to: 'readers' },
    { from: /\bIma,\s*g,\s*e\b/g, to: 'Image' },
    { from: /\balternati,\s*v,\s*e\b/g, to: 'alternative' },
    
    // Fix string literals with commas
    { from: /'a,\s*l,\s*l'/g, to: "'all'" },
    { from: /'serio,\s*u,\s*s'/g, to: "'serious'" },
    { from: /'modera,\s*t,\s*e'/g, to: "'moderate'" },
    { from: /'min,\s*o,\s*r'/g, to: "'minor'" },
    { from: /'A,\s*A,\s*A'/g, to: "'AAA'" },
    { from: /'levelA,\s*A,\s*A'/g, to: "'levelAAA'" },
    { from: /'pass,\s*e,\s*d'/g, to: "'passed'" },
    { from: /'fail,\s*e,\s*d'/g, to: "'failed'" },
    { from: /'tot,\s*a,\s*l'/g, to: "'total'" },
    { from: /'navigati,\s*o,\s*n'/g, to: "'navigation'" },
    { from: /'elemen,\s*t,\s*s'/g, to: "'elements'" },
    { from: /'tra,\s*p,\s*s'/g, to: "'traps'" },
    { from: /'reade,\s*r'/g, to: "'reader'" },
    { from: /'headin,\s*g,\s*s'/g, to: "'headings'" },
    { from: /'labe,\s*l,\s*s'/g, to: "'labels'" },
    { from: /'nu,\s*l,\s*l'/g, to: 'null' },
    { from: /'ar,\s*i,\s*a-lab,\s*e,\s*l'/g, to: "'aria-label'" },
    { from: /'lab\s*e\s*l\[f\s*o\s*r="/g, to: "'label[for=\"" },
    
    // Fix numeric values with commas
    { from: /30,\s*0,\s*0/g, to: '300000' },
    { from: /20,\s*0,\s*0/g, to: '2000' },
    
    // Fix function names
    { from: /\bAdvancedAnalyticsInsigh,\s*t,\s*s\b/g, to: 'AdvancedAnalyticsInsights' },
    { from: /\bnavigati,\s*o,\s*n\b/g, to: 'navigation' },
    { from: /\bpaintEntri,\s*e,\s*s\b/g, to: 'paintEntries' },
    { from: /\bf,\s*c,\s*p\b/g, to: 'fcp' },
    { from: /\bl,\s*c,\s*p\b/g, to: 'lcp' },
    { from: /\bf,\s*i,\s*d\b/g, to: 'fid' },
    { from: /\bc,\s*l,\s*s\b/g, to: 'cls' },
    { from: /\bgetL,\s*C,\s*P\b/g, to: 'getLCP' },
    { from: /\bgetF,\s*I,\s*D\b/g, to: 'getFID' },
    { from: /\bgetC,\s*L,\s*S\b/g, to: 'getCLS' },
    { from: /\bmemoryIn,\s*f,\s*o\b/g, to: 'memoryInfo' },
    { from: /\bnetworkLaten,\s*c,\s*y\b/g, to: 'networkLatency' },
    { from: /\brenderTi,\s*m,\s*e\b/g, to: 'renderTime' },
    { from: /\bnewMetri,\s*c,\s*s\b/g, to: 'newMetrics' },
    { from: /\bloadT,\s*i,\s*m,\s*e\b/g, to: 'loadTime' },
    { from: /\bfirstContentfulPai,\s*n,\s*t\b/g, to: 'firstContentfulPaint' },
    { from: /\blargestContentfulPai,\s*n,\s*t\b/g, to: 'largestContentfulPaint' },
    { from: /\bfirstInputDel,\s*a,\s*y\b/g, to: 'firstInputDelay' },
    { from: /\bresponseE,\s*n,\s*d\b/g, to: 'responseEnd' },
    { from: /\brequestSta,\s*r,\s*t\b/g, to: 'requestStart' },
    { from: /\bdomContentLoadedEventE,\s*n,\s*d\b/g, to: 'domContentLoadedEventEnd' },
    { from: /\bdomContentLoadedEventSta,\s*r,\s*t\b/g, to: 'domContentLoadedEventStart' },
    { from: /\bfetchSta,\s*r,\s*t\b/g, to: 'fetchStart' },
    { from: /\bPerformanceNavigationTimi,\s*n,\s*g\b/g, to: 'PerformanceNavigationTiming' },
    { from: /\bgetEntriesByTy,\s*p,\s*e\b/g, to: 'getEntriesByType' },
    { from: /\bfi,\s*n,\s*d\b/g, to: 'find' },
    { from: /\bna,\s*m,\s*e\b/g, to: 'name' },
    { from: /\bstartTi,\s*m,\s*e\b/g, to: 'startTime' },
    { from: /\bawa,\s*i,\s*t\b/g, to: 'await' },
    { from: /\ba,\s*n,\s*y\b/g, to: 'any' },
    
    // Security component fixes
    { from: /\bsecurityAler,\s*t,\s*s\b/g, to: 'securityAlerts' },
    { from: /\bsetSecurityAler,\s*t,\s*s\b/g, to: 'setSecurityAlerts' },
    { from: /\bperformSecuritySc,\s*a,\s*n\b/g, to: 'performSecurityScan' },
    { from: /\bSimula,\s*t,\s*e\b/g, to: 'Simulate' },
    { from: /\bsecuri,\s*t,\s*y\b/g, to: 'security' },
    { from: /\bsc,\s*a,\s*n\b/g, to: 'scan' },
    { from: /\bPromi,\s*s,\s*e\b/g, to: 'Promise' },
    { from: /\bresol,\s*v,\s*e\b/g, to: 'resolve' },
    { from: /\bsetTimeo,\s*u,\s*t\b/g, to: 'setTimeout' },
    { from: /\bnewMetri,\s*c,\s*s\b/g, to: 'newMetrics' },
    { from: /\bthreatLe,\s*v,\s*e,\s*l\b/g, to: 'threatLevel' },
    { from: /\bMa,\s*t,\s*h\b/g, to: 'Math' },
    { from: /\brand,\s*o,\s*m\b/g, to: 'random' },
    { from: /\bAdvancedSecurityMonit,\s*o,\s*r\b/g, to: 'AdvancedSecurityMonitor' },
    { from: /\bselectedSeveritysetSelectedSeveri,\s*t,\s*y\b/g, to: 'selectedSeverity' },
    { from: /\bsetSelectedSeveri,\s*t,\s*y\b/g, to: 'setSelectedSeverity' },
    { from: /\balertssetAlerts\b/g, to: 'alerts' },
    { from: /\bsetAlerts\b/g, to: 'setAlerts' },
    { from: /\bgetSeverityCol,\s*o,\s*r\b/g, to: 'getSeverityColor' },
    { from: /\bswit,\s*c,\s*h\b/g, to: 'switch' },
    { from: /\bsever,\s*i,\s*t,\s*y\b/g, to: 'severity' },
    { from: /\bca,\s*s,\s*e\b/g, to: 'case' },
    { from: /\bte,\s*x,\s*t-r,\s*e,\s*d-6,\s*0,\s*0\b/g, to: 'text-red-600' },
    { from: /\bbg-r,\s*e,\s*d-1,\s*0,\s*0\b/g, to: 'bg-red-100' },
    { from: /\bda,\s*r,\s*k:bg-r,\s*e,\s*d-9,\s*0,\s*0\/20\b/g, to: 'dark:bg-red-900/20' },
    { from: /\bte,\s*x,\s*t-oran,\s*g,\s*e-6,\s*0,\s*0\b/g, to: 'text-orange-600' },
    { from: /\bbg-oran,\s*g,\s*e-1,\s*0,\s*0\b/g, to: 'bg-orange-100' },
    { from: /\bda,\s*r,\s*k:bg-oran,\s*g,\s*e-9,\s*0,\s*0\/20\b/g, to: 'dark:bg-orange-900/20' },
    { from: /\bte,\s*x,\s*t-yellow-6,\s*0,\s*0\b/g, to: 'text-yellow-600' },
    { from: /\bbg-yellow-1,\s*0,\s*0\b/g, to: 'bg-yellow-100' },
    { from: /\bda,\s*r,\s*k:bg-yellow-9,\s*0,\s*0\/20\b/g, to: 'dark:bg-yellow-900/20' }
  ];
  
  patterns.forEach(pattern => {
    fixed = fixed.replace(pattern.from, pattern.to);
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixCorruptedCode(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process TypeScript/JavaScript files
function processDirectory(dir) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = processDirectory('/workspace/src');
console.log(`Fixed ${fixedCount} files.`);