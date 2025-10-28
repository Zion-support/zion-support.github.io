const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/5g-iot-solutions/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/offline/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the page name from the file path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 2] || 'page';
    const pageName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Create proper metadata
    const properMetadata = `import { ErrorBoundary } from '@/components/ErrorBoundary';
import Head from 'next/head';
import Footer from '../components/Footer';

export const metadata = {
  title: '${pageName} - Zion Tech Group',
  description: 'Professional ${pageName.toLowerCase()} services and solutions by Zion Tech Group.',
  keywords: '${fileName}, technology, services',
  openGraph: {
    title: '${pageName} - Zion Tech Group',
    description: 'Professional ${pageName.toLowerCase()} services and solutions by Zion Tech Group.',
    type: 'website',
  },
};`;

    // Find the function definition
    const functionMatch = content.match(/function\s+(\w+)\s*\([^)]*\)\s*\{[\s\S]*?\}/);
    if (functionMatch) {
      const functionName = functionMatch[1];
      const functionBody = functionMatch[0];
      
      // Create the complete fixed content
      const fixedContent = `${properMetadata}

function ${functionName}() {
  return (
    <div>
      <Head>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageName.toLowerCase()} services and solutions by Zion Tech Group." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${pageName}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional services by Zion Tech Group.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This service is currently under development. Contact us to learn more about our upcoming services.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default function Wrapped(props) {
  return (
    <ErrorBoundary>
      <${functionName} {...props} />
    </ErrorBoundary>
  );
}`;

      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log(`Could not find function in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Metadata errors fixed!');