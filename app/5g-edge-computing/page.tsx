import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGEdgeComputingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Edge Computing Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary 5G edge computing solutions for ultra-low latency applications and real-time processing." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              5G Edge Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with ultra-low latency 5G edge computing solutions 
              that bring processing power closer to your data sources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Ultra-Low Latency</h3>
              <p className="text-gray-300">
                Achieve sub-millisecond response times with edge computing infrastructure.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Processing</h3>
              <p className="text-gray-300">
                Process data at the edge for instant decision-making and automation.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Scalable Infrastructure</h3>
              <p className="text-gray-300">
                Deploy and scale edge computing resources based on demand.
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
    </div>
  );
}