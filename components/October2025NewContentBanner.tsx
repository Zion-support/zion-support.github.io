import React from 'react';

export default function October2025NewContentBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-950 via-emerald-900 to-teal-900 border-t-4 border-cyan-400">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 border-2 border-cyan-400/50 mb-8 animate-pulse shadow-2xl shadow-cyan-500/30">
            <span className="text-cyan-300 font-extrabold text-2xl tracking-wider uppercase">
              🚀 NEW: October 1, 2025 — Latest AI & DevOps Breakthroughs!
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-300 bg-clip-text text-transparent leading-tight">
            Enterprise AI Security & Infrastructure Revolution
          </h2>
          <p className="text-2xl text-gray-200 max-w-5xl mx-auto leading-relaxed">
            Explore cutting-edge AI-powered DevSecOps, autonomous infrastructure optimization, 
            and comprehensive compliance frameworks for <span className="text-cyan-300 font-bold">2025 and beyond</span>!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {/* Blog Post 1 - AI-Powered DevSecOps */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/30">
            <div className="text-7xl mb-6">🛡️</div>
            <div className="inline-block bg-cyan-500/30 px-4 py-2 rounded-full text-cyan-200 text-sm font-bold mb-5 border border-cyan-400/30">
              DEVSECOPS REVOLUTION
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-5 leading-tight">
              AI-Powered DevSecOps Transformation
            </h3>
            <p className="text-gray-200 mb-6 text-lg leading-relaxed">
              Transform your security pipeline with AI-driven automation, intelligent threat detection, 
              and autonomous vulnerability remediation that reduces incidents by 95%.
            </p>
            <ul className="space-y-3 mb-8 text-gray-200">
              <li className="flex items-start">
                <span className="text-cyan-400 text-xl mr-3 font-bold">✓</span>
                <span><strong className="text-cyan-300">95% faster detection</strong> — Real-time threat identification</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 text-xl mr-3 font-bold">✓</span>
                <span><strong className="text-cyan-300">80% fewer vulnerabilities</strong> — Proactive security</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 text-xl mr-3 font-bold">✓</span>
                <span><strong className="text-cyan-300">10x automation</strong> — Intelligent security ops</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 text-xl mr-3 font-bold">✓</span>
                <span><strong className="text-cyan-300">24/7 protection</strong> — Continuous monitoring</span>
              </li>
            </ul>
            <a
              href="/blog/ai-powered-devsecops-transformation-october-2025"
              className="block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
            >
              Explore DevSecOps Revolution →
            </a>
          </div>

          {/* Blog Post 2 - Autonomous Infrastructure */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border-2 border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-500/30">
            <div className="text-7xl mb-6">🤖</div>
            <div className="inline-block bg-emerald-500/30 px-4 py-2 rounded-full text-emerald-200 text-sm font-bold mb-5 border border-emerald-400/30">
              INFRASTRUCTURE AI
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-5 leading-tight">
              Autonomous Infrastructure Optimization
            </h3>
            <p className="text-gray-200 mb-6 text-lg leading-relaxed">
              Deploy self-healing cloud systems that automatically scale, optimize costs, predict failures, 
              and maintain 99.99% uptime with 70% cost reduction.
            </p>
            <ul className="space-y-3 mb-8 text-gray-200">
              <li className="flex items-start">
                <span className="text-emerald-400 text-xl mr-3 font-bold">✓</span>
                <span><strong className="text-emerald-300">70% cost reduction</strong> — Massive infrastructure savings</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 text-xl mr-3 font-bold">✓</span>
                <span><strong className="text-emerald-300">99.99% uptime</strong> — Production excellence</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 text-xl mr-3 font-bold">✓</span>
                <span><strong className="text-emerald-300">90% auto-remediation</strong> — Self-healing systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 text-xl mr-3 font-bold">✓</span>
                <span><strong className="text-emerald-300">5min MTTR</strong> — Rapid incident response</span>
              </li>
            </ul>
            <a
              href="/blog/autonomous-infrastructure-optimization-october-2025"
              className="block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105"
            >
              Discover Autonomous Infrastructure →
            </a>
          </div>

          {/* Blog Post 3 - AI Compliance Framework */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border-2 border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-amber-500/30">
            <div className="text-7xl mb-6">⚖️</div>
            <div className="inline-block bg-amber-500/30 px-4 py-2 rounded-full text-amber-200 text-sm font-bold mb-5 border border-amber-400/30">
              AI COMPLIANCE 2025
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-5 leading-tight">
              Enterprise AI Compliance Framework
            </h3>
            <p className="text-gray-200 mb-6 text-lg leading-relaxed">
              Navigate the 2025 regulatory landscape with comprehensive compliance frameworks 
              covering EU AI Act, GDPR, and global standards with automated monitoring.
            </p>
            <ul className="space-y-3 mb-8 text-gray-200">
              <li className="flex items-start">
                <span className="text-amber-400 text-xl mr-3 font-bold">✓</span>
                <span><strong className="text-amber-300">100% compliance</strong> — Full regulatory coverage</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 text-xl mr-3 font-bold">✓</span>
                <span><strong className="text-amber-300">15+ standards</strong> — Global regulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 text-xl mr-3 font-bold">✓</span>
                <span><strong className="text-amber-300">90% audit automation</strong> — Continuous compliance</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 text-xl mr-3 font-bold">✓</span>
                <span><strong className="text-amber-300">Real-time monitoring</strong> — Risk management</span>
              </li>
            </ul>
            <a
              href="/blog/enterprise-ai-compliance-framework-october-2025"
              className="block bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-amber-500/50 transform hover:scale-105"
            >
              Explore Compliance Framework →
            </a>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 backdrop-blur-lg rounded-3xl p-12 border-2 border-cyan-400/40">
          <h3 className="text-4xl font-extrabold text-white mb-6">
            Ready to Secure & Optimize Your Enterprise?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Transform your organization with AI-powered security, autonomous infrastructure, and comprehensive 
            compliance frameworks. Get your <span className="text-cyan-300 font-bold">free assessment</span> today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-emerald-600 hover:from-cyan-400 hover:to-emerald-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 text-lg"
            >
              Get Free Assessment →
            </a>
            <a
              href="/blog"
              className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-300 font-bold py-5 px-10 rounded-xl transition-all duration-300 text-lg"
            >
              Explore All Content
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
