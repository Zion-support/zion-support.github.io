#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive syntax error fixing...');

// Fix ContactForm.tsx
const contactFormPath = 'components/ContactForm.tsx';
if (fs.existsSync(contactFormPath)) {
  let content = fs.readFileSync(contactFormPath, 'utf8');
  
  // Fix the function declaration and export
  content = content.replace(
    /(\s+);\s*}\s*export default ContactForm;/,
    '$1;\n};\n\nexport default ContactForm;'
  );
  
  fs.writeFileSync(contactFormPath, content);
  console.log('✅ Fixed ContactForm.tsx');
}

// Fix ErrorBoundary.tsx
const errorBoundaryPath = 'components/ErrorBoundary.tsx';
if (fs.existsSync(errorBoundaryPath)) {
  let content = fs.readFileSync(errorBoundaryPath, 'utf8');
  
  // Fix the static method and componentDidCatch
  content = content.replace(
    /public static getDerivedStateFromError\(error: Error\): State \{\s*return \{ hasError: true, error \}\s*public componentDidCatch/,
    'public static getDerivedStateFromError(error: Error): State {\n    return { hasError: true, error };\n  }\n  \n  public componentDidCatch'
  );
  
  // Fix the componentDidCatch method
  content = content.replace(
    /public componentDidCatch\(error: Error, errorInfo: ErrorInfo\) \{\s*console\.error\('ErrorBoundary caught an error:', error, errorInfo\);\s*\}\s*public render/,
    'public componentDidCatch(error: Error, errorInfo: ErrorInfo) {\n    console.error(\'ErrorBoundary caught an error:\', error, errorInfo);\n  }\n  \n  public render'
  );
  
  fs.writeFileSync(errorBoundaryPath, content);
  console.log('✅ Fixed ErrorBoundary.tsx');
}

// Fix PerformanceMonitor.tsx
const performanceMonitorPath = 'components/PerformanceMonitor.tsx';
if (fs.existsSync(performanceMonitorPath)) {
  let content = fs.readFileSync(performanceMonitorPath, 'utf8');
  
  // Fix the for loop in the observer
  content = content.replace(
    /for \(const entry of list\.getEntries\(\)\) \{\s*if \(entry\.entryType === 'largest-contentful-paint'\) \{\s*\/\/ Log LCP in development only\s*if \(process\.env\.NODE_ENV === 'development'\) \{\s*console\.log\('LCP:', entry\.startTime\);\s*\}\s*sendToAnalytics\('LCP', entry\.startTime\);\s*\}\s*\}\);/,
    'for (const entry of list.getEntries()) {\n          if (entry.entryType === \'largest-contentful-paint\') {\n            // Log LCP in development only\n            if (process.env.NODE_ENV === \'development\') {\n              console.log(\'LCP:\', entry.startTime);\n            }\n            sendToAnalytics(\'LCP\', entry.startTime);\n          }\n        }\n      });'
  );
  
  fs.writeFileSync(performanceMonitorPath, content);
  console.log('✅ Fixed PerformanceMonitor.tsx');
}

// Fix index.tsx
const indexPath = 'pages/index.tsx';
if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Fix the dangerouslySetInnerHTML object
  content = content.replace(
    /"sameAs": \[contact\.site\]\s*\}\)\s*\}\s*\/>/,
    '"sameAs": [contact.site]\n            })\n          }}\n        />'
  );
  
  fs.writeFileSync(indexPath, content);
  console.log('✅ Fixed index.tsx');
}

// Fix it-services.tsx
const itServicesPath = 'pages/it-services.tsx';
if (fs.existsSync(itServicesPath)) {
  let content = fs.readFileSync(itServicesPath, 'utf8');
  
  // Fix the corrupted line
  content = content.replace(
    /icon: Cpu,\s*cursor\/analyze-improve-and-deploy-application-d144\s*},/,
    'icon: Cpu,\n      name: \'Edge Computing Solutions\',\n      description: \'Distributed computing at the edge for low-latency applications\'\n    },'
  );
  
  fs.writeFileSync(itServicesPath, content);
  console.log('✅ Fixed it-services.tsx');
}

console.log('🎉 Syntax error fixing completed!');