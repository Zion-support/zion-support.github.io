'use client';

import React from 'react';
import Link from 'next/link';

export default function LatestContent2026MegaBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW CONTENT AVAILABLE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Now Available
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI trends, case studies, and optimization strategies that are transforming 
            enterprises worldwide. Get exclusive insights from our expert team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Article 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">FEATURED</span>
                <p className="text-sm opacity-75">15 min read</p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
              AI 2026: Revolutionary Trends Transforming Enterprise
            </h3>
            <p className="text-white/80 mb-4">
              Discover the 10 most transformative AI trends reshaping business operations, 
              from autonomous systems to quantum computing breakthroughs.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-75">
                Published Jan 20, 2026
              </div>
              <Link
                href="/blog/ai-2026-revolutionary-trends"
                className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Featured Article 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <span className="bg-green-400 text-green-900 px-2 py-1 rounded-full text-xs font-bold">ROI GUIDE</span>
                <p className="text-sm opacity-75">12 min read</p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
              AI Cost Optimization 2026: Achieve 70% Cost Reduction
            </h3>
            <p className="text-white/80 mb-4">
              Learn proven strategies to reduce AI operational expenses by 70% while 
              improving performance. Complete guide with ROI calculations.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-75">
                Published Jan 20, 2026
              </div>
              <Link
                href="/blog/ai-cost-optimization-2026"
                className="text-green-300 font-semibold hover:text-green-200 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏭</span>
              </div>
              <div>
                <span className="bg-orange-400 text-orange-900 px-2 py-1 rounded-full text-xs font-bold">CASE STUDY</span>
                <p className="text-sm opacity-75">10 min read</p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors">
              AI Manufacturing Transformation: 90% Efficiency Gain
            </h3>
            <p className="text-white/80 mb-4">
              See how a Fortune 500 manufacturer achieved 90% efficiency gains and 
              $50M annual savings through comprehensive AI transformation.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-75">
                Published Jan 20, 2026
              </div>
              <Link
                href="/case-studies/ai-manufacturing-transformation-2026"
                className="text-orange-300 font-semibold hover:text-orange-200 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Calculator Preview */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Calculate Your AI Cost Savings
              </h3>
              <p className="text-xl opacity-90 mb-6">
                Use our interactive calculator to see how much you could save with 
                proper AI optimization strategies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Real-time cost analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>ROI calculations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Optimization recommendations</span>
                </div>
              </div>
            </div>
            <div className="bg-white/20 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-yellow-300">$72,000</div>
                <div className="text-lg opacity-90">Average Monthly Savings</div>
              </div>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-green-300">300%</div>
                <div className="text-sm opacity-90">Average ROI</div>
              </div>
              <Link
                href="#calculator"
                className="block w-full bg-white text-blue-600 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Try Calculator Now
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-lg opacity-90">New Articles</div>
              <div className="text-sm opacity-75">This Month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-300 mb-2">25+</div>
              <div className="text-lg opacity-90">Case Studies</div>
              <div className="text-sm opacity-75">Success Stories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-orange-300 mb-2">10+</div>
              <div className="text-lg opacity-90">Interactive Tools</div>
              <div className="text-sm opacity-75">Calculators & Demos</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Case Studies
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>

          <p className="text-sm opacity-75 mt-6">
            Join 10,000+ professionals who trust our AI insights and strategies
          </p>
        </div>
      </div>
    </div>
  );
}