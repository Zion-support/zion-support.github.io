export default function October2025LatestContentBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-emerald-900/30 via-teal-900/30 to-cyan-900/30 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 mb-4">
              <span className="text-emerald-300 font-bold text-lg tracking-wider uppercase">
                ✨ JUST PUBLISHED - OCTOBER 2025 BREAKTHROUGH CONTENT
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Latest Enterprise Intelligence Insights
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover how leading enterprises are achieving unprecedented results with quantum-enhanced AI, 
              neuromorphic computing, and autonomous intelligence systems.
            </p>
          </div>

          {/* Content Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Blog Post Card */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">📘</span>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Blog Post</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Enterprise Intelligence Revolution Guide
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Complete implementation guide covering quantum analytics, cognitive automation, and autonomous 
                intelligence systems. Learn how to achieve 300% efficiency gains.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span>⏱️ 12 min read</span>
                <span>•</span>
                <span>📅 Oct 1, 2025</span>
              </div>
              <a
                href="/content/blog/ai-2025-october-enterprise-intelligence-revolution-guide.md"
                className="inline-block w-full text-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Read Full Article →
              </a>
            </div>

            {/* Case Study Card */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💰</span>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Case Study</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Fortune 100 $50B Success Story
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                How a Fortune 100 enterprise achieved $50 billion in value creation through enterprise intelligence 
                transformation. 2000% ROI in year one.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span>💎 Fortune 100</span>
                <span>•</span>
                <span>📈 2000% ROI</span>
              </div>
              <a
                href="/content/case-studies/ai-2025-october-fortune-100-enterprise-intelligence-transformation-50-billion-success.md"
                className="inline-block w-full text-center bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                View Case Study →
              </a>
            </div>

            {/* Service Card */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🚀</span>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Service</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Enterprise Intelligence Platform
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Transform your enterprise with our flagship platform featuring quantum analytics, autonomous 
                intelligence, and neuromorphic computing. Starting at $500K.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span>⚡ 90-day deployment</span>
                <span>•</span>
                <span>🎯 98% success</span>
              </div>
              <a
                href="/content/services/enterprise-intelligence-revolution-platform-2025.md"
                className="inline-block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Explore Platform →
              </a>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400 mb-4">
              Ready to transform your enterprise with revolutionary AI technologies?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
            >
              <span>Schedule Free Assessment</span>
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
