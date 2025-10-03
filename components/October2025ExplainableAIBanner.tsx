import { Link } from 'react-router-dom';

export default function October2025ExplainableAIBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 py-20 border-y border-blue-500/20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/40 mb-6 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-blue-300 font-bold text-sm tracking-wider uppercase">
              🔍 JUST PUBLISHED: October 2025 • Explainable AI Revolution
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Explainable AI: Enterprise Trust Through Transparency
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Build stakeholder trust with interpretable AI systems delivering 97% accuracy, 
            $395M risk reduction, and 100% regulatory compliance.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 mb-8">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-blue-400 mb-2">97%</div>
                <div className="text-blue-300 text-sm">Model Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-400 mb-2">$395M</div>
                <div className="text-indigo-300 text-sm">Risk Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-violet-400 mb-2">100%</div>
                <div className="text-violet-300 text-sm">Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-purple-400 mb-2">89%</div>
                <div className="text-purple-300 text-sm">Trust Increase</div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-500/10 rounded-lg p-6">
                <div className="text-2xl mb-3">🔍</div>
                <h3 className="text-lg font-bold text-blue-400 mb-2">Model Interpretability</h3>
                <p className="text-gray-300 text-sm mb-3">
                  SHAP, LIME, and feature importance analysis for complete transparency
                </p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Decision tree visualization</li>
                  <li>• Feature importance ranking</li>
                  <li>• Counterfactual explanations</li>
                </ul>
              </div>

              <div className="bg-indigo-500/10 rounded-lg p-6">
                <div className="text-2xl mb-3">📋</div>
                <h3 className="text-lg font-bold text-indigo-400 mb-2">Audit & Compliance</h3>
                <p className="text-gray-300 text-sm mb-3">
                  EU AI Act ready with automated bias detection and fairness metrics
                </p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Complete audit trails</li>
                  <li>• Regulatory reporting</li>
                  <li>• Bias monitoring</li>
                </ul>
              </div>

              <div className="bg-violet-500/10 rounded-lg p-6">
                <div className="text-2xl mb-3">🤝</div>
                <h3 className="text-lg font-bold text-violet-400 mb-2">Trust Building</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Human-readable explanations with confidence scoring for stakeholders
                </p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Interactive dashboards</li>
                  <li>• Confidence metrics</li>
                  <li>• What-if analysis</li>
                </ul>
              </div>
            </div>

            {/* Success Story */}
            <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                🏦 Fortune 100 Financial Services Success
              </h3>
              <p className="text-gray-300 mb-4">
                Major financial institution deployed explainable AI for credit risk decisions, 
                processing 8.7M loan applications annually with 97% accuracy and $395M in 
                risk reduction while achieving complete regulatory compliance.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">8.7M</div>
                  <div className="text-blue-300 text-xs">Annual Decisions</div>
                </div>
                <div className="bg-indigo-500/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-indigo-400">97%</div>
                  <div className="text-indigo-300 text-xs">Accuracy</div>
                </div>
                <div className="bg-violet-500/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-violet-400">$395M</div>
                  <div className="text-violet-300 text-xs">Risk Avoided</div>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">94%</div>
                  <div className="text-purple-300 text-xs">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center gap-4 flex-wrap">
              <Link 
                to="/blog/ai-october-2025-explainable-ai-enterprise-transparency" 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Read Full Article
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-lg border border-white/30 transition-all duration-300"
              >
                Request XAI Assessment
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-full border border-blue-500/30">
            <div>
              <div className="text-2xl font-bold text-blue-400">$395M+</div>
              <div className="text-blue-300 text-xs">Risk Reduction Value</div>
            </div>
            <div className="w-px h-8 bg-blue-500/30"></div>
            <div>
              <div className="text-2xl font-bold text-indigo-400">100%</div>
              <div className="text-indigo-300 text-xs">Regulatory Compliance</div>
            </div>
            <div className="w-px h-8 bg-indigo-500/30"></div>
            <div>
              <div className="text-2xl font-bold text-violet-400">89%</div>
              <div className="text-violet-300 text-xs">Trust Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
