const fs = require('fs');
const path = require('path');

// Function to fix unescaped entities
function fixUnescapedEntities(content) {
  // Fix single quotes
  content = content.replace(/(?<!&)(?<!&#39;)(?<!&apos;)(?<!&lsquo;)(?<!&rsquo;)'(?![^<]*>)/g, '&apos;');
  // Fix double quotes
  content = content.replace(/(?<!&)(?<!&quot;)(?<!&ldquo;)(?<!&rdquo;)"(?![^<]*>)/g, '&quot;');
  return content;
}

// Function to remove unused imports and variables
function removeUnusedImports(content, unusedItems) {
  unusedItems.forEach(item => {
    // Remove from named imports
    const patterns = [
      new RegExp(`\\b${item}\\s*,?`, 'g'),
      new RegExp(`,\\s*${item}\\b`, 'g'),
      new RegExp(`{\\s*${item}\\s*,`, 'g'),
      new RegExp(`,\\s*${item}\\s*}`, 'g'),
      new RegExp(`{\\s*${item}\\s*}`, 'g')
    ];

    patterns.forEach(pattern => {
      content = content.replace(pattern, '');
    });
  });

  // Clean up
  content = content.replace(/,\s*,/g, ',');
  content = content.replace(/{\s*,/g, '{');
  content = content.replace(/,\s*}/g, '}');
  content = content.replace(/{\s*}/g, '');
  content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
  content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*/g, '');

  return content;
}

// Files to fix
const filesToFix = [
  {
    file: 'app/ai-social-media-manager-pro/page.tsx',
    unusedImports: ['Hash'],
    unusedVars: ['setIsVisible']
  },
  {
    file: 'app/ai-social-media-manager/page.tsx',
    unusedImports: ['Share2', 'Calendar']
  },
  {
    file: 'app/ai-voice-assistant-enterprise/page.tsx',
    unusedVars: ['isVisible']
  },
  {
    file: 'app/cloud-migration-services/page.tsx',
    unusedImports: ['Lock', 'Settings']
  },
  {
    file: 'app/components/About.tsx',
    unusedImports: ['Suspense', 'Helmet']
  },
  {
    file: 'app/components/AdvancedErrorBoundary.tsx',
    unusedImports: ['React', 'Suspense']
  },
  {
    file: 'app/components/ComprehensiveErrorBoundary.tsx',
    unusedImports: ['React', 'Suspense']
  },
  {
    file: 'app/components/EnhancedNavigation.tsx',
    unusedImports: ['Cloud', 'Database', 'Video']
  },
  {
    file: 'app/components/EnhancedSEO.tsx',
    unusedImports: ['Cloud']
  },
  {
    file: 'app/components/ErrorHandler.tsx',
    unusedImports: ['React', 'Suspense']
  },
  {
    file: 'app/components/Footer.tsx',
    unusedImports: ['ArrowRightIcon']
  },
  {
    file: 'app/components/ProductionErrorBoundary.tsx',
    unusedImports: ['React', 'Suspense']
  },
  {
    file: 'app/components/Sidebar.tsx',
    unusedImports: ['Menu']
  },
  {
    file: 'app/contact/page.tsx',
    unusedImports: ['useEffect', 'memo', 'lazy', 'Suspense', 'Cloud']
  }
];

// Apply fixes
filesToFix.forEach(fix => {
  if (!fs.existsSync(fix.file)) {
    console.log(`File not found: ${fix.file}`);
    return;
  }

  let content = fs.readFileSync(fix.file, 'utf8');
  
  // Fix unescaped entities
  content = fixUnescapedEntities(content);
  
  // Remove unused imports
  if (fix.unusedImports) {
    content = removeUnusedImports(content, fix.unusedImports);
  }
  
  // Remove unused variables
  if (fix.unusedVars) {
    fix.unusedVars.forEach(varName => {
      const varRegex = new RegExp(`\\b${varName}\\s*[,;]?`, 'g');
      content = content.replace(varRegex, '');
    });
  }

  fs.writeFileSync(fix.file, content);
  console.log(`Fixed: ${fix.file}`);
});

console.log('Linting warnings fixed!');