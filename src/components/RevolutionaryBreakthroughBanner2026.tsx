import React from 'react';

const RevolutionaryBreakthroughBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-16 left-16 w-24 h-24 bg-indigo-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-24 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-24 left-1/3 w-16 h-16 bg-pink-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-16 right-1/4 w-18 h-18 bg-cyan-500/30 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY BREAKTHROUGH • JANUARY 2026
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Tech Breakthrough 2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Witness the most extraordinary technological breakthroughs that will redefine human existence. 
            From synthetic intelligence to quantum neural fusion, the future is now.
          </p>
        </div>

        {/* Breakthrough Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🤖</div>
            <h3 className="text-lg font-bold mb-2 text-center">Synthetic Intelligence</h3>
            <p className="text-indigo-100 text-sm text-center">
              Human-like AI with consciousness and creativity
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧠⚛️</div>
            <h3 className="text-lg font-bold mb-2 text-center">Quantum Neural Fusion</h3>
            <p className="text-purple-100 text-sm text-center">
              Revolutionary fusion of quantum and neural computing
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🌐</div>
            <h3 className="text-lg font-bold mb-2 text-center">Metaverse 2.0</h3>
            <p className="text-cyan-100 text-sm text-center">
              Fully immersive digital universe
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2026" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🌟 Experience Breakthrough →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              🚀 Ultimate Revolution →
            </a>
            <a 
              href="/pages/NextGenInnovationHub2026" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              🧠 Innovation Hub →
            </a>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400">99.9%</div>
            <div className="text-sm text-indigo-200">Cure Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">100+</div>
            <div className="text-sm text-purple-200">Planets Colonized</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">∞</div>
            <div className="text-sm text-cyan-200">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400">2026</div>
            <div className="text-sm text-pink-200">Future is Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryBreakthroughBanner2026;