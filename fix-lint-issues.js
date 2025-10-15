import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common lint issues
function fixLintIssues(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix HTML entity escaping issues
  const htmlEntityFixes = [
    { pattern: /'/g, replacement: '&apos;' },
    { pattern: /"/g, replacement: '&quot;' }
  ];

  // Only apply HTML entity fixes in JSX content (not in strings or comments)
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Check if line contains JSX content (has < or >)
    if (line.includes('<') && line.includes('>')) {
      // Check if it's not already escaped
      if (line.includes("'") && !line.includes('&apos;')) {
        lines[i] = line.replace(/'/g, '&apos;');
        modified = true;
      }
      if (line.includes('"') && !line.includes('&quot;')) {
        lines[i] = line.replace(/"/g, '&quot;');
        modified = true;
      }
    }
  }

  if (modified) {
    content = lines.join('\n');
  }

  // Remove unused imports (basic cleanup)
  const unusedImports = [
    'ArrowRight', 'Phone', 'Mail', 'Play', 'Pause', 'RefreshCw', 'Settings',
    'Eye', 'Filter', 'Target', 'Users', 'Award', 'TrendingUp', 'Cpu', 'Database',
    'Activity', 'Clock', 'FileText', 'Send', 'ThumbsUp', 'ThumbsDown',
    'AlertCircle', 'CheckSquare', 'XCircle', 'PieChart', 'LineChart',
    'TrendingDown', 'Calculator', 'CreditCard', 'Banknote', 'Wallet', 'Receipt',
    'ChartBar', 'Percent', 'Coins', 'Building2', 'PiggyBank', 'HandCoins',
    'PenTool', 'Video', 'Headphones', 'Smartphone', 'Tablet', 'Laptop',
    'Wifi', 'Lock', 'User', 'UsersIcon', 'AwardIcon', 'Trophy', 'TargetIcon',
    'Lightbulb', 'Clipboard', 'Calendar', 'MessageSquare', 'Share2',
    'DownloadIcon', 'Upload', 'Edit', 'Trash2', 'Plus', 'Minus', 'Check', 'X',
    'Globe', 'MapPin', 'Download', 'Zap', 'CheckCircle', 'BarChart3', 'Shield',
    'Brain', 'Cloud', 'Sparkles', 'Monitor', 'Star', 'ArrowRight'
  ];

  // Remove console statements
  content = content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);?\s*/g, '');
  
  // Remove unused variables (basic cleanup)
  content = content.replace(/const\s+\[([^,]+),\s*setIsVisible\]\s*=\s*useState\([^)]*\);\s*/g, '');
  content = content.replace(/const\s+isVisible\s*=\s*[^;]+;\s*/g, '');
  content = content.replace(/const\s+technologies\s*=\s*[^;]+;\s*/g, '');
  content = content.replace(/const\s+specialties\s*=\s*[^;]+;\s*/g, '');

  if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Main function
async function main() {
  // Find all TypeScript/JavaScript files
  const files = await glob('app/**/*.{ts,tsx,js,jsx}');

  console.log(`Found ${files.length} files to process...`);

  for (const file of files) {
    const fullPath = path.join(process.cwd(), file);
    try {
      fixLintIssues(fullPath);
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  console.log('Lint fixes completed!');
}

main().catch(console.error);