import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, DollarSign } from 'lucide-react';

export default function LatestContent2026MegaBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 BREAKTHROUGH 2026
            </span>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
              NEW CONTENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI innovations, cost optimization strategies, and real-world success stories 
            that are transforming enterprises in 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Featured Blog Post */}
          <Link href="/blog/ai-2026-mega-breakthroughs" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </span>
                <span className="text-sm opacity-80">15 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                AI 2026 Mega Breakthroughs
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Revolutionary technologies reshaping enterprise: quantum AI, autonomous operations, 
                and multimodal intelligence.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          {/* Cost Optimization Guide */}
          <Link href="/blog/ai-cost-optimization-2026-advanced" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  COST SAVINGS
                </span>
                <span className="text-sm opacity-80">12 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                AI Cost Optimization 2026
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Advanced strategies for 90% cost reduction while improving performance by 300%.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                Learn Strategies <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          {/* Success Story */}
          <Link href="/case-studies/ai-cost-optimization-success-2026" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  SUCCESS STORY
                </span>
                <span className="text-sm opacity-80">8 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                $50M Annual Savings Case Study
              </h3>
              <p className="text-sm opacity-90 mb-4">
                How a Fortune 500 company reduced AI costs by 87% while improving performance by 250%.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                View Case Study <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-1">90%</div>
            <div className="text-sm opacity-80">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-1">300%</div>
            <div className="text-sm opacity-80">Performance Gain</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-1">$50M+</div>
            <div className="text-sm opacity-80">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-1">4 months</div>
            <div className="text-sm opacity-80">ROI Timeline</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <Star className="w-5 h-5" />
              View Success Stories
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}