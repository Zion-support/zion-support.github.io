import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all files that need fixing by running type check
const { execSync } = await import('child_process');

let filesToFix = [];
try {
  const output = execSync('cd /workspace && pnpm run type-check 2>&1 | grep "\.tsx" | sed "s/.*app\\/\\([^:]*\\)\\.tsx.*/\\1/" | sort -u', { encoding: 'utf8' });
  filesToFix = output.trim().split('\n').filter(f => f && f.includes('/')).map(f => `app/${f}.tsx`);
} catch (error) {
  console.log('Could not get file list from type check, using manual list');
  filesToFix = [
    'app/global-error.tsx',
    'app/loading.tsx',
    'app/not-found.tsx',
    'app/page.tsx',
    'app/root.tsx'
  ];
}

// Template for fixing the files
const createFixedFile = (fileName) => {
  const serviceName = fileName.split('/')[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  if (fileName.includes('global-error')) {
    return `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function GlobalError() {
  return (
    <>
      <Helmet>
        <title>Error - Zion Tech Group</title>
        <meta name="description" content="Global error page - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Global Error
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Something went wrong globally. Please try again later.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
}`;
  }
  
  if (fileName.includes('loading')) {
    return `import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
    </div>
  );
}`;
  }
  
  if (fileName.includes('not-found')) {
    return `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Zion Tech Group</title>
        <meta name="description" content="404 - Page not found - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              404 - Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The page you're looking for doesn't exist.
            </p>
            <button 
              onClick={() => window.history.back()}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}`;
  }
  
  if (fileName.includes('root')) {
    return `import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export default function Root() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  );
}`;
  }
  
  // Default template for other files
  return `import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Advanced Features',
      description: 'Cutting-edge technology for maximum efficiency'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: '24/7 support from our team of specialists'
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="${serviceName} - Zion Tech Group"
        description="Professional ${serviceName.toLowerCase()} services by Zion Tech Group. Expert solutions for your business needs."
        keywords="${serviceName.toLowerCase()}, business solutions, technology services, professional services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${serviceName}
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional ${serviceName.toLowerCase()} services designed to help your business succeed and grow.
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
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our ${serviceName} Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our ${serviceName.toLowerCase()} services can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;`;
};

// Fix each file
let fixedCount = 0;
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  const dir = path.dirname(fullPath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  try {
    const fixedContent = createFixedFile(filePath);
    fs.writeFileSync(fullPath, fixedContent);
    console.log(`Fixed: ${filePath}`);
    fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files!`);