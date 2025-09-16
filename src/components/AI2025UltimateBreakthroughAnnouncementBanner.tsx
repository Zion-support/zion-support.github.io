import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2025UltimateBreakthroughAnnouncementBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-500/20 border border-red-500/30 mb-8 animate-bounce">
            <span className="text-red-400 font-bold text-sm uppercase tracking-wider">
              🚀 BREAKTHROUGH ANNOUNCEMENT
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl font-semibold mb-4 text-blue-200">
            Revolutionary Technology Delivering
          </p>
          
          {/* ROI highlight */}
          <div className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
            5,000% ROI
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            The most advanced AI technology ever createdcombining synthetic intelligence
            quantum computing fusionand autonomous operations to deliver unprecedented 
            business transformation and ROI.
          </p>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2 text-purple-400">Synthetic Intelligence</h3>
              <p className="text-sm text-gray-300">99.9% accuracy autonomous decision-making</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 p-6 rounded-xl border border-blue-500/30">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2 text-cyan-400">Quantum Fusion</h3>
              <p className="text-sm text-gray-300">10,000x faster processing power</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-6 rounded-xl border border-green-500/30">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2 text-green-400">Autonomous Operations</h3>
              <p className="text-sm text-gray-300">99.9% uptime self-healing systems</p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/ai-2025-ultimate-breakthrough-announcement"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More
            </a>
            <a 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Success Stories
            </a>
            <a 
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>5,000% ROI Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Fortune 500 Proven</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>8-Week Implementation</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/10 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/10 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500/10 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-cyan-500/10 rounded-full animate-ping delay-3000"></div>
      </div>
    </div>
  );
}