const fs = require('fs');
const path = require('path');

// Find all .tsx files with Navigation import issues
const files = [
  'app/components/ContentCarousel.tsx',
  'app/components/AdvancedPerformanceOptimizer.tsx',
  'app/components/AdvancedPerformanceMonitor.tsx',
  'app/components/SimpleNavigation.tsx'
];

let fixedCount = 0;

for (const file of files) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Remove Navigation import lines
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lines that import Navigation from './/Navigation'
      if (line.includes("Navigation from './/Navigation'")) {
        console.log(`Removing Navigation import from ${file}`);
        continue;
      }
      
      newLines.push(line);
    }
    
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(file, newContent);
      fixedCount++;
      console.log(`Fixed: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);
