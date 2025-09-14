import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-500 text-black rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🔥 ULTIMATE CONTENT SHOWCASE 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content That's Transforming Industries
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI insights, success stories, and breakthrough technologies that are reshaping the business landscape in 2025.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold mr-3">
                BREAKTHROUGH
              </span>
              <span className="text-yellow-400 text-sm font-semibold">NEW RELEASE</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI 2025: The Complete Business Automation Revolution Guide
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Discover how organizations are achieving 450% efficiency gains and 67% cost reductions through intelligent automation systems.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-green-400">✓ 450% ROI</span>
                <span className="text-blue-400">✓ 15 min read</span>
              </div>
              <Link 
                href="/blog/ai-2025-business-automation-revolution-complete-guide"
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Read Now
              </Link>
            </div>
          </div>

          {/* Success Story */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold mr-3">
                SUCCESS STORY
              </span>
              <span className="text-yellow-400 text-sm font-semibold">FEATURED</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              From Startup to Unicorn in 18 Months
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              How a tech startup achieved $4.2 billion valuation through strategic AI implementation and revolutionary business practices.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-green-400">✓ $4.2B Valuation</span>
                <span className="text-blue-400">✓ 16 min read</span>
              </div>
              <Link 
                href="/case-studies/ai-2025-startup-to-unicorn-transformation"
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Read Story
              </Link>
            </div>
          </div>

          {/* Enterprise Transformation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-bold mr-3">
                CASE STUDY
              </span>
              <span className="text-yellow-400 text-sm font-semibold">EXCLUSIVE</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Fortune 100: $2.3B Revenue Transformation
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              The ultimate enterprise transformation success story - how a Fortune 100 company generated $2.3 billion in additional revenue.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-green-400">✓ $2.3B Revenue</span>
                <span className="text-blue-400">✓ 18 min read</span>
              </div>
              <Link 
                href="/case-studies/ai-2025-enterprise-transformation-ultimate-success-story"
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Read Case Study
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics Banner */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-sm text-gray-300">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">340%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">$2.1T</div>
              <div className="text-sm text-gray-300">Market Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">99.8%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-xl inline-flex items-center space-x-3 font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 cursor-pointer">
            <span>🚀</span>
            <span>Start Your Transformation Journey Today</span>
            <span>→</span>
          </div>
          <p className="text-gray-300 mt-4 text-sm">
            Join 10,000+ organizations already experiencing revolutionary AI transformation
          </p>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;