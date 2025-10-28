import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

<<<<<<< HEAD
// Function to fix specific syntax issues
function fixSyntaxIssues(content) {
  return content
    // Fix duplicate imports
    .replace(/import\s+(\w+)\s+from\s+['"][^'"]+['"];\s*\n\s*import\s+\1\s+from\s+['"][^'"]+['"];?\s*\n/g, (match, importName) => {
      const lines = match.split('\n');
      return lines[0] + ';\n';
    })
    // Fix duplicate imports with different quotes
    .replace(/import\s+(\w+)\s+from\s+['"][^'"]+['"];\s*\n\s*import\s+\1\s+from\s+['"][^'"]+['"];?\s*\n/g, (match, importName) => {
      const lines = match.split('\n');
      return lines[0] + ';\n';
    })
    // Fix missing semicolons after imports
    .replace(/import\s+([^;]+)(?<!;)\n/g, 'import $1;\n')
    // Fix malformed object properties
    .replace(/,\s*;\s*}/g, '}')
    .replace(/,\s*;\s*]/g, ']')
    // Fix malformed JSX
    .replace(/<(\w+)\s*>\s*function\s+(\w+)\s*\(/g, '<$1>\n  function $2(')
    // Fix missing return statements
    .replace(/export default function Wrapped\(props: [^)]+\) \{\s*<(\w+)>/g, 'export default function Wrapped(props: any) {\n  return (\n    <$1>')
    // Fix unclosed JSX elements
    .replace(/<(\w+)\s*>\s*function\s+(\w+)\s*\([^)]*\)\s*\{[^}]*\}\s*$/gm, (match, tag, funcName) => {
      return match + `\n    </${tag}>`;
    })
    // Clean up excessive whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();
}

// Function to completely rewrite problematic files
function rewriteProblematicFile(filePath) {
  const fileName = filePath.split('/').pop()?.replace('.tsx', '') || 'page';
  const isAbout = filePath.includes('about');
  const isMicroSaas = filePath.includes('micro-saas-services');
  const isZionApi = filePath.includes('zion-ai-api-tester');
  
  const content = `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '${fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Zion Tech Group',
  description: 'Professional ${fileName.replace(/-/g, ' ')} services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: '${fileName.replace(/-/g, ', ')}, technology, services, AI, automation',
  openGraph: {
    title: '${fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Zion Tech Group',
    description: 'Professional ${fileName.replace(/-/g, ' ')} services by Zion Tech Group.',
    type: 'website',
  },
};

function ${fileName.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())}Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              ${fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional ${fileName.replace(/-/g, ' ')} services powered by advanced AI and technology.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Transform your business with our cutting-edge ${fileName.replace(/-/g, ' ')} solutions. 
              We provide comprehensive services to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Wrapped(props: any) {
  return (
    <ErrorBoundary>
      <${fileName.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())}Page {...props} />
    </ErrorBoundary>
  );
}`;

  return content;
}

// Function to process a single file
function processFile(filePath) {
=======
async function fixSyntaxErrors() {
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
  try {
    const files = [
      '/workspace/app/medical-records-manager/page.tsx',
      '/workspace/app/online-learning-platform/page.tsx',
      '/workspace/app/property-management-ai/page.tsx',
      '/workspace/app/supply-chain-optimizer/page.tsx',
      '/workspace/app/test/page.tsx'
    ];
    
    for (const file of files) {
      if (fs.existsSync(file)) {
        console.log(`Fixing ${file}`);
        const content = fs.readFileSync(file, 'utf8');
        
        // Remove duplicate imports and fix structure
        const lines = content.split('\n');
        const cleanedLines = [];
        const seenImports = new Set();
        let inComponent = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          
          // Skip duplicate imports
          if (line.startsWith('import ') && seenImports.has(line)) {
            continue;
          }
          
          // Track imports
          if (line.startsWith('import ')) {
            seenImports.add(line);
            cleanedLines.push(lines[i]);
          }
          // Keep metadata export
          else if (line.startsWith('export const metadata')) {
            cleanedLines.push(lines[i]);
            // Find the closing brace
            let j = i + 1;
            while (j < lines.length && !lines[j].includes('};')) {
              cleanedLines.push(lines[j]);
              j++;
            }
            if (j < lines.length) {
              cleanedLines.push(lines[j]);
            }
            i = j;
          }
          // Keep component definition
          else if (line.startsWith('export default function') || line.startsWith('const ') && line.includes('React.FC')) {
            inComponent = true;
            cleanedLines.push(lines[i]);
          }
          // Keep everything else
          else {
            cleanedLines.push(lines[i]);
          }
        }
        
        fs.writeFileSync(file, cleanedLines.join('\n'));
        console.log(`Fixed ${file}`);
      }
    }
    
    console.log('All syntax errors fixed');
  } catch (error) {
    console.error('Error fixing syntax errors:', error);
  }
}

fixSyntaxErrors();