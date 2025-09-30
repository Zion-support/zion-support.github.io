import React from 'react';
import Link from 'next/link';

export default function LatestContent2026MegaBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-lg font-semibold">Latest 2026 Content</span>
            <span className="text-sm opacity-75">•</span>
            <span className="text-sm opacity-75">Updated Daily</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Revolutionary
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">
              AI Content Hub
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl opacity-90 max-w-5xl mx-auto leading-relaxed mb-12">
            Discover cutting-edge AI insights, proven success stories, and actionable strategies 
            that are transforming enterprises worldwide in 2026.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
            >
              Explore AI Blog
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-indigo-900 transition-all duration-300 backdrop-blur-sm"
            >
              View Success Stories
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Article */}
          <div className="lg:col-span-2 group">
            <Link href="/blog/ai-enterprise-transformation-2026" className="block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Featured Article
                  </span>
                  <span className="text-sm opacity-75">25 min read</span>
                  <span className="text-sm opacity-75">•</span>
                  <span className="text-sm opacity-75">Jan 20, 2026</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-6 group-hover:text-cyan-300 transition-colors">
                  AI Enterprise Transformation 2026: Complete Implementation Guide
                </h3>
                
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  Master AI enterprise transformation with our comprehensive 2026 guide. Achieve 300% ROI, 
                  90% efficiency gains, and $50M+ savings with proven strategies and real-world case studies.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                    300% ROI
                  </span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                    $50M+ Savings
                  </span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">
                    Complete Guide
                  </span>
                </div>
                
                <div className="flex items-center text-cyan-300 font-semibold text-lg group-hover:text-cyan-200 transition-colors">
                  Read Full Article
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Success Story */}
          <div className="group">
            <Link href="/case-studies/fortune-500-ai-transformation-success" className="block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Success Story
                  </span>
                  <span className="text-sm opacity-75">Fortune 500</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-300 transition-colors">
                  Fortune 500 AI Transformation: $50M Savings Achieved
                </h3>
                
                <p className="text-sm opacity-90 mb-6 leading-relaxed">
                  Learn how a Fortune 500 company achieved $50M annual savings, 300% ROI, and 90% efficiency 
                  improvement through comprehensive AI transformation.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-300">$50M</div>
                    <div className="text-xs opacity-75">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-300">300%</div>
                    <div className="text-xs opacity-75">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-300">90%</div>
                    <div className="text-xs opacity-75">Efficiency</div>
                  </div>
                </div>
                
                <div className="flex items-center text-green-300 font-semibold group-hover:text-green-200 transition-colors">
                  View Case Study
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Link href="/blog/ai-trends-2026-predictions" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
              <div className="text-4xl mb-4">🔮</div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                AI Trends 2026
              </h4>
              <p className="text-sm opacity-75">Top 10 predictions</p>
            </div>
          </Link>
          
          <Link href="/blog/ai-multimodal-integration-2025" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                Multimodal AI
              </h4>
              <p className="text-sm opacity-75">250% efficiency gains</p>
            </div>
          </Link>
          
          <Link href="/case-studies/multimodal-ai-customer-service-transformation" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                Customer Service
              </h4>
              <p className="text-sm opacity-75">80% faster responses</p>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-finance-automation" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                Finance Automation
              </h4>
              <p className="text-sm opacity-75">95% process reduction</p>
            </div>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Content That Drives Results
            </h3>
            <p className="text-xl opacity-90">
              Our AI insights and case studies have helped 500+ companies achieve remarkable transformation results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">50+</div>
              <div className="text-sm opacity-75">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">25+</div>
              <div className="text-sm opacity-75">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">10K+</div>
              <div className="text-sm opacity-75">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">95%</div>
              <div className="text-sm opacity-75">Implementation Success</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Get personalized AI transformation guidance and join the growing number of companies 
              achieving remarkable results with our proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-indigo-900 transition-all duration-300 backdrop-blur-sm"
              >
                Get Free Consultation
              </a>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}