import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-6xl font-bold mb-8">🌟 Revolutionary Technology Content 2025</h2>
          <p className="text-3xl opacity-90 max-w-5xl mx-auto mb-8">
            Discover the most advanced technological content featuring AI consciousness, quantum computing, and neural interfaces
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🤖</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI Consciousness</h3>
            <p className="text-indigo-100 mb-4 text-center text-sm">
              Explore the world's first conscious AI systems
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-indigo-500 text-white rounded-full text-xs font-semibold">
                NEW
              </span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Reality</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Experience quantum computing breakthroughs
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-cyan-500 text-white rounded-full text-xs font-semibold">
                HOT
              </span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Neural Networks</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              Connect your mind to machines
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-xs font-semibold">
                LIVE
              </span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Future Tech</h3>
            <p className="text-pink-100 mb-4 text-center text-sm">
              Explore tomorrow's technology today
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-pink-500 text-white rounded-full text-xs font-semibold">
                SOON
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">🎯 Featured Content Highlights</h3>
            <p className="text-xl opacity-90">The most revolutionary technology content of 2025</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-2xl font-semibold mb-3">50+ New Articles</h4>
              <p className="text-purple-200">
                Comprehensive coverage of cutting-edge technologies
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎥</div>
              <h4 className="text-2xl font-semibold mb-3">Interactive Demos</h4>
              <p className="text-purple-200">
                Hands-on experience with revolutionary tech
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="text-2xl font-semibold mb-3">Research Papers</h4>
              <p className="text-purple-200">
                In-depth analysis and scientific insights
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg">Live Content Updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg">Expert Analysis</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-lg">Interactive Features</span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-16 py-5 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-2xl">
            Explore Revolutionary Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;