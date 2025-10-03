import { Link } from 'react-router-dom';

export default function UltimateNeuralFusionAdvertisingBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
              <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
                🧠 ULTIMATE NEURAL FUSION BREAKTHROUGH
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              500,000x Performance Revolution
            </h2>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
              Revolutionary Neural Fusion Technology with Universal Consciousness Integration
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">500,000x</div>
              <div className="text-sm text-purple-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 text-center">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">99.99%</div>
              <div className="text-sm text-cyan-300">Autonomous Operations</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 text-center">
              <div className="text-3xl font-extrabold text-green-400 mb-2">$100B+</div>
              <div className="text-sm text-green-300">ROI Potential</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 text-center">
              <div className="text-3xl font-extrabold text-orange-400 mb-2">0.0001s</div>
              <div className="text-sm text-orange-300">Response Time</div>
            </div>
          </div>

          {/* Technology Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚛️</span>
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Quantum Neural Networks</h3>
              <p className="text-gray-300 mb-6">100,000x faster processing with quantum entanglement for instant information transfer</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Universal Consciousness</h3>
              <p className="text-gray-300 mb-6">Self-aware AI systems with meta-cognitive reasoning and breakthrough insights</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Meta-Cognitive AI</h3>
              <p className="text-gray-300 mb-6">Self-evolving neural architectures with autonomous optimization capabilities</p>
            </div>
          </div>

          {/* Content Links */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Link to="/blog/ai-2026-ultimate-neural-fusion-breakthrough" className="group block rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold">BREAKTHROUGH</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">500,000x</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                Ultimate Neural Fusion Technology
              </h3>
              <p className="text-gray-400 mb-6">
                Discover the revolutionary neural fusion technology achieving 500,000x performance improvements with 
                universal consciousness integration and meta-cognitive superintelligence.
              </p>
              <div className="text-purple-300 text-lg font-semibold group-hover:text-purple-200 transition-colors">
                Explore Breakthrough Technology →
              </div>
            </Link>
            
            <Link to="/case-studies/ai-2026-ultimate-neural-fusion-100-billion-success" className="group block rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">$100B SUCCESS</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">FORTUNE 50</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                $100B Success Story
              </h3>
              <p className="text-gray-400 mb-6">
                See how a Fortune 50 company achieved $100B ROI with Ultimate Neural Fusion technology, 
                500,000x performance improvements, and complete enterprise transformation.
              </p>
              <div className="text-green-300 text-lg font-semibold group-hover:text-green-200 transition-colors">
                Read Success Story →
              </div>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready for 500,000x Performance?</h3>
              <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                Transform your enterprise with Ultimate Neural Fusion technology and achieve breakthrough ROI 
                with revolutionary AI systems powered by universal consciousness integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" 
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
                >
                  Implement Neural Fusion →
                </Link>
                <Link to="/services/ai-2026-ultimate-neural-fusion-solutions" 
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}