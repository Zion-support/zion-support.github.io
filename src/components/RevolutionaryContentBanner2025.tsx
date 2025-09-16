import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-y-1"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY BREAKTHROUGH • JANUARY 2025
          </div>
          
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Tech Breakthrough
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Witness the most groundbreaking technological breakthroughs that will revolutionize every aspect of human life
          </p>
          
          {/* Revolutionary Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="text-2xl font-bold mb-3">Neural Interface Revolution</h3>
              <p className="text-indigo-100 mb-4">Direct brain-computer interfaces for seamless human-digital communication</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-indigo-300">Processing Speed:</span>
                  <span className="text-white font-bold">1,000x Faster</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-300">Latency:</span>
                  <span className="text-white font-bold">0.001ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-300">Memory:</span>
                  <span className="text-white font-bold">Unlimited</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold mb-3">Quantum Wave Computing</h3>
              <p className="text-purple-100 mb-4">Revolutionary quantum wave processing for infinite computational possibilities</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-purple-300">Qubits:</span>
                  <span className="text-white font-bold">∞ Entangled</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300">Power:</span>
                  <span className="text-white font-bold">Exponential</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300">Solving:</span>
                  <span className="text-white font-bold">Instant</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              ⚡ Experience Breakthrough →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🚀 Join Revolution →
            </a>
          </div>
          
          {/* Success Metrics */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">99.9%</div>
              <div className="text-sm text-indigo-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">∞</div>
              <div className="text-sm text-purple-300">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">24/7</div>
              <div className="text-sm text-pink-300">Operation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">100%</div>
              <div className="text-sm text-cyan-300">Revolutionary</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;