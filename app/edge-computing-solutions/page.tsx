import React from 'react';
import { Helmet } from 'react-helmet-async';

const EdgeComputingSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced Edge Computing Solutions for distributed computing, IoT processing, and real-time data analytics. Reduce latency and improve performance." />
        <meta name="keywords" content="edge computing, distributed computing, IoT processing, real-time analytics, edge AI, fog computing, edge infrastructure" />
        <link rel="canonical" href="https://ziontechgroup.com/edge-computing-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                Edge Computing Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced edge computing infrastructure for distributed processing, IoT analytics, and real-time data processing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Distributed Processing</h2>
                <p className="text-gray-300 mb-4">
                  Deploy computing power closer to data sources for reduced latency and improved performance in distributed environments.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Edge node deployment</li>
                  <li>• Real-time data processing</li>
                  <li>• Local decision making</li>
                  <li>• Bandwidth optimization</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">IoT Analytics</h2>
                <p className="text-gray-300 mb-4">
                  Process IoT data at the edge for immediate insights, reduced cloud dependency, and enhanced security.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Sensor data processing</li>
                  <li>• Anomaly detection</li>
                  <li>• Predictive maintenance</li>
                  <li>• Real-time monitoring</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Low Latency</h3>
                  <p className="text-gray-300 text-sm">Ultra-low latency processing at the edge</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                  <p className="text-gray-300 text-sm">Enhanced security with local data processing</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Scalability</h3>
                  <p className="text-gray-300 text-sm">Highly scalable edge infrastructure</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with Edge Computing
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

export default EdgeComputingSolutionsPage;