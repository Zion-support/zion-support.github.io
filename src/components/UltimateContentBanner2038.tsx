import React from 'react';

const UltimateContentBanner2038: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEW: ULTIMATE REVOLUTION 2038
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Tech Revolution 2038
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            The most comprehensive technological transformation in human history
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-xl font-bold mb-2">Synthetic Intelligence</h3>
              <p className="text-sm opacity-90">AI that surpasses human intelligence in every way</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Quantum Neural Fusion</h3>
              <p className="text-sm opacity-90">Direct integration of human consciousness with quantum computing</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pages/UltimateTechRevolution2038" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Experience Ultimate Revolution →
            </a>
            <a href="/pages/RevolutionaryTechBreakthrough2037" className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-colors font-semibold text-lg">
              View Breakthrough 2037
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2038;