import { Link } from 'react-router-dom';

export default function October2025NewTechBreakthroughsBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 border-y border-purple-500/30">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 mb-4">

            <span className="text-purple-200 font-semibold text-sm uppercase tracking-wider">
              Just Published: October 2, 2025
            </span>

          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🚀 3 Revolutionary Tech Breakthroughs
          </h2>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto">
            Transform Your Business with AI-Powered DevOps, Blockchain-AI Integration & Sustainable Green Computing
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Article 1: DevOps Automation */}
          <Link 
            to="/blog/ai-2025-oct-02-devops-automation-ai-revolution"
            className="group relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 bg-blue-500/30 rounded-full">
                <span className="text-blue-200 text-xs font-bold">HOT 🔥</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">

              </div>
              <div>
                <div className="text-xs text-blue-300 uppercase font-semibold">DevOps AI</div>
                <div className="text-sm text-blue-200">15 min read</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
              AI-Powered DevOps Automation Revolution
            </h3>
            
            <p className="text-blue-200 text-sm mb-4 line-clamp-3">
              Achieve 99.8% deployment success rates, 96% incident reduction, and $47M annual savings with intelligent automation.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">

                <span className="text-green-400 font-semibold">487 deploys/day</span>
                <span className="text-blue-300">vs 23 previously</span>
              </div>
              <div className="flex items-center gap-2 text-sm">

                <span className="text-green-400 font-semibold">96% incident reduction</span>
                <span className="text-blue-300">MTTR: 4 min</span>
              </div>
              <div className="flex items-center gap-2 text-sm">

                <span className="text-green-400 font-semibold">$47M saved annually</span>
                <span className="text-blue-300">67% cost reduction</span>
              </div>
            </div>

            <div className="flex items-center text-blue-300 group-hover:text-blue-200 font-semibold">
              Read Full Guide

            </div>
          </Link>

          {/* Article 2: Blockchain-AI Integration */}
          <Link 
            to="/blog/ai-2025-oct-02-blockchain-ai-enterprise-integration"
            className="group relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 bg-purple-500/30 rounded-full">
                <span className="text-purple-200 text-xs font-bold">NEW 💎</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">

              </div>
              <div>
                <div className="text-xs text-purple-300 uppercase font-semibold">Blockchain-AI</div>
                <div className="text-sm text-purple-200">14 min read</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              Blockchain-AI Integration Revolution
            </h3>
            
            <p className="text-purple-200 text-sm mb-4 line-clamp-3">
              99.9% transaction accuracy, $127M annual savings, and immutable intelligent business processes for enterprises.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">

                <span className="text-green-400 font-semibold">99.9% accuracy</span>
                <span className="text-purple-300">AI-verified contracts</span>
              </div>
              <div className="flex items-center gap-2 text-sm">

                <span className="text-green-400 font-semibold">$127M saved</span>
                <span className="text-purple-300">Annual enterprise value</span>
              </div>
              <div className="flex items-center gap-2 text-sm">

                <span className="text-green-400 font-semibold">96% fraud reduction</span>
                <span className="text-purple-300">Supply chain security</span>
              </div>
            </div>

            <div className="flex items-center text-purple-300 group-hover:text-purple-200 font-semibold">
              Explore Integration

            </div>
          </Link>

          {/* Article 3: Sustainable AI */}
          <Link 
            to="/blog/ai-2025-oct-02-sustainable-ai-green-computing-revolution"
            className="group relative bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-2xl p-6 border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
          >
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 bg-green-500/30 rounded-full">
                <span className="text-green-200 text-xs font-bold">ECO 🌱</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-500/20 rounded-xl">

              </div>
              <div>
                <div className="text-xs text-green-300 uppercase font-semibold">Green AI</div>
                <div className="text-sm text-green-200">13 min read</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
              Sustainable AI & Green Computing
            </h3>
            
            <p className="text-green-200 text-sm mb-4 line-clamp-3">
              89% energy reduction, 2.4M tons CO2 saved annually, and $284M cost savings while improving performance.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">

                <span className="text-green-400 font-semibold">89% energy reduction</span>
                <span className="text-green-300">Massive efficiency gains</span>
              </div>
              <div className="flex items-center gap-2 text-sm">

                <span className="text-green-400 font-semibold">2.4M tons CO2 saved</span>
                <span className="text-green-300">Climate impact</span>
              </div>
              <div className="flex items-center gap-2 text-sm">

                <span className="text-green-400 font-semibold">$284M savings</span>
                <span className="text-green-300">Annual cost reduction</span>
              </div>
            </div>

            <div className="flex items-center text-green-300 group-hover:text-green-200 font-semibold">
              Learn Green AI

            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
          >

            Explore All Latest Breakthroughs

          </Link>
        </div>
      </div>
    </div>
  );
}
