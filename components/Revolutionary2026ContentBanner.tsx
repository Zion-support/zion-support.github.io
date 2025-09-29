import React from 'react';
import Link from 'next/link';

export default function Revolutionary2026ContentBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/30 rounded-full animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Main headline */}
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              🚀 REVOLUTIONARY 2026 CONTENT
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Future of AI is
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Here Today
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge AI innovations, neural interfaces, space technology, and synthetic data solutions 
              that are reshaping industries and creating unprecedented opportunities.
            </p>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-blue-200 text-sm">AI Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">$25M+</div>
              <div className="text-blue-200 text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-blue-200 text-sm">Productivity Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-blue-200 text-sm">Privacy Protected</div>
            </div>
          </div>

          {/* Featured content grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">Neural Interfaces</h3>
              <p className="text-blue-100 text-sm mb-4">
                Direct brain-computer communication with 99% accuracy and real-time processing.
              </p>
              <div className="text-yellow-400 font-semibold text-sm">99% Accuracy</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Space Technology</h3>
              <p className="text-blue-100 text-sm mb-4">
                Autonomous space operations with 99.9% mission success rates and interplanetary AI.
              </p>
              <div className="text-yellow-400 font-semibold text-sm">99.9% Success</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-3">Synthetic Data</h3>
              <p className="text-blue-100 text-sm mb-4">
                Privacy-preserving AI training with unlimited data generation and 100% protection.
              </p>
              <div className="text-yellow-400 font-semibold text-sm">100% Privacy</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-hub"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 text-sm mb-4">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Fortune 500</div>
              <div className="text-2xl font-bold">Space Corp</div>
              <div className="text-2xl font-bold">Health AI</div>
              <div className="text-2xl font-bold">Tech Giants</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}