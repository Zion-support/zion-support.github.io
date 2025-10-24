const fs = require('fs');
const path = require('path');

const files = [
  'app/ai-email-automation/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-services/page.tsx',
  'app/it-services/page.tsx',
  'app/team/page.tsx'
];

const iconMappings = {
  'Brain': 'Brain',
  'Send': 'Send',
  'TrendingUp': 'TrendingUp',
  'Zap': 'Zap',
  'BarChart3': 'BarChart3',
  'Shield': 'Shield',
  'DollarSign': 'DollarSign',
  'Clock': 'Clock',
  'Users': 'Users',
  'Target': 'Target',
  'BarChart': 'BarChart',
  'Star': 'Star',
  'CheckCircle': 'CheckCircle',
  'ArrowRight': 'ArrowRight',
  'Mail': 'Mail'
};

files.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix icon string references to component references
    Object.keys(iconMappings).forEach(iconName => {
      const regex = new RegExp(`icon: '${iconName}'`, 'g');
      content = content.replace(regex, `icon: ${iconName}`);
    });
    
    // Fix JSX usage
    content = content.replace(/<(\w+)\.icon className="([^"]*)" \/>/g, (match, varName, className) => {
      return `{(() => {
        const IconComponent = ${varName}.icon;
        return <IconComponent className="${className}" />;
      })()}`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  }
});

console.log('Icon fixes completed!');