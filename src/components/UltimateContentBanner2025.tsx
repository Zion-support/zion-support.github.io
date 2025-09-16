import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ ULTIMATE CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Technology Content 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            The most comprehensive collection of revolutionary technology content ever created
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-center text-indigo-300">Ultimate Tech Revolution</h3>
            <p className="text-indigo-100 mb-4 text-center text-sm">
              Revolutionary technological advances reshaping our world
            </p>
            <a href="/pages/UltimateTechRevolution2025" className="block w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center text-sm">
              Explore →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center text-purple-300">Revolutionary Breakthrough</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              Groundbreaking technological breakthroughs transforming humanity
            </p>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
              Discover →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center text-pink-300">Next-Gen Innovation Hub</h3>
            <p className="text-pink-100 mb-4 text-center text-sm">
              Revolutionary technologies shaping humanity's future
            </p>
            <a href="/pages/NextGenInnovationHub2025" className="block w-full bg-white text-pink-600 py-2 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-center text-sm">
              Enter Hub →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🌟</div>
            <h3 className="text-xl font-bold mb-3 text-center text-cyan-300">All Revolutionary Content</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Complete collection of revolutionary technology content
            </p>
            <a href="/pages/RevolutionaryTechShowcase2025" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              View All →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-semibold">Live Updates</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 font-semibold">Real-time Content</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-300 font-semibold">Revolutionary Tech</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;