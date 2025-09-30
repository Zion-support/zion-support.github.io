import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Award, Clock, Users } from 'lucide-react';

export default function UltimateContent2026Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              🚀 ULTIMATE 2026 CONTENT
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Most Comprehensive AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              Transformation Library
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Access 200+ AI guides, 50+ success stories, and cutting-edge research 
            that's helping Fortune 500 companies achieve $2.3B+ in combined ROI
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-black" />
            </div>
            <div className="text-3xl font-bold mb-2">200+</div>
            <div className="text-gray-300">AI Guides & Resources</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-black" />
            </div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-gray-300">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-black" />
            </div>
            <div className="text-3xl font-bold mb-2">$2.3B+</div>
            <div className="text-gray-300">Combined ROI</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-black" />
            </div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-gray-300">Expert Support</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📊</span>
              <h3 className="text-xl font-bold">AI Mega Trends 2026</h3>
            </div>
            <p className="text-gray-200 mb-4">
              Complete guide to 15 revolutionary AI trends reshaping enterprise operations with 340% average ROI.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">45 min read</span>
              <Link href="/blog/ai-mega-trends-2026-comprehensive" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                Read Guide →
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏆</span>
              <h3 className="text-xl font-bold">$75M Success Story</h3>
            </div>
            <p className="text-gray-200 mb-4">
              How a Fortune 500 company achieved $75M ROI in 12 months through comprehensive AI transformation.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">35 min read</span>
              <Link href="/case-studies/ai-mega-transformation-success-2026" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                View Story →
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏢</span>
              <h3 className="text-xl font-bold">Autonomous Enterprise</h3>
            </div>
            <p className="text-gray-200 mb-4">
              Master autonomous AI enterprise operations with zero-touch business management and $25M+ ROI.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">30 min read</span>
              <Link href="/blog/ai-autonomous-enterprise-2026" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-900 transition-colors flex items-center justify-center gap-2"
            >
              View Success Stories
              <Award className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>10,000+ Readers</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span>Updated Weekly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-400/20 rounded-full blur-xl"></div>
    </div>
  );
}