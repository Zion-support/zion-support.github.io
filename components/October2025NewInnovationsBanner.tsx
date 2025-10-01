import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, Cpu, Sparkles } from 'lucide-react';

const October2025NewInnovationsBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-950 via-violet-950 to-orange-950 rounded-3xl shadow-2xl my-12 border border-cyan-500/30">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-orange-500/10 animate-pulse"></div>
      
      <div className="relative z-10 px-8 py-12 md:px-12 md:py-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-cyan-400 animate-bounce" />
          <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 text-sm font-bold rounded-full border border-cyan-400/40 animate-pulse">
            🚀 JUST PUBLISHED - OCTOBER 1, 2025
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-violet-400 to-orange-400 bg-clip-text text-transparent leading-tight">
          3 Revolutionary AI Innovations Transforming Enterprise Operations
        </h2>

        <p className="text-xl text-white/80 mb-10 max-w-4xl leading-relaxed">
          Discover the latest breakthroughs in Quantum-Enhanced Security, Autonomous Data Centers, 
          and Edge Neural Networks—delivering unbreakable protection, 94% cost savings, and real-time intelligence at scale.
        </p>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Card 1: Quantum Security */}
          <Link 
            to="/blog/quantum-enhanced-ai-security-systems-2025" 
            className="group bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/30 transition-colors">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-xs font-semibold text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full">
                18 MIN READ
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              Quantum-Enhanced AI Security Systems
            </h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Unbreakable enterprise protection with 99.99% threat detection, quantum encryption, and predictive intelligence
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="text-cyan-400 font-bold">99.99%</span>
                <span className="text-white/60">Detection</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-blue-400 font-bold">$127M</span>
                <span className="text-white/60">Prevented Losses</span>
              </div>
            </div>
          </Link>

          {/* Card 2: Autonomous Data Centers */}
          <Link 
            to="/blog/autonomous-data-center-optimization-2025" 
            className="group bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-500/20 rounded-xl group-hover:bg-orange-500/30 transition-colors">
                <Server className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-xs font-semibold text-orange-300 bg-orange-500/20 px-3 py-1 rounded-full">
                22 MIN READ
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
              Autonomous Data Center Optimization
            </h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Self-managing infrastructure at scale with 94% cost reduction, 99.99% uptime, and zero human intervention
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="text-orange-400 font-bold">94%</span>
                <span className="text-white/60">Cost ↓</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-red-400 font-bold">$847M</span>
                <span className="text-white/60">Savings</span>
              </div>
            </div>
          </Link>

          {/* Card 3: Edge Neural Networks */}
          <Link 
            to="/blog/neural-network-edge-computing-revolution-2025" 
            className="group bg-gradient-to-br from-violet-900/40 to-fuchsia-900/40 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/30 hover:border-violet-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/20 hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-violet-500/20 rounded-xl group-hover:bg-violet-500/30 transition-colors">
                <Cpu className="w-6 h-6 text-violet-400" />
              </div>
              <span className="text-xs font-semibold text-violet-300 bg-violet-500/20 px-3 py-1 rounded-full">
                20 MIN READ
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
              Neural Network Edge Computing
            </h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Real-time intelligence everywhere with sub-10ms inference, 99.9% uptime, and 95% bandwidth reduction
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="text-violet-400 font-bold">&lt;10ms</span>
                <span className="text-white/60">Latency</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-fuchsia-400 font-bold">95%</span>
                <span className="text-white/60">Bandwidth ↓</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 p-6 bg-white/5 rounded-2xl border border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">$1.4B+</div>
            <div className="text-sm text-white/60">Combined Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">99.99%</div>
            <div className="text-sm text-white/60">Reliability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-400">100K+</div>
            <div className="text-sm text-white/60">Deployments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">4,200%</div>
            <div className="text-sm text-white/60">Avg ROI</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6 border-t border-white/10">
          <Link
            to="/blog"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            <span>Explore All Latest Innovations</span>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <span>Schedule Expert Consultation</span>
          </Link>
        </div>

        {/* Bottom highlight */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white/50">
            <span className="font-semibold text-cyan-400">2000+</span> Global enterprises trust Zion Tech Group for revolutionary AI solutions
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default October2025NewInnovationsBanner;
