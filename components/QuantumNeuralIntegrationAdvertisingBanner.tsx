import React from 'react';

const QuantumNeuralIntegrationAdvertisingBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              ⚛️ BREAKTHROUGH: Quantum-Neural Integration Revolution
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            $3.2B Value Creation Through Quantum-Enhanced AI
          </h2>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-semibold max-w-5xl mx-auto">
            Discover How Fortune 100 Companies Achieve 10,000x Processing Speed with Quantum-Neural Integration Technology
          </p>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-5xl mb-6">⚛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Processing</h3>
              <p className="text-gray-300 text-lg mb-6">
                Superconducting quantum processors achieving 10,000x speed improvements with infinite parallelization
              </p>
              <div className="text-purple-400 font-bold text-2xl">10,000x Speed</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enhanced Neural Networks</h3>
              <p className="text-gray-300 text-lg mb-6">
                Quantum-enhanced neural architectures learning 1000x faster with breakthrough accuracy
              </p>
              <div className="text-indigo-400 font-bold text-2xl">99.9% Accuracy</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-5xl mb-6">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Distributed Intelligence</h3>
              <p className="text-gray-300 text-lg mb-6">
                Global quantum networks with instantaneous communication and fault-tolerant systems
              </p>
              <div className="text-blue-400 font-bold text-2xl">Zero Latency</div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-purple-500/30 mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Proven Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-purple-400 mb-2">$3.2B</div>
                <div className="text-purple-300 text-sm font-semibold">Risk Mitigation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-400 mb-2">10,000x</div>
                <div className="text-indigo-300 text-sm font-semibold">Processing Speed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-blue-400 mb-2">99.9%</div>
                <div className="text-blue-300 text-sm font-semibold">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-green-400 mb-2">0%</div>
                <div className="text-green-300 text-sm font-semibold">Downtime</div>
              </div>
            </div>
          </div>

          {/* Content Links */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6">📚 Latest Breakthrough</h4>
              <div className="space-y-4">
                <a 
                  href="/blog/ai-2026-quantum-neural-integration-revolution" 
                  className="block text-purple-400 hover:text-purple-300 transition-colors text-lg font-semibold"
                >
                  • AI 2026: Quantum-Neural Integration Revolution
                </a>
                <p className="text-gray-300 text-sm">
                  Discover how quantum computing and neural networks combine to achieve breakthrough AI capabilities
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6">💼 Success Story</h4>
              <div className="space-y-4">
                <a 
                  href="/case-studies/quantum-neural-integration-3-2-billion-financial-success" 
                  className="block text-indigo-400 hover:text-indigo-300 transition-colors text-lg font-semibold"
                >
                  • $3.2B Financial Services Success Story
                </a>
                <p className="text-gray-300 text-sm">
                  See how a Fortune 100 investment bank achieved unprecedented results with quantum-enhanced AI
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/blog/ai-2026-quantum-neural-integration-revolution" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 text-xl"
            >
              Read Quantum Breakthrough →
            </a>
            <a 
              href="/case-studies/quantum-neural-integration-3-2-billion-financial-success" 
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1 text-xl"
            >
              View $3.2B Success Story →
            </a>
            <a 
              href="/contact" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 text-xl"
            >
              Get Free Consultation
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Join the quantum revolution. Transform your AI capabilities with quantum-enhanced neural networks that achieve unprecedented performance and accuracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumNeuralIntegrationAdvertisingBanner;