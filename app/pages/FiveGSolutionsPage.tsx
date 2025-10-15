import React from 'react';
import { Helmet } from 'react-helmet-async';

const FiveGSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G solutions including network infrastructure, IoT applications, and mobile edge computing services." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage the power of 5G technology for next-generation applications and services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Network Infrastructure</h3>
              <p className="text-gray-300 mb-4">
                Design and deploy 5G network infrastructure for optimal performance.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• 5G Core Network</li>
                <li>• Edge Computing</li>
                <li>• Network Slicing</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">IoT Applications</h3>
              <p className="text-gray-300 mb-4">
                Connect and manage IoT devices with 5G connectivity solutions.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Smart City Solutions</li>
                <li>• Industrial IoT</li>
                <li>• Connected Vehicles</li>
                <li>• Remote Monitoring</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Mobile Edge Computing</h3>
              <p className="text-gray-300 mb-4">
                Deploy applications at the edge for ultra-low latency performance.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Edge Data Centers</li>
                <li>• Real-time Processing</li>
                <li>• AR/VR Applications</li>
                <li>• Autonomous Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;