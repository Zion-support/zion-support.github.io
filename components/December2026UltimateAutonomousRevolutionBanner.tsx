import { Link } from 'react-router-dom';

const December2026UltimateAutonomousRevolutionBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-950 via-slate-950 to-blue-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-slate-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-slate-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-bold text-lg tracking-wider uppercase">
              🚀 December 2026 Breakthrough
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-slate-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Ultimate Autonomous Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            The Final Frontier: 100% Autonomous Operations with Infinite Scalability
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">$1T</div>
              <div className="text-xs text-blue-300">Value Generated</div>
            </div>
            <div className="bg-gradient-to-r from-slate-500/20 to-slate-600/20 backdrop-blur-sm rounded-xl p-4 border border-slate-500/30">
              <div className="text-2xl font-extrabold text-slate-400 mb-1">100%</div>
              <div className="text-xs text-slate-300">Autonomous</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">∞</div>
              <div className="text-xs text-cyan-300">Scalability</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-slate-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Complete Business Autonomy</h3>
                <p className="text-sm text-blue-300">Zero human intervention required</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              100% autonomous operations with infinite scalability, perfect efficiency, and complete elimination of human intervention in business processes.
            </p>
            <Link to="/blog/ai-2026-december-ultimate-autonomous-revolution-breakthrough"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-slate-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-400 hover:to-slate-400 transition-all"
            >
              Read Revolution Details →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏭</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">$1 Trillion Success</h3>
                <p className="text-sm text-slate-300">Global manufacturing conglomerate</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              How a global manufacturing conglomerate achieved $1 trillion ROI through ultimate autonomous revolution with 100% autonomous operations and infinite scalability.
            </p>
            <Link to="/case-studies/ai-2026-december-ultimate-autonomous-1-trillion-success"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-slate-400 hover:to-cyan-400 transition-all"
            >
              View Success Story →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex flex-wrap gap-4">
            <Link to="/blog/ai-2026-december-ultimate-autonomous-revolution-breakthrough"
              className="bg-gradient-to-r from-blue-500 to-slate-600 hover:from-blue-400 hover:to-slate-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Explore Autonomous Revolution
            </Link>
            <Link to="/case-studies/ai-2026-december-ultimate-autonomous-1-trillion-success"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View $1T Success Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default December2026UltimateAutonomousRevolutionBanner;