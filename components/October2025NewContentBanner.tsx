import React from 'react';

export default function October2025NewContentBanner() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-2 border-cyan-400/50 backdrop-blur-sm animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 font-bold text-lg tracking-wider uppercase">
              ⚡ JUST PUBLISHED • OCTOBER 2025
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-6xl md:text-8xl font-extrabold text-center mb-8 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Revolutionary AI Content
          </span>
        </h2>

        <p className="text-3xl text-center text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed">
          Discover cutting-edge insights on <span className="text-cyan-400 font-bold">Platform Engineering</span>, 
          <span className="text-purple-400 font-bold"> Autonomous Infrastructure</span>, and 
          <span className="text-pink-400 font-bold"> Enterprise AI Operations</span>
        </p>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <a href="/blog/ai-2025-october-platform-engineering-revolution" 
             className="group bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30">
            <div className="text-5xl mb-4">🏗️</div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300">
              Platform Engineering Revolution
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              Build AI-powered Internal Developer Platforms with 10x faster deployments and 90% less cognitive load
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-sm">10x Productivity</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">Self-Service</span>
              <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-sm">AI-Powered</span>
            </div>
            <div className="text-cyan-400 font-bold group-hover:translate-x-2 transition-transform">
              Read Article →
            </div>
          </a>

          <a href="/blog/ai-2025-october-autonomous-cloud-infrastructure"
             className="group bg-gradient-to-br from-purple-900/40 to-purple-800/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-3xl font-bold text-purple-400 mb-4 group-hover:text-purple-300">
              Autonomous Cloud Infrastructure
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              Self-healing, self-optimizing systems that achieve 99.99% uptime with 85% less operational work
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">Self-Healing</span>
              <span className="bg-pink-500/20 px-3 py-1 rounded-full text-pink-300 text-sm">99.99% Uptime</span>
              <span className="bg-fuchsia-500/20 px-3 py-1 rounded-full text-fuchsia-300 text-sm">60% Cost Cut</span>
            </div>
            <div className="text-purple-400 font-bold group-hover:translate-x-2 transition-transform">
              Read Article →
            </div>
          </a>

          <a href="/blog/ai-2025-october-agent-governance-security"
             className="group bg-gradient-to-br from-pink-900/40 to-pink-800/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-pink-500/30 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-3xl font-bold text-pink-400 mb-4 group-hover:text-pink-300">
              AI Agent Governance & Security
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              Enterprise framework for trustworthy AI with comprehensive governance, security, and compliance
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-pink-500/20 px-3 py-1 rounded-full text-pink-300 text-sm">Zero-Trust</span>
              <span className="bg-rose-500/20 px-3 py-1 rounded-full text-rose-300 text-sm">Compliance</span>
              <span className="bg-red-500/20 px-3 py-1 rounded-full text-red-300 text-sm">100% Audit</span>
            </div>
            <div className="text-pink-400 font-bold group-hover:translate-x-2 transition-transform">
              Read Article →
            </div>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="/blog" 
            className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-1 text-xl"
          >
            Explore All Articles
          </a>
          <a 
            href="/contact" 
            className="border-3 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 text-xl"
          >
            Get Expert Consultation
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">10x</div>
            <div className="text-gray-400 text-lg">Faster Deployments</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">99.99%</div>
            <div className="text-gray-400 text-lg">System Uptime</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">85%</div>
            <div className="text-gray-400 text-lg">Less Operations Work</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">60%</div>
            <div className="text-gray-400 text-lg">Cost Reduction</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
