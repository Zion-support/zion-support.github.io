import { Shield, Database, Globe, ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function October2025LatestContentRevolutionBanner() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Attention-Grabbing Header */}
          <div className="mb-8 animate-bounce">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-pink-500/20 backdrop-blur-sm rounded-full border-2 border-pink-500/50 shadow-lg shadow-pink-500/30">
              <Zap className="w-6 h-6 text-pink-400 animate-pulse" />
              <span className="text-pink-300 font-black text-lg uppercase tracking-wider">
                🚀 BREAKTHROUGH • OCTOBER 1, 2025 🚀
              </span>
              <Sparkles className="w-6 h-6 text-pink-400 animate-spin" />
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient">
              3 Revolutionary AI Solutions
            </span>
          </h2>

          <p className="text-3xl md:text-4xl text-white font-bold mb-8">
            Just Published: Transform Your Enterprise with Cutting-Edge AI!
          </p>

          {/* Key Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30">
              <div className="text-5xl font-black text-blue-300 mb-2">$1.3T</div>
              <div className="text-xl text-white font-semibold">Total Market Opportunity</div>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/30">
              <div className="text-5xl font-black text-pink-300 mb-2">99.97%</div>
              <div className="text-xl text-white font-semibold">Threat Detection Accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30">
              <div className="text-5xl font-black text-green-300 mb-2">1000x</div>
              <div className="text-xl text-white font-semibold">Faster Dataset Creation</div>
            </div>
          </div>

          {/* Content Highlights */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700/50">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-bold text-blue-300">Sovereign AI Infrastructure</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  Build nation-scale AI systems with complete data sovereignty and 
                  technological independence.
                </p>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                  <span>💰 $847B Market by 2028</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 text-sm font-semibold mt-1">
                  <span>🌐 67 Nations Invested</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-red-400" />
                  <h3 className="text-xl font-bold text-red-300">Agentic Security Operations</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  Autonomous AI-powered threat detection and response—24/7 protection 
                  with &lt;2 second response time.
                </p>
                <div className="flex items-center gap-2 text-red-400 text-sm font-semibold">
                  <span>🛡️ 99.97% Detection Rate</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 text-sm font-semibold mt-1">
                  <span>💸 94% Cost Reduction</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-bold text-green-300">Synthetic Data Generation</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  Create unlimited privacy-compliant training data—accelerate AI development 
                  by 10x.
                </p>
                <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                  <span>📊 $127B Market by 2028</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold mt-1">
                  <span>🔒 100% GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Success Stories */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-900/30 backdrop-blur-sm p-4 rounded-xl border border-blue-500/20">
              <div className="text-2xl font-bold text-blue-300 mb-1">284% ROI</div>
              <div className="text-sm text-gray-300">Sovereign AI Investment Returns</div>
            </div>
            <div className="bg-red-900/30 backdrop-blur-sm p-4 rounded-xl border border-red-500/20">
              <div className="text-2xl font-bold text-red-300 mb-1">$284M</div>
              <div className="text-sm text-gray-300">Fraud Losses Prevented</div>
            </div>
            <div className="bg-green-900/30 backdrop-blur-sm p-4 rounded-xl border border-green-500/20">
              <div className="text-2xl font-bold text-green-300 mb-1">97%</div>
              <div className="text-sm text-gray-300">Cost Reduction vs Traditional</div>
            </div>
          </div>

          {/* Urgent CTA */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-2xl text-pink-300 font-bold animate-pulse">
              ⚡ Limited Time: Free Strategic Assessment Worth $25,000 ⚡
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black text-xl rounded-xl hover:from-pink-400 hover:to-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/50"
              >
                <span>GET YOUR FREE ASSESSMENT</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/blog"
                className="inline-flex items-center gap-3 px-10 py-5 bg-slate-700/50 backdrop-blur-sm text-white font-bold text-xl rounded-xl border-2 border-white/30 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-6 h-6" />
                <span>READ ALL 3 BREAKTHROUGH GUIDES</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-sm">
              <div className="flex items-center justify-center gap-2 text-green-400 font-semibold">
                <TrendingUp className="w-5 h-5" />
                <span>500+ Fortune 500 Clients</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold">
                <Shield className="w-5 h-5" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-purple-400 font-semibold">
                <Sparkles className="w-5 h-5" />
                <span>$50B+ Value Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
