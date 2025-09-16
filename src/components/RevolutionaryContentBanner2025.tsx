import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl animate-bounce">🚀</span>
          <h3 className="text-2xl font-bold">REVOLUTIONARY CONTENT 2025</h3>
          <span className="text-3xl animate-bounce">🚀</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
          Experience the future of technology with our groundbreaking new content featuring 
          Revolutionary Tech Showcase, Ultimate Innovation Hub, and Future Tech Vision
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          <a href="/pages/RevolutionaryTechShowcase2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🚀 Revolutionary Tech Showcase →
          </a>
          <a href="/pages/UltimateInnovationHub2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🌟 Ultimate Innovation Hub →
          </a>
          <a href="/pages/FutureTechVision2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🔮 Future Tech Vision →
          </a>
        </div>
        <div className="mt-6">
          <a href="/pages/RevolutionaryTechShowcase2025" className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30">
            🌟 NEW: Revolutionary Tech Showcase 2025 →
          </a>
          <a href="/pages/UltimateInnovationHub2025" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30 ml-4">
            🌟 NEW: Ultimate Innovation Hub 2025 →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;