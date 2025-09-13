import React from 'react';
import { Link } from 'react-router-dom';

const EdgeComputingIOTBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-gray-900 to-zinc-900 py-20">
      {/* IoT network visualization */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-18 h-18 bg-slate-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-24 w-14 h-14 bg-gray-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-24 left-1/3 w-10 h-10 bg-zinc-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-slate-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 left-2/3 w-12 h-12 bg-gray-300 rounded-full opacity-35 animate-bounce"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-slate-200 bg-slate-800/30 rounded-full border border-slate-400/30 mb-4 animate-pulse">
              🌐 EDGE COMPUTING & IoT REVOLUTION 2026-2027
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Intelligent Edge
              <span className="block bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400 bg-clip-text text-transparent">
                Computing Networks
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-4xl mx-auto leading-relaxed">
              Process data at the edge with ultra-low latency, connect billions of devices, 
              and create smart ecosystems that respond in real-time. The future of computing is distributed.
            </p>
          </div>

          {/* Key edge computing features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Ultra-Low Latency</h3>
              <p className="text-slate-200">Process data locally with sub-millisecond response times for critical applications</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-white mb-2">Massive IoT</h3>
              <p className="text-slate-200">Connect and manage billions of devices with intelligent edge processing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-2">Edge Security</h3>
              <p className="text-slate-200">Advanced security protocols and encryption at every edge node</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/edge-computing-iot-solutions"
              className="group relative px-8 py-4 bg-gradient-to-r from-slate-600 to-gray-600 text-white font-bold text-lg rounded-full hover:from-slate-700 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-slate-500/25"
            >
              <span className="relative z-10">Explore Edge Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-gray-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/case-studies/smart-city-iot-transformation"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              View Smart City Projects
            </Link>
          </div>

          {/* Edge computing stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1ms</div>
              <div className="text-slate-200">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50B+</div>
              <div className="text-slate-200">Connected Devices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.99%</div>
              <div className="text-slate-200">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-slate-200">Edge Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeComputingIOTBanner;