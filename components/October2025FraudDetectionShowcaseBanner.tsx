import React from 'react';

export default function October2025FraudDetectionShowcaseBanner() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900 py-16 border-b border-red-500/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <span className="text-red-400 font-bold text-lg tracking-wider uppercase">
              🛡️ OCTOBER 1, 2025 - NEW FRAUD DETECTION CONTENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Advanced Fraud Detection Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore our comprehensive fraud detection resources: Technical implementation guide, $200M success story, and enterprise platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-6">📖</div>
            <h3 className="text-2xl font-bold text-white mb-4">Implementation Guide</h3>
            <p className="text-gray-300 mb-6">
              Complete technical guide to building real-time fraud detection systems with 99.7% accuracy, &lt;50ms processing, and 94% false positive reduction.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>✓ Real-time AI architecture</li>
              <li>✓ 850+ feature engineering</li>
              <li>✓ Ensemble ML models</li>
              <li>✓ Graph intelligence</li>
              <li>✓ 14-week implementation</li>
            </ul>
            <a 
              href="/blog/ai-2025-oct-01-advanced-fraud-detection-real-time-prevention"
              className="inline-block bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-400 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50"
            >
              Read Full Guide →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-6">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4">$200M Success Story</h3>
            <p className="text-gray-300 mb-6">
              Fortune 100 global bank achieves $200.7M annual savings with AI-powered fraud detection: 99.7% accuracy, 94% false positive reduction, 6,436% ROI.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>✓ $184.8M fraud prevented</li>
              <li>✓ NPS: +47 points improvement</li>
              <li>✓ 47M daily transactions</li>
              <li>✓ 17-day payback period</li>
              <li>✓ 99.99% system uptime</li>
            </ul>
            <a 
              href="/case-studies/ai-2025-oct-01-global-bank-fraud-detection-200-million-success"
              className="inline-block bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-400 hover:to-yellow-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
            >
              View Case Study →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise Platform</h3>
            <p className="text-gray-300 mb-6">
              Production-ready fraud detection platform with real-time AI, behavioral analytics, graph intelligence, and proven $200M+ annual savings.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>✓ 99.7% detection accuracy</li>
              <li>✓ &lt;50ms processing time</li>
              <li>✓ 10M+ events/second</li>
              <li>✓ Cross-channel intelligence</li>
              <li>✓ 4,500%+ 3-year ROI</li>
            </ul>
            <a 
              href="/services/fraud-detection-ai-platform-2025"
              className="inline-block bg-gradient-to-r from-yellow-500 to-green-600 hover:from-yellow-400 hover:to-green-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
            >
              Explore Platform →
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg mb-6">
            <strong className="text-red-400">New October 2025:</strong> Comprehensive fraud detection resources based on Fortune 100 success
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-red-500/20 px-4 py-2 rounded-full text-red-300 border border-red-500/30 text-sm">Real-Time AI</span>
            <span className="bg-orange-500/20 px-4 py-2 rounded-full text-orange-300 border border-orange-500/30 text-sm">99.7% Accuracy</span>
            <span className="bg-yellow-500/20 px-4 py-2 rounded-full text-yellow-300 border border-yellow-500/30 text-sm">$200M Savings</span>
            <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300 border border-green-500/30 text-sm">94% FP Reduction</span>
            <span className="bg-blue-500/20 px-4 py-2 rounded-full text-blue-300 border border-blue-500/30 text-sm">&lt;50ms Latency</span>
            <span className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 border border-purple-500/30 text-sm">6,436% ROI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
