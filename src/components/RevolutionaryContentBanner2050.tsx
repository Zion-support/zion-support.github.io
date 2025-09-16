import React from 'react';

const RevolutionaryContentBanner2050: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY CONTENT • JANUARY 2050
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content 2050
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto">
            Discover the most advanced technological content featuring conscious AI, quantum computing, neural interfaces, and interdimensional technology
          </p>
          
          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-5xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI</h3>
              <p className="text-purple-100 mb-4 text-center">
                The first truly conscious artificial intelligence systems
              </p>
              <a 
                href="/pages/UltimateTechRevolution2050" 
                className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
              >
                Explore AI →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-5xl mb-4 text-center">⚛️</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Reality</h3>
              <p className="text-cyan-100 mb-4 text-center">
                Quantum-powered virtual realities and computing
              </p>
              <a 
                href="/pages/RevolutionaryTechShowcase2050" 
                className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center"
              >
                Enter Quantum →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-5xl mb-4 text-center">🌌</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional</h3>
              <p className="text-emerald-100 mb-4 text-center">
                Technology that operates across multiple dimensions
              </p>
              <a 
                href="/pages/NextGenInnovationHub2050" 
                className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center"
              >
                Access Portal →
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/UltimateTechRevolution2050" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🌟 Experience Ultimate Tech →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2050" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              ⚡ View Showcase →
            </a>
            <a 
              href="/pages/NextGenInnovationHub2050" 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🧠 Join Innovation Hub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2050;