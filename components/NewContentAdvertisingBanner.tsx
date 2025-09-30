import React from 'react';
import Link from 'next/link';

export default function NewContentAdvertisingBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400 to-red-400 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-red-400 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
            <span className="text-2xl">🔥</span>
            <span>HOT NEW CONTENT</span>
            <span className="text-2xl">🔥</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content Just Released!
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Don't miss out on the latest AI innovations and success stories that are 
            transforming businesses worldwide. Get exclusive insights and proven strategies.
          </p>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/blog/ai-2026-next-generation-innovations" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    NEW ARTICLE
                  </div>
                  <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    15 min read
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                  AI 2026: Next-Generation Innovations
                </h3>
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                  Discover quantum AI, neural interfaces, and autonomous systems transforming enterprise operations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-300">Published Jan 20, 2025</span>
                  <div className="text-yellow-400 font-semibold text-sm group-hover:text-yellow-300 transition-colors">
                    Read Now →
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Success Story */}
          <div>
            <Link href="/case-studies/ai-2026-mega-transformation-success-story" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    SUCCESS STORY
                  </div>
                  <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    Fortune 500
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                  $100M AI Transformation Success
                </h3>
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                  See how a Fortune 500 company achieved 400% ROI and $100M annual savings.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-300">Case Study</span>
                  <div className="text-green-400 font-semibold text-sm group-hover:text-green-300 transition-colors">
                    View Story →
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Quick Stats */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  RESULTS
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Proven Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-200">Average ROI</span>
                  <span className="text-lg font-bold text-blue-300">300%+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-200">Efficiency Gain</span>
                  <span className="text-lg font-bold text-green-300">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-200">Cost Savings</span>
                  <span className="text-lg font-bold text-yellow-300">$50M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-200">Payback Period</span>
                  <span className="text-lg font-bold text-purple-300">18 mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/30 mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Get Exclusive AI Insights & Strategies
            </h3>
            <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are transforming their businesses with AI. 
              Get weekly insights, case studies, and implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe Free
              </button>
            </div>
            <p className="text-sm text-gray-300 mt-4">
              Join 10,000+ professionals. No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Get AI Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}