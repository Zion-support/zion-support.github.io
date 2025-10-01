import React from 'react';

export default function October2025SovereignAIBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-cyan-900/40 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 animate-pulse">
              <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
                🛡️ OCTOBER 2025 BREAKTHROUGH: SOVEREIGN AI REVOLUTION
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Sovereign AI: Complete Data Control + $180M Annual Value
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 text-center mb-8 max-w-4xl mx-auto">
            Deploy advanced AI systems entirely within your infrastructure boundaries. Achieve 100% data sovereignty, 
            zero compliance violations, and unprecedented security while maintaining full operational control.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-emerald-500/10 backdrop-blur-lg rounded-xl p-4 border border-emerald-500/20 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-1">$180M</div>
              <div className="text-sm text-emerald-300">Annual Value Created</div>
            </div>
            <div className="bg-teal-500/10 backdrop-blur-lg rounded-xl p-4 border border-teal-500/20 text-center">
              <div className="text-3xl font-bold text-teal-400 mb-1">100%</div>
              <div className="text-sm text-teal-300">Data Sovereignty</div>
            </div>
            <div className="bg-cyan-500/10 backdrop-blur-lg rounded-xl p-4 border border-cyan-500/20 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">Zero</div>
              <div className="text-sm text-cyan-300">Compliance Violations</div>
            </div>
            <div className="bg-blue-500/10 backdrop-blur-lg rounded-xl p-4 border border-blue-500/20 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">99.99%</div>
              <div className="text-sm text-blue-300">Uptime SLA</div>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">What You'll Learn</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <span className="text-emerald-400 text-2xl mr-3">✓</span>
                <div>
                  <h4 className="font-bold text-emerald-300 mb-1">Enterprise Architecture</h4>
                  <p className="text-gray-400 text-sm">Complete infrastructure stack: hardware, platform, and security layers</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 text-2xl mr-3">✓</span>
                <div>
                  <h4 className="font-bold text-teal-300 mb-1">Deployment Strategies</h4>
                  <p className="text-gray-400 text-sm">On-premises vs hybrid sovereign cloud implementations</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-400 text-2xl mr-3">✓</span>
                <div>
                  <h4 className="font-bold text-cyan-300 mb-1">Model Governance</h4>
                  <p className="text-gray-400 text-sm">End-to-end lifecycle management with compliance automation</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog/ai-2025-october-sovereign-ai-enterprise-deployment"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1 text-center"
            >
              Read Complete Guide →
            </a>
            <a
              href="/contact"
              className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center"
            >
              Get Expert Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
