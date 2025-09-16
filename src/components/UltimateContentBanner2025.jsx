import React from 'react';

const UltimateContentBanner2025 = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12 mb-8 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-bold mb-6 animate-pulse border border-white/30">
            🌟 ULTIMATE CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most comprehensive collection of cutting-edge technology content, revolutionary innovations, and breakthrough solutions
          </p>
        </div>

        {/* Content Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🚀</div>
            <h3 className="font-bold text-center mb-2">Revolutionary Tech</h3>
            <p className="text-sm text-center opacity-80">Breakthrough innovations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🤖</div>
            <h3 className="font-bold text-center mb-2">AI Solutions</h3>
            <p className="text-sm text-center opacity-80">Comprehensive AI suite</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">⚛️</div>
            <h3 className="font-bold text-center mb-2">Quantum Computing</h3>
            <p className="text-sm text-center opacity-80">Next-gen processing</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧬</div>
            <h3 className="font-bold text-center mb-2">Neural Interfaces</h3>
            <p className="text-sm text-center opacity-80">Mind-machine fusion</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/pages/RevolutionaryTechShowcase2025" 
            className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            🌟 Explore Revolutionary Content →
          </a>
          <a 
            href="/pages/AISolutionsComprehensive2025" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-center"
          >
            🤖 AI Solutions Hub →
          </a>
          <a 
            href="/pages/UltimateTechBreakthrough2025" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-center"
          >
            ⚡ Ultimate Breakthrough →
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-1">500+</div>
            <div className="text-sm opacity-80">Content Pages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-1">99.9%</div>
            <div className="text-sm opacity-80">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-1">24/7</div>
            <div className="text-sm opacity-80">Access</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-300 mb-1">∞</div>
            <div className="text-sm opacity-80">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;