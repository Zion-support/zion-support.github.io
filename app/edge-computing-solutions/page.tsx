import React from 'react';
import { Helmet } from 'react-helmet-async';

const EdgeComputingSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced edge computing solutions for IoT, real-time processing, and distributed applications. Reduce latency and improve performance with edge infrastructure." />
        <meta name="keywords" content="edge computing, IoT, real-time processing, distributed computing, edge infrastructure" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Edge Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bring computing power closer to your data sources with edge computing solutions. 
              Reduce latency, improve performance, and enable real-time processing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Distributed Edge Infrastructure
              </h2>
              <p className="text-gray-300 mb-6">
                Our edge computing solutions process data closer to its source, 
                reducing latency and improving performance for IoT, real-time 
                applications, and distributed systems.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Low-latency processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  IoT device management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Real-time analytics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Autonomous operation
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Edge Performance</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">&lt;5ms</div>
                    <div className="text-sm text-gray-300">Latency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">1000+</div>
                    <div className="text-sm text-gray-300">Edge Nodes</div>
                  </div>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  View Network
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">IoT Edge</h3>
              <p className="text-gray-300">
                Edge computing for IoT devices with real-time data processing and analytics.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">5G Edge</h3>
              <p className="text-gray-300">
                Edge computing infrastructure optimized for 5G networks and applications.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Industrial Edge</h3>
              <p className="text-gray-300">
                Edge solutions for manufacturing, automation, and industrial applications.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Deploy Edge Computing
            </h2>
            <p className="text-gray-300 mb-8">
              Accelerate your applications with distributed edge computing infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Edge Project
              </button>
              <button className="border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Architecture
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EdgeComputingSolutionsPage;