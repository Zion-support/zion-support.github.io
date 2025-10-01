import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025NewAIContentBreakthroughBanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border-2 border-cyan-500/50 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 font-bold text-lg tracking-wider uppercase">
              🚀 JUST PUBLISHED - OCTOBER 2025 • 3 REVOLUTIONARY AI BREAKTHROUGHS
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Transform Enterprise Operations with 
            <br />
            3 Cutting-Edge AI Platforms
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-2xl md:text-3xl text-center text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
          Achieve <span className="text-cyan-400 font-bold">99.9% security compliance</span>, 
          <span className="text-violet-400 font-bold"> sub-5ms latency</span>, and 
          <span className="text-fuchsia-400 font-bold"> 4.7x productivity gains</span> with our latest AI innovations
        </p>

        {/* Value Proposition Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-extrabold text-cyan-400 mb-2">$25.8M</div>
            <div className="text-cyan-300 font-semibold">Combined Annual Savings</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-extrabold text-emerald-400 mb-2">95%</div>
            <div className="text-emerald-300 font-semibold">Faster Deployments</div>
          </div>
          <div className="bg-gradient-to-br from-violet-500/10 to-violet-600/10 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/30 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-extrabold text-violet-400 mb-2">89%</div>
            <div className="text-violet-300 font-semibold">Task Automation</div>
          </div>
          <div className="bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-600/10 backdrop-blur-sm rounded-2xl p-6 border border-fuchsia-500/30 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-extrabold text-fuchsia-400 mb-2">99.99%</div>
            <div className="text-fuchsia-300 font-semibold">Platform Uptime</div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {/* Card 1 - DevSecOps */}
          <div className="group bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-8 border-2 border-cyan-500/30 hover:border-cyan-500/60 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Autonomous DevSecOps Pipeline
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Self-securing, self-optimizing software delivery achieving 99.9% compliance, 95% faster deployments, and $4.7M annual security savings.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-cyan-300 text-sm">
                <span className="text-cyan-400">✓</span>
                <span>Zero-touch security operations</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300 text-sm">
                <span className="text-cyan-400">✓</span>
                <span>Continuous compliance automation</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300 text-sm">
                <span className="text-cyan-400">✓</span>
                <span>AI-powered threat detection</span>
              </div>
            </div>
            <Link 
              to="/blog/ai-2025-october-autonomous-devsecops-pipeline-revolution"
              className="inline-block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/50"
            >
              Read Full Guide →
            </Link>
          </div>

          {/* Card 2 - Edge-to-Cloud */}
          <div className="group bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-2xl p-8 border-2 border-emerald-500/30 hover:border-emerald-500/60 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              Edge-to-Cloud Intelligence
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Seamless distributed AI processing with sub-5ms latency, 92% bandwidth reduction, and $8.3M infrastructure savings.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-emerald-300 text-sm">
                <span className="text-emerald-400">✓</span>
                <span>Intelligent workload orchestration</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300 text-sm">
                <span className="text-emerald-400">✓</span>
                <span>Three-tier distributed architecture</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300 text-sm">
                <span className="text-emerald-400">✓</span>
                <span>Real-time edge processing</span>
              </div>
            </div>
            <Link 
              to="/blog/ai-2025-october-intelligent-edge-to-cloud-continuum"
              className="inline-block w-full text-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg group-hover:shadow-emerald-500/50"
            >
              Explore Platform →
            </Link>
          </div>

          {/* Card 3 - Workforce Augmentation */}
          <div className="group bg-gradient-to-br from-violet-900/30 to-fuchsia-900/30 rounded-2xl p-8 border-2 border-violet-500/30 hover:border-violet-500/60 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-violet-400 mb-4">
              Workforce Augmentation Platform
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI-powered human-machine collaboration delivering 4.7x productivity, 89% automation, and $12.8M annual cost savings.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-violet-300 text-sm">
                <span className="text-violet-400">✓</span>
                <span>Personal AI copilots for every employee</span>
              </div>
              <div className="flex items-center gap-2 text-violet-300 text-sm">
                <span className="text-violet-400">✓</span>
                <span>Department-specific automation</span>
              </div>
              <div className="flex items-center gap-2 text-violet-300 text-sm">
                <span className="text-violet-400">✓</span>
                <span>Human-centric AI design</span>
              </div>
            </div>
            <Link 
              to="/blog/ai-2025-october-enterprise-workforce-augmentation-platform"
              className="inline-block w-full text-center bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg group-hover:shadow-violet-500/50"
            >
              Discover Solution →
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            These platforms have delivered <span className="text-cyan-400 font-bold">$25.8M+ in combined annual savings</span> for Fortune 500 enterprises. 
            Transform your operations with proven AI solutions.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 hover:from-cyan-600 hover:via-violet-600 hover:to-fuchsia-600 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 text-lg"
            >
              Schedule Enterprise Consultation
            </Link>
            <Link
              to="/services"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-5 px-10 rounded-xl border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
