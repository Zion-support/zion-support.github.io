import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ArrowRightBrainCpuZapTrendingUpGlobe

export default function AI2026FuturePredictionsRevolutionaryBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 border border-cyan-500/30 rounded-2xl mb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
      
      <div className="relative z-10 p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-sm">
                <Brain className="w-4 h-4 mr-1" />
                REVOLUTIONARY
              </div>
              <div className="text-cyan-400 text-sm font-semibold">
                AI 2026 Future Predictions
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Revolutionary AI 2026 Predictions
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                That Will Change Everything
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Discover the most accurate and revolutionary AI predictions for 2026. 
              Prepare your business for the <span className="text-cyan-400 font-bold">quantum leap</span> in artificial intelligence.
            </p>
            
            {/* Key predictions */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-white">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold">Quantum-Neural Fusion</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold">10,000x Speed</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold">50,000% ROI</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold">Global Impact</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/ai-2026-future-predictions-revolutionary"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Explore Predictions
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="/ai-2026-quantum-neural-fusion"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-colors duration-300"
              >
                Quantum Fusion
              </a>
            </div>
          </div>
          
          {/* Right content - Visual elements */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-cyan-400/30 to-purple-600/30 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400/40 to-purple-600/40 rounded-full flex items-center justify-center">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Floating prediction elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce flex items-center justify-center">
                <Cpu className="w-4 h-4 text-black" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                <Zap className="w-3 h-3 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-600 rounded-full animate-bounce flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <TrendingUp className="w-2 h-2 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400"></div>
    </div>
  );
}