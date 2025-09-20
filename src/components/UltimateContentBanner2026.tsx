import React from 'react';

const UltimateContentBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-4xl animate-pulse">🚀</span>
          <h3 className="text-3xl font-bold">🚀 ULTIMATE CONTENT 2026 🚀</h3>
          <span className="text-4xl animate-pulse">🚀</span>
        </div>
        <p className="text-2xl opacity-95 mb-6 max-w-5xl mx-auto font-semibold">
          🌟 DISCOVER THE MOST REVOLUTIONARY TECHNOLOGIES THAT WILL RESHAPE OUR WORLD 🌟
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-10xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300">
            <div className="text-3xl mb-2">🧠</div>
            <h4 className="text-lg font-bold mb-2">AI Revolution</h4>
            <p className="text-sm opacity-90">Conscious AI Systems</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300">
            <div className="text-3xl mb-2">⚛️</div>
            <h4 className="text-lg font-bold mb-2">Quantum Computing</h4>
            <p className="text-sm opacity-90">Quantum Supremacy</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300">
            <div className="text-3xl mb-2">🧬</div>
            <h4 className="text-lg font-bold mb-2">Neural Enhancement</h4>
            <p className="text-sm opacity-90">Brain-Computer Interfaces</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300">
            <div className="text-3xl mb-2">🚀</div>
            <h4 className="text-lg font-bold mb-2">Space Technology</h4>
            <p className="text-sm opacity-90">Interstellar Travel</p>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-all duration-300 mr-4">
            Explore All Technologies →
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300">
            Get Early Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2026;