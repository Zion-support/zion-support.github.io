import React from 'react';
import Link from 'next/link';

export default function January2026RevolutionaryBreakthroughsBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 January 2026 Revolutionary Breakthroughs
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Two Revolutionary AI Breakthroughs
          </h1>
          
          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-semibold max-w-5xl mx-auto">
            Adaptive Neural Architectures + Cognitive Automation = $40.5B+ Combined Enterprise Value
          </p>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Adaptive Neural Architectures */}
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Adaptive Neural Architectures</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Performance Boost:</span>
                    <span className="text-purple-400 font-bold">100,000x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Accuracy:</span>
                    <span className="text-purple-400 font-bold">99.99%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Proven ROI:</span>
                    <span className="text-purple-400 font-bold">$15.2B</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link 
                    href="/blog/ai-2026-adaptive-neural-architectures-breakthrough" 
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                  >
                    Read Breakthrough →
                  </Link>
                  <Link 
                    href="/case-studies/ai-2026-adaptive-neural-architectures-15-billion-success" 
                    className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-2 px-6 rounded-xl transition-all duration-300"
                  >
                    View Success Story
                  </Link>
                </div>
              </div>
            </div>

            {/* Cognitive Automation */}
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-green-300 mb-4">Cognitive Automation</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Autonomous Operations:</span>
                    <span className="text-green-400 font-bold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Process Efficiency:</span>
                    <span className="text-green-400 font-bold">1000x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Proven ROI:</span>
                    <span className="text-green-400 font-bold">$25.3B</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link 
                    href="/blog/ai-2026-cognitive-automation-revolution" 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50"
                  >
                    Read Revolution →
                  </Link>
                  <Link 
                    href="/case-studies/ai-2026-cognitive-automation-25-billion-success" 
                    className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-2 px-6 rounded-xl transition-all duration-300"
                  >
                    View Success Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Combined Value Proposition */}
          <div className="bg-gradient-to-r from-purple-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Combined Revolutionary Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-purple-400 mb-2">$40.5B</div>
                <div className="text-sm text-purple-300">Combined ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-400 mb-2">100,000x</div>
                <div className="text-sm text-indigo-300">Performance Boost</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-green-400 mb-2">99.9%</div>
                <div className="text-sm text-green-300">Autonomous Operations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-blue-400 mb-2">99.99%</div>
                <div className="text-sm text-blue-300">Accuracy Rate</div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Get Implementation Guide
            </Link>
            <Link 
              href="/services" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              View All Services
            </Link>
            <Link 
              href="/blog" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore All Breakthroughs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}