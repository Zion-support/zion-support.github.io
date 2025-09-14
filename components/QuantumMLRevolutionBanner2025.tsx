import React from 'react';
import Link from 'next/link';

const QuantumMLRevolutionBanner2025 = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Quantum Circuit Animation */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-20">
        <div className="w-full h-full border-2 border-cyan-400 rounded-full animate-spin">
          <div className="w-3 h-3 bg-cyan-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"></div>
          <div className="w-3 h-3 bg-indigo-400 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
            <span className="mr-2">⚡</span>
            QUANTUM ML REVOLUTION 2025-2026
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quantum Machine Learning
            </span>
            <br />
            <span className="text-white">
              Breakthrough
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Unlock <span className="text-cyan-400 font-semibold">5000% ROI</span> with quantum-enhanced AI that processes data 
            <span className="text-purple-400 font-semibold"> 10,000x faster</span> than classical computers
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold mb-2">Exponential Speedup</h3>
              <p className="text-sm text-gray-300">Process complex optimization problems 10,000x faster than classical computers</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Enhanced Intelligence</h3>
              <p className="text-sm text-gray-300">Quantum neural networks process exponentially more complex data relationships</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold mb-2">Proven ROI</h3>
              <p className="text-sm text-gray-300">Fortune 500 companies achieving 5000% ROI with quantum ML implementation</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-2026-quantum-machine-learning-breakthrough"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Quantum ML Guide
            </Link>
            <Link
              href="/case-studies/ai-2025-2026-quantum-ml-fortune-500-5000-roi-success"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View Success Stories
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Fortune 500 Proven
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              5000% ROI Achieved
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Production Ready
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Expert Implementation
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-10 w-5 h-5 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default QuantumMLRevolutionBanner2025;