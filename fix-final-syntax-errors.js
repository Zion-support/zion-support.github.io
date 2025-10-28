#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

async function fixFinalSyntaxErrors() {
  try {
    // Get all page files that might have syntax errors
    const pageFiles = await glob('app/**/page.tsx');
    
    console.log(`Found ${pageFiles.length} page files to check`);

    for (const file of pageFiles) {
      try {
        let content = readFileSync(file, 'utf8');
        let modified = false;

        // Fix missing function declarations for pages that have return statements without function
        if (content.includes('return (') && !content.includes('function ') && !content.includes('=>')) {
          // Extract the page name from the file path
          const pathParts = file.split('/');
          const pageName = pathParts[pathParts.length - 2] || 'Page';
          const functionName = pageName.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join('') + 'Page';

          // Find where the return statement starts
          const returnIndex = content.indexOf('return (');
          if (returnIndex > 0) {
            // Find the line before return
            const beforeReturn = content.substring(0, returnIndex);
            const lines = beforeReturn.split('\n');
            const lastLine = lines[lines.length - 1].trim();
            
            // If the last line before return is just metadata closing, add function declaration
            if (lastLine === '};' || lastLine === '};') {
              const newContent = beforeReturn + `\n\nexport default function ${functionName}() {\n  ` + content.substring(returnIndex);
              content = newContent;
              modified = true;
            }
          }
        }

        // Fix missing opening tags for JSX
        if (content.includes('<Footer />') && !content.includes('<>') && !content.includes('<ErrorBoundary>')) {
          // Find the return statement and add opening tag
          const returnMatch = content.match(/(\s+return\s*\(\s*)(<[^>]+>)/);
          if (returnMatch) {
            content = content.replace(returnMatch[0], returnMatch[1] + '<>\n        ' + returnMatch[2]);
            modified = true;
          }
        }

        // Fix missing closing tags
        if (content.includes('<Footer />') && !content.includes('</>') && !content.includes('</ErrorBoundary>')) {
          content = content.replace(/(<Footer \/>\s*\);\s*)(\})/g, '$1    </>\n  );\n$2');
          modified = true;
        }

        // Fix function ending syntax (remove extra semicolon)
        if (content.includes(');\n};')) {
          content = content.replace(/\);\n\};/g, ');\n}');
          modified = true;
        }

        // Fix missing imports for common components
        if (content.includes('<Navigation') && !content.includes("import Navigation")) {
          const importLine = "import Navigation from '../components/Navigation';\n";
          content = importLine + content;
          modified = true;
        }

        if (content.includes('<Footer') && !content.includes("import Footer")) {
          const importLine = "import Footer from '../components/Footer';\n";
          if (content.includes("import Navigation")) {
            content = content.replace("import Navigation from '../components/Navigation';", 
              "import Navigation from '../components/Navigation';\nimport Footer from '../components/Footer';");
          } else {
            content = importLine + content;
          }
          modified = true;
        }

        if (content.includes('<ErrorBoundary') && !content.includes("import ErrorBoundary")) {
          const importLine = "import ErrorBoundary from '../../components/GlobalErrorBoundary';\n";
          if (content.includes("import Footer")) {
            content = content.replace("import Footer from '../components/Footer';", 
              "import Footer from '../components/Footer';\nimport ErrorBoundary from '../../components/GlobalErrorBoundary';");
          } else {
            content = importLine + content;
          }
          modified = true;
        }

        // Fix import paths for micro-saas-services
        if (file.includes('micro-saas-services/')) {
          content = content.replace(/import Navigation from '\.\.\/components\/Navigation';/g, 
            "import Navigation from '../../components/Navigation';");
          content = content.replace(/import Footer from '\.\.\/components\/Footer';/g, 
            "import Footer from '../../components/Footer';");
          content = content.replace(/import ErrorBoundary from '\.\.\/\.\.\/components\/GlobalErrorBoundary';/g, 
            "import ErrorBoundary from '../../../components/GlobalErrorBoundary';");
          modified = true;
        }

        // Fix import paths for it-services
        if (file.includes('it-services/')) {
          content = content.replace(/import Navigation from '\.\.\/components\/Navigation';/g, 
            "import Navigation from '../../components/Navigation';");
          content = content.replace(/import Footer from '\.\.\/components\/Footer';/g, 
            "import Footer from '../../components/Footer';");
          content = content.replace(/import ErrorBoundary from '\.\.\/\.\.\/components\/GlobalErrorBoundary';/g, 
            "import ErrorBoundary from '../../../components/GlobalErrorBoundary';");
          modified = true;
        }

        if (modified) {
          writeFileSync(file, content);
          console.log(`✓ Fixed syntax errors in ${file}`);
        }
      } catch (error) {
        console.error(`Error fixing ${file}:`, error.message);
      }
    }

    console.log('Final syntax error fixes completed!');
  } catch (error) {
    console.error('Error fixing syntax errors:', error.message);
    process.exit(1);
  }
}

fixFinalSyntaxErrors();