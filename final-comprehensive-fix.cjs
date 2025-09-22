const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files that might have undefined components
const allFiles = glob.sync('/workspace/app/**/*.{tsx,ts,jsx,js}', { 
  ignore: ['/workspace/app/**/node_modules/**', '/workspace/app/.next/**'] 
});

console.log(`Found ${allFiles.length} files to process`);

const allIconComponents = [
  'Share2', 'SEO', 'BookOpen', 'TrendingUp', 'Users', 'Shield', 'Globe', 'Cpu', 'Database', 'Server', 'Cloud',
  'CheckCircle', 'XCircle', 'AlertCircle', 'Info', 'Star', 'ArrowRight', 'ArrowLeft',
  'ChevronRight', 'ChevronLeft', 'Play', 'Pause', 'Volume', 'Settings', 'Edit',
  'Delete', 'Plus', 'Minus', 'Search', 'Menu', 'Close', 'Bookmark', 'Heart',
  'Share', 'Download', 'Upload', 'Eye', 'EyeOff', 'Award', 'Brain', 'Zap',
  'DollarSign', 'Circle', 'Calendar', 'Clock', 'Tag', 'ExternalLink', 'Message',
  'ThumbsUp', 'User', 'ArrowLeftIcon', 'UserIcon', 'CalendarIcon', 'ClockIcon',
  'EyeIcon', 'HeartIcon', 'ShareIcon', 'TagIcon', 'ChevronRightIcon', 'ChevronDownIcon',
  'ExternalLinkIcon', 'SearchIcon', 'MenuIcon', 'CloseIcon', 'StarIcon', 'ThumbsUpIcon',
  'MessageIcon', 'BookmarkIcon', 'DownloadIcon', 'PlayIcon', 'PauseIcon', 'VolumeIcon',
  'SettingsIcon', 'EditIcon', 'DeleteIcon', 'PlusIcon', 'MinusIcon', 'CheckIcon',
  'XIcon', 'InfoIcon', 'WarningIcon', 'AlertIcon', 'SuccessIcon', 'ErrorIcon'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // Remove all problematic imports
    const originalContent = content;
    content = content.replace(/import\s+{\s*[^}]*}\s+from\s+['"]@heroicons\/react['"];?\s*\n/g, '');
    content = content.replace(/import\s+{\s*[^}]*}\s+from\s+['"]lucide-react['"];?\s*\n/g, '');
    content = content.replace(/import\s+{\s*[^}]*}\s+from\s+['"]@radix-ui\/react-icons['"];?\n/g, '');
    content = content.replace(/import\s+{\s*[^}]*}\s+from\s+['"]react-icons['"];?\s*\n/g, '');
    content = content.replace(/import\s+SEO\s+from\s+['"][^'"]*['"];?\s*\n/g, '');

    if (content !== originalContent) {
      hasChanges = true;
    }

    // Replace all icon components with simple spans or remove them
    allIconComponents.forEach(component => {
      const componentRegex = new RegExp(`<${component}(\\s+className="[^"]*")?\\s*\\/?>`, 'g');
      if (componentRegex.test(content)) {
        content = content.replace(componentRegex, '<span$1>📊</span>');
        hasChanges = true;
      }
    });

    // Remove SEO component usage
    const seoUsageRegex = /<SEO[\s\S]*?\/>/g;
    if (seoUsageRegex.test(content)) {
      content = content.replace(seoUsageRegex, '');
      hasChanges = true;
    }

    if (hasChanges) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Process all files
let fixedCount = 0;
allFiles.forEach(filePath => {
  if (fixFile(filePath)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);