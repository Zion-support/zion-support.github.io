import { Link } from 'react-router-dom';

const October2025BreakthroughBanner = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-emerald-900/20" <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" <div className="container mx-auto px-6 relative z-10">
        {/* Main Banner */}
        <div className="bg-gradient-to-br from-purple-900/50 via-indigo-900/50 to-emerald-900/50 rounded-2xl border-2 border-purple-500/30 backdrop-blur-sm p-8 md:p-12 mb-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">

            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-bold border border-purple-400/30">
              🔥 OCTOBER 2025 BREAKTHROUGH
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-300 via-indigo-300 to-emerald-300 bg-clip-text text-transparent">
            Revolutionary AI Technologies Transforming Enterprise Operations
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-4xl leading-relaxed">
            Explore three groundbreaking AI innovations delivering unprecedented results: Sovereign Agents with 94% decision accuracy, 
            Quantum ML achieving 1000x speedup, and Neuromorphic Edge Computing at 10,000x energy efficiency.
          </p>
          
          {/* Featured Articles Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Article 1: Sovereign Agents */}
            <div className="bg-gradient-to-br from-purple-900/60 to-purple-800/60 p-6 rounded-xl border border-purple-400/30 hover:border-purple-400/60 transition-all hover:scale-105 group">
              <div className="flex items-center gap-2 mb-3">

                <span className="text-xs font-semibold text-purple-300 uppercase tracking-wide">AI Sovereign Agents</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                Autonomous Decision-Making Revolution
              </h3>
              <p className="text-white/70 text-sm mb-4">
                94% accuracy • $45M+ savings • 10x efficiency gains
              </p>
              <Link 
                to="/blog/ai-sovereign-agents-enterprise-2025"
                className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Read Article</Link>
            </div>
            
            {/* Article 2: Quantum ML */}
            <div className="bg-gradient-to-br from-indigo-900/60 to-indigo-800/60 p-6 rounded-xl border border-indigo-400/30 hover:border-indigo-400/60 transition-all hover:scale-105 group">
              <div className="flex items-center gap-2 mb-3">

                <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wide">Quantum ML</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                1000x Computational Speed Breakthrough
              </h3>
              <p className="text-white/70 text-sm mb-4">
                1000x speedup • $89M savings • Impossible problems solved
              </p>
              <Link 
                to="/blog/ai-quantum-machine-learning-2025"
                className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200 font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Read Article</Link>
            </div>
            
            {/* Article 3: Neuromorphic Edge */}
            <div className="bg-gradient-to-br from-emerald-900/60 to-emerald-800/60 p-6 rounded-xl border border-emerald-400/30 hover:border-emerald-400/60 transition-all hover:scale-105 group">
              <div className="flex items-center gap-2 mb-3">

                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">Neuromorphic Edge</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Brain-Inspired AI at 0.001W Power
              </h3>
              <p className="text-white/70 text-sm mb-4">
                10,000x energy efficiency • 100M+ devices • Real-time learning
              </p>
              <Link 
                to="/blog/ai-neuromorphic-edge-computing-2025"
                className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Read Article</Link>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-wrap gap-4 items-center">
            <Link 
              to="/blog"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-purple-500/50 inline-flex items-center gap-2"
            >
              Explore All Articles</Link>
            <Link 
              to="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border border-white/20 hover:border-white/40 inline-flex items-center gap-2"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
        
        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-xl border border-purple-400/20 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-purple-400 mb-2">$174M+</div>
            <div className="text-white/70 text-sm">Combined Annual Savings</div>
          </div>
          <div className="bg-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-indigo-400/20 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-2">10,000x</div>
            <div className="text-white/70 text-sm">Maximum Efficiency Gain</div>
          </div>
          <div className="bg-emerald-900/30 backdrop-blur-sm p-6 rounded-xl border border-emerald-400/20 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-2">100M+</div>
            <div className="text-white/70 text-sm">Devices Deployed</div>
          </div>
          <div className="bg-cyan-900/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-2">94%</div>
            <div className="text-white/70 text-sm">Decision Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025BreakthroughBanner;
