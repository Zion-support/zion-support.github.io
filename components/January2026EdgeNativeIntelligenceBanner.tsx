import React from 'react';
import Link from 'next/link';

export default function January2026EdgeNativeIntelligenceBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 border-t border-b border-blue-500/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🚀 JANUARY 2026 BREAKTHROUGH
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              50x PERFORMANCE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Edge-Native Intelligence Revolution
          </h2>
          <p className="text-xl text-blue-200 mb-6 max-w-4xl mx-auto">
            Revolutionary edge AI achieving 50x performance improvements with sub-10ms latency 
            and 99.9% uptime across distributed networks. Transform your operations today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">50x Performance</h3>
                <p className="text-blue-200 text-sm">Sub-10ms latency</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Achieve unprecedented performance with Edge-Native Intelligence. 
              Process data 50x faster than traditional edge computing while maintaining 
              sub-10ms latency for real-time decision making.
            </p>
            <Link 
              href="/blog/ai-2026-edge-native-intelligence-breakthrough"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all"
            >
              Learn More <span>→</span>
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">$3.5B ROI Success</h3>
                <p className="text-green-200 text-sm">Fortune 100 Case Study</p>
              </div>
            </div>
            <p className="text-green-100 mb-4">
              See how a Fortune 100 manufacturing giant achieved $3.5B ROI in just 18 months 
              with Edge-Native Intelligence across 500+ facilities worldwide.
            </p>
            <Link 
              href="/case-studies/ai-2026-edge-native-intelligence-mega-success"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all"
            >
              View Success Story <span>→</span>
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-blue-200 text-sm">Uptime</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-blue-200 text-sm">Cost Reduction</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10x</div>
              <div className="text-blue-200 text-sm">Energy Efficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}