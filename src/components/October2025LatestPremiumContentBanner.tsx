import { Link } from "react-router-dom";

const October2025LatestPremiumContentBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 border-y border-purple-500/30 py-6 px-4 sm:px-6 lg:px-8 shadow-2xl relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-lg animate-pulse">
                🔥 JUST PUBLISHED - OCTOBER 1, 2025
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-200 border border-purple-400/30">
                PREMIUM CONTENT
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
              🚀 3 Revolutionary AI Breakthroughs — Transform Your Enterprise Today!
            </h2>
            
            <p className="text-lg text-purple-100 mb-4 max-w-4xl leading-relaxed">
              ⚡ <strong>BRAND NEW RELEASES:</strong> Deploy Autonomous Data Governance achieving 99.98% compliance accuracy with $4.2B risk mitigation, implement Neural Fraud Detection preventing $8.7B in losses with sub-50ms response times, and master Cognitive Workflow Orchestration delivering 98.7% automation with $6.3B value creation!
            </p>

            {/* Featured Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-yellow-400">$19.2B+</div>
                <div className="text-xs text-purple-200">Total Value Created</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-green-400">99.87%</div>
                <div className="text-xs text-purple-200">Average Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-blue-400">3,276%</div>
                <div className="text-xs text-purple-200">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-purple-400">2,500+</div>
                <div className="text-xs text-purple-200">Enterprises Transformed</div>
              </div>
            </div>

            {/* Featured Articles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <Link
                to="/blog/ai-2025-autonomous-data-governance-revolution"
                className="group bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4 hover:border-purple-400 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-2">

                  <div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-purple-200 transition-colors">
                      🛡️ Autonomous Data Governance Revolution
                    </h3>
                    <p className="text-xs text-purple-200 mb-2">
                      99.98% compliance accuracy, $4.2B risk mitigation, 94% faster compliance, 2,847% ROI
                    </p>
                    <div className="flex items-center gap-2 text-xs">

                      <span className="text-purple-300">Self-Regulating Systems</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to="/blog/ai-2025-neural-fraud-detection-revolution"
                className="group bg-gradient-to-br from-red-600/30 to-orange-600/30 backdrop-blur-sm border border-red-400/30 rounded-lg p-4 hover:border-red-400 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-2">

                  <div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-red-200 transition-colors">
                      🧠 Neural Fraud Detection Revolution
                    </h3>
                    <p className="text-xs text-red-200 mb-2">
                      99.96% detection accuracy, $8.7B losses prevented, sub-50ms response, 3,247% ROI
                    </p>
                    <div className="flex items-center gap-2 text-xs">

                      <span className="text-red-300">Real-Time Protection</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to="/blog/ai-2025-cognitive-workflow-orchestration-mastery"
                className="group bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 hover:border-blue-400 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-2">
                  <Workflow className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" <div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-blue-200 transition-colors">
                      ⚡ Cognitive Workflow Orchestration
                    </h3>
                    <p className="text-xs text-blue-200 mb-2">
                      98.7% automation rate, $6.3B value creation, 89% faster execution, 3,742% ROI
                    </p>
                    <div className="flex items-center gap-2 text-xs">

                      <span className="text-blue-300">Intelligent Automation</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-sm text-purple-100">

                <span>Enterprise-Proven Results</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-purple-100">

                <span>Production-Ready Systems</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-purple-100">

                <span>Fortune 500 Trusted</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:ml-6">
            <Link
              to="/blog"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-indigo-700 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              <span className="mr-2">Explore All 3 Breakthroughs</span>

            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 whitespace-nowrap"
            >
              Schedule Enterprise Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025LatestPremiumContentBanner;
