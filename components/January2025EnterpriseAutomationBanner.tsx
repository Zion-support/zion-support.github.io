import React from 'react';

const January2025EnterpriseAutomationBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-cyan-900/40 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-8">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
              🚀 BREAKING: January 2025 Enterprise Automation Revolution
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            $2.3 Billion Cost Savings in 30 Days
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto font-semibold">
            Fortune 500 companies achieve unprecedented 95% efficiency gains through revolutionary AI automation systems
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
              <div className="text-3xl font-extrabold text-emerald-400 mb-2">$2.3B</div>
              <div className="text-sm text-emerald-300 font-semibold">Cost Savings</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-teal-500/30">
              <div className="text-3xl font-extrabold text-teal-400 mb-2">95%</div>
              <div className="text-sm text-teal-300 font-semibold">Efficiency Gains</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">94%</div>
              <div className="text-sm text-cyan-300 font-semibold">Error Reduction</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">30</div>
              <div className="text-sm text-blue-300 font-semibold">Days to Results</div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Process Orchestration</h3>
              <p className="text-gray-300 mb-6">
                Self-optimizing business workflows with real-time decision making and predictive analytics
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Sub-second response times</li>
                <li>• 99.7% accuracy in risk assessment</li>
                <li>• Zero downtime implementation</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-teal-500/50 transition-all duration-300">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cognitive Decision Intelligence</h3>
              <p className="text-gray-300 mb-6">
                Advanced AI systems that make complex business decisions with unprecedented accuracy
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Multi-dimensional analysis</li>
                <li>• Predictive maintenance</li>
                <li>• Automated compliance</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent Resource Management</h3>
              <p className="text-gray-300 mb-6">
                Dynamic resource allocation and optimization for maximum efficiency and cost savings
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Real-time scaling</li>
                <li>• Cost optimization</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
          </div>

          {/* Success Stories Preview */}
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Fortune 500 Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-emerald-400 mb-2">$847M</div>
                <div className="text-sm text-emerald-300">Global Manufacturing Leader</div>
                <div className="text-xs text-gray-400 mt-1">94% supply chain efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-teal-400 mb-2">$743M</div>
                <div className="text-sm text-teal-300">Financial Services Giant</div>
                <div className="text-xs text-gray-400 mt-1">99.8% fraud detection accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-cyan-400 mb-2">$689M</div>
                <div className="text-sm text-cyan-300">Automotive Manufacturer</div>
                <div className="text-xs text-gray-400 mt-1">Zero unplanned downtime</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog/ai-2025-january-enterprise-automation-breakthrough"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough Report →
            </a>
            <a
              href="/case-studies/fortune-500-ai-automation-2-3-billion-success-2025"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
            >
              View Fortune 500 Case Study →
            </a>
            <a
              href="/contact"
              className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Your Implementation Plan
            </a>
          </div>

          {/* Bottom Badge */}
          <div className="mt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <span className="text-emerald-400 font-semibold text-sm">
                🎯 Limited Time: Free Enterprise Automation Assessment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025EnterpriseAutomationBanner;