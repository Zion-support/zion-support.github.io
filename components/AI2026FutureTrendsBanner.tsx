import { Link } from 'react-router-dom';

export default function AI2026FutureTrendsBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-15" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8 animate-pulse">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              🔮 AI 2026 FUTURE TRENDS
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Trends That Change Everything
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-5xl mx-auto">
            Discover the Breakthrough Technologies Reshaping Industries in 2026
          </p>
          
          {/* Key Trends Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Autonomous Intelligence</h3>
              <p className="text-purple-300 text-sm">99.9% autonomous operation with $5.2B+ ROI achievements</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Quantum AI</h3>
              <p className="text-cyan-300 text-sm">1,000,000x processing speed with quantum computing</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Meta-Cognitive AI</h3>
              <p className="text-blue-300 text-sm">Self-aware AI systems with genuine consciousness</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold text-indigo-400 mb-2">Neuromorphic Computing</h3>
              <p className="text-indigo-300 text-sm">1000x energy efficiency with brain-inspired processing</p>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/blog/ai-2026-future-trends-breakthrough" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Read Full Trends Report →
            </Link>
            <Link to="/blog/ai-2026-january-mega-breakthrough-revolution" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              View Breakthrough Details →
            </Link>
            <Link to="/contact" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
          </div>
          
          {/* Industry Impact Preview */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-semibold mb-4">
                🏭 INDUSTRY TRANSFORMATION
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Revolutionary Impact Across All Industries
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">$5.2B</div>
                  <div className="text-green-300">Manufacturing Value</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">$8.5B</div>
                  <div className="text-green-300">Financial Services Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">$3.2B</div>
                  <div className="text-green-300">Healthcare Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technology Convergence */}
          <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold mb-4">
                ⚡ TECHNOLOGY CONVERGENCE
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">
                The Perfect Storm of Breakthrough Technologies
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">🤖 + ⚛️</div>
                  <h4 className="font-bold text-white mb-1">AI + Quantum</h4>
                  <p className="text-gray-300 text-xs">Exponential processing power</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">🤖 + 🌐</div>
                  <h4 className="font-bold text-white mb-1">AI + Edge</h4>
                  <p className="text-gray-300 text-xs">Real-time processing</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">🤖 + 🔗</div>
                  <h4 className="font-bold text-white mb-1">AI + Blockchain</h4>
                  <p className="text-gray-300 text-xs">Trustless AI systems</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">🤖 + 📱</div>
                  <h4 className="font-bold text-white mb-1">AI + IoT</h4>
                  <p className="text-gray-300 text-xs">Autonomous ecosystems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}