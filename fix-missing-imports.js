import fs from 'fs';

// Function to add back necessary imports
function fixMissingImports() {
  const filesToFix = [
    'app/ai-powered-email-analyzer/page.tsx',
    'app/ecommerce-analytics-pro/page.tsx',
    'app/error.tsx',
    'app/global-error.tsx',
    'app/loading.tsx',
    'app/it-services/cybersecurity-audit/page.tsx',
    'app/legal-document-manager/page.tsx',
    'app/medical-records-manager/page.tsx',
    'app/online-learning-platform/page.tsx',
    'app/property-management-ai/page.tsx',
    'app/supply-chain-optimizer/page.tsx',
    'app/test/page.tsx',
    'app/page-new.tsx',
    'app/page-optimized.tsx'
  ];

  filesToFix.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Add back the necessary imports after the Footer import
      if (content.includes("import Footer from '../components/Footer'") && !content.includes("import { CheckCircle")) {
        content = content.replace(
          "import Footer from '../components/Footer'",
          "import Footer from '../components/Footer'\nimport { CheckCircle, ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'"
        );
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in: ${filePath}`);
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  });
}

// Function to fix Navigation component
function fixNavigationComponent() {
  try {
    let content = fs.readFileSync('app/components/Navigation.tsx', 'utf8');
    
    // Add back Search import
    if (content.includes("import { Menu, X, ArrowLeft, RefreshCw } from 'lucide-react'") && !content.includes('Search')) {
      content = content.replace(
        "import { Menu, X, ArrowLeft, RefreshCw } from 'lucide-react'",
        "import { Menu, X, Search, ArrowLeft, RefreshCw } from 'lucide-react'"
      );
    }
    
    fs.writeFileSync('app/components/Navigation.tsx', content);
    console.log('Fixed Navigation component');
  } catch (error) {
    console.error('Error fixing Navigation component:', error.message);
  }
}

// Function to fix hook files
function fixHookFiles() {
  try {
    let content = fs.readFileSync('app/hooks/useEnhancedPerformance.ts', 'utf8');
    
    // Remove the unused destructured elements line
    content = content.replace(/const \{ [^}]+ \} = useCallback\(\(\) => \{[\s\S]*?\}, \[\]\);\n/g, '');
    
    fs.writeFileSync('app/hooks/useEnhancedPerformance.ts', content);
    console.log('Fixed hook file');
  } catch (error) {
    console.error('Error fixing hook file:', error.message);
  }
}

// Main function
async function main() {
  console.log('Adding back necessary imports...');
  fixMissingImports();
  
  console.log('Fixing Navigation component...');
  fixNavigationComponent();
  
  console.log('Fixing hook files...');
  fixHookFiles();
  
  console.log('Done!');
}

main().catch(console.error);