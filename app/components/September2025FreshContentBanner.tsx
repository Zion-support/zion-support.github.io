import ArrowRight from 'next/link';

export default function September2025FreshContentBanner() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-16 px-4 rounded-2xl shadow-2xl my-12 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              🚀 FRESH CONTENT: September 30, 2025
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Revolutionary AI Innovations Now Available
          </h2>
          <p className="text-2xl text-white/95 mb-3 max-w-3xl mx-auto font-semibold">
            Edge AI, Autonomous Agents & Responsible AI Frameworks
          </p>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            Transform your enterprise with $100B+ market opportunities, 10,000x performance gains, and ethical AI leadership
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform hover:shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-4xl">⚡</div>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">$50B VALUE</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Edge AI Revolution 2025</h3>
            <p className="text-white/90 mb-4 text-sm leading-relaxed">
              Decentralized intelligence delivering 10,000x faster processing, 95% cost reduction, and real-time autonomous decisions at the edge.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-xs">
                <span className="text-cyan-300 mr-2">✓</span>
                <span>10,000x faster edge processing</span>
              </div>
              <div className="flex items-center text-xs">
                <span className="text-cyan-300 mr-2">✓</span>
                <span>95% bandwidth cost reduction</span>
              </div>
              <div className="flex items-center text-xs">
                <span className="text-cyan-300 mr-2">✓</span>
                <span>99.99% distributed uptime</span>
              </div>
            </div>
            <ArrowRight 
              href="/blog/ai-2025-september-edge-ai-revolution"
              className="inline-flex items-center text-sm font-bold text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
            >
              Read Full Article →
            </ArrowRight>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform hover:shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-4xl">🤖</div>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">$100B MARKET</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Autonomous AI Agents</h3>
            <p className="text-white/90 mb-4 text-sm leading-relaxed">
              Enterprise automation at scale: 99% automation rates, 10,000x productivity gains, and continuous self-improvement.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-xs">
                <span className="text-cyan-300 mr-2">✓</span>
                <span>99% enterprise automation</span>
              </div>
              <div className="flex items-center text-xs">
                <span className="text-cyan-300 mr-2">✓</span>
                <span>10,000x productivity gains</span>
              </div>
              <div className="flex items-center text-xs">
                <span className="text-cyan-300 mr-2">✓</span>
                <span>Self-learning agents</span>
              </div>
            </div>
            <ArrowRight 
              href="/blog/ai-2025-september-autonomous-agents-enterprise"
              className="inline-flex items-center text-sm font-bold text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
            >
              Discover Agents →
            </ArrowRight>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform hover:shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-4xl">🛡️</div>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-black px-3 py-1 rounded-full text-xs font-bold">COMPLIANCE</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Responsible AI 2025</h3>
            <p className="text-white/90 mb-4 text-sm leading-relaxed">
              Comprehensive frameworks ensuring ethical, transparent, and compliant AI systems that build stakeholder trust worldwide.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-xs">
                <span className="text-cyan-300 mr-2">✓</span>
                <span>Global regulatory compliance</span>
              </div>
              <div className="flex items-center text-xs">
                <span className="text-cyan-300 mr-2">✓</span>
                <span>Fairness & transparency</span>
              </div>
              <div className="flex items-center text-xs">
                <span className="text-cyan-300 mr-2">✓</span>
                <span>Risk mitigation frameworks</span>
              </div>
            </div>
            <ArrowRight 
              href="/blog/ai-2025-september-responsible-ai-frameworks"
              className="inline-flex items-center text-sm font-bold text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
            >
              Learn Framework →
            </ArrowRight>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why These Technologies Matter Now</h3>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start">
                  <span className="text-cyan-300 mr-3 text-xl">✓</span>
                  <span><strong className="text-white">Edge AI:</strong> Process data locally for instant response times and massive cost savings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-300 mr-3 text-xl">✓</span>
                  <span><strong className="text-white">Autonomous Agents:</strong> Self-improving AI systems that automate complex enterprise workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-300 mr-3 text-xl">✓</span>
                  <span><strong className="text-white">Responsible AI:</strong> Build trust with ethical frameworks that ensure compliance and fairness</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-5 border border-yellow-400/30">
                <div className="text-4xl font-extrabold mb-2">$150B+</div>
                <div className="text-sm text-white/90 font-semibold">Combined Market Opportunity</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-5 border border-green-400/30">
                <div className="text-4xl font-extrabold mb-2">99.99%</div>
                <div className="text-sm text-white/90 font-semibold">Enterprise Success Rate</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-5 border border-blue-400/30">
                <div className="text-4xl font-extrabold mb-2">3-9mo</div>
                <div className="text-sm text-white/90 font-semibold">Average ROI Timeline</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">Complete AI Transformation Suite</h3>
            <p className="text-white/90 mb-4 max-w-2xl mx-auto">
              These three breakthrough technologies work together to create a comprehensive AI transformation strategy: 
              <strong> Edge AI for performance</strong>, <strong>Autonomous Agents for automation</strong>, 
              and <strong>Responsible AI for trust</strong>.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold">10,000x Faster</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold">99% Automation</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold">100% Compliant</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold">$150B+ Value</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <ArrowRight
              href="/services"
              className="bg-white text-indigo-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              🚀 Explore AI Services
            </ArrowRight>
            <ArrowRight
              href="/blog"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              📚 Read All Articles
            </ArrowRight>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              📞 Call +1 302 464 0950
            </a>
          </div>
          <p className="text-lg text-white/90 font-semibold">
            Ready to implement these breakthrough technologies? 
            <a href="mailto:kleber@ziontechgroup.com" className="underline hover:text-cyan-200 ml-2 font-bold">
              Schedule a Free Consultation →
            </a>
          </p>
          <p className="mt-4 text-sm text-white/75">
            Join 500+ enterprises already transforming with Zion Tech Group
          </p>
        </div>
      </div>
    </div>
  );
}
