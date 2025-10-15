import React from 'react';
import { Helmet } from 'react-helmet-async';

const VirtualRealitySolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Virtual Reality Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced Virtual Reality Solutions for immersive experiences, VR applications, and virtual environments. Transform your business with VR technology." />
        <meta name="keywords" content="virtual reality, VR solutions, immersive technology, VR applications, virtual environments, VR development, VR consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/virtual-reality-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                Virtual Reality Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced VR solutions for immersive experiences, training simulations, and virtual environments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">VR Applications</h2>
                <p className="text-gray-300 mb-4">
                  Custom VR applications for various industries including gaming, education, healthcare, and enterprise training.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• VR training simulations</li>
                  <li>• Virtual meetings and collaboration</li>
                  <li>• VR gaming experiences</li>
                  <li>• Educational VR content</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Virtual Environments</h2>
                <p className="text-gray-300 mb-4">
                  Create immersive virtual environments for training, entertainment, and business applications with realistic physics and interactions.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• 3D environment design</li>
                  <li>• Interactive virtual spaces</li>
                  <li>• Multi-user VR experiences</li>
                  <li>• Real-time rendering</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Immersive Experience</h3>
                  <p className="text-gray-300 text-sm">Fully immersive VR experiences</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Multi-User Support</h3>
                  <p className="text-gray-300 text-sm">Collaborative VR experiences</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cross-Platform</h3>
                  <p className="text-gray-300 text-sm">VR solutions for multiple devices</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with VR Solutions
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

export default VirtualRealitySolutionsPage;