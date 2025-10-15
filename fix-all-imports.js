import fs from 'fs';
import path from 'path';

// Icon mapping from old names to new Lucide names
const iconMappings = {
  'ArrowRightIcon': 'ArrowRight',
  'PlayIcon': 'Play',
  'CpuChipIcon': 'Cpu',
  'ShieldCheckIcon': 'Shield',
  'CloudIcon': 'Cloud',
  'ChartBarIcon': 'BarChart3',
  'CheckIcon': 'CheckCircle',
  'StarIcon': 'Star',
  'LightBulbIcon': 'Lightbulb',
  'UserGroupIcon': 'Users',
  'ShieldIcon': 'Shield',
  'CpuIcon': 'Cpu',
  'CloudIcon': 'Cloud',
  'CheckIcon': 'CheckCircle',
  'BarChartIcon': 'BarChart3',
  'TrendingUpIcon': 'TrendingUp',
  'DatabaseIcon': 'Database',
  'EyeIcon': 'Eye',
  'ZapIcon': 'Zap',
  'ShieldIcon': 'Shield',
  'UsersIcon': 'Users',
  'MessageSquareIcon': 'MessageSquare',
  'BotIcon': 'Bot',
  'ClockIcon': 'Clock',
  'GlobeIcon': 'Globe',
  'HeadphonesIcon': 'Headphones',
  'PhoneIcon': 'Phone',
  'MailIcon': 'Mail',
  'CalendarIcon': 'Calendar',
  'FileTextIcon': 'FileText',
  'SearchIcon': 'Search',
  'FilterIcon': 'Filter',
  'UserIcon': 'User',
  'AwardIcon': 'Award',
  'DollarSignIcon': 'DollarSign',
  'ShoppingCartIcon': 'ShoppingCart',
  'WorkflowIcon': 'Workflow',
  'HelmetIcon': 'Helmet',
  'LeafIcon': 'Leaf',
  'CalculatorIcon': 'Calculator'
};

// Function to fix imports and icon references in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed imports - remove duplicate import statements
    const lines = content.split('\n');
    const newLines = [];
    let inImport = false;
    let importStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.startsWith('import ')) {
        if (inImport) {
          // Skip duplicate import lines
          continue;
        }
        inImport = true;
        importStart = i;
        newLines.push(lines[i]);
      } else if (inImport && (line === '' || line.startsWith('}') || line.startsWith('from'))) {
        newLines.push(lines[i]);
        if (line.startsWith('from')) {
          inImport = false;
        }
      } else if (inImport && line.includes('import ')) {
        // This is a duplicate import line, skip it
        continue;
      } else {
        inImport = false;
        newLines.push(lines[i]);
      }
    }
    
    if (newLines.length !== lines.length) {
      content = newLines.join('\n');
      modified = true;
    }
    
    // Fix icon references
    for (const [oldName, newName] of Object.entries(iconMappings)) {
      const regex = new RegExp(`<${oldName}(\\s[^>]*)?>`, 'g');
      if (content.includes(oldName)) {
        content = content.replace(regex, `<${newName}$1>`);
        modified = true;
      }
    }
    
    // Fix import statements to use lucide-react
    const heroiconsPattern = /import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]@heroicons\/react\/[^'"]*['"]/g;
    const lucidePattern = /import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]lucide-react['"]/g;
    
    if (heroiconsPattern.test(content)) {
      // Extract icon names from heroicons imports
      const heroiconsMatches = content.match(heroiconsPattern);
      if (heroiconsMatches) {
        for (const match of heroiconsMatches) {
          const iconNames = match.match(/\{([^}]+)\}/)[1].split(',').map(name => name.trim());
          const lucideNames = iconNames.map(name => iconMappings[name] || name).join(', ');
          
          // Replace with lucide-react import
          content = content.replace(match, `import { ${lucideNames} } from 'lucide-react';`);
          modified = true;
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively process all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive import and icon fixes...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files.`);