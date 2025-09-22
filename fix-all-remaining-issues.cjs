const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all problematic blog and content files
const problematicFiles = [
  '/workspace/app/blog/ai-transformation-2025-complete-guide/page.tsx',
  '/workspace/app/blog/ai-2025-2026-ultimate-ai-revolution-breakthrough-ultimate-guide/page.tsx',
  '/workspace/app/blog/ai-2025-ultimate-innovation-breakthrough-ultimate-guide/page.tsx',
  '/workspace/app/blog/ai-2025-ultimate-business-transformation-complete-guide/page.tsx',
  '/workspace/app/blog/ai-2025-ultimate-business-revolution-complete-guide/page.tsx',
  '/workspace/app/blog/ai-2025-ultimate-business-revolution-100000-roi-breakthrough/page.tsx',
  '/workspace/app/blog/ai-2025-quantum-computing-revolution/page.tsx',
  '/workspace/app/blog/ai-2025-quantum-computing-breakthrough-enterprise/page.tsx',
  '/workspace/app/blog/ai-2025-future-trends-revolutionary-breakthrough/page.tsx',
  '/workspace/app/blog/ai-2025-edge-computing-revolution-enterprise-transformation/page.tsx',
  '/workspace/app/blog/ai-2025-autonomous-enterprise-systems/page.tsx',
  '/workspace/app/blog/ai-2025-autonomous-business-intelligence-revolution/page.tsx'
];

const allIconComponents = [
  'TrendingUp', 'Users', 'Shield', 'Globe', 'Cpu', 'Database', 'Server', 'Cloud',
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
    content = content.replace(/import\s+{\s*[^}]*}\s+from\s+['"]@heroicons\/react['"];?\s*\n/g, '');
    content = content.replace(/import\s+{\s*[^}]*}\s+from\s+['"]lucide-react['"];?\s*\n/g, '');
    content = content.replace(/import\s+{\s*[^}]*}\s+from\s+['"]@radix-ui\/react-icons['"];?\n/g, '');
    content = content.replace(/import\s+{\s*[^}]*}\s+from\s+['"]react-icons['"];?\s*\n/g, '');

    // Replace all icon components with simple spans
    allIconComponents.forEach(component => {
      const componentRegex = new RegExp(`<${component}(\\s+className="[^"]*")?\\s*\\/?>`, 'g');
      if (componentRegex.test(content)) {
        content = content.replace(componentRegex, '<span$1>📊</span>');
        hasChanges = true;
      }
    });

    // Remove SEO component usage if it's causing issues
    content = content.replace(/<SEO[\s\S]*?\/>/g, '');
    content = content.replace(/import\s+SEO\s+from\s+['"][^'"]*['"];?\s*\n/g, '');

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

// Fix all problematic files
let fixedCount = 0;
problematicFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (fixFile(filePath)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed ${fixedCount} files`);