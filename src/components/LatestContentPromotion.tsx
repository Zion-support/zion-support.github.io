
const LatestContentPromotion: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW CONTENT RELEASE • SEPTEMBER 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary AI 2026 Content Now Available</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover breakthrough insights, implementation guides, and success stories that will transform your organization
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧪</div>
            <h3 className="text-xl font-bold mb-3 text-center">Eval‑Driven Releases</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              Wire evals into CI/CD, canaries, and automated rollbacks
            </p>
            <ul className="text-purple-200 space-y-1 mb-4 text-xs">
              <li>• Policy gates with pass/fail criteria</li>
              <li>• Progressive delivery scorecards</li>
              <li>• Objective rollback triggers</li>
              <li>• Reference dashboards</li>
            </ul>
            <a href="/blog/ai-2026-real-world-eval-gates-case-studies" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
              Read Post →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">💰</div>
            <h3 className="text-xl font-bold mb-3 text-center">Agent Cost Scorecards</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Budgets, routing bands, and monthly reports Finance trusts
            </p>
            <ul className="text-cyan-200 space-y-1 mb-4 text-xs">
              <li>• 25–40% spend reduction</li>
              <li>• Quality preserved via evals</li>
              <li>• Journey‑level KPIs</li>
              <li>• Anomaly alerts</li>
            </ul>
            <a href="/blog/cost-scorecards-for-agents-visibility-for-finance-and-engineering" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              Read Post →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🛠️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Implementation Guide</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              Step-by-step framework for implementing AI 2026 technologies in your organization
            </p>
            <ul className="text-emerald-200 space-y-1 mb-4 text-xs">
              <li>• Strategic foundation setup</li>
              <li>• Technology assessment</li>
              <li>• Change management</li>
              <li>• ROI optimization</li>
            </ul>
            <a href="/content/resources/ai-2026-implementation-guide" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
              Download Guide →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-4">
            <a href="/blog/ai-2026-real-world-eval-gates-case-studies" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              📚 Read Ultimate Guide
            </a>
            <a href="/case-studies/fortune-500-ai-transformation-600-roi-success" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              🏆 View Success Story
            </a>
            <a href="/content/resources/ai-2026-implementation-guide" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              🛠️ Get Implementation Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestContentPromotion;