import React from 'react';

export default function October2025EnterpriseAITransformationBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-purple-950/50 to-emerald-950/50 relative overflow-hidden">
      {/* Animated Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-emerald-500/20 border border-purple-400/50 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-purple-300 font-bold text-sm tracking-wide uppercase">
              October 2025 Enterprise AI Series
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
              Production-Ready AI
            </span>
            <br />
            <span className="text-white">That Delivers Results</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Learn how Fortune 500 companies are achieving 99.9% AI compliance, 87% risk reduction, and 
            $47M+ in cloud cost savings through proven enterprise frameworks.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-400">Compliance Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/30">
              <div className="text-3xl font-extrabold text-emerald-400 mb-1">68%</div>
              <div className="text-sm text-gray-400">Cost Reduction</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-pink-400/30">
              <div className="text-3xl font-extrabold text-pink-400 mb-1">$47M+</div>
              <div className="text-sm text-gray-400">Annual Savings</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30">
              <div className="text-3xl font-extrabold text-cyan-400 mb-1">6mo</div>
              <div className="text-sm text-gray-400">Faster Deploy</div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* AI Governance Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-900 to-purple-900/30 rounded-2xl p-8 border-2 border-purple-400/40 hover:border-purple-400/70 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">🛡️</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AI Governance</h3>
                  <p className="text-purple-400 text-sm">Production Framework</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Deploy AI systems with confidence through comprehensive governance. Achieve 99.9% compliance, 
                87% risk reduction, and 6-month faster deployments.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm">Model lifecycle governance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm">Automated policy enforcement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm">EU AI Act & US compliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm">Bias & fairness testing</span>
                </div>
              </div>

              <a 
                href="/blog/ai-2025-october-production-ai-governance-framework"
                className="block w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
              >
                Read Full Guide →
              </a>
            </div>
          </div>

          {/* Cloud Cost Intelligence Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-900 to-emerald-900/30 rounded-2xl p-8 border-2 border-emerald-400/40 hover:border-emerald-400/70 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">💎</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Cost Intelligence</h3>
                  <p className="text-emerald-400 text-sm">Autonomous FinOps</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Slash cloud costs by 68% with AI agents that optimize infrastructure 24/7. Save $47M+ annually 
                through intelligent resource management.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm">Real-time cost optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm">Predictive cost forecasting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm">Multi-cloud intelligence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm">Automated remediation</span>
                </div>
              </div>

              <a 
                href="/blog/ai-2025-october-autonomous-cloud-cost-intelligence"
                className="block w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105"
              >
                Discover Savings →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-emerald-900/30 backdrop-blur-lg rounded-2xl p-10 border-2 border-purple-400/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise AI?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Join Fortune 500 companies achieving breakthrough results with proven AI governance and 
              cloud cost optimization frameworks from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 hover:from-purple-400 hover:via-pink-400 hover:to-emerald-400 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Schedule Free Consultation
              </a>
              <a 
                href="/blog" 
                className="border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400/20 font-bold py-4 px-10 rounded-xl transition-all duration-300"
              >
                Explore All Insights
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
