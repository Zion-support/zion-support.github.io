import React from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Showcase = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-indigo-500/20 rounded-full animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold">🌟 REVOLUTIONARY 2025 CONTENT</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Revolutionary Content Showcase
          </h2>
          
          <p className="text-2xl md:text-3xl text-blue-100 mb-12 max-w-5xl mx-auto leading-relaxed">
            Experience the future of business with our groundbreaking content covering AI breakthroughs, quantum computing, and Fortune 500 success stories.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Featured Content */}
          <div className="space-y-8">
            {/* Hero Article */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">🚀</div>
                <div>
                  <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-bold">
                    FEATURED
                  </span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-blue-200 transition-colors">
                AI 2025 Enterprise Automation Success Stories
              </h3>
              
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Discover how Fortune 500 companies achieved 300%+ ROI with AI automation. Real case studies, implementation strategies, and proven results that will transform your business.
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-4">
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                    Success Stories
                  </span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    ROI Guide
                  </span>
                </div>
                <div className="text-yellow-400 text-sm font-bold">
                  ⭐ 4.9/5 Rating
                </div>
              </div>
              
              <Link 
                href="/blog/ai-2025-enterprise-automation-success-stories-ultimate-guide"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Full Guide
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Secondary Article */}
            <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">⚛️</div>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-bold">
                  QUANTUM BREAKTHROUGH
                </span>
              </div>
              
              <h4 className="text-xl font-bold mb-4 text-white group-hover:text-purple-200 transition-colors">
                Quantum Computing Business Applications 2025
              </h4>
              
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                How quantum computing is delivering 1000x performance improvements and revolutionizing business operations across industries.
              </p>
              
              <Link 
                href="/blog/quantum-computing-business-applications-2025-breakthrough"
                className="text-purple-300 hover:text-white font-semibold text-sm transition-colors"
              >
                Explore Quantum Future →
              </Link>
            </div>
          </div>

          {/* Right Column - Case Study */}
          <div className="space-y-8">
            {/* Case Study Card */}
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-gradient-to-r hover:from-green-600/30 hover:to-blue-600/30 transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">🏆</div>
                <div>
                  <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-bold">
                    CASE STUDY
                  </span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-green-200 transition-colors">
                Fortune 500 AI Transformation Success
              </h3>
              
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Complete transformation story: 400% ROI, $335M in savings, and market leadership through comprehensive AI implementation. Real results from a real company.
              </p>
              
              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">400%</div>
                  <div className="text-blue-200 text-sm">ROI</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">$335M</div>
                  <div className="text-blue-200 text-sm">Savings</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">85%</div>
                  <div className="text-blue-200 text-sm">Automation</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">95%</div>
                  <div className="text-blue-200 text-sm">Satisfaction</div>
                </div>
              </div>
              
              <Link 
                href="/case-studies/fortune-500-ai-transformation-success-story"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Case Study
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h4 className="text-xl font-bold mb-6 text-white text-center">
                Content Impact Metrics
              </h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Total Views</span>
                  <span className="text-white font-bold">2.5M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Engagement Rate</span>
                  <span className="text-white font-bold">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Lead Generation</span>
                  <span className="text-white font-bold">15K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Conversion Rate</span>
                  <span className="text-white font-bold">23%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center">
          <h3 className="text-4xl font-bold mb-6 text-white">
            Ready to Access Revolutionary Content?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of business leaders who are already transforming their organizations with our cutting-edge content and insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Access
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Browse All Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Showcase;