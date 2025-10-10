import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


// Function to fix specific files with known issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix App.tsx - remove unused imports
    if (filePath.includes('App.tsx')) {
      const unusedImports = [
        'ITConsultingPage',
        'MicroSAASPage', 
        'DocsPage',
        'APIDocsPage',
        'SupportPage',
        'StatusPage',
        'PrivacyPage',
        'TermsPage',
        'CookiesPage'
      ];
      
      // Remove unused imports
      unusedImports.forEach(importName => {
        const regex = new RegExp(`import\\s+${importName}\\s+from[^;]+;\\s*`, 'g');
        if (content.match(regex)) {
          content = content.replace(regex, '');
          modified = true;
        }
      });
      
      // Fix unused error parameter
      content = content.replace(/\(error\) => \{/, '() => {');
      modified = true;
    }

    // Fix about/page.tsx - remove unused imports and fix export
    if (filePath.includes('about/page.tsx')) {
      // Remove unused imports
      content = content.replace(/import\s+Navigation\s+from[^;]+;\s*/, '');
      content = content.replace(/import\s+SEOOptimizer\s+from[^;]+;\s*/, '');
      
      // Fix export
      content = content.replace(/const AboutPage: React\.FC = \(\) => \{/, 'export default function AboutPage() {');
      content = content.replace(/export default AboutPage;/, '');
      modified = true;
    }

    // Fix ai-crm/page.tsx - remove unused imports
    if (filePath.includes('ai-crm/page.tsx')) {
      content = content.replace(/import\s+Navigation\s+from[^;]+;\s*/, '');
      content = content.replace(/import\s+Footer\s+from[^;]+;\s*/, '');
      modified = true;
    }

    // Fix ai-customer-support/page.tsx - fix export
    if (filePath.includes('ai-customer-support/page.tsx')) {
      content = content.replace(/const AICustomerSupportPage: React\.FC = \(\) => \{/, 'export default function AICustomerSupportPage() {');
      content = content.replace(/export default AICustomerSupportPage;/, '');
      modified = true;
    }

    // Fix ai-writing-assistant/page.tsx - fix export
    if (filePath.includes('ai-writing-assistant/page.tsx')) {
      content = content.replace(/const AIWritingAssistantPage: React\.FC = \(\) => \{/, 'export default function AIWritingAssistantPage() {');
      content = content.replace(/export default AIWritingAssistantPage;/, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Fixed ${filePath}`);
    }
  } catch (error) {
    console.log(`✗ Error processing ${filePath}: ${error.message}`);
  }
}

// Main execution
console.log('🔧 Fixing remaining issues...\n');

const filesToFix = [
  'src/App.tsx',
  'src/about/page.tsx',
  'src/ai-crm/page.tsx',
  'src/ai-customer-support/page.tsx',
  'src/ai-writing-assistant/page.tsx'
];

for (const file of filesToFix) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  }
}

console.log('\n✅ Fixes complete!');
}}}}}}}}