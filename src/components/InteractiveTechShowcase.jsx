import React from 'react';

<<<<<<< HEAD
const InteractiveTechShowcase= () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InteractiveTechShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
const InteractiveTechShowcase = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Interactive Tech Showcase
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Experience the future of technology through interactive demonstrations
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Demo</h3>
            <p className="text-gray-300">Interactive AI demonstrations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Demo</h3>
            <p className="text-gray-300">Quantum computing showcase</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Neural Demo</h3>
            <p className="text-gray-300">Neural interface technology</p>
          </div>
        </div>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default InteractiveTechShowcase;