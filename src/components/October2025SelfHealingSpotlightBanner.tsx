import { Link } from 'react-router-dom';

export default function October2025SelfHealingSpotlightBanner() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 animate-bounce">
              🔥 HOT - JUST PUBLISHED TODAY
            </div>
            <h3 className="text-4xl font-bold mb-4">
              Agentic Self-Healing Infrastructure
            </h3>
            <p className="text-xl text-gray-300 mb-4">
              AI agents that autonomously detect, diagnose, and resolve infrastructure 
              issues before they impact your business
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-lg">
                <div className="text-3xl font-bold text-green-400">$5.4B</div>
                <div className="text-sm text-gray-300">Operational Savings</div>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <div className="text-3xl font-bold text-green-400">99.999%</div>
                <div className="text-sm text-gray-300">Uptime Achieved</div>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <div className="text-3xl font-bold text-green-400">2.3 min</div>
                <div className="text-sm text-gray-300">Mean Time to Resolution</div>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <div className="text-3xl font-bold text-green-400">94%</div>
                <div className="text-sm text-gray-300">Auto-Resolution Rate</div>
              </div>
            </div>
            <Link
              to="/blog/ai-2025-october-2-agentic-self-healing-infrastructure-<revolution" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
            >
              Read Complete Guide + Fortune 500 Case Study →
            </Link>
          </div>
          <div className="flex-1">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border-2 border-purple-500/50">
              <h4 className="text-2xl font-bold mb-4">🎯 Key Innovations</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Predictive anomaly detection 15-30 min before failure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Multi-agent coordination for complex issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Self-learning runbooks that improve over time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Zero-touch operations with safety mechanisms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Cross-cloud orchestration and optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
