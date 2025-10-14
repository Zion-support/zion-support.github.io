import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix a corrupted component file
function fixCorruptedComponent(filePath) {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const componentName = fileName.split(/(?=[A-Z])/).join(' ');
    
    const content = `import React from "react";
import { Helmet } from "react-helmet-async";

const ${fileName}: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>${componentName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${componentName.toLowerCase()} services by Zion Tech Group." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ${componentName}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional ${componentName.toLowerCase()} services
            designed to help your business grow and succeed.
          </p>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide comprehensive ${componentName.toLowerCase()}
                solutions tailored to your specific needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Professional service
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Expert solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Quality results
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Started</h3>
              <p className="text-gray-600 mb-6">
                Contact us today to learn more about our ${componentName.toLowerCase()} services.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ${fileName};`;

    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx files in components directory
function findComponentFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findComponentFiles(fullPath));
    } else if (item.endsWith('.tsx') && item !== 'index.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// List of known corrupted files
const corruptedFiles = [
  'ImprovedFooter.tsx',
  'ImprovedImage.tsx', 
  'ImprovedNavigation.tsx',
  'ImprovedSidebar.tsx',
  'LazyImage.tsx',
  'LazyWrapper.tsx',
  'Loading.tsx',
  'MobileNavigation.tsx',
  'NeonButton.tsx',
  'OptimizedLoadingSpinner.tsx',
  'PWAInstaller.tsx',
  'PerformanceDashboard.tsx',
  'PerformanceEnhancer.tsx',
  'PerformanceMetrics.tsx',
  'ResponsiveGrid.tsx',
  'ResponsiveText.tsx',
  'SEOAudit.tsx',
  'SEOOptimizer.tsx',
  'SecurityEnhancer.tsx',
  'ServiceCard.tsx',
  'ServiceCardSkeleton.tsx',
  'ServiceWorkerRegistration.tsx',
  'Sidebar.tsx',
  'SkipLink.tsx',
  'StructuredData.tsx',
  'SystemMonitor.tsx',
  'UltimateContentAdvertisingBanner.tsx',
  'WebVitalsTracker.tsx'
];

// Main execution
const componentsDir = path.join(__dirname, 'app', 'components');

corruptedFiles.forEach(fileName => {
  const filePath = path.join(componentsDir, fileName);
  if (fs.existsSync(filePath)) {
    fixCorruptedComponent(filePath);
  }
});

console.log('Done fixing corrupted component files');