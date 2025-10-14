import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGSolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="5G Solutions - Zion Tech Group"
        description="Next-generation 5G connectivity solutions for IoT, edge computing, smart cities, and mobile applications."
        keywords="5G solutions, IoT, edge computing, smart cities, mobile applications, connectivity"
        canonical="/5g-solutions"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              5G Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Next-generation connectivity and infrastructure services for IoT, edge computing, and smart city implementations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">5G Data Analytics</h3>
            <p className="text-gray-300 mb-4">Real-time data processing and analytics for 5G networks.</p>
            <a href="/5g-data-analytics" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">5G Edge Computing</h3>
            <p className="text-gray-300 mb-4">Ultra-low latency computing at the edge of 5G networks.</p>
            <a href="/5g-edge-computing" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">5G Smart City Solutions</h3>
            <p className="text-gray-300 mb-4">Connected infrastructure for smart cities and urban development.</p>
            <a href="/5g-smart-city-solutions" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveGSolutionsPage;