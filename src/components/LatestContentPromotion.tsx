
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
            <h3 className="text-xl font-bold mb-3 text-center">Evidence Hub Playbook</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              Unify evals, incidents, approvals, and KPIs into an executive Evidence Hub
            </p>
            <ul className="text-purple-200 space-y-1 mb-4 text-xs">
              <li>• Policy gates with pass/fail criteria</li>
              <li>• CI/CD gates and rollback triggers</li>
              <li>• Scorecards per journey</li>
              <li>• Executive dashboards</li>
            </ul>
            <a href="/blog/ai-2026-agent-evidence-hub-integration-playbook" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
              Read Playbook →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">💰</div>
            <h3 className="text-xl font-bold mb-3 text-center">FinServ Cost Controls</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              35–40% savings with routing bands, budgets, and eval‑guarded releases
            </p>
            <ul className="text-cyan-200 space-y-1 mb-4 text-xs">
              <li>• $350M annualized savings</li>
              <li>• Quality preserved via evals</li>
              <li>• Journey‑level KPIs</li>
              <li>• Anomaly alerts</li>
            </ul>
            <a href="/case-studies/ai-2026-finserv-agent-cost-controls-350m-savings" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              Read Case Study →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🛠️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Journey Scorecards Kit</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              Deploy journey‑level KPIs and thresholds for quality, cost, latency, safety
            </p>
            <ul className="text-emerald-200 space-y-1 mb-4 text-xs">
              <li>• JSON KPI schemas</li>
              <li>• Policy‑as‑code examples</li>
              <li>• CI gate wiring</li>
              <li>• Reference dashboards</li>
            </ul>
            <a href="/resources/ai-2026-agent-journey-scorecards-starter" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
              Get Starter Kit →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-4">
            <a href="/blog/ai-2026-agent-evidence-hub-integration-playbook" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              📚 Read Evidence Hub Playbook
            </a>
            <a href="/case-studies/ai-2026-finserv-agent-cost-controls-350m-savings" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              🏆 View Cost Controls Case Study
            </a>
            <a href="/resources/ai-2026-agent-journey-scorecards-starter" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              🛠️ Get Scorecards Starter Kit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestContentPromotion;