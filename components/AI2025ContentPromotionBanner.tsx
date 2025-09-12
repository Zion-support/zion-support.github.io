import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, TrendingUp, Brain, Target, Shield } from 'lucide-react';

export default function AI2025ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-200 font-semibold text-sm uppercase tracking-wider">
              BREAKTHROUGH CONTENT
            </span>
            <Star className="w-6 h-6 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI 2025 Revolutionary Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Now Available
            </span>
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the latest breakthrough content that's transforming how organizations 
            implement and leverage AI. Get expert insights, proven strategies, and real-world 
            success stories that deliver measurable results.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Revolutionary AI Trends</h3>
                <p className="text-indigo-200 text-sm">2025 Breakthrough Guide</p>
              </div>
            </div>
            <p className="text-indigo-100 text-sm mb-4">
              Discover the revolutionary AI trends that will transform industries in 2025. 
              Expert insights on breakthrough technologies and implementation strategies.
            </p>
            <Link 
              href="/blog/ai-2025-revolutionary-trends-breakthrough"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Financial Services Revolution</h3>
                <p className="text-indigo-200 text-sm">2500% ROI Success Story</p>
              </div>
            </div>
            <p className="text-indigo-100 text-sm mb-4">
              Learn how a leading financial institution achieved unprecedented 2500% ROI 
              through revolutionary AI implementation strategies.
            </p>
            <Link 
              href="/case-studies/ai-2025-financial-services-revolution"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors"
            >
              View Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Resource Guide */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Ultimate Implementation Guide</h3>
                <p className="text-indigo-200 text-sm">Complete Toolkit</p>
              </div>
            </div>
            <p className="text-indigo-100 text-sm mb-4">
              The most comprehensive AI implementation guide for 2025. Includes templates, 
              checklists, and step-by-step strategies for successful AI transformation.
            </p>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-master-guide"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors"
            >
              Download Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why This Content Matters</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
              <p className="text-indigo-200 text-sm">Real-world success stories with measurable ROI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Expert Insights</h4>
              <p className="text-indigo-200 text-sm">Industry-leading expertise and best practices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Actionable Strategies</h4>
              <p className="text-indigo-200 text-sm">Step-by-step implementation guidance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Risk Mitigation</h4>
              <p className="text-indigo-200 text-sm">Comprehensive risk assessment and mitigation</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/content-showcase"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}