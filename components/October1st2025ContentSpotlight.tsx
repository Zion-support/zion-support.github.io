export default function October1st2025ContentSpotlight() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 border-y border-indigo-500/30">
      <div className="container mx-auto px-6">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border-2 border-indigo-400/60 mb-8 shadow-lg shadow-indigo-500/30">
            <span className="text-2xl">🌟</span>
            <span className="text-indigo-300 font-extrabold text-2xl tracking-wide uppercase">
              Featured October 1, 2025 Content
            </span>
            <span className="text-2xl">🌟</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Master the Future of Enterprise AI
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Three groundbreaking resources to revolutionize your AI strategy, reduce costs dramatically, 
            and achieve unprecedented operational excellence.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Edge AI Featured Block */}
          <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-xl rounded-3xl p-10 border-2 border-cyan-400/50 hover:border-cyan-400/80 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/40 transform hover:scale-[1.02]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/20 text-cyan-300 rounded-full text-sm font-bold mb-4">
                  <span>🔥</span>
                  <span>MOST POPULAR</span>
                </div>
                <h3 className="text-4xl font-extrabold text-white mb-4">
                  Edge AI & Real-Time Analytics Revolution
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Deploy distributed AI systems that process data locally with sub-millisecond latency. 
                  Eliminate cloud bottlenecks and achieve 89% cost reduction while processing 50M+ events per second.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white">Sub-0.5ms inference latency for real-time decisions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white">89% cost reduction vs cloud-based architectures</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white">Process 50M+ events per second at the edge</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white">Complete implementation roadmap included</span>
                  </div>
                </div>
                <a 
                  href="/blog/ai-2025-october-1-edge-ai-real-time-analytics-revolution"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
                >
                  Read Full Technical Guide →
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-400/30">
                  <div className="text-4xl font-extrabold text-cyan-400 mb-2">50M+</div>
                  <div className="text-sm text-gray-300">Events/Second</div>
                </div>
                <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-400/30">
                  <div className="text-4xl font-extrabold text-blue-400 mb-2">&lt;0.5ms</div>
                  <div className="text-sm text-gray-300">Latency</div>
                </div>
                <div className="bg-green-500/10 rounded-2xl p-6 border border-green-400/30">
                  <div className="text-4xl font-extrabold text-green-400 mb-2">89%</div>
                  <div className="text-sm text-gray-300">Cost Cut</div>
                </div>
                <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-400/30">
                  <div className="text-4xl font-extrabold text-purple-400 mb-2">10x</div>
                  <div className="text-sm text-gray-300">Performance</div>
                </div>
              </div>
            </div>
          </div>

          {/* LLM Cost Optimization Featured Block */}
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-3xl p-10 border-2 border-purple-400/50 hover:border-purple-400/80 transition-all duration-300 shadow-2xl hover:shadow-purple-500/40 transform hover:scale-[1.02]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-400/30">
                  <div className="text-4xl font-extrabold text-purple-400 mb-2">94%</div>
                  <div className="text-sm text-gray-300">Cost Savings</div>
                </div>
                <div className="bg-pink-500/10 rounded-2xl p-6 border border-pink-400/30">
                  <div className="text-4xl font-extrabold text-pink-400 mb-2">97%</div>
                  <div className="text-sm text-gray-300">Cache Hit Rate</div>
                </div>
                <div className="bg-green-500/10 rounded-2xl p-6 border border-green-400/30">
                  <div className="text-4xl font-extrabold text-green-400 mb-2">12.5x</div>
                  <div className="text-sm text-gray-300">ROI Boost</div>
                </div>
                <div className="bg-indigo-500/10 rounded-2xl p-6 border border-indigo-400/30">
                  <div className="text-4xl font-extrabold text-indigo-400 mb-2">$2.7M</div>
                  <div className="text-sm text-gray-300">Annual Savings</div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-400/20 text-purple-300 rounded-full text-sm font-bold mb-4">
                  <span>💎</span>
                  <span>MUST READ</span>
                </div>
                <h3 className="text-4xl font-extrabold text-white mb-4">
                  Generative AI Cost Optimization Mastery
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Stop overpaying for LLM API calls. Master the 7-layer optimization framework that leading 
                  enterprises use to reduce generative AI costs by 94% while improving quality and latency.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white">Intelligent caching for 97% cache hit rates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white">Prompt engineering to reduce tokens by 66%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white">Model routing strategies for 68% blended cost reduction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white">Real SaaS company: $240K/mo → $14K/mo</span>
                  </div>
                </div>
                <a 
                  href="/blog/ai-2025-october-1-generative-ai-cost-optimization-mastery"
                  className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
                >
                  Master Cost Optimization →
                </a>
              </div>
            </div>
          </div>

          {/* Manufacturing Case Study Featured Block */}
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-xl rounded-3xl p-10 border-2 border-green-400/50 hover:border-green-400/80 transition-all duration-300 shadow-2xl hover:shadow-green-500/40 transform hover:scale-[1.02]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-400/20 text-green-300 rounded-full text-sm font-bold mb-4">
                  <span>🏆</span>
                  <span>PROVEN SUCCESS</span>
                </div>
                <h3 className="text-4xl font-extrabold text-white mb-4">
                  Fortune 100 Manufacturing: $86M Edge AI Success
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Real-world transformation story. See how a Fortune 100 manufacturer deployed edge AI across 
                  120 factories, achieving 97% defect detection, 92% downtime reduction, and 23.5x ROI.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white">12,000+ edge AI devices deployed globally</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white">$86M annual savings with 23.5x first-year ROI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white">97% defect detection vs 60% manual inspection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white">Complete implementation roadmap & lessons learned</span>
                  </div>
                </div>
                <a 
                  href="/case-studies/manufacturing-edge-ai-success-2025"
                  className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
                >
                  Read Full Case Study →
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/10 rounded-2xl p-6 border border-green-400/30">
                  <div className="text-4xl font-extrabold text-green-400 mb-2">$86M</div>
                  <div className="text-sm text-gray-300">Annual Savings</div>
                </div>
                <div className="bg-emerald-500/10 rounded-2xl p-6 border border-emerald-400/30">
                  <div className="text-4xl font-extrabold text-emerald-400 mb-2">97%</div>
                  <div className="text-sm text-gray-300">Defect Detection</div>
                </div>
                <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-400/30">
                  <div className="text-4xl font-extrabold text-cyan-400 mb-2">92%</div>
                  <div className="text-sm text-gray-300">Less Downtime</div>
                </div>
                <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-400/30">
                  <div className="text-4xl font-extrabold text-blue-400 mb-2">23.5x</div>
                  <div className="text-sm text-gray-300">ROI Year 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-10 max-w-4xl mx-auto border border-indigo-400/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Zion Tech Group has helped Fortune 500 companies achieve breakthrough results with AI. 
              Let's discuss how we can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1 text-lg"
              >
                Schedule Free Strategy Session
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-400/20 font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg"
              >
                View All Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
