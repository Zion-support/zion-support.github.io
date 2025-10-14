import fs from 'fs';
import { execSync } from 'child_process';

// List of files that still have unused imports
const filesToFix = [
  'app/ai-customer-sentiment-tracker/page.tsx',
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-healthcare-diagnostics/page.tsx',
  'app/ai-holographic-workspace/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ai-quantum-computing/page.tsx',
  'app/ai-quantum-financial-oracle/page.tsx',
  'app/ai-sentiment-analysis-pro/page.tsx',
  'app/ai-space-mission-optimizer/page.tsx',
  'app/ai-supply-chain-optimizer/page.tsx',
  'app/ai-translation-service/page.tsx'
];

function fixFile(filePath) {
  try {
    console.log(`Fixing ${filePath}...`);
    
    // Read the file
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused imports by running eslint with --fix
    try {
      execSync(`npx eslint "${filePath}" --fix --quiet`, { stdio: 'pipe' });
      console.log(`✓ Fixed ${filePath}`);
    } catch (error) {
      // If eslint can't fix it, try manual removal of common unused imports
      console.log(`⚠ ESLint couldn't fix ${filePath}, trying manual fix...`);
      
      // Common patterns to remove
      const patterns = [
        /import\s*{\s*[^}]*Link[^}]*}\s*from\s*['"]react-router-dom['"];\s*\n/g,
        /import\s*{\s*[^}]*Shield[^}]*}\s*from\s*['"]lucide-react['"];\s*\n/g,
        /import\s*{\s*[^}]*Globe[^}]*}\s*from\s*['"]lucide-react['"];\s*\n/g,
        /import\s*{\s*[^}]*Star[^}]*}\s*from\s*['"]lucide-react['"];\s*\n/g,
        /import\s*{\s*[^}]*Users[^}]*}\s*from\s*['"]lucide-react['"];\s*\n/g,
        /import\s*{\s*[^}]*Award[^}]*}\s*from\s*['"]lucide-react['"];\s*\n/g,
        /import\s*{\s*[^}]*Clock[^}]*}\s*from\s*['"]lucide-react['"];\s*\n/g,
        /import\s*{\s*[^}]*Database[^}]*}\s*from\s*['"]lucide-react['"];\s*\n/g,
        /import\s*{\s*[^}]*Brain[^}]*}\s*from\s*['"]lucide-react['"];\s*\n/g,
        /import\s*{\s*[^}]*Zap[^}]*}\s*from\s*['"]lucide-react['"];\s*\n/g,
        /import\s*{\s*[^}]*PieChart[^}]*}\s*from\s*['"]lucide-react['"];\s*\n/g,
        /import\s*{\s*[^}]*Frown[^}]*}\s*from\s*['"]lucide-react['"];\s*\n/g,
      ];
      
      patterns.forEach(pattern => {
        content = content.replace(pattern, '');
      });
      
      // Write back the cleaned content
      fs.writeFileSync(filePath, content);
      console.log(`✓ Manually fixed ${filePath}`);
    }
  } catch (error) {
    console.log(`✗ Failed to fix ${filePath}: ${error.message}`);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Done fixing remaining unused imports!');