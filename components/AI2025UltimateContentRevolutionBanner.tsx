import React from 'react';
import Link from 'next/link';

const AI2025UltimateContentRevolutionBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 NEW BREAKTHROUGH</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            AI 2025 Ultimate Content Revolution
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200">
            The breakthrough 'that', 's transforming businesses worldwide with 
            <span className="text-yellow-400 font-bold"> 5,000% ROI</span> and 
            <span className="text-green-400 font-bold"> 98% efficiency gains</span>
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5,000%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-sm text-gray-300">Time Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">47</div>
              <div className="text-sm text-gray-300">Countries Served</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/case-studies/ai-2025-ultimate-content-revolution-5000-roi-success"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Success Story
            </Link>
            <Link
              href="/blog/ai-2025-ultimate-content-revolution-breakthrough"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Read Full Article
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Now
            </Link>
          </div>
        </div>
        
        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-lg font-bold mb-2">Quantum-Neural Fusion</h3>
            <p className="text-sm text-gray-300">1000x faster processing with quantum-enhanced AI</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-bold mb-2">Autonomous Creation</h3>
            <p className="text-sm text-gray-300">Zero human intervention for routine content</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-lg font-bold mb-2">Global Scale</h3>
            <p className="text-sm text-gray-300">47 countries, 23 languages, unlimited reach</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-lg font-bold mb-2">Real-time Optimization</h3>
            <p className="text-sm text-gray-300">Continuous performance improvement</p>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 mb-4">Trusted by Fortune 500 companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">Microsoft</div>
            <div className="text-2xl font-bold">Google</div>
            <div className="text-2xl font-bold">Amazon</div>
            <div className="text-2xl font-bold">IBM</div>
            <div className="text-2xl font-bold">Oracle</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateContentRevolutionBanner;