'use client';

import React from 'react';
import Link from 'next/link';

export default function NewContent2026PromotionalBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI breakthroughs, real-world success stories, and interactive tools 
            that are transforming businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Featured Article
              </span>
              <span className="text-sm opacity-75">15 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI 2026 Enterprise Automation Breakthrough
            </h3>
            <p className="text-sm opacity-90 mb-4">
              See how Fortune 500 companies achieved 95% process reduction and $50M+ annual savings 
              with revolutionary AI automation.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-sm">
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded">
                  95% Process Reduction
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                  $50M+ Savings
                </span>
              </div>
            </div>
            <Link
              href="/blog/ai-2026-enterprise-automation-breakthrough"
              className="inline-flex items-center text-white font-semibold hover:text-blue-200 transition-colors"
            >
              Read Article →
            </Link>
          </div>

          {/* Success Story */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Success Story
              </span>
              <span className="text-sm opacity-75">Fortune 500</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              $100M ROI Transformation Success
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Complete case study showing how a Fortune 500 manufacturing company achieved 
              $100M ROI and 90% efficiency gains in just 18 months.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-sm">
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded">
                  $100M ROI
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                  90% Efficiency
                </span>
              </div>
            </div>
            <Link
              href="/case-studies/ai-2026-mega-transformation-success-story"
              className="inline-flex items-center text-white font-semibold hover:text-blue-200 transition-colors"
            >
              View Case Study →
            </Link>
          </div>

          {/* Interactive Tool */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Interactive Tool
              </span>
              <span className="text-sm opacity-75">ROI Calculator</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI 2026 ROI Calculator
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Calculate your potential return on investment with our advanced AI solutions. 
              Get personalized projections based on your industry and company size.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-sm">
                <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded">
                  Personalized
                </span>
                <span className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded">
                  Real-time
                </span>
              </div>
            </div>
            <Link
              href="#roi-calculator"
              className="inline-flex items-center text-white font-semibold hover:text-blue-200 transition-colors"
            >
              Try Calculator →
            </Link>
          </div>
        </div>

        {/* Additional Content Highlights */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">More Exciting Content</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold mb-2">AI Trends 2026</h4>
              <p className="text-sm opacity-75">Latest predictions and insights</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold mb-2">Quantum AI</h4>
              <p className="text-sm opacity-75">Breakthrough technologies</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="font-semibold mb-2">Autonomous Systems</h4>
              <p className="text-sm opacity-75">Self-managing AI solutions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="font-semibold mb-2">Implementation Guides</h4>
              <p className="text-sm opacity-75">Step-by-step tutorials</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 10,000+ professionals staying ahead with our latest AI insights
          </p>
        </div>
      </div>
    </section>
  );
}