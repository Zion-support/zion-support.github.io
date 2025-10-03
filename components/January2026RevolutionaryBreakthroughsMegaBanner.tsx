import React from 'react';
import { Link } from 'react-router-dom';

const January2026RevolutionaryBreakthroughsMegaBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-emerald-900/20 border border-purple-500/30 rounded-3xl p-8 mb-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-emerald-500/5 to-cyan-500/5 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-400 font-bold text-sm uppercase tracking-wider">January 2026</span>
            <div className="w-16 h-px bg-gradient-to-r from-purple-400 via-emerald-400 to-cyan-400"></div>
            <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Revolutionary Breakthroughs</span>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            $36.8B Combined Value Creation
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Three groundbreaking breakthroughs in AI technology have converged to create unprecedented enterprise value. 
            Experience the future of ultra-autonomous systems, quantum consciousness, and neural-quantum fusion.
          </p>

          {/* Combined metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">$36.8B</div>
              <div className="text-sm text-purple-300">Total Enterprise Value</div>
            </div>
            <div className="bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">60,000x</div>
              <div className="text-sm text-emerald-300">Combined Acceleration</div>
            </div>
            <div className="bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.99%</div>
              <div className="text-sm text-cyan-300">Average Accuracy</div>
            </div>
          </div>
        </div>

        {/* Three breakthrough cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Ultra-Autonomous Enterprise */}
          <div className="bg-gradient-to-b from-emerald-900/20 to-blue-900/20 border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 font-bold text-sm">Ultra-Autonomous Enterprise</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">99.97% Operational Excellence</h3>
            <p className="text-gray-400 text-sm mb-4">
              Revolutionary self-optimizing AI orchestration delivering $12.4B in value creation with 73% cost reduction.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-emerald-400">99.97%</div>
                <div className="text-xs text-gray-400">Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">$12.4B</div>
                <div className="text-xs text-gray-400">Value</div>
              </div>
            </div>
            
            <Link to="/blog/ai-2026-january-ultra-autonomous-enterprise-revolution"
              className="block w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-center py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
            >
              Read Article
            </Link>
          </div>

          {/* Quantum Consciousness BI */}
          <div className="bg-gradient-to-b from-violet-900/20 to-cyan-900/20 border border-violet-500/30 rounded-2xl p-6 hover:border-violet-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <span className="text-violet-400 font-bold text-sm">Quantum Consciousness BI</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">10,000x Intelligence Acceleration</h3>
            <p className="text-gray-400 text-sm mb-4">
              Consciousness-driven business intelligence with 99.99% accuracy delivering $8.7B in strategic insights.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-violet-400">10,000x</div>
                <div className="text-xs text-gray-400">Speed</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-cyan-400">$8.7B</div>
                <div className="text-xs text-gray-400">Insights</div>
              </div>
            </div>
            
            <Link to="/blog/ai-2026-january-quantum-consciousness-bi-breakthrough"
              className="block w-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-center py-2 rounded-lg font-semibold hover:from-violet-600 hover:to-cyan-600 transition-all duration-300"
            >
              Read Article
            </Link>
          </div>

          {/* Neural-Quantum Fusion */}
          <div className="bg-gradient-to-b from-purple-900/20 to-emerald-900/20 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-400 font-bold text-sm">Neural-Quantum Fusion</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">50,000x Intelligence Unification</h3>
            <p className="text-gray-400 text-sm mb-4">
              Synthetic consciousness emergence through unified intelligence delivering $15.6B in enterprise value.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">50,000x</div>
                <div className="text-xs text-gray-400">Acceleration</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-emerald-400">$15.6B</div>
                <div className="text-xs text-gray-400">Value</div>
              </div>
            </div>
            
            <Link to="/blog/ai-2026-january-neural-quantum-fusion-breakthrough"
              className="block w-full bg-gradient-to-r from-purple-500 to-emerald-500 text-white text-center py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-emerald-600 transition-all duration-300"
            >
              Read Article
            </Link>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-emerald-500/10 border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Experience the Future?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the revolutionary transformation with our comprehensive AI solutions. Get exclusive access to 
              these breakthrough technologies and unlock unprecedented value for your organization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services"
                className="bg-gradient-to-r from-purple-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Solutions
              </Link>
              <Link to="/contact"
                className="border border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <Link to="/case-studies"
                className="border border-emerald-500 text-emerald-300 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default January2026RevolutionaryBreakthroughsMegaBanner;