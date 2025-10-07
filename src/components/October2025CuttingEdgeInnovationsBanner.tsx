import { Link } from "react-router-dom";

const October2025CuttingEdgeInnovationsBanner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 border-b border-indigo-500/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0 shadow-lg shadow-indigo-500/50">

          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
                🚀 JUST PUBLISHED OCTOBER 1, 2025
              </span>
              <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-pink-500 to-red-600 text-white shadow-lg animate-pulse">
                🔥 BREAKTHROUGH INNOVATIONS
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mb-3 leading-tight">
              3 Game-Changing AI Breakthroughs — Neuro-Symbolic Intelligence, Spatial Computing Revolution & Agentic Supply Chain
            </h2>
            
            <p className="text-base sm:text-lg text-indigo-100/90 mb-4 leading-relaxed">
              ⚡ <strong className="text-indigo-200">BRAND NEW TODAY:</strong> Deploy neuro-symbolic AI achieving{" "}
              <span className="text-green-400 font-bold">99.7% reasoning accuracy</span> with{" "}
              <span className="text-green-400 font-bold">89% fewer hallucinations</span>, implement spatial computing platforms delivering{" "}
              <span className="text-green-400 font-bold">12x productivity gains</span> and{" "}
              <span className="text-green-400 font-bold">97% training efficiency</span>, and unleash agentic supply chain AI with{" "}
              <span className="text-green-400 font-bold">99.1% forecast accuracy</span> and{" "}
              <span className="text-green-400 font-bold">82% cost reduction</span>. Revolutionary innovations transforming enterprises worldwide!
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-4">
              <Link
                to="/blog/ai-2025-oct-neuro-symbolic-ai-enterprise-breakthrough"
                className="group bg-gradient-to-br from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 border border-blue-400/30 rounded-lg p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <div className="flex items-start gap-2 mb-2">

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm text-blue-200 mb-1 leading-snug group-hover:text-blue-100">
                      Neuro-Symbolic AI Breakthrough
                    </h3>
                    <p className="text-xs text-indigo-300/80 leading-snug">
                      99.7% Reasoning + 96% Explainability + 89% Fewer Hallucinations
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-400 font-semibold">Hybrid Intelligence</span>

                </div>
              </Link>

              <Link
                to="/blog/ai-2025-oct-spatial-computing-enterprise-revolution"
                className="group bg-gradient-to-br from-cyan-600/20 to-blue-600/20 hover:from-cyan-600/30 hover:to-blue-600/30 border border-cyan-400/30 rounded-lg p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <div className="flex items-start gap-2 mb-2">

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm text-cyan-200 mb-1 leading-snug group-hover:text-cyan-100">
                      Spatial Computing + AI Revolution
                    </h3>
                    <p className="text-xs text-indigo-300/80 leading-snug">
                      12x Productivity + 97% Training Efficiency + 85% Cost Cut
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cyan-400 font-semibold">Immersive Intelligence</span>

                </div>
              </Link>

              <Link
                to="/blog/ai-2025-oct-agentic-procurement-supply-chain-revolution"
                className="group bg-gradient-to-br from-orange-600/20 to-red-600/20 hover:from-orange-600/30 hover:to-red-600/30 border border-orange-400/30 rounded-lg p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                <div className="flex items-start gap-2 mb-2">

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm text-orange-200 mb-1 leading-snug group-hover:text-orange-100">
                      Agentic Supply Chain Revolution
                    </h3>
                    <p className="text-xs text-indigo-300/80 leading-snug">
                      99.1% Forecast Accuracy + 82% Cost Cut + $1.37B+ Value
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-orange-400 font-semibold">Autonomous Operations</span>

                </div>
              </Link>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-indigo-500/50"
            >
              <span>Explore Today's Breakthrough Innovations</span>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025CuttingEdgeInnovationsBanner;
