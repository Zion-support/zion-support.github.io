import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGInfrastructurePage() {
  return (
    <>
      <Helmet>
        <title>5G Infrastructure Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G infrastructure solutions for robust and scalable network deployment." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              5G Infrastructure Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build robust 5G infrastructure with our comprehensive solutions for core networks, 
              radio access networks, and edge computing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Core Network</h3>
              <p className="text-gray-300">
                Advanced 5G core network infrastructure for high-performance connectivity.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Radio Access</h3>
              <p className="text-gray-300">
                Next-generation radio access network (RAN) solutions for optimal coverage.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Edge Computing</h3>
              <p className="text-gray-300">
                Edge computing infrastructure for ultra-low latency applications.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}