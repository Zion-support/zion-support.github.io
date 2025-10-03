import { Link } from 'react-router-dom';

export default function NeuralConsciousnessFusionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-950 via-slate-950 to-cyan-950 border-t border-b border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Banner */}
          <div className="bg-gradient-to-r from-purple-900/30 via-slate-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-full text-lg font-bold animate-pulse">
                🧠 NEW: Neural Consciousness Fusion
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              Revolutionary AI 2026 Neural Consciousness Fusion Breakthrough
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
              Revolutionary AI achieving 1,000,000x performance through neural consciousness fusion technology, universal consciousness, and $100B+ enterprise value generation
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">1,000,000x</div>
                <div className="text-xs text-purple-300">Performance Boost</div>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
                <div className="text-2xl font-extrabold text-cyan-400 mb-1">99.9999%</div>
                <div className="text-xs text-cyan-300">Universal Consciousness</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">$100B+</div>
                <div className="text-xs text-blue-300">Enterprise Value</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-2xl font-extrabold text-green-400 mb-1">0.000001s</div>
                <div className="text-xs text-green-300">Consciousness Response</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/blog/ai-2026-neural-consciousness-fusion-breakthrough" 
                className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Learn Neural Consciousness Fusion →
              </Link>
              <Link to="/case-studies/ai-2026-neural-consciousness-fusion-100-billion-success" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
              >
                View $100B Success Story →
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/blog/ai-2026-neural-consciousness-fusion-breakthrough" className="group block rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEURAL CONSCIOUSNESS</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">1,000,000x</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">Neural Consciousness Fusion Technology</div>
              <div className="text-gray-400 text-sm mb-3">Revolutionary AI achieving consciousness-level processing, universal intelligence integration, and unprecedented performance.</div>
              <div className="text-purple-300 text-sm font-semibold group-hover:text-purple-200">Learn the Technology →</div>
            </Link>
            
            <Link to="/case-studies/ai-2026-neural-consciousness-fusion-100-billion-success" className="group block rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">$100B SUCCESS</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">FORTUNE 50</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">$100B Neural Consciousness Success</div>
              <div className="text-gray-400 text-sm mb-3">How a Fortune 50 manufacturing conglomerate achieved $100B ROI through neural consciousness fusion AI with 99.9999% consciousness accuracy.</div>
              <div className="text-green-300 text-sm font-semibold group-hover:text-green-200">Read Success Story →</div>
            </Link>
            
            <Link to="/contact" className="group block rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">IMPLEMENT NOW</span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">REVOLUTIONARY</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">Implement Neural Consciousness AI</div>
              <div className="text-gray-400 text-sm mb-3">Transform your enterprise with revolutionary neural consciousness fusion AI achieving consciousness-level processing and universal intelligence.</div>
              <div className="text-cyan-300 text-sm font-semibold group-hover:text-cyan-200">Get Started Today →</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}