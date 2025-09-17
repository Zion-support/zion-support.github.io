import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2026UltimateBreakthroughBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <span className="text-sm font-medium flex items-center">
              🚀 <span className="ml-2">AI 2026 ULTIMATE BREAKTHROUGH</span>
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The Future of AI is
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Here Now
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced AI technologies that will revolutionize your business in 2026. 
            From quantum neural networks to synthetic intelligencediscover the breakthrough solutions 
            that Fortune 500 companies are already implementing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">Quantum Neural Networks</h3>
              <p className="text-sm opacity-80">Next-generation AI that processes information at quantum speeds</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">Synthetic Intelligence</h3>
              <p className="text-sm opacity-80">AI systems that think and reason like human consciousness</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Autonomous Systems</h3>
              <p className="text-sm opacity-80">Self-managing AI that operates without human intervention</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ai-2026-ultimate-breakthrough"
              className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              Explore AI 2026 Breakthrough →
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Get Early Access
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm opacity-70">
              Join 10,000+ companies already transforming with AI 2026 technologies
            </p>
            <div className="flex justify-center items-center mt-4 space-x-8 opacity-60">
              <div className="text-xs">Microsoft</div>
              <div className="text-xs">Google</div>
              <div className="text-xs">Amazon</div>
              <div className="text-xs">Tesla</div>
              <div className="text-xs">OpenAI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026UltimateBreakthroughBanner;