import { Link } from 'react-router-dom';

export default function October2025NewContentMegaShowcase() {
  return (
    <div className="bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-cyan-900/40 border-2 border-purple-500/50 rounded-xl p-10 my-16 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-2">
            🔥 BREAKING NEWS • OCTOBER 1, 2025 🔥
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            THREE REVOLUTIONARY AI GUIDES JUST PUBLISHED!
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            <span className="text-green-400 font-bold">$258M Combined Value Creation</span> •{' '}
            <span className="text-green-400 font-bold">97%+ Accuracy</span> •{' '}
            <span className="text-green-400 font-bold">2,400+ Enterprise Deployments</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Advanced Reasoning */}
          <div className="bg-purple-900/30 border border-purple-500/40 rounded-lg p-6 hover:bg-purple-900/40 transition-all">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Advanced Reasoning Models
            </h3>
            <p className="text-gray-400 mb-4">
              97% accuracy on complex problems with explainable chain-of-thought processing. $47M proven ROI.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Step-by-step reasoning</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Multi-hop inference</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Full explainability</span>
              </div>
            </div>
            <Link 
              to="/blog/ai-2025-october-advanced-reasoning-models-enterprise"
              className="text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center gap-1"
            >
              Read Guide <span>→</span>
            </Link>
          </div>

          {/* Knowledge Graphs */}
          <div className="bg-cyan-900/30 border border-cyan-500/40 rounded-lg p-6 hover:bg-cyan-900/40 transition-all">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Enterprise Knowledge Graphs
            </h3>
            <p className="text-gray-400 mb-4">
              Connect 100M+ entities with 95% accuracy and sub-100ms queries. $127M value creation.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Semantic search</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Graph neural networks</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Entity resolution</span>
              </div>
            </div>
            <Link 
              to="/blog/ai-2025-october-enterprise-knowledge-graphs-revolution"
              className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
            >
              Read Guide <span>→</span>
            </Link>
          </div>

          {/* AI Observability */}
          <div className="bg-blue-900/30 border border-blue-500/40 rounded-lg p-6 hover:bg-blue-900/40 transition-all">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">
              AI Observability Platform
            </h3>
            <p className="text-gray-400 mb-4">
              99.7% model health detection with 92% faster resolution. $84M annual cost savings.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Real-time monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Drift detection</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Auto debugging</span>
              </div>
            </div>
            <Link 
              to="/blog/ai-2025-october-ai-observability-platform-revolution"
              className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
            >
              Read Guide <span>→</span>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 border border-purple-500/30 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-white mb-3">🎯 Combined Enterprise Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold text-green-400">$258M</div>
              <div className="text-sm text-gray-400">Total Value</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">97%+</div>
              <div className="text-sm text-gray-400">Avg Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">2,400+</div>
              <div className="text-sm text-gray-400">Deployments</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">1,200%</div>
              <div className="text-sm text-gray-400">Avg ROI</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/contact"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all inline-flex items-center gap-2 text-lg"
          >
            Schedule Enterprise Demo
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
