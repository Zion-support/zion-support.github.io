import React from 'react';
import Link from 'next/link';

export default function AI2026RevolutionaryContentBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-lg">REVOLUTIONARY AI CONTENT 2026</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Revolutionary AI Breakthroughs
            </span>
            <br />
            <span className="text-white">Transforming Enterprise</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-5xl mx-auto leading-relaxed">
            Experience the future of AI with our latest breakthrough content. From neural superintelligence 
            to quantum computing, discover how these revolutionary technologies are reshaping business forever.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Main Featured Content */}
          <div className="space-y-8">
            <Link href="/blog/ai-2026-revolutionary-breakthroughs" className="group block">
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      BREAKTHROUGH ARTICLE
                    </span>
                    <p className="text-sm opacity-75 mt-1">25 min read</p>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                  AI 2026 Revolutionary Breakthroughs: The Future of Enterprise Intelligence
                </h3>
                
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  Discover the groundbreaking AI innovations of 2026 that are reshaping enterprise operations, 
                  achieving unprecedented efficiency gains, and unlocking new possibilities for business transformation.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-300 mb-1">95%</div>
                    <div className="text-xs opacity-75">Neural Superintelligence Accuracy</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-orange-300 mb-1">1000x</div>
                    <div className="text-xs opacity-75">Quantum AI Speed Boost</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-300 mb-1">80%</div>
                    <div className="text-xs opacity-75">Autonomous Systems Efficiency</div>
                  </div>
                </div>
                
                <div className="flex items-center text-yellow-300 font-bold text-lg group-hover:text-yellow-200 transition-colors">
                  Explore Revolutionary Breakthroughs →
                </div>
              </div>
            </Link>
          </div>

          {/* Secondary Content Grid */}
          <div className="space-y-6">
            <Link href="/blog/ai-trends-2026-comprehensive-guide" className="group block">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
                    <span className="text-xl">📊</span>
                  </div>
                  <div>
                    <span className="bg-blue-400 text-black px-2 py-1 rounded text-xs font-bold">
                      COMPREHENSIVE GUIDE
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                  AI Trends 2026: Complete Enterprise Transformation Guide
                </h4>
                <p className="text-sm opacity-90 mb-4">
                  Navigate the rapidly evolving AI landscape with proven strategies, implementation roadmaps, and ROI frameworks.
                </p>
                <div className="flex items-center text-blue-300 font-semibold">
                  Read Complete Guide →
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-transformation-mega-success-2026" className="group block">
              <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl flex items-center justify-center">
                    <span className="text-xl">💰</span>
                  </div>
                  <div>
                    <span className="bg-green-400 text-black px-2 py-1 rounded text-xs font-bold">
                      SUCCESS STORY
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                  $50M ROI in 12 Months: Fortune 500 AI Transformation Success
                </h4>
                <p className="text-sm opacity-90 mb-4">
                  Discover how a Fortune 500 company achieved unprecedented results through comprehensive AI transformation.
                </p>
                <div className="flex items-center text-green-300 font-semibold">
                  View Success Story →
                </div>
              </div>
            </Link>

            <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <span className="bg-pink-400 text-black px-2 py-1 rounded text-xs font-bold">
                    COMING SOON
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">
                AI 2027 Predictions: The Next Frontier
              </h4>
              <p className="text-sm opacity-90 mb-4">
                Get early access to our predictions for AI trends in 2027. Subscribe to be notified when released.
              </p>
              <div className="flex items-center text-pink-300 font-semibold">
                Get Early Access →
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-10 py-5 rounded-2xl font-bold text-xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Explore All Revolutionary Content
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-indigo-900 transition-all duration-300 backdrop-blur-sm"
            >
              Transform Your Business
            </Link>
          </div>
          
          <div className="mt-8 flex justify-center items-center gap-8 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Latest AI Innovations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>Proven Success Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Expert Implementation Guides</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}