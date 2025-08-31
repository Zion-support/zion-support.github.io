const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Function to extract all links from the App.tsx routing
function extractRoutesFromApp() {
  const appPath = path.join(__dirname, 'src', 'App.tsx');
  const appContent = fs.readFileSync(appPath, 'utf8');
  
  // Extract route paths using regex
  const routeRegex = /<Route\s+path="([^"]+)"/g;
  const routes = [];
  let match;
  
  while ((match = routeRegex.exec(appContent)) !== null) {
    routes.push(match[1]);
  }
  
  return routes;
}

// Function to extract all links from navigation components
function extractLinksFromNavigation() {
  const navigationPaths = [
    path.join(__dirname, 'src', 'components', 'header', 'MainNavigation.tsx'),
    path.join(__dirname, 'src', 'components', 'layout', 'AppFooter.tsx')
  ];
  
  const links = [];
  
  navigationPaths.forEach(navPath => {
    if (fs.existsSync(navPath)) {
      const navContent = fs.readFileSync(navPath, 'utf8');
      
      // Extract Link to="" and href="" attributes
      const linkRegex = /(?:to|href)="([^"]+)"/g;
      let match;
      
      while ((match = linkRegex.exec(navContent)) !== null) {
        const link = match[1];
        if (link.startsWith('/') && !link.includes('http')) {
          links.push(link);
        }
      }
    }
  });
  
  return links;
}

// Function to check if page files exist
function checkPageFiles() {
  const routes = extractRoutesFromApp();
  const navLinks = extractLinksFromNavigation();
  const allLinks = [...new Set([...routes, ...navLinks])];
  
  const results = {
    total: allLinks.length,
    existing: [],
    missing: [],
    errors: []
  };
  
  allLinks.forEach(route => {
    try {
      // Skip dynamic routes with parameters
      if (route.includes(':')) {
        return;
      }
      
      // Convert route to potential file paths
      const possiblePaths = [
        path.join(__dirname, 'src', 'pages', route.slice(1) + '.tsx'),
        path.join(__dirname, 'src', 'pages', route.slice(1) + '.jsx'),
        path.join(__dirname, 'src', 'pages', route.slice(1), 'index.tsx'),
        path.join(__dirname, 'src', 'pages', route.slice(1), 'index.jsx'),
        path.join(__dirname, 'pages', route.slice(1) + '.tsx'),
        path.join(__dirname, 'pages', route.slice(1) + '.jsx')
      ];
      
      // Check for services subdirectory
      if (route.startsWith('/services/')) {
        const serviceName = route.replace('/services/', '');
        possiblePaths.push(
          path.join(__dirname, 'src', 'pages', 'services', serviceName + '.tsx'),
          path.join(__dirname, 'src', 'pages', 'services', serviceName + '.jsx')
        );
      }
      
      // Check for solutions subdirectory
      if (route.startsWith('/solutions/')) {
        const solutionName = route.replace('/solutions/', '');
        possiblePaths.push(
          path.join(__dirname, 'src', 'pages', 'solutions', solutionName + '.tsx'),
          path.join(__dirname, 'src', 'pages', 'solutions', solutionName + '.jsx')
        );
      }
      
      const exists = possiblePaths.some(filePath => fs.existsSync(filePath));
      
      if (exists) {
        results.existing.push(route);
      } else {
        results.missing.push(route);
      }
      
    } catch (error) {
      results.errors.push({ route, error: error.message });
    }
  });
  
  return results;
}

