import React from 'react';

const UltimateContentShowcase: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • 2026-2027
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Ultimate Content Showcase</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our most revolutionary content featuring breakthrough technologies, innovative solutions, and cutting-edge innovations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌟</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Ultimate Tech Breakthrough 2026</h3>
            <p className="text-purple-100 mb-6 text-center">
              Discover the most revolutionary technology breakthroughs that are reshaping our digital future
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• AI Consciousness Breakthrough</li>
              <li>• Quantum Neural Fusion</li>
              <li>• Neural Reality Engine</li>
              <li>• Interdimensional Computing</li>
            </ul>
            <a href="/pages/UltimateTechBreakthrough2026" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore Breakthrough →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Revolutionary Tech Showcase 2027</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Witness the most advanced technology innovations that are reshaping industries
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Advanced AI Consciousness</li>
              <li>• Quantum Neural Networks</li>
              <li>• Neural Reality Interface</li>
              <li>• Interactive Demos</li>
            </ul>
            <a href="/pages/RevolutionaryTechShowcase2027" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              View Showcase →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Tech Innovation 2027</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Explore cutting-edge innovations across multiple technology domains
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• AI & Machine Learning</li>
              <li>• Quantum Computing</li>
              <li>• Neural Interfaces</li>
              <li>• Innovation Timeline</li>
            </ul>
            <a href="/pages/AdvancedTechInnovation2027" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              See Innovations →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase;