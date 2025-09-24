import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Technology Content 2025</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-6">
            Discover our latest revolutionary content featuring cutting-edge AI, quantum computing, 
            and neural interface technologies that will define the future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3 text-center">🤖</div>
            <h3 className="text-lg font-bold mb-2 text-center">AI Revolution</h3>
            <p className="text-blue-100 mb-3 text-center text-xs">
              Autonomous AI agents that think and create
            </p>
            <a href="/pages/NextGenTechRevolution2025" className="block w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center text-xs">
              Explore AI →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3 text-center">⚡</div>
            <h3 className="text-lg font-bold mb-2 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 mb-3 text-center text-xs">
              Exponential speed and impossible calculations
            </p>
            <a href="/pages/UltimateTechBreakthrough2025" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-xs">
              Go Quantum →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3 text-center">🧬</div>
            <h3 className="text-lg font-bold mb-2 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-3 text-center text-xs">
              Direct mind-machine connection
            </p>
            <a href="/pages/RevolutionaryTechShowcase2025" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-xs">
              Connect Mind →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3 text-center">🌐</div>
            <h3 className="text-lg font-bold mb-2 text-center">Edge AI & IoT</h3>
            <p className="text-purple-100 mb-3 text-center text-xs">
              Intelligent connected devices everywhere
            </p>
            <a href="/pages/NextGenTechRevolution2025" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-xs">
              Explore IoT →
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-semibold">NEW CONTENT</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold">INTERACTIVE</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-semibold">REVOLUTIONARY</span>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="/pages/RevolutionaryTechShowcase2025" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              🎮 Interactive Showcase
            </a>
            <a href="/pages/UltimateTechBreakthrough2025" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold">
              🌟 Ultimate Breakthrough
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;