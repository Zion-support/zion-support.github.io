import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, TrendingUp, Heart } from 'lucide-react';

export default function LatestContentPromotionalBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 LATEST BREAKTHROUGH CONTENT
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Business Transformation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Business Transformation</h3>
                <p className="text-sm opacity-80">400% ROI Guide</p>
              </div>
            </div>
            <p className="text-white/90 mb-4 text-sm">
              Master AI business transformation with comprehensive strategies for 400% ROI, 
              autonomous operations, and complete enterprise automation.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs opacity-70">25 min read</div>
              <Link
                href="/blog/ai-business-transformation-2026"
                className="text-white font-semibold hover:text-yellow-200 transition-colors flex items-center gap-1"
              >
                Read Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Customer Experience */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Customer Experience</h3>
                <p className="text-sm opacity-80">300% Satisfaction Boost</p>
              </div>
            </div>
            <p className="text-white/90 mb-4 text-sm">
              Revolutionize customer experience with AI-powered solutions achieving 300% satisfaction 
              improvement and 95% support automation.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs opacity-70">22 min read</div>
              <Link
                href="/blog/ai-customer-experience-revolution-2026"
                className="text-white font-semibold hover:text-yellow-200 transition-colors flex items-center gap-1"
              >
                Read Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Success Story */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">$50M Success Story</h3>
                <p className="text-sm opacity-80">Fortune 500 Case Study</p>
              </div>
            </div>
            <p className="text-white/90 mb-4 text-sm">
              See how a Fortune 500 company achieved $50M ROI through comprehensive AI business 
              transformation with 95% automation.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs opacity-70">20 min read</div>
              <Link
                href="/case-studies/ai-business-transformation-success-2026"
                className="text-white font-semibold hover:text-yellow-200 transition-colors flex items-center gap-1"
              >
                Read Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-indigo-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            Explore All Revolutionary Content
          </Link>
        </div>
      </div>
    </div>
  );
}