import React from 'react';
import Link from 'next/link';

const AI2025BreakthroughBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-400/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-pink-400/10 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-8 py-3 mb-8 font-bold text-lg animate-pulse">
            🚀 AI 2025 BREAKTHROUGH ANNOUNCEMENT 🚀
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content That's <span className="text-yellow-400">Transforming</span> Industries
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI insights, breakthrough technologies, and success stories that are reshaping the business landscape in 2025.
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Blog Post */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-6">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                BREAKTHROUGH
              </span>
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                NEW RELEASE
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 leading-tight">
              The Complete Business Automation Revolution Guide
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Learn how organizations are achieving 450% efficiency gains and 67% cost reductions through intelligent automation systems that are revolutionizing business operations.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-green-400">
                <span className="mr-2">✓</span>
                <span className="text-sm">450% Average ROI</span>
              </div>
              <div className="flex items-center text-blue-400">
                <span className="mr-2">✓</span>
                <span className="text-sm">15 Minutes to Transform</span>
              </div>
              <div className="flex items-center text-purple-400">
                <span className="mr-2">✓</span>
                <span className="text-sm">500+ Success Stories</span>
              </div>
            </div>
            <Link 
              href="/blog/ai-2025-business-automation-revolution-complete-guide"
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-3 px-6 rounded-xl font-bold text-center hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 block"
            >
              READ THE GUIDE →
            </Link>
          </div>

          {/* Success Story */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-6">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                SUCCESS STORY
              </span>
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                FEATURED
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 leading-tight">
              From Startup to Unicorn in 18 Months
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Discover how a tech startup achieved $4.2 billion valuation through strategic AI implementation and revolutionary business practices that transformed an entire industry.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-green-400">
                <span className="mr-2">✓</span>
                <span className="text-sm">$4.2B Valuation</span>
              </div>
              <div className="flex items-center text-blue-400">
                <span className="mr-2">✓</span>
                <span className="text-sm">59,900% Revenue Growth</span>
              </div>
              <div className="flex items-center text-purple-400">
                <span className="mr-2">✓</span>
                <span className="text-sm">Complete Blueprint</span>
              </div>
            </div>
            <Link 
              href="/case-studies/ai-2025-startup-to-unicorn-transformation"
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-3 px-6 rounded-xl font-bold text-center hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 block"
            >
              READ THE STORY →
            </Link>
          </div>

          {/* Enterprise Case Study */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-6">
              <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                CASE STUDY
              </span>
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                EXCLUSIVE
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 leading-tight">
              Fortune 100: $2.3B Revenue Transformation
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              The ultimate enterprise transformation success story - how a Fortune 100 company generated $2.3 billion in additional revenue while reducing costs by 78%.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-green-400">
                <span className="mr-2">✓</span>
                <span className="text-sm">$2.3B Additional Revenue</span>
              </div>
              <div className="flex items-center text-blue-400">
                <span className="mr-2">✓</span>
                <span className="text-sm">78% Cost Reduction</span>
              </div>
              <div className="flex items-center text-purple-400">
                <span className="mr-2">✓</span>
                <span className="text-sm">2,400% ROI</span>
              </div>
            </div>
            <Link 
              href="/case-studies/ai-2025-enterprise-transformation-ultimate-success-story"
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-3 px-6 rounded-xl font-bold text-center hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 block"
            >
              READ CASE STUDY →
            </Link>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Revolutionary Impact Across Industries</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">$2.1T</div>
              <div className="text-gray-200 font-semibold">Market Value</div>
              <div className="text-gray-400 text-sm">Automation Revolution</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-200 font-semibold">Success Stories</div>
              <div className="text-gray-400 text-sm">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">340%</div>
              <div className="text-gray-200 font-semibold">Average ROI</div>
              <div className="text-gray-400 text-sm">AI Implementations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.8%</div>
              <div className="text-gray-200 font-semibold">Success Rate</div>
              <div className="text-gray-400 text-sm">Our Solutions</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-red-500 text-black rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">🔥 Get Instant Access to Revolutionary AI Content 🔥</h2>
            <p className="text-xl mb-6">
              Join 50,000+ executives who have already transformed their businesses with our breakthrough AI insights and strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="bg-black text-yellow-500 px-12 py-4 rounded-xl font-bold text-xl hover:bg-gray-800 transition-all duration-300"
              >
                GET INSTANT ACCESS NOW
              </Link>
              <div className="text-sm text-center">
                <div className="font-semibold">✓ No Credit Card Required</div>
                <div className="font-semibold">✓ Instant Download</div>
                <div className="font-semibold">✓ Lifetime Access</div>
              </div>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="text-gray-300">
            <p className="mb-4">Trusted by industry leaders worldwide:</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
              <span className="text-lg font-semibold">Fortune 500</span>
              <span className="text-lg font-semibold">Global 2000</span>
              <span className="text-lg font-semibold">Unicorn Startups</span>
              <span className="text-lg font-semibold">Government Agencies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025BreakthroughBanner;