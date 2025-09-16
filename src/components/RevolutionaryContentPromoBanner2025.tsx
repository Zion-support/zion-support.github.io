import React from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentPromoBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl p-8 mb-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold mb-4">
              🚀 BREAKTHROUGH 2025
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Revolutionary Tech
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Breakthrough Content
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-6 max-w-2xl">
              Discover the most revolutionary technological breakthroughs of 2025. 
              From quantum consciousness to synthetic intelligence - the future is here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/revolutionary-tech-breakthrough-2025"
                className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Explore Breakthrough
              </Link>
              <Link 
                to="/quantum-consciousness-revolution-2025"
                className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-white/30 transition-all duration-300"
              >
                Quantum Consciousness
              </Link>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-white font-bold mb-2">Quantum Neural Networks</h3>
              <p className="text-white/80 text-sm">Process information at quantum speeds</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="text-white font-bold mb-2">Synthetic Intelligence</h3>
              <p className="text-white/80 text-sm">AI that evolves beyond human limits</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🌌</div>
              <h3 className="text-white font-bold mb-2">Interdimensional Computing</h3>
              <p className="text-white/80 text-sm">Access infinite computational dimensions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-white font-bold mb-2">Consciousness Transfer</h3>
              <p className="text-white/80 text-sm">Digital immortality achieved</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-1">10,000%</div>
              <div className="text-white/80 text-sm">Computing Power</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">∞</div>
              <div className="text-white/80 text-sm">Possibilities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-white/80 text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">2025</div>
              <div className="text-white/80 text-sm">Future is Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentPromoBanner2025;