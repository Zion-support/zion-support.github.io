import React from 'react';
import SEOHead from '../components/SEOHead';

const EdgeComputingSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Edge Computing Solutions - Zion Tech Group"
        description="Edge computing solutions for IoT, real-time processing, low-latency applications, and distributed computing infrastructure."
        keywords="edge computing, IoT, real-time processing, low latency, distributed computing, edge infrastructure, fog computing"
        canonicalUrl="https://ziontechgroup.com/edge-computing-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Edge Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bring computing power closer to data sources with edge computing solutions for IoT, real-time processing, and low-latency applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-400">Edge Infrastructure</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Edge server deployment
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  IoT device management
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Real-time data processing
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Low-latency networking
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Distributed computing
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-teal-400">Edge Applications</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Autonomous vehicles
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Smart manufacturing
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  AR/VR applications
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Video analytics
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Predictive maintenance
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Edge Computing Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Low Latency</h3>
                <p className="text-gray-300">Ultra-low latency processing for real-time applications.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-teal-400">Data Privacy</h3>
                <p className="text-gray-300">Process sensitive data locally without cloud transmission.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Bandwidth Efficiency</h3>
                <p className="text-gray-300">Reduce bandwidth usage with local processing.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=edge-computing-solutions"
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300"
            >
              Deploy Edge Computing
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EdgeComputingSolutionsPage;