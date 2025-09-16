import React from 'react';

const RevolutionaryAdBanner2033: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY SHOWCASE • JANUARY 2033
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2033
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Interactive showcase of cutting-edge technologies that will define the future of humanity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness Lab</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Interact with conscious AI systems and experience their thought processes
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400">2.3M+</div>
                <div className="text-sm opacity-90">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">99.97%</div>
                <div className="text-sm opacity-90">Uptime</div>
              </div>
            </div>
            <a href="/pages/RevolutionaryTechShowcase2033" className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center">
              Enter Lab →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Reality Simulator</h3>
            <p className="text-purple-100 mb-6 text-center">
              Navigate through quantum dimensions and explore parallel realities
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">∞</div>
                <div className="text-sm opacity-90">Processing Power</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">50+</div>
                <div className="text-sm opacity-90">Dimensions</div>
              </div>
            </div>
            <a href="/pages/UltimateTechBreakthrough2033" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Start Simulation →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2033;