// Function to generate missing pages
function generateMissingPages(missingRoutes) {
  missingRoutes.forEach(route => {
    try {
      let pageContent = '';
      let fileName = '';
      let directory = '';
      
      if (route.startsWith('/services/')) {
        const serviceName = route.replace('/services/', '');
        fileName = serviceName + '.tsx';
        directory = path.join(__dirname, 'src', 'pages', 'services');
        
        pageContent = `import React from 'react';
import { SEO } from '../../components/SEO';

export default function ${toPascalCase(serviceName)}() {
  return (
    <>
      <SEO 
        title="${toTitleCase(serviceName)} | Zion Tech Group"
        description="Advanced ${serviceName.replace(/-/g, ' ')} solutions by Zion Tech Group. Transform your business with cutting-edge technology."
        keywords="${serviceName.replace(/-/g, ', ')}, technology, innovation, AI, automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ${toTitleCase(serviceName)}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with our cutting-edge ${serviceName.replace(/-/g, ' ')} solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Advanced Technology</h3>
                <p className="text-gray-300">
                  Leverage cutting-edge technology to drive innovation and efficiency in your business processes.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Scalable Solutions</h3>
                <p className="text-gray-300">
                  Our solutions grow with your business, ensuring long-term value and adaptability.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Expert Support</h3>
                <p className="text-gray-300">
                  Get dedicated support from our team of experts throughout your journey.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center bg-slate-800/30 p-8 rounded-xl border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6">
                Contact us today to learn how our ${serviceName.replace(/-/g, ' ')} solutions can transform your business.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`;
      } else if (route.startsWith('/solutions/')) {
        const solutionName = route.replace('/solutions/', '');
        fileName = solutionName + '.tsx';
        directory = path.join(__dirname, 'src', 'pages', 'solutions');
        
        pageContent = `import React from 'react';
import { SEO } from '../../components/SEO';

export default function ${toPascalCase(solutionName)}() {
  return (
    <>
      <SEO 
        title="${toTitleCase(solutionName)} Solutions | Zion Tech Group"
        description="Comprehensive ${solutionName.replace(/-/g, ' ')} solutions by Zion Tech Group. Industry-specific technology solutions."
        keywords="${solutionName.replace(/-/g, ', ')}, solutions, technology, innovation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ${toTitleCase(solutionName)} Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Industry-specific technology solutions designed for ${solutionName.replace(/-/g, ' ')} excellence
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Custom Development</h3>
                <p className="text-gray-300">
                  Tailored solutions built specifically for your ${solutionName.replace(/-/g, ' ')} needs.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Integration Services</h3>
                <p className="text-gray-300">
                  Seamless integration with your existing systems and workflows.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Ongoing Support</h3>
                <p className="text-gray-300">
                  Continuous support and maintenance for optimal performance.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-slate-800/30 p-8 rounded-xl border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Transform Your ${toTitleCase(solutionName)}</h2>
              <p className="text-gray-300 mb-6">
                Discover how our solutions can revolutionize your ${solutionName.replace(/-/g, ' ')} operations.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`;
      } else {
        // Regular pages
        const pageName = route.slice(1) || 'home';
        fileName = pageName + '.tsx';
        directory = path.join(__dirname, 'src', 'pages');
        
        pageContent = `import React from 'react';
import { SEO } from '../components/SEO';

export default function ${toPascalCase(pageName)}() {
  return (
    <>
      <SEO 
        title="${toTitleCase(pageName)} | Zion Tech Group"
        description="${toTitleCase(pageName)} page for Zion Tech Group. Innovation and technology solutions."
        keywords="${pageName}, technology, innovation, Zion Tech Group"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ${toTitleCase(pageName)}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Welcome to our ${pageName} page. Discover innovation and technology solutions.
              </p>
            </div>

            <div className="bg-slate-800/30 p-8 rounded-xl border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                This page is under development. Check back soon for updates.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`;
      }
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
      }
      
      // Write the file
      const filePath = path.join(directory, fileName);
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, pageContent);
        console.log(`Created: ${filePath}`);
      }
      
    } catch (error) {
      console.error(`Error creating page for ${route}:`, error.message);
    }
  });
}

// Helper functions
function toPascalCase(str) {
  return str.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function toTitleCase(str) {
  return str.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Main execution
async function main() {
  console.log('🔍 Analyzing website links and pages...\n');
  
  const results = checkPageFiles();
  
  console.log('📊 Analysis Results:');
  console.log(`Total routes analyzed: ${results.total}`);
  console.log(`Existing pages: ${results.existing.length}`);
  console.log(`Missing pages: ${results.missing.length}`);
  
  if (results.missing.length > 0) {
    console.log('\n❌ Missing pages:');
    results.missing.forEach(route => {
      console.log(`  - ${route}`);
    });
    
    console.log('\n🛠️ Creating missing pages...');
    generateMissingPages(results.missing);
    console.log(`✅ Created ${results.missing.length} missing pages.`);
  } else {
    console.log('\n✅ All pages exist!');
  }
  
  if (results.errors.length > 0) {
    console.log('\n⚠️ Errors encountered:');
    results.errors.forEach(error => {
      console.log(`  - ${error.route}: ${error.error}`);
    });
  }
  
  // Create a comprehensive report
  const report = {
    timestamp: new Date().toISOString(),
    analysis: results,
    recommendations: []
  };
  
  if (results.missing.length > 0) {
    report.recommendations.push('Review and update newly created pages with proper content');
    report.recommendations.push('Add proper navigation links to new pages');
    report.recommendations.push('Test all new pages for functionality');
  }
  
  fs.writeFileSync('link-analysis-report.json', JSON.stringify(report, null, 2));
  console.log('\n📋 Report saved to link-analysis-report.json');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { extractRoutesFromApp, extractLinksFromNavigation, checkPageFiles, generateMissingPages };