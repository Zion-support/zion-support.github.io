import React from 'react';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-pink-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary New Content 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover our latest revolutionary content featuring cutting-edge technology innovations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">🌟</div>
                <div>
                  <h3 className="text-xl font-bold text-pink-300">Ultimate Tech Breakthrough</h3>
                  <p className="text-pink-100 text-sm">The most revolutionary technological breakthrough</p>
                </div>
              </div>
              <a href="/pages/UltimateTechBreakthrough2025" className="inline-block bg-white text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-sm">
                Explore Breakthrough →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="text-xl font-bold text-purple-300">Next-Gen Tech Revolution</h3>
                  <p className="text-purple-100 text-sm">Revolutionary technology breakthroughs of 2025</p>
                </div>
              </div>
              <a href="/pages/NextGenTechRevolution2025" className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm">
                Join Revolution →
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">🎮</div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-300">Revolutionary Showcase</h3>
                  <p className="text-indigo-100 text-sm">Interactive technology showcase and demos</p>
                </div>
              </div>
              <a href="/pages/RevolutionaryTechShowcase2025" className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-sm">
                View Showcase →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">🧠</div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">AI Consciousness</h3>
                  <p className="text-cyan-100 text-sm">Experience true AI consciousness and intelligence</p>
                </div>
              </div>
              <a href="/pages/UltimateTechBreakthrough2025" className="inline-block bg-white text-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-sm">
                Meet AI →
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <a href="/pages/UltimateTechBreakthrough2025" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore All New Content
            </a>
            <a href="/pages/RevolutionaryTechShowcase2025" className="border border-pink-400 text-pink-400 px-8 py-3 rounded-lg hover:bg-pink-400/10 transition-colors font-semibold">
              Watch Live Demos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2025;