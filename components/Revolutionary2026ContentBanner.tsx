import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                🚀 REVOLUTIONARY 2026
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                BREAKTHROUGH CONTENT
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Revolutionary AI Content That's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                {' '}Transforming Industries
              </span>
            </h2>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Discover the latest AI breakthroughs, quantum computing innovations, and autonomous enterprise 
              solutions that are delivering 1000x performance improvements and $10M+ ROI.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300">1000x</div>
                  <div className="text-purple-200 text-sm">Faster Processing</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-300">$12M+</div>
                  <div className="text-purple-200 text-sm">Additional Returns</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Explore Revolutionary Content</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>View Success Stories</span>
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Featured Content Cards */}
          <div className="space-y-4">
            <Link href="/blog/ai-autonomous-enterprise-2026" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    NEW 2026
                  </span>
                  <span className="text-purple-200 text-sm">Enterprise AI</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  AI Autonomous Enterprise 2026: Complete Business Transformation
                </h3>
                <p className="text-purple-100 text-sm mb-3">
                  Transform your enterprise with 95% automation efficiency and $10M+ ROI through autonomous AI operations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm">
                    <span className="text-green-300 font-bold">95% Automation</span>
                    <span className="text-yellow-300 font-bold">$10M+ ROI</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-yellow-300 transition-colors" />
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-quantum-optimization-2026" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    REVOLUTIONARY
                  </span>
                  <span className="text-purple-200 text-sm">Quantum AI</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  AI Quantum Optimization 2026: 1000x Faster Computing
                </h3>
                <p className="text-purple-100 text-sm mb-3">
                  Unlock quantum-enhanced AI optimization with 1000x performance improvements and $12M+ additional returns.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm">
                    <span className="text-purple-300 font-bold">1000x Faster</span>
                    <span className="text-green-300 font-bold">$12M+ Returns</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-yellow-300 transition-colors" />
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-quantum-optimization-2026" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    CASE STUDY
                  </span>
                  <span className="text-purple-200 text-sm">Financial Services</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  Quantum Optimization: 1000x Speed Improvement Case Study
                </h3>
                <p className="text-purple-100 text-sm mb-3">
                  See how a financial services company achieved 1000x optimization speed and $12M additional returns.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm">
                    <span className="text-orange-300 font-bold">1000x Speed</span>
                    <span className="text-green-300 font-bold">$12M Returns</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-yellow-300 transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}