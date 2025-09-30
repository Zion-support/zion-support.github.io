import React from 'react';
import Link from 'next/link';

export default function LatestAIInnovations2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">LATEST AI INNOVATIONS 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Cutting-Edge AI Solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              for Enterprise Success
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the latest AI innovations that are transforming industries and delivering 
            unprecedented value to forward-thinking organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Innovation Card 1 */}
          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🧠</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Autonomous AI Systems</h3>
                <p className="text-blue-300 text-sm">Self-Managing Infrastructure</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Self-healing systems that achieve 99.9% uptime with autonomous decision-making, 
              reducing human intervention by 85% while improving accuracy.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-blue-400">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </div>

          {/* Innovation Card 2 */}
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Predictive Intelligence</h3>
                <p className="text-green-300 text-sm">Future-Ready Analytics</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced predictive models that prevent 99.7% of system failures and optimize 
              operations in real-time for maximum efficiency.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-green-400">99.7%</div>
              <div className="text-sm text-gray-400">Failure Prevention</div>
            </div>
          </div>

          {/* Innovation Card 3 */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🔮</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Quantum AI Computing</h3>
                <p className="text-purple-300 text-sm">Next-Gen Processing</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Quantum-enhanced AI algorithms that process complex problems 1000x faster 
              than traditional computing methods.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-purple-400">1000x</div>
              <div className="text-sm text-gray-400">Faster Processing</div>
            </div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Latest Research & Insights</h3>
            <div className="space-y-4">
              <Link href="/blog/ai-2026-enterprise-autonomous-systems" className="group block">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors mb-1">
                      Enterprise Autonomous Systems Revolution
                    </h4>
                    <p className="text-gray-400 text-sm">
                      How autonomous AI is achieving 90% efficiency gains across industries
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-cost-optimization-2026-strategies" className="group block">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-green-300 transition-colors mb-1">
                      AI Cost Optimization Strategies
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Proven methods for 70% cost reduction and 300% ROI
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Success Stories</h3>
            <div className="space-y-4">
              <Link href="/case-studies/fortune-500-ai-transformation-2026" className="group block">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors mb-1">
                      Fortune 500 Transformation
                    </h4>
                    <p className="text-gray-400 text-sm">
                      $12M savings and 95% efficiency through AI implementation
                    </p>
                  </div>
                </div>
              </Link>
              
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <h4 className="font-semibold text-white mb-1">More Case Studies Coming Soon</h4>
                <p className="text-gray-400 text-sm">
                  Stay tuned for additional success stories and implementation insights
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Implement These Innovations?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our expert team can help you implement the latest AI innovations to achieve 
              similar results in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}