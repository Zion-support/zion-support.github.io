import React from 'react';
import Link from 'next/link';

export default function Ultimate2026ContentShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="animate-pulse">🚀</span>
            <span>NEW CONTENT ALERT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate 2026 Content Showcase
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI innovations and success stories that are transforming 
            enterprise operations and driving unprecedented results in 2026
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Link href="/blog/ai-2026-next-generation-innovations" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED ARTICLE
                  </div>
                  <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    15 min read
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                  AI 2026: Next-Generation Innovations Transforming Enterprise
                </h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Explore revolutionary AI technologies including quantum AI computing, neural interfaces, 
                  and autonomous systems that are reshaping business operations and driving 300%+ ROI.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>Published Jan 20, 2025</span>
                    <span>•</span>
                    <span>AI Innovation</span>
                  </div>
                  <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    Read Full Article →
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Success Story */}
          <div>
            <Link href="/case-studies/ai-2026-mega-transformation-success-story" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    SUCCESS STORY
                  </div>
                  <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    Fortune 500
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">
                  AI 2026 Mega Transformation: $100M Success Story
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  See how a Fortune 500 manufacturing company achieved $100M in savings and 400% ROI 
                  through comprehensive AI transformation.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Annual Savings</span>
                    <span className="text-xl font-bold text-green-400">$100M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">ROI Achieved</span>
                    <span className="text-xl font-bold text-green-400">400%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Efficiency Gain</span>
                    <span className="text-xl font-bold text-green-400">95%</span>
                  </div>
                </div>
                <div className="flex items-center text-green-400 font-semibold group-hover:text-green-300 transition-colors">
                  View Case Study →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Additional Content Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">⚡</div>
              <h4 className="text-lg font-bold">Edge Computing AI</h4>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Sub-50ms response times with AI processing at the network edge
            </p>
            <div className="text-cyan-400 text-sm font-semibold">Learn More →</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">🤖</div>
              <h4 className="text-lg font-bold">Autonomous Agents</h4>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Revolutionary workflow automation with 300% ROI achievements
            </p>
            <div className="text-purple-400 text-sm font-semibold">Explore Now →</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">🧠</div>
              <h4 className="text-lg font-bold">Neural Interfaces</h4>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Direct human-AI cognitive integration for enhanced decision making
            </p>
            <div className="text-pink-400 text-sm font-semibold">Discover More →</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-8 rounded-2xl mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl text-gray-100 mb-6 max-w-2xl mx-auto">
              Join the AI revolution and achieve similar results. Our proven methodologies 
              deliver measurable ROI and sustainable competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Our AI Services
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-sm text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-sm text-gray-400">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">$50M+</div>
              <div className="text-sm text-gray-400">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">18</div>
              <div className="text-sm text-gray-400">Months Payback</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}