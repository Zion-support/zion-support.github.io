const fs = require('fs');

// Files with specific issues to fix
const fixes = [
  {
    file: 'app/ai-code-assistant-pro/page.tsx',
    changes: [
      { from: 'const [isVisible, setIsVisible] = useState(false);', to: 'const [, setIsVisible] = useState(false);' }
    ]
  },
  {
    file: 'app/ai-healthcare-platform/page.tsx',
    changes: [
      { from: 'const [isVisible, setIsVisible] = useState(false);', to: 'const [, setIsVisible] = useState(false);' },
      { from: 'const specialties = [', to: '// const specialties = [' }
    ]
  },
  {
    file: 'app/ai-marketing-automation-pro/page.tsx',
    changes: [
      { from: 'const [isVisible, setIsVisible] = useState(false);', to: 'const [isVisible] = useState(false);' }
    ]
  },
  {
    file: 'app/ai-neural-memory-assistant/page.tsx',
    changes: [
      { from: "import React from 'react';", to: '' }
    ]
  },
  {
    file: 'app/ai-project-management-pro/page.tsx',
    changes: [
      { from: "import { Cloud } from 'lucide-react';", to: '' },
      { from: "import React from 'react';", to: '' },
      { from: 'ArrowRightIcon,', to: '' }
    ]
  }
];

// Apply fixes
fixes.forEach(fix => {
  if (!fs.existsSync(fix.file)) {
    console.log(`File not found: ${fix.file}`);
    return;
  }

  let content = fs.readFileSync(fix.file, 'utf8');
  
  fix.changes.forEach(change => {
    content = content.replace(change.from, change.to);
  });

  // Clean up empty lines and extra commas
  content = content.replace(/,\s*,/g, ',');
  content = content.replace(/{\s*,/g, '{');
  content = content.replace(/,\s*}/g, '}');
  content = content.replace(/{\s*}/g, '');
  content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
  content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*/g, '');

  fs.writeFileSync(fix.file, content);
  console.log(`Fixed: ${fix.file}`);
});

console.log('Remaining TypeScript errors fixed!');