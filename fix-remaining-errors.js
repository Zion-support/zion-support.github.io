const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has missing imports or data
    if (content.includes('stats.map') || content.includes('features.map') || content.includes('useCases.map') || content.includes('benefits.map')) {
      // This file needs data arrays and imports
      const needsData = content.includes('stats.map') || content.includes('features.map') || content.includes('useCases.map') || content.includes('benefits.map');
      const needsCheckCircle = content.includes('CheckCircle') && !content.includes('import { CheckCircle');
      const needsCpu = content.includes('<Cpu') && !content.includes('import { Cpu');
      const needsFooter = content.includes('<Footer') && !content.includes('import Footer');

      if (needsData || needsCheckCircle || needsCpu || needsFooter) {
        // Add missing imports
        let imports = [];
        if (needsCheckCircle) imports.push('CheckCircle');
        if (needsCpu) imports.push('Cpu');
        
        if (imports.length > 0) {
          const lucideImport = content.match(/import { [^}]+ } from 'lucide-react';/);
          if (lucideImport) {
            const currentImports = lucideImport[0].match(/{ ([^}]+) }/)[1];
            const newImports = currentImports + ', ' + imports.join(', ');
            content = content.replace(lucideImport[0], `import { ${newImports} } from 'lucide-react';`);
          } else {
            content = content.replace(
              /import { ArrowRight } from 'lucide-react';/,
              `import { ArrowRight, ${imports.join(', ')} } from 'lucide-react';`
            );
          }
        }

        if (needsFooter) {
          content = content.replace(
            /import { ArrowRight[^}]* } from 'lucide-react';/,
            `import { ArrowRight${imports.length > 0 ? ', ' + imports.join(', ') : ''} } from 'lucide-react';\nimport Footer from '@/components/Footer';`
          );
        }

        // Add data arrays if missing
        if (needsData) {
          const dataArrays = `
// Data arrays
const stats = [
  { icon: 'Users', number: '500+', label: 'Automated Processes' },
  { icon: 'Clock', number: '80%', label: 'Time Saved' },
  { icon: 'TrendingUp', number: '95%', label: 'Accuracy Rate' },
  { icon: 'DollarSign', number: '60%', label: 'Cost Reduction' }
];

const features = [
  { icon: 'Zap', title: 'Smart Automation', description: 'AI-powered process automation that learns and adapts' },
  { icon: 'Shield', title: 'Secure Integration', description: 'Enterprise-grade security for all automated workflows' },
  { icon: 'BarChart3', title: 'Real-time Analytics', description: 'Comprehensive insights into automation performance' },
  { icon: 'Settings', title: 'Easy Configuration', description: 'User-friendly interface for setting up automations' }
];

const useCases = [
  { icon: 'Mail', title: 'Email Automation', description: 'Automated email campaigns and responses' },
  { icon: 'FileText', title: 'Document Processing', description: 'AI-powered document analysis and processing' },
  { icon: 'ShoppingCart', title: 'E-commerce', description: 'Automated inventory and order management' },
  { icon: 'Users', title: 'Customer Service', description: 'Intelligent chatbots and support automation' }
];

const benefits = [
  'Reduce manual work by up to 80%',
  'Improve accuracy and consistency',
  'Scale operations without scaling costs',
  '24/7 automated monitoring and alerts',
  'Easy integration with existing systems',
  'ROI visible within first month'
];`;

          // Insert data arrays before the component
          content = content.replace(
            /export default function \w+\(\) \{/,
            dataArrays + '\n\nexport default function $&'
          );
        }

        modified = true;
      }
    }

    // Fix missing closing tags
    if (content.includes('<Footer') && !content.includes('</>')) {
      content = content.replace(/(<Footer[^>]*\/>)\s*$/, '$1\n    </>');
      modified = true;
    }

    // Fix wrong export names
    const exportMatch = content.match(/export default (\w+)\s*$/);
    if (exportMatch) {
      const functionMatch = content.match(/export default function (\w+)\(/);
      if (functionMatch && exportMatch[1] !== functionMatch[1]) {
        content = content.replace(/export default \w+\s*$/, '');
        modified = true;
      }
    }

    // Fix missing closing div tags
    if (content.includes('<div className="min-h-screen') && !content.includes('</div>')) {
      content = content.replace(/(<Footer[^>]*\/>)\s*<\/>\s*\)\s*$/, '$1\n      </div>\n    </>');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = '/workspace/app';
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);