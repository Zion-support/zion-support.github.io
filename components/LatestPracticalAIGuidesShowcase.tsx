import React from 'react';

export default function LatestPracticalAIGuidesShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 mb-6">
              <span className="text-2xl">🎯</span>
              <span className="text-blue-400 font-bold text-lg tracking-wide uppercase">
                Latest from Zion Tech Group
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Production AI Excellence
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Essential technical guides from teams running AI at scale—real patterns, real code, real results
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 text-center">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">94%</div>
              <div className="text-sm text-blue-300">Task Completion Rate</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30 text-center">
              <div className="text-3xl font-extrabold text-indigo-400 mb-2">2B+</div>
              <div className="text-sm text-indigo-300">Daily LLM Requests</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 text-center">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">&lt;100ms</div>
              <div className="text-sm text-purple-300">Vector Query Latency</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30 text-center">
              <div className="text-3xl font-extrabold text-pink-400 mb-2">$127M</div>
              <div className="text-sm text-pink-300">Client Value Generated</div>
            </div>
          </div>

          {/* Content Cards */}
          <div className="space-y-8 mb-12">
            {/* Card 1 */}
            <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-24 flex-shrink-0">
                  <div className="text-7xl">🤖</div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-xs font-semibold uppercase">
                      Multi-Agent Systems
                    </span>
                    <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-xs font-semibold uppercase">
                      Production Patterns
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Agentic Orchestration Patterns for Enterprise
                  </h3>
                  <p className="text-gray-300 text-lg mb-4">
                    Learn how to orchestrate 10+ specialized AI agents with proven patterns from Fortune 500 
                    financial services implementations achieving 94% task completion rates and $127M in fraud prevention.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 mb-6">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-blue-400 font-bold text-lg">3 Patterns</div>
                      <div className="text-gray-400 text-sm">Hierarchical, P2P, Event-driven</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-indigo-400 font-bold text-lg">Real Case Study</div>
                      <div className="text-gray-400 text-sm">Top-5 US Bank implementation</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-purple-400 font-bold text-lg">Production Code</div>
                      <div className="text-gray-400 text-sm">Circuit breakers, monitoring</div>
                    </div>
                  </div>
                  <a 
                    href="/blog/ai-2025-sept-30-agentic-orchestration-patterns"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                  >
                    Read Complete Guide
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-24 flex-shrink-0">
                  <div className="text-7xl">📊</div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-xs font-semibold uppercase">
                      LLM Operations
                    </span>
                    <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-xs font-semibold uppercase">
                      Monitoring Framework
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Production LLM Observability Framework
                  </h3>
                  <p className="text-gray-300 text-lg mb-4">
                    Complete monitoring framework for LLMs processing 2B+ daily requests. Covers performance, 
                    quality, cost, and security with battle-tested patterns and $2.3M proven savings.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 mb-6">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-indigo-400 font-bold text-lg">4 Pillars</div>
                      <div className="text-gray-400 text-sm">Performance, Quality, Cost, Security</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-purple-400 font-bold text-lg">47% Reduction</div>
                      <div className="text-gray-400 text-sm">In escalations via monitoring</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-pink-400 font-bold text-lg">Open Source</div>
                      <div className="text-gray-400 text-sm">Complete stack & code examples</div>
                    </div>
                  </div>
                  <a 
                    href="/blog/ai-2025-sept-30-production-llm-observability"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
                  >
                    Explore Framework
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-24 flex-shrink-0">
                  <div className="text-7xl">⚡</div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-xs font-semibold uppercase">
                      Vector Databases
                    </span>
                    <span className="bg-pink-500/20 px-3 py-1 rounded-full text-pink-300 text-xs font-semibold uppercase">
                      Performance Optimization
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Vector Database Performance: The Complete Guide
                  </h3>
                  <p className="text-gray-300 text-lg mb-4">
                    Master vector database optimization for sub-100ms queries at 500M+ vector scale. 
                    Real techniques from Fortune 500 e-commerce achieving 12.8x speedup and 62% cost reduction.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 mb-6">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-purple-400 font-bold text-lg">12.8x Faster</div>
                      <div className="text-gray-400 text-sm">P50 latency improvement</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-pink-400 font-bold text-lg">62% Savings</div>
                      <div className="text-gray-400 text-sm">Cost optimization achieved</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-rose-400 font-bold text-lg">500M Vectors</div>
                      <div className="text-gray-400 text-sm">At sub-100ms latency</div>
                    </div>
                  </div>
                  <a 
                    href="/blog/ai-2025-sept-30-vector-database-performance-guide"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                  >
                    Master Optimization
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-xl rounded-2xl p-10 border border-blue-500/30 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Help Implementing These Patterns?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team has implemented these exact patterns for Fortune 500 companies. 
              Get a free consultation to discuss your production AI challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Schedule Consultation
              </a>
              <a 
                href="/blog"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Explore All Articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
