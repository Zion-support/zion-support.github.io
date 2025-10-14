import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files that need fixing
const filesToFix = [
  'app/case-studies/page.tsx',
  'app/consultation/page.tsx',
  'app/partners/page.tsx',
  'app/pricing/page.tsx',
  'app/micro-saas/page.tsx',
  'app/support/page.tsx',
  'app/solutions/page.tsx',
  'app/penetration-testing/page.tsx',
  'app/test-simple/page.tsx',
  'app/web-development/page.tsx',
  'app/webinars/page.tsx',
  'app/whitepapers/page.tsx',
  'app/zion-ai-accounting-suite/page.tsx',
  'app/zion-ai-api-manager/page.tsx',
  'app/zion-ai-chatbot-builder/page.tsx',
  'app/zion-ai-data-warehouse/page.tsx',
  'app/zion-ai-document-processor/page.tsx',
  'app/zion-ai-email-optimizer/page.tsx',
  'app/zion-ai-expense-tracker/page.tsx',
  'app/zion-ai-lead-scoring/page.tsx',
  'app/zion-ai-mobile-app-builder/page.tsx',
  'app/zion-ai-social-listener/page.tsx',
  'app/zion-ai-testing-automation/page.tsx',
  'app/zion-ai-workflow-automation/page.tsx',
  'app/zion-ecommerce-optimizer/page.tsx',
  'app/zion-hr-assistant-pro/page.tsx',
  'app/create-ad/page.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/offline/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/pages/BlogPage.tsx',
  'app/pages/CareersPage.tsx',
  'app/pages/CaseStudiesPage.tsx',
  'app/pages/CloudInfrastructurePage.tsx',
  'app/pages/ContactPage.tsx',
  'app/pages/DemoPage.tsx',
  'app/pages/DigitalTransformationPage.tsx',
  'app/pages/DocumentationPage.tsx',
  'app/pages/FiveGSolutionsPage.tsx',
  'app/pages/ITServicesPage.tsx',
  'app/pages/PricingPage.tsx',
  'app/pages/PrivacyPage.tsx',
  'app/pages/ServicesPage.tsx',
  'app/pages/SolutionsPage.tsx',
  'app/pages/SupportPage.tsx',
  'app/pages/TeamPage.tsx',
  'app/pages/TermsPage.tsx',
  'app/pages/TutorialsPage.tsx',
  'app/pages/AIServicesPage.tsx',
  'app/pages/5GSolutionsPage.tsx'
];

// Function to extract page name from file path
function getPageName(filePath) {
  const parts = filePath.split('/');
  const fileName = parts[parts.length - 1];
  const pageName = fileName.replace('.tsx', '').replace('page', '');
  return pageName.charAt(0).toUpperCase() + pageName.slice(1) + 'Page';
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove corrupted content
    content = content.replace(/f7f852c0f7415181a1b362c4aa5a784585ad5828/g, '');
    
    // Fix common syntax issues
    content = content.replace(/;\s*export/g, '\nexport');
    content = content.replace(/;\s*import/g, '\nimport');
    content = content.replace(/;\s*function/g, '\nfunction');
    content = content.replace(/;\s*const/g, '\nconst');
    content = content.replace(/;\s*let/g, '\nlet');
    content = content.replace(/;\s*var/g, '\nvar');
    
    // Fix malformed JSX
    if (content.includes('export default function') && !content.includes('return (')) {
      const functionMatch = content.match(/export default function (\w+)\s*\(\s*\)\s*\{/);
      if (functionMatch) {
        const functionName = functionMatch[1];
        const pageName = getPageName(filePath);
        
        // Create proper JSX structure
        const jsxContent = `  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">${pageName.replace('Page', '')}</h1>
          <p className="text-gray-300 text-xl mb-8">Learn more about ${pageName.replace('Page', '').toLowerCase()}</p>
        </div>
      </div>
    </div>
  );`;
        
        content = content.replace(
          /export default function \w+\s*\(\s*\)\s*\{[\s\S]*?\};?\s*$/,
          `export default function ${functionName}() {\n${jsxContent}\n}`
        );
      }
    }
    
    // Clean up extra semicolons and fix syntax
    content = content.replace(/;\s*$/gm, '');
    content = content.replace(/;\s*\{/g, ' {');
    content = content.replace(/;\s*\(/g, ' (');
    content = content.replace(/;\s*\[/g, ' [');
    content = content.replace(/;\s*"/g, ' "');
    content = content.replace(/;\s*'/g, " '");
    content = content.replace(/;\s*`/g, ' `');
    
    // Fix string literals
    content = content.replace(/'([^']*)'([^']*)'/g, "'$1$2'");
    content = content.replace(/"([^"]*)"([^"]*)"/g, '"$1$2"');
    
    // Fix object syntax
    content = content.replace(/\{\s*;\s*/g, '{\n  ');
    content = content.replace(/;\s*\}/g, '\n}');
    content = content.replace(/;\s*,/g, ',');
    
    // Fix array syntax
    content = content.replace(/\[\s*;\s*/g, '[\n  ');
    content = content.replace(/;\s*\]/g, '\n]');
    
    // Clean up multiple newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Ensure proper file ending
    if (!content.trim().endsWith('}')) {
      content = content.trim() + '\n';
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting to fix syntax errors...');
filesToFix.forEach(fixFile);
console.log('Syntax error fixing completed!');
