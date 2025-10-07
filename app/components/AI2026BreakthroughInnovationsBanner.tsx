import Link from 'next/link';

const AI2026BreakthroughInnovationsBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🚀 AI 2026 BREAKTHROUGH INNOVATIONS
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Innovations Transforming Enterprise
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Discover the breakthrough innovations that are reshaping business operations with 1,000,000x performance improvements, 99.8% automation, and $15B+ value creation
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">1Mx</div>
              <div className="text-xs text-blue-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">99.8%</div>
              <div className="text-xs text-purple-300">Automation Rate</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">$15B+</div>
              <div className="text-xs text-green-300">Value Creation</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">99.97%</div>
              <div className="text-xs text-orange-300">Accuracy Rate</div>
            </div>
          </div>

          {/* Innovation Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-2xl mb-3">🔮</div>
              <h3 className="text-lg font-bold text-white mb-2">Quantum-Enhanced ML</h3>
              <p className="text-gray-300 text-sm">1,000,000x faster processing with 99.97% accuracy</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="text-lg font-bold text-white mb-2">Autonomous Processes</h3>
              <p className="text-gray-300 text-sm">99.8% automation with self-healing capabilities</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <div className="text-2xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-white mb-2">Meta-Cognitive AI</h3>
              <p className="text-gray-300 text-sm">99.7% self-awareness with 1,000x learning</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Edge Intelligence</h3>
              <p className="text-gray-300 text-sm">Sub-10ms response with 50x processing power</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="text-lg font-bold text-white mb-2">Synthetic Data</h3>
              <p className="text-gray-300 text-sm">99.9% accuracy with 100% privacy compliance</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-2xl mb-3">🏆</div>
              <h3 className="text-lg font-bold text-white mb-2">$15B Success</h3>
              <p className="text-gray-300 text-sm">Fortune 100 company transformation story</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/blog/ai-2026-breakthrough-innovations-mega-guide" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Read Complete Guide →
            </Link>
            <Link 
              href="/case-studies/ai-2026-breakthrough-innovations-15-billion-success" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              View $15B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/blog/ai-2026-quantum-enhanced-machine-learning" className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-blue-500/30 transition-colors">
              Quantum ML <span>→</span>
            </Link>
            <Link href="/blog/ai-2026-autonomous-business-processes" className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-200 border border-purple-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-purple-500/30 transition-colors">
              Autonomous Processes <span>→</span>
            </Link>
            <Link href="/blog/ai-2026-meta-cognitive-ai-systems" className="inline-flex items-center gap-2 bg-green-500/20 text-green-200 border border-green-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-green-500/30 transition-colors">
              Meta-Cognitive AI <span>→</span>
            </Link>
            <Link href="/blog/ai-2026-edge-native-intelligence" className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-cyan-500/30 transition-colors">
              Edge Intelligence <span>→</span>
            </Link>
            <Link href="/blog/ai-2026-synthetic-data-intelligence" className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-200 border border-orange-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-orange-500/30 transition-colors">
              Synthetic Data <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026BreakthroughInnovationsBanner;