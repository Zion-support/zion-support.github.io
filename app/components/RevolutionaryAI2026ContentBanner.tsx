import React from 'react';
import Link from 'next/link';

const RevolutionaryAI2026ContentBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500 rounded-full opacity-25 animate-ping"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY AI 2026 CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Next-Generation AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              That Transforms Businesses
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI insights, implementation guides, and success stories that are revolutionizing how enterprises operate in 2026.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Next-Gen Autonomous Systems</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Discover how 2026's autonomous systems are achieving 99.9% uptime while reducing costs by 85% and increasing productivity by 400%.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-2026-next-generation-autonomous-systems-revolution"
                className="text-blue-300 hover:text-blue-200 font-semibold transition-colors"
              >
                Read Full Article →
              </Link>
              <span className="text-sm text-gray-300">14 min read</span>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-2xl font-bold mb-4">$75M Success Story</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Learn how a Fortune 500 company achieved $75 million in annual savings through strategic AI implementation in just 8 months.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/case-studies/ai-transformation-2026-ultimate-success-story"
                className="text-purple-300 hover:text-purple-200 font-semibold transition-colors"
              >
                View Case Study →
              </Link>
              <span className="text-sm text-gray-300">18 min read</span>
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-4">Ultimate Implementation Guide</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Complete roadmap to AI success with proven strategies, technology selection, and implementation frameworks.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/resources/ai-implementation-ultimate-guide-2026"
                className="text-pink-300 hover:text-pink-200 font-semibold transition-colors"
              >
                Access Guide →
              </Link>
              <span className="text-sm text-gray-300">25 min read</span>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">1,200%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">89%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">8</div>
            <div className="text-sm text-gray-300">Months Implementation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">$2.3M</div>
            <div className="text-sm text-gray-300">Average Savings</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors text-lg"
            >
              Get Implementation Help
            </Link>
          </div>
          
          <p className="text-gray-300 mt-6 text-sm">
            Join 500+ companies already transforming their business with our AI solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAI2026ContentBanner;