import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEOHead from '../components/SEOHead';
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c

const EdgeComputingSolutionsPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced edge computing solutions for real-time processing, IoT applications, and distributed computing. Reduce latency and improve performance with edge technology." />
        <meta name="keywords" content="edge computing, IoT solutions, real-time processing, distributed computing, edge infrastructure" />
        <link rel="canonical" href="https://ziontechgroup.com/edge-computing-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              Edge Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bring computing power closer to your data sources with our advanced edge computing solutions. 
              Reduce latency, improve performance, and enable real-time processing for IoT and AI applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Processing</h3>
              <p className="text-gray-300">
                Process data at the edge for ultra-low latency and real-time decision making.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-white mb-4">IoT Integration</h3>
              <p className="text-gray-300">
                Seamlessly integrate with IoT devices and sensors for comprehensive edge solutions.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-4">Enhanced Security</h3>
              <p className="text-gray-300">
                Keep sensitive data local with advanced security and privacy protection.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-300">
                Analyze data locally before sending to the cloud for efficient bandwidth usage.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-4">AI at the Edge</h3>
              <p className="text-gray-300">
                Run AI models locally for instant inference without cloud dependency.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-white mb-4">Hybrid Cloud</h3>
              <p className="text-gray-300">
                Seamlessly connect edge devices with cloud infrastructure for optimal performance.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Deploy Edge Computing?</h2>
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
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        </div>
      </div>
    </>
  );
};

export default EdgeComputingSolutionsPage;