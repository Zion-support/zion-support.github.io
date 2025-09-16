import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2025GlobalTransformation15000ROIPromotionBanner() {
  return (
    <section className="relative bg-gradient-to-r from-green-600 via-blue-600 to-purple-700 text-white py-12 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-6 left-6 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-6 left-12 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
        <div className="absolute bottom-12 right-6 w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-2 bg-red-500 text-white text-sm font-bold rounded-full mb-6 shadow-lg animate-pulse">
            🏆 BREAKTHROUGH SUCCESS STORY
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Fortune 500 Company Achieves
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mt-2">
              15,000% ROI
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto leading-relaxed">
            Discover how a global enterprise transformed their operations with our revolutionary AI solutions
            achieving unprecedented results in just 6 months.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-1">15,000%</div>
              <div className="text-green-100 text-sm font-semibold">ROI Achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-1">99.9%</div>
              <div className="text-green-100 text-sm font-semibold">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-1">10,000x</div>
              <div className="text-green-100 text-sm font-semibold">Faster Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-1">$7.5B</div>
              <div className="text-green-100 text-sm font-semibold">Annual Savings</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🏆 Read Full Success Story
            </a>
            <a 
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              💬 Start Your Transformation
            </a>
            <a 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📚 Get Implementation Guide
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-green-200 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✓</span>
              <span>Fortune 500 Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✓</span>
              <span>6-Month Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✓</span>
              <span>Global Scale Success</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}