import fs from 'fs';
import path from 'path';

// List of files to fix
const filesToFix = [
  'app/5g-implementation/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx'
];

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the service name from the path
    const pathParts = filePath.split('/');
    const serviceName = pathParts[pathParts.length - 2] || 'Service';
    const title = serviceName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // Fix the imports and metadata
    const fixedContent = content
      .replace(/import { ErrorBoundary } from '@\/components\/ErrorBoundary'\n\nexport const metadata = {[^}]+};\n;\n'use client';\n\nimport Head from 'next\/head'\n\nexport const metadata = {[^}]+};\n\nimport Footer from '\.\.\/components\/Footer'\n\nexport const metadata = {[^}]+};\n\n/g, 
        `import { ErrorBoundary } from '@/components/ErrorBoundary'
import Head from 'next/head'
import Footer from '../components/Footer'

export const metadata = {
  title: '${title} - Zion Tech Group',
  description: 'Professional ${serviceName} services and solutions by Zion Tech Group.',
  keywords: '${serviceName}, technology, services, Zion Tech Group',
  openGraph: {
    title: '${title} - Zion Tech Group',
    description: 'Professional ${serviceName} services and solutions by Zion Tech Group.',
    type: 'website',
  },
};
`)
      .replace(/export default function Wrapped\n\(props\) {\n  return \(\n    <ErrorBoundary>\n      <\n \{\.\.\.props\} \/>\n    <\/ErrorBoundary>\n  \);\n\}/g, 
        `export default function Wrapped(props: any) {
  return (
    <ErrorBoundary>
      <Page {...props} />
    </ErrorBoundary>
  );
}`);
    
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('All files fixed!');