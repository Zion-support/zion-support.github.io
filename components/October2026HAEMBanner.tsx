import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, Zap, Network } from 'lucide-react';

export default function October2026HAEMBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span className="text-sm font-semibold">OCTOBER 2026 • REVOLUTIONARY BREAKTHROUGH</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Hyperautonomous Enterprise Mesh
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 mt-2">
                The Self-Organizing Future
              </span>
            </h2>

            <p className="text-xl text-blue-100 leading-relaxed">
              Discover how self-organizing AI agent networks are revolutionizing enterprise operations with 
              <span className="font-bold text-cyan-300"> 94.7% reduction in coordination overhead</span> and 
              <span className="font-bold text-green-300"> $18.4B in proven value creation</span>.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Network className="w-5 h-5 text-cyan-300" />
                  <span className="text-sm font-medium text-cyan-200">Autonomous Mesh</span>
                </div>
                <p className="text-2xl font-bold">2,670</p>
                <p className="text-sm text-blue-200">Self-Organizing Agents</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-300" />
                  <span className="text-sm font-medium text-green-200">ROI</span>
                </div>
                <p className="text-2xl font-bold">364%</p>
                <p className="text-sm text-blue-200">In 18 Months</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm font-medium text-yellow-200">Speed</span>
                </div>
                <p className="text-2xl font-bold">847%</p>
                <p className="text-sm text-blue-200">Faster Collaboration</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-300" />
                  <span className="text-sm font-medium text-purple-200">Uptime</span>
                </div>
                <p className="text-2xl font-bold">99.7%</p>
                <p className="text-sm text-blue-200">Self-Healing Systems</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/blog/ai-2026-october-hyperautonomous-enterprise-mesh-revolution"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Read the Deep Dive
                <Zap className="ml-2 w-5 h-5" />
              </Link>

              <Link to="/case-studies/ai-2026-october-telecom-hyperautonomous-mesh-18-4-billion-success"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg transition-all duration-200"
              >
                $18.4B Case Study
                <TrendingUp className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative hidden md:block">
            <div className="relative">
              {/* Glowing orb effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-3xl animate-pulse"></div>
              
              {/* Content card */}
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Proven Results</h3>
                    <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold border border-green-500/30">
                      LIVE NOW
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-cyan-500/20 rounded-lg p-2 border border-cyan-500/30">
                        <Network className="w-5 h-5 text-cyan-300" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-white">Self-Organizing Networks</p>
                        <p className="text-sm text-blue-200">Agents autonomously form optimal teams based on capabilities and objectives</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500/20 rounded-lg p-2 border border-purple-500/30">
                        <Zap className="w-5 h-5 text-purple-300" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-white">Dynamic Adaptation</p>
                        <p className="text-sm text-blue-200">Real-time rebalancing and self-healing with 99.7% uptime</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-green-500/20 rounded-lg p-2 border border-green-500/30">
                        <TrendingUp className="w-5 h-5 text-green-300" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-white">Emergent Intelligence</p>
                        <p className="text-sm text-blue-200">Collective problem-solving exceeds individual agent capabilities</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-500/20 rounded-lg p-2 border border-yellow-500/30">
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-white">Zero-Touch Operations</p>
                        <p className="text-sm text-blue-200">94.7% reduction in manual coordination overhead</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-blue-200 text-center">
                      <span className="font-semibold text-white">Fortune 50 Telecom:</span> 
                      {' '}18 months from deployment to $18.4B value creation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                15,000+
              </p>
              <p className="text-sm md:text-base text-blue-200 mt-1">Autonomous Endpoints</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                4.2 weeks
              </p>
              <p className="text-sm md:text-base text-blue-200 mt-1">Service Launch Time</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                99.99%
              </p>
              <p className="text-sm md:text-base text-blue-200 mt-1">System Uptime</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                $6.3B
              </p>
              <p className="text-sm md:text-base text-blue-200 mt-1">Cost Reduction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
