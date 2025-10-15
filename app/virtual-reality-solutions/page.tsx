import React from 'react';
import { Helmet } from 'react-helmet-async';

const VirtualRealitySolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Virtual Reality Solutions - Zion Tech Group</title>
        <meta name="description" content="Immersive VR solutions for training, simulation, entertainment, and enterprise applications. Create virtual worlds that engage and educate." />
        <meta name="keywords" content="virtual reality, VR solutions, immersive technology, VR development, virtual worlds" />
        <link rel="canonical" href="https://ziontechgroup.com/virtual-reality-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Virtual Reality Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Step into immersive virtual worlds with our cutting-edge VR solutions. 
              From training simulations to entertainment experiences, create virtual environments that captivate and inspire.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">VR Capabilities</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>High-fidelity 3D environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Realistic physics and interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Multi-user virtual spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Haptic feedback integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Cross-platform VR development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Performance optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Applications</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Employee training and simulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Healthcare and medical training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Architecture and design visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Entertainment and gaming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Education and learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Remote collaboration and meetings</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Enter Virtual Worlds</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Create immersive VR experiences that transport users to new dimensions of possibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Start Creating
              </a>
              <a
                href="/demo"
                className="bg-transparent border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Experience VR
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualRealitySolutionsPage;