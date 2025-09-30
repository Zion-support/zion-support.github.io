import React from 'react';
import Link from 'next/link';

export default function LatestContent2026MegaBanner() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">New Content Available</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Latest AI Innovations & 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Success Stories</span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover cutting-edge AI solutions, proven strategies, and real-world case studies 
            that are transforming businesses across industries.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* AI Enterprise Adoption Guide */}
          <Link href="/blog/ai-enterprise-adoption-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">
                    Enterprise Guide
                  </span>
                  <div className="text-white/70 text-sm mt-1">20 min read</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                AI Enterprise Adoption 2025: Complete Implementation Guide
              </h3>
              
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation 
                roadmaps. Achieve 300% ROI with our comprehensive guide.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-green-300 text-sm">
                  <span className="font-semibold">300% ROI</span>
                  <span>•</span>
                  <span>Proven Framework</span>
                </div>
                <div className="text-white/60 group-hover:text-yellow-300 transition-colors">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>

          {/* AI Trends 2025 */}
          <Link href="/blog/ai-trends-2025-predictions" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured Article
                  </span>
                  <div className="text-white/70 text-sm mt-1">15 min read</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                AI Trends 2025: Top 10 Predictions & Industry Insights
              </h3>
              
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Discover the top AI trends shaping 2025. From autonomous agents to edge computing, 
                explore transformative technologies.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-purple-300 text-sm">
                  <span className="font-semibold">10 Trends</span>
                  <span>•</span>
                  <span>Industry Insights</span>
                </div>
                <div className="text-white/60 group-hover:text-yellow-300 transition-colors">
                  Read Article →
                </div>
              </div>
            </div>
          </Link>

          {/* Supply Chain Case Study */}
          <Link href="/case-studies/ai-supply-chain-optimization-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <div className="text-white/70 text-sm mt-1">Manufacturing</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
              </h3>
              
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, 
                saving $12M annually.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-green-300 text-sm">
                  <span className="font-semibold">$12M Savings</span>
                  <span>•</span>
                  <span>90% Efficiency</span>
                </div>
                <div className="text-white/60 group-hover:text-yellow-300 transition-colors">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-3">🤖</div>
            <h4 className="font-semibold text-white mb-2">Autonomous Agents</h4>
            <p className="text-blue-100 text-sm">Enterprise implementation guide with 300% ROI strategies</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-3">🛡️</div>
            <h4 className="font-semibold text-white mb-2">AI Governance</h4>
            <p className="text-blue-100 text-sm">Comprehensive framework for enterprise AI risk management</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-semibold text-white mb-2">FinTech AI</h4>
            <p className="text-blue-100 text-sm">70% risk reduction and $2.5M savings with automated compliance</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-3">🏥</div>
            <h4 className="font-semibold text-white mb-2">Healthcare AI</h4>
            <p className="text-blue-100 text-sm">40% better diagnostics and 60% improved patient outcomes</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-blue-100 mb-6">
              Join hundreds of companies already achieving 300% ROI with our AI solutions. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your AI Journey
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}