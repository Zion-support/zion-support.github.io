import React from 'react';
import { Helmet } from 'react-helmet-async';

const LowCodePlatformPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Low-Code Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced Low-Code Platform for rapid application development, visual programming, and business process automation. Build apps faster with our platform." />
        <meta name="keywords" content="low-code platform, rapid application development, visual programming, no-code, app development, business process automation" />
        <link rel="canonical" href="https://ziontechgroup.com/low-code-platform" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                Low-Code Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced low-code platform for rapid application development and visual programming
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Visual Development</h2>
                <p className="text-gray-300 mb-4">
                  Build applications using visual drag-and-drop interfaces with minimal coding required for rapid development.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Drag-and-drop interface</li>
                  <li>• Visual workflow designer</li>
                  <li>• Pre-built components</li>
                  <li>• Template library</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Rapid Deployment</h2>
                <p className="text-gray-300 mb-4">
                  Deploy applications quickly with built-in deployment tools, cloud integration, and automated testing.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• One-click deployment</li>
                  <li>• Cloud integration</li>
                  <li>• Automated testing</li>
                  <li>• Version control</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visual Programming</h3>
                  <p className="text-gray-300 text-sm">Intuitive visual programming interface</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Component Library</h3>
                  <p className="text-gray-300 text-sm">Rich library of pre-built components</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fast Development</h3>
                  <p className="text-gray-300 text-sm">Rapid application development and deployment</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with Low-Code Platform
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowCodePlatformPage;