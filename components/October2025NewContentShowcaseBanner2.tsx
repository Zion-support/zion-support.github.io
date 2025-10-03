// import React from 'react';

export default function October2025NewContentShowcaseBanner2() {
  return (
    <section className="bg-gradient-to-br from-red-600/20 via-emerald-600/20 to-green-600/20 backdrop-blur-xl py-20 border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/30 to-green-500/30 border border-red-500/50 mb-6 animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-white font-bold text-sm tracking-wider uppercase">
              🚀 Just Published • October 1, 2025
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
            Revolutionary AI Breakthroughs: Security, Edge & Sustainability
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Explore our latest cutting-edge content covering next-generation cybersecurity, intelligent edge 
            computing, and carbon-negative AI operations transforming enterprises worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Cybersecurity Card */}
          <a 
            href="/blog/ai-2025-october-next-gen-cybersecurity-revolution" 
            className="group bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30 hover:border-red-400/60 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
            <h3 className="text-2xl font-bold text-red-400 mb-3 group-hover:text-red-300">
              AI-Driven Cybersecurity Revolution
            </h3>
            <p className="text-gray-300 mb-4">
              Autonomous threat prevention with 99.99% detection rate, 3.2ms response time, and $18M breach 
              prevention value.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-300 text-xs">AI Security</span>
              <span className="px-3 py-1 bg-orange-500/20 rounded-full text-orange-300 text-xs">Zero-Day Detection</span>
              <span className="px-3 py-1 bg-amber-500/20 rounded-full text-amber-300 text-xs">Autonomous Defense</span>
            </div>
            <div className="flex items-center text-red-400 font-bold group-hover:gap-2 transition-all">
              Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>

          {/* Edge Computing Card */}
          <a 
            href="/blog/ai-2025-october-intelligent-edge-computing-enterprise" 
            className="group bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/60 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-3 group-hover:text-emerald-300">
              Intelligent Edge Computing at Scale
            </h3>
            <p className="text-gray-300 mb-4">
              Deploy AI at the network perimeter with &lt;1ms latency, 92% bandwidth reduction, and 8.7x 
              processing efficiency gains.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-300 text-xs">Edge AI</span>
              <span className="px-3 py-1 bg-teal-500/20 rounded-full text-teal-300 text-xs">Real-Time</span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-300 text-xs">IoT Integration</span>
            </div>
            <div className="flex items-center text-emerald-400 font-bold group-hover:gap-2 transition-all">
              Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>

          {/* Sustainable AI Card */}
          <a 
            href="/blog/ai-2025-october-sustainable-ai-operations-green-computing" 
            className="group bg-gradient-to-br from-green-500/10 to-lime-500/10 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30 hover:border-green-400/60 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
            <h3 className="text-2xl font-bold text-green-400 mb-3 group-hover:text-green-300">
              Carbon-Negative AI Operations
            </h3>
            <p className="text-gray-300 mb-4">
              Build sustainable AI systems achieving 85% energy reduction, -120% carbon footprint, and $14M 
              annual savings while maintaining peak performance.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-300 text-xs">Green AI</span>
              <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-300 text-xs">ESG Compliance</span>
              <span className="px-3 py-1 bg-lime-500/20 rounded-full text-lime-300 text-xs">Net Negative</span>
            </div>
            <div className="flex items-center text-green-400 font-bold group-hover:gap-2 transition-all">
              Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
        </div>

        {/* Stats Bar */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-red-400 mb-2">99.99%</div>
              <div className="text-gray-300 text-sm">Threat Prevention</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-emerald-400 mb-2">&lt;1ms</div>
              <div className="text-gray-300 text-sm">Edge Latency</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-green-400 mb-2">-120%</div>
              <div className="text-gray-300 text-sm">Carbon Footprint</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-amber-400 mb-2">$37M+</div>
              <div className="text-gray-300 text-sm">Total Annual Value</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 via-emerald-500 to-green-500 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transition-all hover:scale-105"
          >
            <span>Explore All Latest Content</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
