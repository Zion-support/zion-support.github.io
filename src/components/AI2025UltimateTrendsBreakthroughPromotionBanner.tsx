import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2025UltimateTrendsBreakthroughPromotionBanner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-12 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-2 bg-red-500 text-white text-sm font-bold rounded-full mb-6 shadow-lg animate-pulse">
            🚀 BREAKTHROUGH CONTENT JUST RELEASED
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            AI 2025 Ultimate Trends
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mt-2">
              Breakthrough Revolution
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI trends transforming every industry in 2025. 
            From quantum-neural fusion to consciousness AI - delivering 
            <span className="font-bold text-yellow-400"> 15,000% ROI</span> and beyond.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">⚛️</div>
              <h3 className="font-bold text-lg mb-1">Quantum-Neural Fusion</h3>
              <p className="text-blue-100 text-sm">15,000% ROI Achieved</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-bold text-lg mb-1">Neural Interfaces</h3>
              <p className="text-blue-100 text-sm">99.7% Accuracy Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="font-bold text-lg mb-1">Autonomous Systems</h3>
              <p className="text-blue-100 text-sm">10,000x Faster Processing</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog/ai-2025-ultimate-trends-breakthrough"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 Read Breakthrough Trends
            </a>
            <a 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🏆 View 15,000% ROI Success
            </a>
            <a 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📚 Get Implementation Toolkit
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Proven by Fortune 500 Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>15,000% Average ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Industry-Leading Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}