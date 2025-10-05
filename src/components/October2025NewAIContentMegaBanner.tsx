import { Link } from "react-router-dom";

const October2025NewAIContentMegaBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 rounded-2xl shadow-2xl border border-purple-500/30 my-12">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative p-8 md:p-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl">

          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full uppercase animate-pulse">
                🚀 Just Published
              </span>
              <span className="text-purple-300 text-sm font-semibold">October 1, 2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Latest AI Revolution: 3 Breakthrough Guides
            </h2>
          </div>
        </div>

        <p className="text-xl text-gray-200 mb-8 max-w-3xl">
          Discover the cutting-edge strategies powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">$13.7B in enterprise AI deployments</span>. 
          Master enterprise AI agents, LLM security, and vector databases with proven frameworks from Fortune 500 leaders.
        </p>

        {/* Three featured articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Article 1 */}
          <Link
            to="/blog/ai-2025-october-enterprise-ai-agents-automation-revolution"
            className="group bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:bg-slate-900/70 hover:border-purple-400/50 transition-all hover:scale-105 transform duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">

              </div>
              
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              Enterprise AI Agents Revolution
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Autonomous agents achieving 85% efficiency gains and $4.7B in proven value creation
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
              <span className="flex items-center gap-1">

                $4.7B Value
              </span>
              <span>•</span>
              <span>85% Efficiency</span>
            </div>
            <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300">
              Read Full Guide

            </div>
          </Link>

          {/* Article 2 */}
          <Link
            to="/blog/ai-2025-october-llm-security-prompt-injection-defense"
            className="group bg-slate-900/50 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 hover:bg-slate-900/70 hover:border-red-400/50 transition-all hover:scale-105 transform duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">

              </div>
              
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
              LLM Security & Defense
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Advanced prompt injection defense protecting $3.2B in enterprise AI assets
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
              <span className="flex items-center gap-1">

                99.8% Prevention
              </span>
              <span>•</span>
              <span>$3.2B Protected</span>
            </div>
            <div className="flex items-center text-red-400 font-semibold group-hover:text-red-300">
              Read Security Guide

            </div>
          </Link>

          {/* Article 3 */}
          <Link
            to="/blog/ai-2025-october-vector-databases-rag-systems-enterprise"
            className="group bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover:bg-slate-900/70 hover:border-cyan-400/50 transition-all hover:scale-105 transform duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                <Database className="w-6 h-6 text-cyan-400"</div>
              
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              Vector Databases & RAG
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Enterprise implementation powering $5.8B in AI deployments with 92% accuracy gains
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
              <span className="flex items-center gap-1">
                <Database className="w-3 h-3" />
                $5.8B Scale
              </span>
              <span>•</span>
              <span>92% Accuracy</span>
            </div>
            <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300">
              Read Implementation Guide

            </div>
          </Link>
        </div>

        {/* Total Value Banner */}
        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Combined Enterprise Value: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">$13.7 Billion</span>
              </h3>
              <p className="text-gray-300">
                Proven strategies from Fortune 500 leaders • 99%+ Accuracy • Production-Ready Frameworks
              </p>
            </div>
            <Link
              to="/blog"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore All Insights

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025NewAIContentMegaBanner;
