import React from 'react';

const RevolutionaryContentBanner2027: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-12 mb-8 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <span className="text-4xl animate-bounce">🚀</span>
          <h3 className="text-4xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2027</h3>
          <span className="text-4xl animate-bounce">🚀</span>
        </div>
        <p className="text-2xl opacity-95 mb-8 max-w-6xl mx-auto">
          Experience the most advanced technological breakthroughs that will reshape the future of humanity
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mb-8">
          <a href="/pages/UltimateTechRevolution2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
            🚀 Ultimate Tech Revolution 2027 →
          </a>
          <a href="/pages/RevolutionaryAIBreakthrough2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
            🧠 Revolutionary AI Breakthrough 2027 →
          </a>
          <a href="/pages/NextGenSpaceTech2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
            🌌 Next-Gen Space Tech 2027 →
          </a>
        </div>
        <div className="text-center">
          <p className="text-lg opacity-80 mb-4">
            🎯 Limited Time: Get early access to the most revolutionary content of 2027
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-bold text-lg">
              Explore All Content →
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-bold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;