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
              <div className="text-blue-200 text-sm">Privacy Safe</div>
            </div>
          </div>

          {/* Featured content grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link href="/blog/ai-neural-interfaces-2026" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                      AI Neural Interfaces
                    </h3>
                    <p className="text-blue-200 text-sm">Brain-Computer Integration</p>
                  </div>
                </div>
                <p className="text-blue-100 text-sm mb-4">
                  Revolutionary brain-computer interfaces with 95% accuracy and real-time processing capabilities.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-300">28 min read</span>
                  <span className="text-yellow-400 font-semibold text-sm group-hover:text-white transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-space-tech-2026" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                      AI Space Technology
                    </h3>
                    <p className="text-blue-200 text-sm">Autonomous Space Operations</p>
                  </div>
                </div>
                <p className="text-blue-100 text-sm mb-4">
                  Autonomous space operations and interplanetary AI with 99.9% reliability and $2B cost savings.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-300">32 min read</span>
                  <span className="text-yellow-400 font-semibold text-sm group-hover:text-white transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-synthetic-data-2026" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                      AI Synthetic Data
                    </h3>
                    <p className="text-blue-200 text-sm">Privacy-Preserving AI</p>
                  </div>
                </div>
                <p className="text-blue-100 text-sm mb-4">
                  Privacy-preserving AI training with 99% accuracy and complete data protection.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-300">25 min read</span>
                  <span className="text-yellow-400 font-semibold text-sm group-hover:text-white transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🚀 Explore All 2026 Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              📊 View Success Stories
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 text-sm mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-white">Fortune 500</div>
              <div className="text-2xl font-bold text-white">NASA</div>
              <div className="text-2xl font-bold text-white">SpaceX</div>
              <div className="text-2xl font-bold text-white">Tesla</div>
              <div className="text-2xl font-bold text-white">Microsoft</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}