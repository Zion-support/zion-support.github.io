import React from 'react';

const InteractiveTechShowcase2027 = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Interactive Tech Showcase 2027
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Revolutionary technology demonstrations for 2027
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Precision AI</h3>
            <p className="text-gray-300">Ultra-precise AI systems</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🌊</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Waves</h3>
            <p className="text-gray-300">Advanced quantum computing</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold text-white mb-4">Research Lab</h3>
            <p className="text-gray-300">Cutting-edge research tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;