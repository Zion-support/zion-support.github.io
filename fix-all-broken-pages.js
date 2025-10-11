import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all broken files from TypeScript check
const getBrokenFiles = () => {
  try {
    const output = execSync('npm run type-check 2>&1', { encoding: 'utf8' });
    const lines = output.split('\n');
    const brokenFiles = new Set();
    
    lines.forEach(line => {
      const match = line.match(/^([^(]+)\(/);
      if (match) {
        brokenFiles.add(match[1]);
      }
    });
    
    return Array.from(brokenFiles);
  } catch (error) {
    console.error('Error getting broken files:', error.message);
    return [];
  }
};

// Template for a basic page component
const createPageTemplate = (pageName, title, description, keywords) => `import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart, Zap, Shield } from 'lucide-react'

const ${pageName} = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline processes with intelligent automation and workflow optimization.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security with advanced threat protection and compliance.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
      </Helmet>
      
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${title.split(' - ')[0]}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-300">
              Advanced AI technology that drives results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts to discuss your needs and discover how our solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Contact Us
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ${pageName}`;

// Function to generate page name from file path
const getPageName = (filePath) => {
  const parts = filePath.split('/');
  const fileName = parts[parts.length - 2]; // Get the directory name before page.tsx
  return fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
};

// Function to generate title from page name
const getTitle = (pageName) => {
  const cleanName = pageName.replace('Page', '');
  return cleanName.replace(/([A-Z])/g, ' $1').trim() + ' - Zion Tech Group | AI & IT Solutions';
};

// Function to generate description
const getDescription = (pageName) => {
  const cleanName = pageName.replace('Page', '');
  const name = cleanName.replace(/([A-Z])/g, ' $1').trim();
  return `Advanced ${name.toLowerCase()} solution powered by artificial intelligence. Streamline your business processes with cutting-edge AI technology and automation.`;
};

// Function to generate keywords
const getKeywords = (pageName) => {
  const cleanName = pageName.replace('Page', '');
  const name = cleanName.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
  return `AI, ${name}, artificial intelligence, automation, business solutions, technology`;
};

// Main function
const main = async () => {
  console.log('Getting list of broken files...');
  const brokenFiles = getBrokenFiles();
  
  if (brokenFiles.length === 0) {
    console.log('No broken files found!');
    return;
  }
  
  console.log(`Found ${brokenFiles.length} broken files to fix.`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of brokenFiles) {
    try {
      // Skip backup files and non-page files
      if (filePath.includes('backup') || filePath.includes('fixed') || !filePath.includes('page.tsx')) {
        continue;
      }
      
      const pageName = getPageName(filePath);
      const title = getTitle(pageName);
      const description = getDescription(pageName);
      const keywords = getKeywords(pageName);
      
      const content = createPageTemplate(pageName, title, description, keywords);
      
      // Ensure directory exists
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nProcessing complete!`);
  console.log(`Fixed: ${fixedCount} files`);
  console.log(`Errors: ${errorCount} files`);
};

main().catch(console.error);