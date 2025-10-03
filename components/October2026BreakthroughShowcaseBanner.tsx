export default function October2026BreakthroughShowcaseBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-pink-900/50 border-b border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-500/30 mb-4">
            <span className="text-indigo-300 font-bold text-lg tracking-wider uppercase">
              ⚡ October 2026 Latest Releases
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Transform Your Enterprise with Proven AI Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Three groundbreaking articles and two transformative case studies—delivering actionable insights 
            and proven strategies for AI-powered enterprise transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {/* Article 1 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
            <div className="text-3xl mb-3">🤖</div>
            <h4 className="text-lg font-bold text-white mb-2">Agentic Workflows</h4>
            <p className="text-sm text-gray-400 mb-3">Enterprise automation with autonomous AI agents</p>
            <a 
              href="/blog/ai-2026-october-agentic-workflows-enterprise-revolution"
              className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold"
            >
              Read Article →
            </a>
          </div>

          {/* Article 2 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-3xl mb-3">🧠</div>
            <h4 className="text-lg font-bold text-white mb-2">Multimodal AI</h4>
            <p className="text-sm text-gray-400 mb-3">Synthesize all data types for superior decisions</p>
            <a 
              href="/blog/ai-2026-october-multimodal-intelligence-enterprise-breakthrough"
              className="text-purple-400 hover:text-purple-300 text-sm font-semibold"
            >
              Read Article →
            </a>
          </div>

          {/* Article 3 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
            <div className="text-3xl mb-3">🛡️</div>
            <h4 className="text-lg font-bold text-white mb-2">AI Governance</h4>
            <p className="text-sm text-gray-400 mb-3">Deploy AI responsibly at enterprise scale</p>
            <a 
              href="/blog/ai-2026-october-responsible-ai-governance-framework"
              className="text-pink-400 hover:text-pink-300 text-sm font-semibold"
            >
              Read Article →
            </a>
          </div>

          {/* Case Study 1 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <div className="text-3xl mb-3">🚚</div>
            <h4 className="text-lg font-bold text-white mb-2">$8.2B Logistics</h4>
            <p className="text-sm text-gray-400 mb-3">Global supply chain transformation</p>
            <a 
              href="/case-studies/ai-2026-october-global-logistics-8-billion-transformation"
              className="text-green-400 hover:text-green-300 text-sm font-semibold"
            >
              View Case Study →
            </a>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-3xl mb-3">⚕️</div>
            <h4 className="text-lg font-bold text-white mb-2">$12.7B Healthcare</h4>
            <p className="text-sm text-gray-400 mb-3">Patient outcomes revolution</p>
            <a 
              href="/case-studies/ai-2026-october-healthcare-multimodal-12-billion-breakthrough"
              className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
            >
              View Case Study →
            </a>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
          >
            Get Your Free AI Strategy Session
          </a>
        </div>
      </div>
    </section>
  );
}
