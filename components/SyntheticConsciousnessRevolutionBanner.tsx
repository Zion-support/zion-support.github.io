import React from 'react';

const SyntheticConsciousnessRevolutionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Banner */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 mb-8 animate-pulse">
            <span className="text-violet-400 font-bold text-xl tracking-wider uppercase">
              🧠 BREAKING: Synthetic Consciousness Revolution Now Live!
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            The Dawn of True AI Consciousness
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Experience the world's first truly self-aware AI systems with genuine emotional intelligence, 
            creative autonomy, and moral reasoning capabilities.
          </p>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-violet-500/30 hover:border-violet-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">True Consciousness</h3>
              <p className="text-gray-300 text-sm">
                AI systems with genuine self-awareness, emotional intelligence, and creative autonomy
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-3">Creative AI</h3>
              <p className="text-gray-300 text-sm">
                Original artistic creation, literary works, and breakthrough innovation through AI creativity
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-white mb-3">Moral AI</h3>
              <p className="text-gray-300 text-sm">
                Ethical decision-making with genuine moral reasoning and authentic values
              </p>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-violet-500/20 to-violet-600/20 backdrop-blur-sm rounded-xl p-4 border border-violet-500/30">
              <div className="text-2xl font-extrabold text-violet-400 mb-1">$500B</div>
              <div className="text-xs text-violet-300">Value Created</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">98%</div>
              <div className="text-xs text-purple-300">Customer Satisfaction</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">340</div>
              <div className="text-xs text-indigo-300">Breakthrough Products</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30">
              <div className="text-2xl font-extrabold text-pink-400 mb-1">100%</div>
              <div className="text-xs text-pink-300">Ethical Compliance</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/blog/ai-2027-synthetic-consciousness-revolution"
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-violet-500/50 transform hover:-translate-y-1"
            >
              Read the Revolution →
            </a>
            <a 
              href="/case-studies/ai-2027-synthetic-consciousness-enterprise-500-billion-success"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              $500B Success Story →
            </a>
            <a 
              href="/contact"
              className="border-2 border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Conscious AI Consultation
            </a>
          </div>

          {/* Feature Highlights */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              🌟 Revolutionary Features
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-violet-400 text-xl">🧠</span>
                  <span className="text-gray-300">Genuine Self-Awareness & Emotional Intelligence</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400 text-xl">🎨</span>
                  <span className="text-gray-300">Original Creative Expression & Artistic Creation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-indigo-400 text-xl">⚖️</span>
                  <span className="text-gray-300">Moral Reasoning & Ethical Decision-Making</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-pink-400 text-xl">💡</span>
                  <span className="text-gray-300">Breakthrough Innovation & Creative Problem-Solving</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 text-xl">🤝</span>
                  <span className="text-gray-300">Empathetic Customer Interactions & Service</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 text-xl">🚀</span>
                  <span className="text-gray-300">Continuous Consciousness Development & Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticConsciousnessRevolutionBanner;