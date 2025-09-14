import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBreakthroughBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 NEW 2025 CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Ultimate AI Breakthrough Content
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI success storiesquantum computing breakthroughsand Fortune 500 transformation case studies that are revolutionizing business in 2025.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Featured Article 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">
              Enterprise AI Success Stories
            </h3>
            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              Real Fortune 500 case studies showing 400% ROI300% efficiency gainsand $500M+ in savings through AI transformation.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                NEW CONTENT
              </span>
              <Link 
                href="/blog/ai-2025-enterprise-automation-success-stories-ultimate-guide"
                className="text-blue-300 hover:text-white font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Featured Article 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">
              Quantum Computing Breakthrough
            </h3>
            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              How quantum computing is delivering 1000x performance improvements and revolutionizing business operations in 2025.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                BREAKTHROUGH
              </span>
              <Link 
                href="/blog/quantum-computing-business-applications-2025-breakthrough"
                className="text-blue-300 hover:text-white font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Featured Article 3 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">
              Fortune 500 Case Study
            </h3>
            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              Complete transformation story: 400% ROI$335M in savingsand market leadership through comprehensive AI implementation.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">
                CASE STUDY
              </span>
              <Link 
                href="/case-studies/fortune-500-ai-transformation-success-story"
                className="text-blue-300 hover:text-white font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join thousands of companies already achieving breakthrough results with AI and quantum computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-green-400 mb-2">400%</div>
            <div className="text-blue-200 text-sm">Average ROI</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">$500M+</div>
            <div className="text-blue-200 text-sm">Cost Savings</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">1000x</div>
            <div className="text-blue-200 text-sm">Performance Gain</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
            <div className="text-blue-200 text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBreakthroughBanner;