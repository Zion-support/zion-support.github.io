const October2025NewAutonomousSystemsBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 border-b border-purple-500/30 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      {/* Floating particles effect */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with badge */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-4 py-2">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-yellow-300 font-bold text-sm uppercase tracking-wider">
              🚀 BREAKING: October 1, 2025
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>
        </div>
        {/* Main headline */}
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 leading-tight">
          <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 text-transparent bg-clip-text drop-shadow-lg">
            🔥 REVOLUTIONARY: 2 Game-Changing Autonomous Systems!
          </span>
        </h2>
        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-center text-blue-100 mb-8 max-w-5xl mx-auto font-semibold">
          ⚡ Just Released: <span className="text-yellow-300 font-black">$974M Combined Annual Value</span> — 
          Intelligent Enterprise Mesh + AI-Powered Predictive Maintenance
        </p>
        {/* Featured content cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Card 1: Enterprise Mesh */}
          <div className="bg-gradient-to-br from-purple-900/80 to-indigo-900/80 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:shadow-purple-400/70 transition-all">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  🌐 Intelligent Autonomous Enterprise Mesh
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-300 font-bold">97.3% Operational Automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-blue-300 font-bold">89% Infrastructure Cost Reduction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" <span className="text-purple-300 font-bold">$847M Annual Value Creation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" <span className="text-yellow-300 font-bold">99.997% Availability Achieved</span>
                  </div>
                </div>
                <p className="text-blue-200 text-sm mb-4">
                  Self-organizing, self-healing distributed AI systems revolutionizing enterprise operations. 
                  Real-time intelligent routing, predictive auto-scaling, and autonomous incident response.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/blog/ai-2025-oct-01-intelligent-autonomous-enterprise-mesh"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg font-bold transition-all group-hover:shadow-lg"
                  >
                    Read Blog Post
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/case-studies/ai-2025-oct-01-global-manufacturing-enterprise-mesh-847m-success"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-lg font-bold transition-all group-hover:shadow-lg"
                  >
                    View Case Study
                    <TrendingUp className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2: Predictive Maintenance */}
          <div className="bg-gradient-to-br from-blue-900/80 to-cyan-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  🔧 AI-Powered Predictive Maintenance
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" <span className="text-green-300 font-bold">99.2% Failure Prediction Accuracy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" <span className="text-cyan-300 font-bold">87% Reduction in Downtime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" <span className="text-blue-300 font-bold">$127M Annual Value</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" <span className="text-yellow-300 font-bold">30-Day Advance Warning</span>
                  </div>
                </div>
                <p className="text-blue-200 text-sm mb-4">
                  Eliminate unplanned equipment downtime with multi-modal sensor fusion, deep learning failure 
                  prediction, and prescriptive maintenance recommendations. Transform reactive maintenance into proactive asset management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/blog/ai-2025-oct-01-advanced-ai-powered-predictive-maintenance"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-2 rounded-lg font-bold transition-all group-hover:shadow-lg"
                  >
                    Read Blog Post
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/case-studies/ai-2025-oct-01-automotive-manufacturer-predictive-maintenance-127m-success"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-lg font-bold transition-all group-hover:shadow-lg"
                  >
                    View Case Study
                    <TrendingUp className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 text-white px-8 py-4 rounded-xl font-black text-lg shadow-2xl shadow-orange-500/50 hover:shadow-orange-400/70 transform hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-6 h-6" />
            Explore All Revolutionary Content
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
        {/* Stats banner */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-black text-yellow-300 mb-1">$974M</div>
            <div className="text-sm text-blue-200">Combined Annual Value</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-black text-green-300 mb-1">97.3%</div>
            <div className="text-sm text-blue-200">Operational Automation</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-black text-cyan-300 mb-1">99.2%</div>
            <div className="text-sm text-blue-200">Prediction Accuracy</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-black text-purple-300 mb-1">2.8mo</div>
            <div className="text-sm text-blue-200">Average Payback Period</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default October2025NewAutonomousSystemsBanner;
