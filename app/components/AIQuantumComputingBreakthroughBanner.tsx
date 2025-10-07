import Link from 'next/link';

export default function AIQuantumComputingBreakthroughBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-spin"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <span className="text-3xl animate-pulse">⚛️</span>
            <span className="font-bold text-lg">QUANTUM AI BREAKTHROUGH</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The Quantum AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {' '}Revolution
            </span>
          </h2>
          
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
            Experience the future of computing with Quantum AI systems that solve problems 
            1 billion times faster than classical computers. The next evolution of artificial intelligence is here.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-purple-400">⚡</span>
              <span>1Bx Faster Processing</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-pink-400">🔬</span>
              <span>Quantum Supremacy</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-blue-400">🌌</span>
              <span>Unlimited Scalability</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Quantum Processing */}
          <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚛️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Quantum Processing</h3>
            </div>
            <p className="text-gray-300 text-center mb-6 leading-relaxed">
              Harness the power of quantum mechanics to process exponentially complex calculations 
              in milliseconds instead of years.
            </p>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">1Bx</div>
              <div className="text-sm text-gray-400">Speed Increase</div>
            </div>
          </div>

          {/* AI Optimization */}
          <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Optimization</h3>
            </div>
            <p className="text-gray-300 text-center mb-6 leading-relaxed">
              Quantum-enhanced machine learning algorithms that discover optimal solutions 
              across infinite-dimensional problem spaces.
            </p>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-1">∞</div>
              <div className="text-sm text-gray-400">Possibilities</div>
            </div>
          </div>

          {/* Future Applications */}
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Future Applications</h3>
            </div>
            <p className="text-gray-300 text-center mb-6 leading-relaxed">
              Revolutionary applications in drug discovery, financial modeling, climate simulation, 
              and artificial general intelligence.
            </p>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">2026</div>
              <div className="text-sm text-gray-400">Launch Year</div>
            </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="text-2xl mb-3">💊</div>
            <h4 className="font-bold mb-2">Drug Discovery</h4>
            <p className="text-sm text-gray-400">Accelerate pharmaceutical research by 1000x</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="text-2xl mb-3">💰</div>
            <h4 className="font-bold mb-2">Financial Modeling</h4>
            <p className="text-sm text-gray-400">Predict market movements with quantum precision</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="text-2xl mb-3">🌍</div>
            <h4 className="font-bold mb-2">Climate Simulation</h4>
            <p className="text-sm text-gray-400">Model global climate systems in real-time</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="text-2xl mb-3">🤖</div>
            <h4 className="font-bold mb-2">AGI Development</h4>
            <p className="text-sm text-gray-400">Achieve true artificial general intelligence</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <h3 className="text-2xl font-bold mb-4">Early Access Program</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Be among the first to experience quantum AI computing. Limited spots available 
              for our exclusive early access program launching in Q2 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/quantum-ai"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
              >
                Join Early Access
              </Link>
              <Link
                href="/blog/quantum-ai-breakthrough"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            Only 50 enterprise clients will have access to quantum AI in 2026
          </p>
        </div>
      </div>
    </section>
  );
}