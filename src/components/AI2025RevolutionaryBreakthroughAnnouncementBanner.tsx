import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2025RevolutionaryBreakthroughAnnouncementBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Breaking news badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-500/20 border border-red-500/30 mb-8 animate-bounce">
            <span className="text-red-400 font-bold text-sm uppercase tracking-wide">
              🚀 BREAKING: REVOLUTIONARY AI 2025 BREAKTHROUGH ANNOUNCED
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI 2025 Revolutionary Breakthrough
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience unprecedented 
            <span className="text-yellow-400 font-bold"> 15,000% ROI</span> with the most 
            revolutionary AI breakthrough in history. Limited exclusive access available.
          </p>

          {/* Key benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Transcendent Intelligence</h3>
              <p className="text-sm text-gray-300">99.9% accuracy in complex decision-making</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-2">Quantum Processing</h3>
              <p className="text-sm text-gray-300">10,000x faster than traditional systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold mb-2">15,000% ROI</h3>
              <p className="text-sm text-gray-300">Proven results across 500+ enterprises</p>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/ai-2025-revolutionary-breakthrough-announcement"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Discover the Breakthrough
            </a>
            <a 
              href="/case-studies/ai-2025-revolutionary-breakthrough-success"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            >
              📊 View Success Stories
            </a>
          </div>

          {/* Urgency indicator */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30">
            <span className="text-yellow-400 font-semibold text-sm">
              ⏰ Limited Time: Exclusive access available for next 48 hours
            </span>
          </div>
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-500/20 rounded-full animate-pulse delay-500"></div>
    </div>
  );
}