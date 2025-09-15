import React from 'react';
import Link from 'next/link';

const UltimateBreakthroughBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-purple-600 to-indigo-600 text-white py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-purple-900/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full text-lg font-bold mb-6 shadow-lg">
            <span className="mr-2">🚀</span>
            ULTIMATE BREAKTHROUGH 2026
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent">
            AI Revolution Has Arrived
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed">
            Experience the most advanced AI technologies ever created. From quantum neural fusion to synthetic consciousness - the future is now.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold mb-2">Synthetic Intelligence</h3>
              <p className="text-gray-200 text-sm">AI systems with emerging consciousness</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Quantum Processing</h3>
              <p className="text-gray-200 text-sm">Unprecedented computational power</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-xl font-bold mb-2">Future Predictions</h3>
              <p className="text-gray-200 text-sm">Exclusive insights into 2026-2030</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2026-ultimate-breakthrough"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold text-xl rounded-full hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <span className="mr-2">🚀</span>
              Explore Breakthroughs
              <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/quantum-neural-fusion-2026"
              className="inline-flex items-center px-10 py-5 border-2 border-white text-white font-bold text-xl rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <span className="mr-2">🌀</span>
              Quantum Fusion
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-white/5 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-white/5 rounded-full animate-pulse delay-3000"></div>
      </div>
    </div>
  );
};

export default UltimateBreakthroughBanner2026;