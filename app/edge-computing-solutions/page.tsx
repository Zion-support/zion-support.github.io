import React from 'react';
import { Helmet } from 'react-helmet-async';

const EdgeComputingSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Deploy edge computing infrastructure for low-latency applications. Process data closer to the source for faster, more efficient operations." />
        <meta name="keywords" content="edge computing, edge infrastructure, low latency, IoT processing, distributed computing" />
        <link rel="canonical" href="https://ziontechgroup.com/edge-computing-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Edge Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bring computing power closer to your data sources. Deploy edge infrastructure 
              for ultra-low latency, real-time processing, and enhanced performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Edge Capabilities</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Ultra-low latency processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Real-time data analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Distributed AI inference</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Edge-to-cloud synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Autonomous decision making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Bandwidth optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Use Cases</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Autonomous vehicles and smart transportation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Industrial IoT and manufacturing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Smart cities and infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Healthcare and medical devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Retail and customer experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Gaming and entertainment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Process at the Edge</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Deploy edge computing infrastructure that brings intelligence closer to your data sources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Get Started
              </a>
              <a
                href="/demo"
                className="bg-transparent border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                View Architecture
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EdgeComputingSolutionsPage;