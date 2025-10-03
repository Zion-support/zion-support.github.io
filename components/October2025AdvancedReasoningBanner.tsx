import { Link } from 'react-router-dom';

export default function October2025AdvancedReasoningBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-2 border-purple-500/50 rounded-xl p-8 my-12 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🧠</span>
          <div>
            <div className="text-purple-400 text-sm font-bold uppercase tracking-wider">
              JUST PUBLISHED • OCTOBER 1, 2025
            </div>
            <h2 className="text-3xl font-bold text-white">
              Advanced Reasoning Models for Enterprise 2025
            </h2>
          </div>
        </div>
        
        <p className="text-gray-300 text-lg mb-6">
          Deploy advanced reasoning AI models achieving <span className="text-green-400 font-bold">97% accuracy on complex problems</span>,{' '}
          <span className="text-green-400 font-bold">89% reduction in decision time</span>, and{' '}
          <span className="text-green-400 font-bold">$47M proven ROI</span> across Fortune 500 enterprises. 
          Transform decision-making with explainable, step-by-step reasoning that humans can trust and verify.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-purple-800/20 rounded-lg p-4 border border-purple-500/30">
            <div className="text-green-400 font-bold text-2xl mb-1">97% Accuracy</div>
            <div className="text-gray-400 text-sm">Complex multi-step reasoning</div>
          </div>
          <div className="bg-purple-800/20 rounded-lg p-4 border border-purple-500/30">
            <div className="text-green-400 font-bold text-2xl mb-1">$47M ROI</div>
            <div className="text-gray-400 text-sm">Average Fortune 500 value</div>
          </div>
          <div className="bg-purple-800/20 rounded-lg p-4 border border-purple-500/30">
            <div className="text-green-400 font-bold text-2xl mb-1">89% Faster</div>
            <div className="text-gray-400 text-sm">Decision-making time</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="text-xs bg-purple-800/40 text-purple-300 px-3 py-1 rounded-full">
            Chain-of-Thought Processing
          </span>
          <span className="text-xs bg-purple-800/40 text-purple-300 px-3 py-1 rounded-full">
            Multi-Hop Inference
          </span>
          <span className="text-xs bg-purple-800/40 text-purple-300 px-3 py-1 rounded-full">
            Explainable AI (XAI)
          </span>
          <span className="text-xs bg-purple-800/40 text-purple-300 px-3 py-1 rounded-full">
            Regulatory Compliance
          </span>
        </div>

        <div className="mt-6 flex gap-4">
          <Link 
            to="/blog/ai-2025-october-advanced-reasoning-models-enterprise"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Read Complete Guide
            <span>→</span>
          </Link>
          <Link 
            to="/contact"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Schedule Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
