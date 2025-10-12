const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common unused imports that appear frequently
const commonUnusedImports = [
  'Helmet',
  'Star',
  'Users',
  'Globe',
  'Smartphone',
  'FileText',
  'Clock',
  'Search',
  'Filter',
  'Download',
  'Upload',
  'Monitor',
  'Cpu',
  'Shield',
  'Lock',
  'Network',
  'AlertTriangle',
  'TrendingUp',
  'Video',
  'Music',
  'DollarSign',
  'CreditCard',
  'Calendar',
  'Bell',
  'Plus',
  'Edit3',
  'Trash2',
  'Eye',
  'Zap',
  'Target',
  'Play',
  'Pause',
  'RefreshCw',
  'Settings',
  'Edit',
  'Share2',
  'Activity',
  'PieChart',
  'Server',
  'Wifi',
  'Cloud',
  'Terminal',
  'GitBranch',
  'Layers',
  'Workflow',
  'Bot',
  'Sparkles',
  'Wand2',
  'Lightbulb',
  'Rocket',
  'Award',
  'Trophy',
  'Medal',
  'Crown',
  'Diamond',
  'Gem',
  'Heart',
  'ThumbsUp',
  'ThumbsDown',
  'MessageCircle',
  'Phone',
  'MapPin',
  'Github',
  'Linkedin',
  'Twitter',
  'Instagram',
  'Facebook',
  'Youtube',
  'Twitch',
  'Discord',
  'Slack',
  'Figma',
  'Notion',
  'Trello',
  'Asana',
  'Monday',
  'Jira',
  'Confluence',
  'Airtable',
  'Miro',
  'Loom',
  'Zoom',
  'Teams',
  'Google',
  'Microsoft',
  'Apple',
  'Amazon',
  'Netflix',
  'Spotify',
  'Adobe',
  'Salesforce',
  'Hubspot',
  'Shopify',
  'WooCommerce',
  'Stripe',
  'Paypal',
  'Square',
  'QuickBooks',
  'Xero',
  'FreshBooks',
  'Wave',
  'Mint',
  'YNAB',
  'Link',
  'BarChart3',
  'CheckCircle'
];

function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Find all import statements
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"][^'"]+['"];?/g;
    const imports = content.match(importRegex);

    if (imports) {
      imports.forEach(importStatement => {
        // Extract the import source
        const sourceMatch = importStatement.match(/from\s+['"]([^'"]+)['"]/);
        if (!sourceMatch) return;

        const source = sourceMatch[1];
        
        // Extract the imported items
        const itemsMatch = importStatement.match(/{\s*([^}]+)\s*}/);
        if (!itemsMatch) return;

        const items = itemsMatch[1]
          .split(',')
          .map(item => item.trim())
          .filter(item => item);

        // Check which items are actually used in the file
        const usedItems = items.filter(item => {
          // Remove any type annotations or aliases
          const cleanItem = item.split(' as ')[0].split(':')[0].trim();
          return content.includes(cleanItem) && !commonUnusedImports.includes(cleanItem);
        });

        // If some items are unused, create a new import statement
        if (usedItems.length !== items.length) {
          const newImportStatement = usedItems.length > 0 
            ? `import { ${usedItems.join(', ')} } from '${source}';`
            : '';
          
          content = content.replace(importStatement, newImportStatement);
          modified = true;
        }
      });
    }

    // Also fix unused variables
    const lines = content.split('\n');
    const newLines = lines.map(line => {
      // Remove unused variable declarations
      if (line.includes('const [') && line.includes('] = useState') && line.includes('// eslint-disable')) {
        return line.replace(/const\s+\[[^]]+\]\s*=\s*useState[^;]+;/, '');
      }
      
      // Remove unused variable declarations that are clearly unused
      if (line.includes('const [') && line.includes('] = useState') && !line.includes('useState(')) {
        const match = line.match(/const\s+\[([^,]+),\s*set[A-Z][^\]]+\]\s*=\s*useState/);
        if (match) {
          const varName = match[1];
          if (!content.includes(varName) || content.split(varName).length < 3) {
            return '';
          }
        }
      }
      
      return line;
    });

    if (modified || newLines.some((line, index) => line !== lines[index])) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Find all TypeScript and JavaScript files
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process...`);

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  fixUnusedImports(fullPath);
});

console.log('Unused imports cleanup completed!');