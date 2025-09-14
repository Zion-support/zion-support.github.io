import React from 'react';
import Link from 'next/link';

const RevolutionaryAIContent2025Banner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 bg-purple-400 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-500 text-black rounded-full px-8 py-3 mb-8 font-bold text-lg animate-pulse">
            🔥 REVOLUTIONARY AI CONTENT 2025 🔥
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The Most <span className="text-yellow-400">Explosive</span> AI Content Ever Created
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover breakthrough insights, success stories, and revolutionary strategies that are transforming businesses worldwide in 2025
          </p>
        </div>

        {/* Content Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Breakthrough Guide */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Business Automation Revolution</h3>
              <p className="text-gray-200 mb-6">
                450% efficiency gains, 67% cost reductions - the complete guide to AI transformation
              </p>
              <div className="space-y-2 mb-6">
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  ✓ 15 Minutes to Transform Your Business
                </div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  ✓ 500+ Success Stories Included
                </div>
                <div className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  ✓ Step-by-Step Implementation
                </div>
              </div>
              <Link 
                href="/blog/ai-2025-business-automation-revolution-complete-guide"
                className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 block text-center"
              >
                READ THE GUIDE →
              </Link>
            </div>
          </div>

          {/* Success Story */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="text-6xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4">Startup to Unicorn Story</h3>
              <p className="text-gray-200 mb-6">
                How a startup achieved $4.2 billion valuation in just 18 months through AI strategy
              </p>
              <div className="space-y-2 mb-6">
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  ✓ $4.2B Valuation in 18 Months
                </div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  ✓ 59,900% Revenue Growth
                </div>
                <div className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  ✓ Complete Blueprint Included
                </div>
              </div>
              <Link 
                href="/case-studies/ai-2025-startup-to-unicorn-transformation"
                className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 block text-center"
              >
                READ THE STORY →
              </Link>
            </div>
          </div>

          {/* Enterprise Case Study */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4">Fortune 100 Transformation</h3>
              <p className="text-gray-200 mb-6">
                $2.3 billion additional revenue through comprehensive AI enterprise transformation
              </p>
              <div className="space-y-2 mb-6">
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  ✓ $2.3B Additional Revenue
                </div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  ✓ 78% Cost Reduction
                </div>
                <div className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  ✓ 2,400% ROI Achieved
                </div>
              </div>
              <Link 
                href="/case-studies/ai-2025-enterprise-transformation-ultimate-success-story"
                className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 block text-center"
              >
                READ CASE STUDY →
              </Link>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Revolutionary Impact Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-3">$50B+</div>
              <div className="text-lg text-gray-200">Assets Protected</div>
              <div className="text-sm text-gray-300 mt-2">Cybersecurity Revolution</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-400 mb-3">450%</div>
              <div className="text-lg text-gray-200">Efficiency Gains</div>
              <div className="text-sm text-gray-300 mt-2">Business Automation</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-3">340%</div>
              <div className="text-lg text-gray-200">Average ROI</div>
              <div className="text-sm text-gray-300 mt-2">AI Implementations</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-3">99.8%</div>
              <div className="text-lg text-gray-200">Success Rate</div>
              <div className="text-sm text-gray-300 mt-2">Our Solutions</div>
            </div>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-yellow-500 to-red-500 text-black rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">⚡ LIMITED TIME: Get Instant Access to All Content ⚡</h2>
          <p className="text-xl mb-6">
            Join 50,000+ executives who have already transformed their businesses with our revolutionary AI insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-black text-yellow-500 px-12 py-4 rounded-xl font-bold text-xl hover:bg-gray-800 transition-all duration-300"
            >
              GET INSTANT ACCESS
            </Link>
            <div className="text-sm">
              <div className="font-semibold">✓ No Credit Card Required</div>
              <div className="font-semibold">✓ Instant Download</div>
              <div className="font-semibold">✓ Lifetime Access</div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">Trusted by industry leaders worldwide:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">Fortune 500</div>
            <div className="text-2xl font-bold">Global 2000</div>
            <div className="text-2xl font-bold">Unicorn Startups</div>
            <div className="text-2xl font-bold">Government Agencies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAIContent2025Banner;