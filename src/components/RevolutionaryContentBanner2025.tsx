import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-cyan-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">🚀</span>
            <h2 className="text-3xl font-bold">REVOLUTIONARY CONTENT 2025-2026</h2>
            <span className="text-4xl animate-bounce">🚀</span>
          </div>
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
            Discover the most groundbreaking technology content featuring AI breakthroughs, 
            space exploration, biotech revolution, and quantum computing innovations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <a 
            href="/pages/RevolutionaryTechBreakthrough2025" 
            className="bg-white/20 backdrop-blur-sm text-white p-6 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 hover:scale-105"
          >
            <div className="text-4xl mb-3 text-center">🧠</div>
            <h3 className="text-lg font-bold mb-2 text-center">Revolutionary Tech Breakthrough 2025</h3>
            <p className="text-sm opacity-90 text-center">
              Experience the most revolutionary technology breakthroughs reshaping our digital future
            </p>
            <div className="text-center mt-3">
              <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full">BREAKTHROUGH</span>
            </div>
          </a>

          <a 
            href="/pages/NextGenSpaceTech2026" 
            className="bg-white/20 backdrop-blur-sm text-white p-6 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold border border-white/30 hover:scale-105"
          >
            <div className="text-4xl mb-3 text-center">🚀</div>
            <h3 className="text-lg font-bold mb-2 text-center">Next-Gen Space Tech 2026</h3>
            <p className="text-sm opacity-90 text-center">
              Explore revolutionary space technologies making interplanetary travel a reality
            </p>
            <div className="text-center mt-3">
              <span className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full">SPACE AGE</span>
            </div>
          </a>

          <a 
            href="/pages/AdvancedBiotechRevolution2026" 
            className="bg-white/20 backdrop-blur-sm text-white p-6 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30 hover:scale-105"
          >
            <div className="text-4xl mb-3 text-center">🧬</div>
            <h3 className="text-lg font-bold mb-2 text-center">Advanced Biotech Revolution 2026</h3>
            <p className="text-sm opacity-90 text-center">
              Discover revolutionary biotechnology transforming healthcare and human enhancement
            </p>
            <div className="text-center mt-3">
              <span className="px-3 py-1 bg-emerald-500 text-white text-xs rounded-full">LIFE CHANGING</span>
            </div>
          </a>
        </div>

        <div className="text-center mt-8">
          <a 
            href="/pages/ComprehensiveServices2025" 
            className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30"
          >
            🌟 Explore All Revolutionary Content →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;