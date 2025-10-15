const fs = require('fs');
const path = require('path');

// Files that need icon fixes
const filesToFix = [
  'app/ai-analytics-dashboard-pro/page.tsx',
  'app/ai-customer-support-chatbot/page.tsx',
  'app/ai-email-marketing-automation/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-social-media-manager/page.tsx'
];

// Common missing icons to replace
const iconReplacements = {
  'BarChart3': '<div className="w-6 h-6 bg-blue-500 rounded" />',
  'Cloud': '<div className="w-6 h-6 bg-cyan-500 rounded" />',
  'Target': '<div className="w-6 h-6 bg-green-500 rounded" />',
  'ShoppingCart': '<div className="w-6 h-6 bg-orange-500 rounded" />',
  'Zap': '<div className="w-6 h-6 bg-yellow-500 rounded" />',
  'Shield': '<div className="w-6 h-6 bg-purple-500 rounded" />',
  'Smartphone': '<div className="w-6 h-6 bg-pink-500 rounded" />',
  'Globe': '<div className="w-6 h-6 bg-indigo-500 rounded" />',
  'FileText': '<div className="w-6 h-6 bg-gray-500 rounded" />',
  'Settings': '<div className="w-6 h-6 bg-slate-500 rounded" />',
  'Award': '<div className="w-6 h-6 bg-amber-500 rounded" />',
  'Phone': '<div className="w-6 h-6 bg-emerald-500 rounded" />',
  'MapPin': '<div className="w-6 h-6 bg-red-500 rounded" />',
  'Envelope': '<div className="w-6 h-6 bg-teal-500 rounded" />',
  'Eye': '<div className="w-6 h-6 bg-violet-500 rounded" />',
  'MessageSquare': '<div className="w-6 h-6 bg-rose-500 rounded" />',
  'Users': '<div className="w-6 h-6 bg-sky-500 rounded" />',
  'RefreshCw': '<div className="w-6 h-6 bg-lime-500 rounded" />',
  'Mail': '<div className="w-6 h-6 bg-cyan-500 rounded" />',
  'Share2': '<div className="w-6 h-6 bg-orange-500 rounded" />',
  'Calendar': '<div className="w-6 h-6 bg-blue-500 rounded" />',
  'Bot': '<div className="w-6 h-6 bg-purple-500 rounded" />',
  'ThumbsUp': '<div className="w-6 h-6 bg-green-500 rounded" />',
  'PieChart': '<div className="w-6 h-6 bg-indigo-500 rounded" />'
};

filesToFix.forEach(filePath => {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace missing icon references
      Object.entries(iconReplacements).forEach(([iconName, replacement]) => {
        const regex = new RegExp(`<${iconName}\\s+className="[^"]*"\\s*/>`, 'g');
        content = content.replace(regex, replacement);
        
        // Also handle cases where the icon is used in JSX expressions
        const jsxRegex = new RegExp(`<${iconName}\\s+className="[^"]*"\\s*/>`, 'g');
        content = content.replace(jsxRegex, replacement);
      });
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed icons in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Icon fixes completed!');
