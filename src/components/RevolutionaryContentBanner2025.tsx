import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-pink-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-cyan-500/20 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            🌟 Revolutionary Tech Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Interactive demonstrations of breakthrough innovations - experience the future of technology with live demos and real-time showcases
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="text-lg font-bold mb-2">Conscious AI Demo</h3>
            <p className="text-purple-100 text-sm mb-4">Interactive AI consciousness demonstration</p>
            <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">LIVE</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">⚛️</div>
            <h3 className="text-lg font-bold mb-2">Quantum Simulation</h3>
            <p className="text-cyan-100 text-sm mb-4">Real-time quantum computing showcase</p>
            <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">LIVE</div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">🧬</div>
            <h3 className="text-lg font-bold mb-2">Neural Interface</h3>
            <p className="text-emerald-100 text-sm mb-4">Brain-computer interface testing</p>
            <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">LIVE</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">🌌</div>
            <h3 className="text-lg font-bold mb-2">Interdimensional</h3>
            <p className="text-orange-100 text-sm mb-4">Multi-dimensional computing demo</p>
            <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">LIVE</div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg"
            >
              🎮 Try Interactive Demo
            </a>
            <a 
              href="/pages/NextGenTechRevolution2025" 
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors font-bold text-lg"
            >
              🚀 Explore Innovations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;