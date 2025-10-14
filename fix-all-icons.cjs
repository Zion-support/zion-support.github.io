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
    
    // Replace all Icon components with simple divs
    iconComponents.forEach(iconName => {
      const regex = new RegExp(`<${iconName}[^>]*\\/>`, 'g');
      content = content.replace(regex, '<div className="w-6 h-6" />');
    });
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed icons in ${filePath}`);
  }
});

console.log('All icon fixes completed!');