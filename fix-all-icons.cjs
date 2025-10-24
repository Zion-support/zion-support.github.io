const fs = require('fs');

const files = [
  'app/it-services/page.tsx',
  'app/team/page.tsx'
];

const iconMappings = {
  'Cloud': 'Cloud',
  'Server': 'Server', 
  'Database': 'Database',
  'Shield': 'Shield',
  'Zap': 'Zap',
  'Target': 'Target',
  'BarChart': 'BarChart',
  'TrendingUp': 'TrendingUp',
  'Brain': 'Brain',
  'Users': 'Users',
  'CheckCircle': 'CheckCircle',
  'ArrowRight': 'ArrowRight'
};

files.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add missing imports
    const currentImport = content.match(/import { [^}]+ } from "lucide-react";/);
    if (currentImport) {
      const currentIcons = currentImport[0].match(/\w+/g).slice(1, -2); // Remove 'import', '{', '}', 'from', 'lucide-react'
      const allIcons = [...new Set([...currentIcons, ...Object.keys(iconMappings)])];
      const newImport = `import { ${allIcons.join(', ')} } from "lucide-react";`;
      content = content.replace(currentImport[0], newImport);
    }
    
    // Fix icon string references to component references
    Object.keys(iconMappings).forEach(iconName => {
      const regex = new RegExp(`icon: '${iconName}'`, 'g');
      content = content.replace(regex, `icon: ${iconName}`);
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  }
});

console.log('All icon fixes completed!');