const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Mapping of old icon names to new icon names
const iconMappings = {
  'ArrowLeftIcon': 'ArrowLeft',
  'ArrowRightIcon': 'ArrowRight',
  'CalendarIcon': 'Calendar',
  'UserIcon': 'User',
  'ClockIcon': 'Clock',
  'TagIcon': 'Tag',
  'TargetIcon': 'Target',
  'CheckCircleIcon': 'CheckCircle',
  'StarIcon': 'Star',
  'BookOpenIcon': 'BookOpen',
  'UsersIcon': 'Users',
  'ZapIcon': 'Zap',
  'TrendingUpIcon': 'TrendingUp',
  'BrainIcon': 'Brain',
  'CpuIcon': 'Cpu',
  'ShieldIcon': 'Shield',
  'SettingsIcon': 'Settings',
  'BarChart3Icon': 'BarChart3',
  'PhoneIcon': 'Phone',
  'AlertTriangleIcon': 'AlertTriangle',
  'RefreshCwIcon': 'RefreshCw',
  'HomeIcon': 'Home',
  'Calculator': 'Calculator',
  'Share2': 'Share2',
  'ArrowLeftIcon as ArrowLeft': 'ArrowLeft',
  'ArrowRightIcon as ArrowRight': 'ArrowRight',
  'CalendarIcon as Calendar': 'Calendar',
  'UserIcon as User': 'User',
  'ClockIcon as Clock': 'Clock',
  'TagIcon as Tag': 'Tag',
  'TargetIcon as Target': 'Target',
  'CheckCircleIcon as CheckCircle': 'CheckCircle',
  'StarIcon as Star': 'Star',
  'BookOpenIcon as BookOpen': 'BookOpen',
  'UsersIcon as Users': 'Users',
  'ZapIcon as Zap': 'Zap',
  'TrendingUpIcon as TrendingUp': 'TrendingUp',
  'BrainIcon as Brain': 'Brain',
  'CpuIcon as Cpu': 'Cpu',
  'ShieldIcon as Shield': 'Shield',
  'SettingsIcon as Settings': 'Settings',
  'BarChart3Icon as BarChart3': 'BarChart3',
  'PhoneIcon as Phone': 'Phone',
  'AlertTriangleIcon as AlertTriangle': 'AlertTriangle',
  'RefreshCwIcon as RefreshCw': 'RefreshCw',
  'HomeIcon as Home': 'Home',
  'Calculator as Calculator': 'Calculator',
  'Share2 as Share2': 'Share2',
};

// Find all TypeScript/JavaScript files
const files = glob.sync('**/*.{ts,tsx,js,jsx}', {
  ignore: [
    'node_modules/**',
    '.next/**',
    'dist/**',
    'build/**',
    '__tests__/**',
    '_app_disabled/**',
    '_conflicted_disabled/**',
    '_pages_api_disabled/**',
    '_pages_disabled/**',
    'admin-api-disabled/**',
    'api-disabled/**',
    'api.disabled/**',
    'api.disabled.temp/**',
    'api-backup/**',
    'apps.backup/**',
    'automation_backup/**',
    'ai-optimization-backups/**',
    'automation_logs/**',
    'all-automations-reports/**',
    'accessibility-reports/**',
    'app/blog/**',
    'corrupted-files-backup/**',
    'corrupted_backup/**',
    'corrupted_files_backup_2/**',
    'content/**',
    'contracts/**',
    'components_backup/**',
    'app/services/**',
    'app/guides/**',
    'data/**',
    'data_backup/**',
    'dao/**',
    'deployments/**',
    'disabled-api/**',
    'e2e/**',
    'factories/**',
    'src/pages/blog-disabled/**',
    'hooks/**',
    'lib_backup/**',
    'services/**',
    'middleware/**',
    'fix-*.jsx',
    'fix-*.ts',
    'jest.setup.*',
    'lib/integrations/**',
    'lint-target/**',
    'middleware.security.ts',
    'components/AutonomousEnterpriseBreakthroughBanner.tsx',
    'components/ConsensusIntelligenceBreakthroughBanner.tsx',
    'components/FeaturedServiceCard.tsx',
    'app/components/NewestContent2025Banner.tsx',
    'app/components/September30NewContent2025Banner.tsx',
    'app/components/UltimateBusinessIntelligence2025Banner.tsx',
    'app/components/UltimateBusinessIntelligenceShowcase2025.tsx',
    'app/contact/page.tsx',
    'app/enterprise/page.tsx',
    'app/not-found.tsx',
    'app/page-minimal.tsx',
    'app/page-optimized.tsx',
    'app/services-advertising/page.tsx',
    'fix_typescript_syntax_errors.jsx',
    'fix_utils_files.ts'
  ]
});

let totalFixed = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Check if file imports from lucide-react
    if (content.includes('from \'lucide-react\'')) {
      // Fix each icon mapping
      Object.entries(iconMappings).forEach(([oldName, newName]) => {
        const regex = new RegExp(`\\b${oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
        if (content.includes(oldName)) {
          content = content.replace(regex, newName);
          modified = true;
        }
      });
      
      if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed lucide-react imports in: ${file}`);
        totalFixed++;
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed lucide-react imports in ${totalFixed} files`);