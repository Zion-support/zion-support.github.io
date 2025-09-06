#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Critical files that need to be fixed for the build to work
const criticalFiles = [
  'src/components/Footer.tsx',
  'src/components/Header.tsx',
  'src/components/layout/Sidebar.tsx',
  'src/pages/Home.tsx',
  'src/pages/About.tsx',
  'src/pages/Contact.tsx',
  'src/pages/Services.tsx',
  'src/pages/Pricing.tsx',
  'src/index.css'
];

// Function to resolve conflicts by taking the newer version (after =======)
function resolveConflicts(content) {
  const lines = content.split('\n');
  const result = [];
  let inConflict = false;
  let skipUntilEquals = false;
  
  for (const line of lines) {
    if (line.startsWith('<<<<<<< HEAD')) {
      inConflict = true;
      skipUntilEquals = true;
      continue;
    }
    
    if (line.startsWith('=======') && inConflict) {
      skipUntilEquals = false;
      continue;
    }
    
    if (line.startsWith('>>>>>>> ') && inConflict) {
      inConflict = false;
      skipUntilEquals = false;
      continue;
    }
    
    if (!skipUntilEquals) {
      result.push(line);
    }
  }
  
  return result.join('\n');
}

// Function to create a basic component if it doesn't exist or is broken
function createBasicComponent(filePath, componentName) {
  const basicComponents = {
    'Footer.tsx': `import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}`,
    'Header.tsx': `import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Zion Tech Group
          </Link>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}`,
    'Sidebar.tsx': `import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 border-r min-h-screen">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-100">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/services" className="block px-3 py-2 rounded hover:bg-gray-100">
              Services
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="block px-3 py-2 rounded hover:bg-gray-100">
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}`,
    'Home.tsx': `import React from 'react';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600">
          Leading technology solutions provider
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">AI Solutions</h3>
          <p className="text-gray-600">Advanced AI and machine learning services</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
          <p className="text-gray-600">Comprehensive security solutions</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Cloud Services</h3>
          <p className="text-gray-600">Scalable cloud infrastructure</p>
        </div>
      </div>
    </div>
  );
}`,
    'About.tsx': `import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-4">
          Zion Tech Group is a leading technology solutions provider specializing in 
          AI, cybersecurity, cloud infrastructure, and digital transformation services.
        </p>
        <p className="text-gray-600">
          Founded with a vision to empower businesses through cutting-edge technology,
          we deliver innovative solutions that drive growth and efficiency.
        </p>
      </div>
    </div>
  );
}`,
    'Contact.tsx': `import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600">kleber@ziontechgroup.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-600">+1-302-464-0950</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Address</h3>
            <p className="text-gray-600">364 E Main St STE 1008<br />Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}`,
    'Services.tsx': `import React from 'react';

export default function ServicesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
          <p className="text-gray-600">Custom AI solutions, machine learning models, and intelligent automation.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
          <p className="text-gray-600">Comprehensive security audits, threat detection, and compliance solutions.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
          <p className="text-gray-600">Scalable cloud solutions, migration services, and infrastructure management.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
          <p className="text-gray-600">End-to-end digital transformation consulting and implementation.</p>
        </div>
      </div>
    </div>
  );
}`,
    'Pricing.tsx': `import React from 'react';

export default function PricingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border-2 border-transparent">
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <div className="text-3xl font-bold text-blue-600 mb-4">$999<span className="text-sm text-gray-500">/month</span></div>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Basic AI consulting</li>
            <li>✓ Security assessment</li>
            <li>✓ Email support</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">
          <h3 className="text-xl font-semibold mb-2">Professional</h3>
          <div className="text-3xl font-bold text-blue-600 mb-4">$2,999<span className="text-sm text-gray-500">/month</span></div>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Advanced AI solutions</li>
            <li>✓ Comprehensive security</li>
            <li>✓ Cloud infrastructure</li>
            <li>✓ Priority support</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-2 border-transparent">
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <div className="text-3xl font-bold text-blue-600 mb-4">Custom</div>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Full digital transformation</li>
            <li>✓ Custom AI development</li>
            <li>✓ Dedicated support team</li>
            <li>✓ SLA guarantees</li>
          </ul>
        </div>
      </div>
    </div>
  );
}`
  };

  return basicComponents[componentName] || `import React from 'react';

export default function ${componentName.replace('.tsx', '')}() {
  return (
    <div>
      <h1>${componentName.replace('.tsx', '')} Component</h1>
    </div>
  );
}`;
}

// Main function
function fixCriticalFiles() {
  console.log('🔧 Fixing critical files for build...');
  
  let fixed = 0;
  let created = 0;
  
  for (const filePath of criticalFiles) {
    const fullPath = path.join('/workspace', filePath);
    const componentName = path.basename(filePath);
    
    try {
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        
        if (content.includes('<<<<<<< HEAD')) {
          const cleanedContent = resolveConflicts(content);
          fs.writeFileSync(fullPath, cleanedContent, 'utf8');
          console.log(`✅ Fixed conflicts: ${filePath}`);
          fixed++;
        }
      } else {
        // Create the directory if it doesn't exist
        const dir = path.dirname(fullPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        
        // Create basic component
        const basicContent = createBasicComponent(filePath, componentName);
        fs.writeFileSync(fullPath, basicContent, 'utf8');
        console.log(`📝 Created: ${filePath}`);
        created++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }
  
  // Fix index.css if it has conflicts
  const cssPath = '/workspace/src/index.css';
  if (fs.existsSync(cssPath)) {
    try {
      const content = fs.readFileSync(cssPath, 'utf8');
      if (content.includes('<<<<<<< HEAD')) {
        const basicCSS = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}`;
        fs.writeFileSync(cssPath, basicCSS, 'utf8');
        console.log('✅ Fixed CSS conflicts');
        fixed++;
      }
    } catch (error) {
      console.error('❌ Error fixing CSS:', error.message);
    }
  }
  
  console.log(`\n🎉 Complete!`);
  console.log(`   ✅ Files fixed: ${fixed}`);
  console.log(`   📝 Files created: ${created}`);
}

fixCriticalFiles();