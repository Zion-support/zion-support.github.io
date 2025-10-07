import { Link } from "react-router-dom";

const October2025LatestInnovationsBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-pink-900/40 border-y border-indigo-500/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full px-6 py-2 mb-4">

            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
              BREAKING OCTOBER 1, 2025: LATEST AI INNOVATIONS
            </span>

          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              3 Revolutionary AI Breakthroughs
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            🚀 <strong className="text-white">JUST RELEASED TODAY:</strong> Deploy enterprise-grade AI governance achieving 
            <span className="text-green-400 font-bold"> 99.9% compliance</span>, harness quantum-enhanced AI with 
            <span className="text-green-400 font-bold"> 10,000x speedup</span>, and implement autonomous enterprise orchestration 
            delivering <span className="text-green-400 font-bold">$312M+ value creation</span>. Game-changing innovations transforming 
            businesses worldwide!
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: AI Governance */}
          <Link
            to="/blog/ai-2025-october-governance-compliance-framework-enterprise"
            className="group relative bg-gradient-to-br from-emerald-900/30 to-blue-900/30 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
          >
            <div className="absolute top-4 right-4">

            </div>
            
            <div className="mb-4">
              <span className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
                AI GOVERNANCE
              </span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                AI Governance & Compliance Framework 2025
              </h3>
            </div>

            <ul className="space-y-2 mb-4 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold mt-0.5">✓</span>
                <span className="text-gray-300"><strong className="text-white">99.9% regulatory compliance</strong> across jurisdictions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold mt-0.5">✓</span>
                <span className="text-gray-300"><strong className="text-white">94% risk reduction</strong> through automated governance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold mt-0.5">✓</span>
                <span className="text-gray-300"><strong className="text-white">$186M+ liability protection</strong> from compliance violations</span>
              </li>
            </ul>

            <div className="flex items-center text-emerald-400 font-semibold group-hover:gap-3 transition-all">
              Read Full Guide</div>
          </Link>

          {/* Card 2: Quantum AI */}
          <Link
            to="/blog/ai-2025-october-quantum-enhanced-ai-hybrid-systems"
            className="group relative bg-gradient-to-br from-violet-900/30 to-cyan-900/30 border border-violet-500/30 rounded-xl p-6 hover:border-violet-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20"
          >
            <div className="absolute top-4 right-4">

            </div>
            
            <div className="mb-4">
              <span className="inline-block bg-violet-500/20 text-violet-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
                QUANTUM AI
              </span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                Quantum-Enhanced AI Hybrid Systems 2025
              </h3>
            </div>

            <ul className="space-y-2 mb-4 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold mt-0.5">✓</span>
                <span className="text-gray-300"><strong className="text-white">10,000x speedup</strong> for optimization problems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold mt-0.5">✓</span>
                <span className="text-gray-300"><strong className="text-white">98.9% accuracy improvements</strong> vs classical AI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold mt-0.5">✓</span>
                <span className="text-gray-300"><strong className="text-white">$234M+ value creation</strong> through quantum power</span>
              </li>
            </ul>

            <div className="flex items-center text-violet-400 font-semibold group-hover:gap-3 transition-all">
              Explore Quantum AI</div>
          </Link>

          {/* Card 3: Enterprise Orchestration */}
          <Link
            to="/blog/ai-2025-october-autonomous-enterprise-orchestration-platform"
            className="group relative bg-gradient-to-br from-indigo-900/30 to-amber-900/30 border border-indigo-500/30 rounded-xl p-6 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20"
          >
            <div className="absolute top-4 right-4">
              <Building2 className="h-8 w-8 text-indigo-400 group-hover:animate-pulse"</div>
            
            <div className="mb-4">
              <span className="inline-block bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
                ENTERPRISE AI
              </span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                Autonomous Enterprise Orchestration Platform 2025
              </h3>
            </div>

            <ul className="space-y-2 mb-4 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold mt-0.5">✓</span>
                <span className="text-gray-300"><strong className="text-white">97.8% operational automation</strong> across processes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold mt-0.5">✓</span>
                <span className="text-gray-300"><strong className="text-white">83% cost reduction</strong> through autonomous operations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold mt-0.5">✓</span>
                <span className="text-gray-300"><strong className="text-white">$312M+ annual value</strong> from intelligent orchestration</span>
              </li>
            </ul>

            <div className="flex items-center text-indigo-400 font-semibold group-hover:gap-3 transition-all">
              Discover Platform</div>
          </Link>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50"
          >
            <span>Explore All Latest AI Innovations</span>

          </Link>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            💡 <strong className="text-white">Combined Impact:</strong> These three innovations deliver 
            <span className="text-green-400 font-semibold"> $732M+ in total annual value</span> through enhanced governance, 
            quantum-powered optimization, and autonomous operations. Start your transformation today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025LatestInnovationsBanner;
