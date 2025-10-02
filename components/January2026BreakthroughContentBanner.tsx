import React from 'react';
import Link from 'next/link';

export default function January2026BreakthroughContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-6 py-3 rounded-full text-lg font-bold animate-pulse shadow-lg">
              🚀 BREAKTHROUGH CONTENT — JANUARY 30, 2026
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Breakthroughs
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Now Available
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover the most advanced AI technologies of 2026-2027 with our groundbreaking new content 
            featuring quantum AI, autonomous systems, and enterprise transformation strategies.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Quantum AI Breakthrough */}
          <Link href="/blog/ai-2027-quantum-breakthrough" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                    QUANTUM BREAKTHROUGH
                  </span>
                  <h3 className="text-xl font-bold group-hover:text-yellow-300 transition-colors">
                    AI 2027: Quantum Breakthrough
                  </h3>
                </div>
              </div>
              <p className="text-purple-100 mb-4 leading-relaxed">
                1000x performance improvements with quantum neural networks and enterprise-grade quantum computing solutions.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-300">1000x</div>
                  <div className="text-xs text-purple-200">Performance</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-300">99.99%</div>
                  <div className="text-xs text-purple-200">Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-300">0.001ms</div>
                  <div className="text-xs text-purple-200">Response</div>
                </div>
              </div>
              <div className="text-sm text-purple-200 mb-4">
                25 min read • Quantum Computing & AI
              </div>
              <div className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-3 rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-colors">
                Read Quantum Breakthrough →
              </div>
            </div>
          </Link>

          {/* Next-Gen Autonomous Systems */}
          <Link href="/blog/ai-2026-next-generation-autonomous-systems" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <span className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                    AUTONOMOUS SYSTEMS
                  </span>
                  <h3 className="text-xl font-bold group-hover:text-yellow-300 transition-colors">
                    Next-Generation Autonomous Systems
                  </h3>
                </div>
              </div>
              <p className="text-purple-100 mb-4 leading-relaxed">
                99.9% reliability with self-healing capabilities, quantum-enhanced decision making, and multi-agent orchestration.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-300">99.9%</div>
                  <div className="text-xs text-purple-200">Reliability</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-300">85%</div>
                  <div className="text-xs text-purple-200">Cost ↓</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-300">8min</div>
                  <div className="text-xs text-purple-200">MTTR</div>
                </div>
              </div>
              <div className="text-sm text-purple-200 mb-4">
                20 min read • Autonomous Systems & AI
              </div>
              <div className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-3 rounded-xl font-bold hover:from-blue-600 hover:to-cyan-600 transition-colors">
                Read Autonomous Guide →
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Highlights */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-center mb-6">More Revolutionary Content Available</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/ai-2026-quantum-consciousness-breakthrough" className="group">
              <div className="text-center p-4 hover:bg-white/10 rounded-xl transition-colors">
                <div className="text-3xl mb-2">🧠</div>
                <h4 className="font-bold group-hover:text-yellow-300 transition-colors">Quantum Consciousness</h4>
                <p className="text-sm text-purple-200 mt-1">Revolutionary AI consciousness breakthrough</p>
              </div>
            </Link>
            
            <Link href="/blog/ai-2026-enterprise-automation-revolution" className="group">
              <div className="text-center p-4 hover:bg-white/10 rounded-xl transition-colors">
                <div className="text-3xl mb-2">⚙️</div>
                <h4 className="font-bold group-hover:text-yellow-300 transition-colors">Enterprise Automation</h4>
                <p className="text-sm text-purple-200 mt-1">Complete automation transformation guide</p>
              </div>
            </Link>
            
            <Link href="/blog/ai-2026-meta-cognitive-reasoning" className="group">
              <div className="text-center p-4 hover:bg-white/10 rounded-xl transition-colors">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-bold group-hover:text-yellow-300 transition-colors">Meta-Cognitive AI</h4>
                <p className="text-sm text-purple-200 mt-1">Advanced reasoning and decision making</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 text-purple-900">
            <h3 className="text-3xl font-bold mb-4">Don't Miss These Game-Changing Insights</h3>
            <p className="text-lg mb-6 opacity-90">
              Essential reading for CTOs, CIOs, and technology leaders planning their 2026-2027 AI strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-purple-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-purple-800 transition-colors shadow-lg"
              >
                Explore All Content →
              </Link>
              <Link
                href="/services"
                className="border-2 border-purple-900 text-purple-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-purple-900 hover:text-white transition-colors"
              >
                View Our Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}