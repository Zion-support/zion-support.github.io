const fs = require('fs');
const path = require('path');

// List of files to fix
const filesToFix = [
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/test/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/online-learning-platform/page.tsx'
];

function fixPage(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace the dynamic icon usage with static JSX
    const newContent = content
      .replace(
        /const features = \[\s*\{\s*icon: Brain,\s*title: '[^']+',\s*description: '[^']+',\s*benefits: \[[^\]]+\]\s*\},\s*\{\s*icon: BarChart,\s*title: '[^']+',\s*description: '[^']+',\s*benefits: \[[^\]]+\]\s*\},\s*\{\s*icon: Target,\s*title: '[^']+',\s*description: '[^']+',\s*benefits: \[[^\]]+\]\s*\}\s*\]/s,
        `const features = [
    {
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time monitoring', 'Custom dashboards', 'Data visualization', 'Performance metrics']
    },
    {
      title: 'Precision Targeting',
      description: 'Target the right audience with AI-driven precision and accuracy.',
      benefits: ['Audience segmentation', 'Behavioral analysis', 'Conversion optimization', 'ROI tracking']
    }
  ]`
      )
      .replace(
        /\{React\.createElement\(feature\.icon, \{ className: "w-12 h-12 text-emerald-400 mb-4" \}\)\}/g,
        '<div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg"><Brain className="w-6 h-6" /></div>'
      );
    
    fs.writeFileSync(fullPath, newContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixPage);
console.log('All pages have been fixed with static icons!');