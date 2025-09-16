import React from 'react';

const RevolutionaryAdBanner2036: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 mb-8 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/30 rounded-full animate-spin"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-400/30 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-6 md:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-4 animate-pulse">
              ⚡ REVOLUTIONARY SHOWCASE • 2036
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Interactive Technology Demonstrations
            </h2>
            <p className="text-xl opacity-90 mb-6">
              Experience the most advanced interactive technology demonstrations that will define the future
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/pages/RevolutionaryTechShowcase2036" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Try Interactive Demo →
              </a>
              <a href="/pages/NextGenInnovationHub2036" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition-colors font-semibold">
                Explore Innovation Hub
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <div className="text-6xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Live Demo</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Experience consciousness computing, quantum intelligence, and interdimensional technology in real-time
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                  <div className="opacity-80">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">∞</div>
                  <div className="opacity-80">Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2036;