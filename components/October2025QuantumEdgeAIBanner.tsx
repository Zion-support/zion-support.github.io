import React from 'react';

const October2025QuantumEdgeAIBanner = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 overflow-hidden border-b border-purple-500/30">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30 border border-purple-400/40 backdrop-blur-sm animate-pulse">
            <span className="text-2xl">⚡</span>
            <span className="text-purple-200 font-bold text-lg tracking-wider uppercase">
              🚀 BREAKING: OCTOBER 2025 QUANTUM EDGE AI REVOLUTION - JUST PUBLISHED!
            </span>
            <span className="text-2xl">⚡</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent leading-tight">
            Quantum Edge AI: Sub-Nanosecond Intelligence at Scale
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-5xl mx-auto font-medium">
            Revolutionary breakthrough: 10,000x faster decision-making, 99.98% energy savings, $327B success story
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-4 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-extrabold text-purple-200 mb-2">⚡ &lt;100ns</div>
            <div className="text-sm text-purple-300">Decision Latency</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-4 border border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-extrabold text-indigo-200 mb-2">99.99%</div>
            <div className="text-sm text-indigo-300">Accuracy Rate</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-4 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-extrabold text-blue-200 mb-2">$327B</div>
            <div className="text-sm text-blue-300">Value Created</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-4 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-extrabold text-cyan-200 mb-2">99.98%</div>
            <div className="text-sm text-cyan-300">Energy Savings</div>
          </div>
          <div className="bg-gradient-to-br from-violet-500/20 to-violet-600/20 backdrop-blur-lg rounded-xl p-4 border border-violet-400/30 hover:border-violet-400/60 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-extrabold text-violet-200 mb-2">10,000x</div>
            <div className="text-sm text-violet-300">Faster Processing</div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {/* Technical Breakthrough Article */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Technical Breakthrough</h3>
            <p className="text-purple-200 mb-6 text-sm leading-relaxed">
              Deep dive into Quantum Tensor Processing Units, neuromorphic integration, and quantum mesh networks. 
              Learn how sub-100ns latency and 99.99% accuracy are revolutionizing AI deployment.
            </p>
            <ul className="text-purple-300 text-sm space-y-2 mb-6">
              <li>✓ Quantum superposition processing</li>
              <li>✓ Neuromorphic computing fusion</li>
              <li>✓ Distributed quantum mesh architecture</li>
              <li>✓ Real-time adaptive learning</li>
            </ul>
            <a 
              href="/blog/ai-2025-oct-quantum-edge-ai-breakthrough"
              className="inline-block w-full text-center bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Read Technical Guide →
            </a>
          </div>

          {/* Success Story */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4">$327B Success Story</h3>
            <p className="text-indigo-200 mb-6 text-sm leading-relaxed">
              Fortune 50 automotive manufacturer achieves unprecedented transformation: Level 5 autonomy, 
              99.97% defect detection, and 91% downtime reduction across 285 global facilities.
            </p>
            <ul className="text-indigo-300 text-sm space-y-2 mb-6">
              <li>✓ 500K+ quantum edge nodes deployed</li>
              <li>✓ 6,579x faster decision-making</li>
              <li>✓ 2.5M autonomous vehicles</li>
              <li>✓ 18-month transformation timeline</li>
            </ul>
            <a 
              href="/case-studies/ai-2025-oct-automotive-quantum-edge-transformation-327-billion-success"
              className="inline-block w-full text-center bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              View Case Study →
            </a>
          </div>

          {/* Transformation Services */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Transform Your Business</h3>
            <p className="text-blue-200 mb-6 text-sm leading-relaxed">
              Comprehensive Quantum Edge AI services from strategy through operations. Proven methodology 
              delivering 5-20x ROI with pilot deployments starting at $2.5M.
            </p>
            <ul className="text-blue-300 text-sm space-y-2 mb-6">
              <li>✓ Strategic consulting & roadmap</li>
              <li>✓ Pilot deployment programs</li>
              <li>✓ Enterprise-scale implementation</li>
              <li>✓ 24/7 managed services</li>
            </ul>
            <a 
              href="/services/quantum-edge-ai-transformation-services"
              className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Explore Services →
            </a>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mb-12 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            🎯 Industry-Transforming Applications
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">🏭</div>
              <h4 className="font-bold text-purple-200 mb-2">Manufacturing</h4>
              <p className="text-sm text-purple-300">99.97% defect detection, 91% downtime reduction</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🚗</div>
              <h4 className="font-bold text-indigo-200 mb-2">Autonomous Vehicles</h4>
              <p className="text-sm text-indigo-300">38ns threat detection, Level 5 autonomy certified</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🏥</div>
              <h4 className="font-bold text-blue-200 mb-2">Healthcare</h4>
              <p className="text-sm text-blue-300">Sub-ms diagnosis, 12K+ lives saved annually</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-purple-200 text-lg mb-6 max-w-3xl mx-auto">
            The quantum edge revolution is here. Organizations adopting this technology achieve insurmountable 
            competitive advantages through 10,000x faster decision-making and unprecedented intelligence capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog/ai-2025-oct-quantum-edge-ai-breakthrough"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              📖 Read Full Article
            </a>
            <a 
              href="/services/quantum-edge-ai-transformation-services"
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              🚀 Get Started Today
            </a>
            <a 
              href="/case-studies/ai-2025-oct-automotive-quantum-edge-transformation-327-billion-success"
              className="border-2 border-purple-400 text-purple-300 hover:bg-purple-500/20 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              💰 View Success Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025QuantumEdgeAIBanner;
