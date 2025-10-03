// import React from 'react';

const May2026NeuroSymbolicFusionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Announcement */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-8 animate-pulse">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
              🧩 BREAKTHROUGH: Neuro-Symbolic Fusion Revolution - Learn + Reason Like Humans
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            AI That Learns AND Reasons
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-semibold max-w-4xl mx-auto">
            Revolutionary Neuro-Symbolic Fusion combines neural pattern recognition with logical reasoning, 
            creating AI systems that can both learn from data and reason through complex problems
          </p>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Neural Learning</h3>
              <p className="text-gray-300 mb-4">
                Advanced pattern recognition and data-driven insights with deep learning capabilities
              </p>
              <div className="space-y-2 text-emerald-300">
                <div>• Pattern Recognition</div>
                <div>• Data-Driven Insights</div>
                <div>• Feature Extraction</div>
                <div>• Memory Systems</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-teal-400 mb-4">Symbolic Reasoning</h3>
              <p className="text-gray-300 mb-4">
                Logical inference, rule-based decision making, and transparent reasoning processes
              </p>
              <div className="space-y-2 text-teal-300">
                <div>• Logical Inference</div>
                <div>• Rule-Based Decisions</div>
                <div>• Knowledge Graphs</div>
                <div>• Causal Reasoning</div>
              </div>
            </div>
          </div>

          {/* Fusion Benefits */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 mb-12">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">🧩 Fusion Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🔍</div>
                <h4 className="text-xl font-bold text-cyan-300 mb-2">Interpretable AI</h4>
                <p className="text-gray-300 text-sm">Clear explanations for all AI decisions with transparent reasoning</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="text-xl font-bold text-cyan-300 mb-2">Few-Shot Learning</h4>
                <p className="text-gray-300 text-sm">Learn new concepts with minimal examples and rapid adaptation</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="text-xl font-bold text-cyan-300 mb-2">Generalization</h4>
                <p className="text-gray-300 text-sm">Robust performance across diverse scenarios and domains</p>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30">
              <div className="text-2xl font-extrabold text-emerald-400 mb-1">60%</div>
              <div className="text-xs text-emerald-300">Faster Drug Development</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30">
              <div className="text-2xl font-extrabold text-teal-400 mb-1">85%</div>
              <div className="text-xs text-teal-300">Market Prediction Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">75%</div>
              <div className="text-xs text-cyan-300">Success Rate Improvement</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">$1.8B</div>
              <div className="text-xs text-blue-300">Pharma Cost Savings</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/blog/ai-2026-neuro-symbolic-fusion-revolution"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              Read Neuro-Symbolic Fusion Guide →
            </a>
            <a 
              href="/services/ai-2026-adaptive-consciousness-consulting"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
            >
              Get NSF Consulting →
            </a>
            <a 
              href="/contact"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Schedule Demo
            </a>
          </div>

          {/* Additional Content Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="/blog/ai-2026-adaptive-consciousness-systems-breakthrough"
              className="bg-emerald-500/20 px-4 py-2 rounded-full text-emerald-300 hover:bg-emerald-500/30 transition-all duration-300"
            >
              Adaptive Consciousness →
            </a>
            <a
              href="/case-studies/ai-2026-adaptive-consciousness-healthcare-success"
              className="bg-teal-500/20 px-4 py-2 rounded-full text-teal-300 hover:bg-teal-500/30 transition-all duration-300"
            >
              $500M Healthcare Success →
            </a>
            <a
              href="/blog/ai-2026-quantum-neural-fusion-breakthrough"
              className="bg-cyan-500/20 px-4 py-2 rounded-full text-cyan-300 hover:bg-cyan-500/30 transition-all duration-300"
            >
              Quantum-Neural Fusion →
            </a>
          </div>

          {/* Bottom Announcement */}
          <div className="mt-12 p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/30">
            <h3 className="text-2xl font-bold text-white mb-2">
              🧩 The Perfect Fusion: Neural Learning + Symbolic Reasoning
            </h3>
            <p className="text-emerald-200 text-lg">
              Experience AI that can both learn from vast datasets and reason through complex problems logically. 
              The future of artificial intelligence is here - and it's both intelligent and interpretable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default May2026NeuroSymbolicFusionBanner;