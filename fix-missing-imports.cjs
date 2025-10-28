const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common imports that are missing
const commonImports = {
  'Navigation': "import Navigation from '../components/Navigation';",
  'Footer': "import Footer from '../components/Footer';",
  'Brain': "import { Brain, BarChart, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';",
  'BarChart': "import { Brain, BarChart, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';",
  'Target': "import { Brain, BarChart, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';",
  'TrendingUp': "import { Brain, BarChart, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';",
  'ArrowRight': "import { Brain, BarChart, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';",
  'CheckCircle': "import { Brain, BarChart, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';"
};

// Find all page.tsx files
const pageFiles = glob.sync('app/**/page.tsx');

pageFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file needs React import
    if (content.includes('React.FC') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }
    
    // Check for missing Navigation import
    if (content.includes('<Navigation') && !content.includes("import Navigation")) {
      content = content.replace(/^(export const metadata = {)/m, "import Navigation from '../components/Navigation';\n$1");
      modified = true;
    }
    
    // Check for missing Footer import
    if (content.includes('<Footer') && !content.includes("import Footer")) {
      if (content.includes("import Navigation")) {
        content = content.replace(/import Navigation from '\.\.\/components\/Navigation';/, "import Navigation from '../components/Navigation';\nimport Footer from '../components/Footer';");
      } else {
        content = content.replace(/^(export const metadata = {)/m, "import Footer from '../components/Footer';\n$1");
      }
      modified = true;
    }
    
    // Check for missing lucide-react imports
    const lucideIcons = ['Brain', 'BarChart', 'Target', 'TrendingUp', 'ArrowRight', 'CheckCircle'];
    const hasLucideIcons = lucideIcons.some(icon => content.includes(icon));
    
    if (hasLucideIcons && !content.includes("from 'lucide-react'")) {
      const lucideImport = "import { Brain, BarChart, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';";
      if (content.includes("import Navigation")) {
        content = content.replace(/import Navigation from '\.\.\/components\/Navigation';/, `import Navigation from '../components/Navigation';\n${lucideImport}`);
      } else if (content.includes("import Footer")) {
        content = content.replace(/import Footer from '\.\.\/components\/Footer';/, `import Footer from '../components/Footer';\n${lucideImport}`);
      } else {
        content = content.replace(/^(export const metadata = {)/m, `${lucideImport}\n$1`);
      }
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Import fixing completed!');