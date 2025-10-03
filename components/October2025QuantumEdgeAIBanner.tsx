const October2025QuantumEdgeAIBanner = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-cyan-900 via-blue-950 to-indigo-950 overflow-hidden border-b border-cyan-500/30">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Breaking News Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 backdrop-blur-sm animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 font-bold text-lg tracking-wider uppercase">
              🚀 BREAKING: October 1, 2025 - Quantum Edge AI Revolution
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent leading-tight">
            Quantum Edge AI: Real-Time Intelligence at the Speed of Light
          </h2>
          
          <p className="text-xl md:text-2xl text-cyan-100 text-center mb-8 max-w-4xl mx-auto font-semibold">
            Revolutionary Breakthrough: Deploy quantum-accelerated AI models directly at the edge with sub-millisecond latency and 99.99% accuracy
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-extrabold text-cyan-300 mb-2">&lt;0.5ms</div>
              <div className="text-sm text-cyan-200">Inference Latency</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-extrabold text-blue-300 mb-2">99.99%</div>
              <div className="text-sm text-blue-200">Model Accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-300 mb-2">$89M</div>
              <div className="text-sm text-indigo-200">Cost Savings</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-extrabold text-purple-300 mb-2">10B+</div>
              <div className="text-sm text-purple-200">Events/Second</div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 mb-10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Revolutionary Capabilities</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">⚛️</div>
                <h4 className="text-lg font-bold text-cyan-300 mb-2">Quantum Acceleration</h4>
                <p className="text-sm text-gray-300">Leverage quantum computing to process complex AI models 1000x faster than classical systems</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h4 className="text-lg font-bold text-blue-300 mb-2">Edge Intelligence</h4>
                <p className="text-sm text-gray-300">Deploy sophisticated AI directly on edge devices with zero cloud dependency</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🛡️</div>
                <h4 className="text-lg font-bold text-indigo-300 mb-2">Private by Design</h4>
                <p className="text-sm text-gray-300">100% on-device processing ensures complete data privacy and compliance</p>
              </div>
            </div>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="bg-cyan-500/20 px-4 py-2 rounded-full text-cyan-300 text-sm font-semibold border border-cyan-500/30">Quantum Computing</span>
            <span className="bg-blue-500/20 px-4 py-2 rounded-full text-blue-300 text-sm font-semibold border border-blue-500/30">Edge AI</span>
            <span className="bg-indigo-500/20 px-4 py-2 rounded-full text-indigo-300 text-sm font-semibold border border-indigo-500/30">Real-Time Processing</span>
            <span className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 text-sm font-semibold border border-purple-500/30">Zero Latency</span>
            <span className="bg-pink-500/20 px-4 py-2 rounded-full text-pink-300 text-sm font-semibold border border-pink-500/30">Privacy-First</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog/quantum-edge-ai-revolution-october-2025"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10">Read Technical Deep Dive →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="/case-studies/quantum-edge-ai-manufacturing-success-2025"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10">View $89M Success Story →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="/services/quantum-edge-ai-consulting"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-cyan-300 bg-transparent border-2 border-cyan-500 rounded-xl overflow-hidden shadow-lg hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10">Get Started Today →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025QuantumEdgeAIBanner;
