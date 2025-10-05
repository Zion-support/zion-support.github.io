import { Link } from 'react-router-dom';

interface October2025AIRevolutionBannerProps {
  className?: string;
}

export default function October2025AIRevolutionBanner({ className = '' }: October2025AIRevolutionBannerProps) {
  return (
    <div className={`bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-cyan-900/40 border-y border-purple-500/30 ${className}`}>
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 px-6 py-2 rounded-full border border-purple-500/30 mb-4">

            <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">
              🚀 JUST PUBLISHED - October 1, 2025
            </span>

          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            The Complete AI Revolution: 3 Essential Guides
          </h2>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-white">NEW TODAY:</strong> Master autonomous AI agents (94% task automation), 
            AI-powered development tools (5x faster coding), and enterprise AI safety (99.2% compliance). 
            The definitive guides for forward-thinking organizations transforming with AI in 2025.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Article 1: Autonomous AI Agents */}
          <Link 
            to="/blog/ai-2025-october-autonomous-ai-agents-production-deployment"
            className="group bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-400/30 group-hover:bg-purple-500/30 transition-colors">

              </div>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/30">
                AUTONOMOUS AGENTS
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              Autonomous AI Agents in Production 2025
            </h3>
            
            <p className="text-white/70 mb-4 leading-relaxed">
              Deploy production-grade AI agents that automate 94% of routine tasks, reduce costs by 78%, 
              and deliver 10x productivity gains. Complete guide from planning to production.
            </p>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-black/30 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-400">94%</div>
                
              </div>
              <div className="bg-black/30 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">78%</div>
                <div className="text-xs text-white/60">Cost Cut</div>
              </div>
              <div className="bg-black/30 rounded-lg p-3 text-center">

              </div>
            </div>
            
            <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
              <span>Read Complete Guide</span>

            </div>
          </Link>

          {/* Article 2: LLM Development Tools */}
          <Link 
            to="/blog/ai-2025-october-llm-powered-development-tools-revolution"
            className="group bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-2xl p-6 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-indigo-500/20 rounded-xl border border-indigo-400/30 group-hover:bg-indigo-500/30 transition-colors">
                <Code2 className="w-6 h-6 text-indigo-400" />
              </div>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/30">
                AI DEVELOPMENT
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
              LLM-Powered Development Tools Revolution
            </h3>
            
            <p className="text-white/70 mb-4 leading-relaxed">
              Transform your engineering workflow with AI-native tools. Top teams achieve 5x faster development, 
              80% fewer bugs, and 92% developer satisfaction. The complete AI coding toolkit.
            </p>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-black/30 rounded-lg p-3 text-center">
                
                <div className="text-xs text-white/60">Dev Speed</div>
              </div>
              <div className="bg-black/30 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">80%</div>
                <div className="text-xs text-white/60">Fewer Bugs</div>
              </div>
              <div className="bg-black/30 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-cyan-400">92%</div>
                
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-indigo-400 font-semibold group-hover:gap-3 transition-all">
              <span>Read Complete Guide</span>

            </div>
          </Link>

          {/* Article 3: AI Safety & Alignment */}
          <Link 
            to="/blog/ai-2025-october-ai-safety-alignment-enterprise-deployment"
            className="group bg-gradient-to-br from-emerald-900/30 to-cyan-800/20 rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-400/30 group-hover:bg-emerald-500/30 transition-colors">

              </div>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-500/30">
                AI SAFETY
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
              AI Safety & Alignment for Enterprise 2025
            </h3>
            
            <p className="text-white/70 mb-4 leading-relaxed">
              Deploy AI safely and responsibly. Leading organizations achieve 99.2% safety compliance, 
              prevent costly failures, and build stakeholder trust. Your complete responsible AI framework.
            </p>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-black/30 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-emerald-400">99.2%</div>
                
              </div>
              <div className="bg-black/30 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">87%</div>
                <div className="text-xs text-white/60">Less Risk</div>
              </div>
              <div className="bg-black/30 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-cyan-400">4.7x</div>
                
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all">
              <span>Read Complete Guide</span>

            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
          >
            <span>Explore All Latest AI Insights</span>

          </Link>
        </div>
      </div>
    </div>
  );
}
