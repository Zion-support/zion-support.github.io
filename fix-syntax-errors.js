import fs from 'fs';
import { glob } from 'glob';

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
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has serious syntax issues
    if (content.includes('function') && content.includes('return') && 
        (content.includes('export default function Wrapped') && content.includes('<') && !content.includes('</'))) {
      console.log(`Rewriting problematic file: ${filePath}`);
      
      const newContent = rewriteProblematicFile(filePath);
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✓ Rewrote: ${filePath}`);
      return true;
    }
    
    // Try to fix syntax issues
    const fixed = fixSyntaxIssues(content);
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✓ Fixed syntax issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('Starting syntax error fixes...');
  
  // Find all TypeScript and TSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let totalFiles = 0;
  let processedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    totalFiles += files.length;
    
    for (const file of files) {
      if (processFile(file)) {
        processedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${processedFiles} files with syntax issues out of ${totalFiles} total files.`);
  console.log('Syntax error fixes complete!');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { fixSyntaxIssues, rewriteProblematicFile, processFile };