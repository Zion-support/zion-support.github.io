import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const UltimateAI2026RevolutionBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-medium">🚀 AI 2026 REVOLUTION</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            The Ultimate AI Revolution
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              2026 Breakthrough
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced AI technologies that will transform your business operations, 
            deliver unprecedented ROI, and revolutionize how you work with artificial intelligence.
          </p>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-bold mb-2">Neural Superintelligence</h3>
              <p className="text-sm opacity-80">Advanced neural networks that think and learn like humans</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2">Quantum Processing</h3>
              <p className="text-sm opacity-80">Quantum-powered computing for instant complex calculations</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-2">Autonomous Systems</h3>
              <p className="text-sm opacity-80">Self-managing AI systems that optimize themselves</p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ai-2026-revolution"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Discover AI 2026 →
            </a>
            <a
              href="/ai-2026-revolution/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Try Demo
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">1000%</div>
              <div className="text-sm opacity-80">ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">99.9%</div>
              <div className="text-sm opacity-80">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">50x</div>
              <div className="text-sm opacity-80">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">24/7</div>
              <div className="text-sm opacity-80">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAI2026RevolutionBanner;