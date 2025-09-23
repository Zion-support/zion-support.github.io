import React from 'react';
import Link from 'next/link';

const AI2025ContentRevolutionPromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -skew-y-1"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 NEW CONTENT ALERT</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            AI 2025 Content Revolution
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 mb-8 max-w-5xl mx-auto leading-relaxed">
            Discover the revolutionary AI content strategies delivering <span className="text-yellow-300 font-bold">5000% ROI</span> to Fortune 500 companies
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2">5000%</div>
            <div className="text-lg font-semibold mb-2">ROI Increase</div>
            <div className="text-sm opacity-80">Proven results from real case studies</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-green-300 mb-2">$50M+</div>
            <div className="text-lg font-semibold mb-2">Additional Revenue</div>
            <div className="text-sm opacity-80">Generated within 6 months</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-300 mb-2">95%</div>
            <div className="text-lg font-semibold mb-2">Time Savings</div>
            <div className="text-sm opacity-80">Content creation automation</div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link
            href="/blog/ai-2025-ultimate-content-revolution"
            className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-25 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-400 text-black rounded-full px-4 py-1 text-sm font-bold">
                NEW BLOG POST
              </div>
              <div className="bg-green-500 text-white rounded-full px-4 py-1 text-sm font-bold">
                5000% ROI
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
              AI 2025 Ultimate Content Revolution
            </h3>
            <p className="text-lg opacity-90 mb-4">
              Transform your business with revolutionary AI-powered content strategies that deliver unprecedented results and customer engagement.
            </p>
            <div className="flex items-center text-yellow-300 font-semibold">
              Read the Full Guide →
            </div>
          </Link>

          <Link
            href="/case-studies/ai-2025-content-revolution-5000-roi-success"
            className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-25 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-pink-400 text-black rounded-full px-4 py-1 text-sm font-bold">
                NEW CASE STUDY
              </div>
              <div className="bg-green-500 text-white rounded-full px-4 py-1 text-sm font-bold">
                5000% ROI
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
              Fortune 500 Success Story
            </h3>
            <p className="text-lg opacity-90 mb-4">
              Real results from a Fortune 500 company that achieved 5000% ROI through our AI content revolution strategy.
            </p>
            <div className="flex items-center text-yellow-300 font-semibold">
              View Success Story →
            </div>
          </Link>
        </div>

        {/* Interactive Elements */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">
            Why This Content Revolution Matters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <h4 className="font-bold mb-2">AI-Powered</h4>
              <p className="text-sm opacity-80">Cutting-edge AI technology</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <h4 className="font-bold mb-2">Proven Results</h4>
              <p className="text-sm opacity-80">Real Fortune 500 success</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold mb-2">Fast Implementation</h4>
              <p className="text-sm opacity-80">Results in 6 months</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-bold mb-2">Scalable</h4>
              <p className="text-sm opacity-80">Works for any business size</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            'Don', 't Miss the AI Content Revolution
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the companies already experiencing unprecedented growth with AI-powered content strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/blog/ai-2025-ultimate-content-revolution"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Read the Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025ContentRevolutionPromotionBanner;