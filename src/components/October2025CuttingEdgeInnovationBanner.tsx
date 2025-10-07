import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025CuttingEdgeInnovationBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 py-20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,",
      backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/50 mb-6">
              <span className="animate-pulse">⚡</span>
              <span className="text-purple-300 font-bold uppercase tracking-wider">New Content Alert</span>
              <span className="animate-pulse">⚡</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Cutting-Edge AI Innovations
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore breakthrough technologies that are redefining enterprise AI: intelligent orchestration, 
              advanced reasoning, and unified platforms
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🎯</div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-3">Agentic Orchestration</h3>
                  <p className="text-gray-300 mb-4">
                    Manage 10,000+ AI agents simultaneously with sub-3ms latency and 99.99% reliability
                  </p>
                  <Link 
                    to="/blog/ai-2025-october-agentic-orchestration-platform" 
                    className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                  >
                    Learn More <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🧠</div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-3">Neural Reasoning</h3>
                  <p className="text-gray-300 mb-4">
                    Hybrid AI systems combining deep learning with symbolic reasoning for 98.5% accuracy
                  </p>
                  <Link 
                    to="/blog/ai-2025-october-neural-reasoning-engines" 
                    className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors"
                  >
                    Discover More <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🏗️</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-3">Enterprise AI Fabric</h3>
                  <p className="text-gray-300 mb-4">
                    Unified intelligence platform managing 100+ models with 99.999% uptime, processing 10PB+ data daily
                  </p>
                  <div className="flex flex-wrap gap-6 mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400">$500M</div>
                      <div className="text-sm text-gray-400">Enterprise Value</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-400">70%</div>
                      <div className="text-sm text-gray-400">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      
                      <div className="text-sm text-gray-400">Faster Deployment</div>
                    </div>
                  </div>
                  <Link 
                    to="/blog/ai-2025-october-enterprise-ai-fabric" 
                    className="inline-flex items-center text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
                  >
                    Explore Platform <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 text-center">
            <p className="text-lg text-gray-300 mb-6">
              Join Fortune 500 companies leveraging these breakthrough technologies to transform their operations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/blog"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
              >
                View All Articles
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all border border-white/30"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
