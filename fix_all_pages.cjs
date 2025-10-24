const fs = require('fs');
const path = require('path');

// Template for generic pages
const createPage = (title, description, icon = 'Layers') => `import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ${icon} } from 'lucide-react';

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ${description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <${icon} className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <${icon} className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <${icon} className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with ${title.toLowerCase()}?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// Get all page.tsx files
const getAllPageFiles = () => {
  const pageFiles = [];
  
  const scanDirectory = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item === 'page.tsx') {
        pageFiles.push(fullPath);
      }
    });
  };
  
  scanDirectory('app');
  return pageFiles;
};

// Icon mapping for different page types
const getIconForPage = (filePath) => {
  const pathLower = filePath.toLowerCase();
  
  if (pathLower.includes('ai-')) return 'Brain';
  if (pathLower.includes('mobile')) return 'Smartphone';
  if (pathLower.includes('database')) return 'Database';
  if (pathLower.includes('analytics')) return 'BarChart3';
  if (pathLower.includes('iot')) return 'Wifi';
  if (pathLower.includes('health')) return 'Heart';
  if (pathLower.includes('press')) return 'Newspaper';
  if (pathLower.includes('gdpr')) return 'Shield';
  if (pathLower.includes('training')) return 'GraduationCap';
  if (pathLower.includes('ad-management')) return 'Target';
  if (pathLower.includes('landing-page')) return 'Layout';
  if (pathLower.includes('website-analytics')) return 'TrendingUp';
  if (pathLower.includes('email')) return 'Mail';
  if (pathLower.includes('calendar')) return 'Calendar';
  if (pathLower.includes('transportation')) return 'Truck';
  if (pathLower.includes('workflow')) return 'Workflow';
  if (pathLower.includes('content-management')) return 'FileText';
  if (pathLower.includes('sentiment')) return 'Smile';
  if (pathLower.includes('telepathic')) return 'Zap';
  if (pathLower.includes('specialized')) return 'Settings';
  if (pathLower.includes('it-training')) return 'BookOpen';
  
  return 'Layers';
};

// Generate title and description from file path
const generatePageInfo = (filePath) => {
  const pathParts = filePath.split('/');
  const pageName = pathParts[pathParts.length - 2]; // Get the directory name
  
  // Convert kebab-case to Title Case
  const title = pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const description = `Professional ${title.toLowerCase()} solutions for modern businesses.`;
  
  return { title, description };
};

// Fix all page files
const pageFiles = getAllPageFiles();
let fixedCount = 0;

pageFiles.forEach(filePath => {
  try {
    const { title, description } = generatePageInfo(filePath);
    const icon = getIconForPage(filePath);
    const content = createPage(title, description, icon);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} page files!`);
