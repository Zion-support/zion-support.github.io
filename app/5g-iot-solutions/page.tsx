import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGIoTSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G IoT Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary 5G IoT solutions for connected devices and smart infrastructure." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              5G IoT Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect and manage millions of IoT devices with our advanced 5G IoT solutions 
              for smart cities, industrial automation, and connected infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Smart Cities</h3>
              <p className="text-gray-300">
                Comprehensive IoT solutions for smart city infrastructure and management.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Industrial IoT</h3>
              <p className="text-gray-300">
                Advanced industrial IoT solutions for manufacturing and automation.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Device Management</h3>
              <p className="text-gray-300">
                Centralized device management and monitoring for IoT ecosystems.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Solutions
            </button>
          </div>
        </div>
      </div>
    </>
  );
}