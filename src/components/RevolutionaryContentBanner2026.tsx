import React from 'react';

const RevolutionaryContentBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-4xl animate-pulse">🌟</span>
          <h3 className="text-3xl font-bold">REVOLUTIONARY CONTENT 2026</h3>
          <span className="text-4xl animate-pulse">🌟</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
          Discover groundbreaking new content featuring the latest technological breakthroughs, AI innovations, and future predictions!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <a href="/pages/AIRevolutionaryBreakthrough2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30">
            🧠 AI Revolutionary Breakthrough
          </a>
          <a href="/pages/FutureTechInnovations2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🔬 Future Tech Innovations
          </a>
          <a href="/pages/RevolutionaryTechBlog2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-pink-600 transition-all duration-300 font-semibold border border-white/30">
            📝 Revolutionary Tech Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;