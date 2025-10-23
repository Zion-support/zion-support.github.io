const fs = require('fs');
const path = require('path');

// Function to fix component files
function fixComponentFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove duplicate default exports
    if (content.includes('export default Page;') && content.includes('export default')) {
      content = content.replace(/export default Page;\s*\n\s*export default \w+;/g, '');
      modified = true;
    }

    // Fix 2: Fix variable references in PerformanceDashboard
    if (filePath.includes('PerformanceDashboard.tsx')) {
      content = content.replace(/renderTime/g, '_renderTime');
      content = content.replace(/memoryUsage/g, '_memoryUsage');
      content = content.replace(/fps/g, '_fps');
      content = content.replace(/updateMetrics/g, '_updateMetrics');
      modified = true;
    }

    // Fix 3: Fix duplicate React imports
    if (content.includes('import React from "react";\nimport React from "react";')) {
      content = content.replace(/import React from "react";\s*\n\s*import React from "react";/g, 'import React from "react";');
      modified = true;
    }

    // Fix 4: Fix missing function definitions in OptimizedImage
    if (filePath.includes('OptimizedImage.tsx')) {
      // Add missing functions
      const missingFunctions = `
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('loaded');
    }
  });
});

const getOptimizedSrc = (src, width, height) => {
  return \`\${src}?w=\${width}&h=\${height}&q=80&f=webp\`;
};

const handleLoad = () => {
  console.log('Image loaded');
};

const handleError = () => {
  console.log('Image failed to load');
};
`;
      
      if (!content.includes('const observer')) {
        content = content.replace('const OptimizedImage', missingFunctions + '\nconst OptimizedImage');
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all component files
const componentsDir = '/workspace/app/components';
const pagesDir = '/workspace/app/pages';
const files = [];

function findFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const filePath = path.join(dir, item);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findFiles(filePath);
    } else if (item.endsWith('.tsx')) {
      files.push(filePath);
    }
  }
}

findFiles(componentsDir);
findFiles(pagesDir);

console.log(`Found ${files.length} component files to check`);

let fixedCount = 0;
for (const filePath of files) {
  if (fixComponentFile(filePath)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);