import React from 'react';
import Link from 'next/link';

export default function January2026EdgeNativeIntelligenceBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🚀 NEW JANUARY 2026
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              50x PERFORMANCE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI 2026: Edge-Native Intelligence Revolution
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto mb-6">
            Discover how edge-native AI is delivering 50x performance improvements with sub-10ms latency, 
            revolutionizing real-time decision making across industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-cyan-300 font-semibold">50x Faster Processing</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-green-300 font-semibold">Sub-10ms Latency</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-yellow-300 font-semibold">99.9% Uptime</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-purple-300 font-semibold">Zero Data Transmission</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Revolutionary Performance</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>50x faster processing vs cloud-based AI</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Sub-10ms latency for real-time decisions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>99.9% uptime with offline capability</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>90% reduction in bandwidth requirements</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-green-300">Industry Applications</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">🏭</span>
                <span>Manufacturing: $50M+ annual savings</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">🏥</span>
                <span>Healthcare: Sub-5ms vital sign analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">🚗</span>
                <span>Autonomous Vehicles: Safety-critical decisions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">🏢</span>
                <span>Enterprise: Real-time optimization</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link 
              href="/blog/ai-2026-edge-native-intelligence-revolution"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Read Full Article
              <span className="text-xl">→</span>
            </Link>
            <Link 
              href="/case-studies/ai-2026-edge-native-intelligence-mega-success"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View $500M Success Story
              <span className="text-xl">→</span>
            </Link>
          </div>
          <p className="text-blue-200 text-sm">
            Join 1000+ companies already using edge-native AI to achieve 50x performance improvements
          </p>
        </div>
      </div>
    </section>
  );
}