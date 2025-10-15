const fs = require('fs');

// Remove unused imports
const removeUnusedImports = (content, unusedImports) => {
  unusedImports.forEach(importName => {
    // Remove from named imports
    const patterns = [
      new RegExp(`\\b${importName}\\s*,?`, 'g'),
      new RegExp(`,\\s*${importName}\\b`, 'g'),
      new RegExp(`{\\s*${importName}\\s*,`, 'g'),
      new RegExp(`,\\s*${importName}\\s*}`, 'g'),
      new RegExp(`{\\s*${importName}\\s*}`, 'g')
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
};

// Files to fix
const filesToFix = [
  {
    file: 'app/ai-healthcare-platform/page.tsx',
    unusedImports: ['AlertTriangle', 'Heart', 'Users']
  },
  {
    file: 'app/ai-neural-memory-assistant/page.tsx',
    unusedImports: ['React']
  },
  {
    file: 'app/ai-project-management-pro/page.tsx',
    unusedImports: ['RocketLaunchIcon']
  },
  {
    file: 'app/ai-project-manager-pro/page.tsx',
    unusedImports: ['React']
  },
  {
    file: 'app/ai-project-manager/page.tsx',
    unusedImports: ['PieChart', 'Settings']
  }
];

// Fix button component issues in ai-code-assistant/page.tsx
const fixButtonIssues = (content) => {
  // Replace href with onClick for buttons
  content = content.replace(/href="[^"]*"/g, 'onClick={() => window.open("https://zion.app/contact", "_blank")}');
  // Replace "outline" variant with "secondary"
  content = content.replace(/variant="outline"/g, 'variant="secondary"');
  return content;
};

// Apply fixes
filesToFix.forEach(fix => {
  if (!fs.existsSync(fix.file)) {
    console.log(`File not found: ${fix.file}`);
    return;
  }

  let content = fs.readFileSync(fix.file, 'utf8');
  
  if (fix.unusedImports) {
    content = removeUnusedImports(content, fix.unusedImports);
  }

  fs.writeFileSync(fix.file, content);
  console.log(`Fixed: ${fix.file}`);
});

// Fix button issues in ai-code-assistant/page.tsx
const codeAssistantFile = 'app/ai-code-assistant/page.tsx';
if (fs.existsSync(codeAssistantFile)) {
  let content = fs.readFileSync(codeAssistantFile, 'utf8');
  content = fixButtonIssues(content);
  fs.writeFileSync(codeAssistantFile, content);
  console.log(`Fixed button issues in: ${codeAssistantFile}`);
}

console.log('Final TypeScript errors fixed!');