import React from 'react';
import Link from 'next/link';

export default function LatestContent2026MegaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">NEW CONTENT JUST RELEASED</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Latest AI Insights & Success Stories
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              2026 Edition
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI strategies, real-world success stories, and actionable insights 
            that are transforming businesses worldwide in 2026.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <div className="md:col-span-2">
            <Link href="/blog/ai-enterprise-adoption-2025" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED ARTICLE
                  </span>
                  <span className="text-white/70 text-sm">20 min read</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">
                  AI Enterprise Adoption 2025: Complete Implementation Guide
                </h3>
                
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation 
                  roadmaps. Achieve 300% ROI and transform your organization.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">300%</div>
                    <div className="text-xs text-white/70">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">70%</div>
                    <div className="text-xs text-white/70">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">90%</div>
                    <div className="text-xs text-white/70">Efficiency Gain</div>
                  </div>
                </div>
                
                <div className="flex items-center text-cyan-300 font-semibold group-hover:text-cyan-200 transition-colors">
                  <span>Read Complete Guide</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            <Link href="/blog/ai-trends-2025-predictions" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    TRENDS
                  </span>
                  <span className="text-white/70 text-xs">15 min read</span>
                </div>
                
                <h4 className="text-lg font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                  AI Trends 2025: Top 10 Predictions
                </h4>
                
                <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                  Discover the transformative AI technologies reshaping industries in 2025.
                </p>
                
                <div className="flex items-center text-cyan-300 font-semibold text-sm group-hover:text-cyan-200 transition-colors">
                  <span>Explore Trends</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-supply-chain-optimization-2025" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    SUCCESS STORY
                  </span>
                  <span className="text-white/70 text-xs">Manufacturing</span>
                </div>
                
                <h4 className="text-lg font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                  Supply Chain AI: 60% Cost Reduction
                </h4>
                
                <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                  See how a global manufacturer achieved $12M annual savings with AI optimization.
                </p>
                
                <div className="flex items-center text-cyan-300 font-semibold text-sm group-hover:text-cyan-200 transition-colors">
                  <span>View Case Study</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Additional Content Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h4 className="font-bold text-white mb-2">AI Autonomous Agents</h4>
              <p className="text-gray-200 text-sm">Master enterprise implementation</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h4 className="font-bold text-white mb-2">AI Governance</h4>
              <p className="text-gray-200 text-sm">70% risk reduction frameworks</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💰</span>
              </div>
              <h4 className="font-bold text-white mb-2">FinTech AI</h4>
              <p className="text-gray-200 text-sm">$2.5M savings case study</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🏥</span>
              </div>
              <h4 className="font-bold text-white mb-2">Healthcare AI</h4>
              <p className="text-gray-200 text-sm">40% better diagnostics</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Ahead with Our Latest AI Insights
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Join 10,000+ professionals who get weekly updates on AI trends, success stories, 
              and actionable strategies for business transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Explore All Content
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
              >
                Get Free Consultation
              </a>
            </div>
            
            <p className="text-white/70 text-sm mt-4">
              📧 Get instant access to our AI transformation playbook
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}