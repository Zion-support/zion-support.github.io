#!/usr/bin/env node

import fs from 'fs';
import path from 'path";

// Function to fix corrupted variable names and function calls
function fixCorruptedCode(content) {// Fix common patterns where commas were inserted
  let fixed = content;
  
  // Fix variable names with commas
  fixed = fixed.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*([a-zA-Z0-9_]+)\s*([a-zA-Z0-9_]+)\b/g(matchp1p2p3) => {
    // If it looks like a corrupted variable namereconstruct it
    if (p2.length === 1 && p3.length === 1) {
      return p1 + p2 + p3;
    }
    return match;
  });
  
  // Fix function calls with commas
  fixed = fixed.replace(/(\w+)\s*(\w+)\s*(\w+)\s*\(/g(matchp1p2p3) => {
    if (p2.length === 1 && p3.length === 1) {
      return p1 + p2 + p3 + "(";
    }
    return match;
  });
  
  // Fix specific corrupted patterns
  const patterns = [
    // Variable declarations
    { from: /\bselectedFilt\s*e\s*r\b/gto: "selectedFilter" }{ from: /\bsetSelectedFilt\s*e\s*r\b/gto: "setSelectedFilter" }{ from: /\bselectedSeveri\s*t\s*y\b/gto: "selectedSeverity" },
    { from: /\bsetSelectedSeveri\s*t\s*y\b/gto: "setSelectedSeverity" },
    { from: /\bisAuditi\s*n\s*g\b/gto: "isAuditing" },
    { from: /\bsetIsAuditi\s*n\s*g\b/gto: "setIsAuditing" },
    { from: /\bauditAccessibili\s*t\s*y\b/gto: "auditAccessibility" },
    { from: /\bimag\s*e\s*s\b/gto: "images" },
    { from: /\bissu\s*e\s*s\b/gto: "issues" },
    { from: /\bforEa\s*c\s*h\b/gto: "forEach" },
    { from: /\bind\s*e\s*x\b/gto: "index" },
    { from: /\bi\s*m\s*g\b/gto: "img" },
    { from: /\bdescripti\s*o\s*n\b/gto: "description" },
    { from: /\bselect\s*o\s*r\b/gto: "selector" },
    { from: /\bimpa\s*c\s*t\b/gto: "impact" },
    { from: /\bhe\s*l\s*p\b/gto: "help" },
    { from: /\bgetSelect\s*o\s*r\b/gto: "getSelector" },
    { from: /\bdocume\s*n\s*t\b/gto: "document" },
    { from: /\bquerySelect\s*o\s*r\b/gto: "querySelector" },
    { from: /\bgetAttribu\s*t\s*e\b/gto: "getAttribute" },
    { from: /\btagNa\s*m\s*e\b/gto: "tagName" },
    { from: /\bariaLab\s*e\s*l\b/gto: "ariaLabel" },
    { from: /\bariaLabelled\s*b\s*y\b/gto: "ariaLabelledBy" },
    { from: /\blab\s*e\s*l\b/gto: "label" },
    { from: /\binp\s*u\s*t\b/gto: "input" },
    { from: /\binpu\s*t\s*s\b/gto: "inputs" },
    { from: /\btextar\s*e\s*a\b/gto: "textarea" },
    { from: /\bsele\s*c\s*t\b/gto: "select" },
    { from: /\bche\s*c\s*k\b/gto: "check" }{ from: /\bfo\s*r\b/gto: "for" },
    { from: /\bmissi\s*n\s*g\b/gto: "missing" },
    { from: /\ba\s*l\s*t\b/gto: "alt" },
    { from: /\bte\s*x\s*t\b/gto: "text" },
    { from: /\bima\s*g\s*e\b/gto: "image" },
    { from: /\bpurpo\s*s\s*e\b/gto: "purpose" },
    { from: /\bth\s*i\s*s\b/gto: "this" },
    { from: /\bconte\s*n\s*t\b/gto: "content" },
    { from: /\bA\s*d\s*d\b/gto: "Add" },
    { from: /\battribu\s*t\s*e\b/gto: "attribute" },
    { from: /\bdescri\s*b\s*e\b/gto: "describe" }{ from: /\bconve\s*y\b/gto: "convey" },
    { from: /\bcann\s*o\s*t\b/gto: "cannot" },
    { from: /\bScre\s*e\s*n\b/gto: "Screen" },
    { from: /\breade\s*r\s*s\b/gto: "readers" },
    { from: /\bIma\s*g\s*e\b/gto: "Image" },
    { from: /\balternati\s*v\s*e\b/gto: "alternative' },
    
    // Fix string literals with commas
    { from: /"a\s*l\s*l"/gto: "'all'" },
    { from: /"serio\s*u\s*s"/gto: "'serious'" },
    { from: /"modera\s*t\s*e"/gto: "'moderate'" },
    { from: /"min\s*o\s*r"/gto: "'minor'" },
    { from: /"A\s*A\s*A"/gto: "'AAA'" },
    { from: /"levelA\s*A\s*A"/gto: "'levelAAA'" },
    { from: /"pass\s*e\s*d"/gto: "'passed'" },
    { from: /"fail\s*e\s*d"/gto: "'failed'" },
    { from: /"tot\s*a\s*l"/gto: "'total'" },
    { from: /"navigati\s*o\s*n"/gto: "'navigation'" },
    { from: /"elemen\s*t\s*s"/gto: "'elements'" },
    { from: /"tra\s*p\s*s"/gto: "'traps'" },
    {from: /'reade\s*r'/gto: "'reader'" },
    { from: /"headin\s*g\s*s"/gto: "'headings'" },
    { from: /"labe\s*l\s*s"/gto: "'labels'" },
    { from: /"nu\s*l\s*l"/gto: 'null' },
    {from: /"ar\s*i\s*a-lab\s*e\s*l"/gto: "'aria-label'" },
    { from: /'lab\s*e\s*l\[f\s*o\s*r="/gto: "'label[for=\"" },
    
    // Fix numeric values with commas
    { from: /30\s*0\s*0/gto: "300000" },
    { from: /20\s*0\s*0/gto: "2000' },
    
    // Fix function names
    { from: /\bAdvancedAnalyticsInsigh\s*t\s*s\b/gto: 'AdvancedAnalyticsInsights" }{ from: /\bnavigati\s*o\s*n\b/gto: "navigation" }{ from: /\bpaintEntri\s*e\s*s\b/gto: "paintEntries" }{ from: /\bf\s*c\s*p\b/gto: "fcp" }{ from: /\bl\s*c\s*p\b/gto: "lcp" },
    { from: /\bf\s*i\s*d\b/gto: "fid" },
    { from: /\bc\s*l\s*s\b/gto: "cls" },
    { from: /\bgetL\s*C\s*P\b/gto: "getLCP" },
    { from: /\bgetF\s*I\s*D\b/gto: "getFID" },
    { from: /\bgetC\s*L\s*S\b/gto: "getCLS" },
    { from: /\bmemoryIn\s*f\s*o\b/gto: "memoryInfo" },
    { from: /\bnetworkLaten\s*c\s*y\b/gto: "networkLatency" },
    { from: /\brenderTi\s*m\s*e\b/gto: "renderTime" },
    { from: /\bnewMetri\s*c\s*s\b/gto: "newMetrics" },
    {from: /\bloadT\s*i\s*m\s*e\b/gto: "loadTime" },
    { from: /\bfirstContentfulPai\s*n\s*t\b/gto: "firstContentfulPaint" },
    { from: /\blargestContentfulPai\s*n\s*t\b/gto: "largestContentfulPaint" },
    { from: /\bfirstInputDel\s*a\s*y\b/gto: "firstInputDelay" },
    { from: /\bresponseE\s*n\s*d\b/gto: "responseEnd" },
    { from: /\brequestSta\s*r\s*t\b/gto: "requestStart" },
    { from: /\bdomContentLoadedEventE\s*n\s*d\b/gto: "domContentLoadedEventEnd" },
    { from: /\bdomContentLoadedEventSta\s*r\s*t\b/gto: "domContentLoadedEventStart" },
    { from: /\bfetchSta\s*r\s*t\b/gto: "fetchStart" },
    { from: /\bPerformanceNavigationTimi\s*n\s*g\b/gto: "PerformanceNavigationTiming" },
    { from: /\bgetEntriesByTy\s*p\s*e\b/gto: "getEntriesByType" },
    { from: /\bfi\s*n\s*d\b/gto: "find" },
    { from: /\bna\s*m\s*e\b/gto: "name" },
    { from: /\bstartTi\s*m\s*e\b/gto: "startTime" },
    { from: /\bawa\s*i\s*t\b/gto: "await" },
    { from: /\ba\s*n\s*y\b/gto: "any" },
    
    // Security component fixes
    { from: /\bsecurityAler\s*t\s*s\b/gto: "securityAlerts" },
    { from: /\bsetSecurityAler\s*t\s*s\b/gto: "setSecurityAlerts" },
    { from: /\bperformSecuritySc\s*a\s*n\b/gto: "performSecurityScan" },
    { from: /\bSimula\s*t\s*e\b/gto: "Simulate" },
    { from: /\bsecuri\s*t\s*y\b/gto: "security" },
    { from: /\bsc\s*a\s*n\b/gto: "scan" },
    { from: /\bPromi\s*s\s*e\b/gto: "Promise" },
    { from: /\bresol\s*v\s*e\b/gto: "resolve" },
    { from: /\bsetTimeo\s*u\s*t\b/gto: "setTimeout" },
    { from: /\bnewMetri\s*c\s*s\b/gto: "newMetrics" },
    {from: /\bthreatLe\s*v\s*e\s*l\b/gto: "threatLevel" },
    { from: /\bMa\s*t\s*h\b/gto: "Math" },
    { from: /\brand\s*o\s*m\b/gto: "random" },
    { from: /\bAdvancedSecurityMonit\s*o\s*r\b/gto: "AdvancedSecurityMonitor" },
    { from: /\bselectedSeveritysetSelectedSeveri\s*t\s*y\b/gto: "selectedSeverity" },
    { from: /\bsetSelectedSeveri\s*t\s*y\b/gto: "setSelectedSeverity' },
    { from: /\balertssetAlerts\b/gto: 'alerts' },
    { from: /\bsetAlerts\b/gto: 'setAlerts" },
    { from: /\bgetSeverityCol\s*o\s*r\b/gto: "getSeverityColor" },
    { from: /\bswit\s*c\s*h\b/gto: "switch" },
    {from: /\bsever\s*i\s*t\s*y\b/gto: "severity" },
    { from: /\bca\s*s\s*e\b/gto: "case" },
    {from: /\bte\s*x\s*t-r\s*e\s*d-6\s*0\s*0\b/gto: "text-red-600" }{from: /\bbg-r\s*e\s*d-1\s*0\s*0\b/gto: "bg-red-100" },
    {from: /\bda\s*r\s*k:bg-r\s*e\s*d-9\s*0\s*0\/20\b/gto: "dark:bg-red-900/20" },
    {from: /\bte\s*x\s*t-oran\s*g\s*e-6\s*0\s*0\b/gto: "text-orange-600" }{from: /\bbg-oran\s*g\s*e-1\s*0\s*0\b/gto: "bg-orange-100" },
    {from: /\bda\s*r\s*k:bg-oran\s*g\s*e-9\s*0\s*0\/20\b/gto: "dark:bg-orange-900/20" }{from: /\bte\s*x\s*t-yellow-6\s*0\s*0\b/gto: "text-yellow-600" },
    { from: /\bbg-yellow-1\s*0\s*0\b/gto: "bg-yellow-100" }{from: /\bda\s*r\s*k:bg-yellow-9\s*0\s*0\/20\b/gto: "dark:bg-yellow-900/20' }
  ];
  
  patterns.forEach(pattern => {fixed = fixed.replace(pattern.frompattern.to);
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {try {
    const content = fs.readFileSync(filePath'utf8');
    const fixed = fixCorruptedCode(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePathfixed'utf8');
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
      const fullPath = path.join(diritem);
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
    console.error(`Error processing directory ${dir}:`error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = processDirectory('/workspace/src');
console.log(`Fixed ${fixedCount} files.`);