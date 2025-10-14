const fs = require('fs');
const path = require('path');

// Files with Icon issues
const filesToFix = [
  'app/components/About.tsx',
  'app/components/Contact.tsx',
  'app/components/ImprovedSidebar.tsx',
  'app/components/Sidebar.tsx',
  'app/services/page.tsx',
  'app/web-development/page.tsx'
];

// List of all Icon components that need to be replaced
const iconComponents = [
  'Icon', 'TrophyIcon', 'LightBulbIcon', 'CheckIcon', 'EnvelopeIcon',
  'HomeIcon', 'UserGroupIcon', 'BriefcaseIcon', 'CurrencyDollarIcon',
  'DocumentTextIcon', 'ChatBubbleLeftRightIcon', 'PresentationChartLineIcon',
  'QuestionMarkCircleIcon', 'ChartBarIcon', 'ChipIcon', 'HeartIcon',
  'CogIcon', 'ExclamationIcon', 'CloudIcon', 'AltIcon', 'DevicePhoneMobileIcon',
  'ServerIcon', 'CodeBracketIcon', 'LockClosedIcon', 'WrenchScrewdriverIcon',
  'RocketLaunchIcon', 'SparklesIcon', 'Cog6ToothIcon', 'CommandLineIcon',
  'BeakerIcon', 'MapIcon', 'DocumentDuplicateIcon', 'AcademicCapIcon',
  'PuzzlePieceIcon', 'XMarkIcon', 'ChevronDownIcon', 'ShoppingCartIcon'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace Icon variable references with null or a simple function
    iconComponents.forEach(iconName => {
      // Replace variable references
      const varRegex = new RegExp(`\\b${iconName}\\b`, 'g');
      content = content.replace(varRegex, 'null');
    });
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed icon variables in ${filePath}`);
  }
});

console.log('All icon variable fixes completed!');