import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ NEW: REVOLUTIONARY BREAKTHROUGH CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Tech Breakthrough 2025</h2>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            Discover groundbreaking technological breakthroughs that are redefining what's possible and creating the future today
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
              Experience Breakthrough →
            </a>
            <a href="/pages/NextGenInnovationHub2025" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Innovation Hub
            </a>
          </div>
          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold mb-1">Autonomous AI</h3>
              <p className="text-sm opacity-80">Self-operating systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🧬</div>
              <h3 className="font-semibold mb-1">Neural Interface</h3>
              <p className="text-sm opacity-80">Mind-machine connection</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">⚛️</div>
              <h3 className="font-semibold mb-1">Quantum Edge</h3>
              <p className="text-sm opacity-80">Edge quantum computing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🌐</div>
              <h3 className="font-semibold mb-1">Metaverse</h3>
              <p className="text-sm opacity-80">Virtual-physical blend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;