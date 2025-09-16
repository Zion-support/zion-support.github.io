import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-8 left-8 w-24 h-24 bg-emerald-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-16 w-20 h-20 bg-teal-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-8 left-1/3 w-16 h-16 bg-cyan-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-16 right-1/4 w-18 h-18 bg-blue-500/30 rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ ULTIMATE CONTENT • JANUARY 2025
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Ultimate Content 2025
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            The most comprehensive and advanced content platform in the universe. 
            Transform your business with cutting-edge AI, quantum computing, and neural interfaces.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg w-full sm:w-auto">
              Access Ultimate Content →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg w-full sm:w-auto">
              Start Free Trial
            </button>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-4 text-center">🤖</div>
              <h3 className="text-lg font-bold mb-2 text-center">AI Solutions</h3>
              <p className="text-emerald-100 text-center text-sm">
                Comprehensive AI solutions for every business need
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-teal-400/30">
              <div className="text-4xl mb-4 text-center">⚛️</div>
              <h3 className="text-lg font-bold mb-2 text-center">Quantum Tech</h3>
              <p className="text-teal-100 text-center text-sm">
                Quantum computing and consciousness technology
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-4 text-center">🧬</div>
              <h3 className="text-lg font-bold mb-2 text-center">Neural Interfaces</h3>
              <p className="text-cyan-100 text-center text-sm">
                Direct brain-computer interface technology
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
              <div className="text-4xl mb-4 text-center">🌐</div>
              <h3 className="text-lg font-bold mb-2 text-center">Metaverse</h3>
              <p className="text-blue-100 text-center text-sm">
                Complete metaverse integration and experiences
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">500+</div>
              <p className="text-emerald-200">AI Solutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-300 mb-2">99.9%</div>
              <p className="text-teal-200">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">∞</div>
              <p className="text-cyan-200">Possibilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;