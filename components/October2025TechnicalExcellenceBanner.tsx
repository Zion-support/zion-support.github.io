import { Link } from 'react-router-dom';

export default function October2025TechnicalExcellenceBanner() {
  return (
    <div className="bg-gradient-to-r from-slate-950 via-cyan-950 to-blue-950 py-12 px-6 border-t border-cyan-500/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500/20 rounded-full border border-cyan-400/50 mb-4">
            <span className="text-2xl animate-bounce">⚡</span>
            <span className="text-cyan-300 font-bold text-lg">JUST PUBLISHED: October 1, 2025</span>
            <span className="text-2xl animate-bounce">⚡</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Transform Your AI Operations Today
          </h3>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get instant access to production-proven strategies that Fortune 500 companies are using right now
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all">
            <div className="text-center mb-4">
              <div className="text-5xl font-extrabold text-cyan-400">99.99%</div>
              <div className="text-white/70 mt-2">Agent Fleet Uptime</div>
            </div>
            <p className="text-sm text-white/60 text-center">
              With advanced observability patterns
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 transition-all">
            <div className="text-center mb-4">
              <div className="text-5xl font-extrabold text-blue-400">68%</div>
              <div className="text-white/70 mt-2">Cost Reduction</div>
            </div>
            <p className="text-sm text-white/60 text-center">
              Through intelligent K8s autoscaling
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all">
            <div className="text-center mb-4">
              <div className="text-5xl font-extrabold text-purple-400">82%</div>
              <div className="text-white/70 mt-2">Less Governance Work</div>
            </div>
            <p className="text-sm text-white/60 text-center">
              Via automated compliance checking
            </p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/blog" 
            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            Read the Full Guides Now →
          </Link>
          <p className="mt-4 text-white/60 text-sm">
            📚 3 comprehensive guides | 💡 Production-ready code | 📊 Real case studies
          </p>
        </div>
      </div>
    </div>
  );
}
