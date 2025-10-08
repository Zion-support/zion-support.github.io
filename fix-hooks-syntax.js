import fs from 'fs';

const files = [
  'app/hooks/usePerformanceMonitoringEnhanced.ts',
  'app/hooks/usePerformanceOptimization.ts'
];

files.forEach(filePath => {
  try {
    const fullPath = `/workspace/${filePath}`;
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove extra semicolons after every line
    content = content.replace(/;$/gm, '');
    
    // Fix specific syntax issues
    content = content.replace(/const observer = new PerformanceObserver\(\(list\) => \{/g, 'const observer = new PerformanceObserver((list) => {');
    content = content.replace(/observer\.observe\(\{ entryTypes: \['navigation', 'paint', 'largest-contentful-paint'\] \}\);/g, "observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });");
    
    // Fix the specific syntax error in usePerformanceOptimization.ts
    content = content.replace(/const navigation = performance\.getEntriesByType\(\s*'navigation';\s*\)\[0\] as PerformanceNavigationTiming;/g, "const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;");
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Hooks syntax fixes completed');