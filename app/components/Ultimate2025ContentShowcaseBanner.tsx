import ArrowRight from 'next/link';

export default function Ultimate2025ContentShowcaseBanner() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
            🚀 ULTIMATE 2025 CONTENT SHOWCASE
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Breakthroughs
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Reshaping Enterprise
            </span>
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI strategies, implementation guides, and success stories that are transforming Fortune 500 companies worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-cyan-400 text-sm font-semibold mb-4">🤖 AUTONOMOUS OPERATIONS</div>
            <h3 className="text-2xl font-bold mb-4">AI Agent Orchestration 2025</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Achieve 95% automation with multi-agent systems, real-time decision engines, and autonomous governance frameworks.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span className="text-sm">$50M+ annual savings</span>
              </div>
              <div className="flex items-center text-blue-400">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span className="text-sm">300% productivity increase</span>
              </div>
              <div className="flex items-center text-purple-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span className="text-sm">90% faster deployment</span>
              </div>
            </div>
            <ArrowRight 
              href="/blog/ai-agent-orchestration-2025" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Guide →
            </ArrowRight>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-purple-400 text-sm font-semibold mb-4">🧠 QUANTUM AI</div>
            <h3 className="text-2xl font-bold mb-4">Quantum-Neural Networks 2026</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hybrid quantum-classical architectures delivering 1000x processing speed with deterministic outputs and enterprise-grade reliability.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span className="text-sm">1000x faster processing</span>
              </div>
              <div className="flex items-center text-blue-400">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span className="text-sm">99.9% accuracy guarantee</span>
              </div>
              <div className="flex items-center text-purple-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span className="text-sm">$100M+ ROI potential</span>
              </div>
            </div>
            <ArrowRight 
              href="/blog/quantum-neural-networks-2026" 
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More →
            </ArrowRight>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-green-400 text-sm font-semibold mb-4">🏢 ENTERPRISE TRANSFORMATION</div>
            <h3 className="text-2xl font-bold mb-4">Autonomous Enterprise Operations</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete enterprise automation with self-healing systems, predictive maintenance, and autonomous decision-making at scale.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span className="text-sm">98% operational automation</span>
              </div>
              <div className="flex items-center text-blue-400">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span className="text-sm">80% cost reduction</span>
              </div>
              <div className="flex items-center text-purple-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span className="text-sm">24/7 autonomous operations</span>
              </div>
            </div>
            <ArrowRight 
              href="/blog/autonomous-enterprise-operations-2025" 
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started →
            </ArrowRight>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Enterprise?</h3>
            <p className="text-lg opacity-90 mb-8">
              Join 500+ Fortune 500 companies already using our AI breakthrough strategies to achieve unprecedented results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ArrowRight 
                href="/services" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore All Services
              </ArrowRight>
              <ArrowRight 
                href="/case-studies" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Success Stories
              </ArrowRight>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}