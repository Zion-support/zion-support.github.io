// import React from 'react';

export default function October2025AutonomousCodingBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40 backdrop-blur-sm py-16 border-y border-purple-500/20">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6 animate-pulse">
            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase">
              🚀 NEW: October 1, 2025 - Autonomous Software Development Revolution
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AI Agents Writing Production Code: The Future is Here
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover how Fortune 500 companies are deploying autonomous coding agents that write, test, and deploy 
            production-ready software—achieving <strong className="text-purple-400">87% faster development</strong>, 
            <strong className="text-blue-400"> 94% bug reduction</strong>, and 
            <strong className="text-green-400"> $127M in productivity gains</strong>.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-purple-400 mb-2">87%</div>
              <div className="text-sm text-purple-300">Faster Development Cycles</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-blue-400 mb-2">94%</div>
              <div className="text-sm text-blue-300">Bug Reduction</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-green-400 mb-2">$127M</div>
              <div className="text-sm text-green-300">Annual Productivity Gains</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-cyan-400 mb-2">450%</div>
              <div className="text-sm text-cyan-300">Engineering Throughput Increase</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-5xl mb-6">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous Code Generation</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI agents translate natural language requirements into production-ready code across 50+ programming 
              languages with 98% code coverage testing.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">Multi-Language Support</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Best Practices</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">Auto Testing</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-5xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">Intelligent Bug Detection</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Real-time static analysis and AI-powered bug detection identify and auto-fix issues before they reach 
              production, reducing bugs by 94%.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Auto-Fix</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">Security Scanning</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">Performance Optimization</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Deployment</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Autonomous CI/CD pipelines manage everything from code commit to production deployment with intelligent 
              rollback and canary releases.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">24/7 Deployment</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">Auto Rollback</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Zero Downtime</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-8 mb-10">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">💼 Real-World Success: Fortune 500 Fintech</h3>
          <p className="text-gray-300 text-center mb-6 max-w-3xl mx-auto">
            Global financial services company transformed their engineering organization with autonomous coding agents
          </p>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">6 weeks → 5 days</div>
              <div className="text-xs text-gray-400">Feature Development Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">94%</div>
              <div className="text-xs text-gray-400">Bug Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">450%</div>
              <div className="text-xs text-gray-400">Throughput Increase</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-1">$127M</div>
              <div className="text-xs text-gray-400">Annual Savings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">89%</div>
              <div className="text-xs text-gray-400">Faster Code Review</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/blog/ai-2025-october-autonomous-software-development-revolution"
            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
          >
            Read Full Article →
          </a>
          <a 
            href="/case-studies/fintech-autonomous-development-success-2025"
            className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
          >
            View Case Study →
          </a>
          <a 
            href="/contact"
            className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
}
