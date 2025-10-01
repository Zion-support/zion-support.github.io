import React from 'react';

export default function October2025NewTechInnovationsBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-cyan-900/40 backdrop-blur-sm py-20 border-y border-purple-500/20">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6 animate-pulse">
            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase">
              🚀 JUST PUBLISHED: October 1, 2025 - Enterprise Technology Breakthroughs
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            4 Revolutionary Technologies Transforming Enterprise Infrastructure
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover the latest innovations powering next-generation enterprises—from 
            <strong className="text-purple-400"> zero-touch security</strong> achieving 
            <strong className="text-green-400"> 99.9% automation</strong>, to 
            <strong className="text-indigo-400"> quantum-ready infrastructure</strong> protecting against future threats, 
            <strong className="text-emerald-400"> autonomous IT operations</strong> delivering 
            <strong className="text-cyan-400"> 99.99% uptime</strong>, and 
            <strong className="text-orange-400"> data mesh architectures</strong> enabling 
            <strong className="text-amber-400"> 10x faster insights</strong>.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-purple-500/10 to-violet-600/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-4">🛡️</div>
              <div className="text-2xl font-extrabold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-purple-300">Security Coverage</div>
              <div className="text-xs text-gray-400 mt-2">DevSecOps Automation</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-violet-600/10 backdrop-blur-lg rounded-2xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-4">⚛️</div>
              <div className="text-2xl font-extrabold text-indigo-400 mb-2">256-bit</div>
              <div className="text-sm text-indigo-300">Quantum Security</div>
              <div className="text-xs text-gray-400 mt-2">Post-Quantum Crypto</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-4">⚡</div>
              <div className="text-2xl font-extrabold text-emerald-400 mb-2">99.99%</div>
              <div className="text-sm text-emerald-300">System Uptime</div>
              <div className="text-xs text-gray-400 mt-2">AIOps 2.0</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-amber-600/10 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-4">📊</div>
              <div className="text-2xl font-extrabold text-orange-400 mb-2">10x</div>
              <div className="text-sm text-orange-300">Faster Data Access</div>
              <div className="text-xs text-gray-400 mt-2">Data Mesh</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🛡️</div>
              <div>
                <div className="text-sm text-purple-400 font-semibold">DevSecOps AI</div>
                <div className="text-xs text-gray-400">October 2025</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">AI-Powered DevSecOps Automation Revolution</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Achieve 99.9% automated security coverage with AI-driven DevSecOps pipelines—reducing vulnerabilities 
              by 94% and deployment time by 85% through intelligent automation.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Zero-Touch Security</span>
              <span className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-full">Auto-Remediation</span>
              <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full">AI Security</span>
            </div>
            <a 
              href="/blog/ai-2025-october-devsecops-automation-revolution"
              className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors"
            >
              Read Full Analysis →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">⚛️</div>
              <div>
                <div className="text-sm text-indigo-400 font-semibold">Quantum Infrastructure</div>
                <div className="text-xs text-gray-400">October 2025</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Quantum-Ready Cloud Infrastructure</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Future-proof your enterprise with post-quantum cryptography and hybrid quantum-classical architectures—
              protecting against threats for the next 10-15 years with 256-bit quantum-safe security.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full">Post-Quantum Crypto</span>
              <span className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-full">Hybrid Architecture</span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Future-Proof</span>
            </div>
            <a 
              href="/blog/ai-2025-october-quantum-ready-cloud-infrastructure"
              className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors"
            >
              Explore Quantum Readiness →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">⚡</div>
              <div>
                <div className="text-sm text-emerald-400 font-semibold">AIOps 2.0</div>
                <div className="text-xs text-gray-400">October 2025</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Autonomous IT Operations & Self-Healing Infrastructure</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Predict, prevent, and resolve 98% of incidents before user impact with autonomous AIOps 2.0 platforms—
              achieving 99.99% uptime while reducing MTTR by 95% and operations costs by 72%.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">Self-Healing</span>
              <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full">Predictive AI</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Auto-Resolution</span>
            </div>
            <a 
              href="/blog/ai-2025-october-autonomous-it-operations-aiops-20"
              className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors"
            >
              Discover AIOps 2.0 →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">📊</div>
              <div>
                <div className="text-sm text-orange-400 font-semibold">Data Mesh</div>
                <div className="text-xs text-gray-400">October 2025</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Next-Generation Data Mesh Architecture</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Scale to petabytes with domain-driven data mesh architectures—achieving 10x faster data access, 
              85% reduction in data silos, and autonomous data product management across distributed teams.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">Domain-Driven</span>
              <span className="px-2 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-full">Data Products</span>
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">Self-Serve</span>
            </div>
            <a 
              href="/blog/ai-2025-october-next-gen-data-mesh-architecture"
              className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors"
            >
              Learn Data Mesh →
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Ready to Transform Your Enterprise Infrastructure?
            </h3>
            <p className="text-gray-300 mb-6">
              Our experts are ready to help you implement these cutting-edge technologies. 
              Schedule a consultation to discuss your specific needs and create a customized roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </a>
              <a
                href="/blog"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                View All Articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
