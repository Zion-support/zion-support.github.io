import React from 'react';

export default function LatestSeptember30ContentShowcase() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 mb-6">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
              📚 September 30, 2025 — Latest Publications
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Transform Your Enterprise Today
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto">
            Discover the latest breakthroughs in autonomous operations, MLOps excellence, and proven 
            strategies for achieving $35B+ in enterprise value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Featured Content Card 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">🎯</div>
              <div>
                <div className="inline-block bg-emerald-500/20 px-3 py-1 rounded-full text-emerald-300 text-xs font-semibold mb-2">
                  AUTONOMOUS OPERATIONS
                </div>
                <h3 className="text-2xl font-bold text-white">
                  99.97% Uptime Autonomous Systems
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Self-managing AI systems that detect, heal, and optimize automatically — achieving 
              enterprise excellence with minimal human intervention.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                <div className="text-2xl font-extrabold text-emerald-400">99.97%</div>
                <div className="text-xs text-emerald-300">System Uptime</div>
              </div>
              <div className="bg-teal-500/10 rounded-lg p-4 border border-teal-500/20">
                <div className="text-2xl font-extrabold text-teal-400">85%</div>
                <div className="text-xs text-teal-300">Cost Reduction</div>
              </div>
            </div>
            <a
              href="/blog/ai-2025-september-30-autonomous-enterprise-orchestration"
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Learn Autonomous Operations →
            </a>
          </div>

          {/* Featured Content Card 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-teal-500/20 hover:border-teal-400/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">⚡</div>
              <div>
                <div className="inline-block bg-teal-500/20 px-3 py-1 rounded-full text-teal-300 text-xs font-semibold mb-2">
                  MLOPS EXCELLENCE
                </div>
                <h3 className="text-2xl font-bold text-white">
                  100x Faster Model Deployment
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Revolutionary MLOps platform enabling teams to move from model development to 
              production deployment in just minutes, not months.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-teal-500/10 rounded-lg p-4 border border-teal-500/20">
                <div className="text-2xl font-extrabold text-teal-400">8 min</div>
                <div className="text-xs text-teal-300">Deploy Time</div>
              </div>
              <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                <div className="text-2xl font-extrabold text-cyan-400">99.7%</div>
                <div className="text-xs text-cyan-300">Reliability</div>
              </div>
            </div>
            <a
              href="/blog/ai-2025-september-30-next-gen-ml-ops-revolution"
              className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Discover MLOps Revolution →
            </a>
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-10 border border-cyan-400/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-cyan-500/30 px-4 py-2 rounded-full text-cyan-300 text-sm font-bold mb-4 border border-cyan-400/30">
                FORTUNE 100 SUCCESS STORY
              </div>
              <h3 className="text-4xl font-extrabold text-white mb-4">
                $35 Billion Enterprise Transformation
              </h3>
              <p className="text-xl text-gray-200 mb-6">
                Complete enterprise transformation case study showing how autonomous operations and 
                next-gen MLOps delivered unprecedented business value.
              </p>
              <a
                href="/case-studies/ai-2025-september-30-global-enterprise-autonomous-transformation-35-billion-success"
                className="inline-block bg-gradient-to-r from-cyan-500 to-emerald-600 hover:from-cyan-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                Read Complete Success Story →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30">
                <div className="text-3xl font-extrabold text-cyan-400 mb-2">$35B</div>
                <div className="text-cyan-300 text-sm">Total Value Created</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30">
                <div className="text-3xl font-extrabold text-emerald-400 mb-2">$18B</div>
                <div className="text-emerald-300 text-sm">Annual Cost Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-teal-500/30">
                <div className="text-3xl font-extrabold text-teal-400 mb-2">$22B</div>
                <div className="text-teal-300 text-sm">New Revenue Streams</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30">
                <div className="text-3xl font-extrabold text-cyan-400 mb-2">94%</div>
                <div className="text-cyan-300 text-sm">Autonomous Operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
