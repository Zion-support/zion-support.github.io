import { ArrowRight, Sparkles, Zap, Shield, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export default function October2025LatestContentBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-slate-950 to-emerald-950 border-y border-purple-500/30">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 mb-4">
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">
              🚀 Latest October 2025 Content
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
            Breakthrough AI Innovations Just Published
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover the latest enterprise AI breakthroughs transforming industries in October 2025
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Quantum AI */}
          <Link 
            to="/blog/ai-2025-october-quantum-ai-enterprise-breakthrough" 
            className="group relative p-8 bg-gradient-to-br from-purple-950/50 to-purple-900/30 rounded-2xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="absolute top-4 right-4">
              <Cpu className="w-8 h-8 text-purple-400 group-hover:animate-spin" />
            </div>
            
            <div className="mb-4">
              <span className="px-3 py-1 bg-purple-400/20 text-purple-300 text-xs rounded-full font-semibold">
                NEW
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              Quantum AI Enterprise Breakthrough
            </h3>
            
            <p className="text-white/70 mb-4 leading-relaxed">
              Solving optimization problems 10,000x faster with hybrid quantum-classical AI systems. 
              Fortune 500 case studies with unprecedented ROI.
            </p>
            
            <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-4 transition-all">
              Read Full Article
              <ArrowRight className="w-5 h-5" />
            </div>

            <div className="mt-4 pt-4 border-t border-purple-400/20">
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span>✓ 92% Efficiency Gain</span>
                <span>✓ $2.8B Savings</span>
              </div>
            </div>
          </Link>

          {/* Autonomous Orchestration */}
          <Link 
            to="/blog/ai-2025-october-autonomous-enterprise-orchestration" 
            className="group relative p-8 bg-gradient-to-br from-emerald-950/50 to-emerald-900/30 rounded-2xl border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
          >
            <div className="absolute top-4 right-4">
              <Zap className="w-8 h-8 text-emerald-400 group-hover:animate-pulse" />
            </div>
            
            <div className="mb-4">
              <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 text-xs rounded-full font-semibold">
                NEW
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
              Autonomous Enterprise Orchestration
            </h3>
            
            <p className="text-white/70 mb-4 leading-relaxed">
              Self-managing digital operations with 99.99% reliability and 85% cost reduction. 
              Zero human intervention required.
            </p>
            
            <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-4 transition-all">
              Read Full Article
              <ArrowRight className="w-5 h-5" />
            </div>

            <div className="mt-4 pt-4 border-t border-emerald-400/20">
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span>✓ 99.99% Uptime</span>
                <span>✓ 85% Cost Cut</span>
              </div>
            </div>
          </Link>

          {/* Neural Security */}
          <Link 
            to="/blog/ai-2025-october-neural-security-zero-trust-evolution" 
            className="group relative p-8 bg-gradient-to-br from-red-950/50 to-orange-900/30 rounded-2xl border border-red-400/30 hover:border-red-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
          >
            <div className="absolute top-4 right-4">
              <Shield className="w-8 h-8 text-red-400 group-hover:animate-bounce" />
            </div>
            
            <div className="mb-4">
              <span className="px-3 py-1 bg-red-400/20 text-red-300 text-xs rounded-full font-semibold">
                NEW
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
              Neural Security & Zero Trust
            </h3>
            
            <p className="text-white/70 mb-4 leading-relaxed">
              AI-powered cyber defense that predicts and prevents threats before they occur. 
              99.7% threat prevention achieved.
            </p>
            
            <div className="flex items-center gap-2 text-red-400 font-semibold group-hover:gap-4 transition-all">
              Read Full Article
              <ArrowRight className="w-5 h-5" />
            </div>

            <div className="mt-4 pt-4 border-t border-red-400/20">
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span>✓ 99.7% Prevention</span>
                <span>✓ Zero Breaches</span>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-white/60 mb-4">
            Want to implement these breakthrough technologies in your enterprise?
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/blog" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-semibold text-white transition-all duration-300 border border-white/30"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
