import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all problematic files
const files = await glob('app/**/*.tsx', { cwd: '/workspace' });

console.log(`Found ${files.length} files to check`);

for (const file of files) {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix early return statements that break JSX
  if (content.includes('return;') && content.includes('export default function')) {
    console.log(`Fixing early return in ${file}`);
    content = content.replace(/export default function\s+\w+\s*\(\s*\)\s*{\s*return;\s*},/g, (match) => {
      const funcName = match.match(/export default function\s+(\w+)/)[1];
      return `export default function ${funcName}() {\n  return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <div className="container mx-auto px-4 py-16">\n        <h1 className="text-4xl font-bold text-white text-center mb-8">${funcName.replace(/([A-Z])/g, ' $1').trim()}</h1>\n        <p className="text-gray-300 text-center">Coming soon...</p>\n      </div>\n    </div>\n  );\n}`;
    });
    modified = true;
  }

  // Fix malformed JSX structure
  if (content.includes('JSX expressions must have one parent element')) {
    console.log(`Fixing JSX structure in ${file}`);
    // This is a complex fix that needs to be handled case by case
    // For now, let's wrap problematic sections
    content = content.replace(/(<div[^>]*>[\s\S]*?)(<h3[^>]*>[\s\S]*?<\/h3>[\s\S]*?<p[^>]*>[\s\S]*?<\/p>[\s\S]*?<ul[^>]*>[\s\S]*?<\/ul>[\s\S]*?)(<\/div>)/g, '$1<div>$2</div>$3');
    modified = true;
  }

  // Fix missing imports for common Lucide icons
  const commonIcons = [
    'Zap', 'Shield', 'Users', 'BarChart3', 'Settings', 'Clock', 'FileText', 
    'CheckCircle', 'Mail', 'Phone', 'Star', 'ArrowRight', 'Target', 'Bug',
    'Globe', 'Bot', 'Workflow', 'TrendingUp', 'Database', 'Eye', 'Brain',
    'Headphones', 'ShoppingCart', 'Cpu', 'Activity', 'Play', 'MessageSquare',
    'MessageCircle', 'Calendar', 'DollarSign', 'Award', 'Search', 'Filter',
    'User', 'Helmet', 'AlertTriangle', 'Heart'
  ];

  const existingImports = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
  if (existingImports) {
    const importedIcons = existingImports[1].split(',').map(icon => icon.trim());
    const missingIcons = commonIcons.filter(icon => 
      content.includes(`<${icon}`) && !importedIcons.includes(icon)
    );
    
    if (missingIcons.length > 0) {
      console.log(`Adding missing icons to ${file}: ${missingIcons.join(', ')}`);
      const newImports = [...importedIcons, ...missingIcons].join(', ');
      content = content.replace(
        /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/,
        `import { ${newImports} } from 'lucide-react'`
      );
      modified = true;
    }
  } else if (commonIcons.some(icon => content.includes(`<${icon}`))) {
    // Add import if none exists
    const usedIcons = commonIcons.filter(icon => content.includes(`<${icon}`));
    console.log(`Adding lucide-react import to ${file}: ${usedIcons.join(', ')}`);
    content = `import { ${usedIcons.join(', ')} } from 'lucide-react';\n` + content;
    modified = true;
  }

  // Fix unescaped entities
  content = content.replace(/'/g, '&apos;');
  content = content.replace(/"/g, '&quot;');

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
}

console.log('Syntax fixes completed');