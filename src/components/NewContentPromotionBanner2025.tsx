import React from 'react';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-8 mb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover our latest innovative content featuring cutting-edge AI solutions, quantum computing breakthroughs, and neural interface technologies that are reshaping the future.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI Solutions 2025</h3>
              <p className="text-purple-100 text-sm mb-4">
                Revolutionary AI technologies that transform businesses
              </p>
              <a href="/pages/RevolutionaryAISolutions2025" className="text-purple-300 hover:text-purple-200 font-semibold text-sm">
                Explore AI Solutions →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Quantum Computing</h3>
              <p className="text-cyan-100 text-sm mb-4">
                Next-generation quantum computing solutions
              </p>
              <a href="/pages/QuantumComputingRevolution2025" className="text-cyan-300 hover:text-cyan-200 font-semibold text-sm">
                Discover Quantum →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🧬</div>
              <h3 className="text-xl font-bold mb-2">Neural Interfaces</h3>
              <p className="text-emerald-100 text-sm mb-4">
                Direct brain-computer interface technologies
              </p>
              <a href="/pages/NeuralInterfaceRevolution2025" className="text-emerald-300 hover:text-emerald-200 font-semibold text-sm">
                Explore Neural →
              </a>
            </div>
          </div>
          
          <div className="mt-8">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg mr-4">
              View All New Content
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Get Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2025;