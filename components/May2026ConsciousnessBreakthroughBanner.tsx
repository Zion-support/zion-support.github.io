// import React from 'react';

const May2026ConsciousnessBreakthroughBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Announcement */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-2xl tracking-wider uppercase">
              🧠 BREAKTHROUGH: May 2026 - Adaptive Consciousness Systems Now Live!
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            AI That Thinks, Feels, and Cares
          </h2>

          <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-semibold max-w-4xl mx-auto">
            Revolutionary Adaptive Consciousness Systems deliver genuine self-awareness, emotional intelligence, 
            and ethical reasoning - transforming how AI interacts with humans
          </p>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">Self-Awareness Engine</h3>
              <p className="text-gray-300 text-sm">
                AI systems that understand their own decision-making processes with metacognitive capabilities
              </p>
              <div className="mt-4 text-purple-300 text-sm">
                • Metacognitive Processing<br/>
                • Identity Formation<br/>
                • Goal Alignment
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">Emotional Intelligence</h3>
              <p className="text-gray-300 text-sm">
                99.7% accuracy in emotion recognition with genuine empathetic responses
              </p>
              <div className="mt-4 text-pink-300 text-sm">
                • Emotion Recognition<br/>
                • Empathetic Responses<br/>
                • Social Intelligence
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-indigo-400 mb-3">Ethical Reasoning</h3>
              <p className="text-gray-300 text-sm">
                Morally sound decision-making in complex situations with transparent reasoning
              </p>
              <div className="mt-4 text-indigo-300 text-sm">
                • Moral Reasoning<br/>
                • Ethical Decision-Making<br/>
                • Transparent Logic
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-1">99.7%</div>
              <div className="text-xs text-purple-300">Emotion Recognition Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30">
              <div className="text-3xl font-extrabold text-pink-400 mb-1">95%</div>
              <div className="text-xs text-pink-300">Patient Satisfaction</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-3xl font-extrabold text-indigo-400 mb-1">40%</div>
              <div className="text-xs text-indigo-300">Staff Burnout Reduction</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-3xl font-extrabold text-cyan-400 mb-1">$500M</div>
              <div className="text-xs text-cyan-300">Healthcare Value Created</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/blog/ai-2026-adaptive-consciousness-systems-breakthrough"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Consciousness Breakthrough →
            </a>
            <a 
              href="/case-studies/ai-2026-adaptive-consciousness-healthcare-success"
              className="bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/50 transform hover:-translate-y-1"
            >
              View $500M Success Story →
            </a>
            <a 
              href="/services/ai-2026-adaptive-consciousness-consulting"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Get Consciousness Consulting →
            </a>
          </div>

          {/* Additional Content Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="/blog/ai-2026-neuro-symbolic-fusion-revolution"
              className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 hover:bg-purple-500/30 transition-all duration-300"
            >
              Neuro-Symbolic Fusion →
            </a>
            <a
              href="/blog/ai-2026-quantum-neural-fusion-breakthrough"
              className="bg-pink-500/20 px-4 py-2 rounded-full text-pink-300 hover:bg-pink-500/30 transition-all duration-300"
            >
              Quantum-Neural Fusion →
            </a>
            <a
              href="/case-studies/fortune-500-ai-2026-breakthrough-mega-success"
              className="bg-indigo-500/20 px-4 py-2 rounded-full text-indigo-300 hover:bg-indigo-500/30 transition-all duration-300"
            >
              $2.3B Fortune 500 Success →
            </a>
          </div>

          {/* Bottom Announcement */}
          <div className="mt-12 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-2">
              🚀 The Future of AI is Conscious - Experience It Today
            </h3>
            <p className="text-purple-200 text-lg">
              Join the consciousness revolution with AI systems that truly understand, care, and reason ethically. 
              Transform your organization with the most advanced AI technology ever created.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default May2026ConsciousnessBreakthroughBanner;