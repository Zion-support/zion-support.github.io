const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Function to fix import statements
function fixImports(content) {
  let fixed = content;
  
  // Fix multiple semicolons in imports
  fixed = fixed.replace(/import\s+([^;]+);;+/g, 'import $1;');
  
  // Fix malformed import statements
  fixed = fixed.replace(/import\s+([^;]+);';/g, "import $1;");
  fixed = fixed.replace(/import\s+([^;]+);";/g, 'import $1;');
  
  // Fix multiple imports on same line
  fixed = fixed.replace(/import\s+([^;]+);';import\s+([^;]+);/g, "import $1;\nimport $2;");
  fixed = fixed.replace(/import\s+([^;]+);";import\s+([^;]+);/g, 'import $1;\nimport $2;');
  
  // Fix malformed export statements
  fixed = fixed.replace(/export\s+([^;]+);;+/g, 'export $1;');
  
  // Fix malformed object properties
  fixed = fixed.replace(/\{\s*;\s*/g, '{');
  fixed = fixed.replace(/;\s*;\s*\}/g, '}');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/function\s+([^(]+)\([^)]*\)\s*\{;+/g, 'function $1() {');
  
  // Fix malformed arrow functions
  fixed = fixed.replace(/=\s*\([^)]*\)\s*=>\s*\{;+/g, '= () => {');
  
  // Fix malformed JSX
  fixed = fixed.replace(/<\s*;\s*>/g, '<>');
  fixed = fixed.replace(/<\s*\/\s*;\s*>/g, '</>');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*;\s*\)/g, 'return null');
  
  // Fix malformed array/object syntax
  fixed = fixed.replace(/\[\s*;\s*\]/g, '[]');
  fixed = fixed.replace(/\{\s*;\s*\}/g, '{}');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixImports(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixedCount += processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      if (processFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting import fixes...');
const fixedCount = processDirectory('./app');
console.log(`Fixed ${fixedCount} files.`);
=======
const fs = require('fs''
const path = require('path''
  'Send', 'BarChart3', 'Shield', 'Target', 'Mail', 'Phone', 'MapPin', 'Github', 'Linkedin', 'Twitter''
  'ArrowRight', 'Brain', 'Cloud', 'Database', 'Smartphone', 'Zap', 'Sparkles', 'Star', 'CheckCircle''
  'Clock', 'Users', 'Settings', 'Check', 'Globe', 'TrendingUp', 'BarChart', 'Calculator', 'Building2''
  'Wallet', 'PiggyBank', 'Settings', 'Home', 'Info', 'Briefcase', 'Phone', 'DocumentText', 'AcademicCap''
  'Play', 'QuestionMarkCircle', 'ShieldCheck', 'CurrencyDollar', 'Cog', 'ChevronDown', 'Bars3Icon''
  'XMarkIcon', 'HomeIcon', 'InformationCircleIcon', 'BriefcaseIcon', 'PhoneIcon', 'DocumentTextIcon''
  'AcademicCapIcon', 'PlayIcon', 'QuestionMarkCircleIcon', 'ShieldCheckIcon', 'CurrencyDollarIcon''
  'CogIcon', 'ChevronDownIcon''
    const iconRegex = new RegExp(`<${icon}\\s`, 'g''
    const importRegex = new RegExp(`import.*{.*${icon}.*}.*from.*lucide-react`, 'g''
    let content = fs.readFileSync(filePath, 'utf8''
    const importRegex = /import\s*{([^}]+)}\s*from\s*['"]lucide-react[''
>>>>>>> cursor/fix-errors-and-merge-to-main-45ea
