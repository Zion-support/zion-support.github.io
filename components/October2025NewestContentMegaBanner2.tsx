import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function October2025NewestContentMegaBanner2() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-pink-600/10 animate-pulse"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-2 backdrop-blur-sm border border-purple-400/30 mb-8">
            <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
            <span className="text-sm font-bold text-white tracking-wider uppercase">
              BREAKING: NEW CONTENT JUST PUBLISHED
            </span>
            <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
          </div>

          {/* Main headline */}
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Three <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Game-Changing</span> AI Breakthroughs
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            🚀 Master Neural Architecture Search, Robotics RL, and Causal AI with our latest comprehensive guides
          </p>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center gap-3 rounded-xl bg-purple-950/50 px-6 py-4 backdrop-blur border border-purple-500/20">
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">$258B</div>
                <div className="text-sm text-gray-400">Combined Market Value</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 rounded-xl bg-blue-950/50 px-6 py-4 backdrop-blur border border-blue-500/20">
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">14,000+</div>
                <div className="text-sm text-gray-400">Enterprise Deployments</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 rounded-xl bg-pink-950/50 px-6 py-4 backdrop-blur border border-pink-500/20">
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">94%+</div>
                <div className="text-sm text-gray-400">Success Rates</div>
              </div>
            </div>
          </div>

          {/* Content cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <Link
              to="/blog/ai-2025-oct-neural-architecture-search-breakthrough"
              className="group relative rounded-2xl bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-6 backdrop-blur border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 text-left"
            >
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-300">
                  Neural Architecture Search
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300">
                10x Faster AI Development
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Automate model design with $47M savings and 40% better performance
              </p>
              <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300">
                <span>Read Guide</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              to="/blog/ai-2025-oct-reinforcement-learning-robotics-revolution"
              className="group relative rounded-2xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-6 backdrop-blur border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-105 text-left"
            >
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
                  Reinforcement Learning
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300">
                99.7% Robotics Success
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Transform industrial automation with $184M annual savings
              </p>
              <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300">
                <span>Read Guide</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 3 */}
            <Link
              to="/blog/ai-2025-oct-causal-ai-enterprise-decision-intelligence"
              className="group relative rounded-2xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 p-6 backdrop-blur border border-pink-500/30 hover:border-pink-400 transition-all duration-300 hover:scale-105 text-left"
            >
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-pink-500/20 px-3 py-1 text-xs font-semibold text-pink-300">
                  Causal AI
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300">
                94% Better Decisions
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Transform decision intelligence with $284M annual revenue
              </p>
              <div className="flex items-center text-pink-400 font-semibold group-hover:text-pink-300">
                <span>Read Guide</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/content"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-200 hover:shadow-purple-500/50 hover:scale-105"
            >
              Explore All Content
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all duration-200 hover:scale-105"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
