import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Brain, Zap, DollarSign } from 'lucide-react';

const AI2026BreakthroughInnovationsMegaSuccessBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              BREAKTHROUGH 2026
            </span>
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              $2.8T SUCCESS
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              REVOLUTIONARY
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI 2026 Breakthrough Innovations:
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {' '}$2.8 Trillion Success Story
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-4xl mx-auto">
            Revolutionary quantum-neural fusion, autonomous enterprise systems, and consciousness-level AI 
            generating unprecedented value across Fortune 500 companies worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="bg-purple-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Quantum-Neural Consciousness</h3>
            <p className="text-blue-100 text-sm mb-3">99.999% awareness levels achieved</p>
            <div className="text-2xl font-bold text-green-400">$847B</div>
            <div className="text-xs text-blue-200">Value Generated</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="bg-green-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Autonomous Enterprise</h3>
            <p className="text-blue-100 text-sm mb-3">99.9% automation rates achieved</p>
            <div className="text-2xl font-bold text-green-400">$1.2T</div>
            <div className="text-xs text-blue-200">Cost Savings</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="bg-blue-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Hyper-Intelligent Analytics</h3>
            <p className="text-blue-100 text-sm mb-3">100,000x faster decisions</p>
            <div className="text-2xl font-bold text-green-400">$750B</div>
            <div className="text-xs text-blue-200">Revenue Generated</div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span className="font-semibold">$2.8T Total Value</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">2,800% Average ROI</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="font-semibold">500+ Fortune 500</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/blog/ai-2026-breakthrough-innovations-mega-success" 
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all flex items-center gap-2"
            >
              Read Full Story
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/case-studies/ai-2026-breakthrough-innovations-2-8-trillion-success" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center gap-2"
            >
              View Case Study
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services/ai-2026-breakthrough-innovations-implementation" 
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all flex items-center gap-2"
            >
              Start Implementation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2026BreakthroughInnovationsMegaSuccessBanner;