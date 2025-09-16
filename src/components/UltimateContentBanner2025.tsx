import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Technology Content 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            The most comprehensive and revolutionary technology content featuring the latest breakthroughs in AI, quantum computing, and neural interfaces
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🤖</div>
            <h3 className="text-lg font-bold mb-3 text-center">AI Revolution</h3>
            <p className="text-indigo-100 mb-4 text-center text-sm">
              Complete transformation of artificial intelligence with conscious, creative, and autonomous systems
            </p>
            <a href="/pages/UltimateTechRevolution2025" className="block w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center text-sm">
              Explore AI →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">⚛️</div>
            <h3 className="text-lg font-bold mb-3 text-center">Quantum Breakthrough</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Revolutionary quantum computing that enables infinite processing power and consciousness simulation
            </p>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              Go Quantum →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧬</div>
            <h3 className="text-lg font-bold mb-3 text-center">Neural Interface</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              Direct neural interfaces that connect human consciousness with digital systems
            </p>
            <a href="/pages/NextGenInnovationHub2025" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
              Connect Neural →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🌌</div>
            <h3 className="text-lg font-bold mb-3 text-center">Dimensional Tech</h3>
            <p className="text-pink-100 mb-4 text-center text-sm">
              Computing across multiple dimensions and parallel universes for infinite possibilities
            </p>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="block w-full bg-white text-pink-600 py-2 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-center text-sm">
              Enter Dimensions →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-300 mb-2">500%</div>
              <p className="text-indigo-100">Productivity Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">99.9%</div>
              <p className="text-purple-100">Accuracy Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-300 mb-2">∞</div>
              <p className="text-pink-100">Computing Power</p>
            </div>
          </div>
          
          <p className="text-xl opacity-90 mb-6">
            Experience the future of technology with our revolutionary content
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore All Content
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;