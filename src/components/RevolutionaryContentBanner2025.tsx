import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <span className="text-4xl animate-bounce">🌟</span>
          <h3 className="text-4xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2025</h3>
          <span className="text-4xl animate-bounce">🌟</span>
        </div>
        <p className="text-2xl opacity-95 mb-8 max-w-6xl mx-auto">
          Experience the most advanced technology content featuring Ultimate Tech Revolution, 
          Revolutionary AI Breakthrough, Next-Gen Space Tech, Quantum Reality Engine, Neural Interface Technology, and Advanced Biotech Revolution
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mb-8">
          <a href="/pages/UltimateTechRevolution2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
            🌟 Ultimate Tech Revolution →
          </a>
          <a href="/pages/RevolutionaryAIBreakthrough2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
            🧠 Revolutionary AI Breakthrough →
          </a>
          <a href="/pages/NextGenSpaceTech2032" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
            🚀 Next-Gen Space Tech →
          </a>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/pages/ComprehensiveServices2025" className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30 hover:scale-105">
            🌟 Explore All Revolutionary Content →
          </a>
          <a href="/pages/UltimateTechRevolution2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg border border-white/30 hover:scale-105">
            🚀 Start Your Journey →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;