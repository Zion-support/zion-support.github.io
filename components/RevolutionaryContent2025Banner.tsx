import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContent2025Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Breakthroughs
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              2025 Edition
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Discover the cutting-edge AI innovations transforming enterprises worldwide. 
            From quantum computing to autonomous systems, explore the future of business intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Article 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <span className="bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-semibold">
                  BREAKTHROUGH
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
              AI 2025 Revolutionary Breakthroughs
            </h3>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Discover the revolutionary AI breakthroughs reshaping 2025. From autonomous agents to quantum AI, explore the technologies transforming enterprise operations.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-white/60">25 min read</div>
              <Link
                href="/blog/ai-2025-revolutionary-breakthroughs"
                className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors text-sm"
              >
                Read Article →
              </Link>
            </div>
          </div>

          {/* Featured Article 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏭</span>
              </div>
              <div>
                <span className="bg-blue-400/20 text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">
                  AUTONOMOUS
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
              AI Autonomous Enterprise 2025
            </h3>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Complete implementation roadmap for autonomous AI systems. Achieve 90% efficiency gains and 70% cost reduction with proven methodologies.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-white/60">30 min read</div>
              <Link
                href="/blog/ai-autonomous-enterprise-2025"
                className="text-blue-300 font-semibold hover:text-blue-200 transition-colors text-sm"
              >
                Read Guide →
              </Link>
            </div>
          </div>

          {/* Featured Article 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔬</span>
              </div>
              <div>
                <span className="bg-purple-400/20 text-purple-300 px-2 py-1 rounded-full text-xs font-semibold">
                  QUANTUM
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
              AI Quantum Computing Enterprise
            </h3>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Explore quantum-enhanced AI for enterprise computing. Achieve 1000x faster processing and breakthrough business intelligence.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-white/60">28 min read</div>
              <Link
                href="/blog/ai-quantum-computing-enterprise-2025"
                className="text-purple-300 font-semibold hover:text-purple-200 transition-colors text-sm"
              >
                Read Article →
              </Link>
            </div>
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center">
              <span className="text-3xl">🏆</span>
            </div>
            <div>
              <span className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                SUCCESS STORY
              </span>
              <h3 className="text-2xl font-bold mt-2">Manufacturing AI Transformation</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">75%</div>
              <div className="text-white/80 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">90%</div>
              <div className="text-white/80 text-sm">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">$50M</div>
              <div className="text-white/80 text-sm">Annual Savings</div>
            </div>
          </div>
          <p className="text-white/90 mb-6 leading-relaxed">
            See how a Fortune 500 manufacturer achieved unprecedented results with comprehensive AI implementation. 
            From autonomous production systems to predictive maintenance, discover the strategies that delivered 300% ROI.
          </p>
          <Link
            href="/case-studies/ai-transformation-manufacturing-2025"
            className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>View Case Study</span>
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-xl mb-6 opacity-90">
            Ready to transform your enterprise with cutting-edge AI solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Join 500+ enterprises already transforming with AI. 300% ROI guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}