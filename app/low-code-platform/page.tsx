import React from 'react';
import SEOHead from '../components/SEOHead';

const LowCodePlatformPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Low-Code Platform - Zion Tech Group"
        description="Build applications faster with our low-code platform. Visual development, drag-and-drop interface, and rapid application development capabilities."
        keywords="low-code platform, visual development, rapid application development, drag-and-drop, no-code, application builder"
        canonicalUrl="https://ziontechgroup.com/low-code-platform"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Low-Code Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build applications faster with our visual low-code platform. Drag-and-drop interface, pre-built components, and rapid development capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-400">Visual Development</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Drag-and-drop interface
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Pre-built components
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Visual workflow designer
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Real-time preview
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  One-click deployment
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-teal-400">Platform Features</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Database integration
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  API connectivity
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  User management
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Security and authentication
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Mobile responsiveness
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Application Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Web Applications</h3>
                <p className="text-gray-300">Build responsive web apps with modern UI components.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-teal-400">Business Apps</h3>
                <p className="text-gray-300">Create custom business applications and workflows.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Process Automation</h3>
                <p className="text-gray-300">Automate business processes and workflows.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=low-code-platform"
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300"
            >
              Start Building
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowCodePlatformPage;