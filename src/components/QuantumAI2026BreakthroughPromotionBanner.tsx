import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function QuantumAI2026BreakthroughPromotionBanner() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">⚛️ QUANTUM REVOLUTION</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Quantum AI 2026 Breakthrough
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the revolutionary fusion of quantum computing and artificial intelligence. 
            Unlock unprecedented computational power and solve impossible problems.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold mb-2">Exponential Speed</h3>
              <p className="text-sm opacity-80">10^15x faster than classical computers</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🔮</div>
              <h3 className="font-semibold mb-2">Quantum ML</h3>
              <p className="text-sm opacity-80">Revolutionary machine learning algorithms</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold mb-2">Complex Optimization</h3>
              <p className="text-sm opacity-80">Solve NP-hard problems in polynomial time</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quantum-ai-2026-breakthrough"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Quantum AI →
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-all"
            >
              Get Started
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-sm opacity-70">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              <span>10^15x Speed Boost</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              <span>NP-Hard Problem Solving</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              <span>99.9% Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}