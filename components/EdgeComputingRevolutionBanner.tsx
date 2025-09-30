import React from 'react';
import Link from 'next/link';
import { Zap, ArrowRight, TrendingUp } from 'lucide-react';

export default function EdgeComputingRevolutionBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full text-sm font-bold animate-bounce">
                🚀 JUST RELEASED
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold">
                September 2025
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              AI Edge Computing Revolution 2026
            </h2>
            
            <p className="text-xl mb-6 opacity-95 leading-relaxed">
              Discover how edge computing is delivering sub-20ms latency, 90% cost reduction, 
              and unprecedented scalability. The future of real-time AI intelligence.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">Sub-20ms</div>
                <div className="text-sm opacity-90">Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">90%</div>
                <div className="text-sm opacity-90">Cost Cut</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">1000x</div>
                <div className="text-sm opacity-90">Scale</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-edge-computing-revolution-2026"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl group"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Read Full Article
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Get Started Today
              </a>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Real-Time Processing</div>
                    <div className="text-sm text-white/80">Sub-20ms response times</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">90% Cost Reduction</div>
                    <div className="text-sm text-white/80">Massive cloud savings</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">1000x Scalability</div>
                    <div className="text-sm text-white/80">Unlimited edge nodes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}