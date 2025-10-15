import React from 'react';
import { Helmet } from 'react-helmet-async';

const AugmentedRealitySolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Augmented Reality Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced Augmented Reality Solutions for immersive experiences, AR applications, and mixed reality solutions. Transform your business with AR technology." />
        <meta name="keywords" content="augmented reality, AR solutions, mixed reality, AR applications, immersive technology, AR development, AR consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/augmented-reality-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                Augmented Reality Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AR solutions for immersive experiences, training, visualization, and interactive applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">AR Applications</h2>
                <p className="text-gray-300 mb-4">
                  Custom AR applications for mobile devices, smart glasses, and enterprise solutions with advanced tracking and rendering.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Mobile AR apps</li>
                  <li>• Enterprise AR solutions</li>
                  <li>• AR training modules</li>
                  <li>• Interactive AR experiences</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">AR Visualization</h2>
                <p className="text-gray-300 mb-4">
                  Immersive AR visualization for product demonstrations, architectural visualization, and data representation.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• 3D model visualization</li>
                  <li>• Product demonstrations</li>
                  <li>• Architectural walkthroughs</li>
                  <li>• Data visualization</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">AR Tracking</h3>
                  <p className="text-gray-300 text-sm">Advanced object and surface tracking</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Immersive Design</h3>
                  <p className="text-gray-300 text-sm">Engaging and intuitive AR interfaces</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cross-Platform</h3>
                  <p className="text-gray-300 text-sm">AR solutions for multiple platforms</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with AR Solutions
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

export default AugmentedRealitySolutionsPage;