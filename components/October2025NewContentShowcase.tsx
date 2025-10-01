import React from 'react';

export default function October2025NewContentShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6 animate-pulse">
            <span className="text-purple-300 font-bold text-lg tracking-wider uppercase">
              🔥 NEW: OCTOBER 1, 2025 - LATEST CONTENT JUST PUBLISHED
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Groundbreaking AI Insights & Success Stories
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Explore the latest enterprise AI implementations, technical guides, and billion-dollar transformations
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {/* Featured Blog Post */}
          <div className="lg:col-span-1 bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider">
                📘 Technical Deep Dive
              </div>
              <div className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold">
                NEW
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
              Real-Time AI Orchestration: Enterprise Guide
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete implementation guide for deploying sub-50ms AI systems at scale. Covers architecture 
              patterns, infrastructure, model optimization, and production best practices.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="text-sm text-purple-200">Event-driven architecture patterns</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-sm text-blue-200">Microservices AI deployment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-sm text-cyan-200">Production observability & monitoring</span>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/10">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400">47ms</div>
                  <div className="text-xs text-gray-400">Median Latency</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">8-12x</div>
                  <div className="text-xs text-gray-400">Typical ROI</div>
                </div>
              </div>
            </div>

            <a
              href="/blog/ai-2025-oct-real-time-ai-orchestration-enterprise-guide"
              className="block w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-purple-500/50"
            >
              Read Full Guide →
            </a>
          </div>

          {/* Featured Case Study */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-lg rounded-3xl p-10 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-200 text-sm font-bold uppercase tracking-wider border border-cyan-400/30">
                💰 $87 BILLION SUCCESS STORY
              </div>
              <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-xs font-bold">
                JUST PUBLISHED
              </div>
            </div>

            <h3 className="text-4xl font-extrabold text-white mb-6 leading-tight">
              Pharmaceutical AI Drug Discovery: $87B Transformation
            </h3>

            <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
              Fortune 100 pharmaceutical company revolutionizes drug discovery with AI, reducing development 
              time by 65%, advancing 23 clinical candidates, and creating $87 billion in pipeline value.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
                <div className="text-4xl mb-3">⚡</div>
                <div className="text-3xl font-extrabold text-cyan-300 mb-1">65%</div>
                <div className="text-sm text-cyan-200">Faster Development</div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
                <div className="text-4xl mb-3">🔬</div>
                <div className="text-3xl font-extrabold text-blue-300 mb-1">23</div>
                <div className="text-sm text-blue-200">Clinical Candidates</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
                <div className="text-4xl mb-3">💎</div>
                <div className="text-3xl font-extrabold text-cyan-300 mb-1">$87B</div>
                <div className="text-sm text-cyan-200">Pipeline Value</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4">Key Technologies Deployed:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                    <span className="text-sm text-cyan-200 font-semibold">Graph Neural Networks</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <span className="text-sm text-blue-200 font-semibold">Generative AI Models</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                    <span className="text-sm text-cyan-200 font-semibold">Knowledge Graphs</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <span className="text-sm text-blue-200 font-semibold">Reinforcement Learning</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                    <span className="text-sm text-cyan-200 font-semibold">Digital Twin Modeling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <span className="text-sm text-blue-200 font-semibold">NLP for Literature Mining</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/case-studies/ai-2025-oct-pharmaceutical-ai-drug-discovery-87-billion-success"
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-cyan-500/50"
              >
                Read Full Case Study →
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center"
              >
                Start Your Transformation
              </a>
            </div>
          </div>
        </div>

        {/* Service Launch */}
        <div className="bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30 backdrop-blur-lg rounded-3xl p-10 border border-purple-500/30">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-purple-200 text-sm font-bold uppercase tracking-wider border border-purple-400/30 mb-6">
                🚀 NEW SERVICE LAUNCH - OCTOBER 2025
              </div>
              
              <h3 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                Real-Time AI Orchestration Platform Services
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Enterprise-grade platform delivering sub-50ms AI intelligence with 99.95% uptime, 
                24/7 support, and proven 8-12x ROI. From assessment to managed services.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-300 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Platform Assessment & Strategy</div>
                    <div className="text-sm text-gray-400">ROI analysis and implementation roadmap</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-300 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Production Deployment</div>
                    <div className="text-sm text-gray-400">End-to-end implementation with SLA guarantees</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-300 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">24/7 Managed Services</div>
                    <div className="text-sm text-gray-400">Continuous optimization and support</div>
                  </div>
                </div>
              </div>

              <a
                href="/services/ai-2025-october-real-time-orchestration-platform"
                className="inline-block bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Explore Platform Services →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30">
                <div className="text-4xl mb-3">⚡</div>
                <div className="text-3xl font-extrabold text-purple-300 mb-1">&lt;50ms</div>
                <div className="text-sm text-purple-200">Decision Latency</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
                <div className="text-4xl mb-3">🎯</div>
                <div className="text-3xl font-extrabold text-blue-300 mb-1">99.95%</div>
                <div className="text-sm text-blue-200">Uptime SLA</div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
                <div className="text-4xl mb-3">💰</div>
                <div className="text-3xl font-extrabold text-cyan-300 mb-1">8-12x</div>
                <div className="text-sm text-cyan-200">Typical ROI</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
                <div className="text-4xl mb-3">🌐</div>
                <div className="text-3xl font-extrabold text-blue-300 mb-1">24/7</div>
                <div className="text-sm text-blue-200">Premium Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
