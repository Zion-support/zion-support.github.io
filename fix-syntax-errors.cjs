const fs = require('fs');
const path = require('path');

// Function to fix malformed variable names with commas and spaces
function fixMalformedVariables(content) {
  // Common patterns to fix
  const fixes = [
    // Fix variable names with commas
    [/([a-zA-Z]),\s*([a-zA-Z]),\s*([a-zA-Z])/g, '$1$2$3'],
    [/([a-zA-Z]),\s*([a-zA-Z])/g, '$1$2'],
    
    // Fix specific patterns
    [/\bnu,\s*l,\s*l\b/g, 'null'],
    [/\btru,\s*e\b/g, 'true'],
    [/\bfals,\s*e\b/g, 'false'],
    [/\bundefined\b/g, 'undefined'],
    
    // Fix function names
    [/\bgetSelect,\s*o,\s*r\b/g, 'getSelector'],
    [/\bgetAttribu,\s*t,\s*e\b/g, 'getAttribute'],
    [/\bquerySelectorAll\b/g, 'querySelectorAll'],
    [/\bforEa,\s*c,\s*h\b/g, 'forEach'],
    [/\bpu,\s*s,\s*h\b/g, 'push'],
    [/\bsetTimeo,\s*u,\s*t\b/g, 'setTimeout'],
    [/\bMa,\s*t,\s*h\b/g, 'Math'],
    [/\bPromi,\s*s,\s*e\b/g, 'Promise'],
    [/\bawa,\s*i,\s*t\b/g, 'await'],
    [/\bn,\s*e,\s*w\b/g, 'new'],
    [/\bresol,\s*v,\s*e\b/g, 'resolve'],
    [/\bconso,\s*l,\s*e\b/g, 'console'],
    [/\bcat,\s*c,\s*h\b/g, 'catch'],
    [/\bel,\s*s,\s*e\b/g, 'else'],
    [/\bif\b/g, 'if'],
    [/\bfor\b/g, 'for'],
    [/\bwhile\b/g, 'while'],
    [/\btry\b/g, 'try'],
    [/\breturn\b/g, 'return'],
    [/\bconst\b/g, 'const'],
    [/\blet\b/g, 'let'],
    [/\bvar\b/g, 'var'],
    [/\bfunction\b/g, 'function'],
    [/\basync\b/g, 'async'],
    [/\bawait\b/g, 'await'],
    
    // Fix property access
    [/\btagNa,\s*m,\s*e\b/g, 'tagName'],
    [/\bstartTi,\s*m,\s*e\b/g, 'startTime'],
    [/\bentryTyp,\s*e,\s*s\b/g, 'entryTypes'],
    [/\bgetEntri,\s*e,\s*s\b/g, 'getEntries'],
    [/\bleng,\s*t,\s*h\b/g, 'length'],
    [/\busedJSHeapSi,\s*z,\s*e\b/g, 'usedJSHeapSize'],
    [/\brou,\s*n,\s*d\b/g, 'round'],
    [/\bobserv,\s*e,\s*r\b/g, 'observer'],
    [/\bobser,\s*v,\s*e\b/g, 'observe'],
    [/\bPerformanceObserv,\s*e,\s*r\b/g, 'PerformanceObserver'],
    
    // Fix string literals
    [/('a,\s*l,\s*l')/g, "'all'"],
    [/('i,\s*m,\s*g')/g, "'img'"],
    [/('ar,\s*i,\s*a-lab,\s*e,\s*l')/g, "'aria-label'"],
    [/('navigati,\s*o,\s*n')/g, "'navigation'"],
    [/('pai,\s*n,\s*t')/g, "'paint'"],
    [/('large,\s*s,\s*t-contentf,\s*u,\s*l-pai,\s*n,\s*t')/g, "'largest-contentful-paint'"],
    [/('fir,\s*s,\s*t-contentf,\s*u,\s*l-pai,\s*n,\s*t')/g, "'first-contentful-paint'"],
    
    // Fix method calls
    [/\bgetEntriesByTy,\s*p,\s*e\b/g, 'getEntriesByType'],
    [/\bfi,\s*n,\s*d\b/g, 'find'],
    [/\bna,\s*m,\s*e\b/g, 'name'],
    [/\bresponseE,\s*n,\s*d\b/g, 'responseEnd'],
    [/\brequestSta,\s*r,\s*t\b/g, 'requestStart'],
    [/\bdomContentLoadedEventE,\s*n,\s*d\b/g, 'domContentLoadedEventEnd'],
    [/\bdomContentLoadedEventSta,\s*r,\s*t\b/g, 'domContentLoadedEventStart'],
    [/\bloadEventE,\s*n,\s*d\b/g, 'loadEventEnd'],
    [/\bfetchSta,\s*r,\s*t\b/g, 'fetchStart'],
    
    // Fix numbers
    [/\b50,\s*0,\s*0\b/g, '5000'],
    [/\b20,\s*0,\s*0\b/g, '2000'],
    [/\b10,\s*2,\s*4\b/g, '1024'],
    [/\b300,\s*0,\s*0\b/g, '300000'],
  ];
  
  let result = content;
  fixes.forEach(([pattern, replacement]) => {
    result = result.replace(pattern, replacement);
  });
  
  return result;
}

// Files to fix
const filesToFix = [
  'src/components/AdvancedAccessibilityAuditor.tsx',
  'src/components/AdvancedAnalyticsInsights.tsx',
  'src/components/AdvancedPerformanceMonitor.tsx',
  'src/components/AdvancedSecurityEnhancements.tsx',
  'src/components/AdvancedSecurityMonitor.tsx'
];

console.log('Fixing syntax errors in TypeScript components...');

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    console.log(`Fixing ${filePath}...`);
    const content = fs.readFileSync(fullPath, 'utf8');
    const fixedContent = fixMalformedVariables(content);
    fs.writeFileSync(fullPath, fixedContent, 'utf8');
    console.log(`Fixed ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Syntax error fixes completed!');