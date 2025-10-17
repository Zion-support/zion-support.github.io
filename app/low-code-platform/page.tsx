import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEOHead from '../components/SEOHead';
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c

const LowCodePlatformPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Low-Code Platform - Zion Tech Group</title>
        <meta name="description" content="Build applications faster with our low-code platform. Enable citizen developers to create custom applications without extensive programming knowledge." />
        <meta name="keywords" content="low-code platform, no-code development, rapid application development, citizen developers, app builder" />
        <link rel="canonical" href="https://ziontechgroup.com/low-code-platform" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              Low-Code Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build applications faster with our intuitive low-code platform. 
              Enable citizen developers to create custom applications without extensive programming knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-4">Visual Development</h3>
              <p className="text-gray-300">
                Build applications using drag-and-drop interfaces and visual workflows.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">Rapid Deployment</h3>
              <p className="text-gray-300">
                Deploy applications quickly with built-in CI/CD and cloud integration.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-white mb-4">API Integration</h3>
              <p className="text-gray-300">
                Easily connect to external services and APIs with pre-built connectors.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-4">Mobile Ready</h3>
              <p className="text-gray-300">
                Create responsive applications that work on desktop and mobile devices.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Built-in security features and compliance tools for enterprise applications.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Analytics & Monitoring</h3>
              <p className="text-gray-300">
                Monitor application performance and user behavior with built-in analytics.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Build Applications Faster?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 neon-glow"
              >
                Get Started Today
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
=======
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
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        </div>
      </div>
    </>
  );
};

export default LowCodePlatformPage;