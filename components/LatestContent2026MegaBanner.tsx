import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Award, TrendingUp } from 'lucide-react';

export default function LatestContent2026MegaBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 MEGA BREAKTHROUGH 2026
            </span>
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              NEW CONTENT
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI breakthroughs, autonomous enterprise guides, and quantum computing innovations 
            that are reshaping business in 2026
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Featured Article */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-yellow-300" />
              </div>
              <div>
                <h3 className="font-bold text-lg">AI 2026 Mega Breakthrough</h3>
                <p className="text-sm opacity-80">Complete Enterprise Guide</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Revolutionary AI technologies delivering $100M+ ROI with autonomous systems and quantum computing.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs opacity-70">45 min read</div>
              <Link
                href="/blog/ai-2026-mega-breakthrough"
                className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors text-sm flex items-center gap-1"
              >
                Read Guide
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Success Story */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-green-300" />
              </div>
              <div>
                <h3 className="font-bold text-lg">$150M ROI Success</h3>
                <p className="text-sm opacity-80">18 Month Transformation</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Fortune 500 manufacturing giant achieves unprecedented transformation with comprehensive AI.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs opacity-70">35 min read</div>
              <Link
                href="/case-studies/ai-mega-transformation-success-2026"
                className="text-green-300 font-semibold hover:text-green-200 transition-colors text-sm flex items-center gap-1"
              >
                View Story
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Content Hub */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Content Hub</h3>
                <p className="text-sm opacity-80">50+ Articles & Stories</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Explore our comprehensive library of AI insights, guides, and real-world success stories.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs opacity-70">Updated Daily</div>
              <Link
                href="/content-hub"
                className="text-purple-300 font-semibold hover:text-purple-200 transition-colors text-sm flex items-center gap-1"
              >
                Explore All
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Trending */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-pink-300" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Trending Now</h3>
                <p className="text-sm opacity-80">Latest AI Insights</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Stay ahead with cutting-edge AI trends, market analysis, and future predictions.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs opacity-70">Weekly Updates</div>
              <Link
                href="/blog"
                className="text-pink-300 font-semibold hover:text-pink-200 transition-colors text-sm flex items-center gap-1"
              >
                View Trends
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/content-hub"
            className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Explore All Content
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}