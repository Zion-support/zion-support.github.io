import React from 'react';
import Link from 'next/link';

export default function NewContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8 animate-pulse">
            <span className="text-green-400 font-bold text-xl tracking-wider uppercase">
              ✨ NEW 2026 CONTENT SHOWCASE
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Content & Success Stories
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-5xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories that are reshaping businesses in 2026
          </p>
          
          {/* Key Content Areas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">$50B+</div>
              <div className="text-xs text-green-300">Success Stories</div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30">
              <div className="text-2xl font-extrabold text-emerald-400 mb-1">99.9%</div>
              <div className="text-xs text-emerald-300">AI Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30">
              <div className="text-2xl font-extrabold text-teal-400 mb-1">10,000x</div>
              <div className="text-xs text-teal-300">Performance</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">2026</div>
              <div className="text-xs text-cyan-300">Breakthroughs</div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Explore All AI Content →
            </Link>
            <Link 
              href="/case-studies" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              View Success Stories →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Your AI Strategy
            </Link>
          </div>
          
          {/* Featured Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI Future Enterprise 2026</h3>
                  <p className="text-sm text-gray-400">Complete transformation blueprint</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Discover the revolutionary AI technologies reshaping enterprise operations in 2026. 
                From autonomous systems to quantum computing, learn how to build the future-ready enterprise.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">45 min read</div>
                <Link
                  href="/blog/ai-future-enterprise-2026"
                  className="text-green-400 font-semibold hover:text-green-300 transition-colors"
                >
                  Read Blueprint →
                </Link>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Next-Gen AI Automation</h3>
                  <p className="text-sm text-gray-400">99% automation rate</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Discover next-generation AI automation technologies reshaping enterprise operations. 
                From cognitive automation to autonomous decision-making, achieve 99% automation.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">28 min read</div>
                <Link
                  href="/blog/ai-next-generation-automation-2026"
                  className="text-green-400 font-semibold hover:text-green-300 transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">$100M Success Story</h3>
                  <p className="text-sm text-gray-400">Revolutionary transformation</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                See how a Fortune 500 company achieved $100M ROI with revolutionary AI transformation. 
                99.9% uptime, 98% automation, and complete business revolution.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">35 min read</div>
                <Link
                  href="/case-studies/ai-revolutionary-transformation-2026"
                  className="text-green-400 font-semibold hover:text-green-300 transition-colors"
                >
                  View Success Story →
                </Link>
              </div>
            </div>
          </div>
          
          {/* Impact Summary */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Transform Your Business with Revolutionary AI
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$50B+</div>
                <div className="text-sm text-green-300">Total Value Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
                <div className="text-sm text-emerald-300">AI Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">10,000x</div>
                <div className="text-sm text-teal-300">Performance Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">2026</div>
                <div className="text-sm text-cyan-300">Breakthrough Year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}