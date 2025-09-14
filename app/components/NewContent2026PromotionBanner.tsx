import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Calculator, FileText, Users, Target, Award, BarChart3, Rocket } from 'lucide-react';

const NewContent2026PromotionBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 mb-8">
            <Rocket className="w-5 h-5 text-yellow-300 mr-3" />
            <span className="text-white text-lg font-bold">BREAKTHROUGH CONTENT 2026</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            AI 2026: The Future
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Is Here Now
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI strategies and case studies that are delivering 400% ROI in 90 days. 
            Real results from Fortune 500 companies and comprehensive implementation guides.
          </p>

          {/* Featured Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Enterprise Automation Breakthrough */}
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-green-300 mr-4" />
                <h3 className="text-white font-bold text-xl">400% ROI in 90 Days</h3>
              </div>
              <p className="text-blue-100 text-base mb-6 leading-relaxed">
                Proven enterprise automation strategies delivering unprecedented returns. Real case studies and implementation frameworks.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-yellow-300 font-bold text-lg">$50M+ Savings</span>
                <span className="text-green-300 text-sm">Fortune 500</span>
              </div>
              <Link 
                href="/blog/ai-2026-enterprise-automation-breakthrough"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-bold text-base group"
              >
                Read Full Article
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Fortune 500 Case Study */}
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 text-purple-300 mr-4" />
                <h3 className="text-white font-bold text-xl">$50M Annual Savings</h3>
              </div>
              <p className="text-blue-100 text-base mb-6 leading-relaxed">
                How a Fortune 500 manufacturing company achieved massive cost savings through comprehensive AI transformation in just 6 months.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-yellow-300 font-bold text-lg">300% ROI</span>
                <span className="text-purple-300 text-sm">6 Months</span>
              </div>
              <Link 
                href="/case-studies/fortune-500-ai-transformation-2026"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-bold text-base group"
              >
                View Case Study
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Master Implementation Guide */}
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <FileText className="w-10 h-10 text-orange-300 mr-4" />
                <h3 className="text-white font-bold text-xl">Master Implementation Guide</h3>
              </div>
              <p className="text-blue-100 text-base mb-6 leading-relaxed">
                The definitive 2026 guide to AI implementation. Step-by-step framework, proven strategies, and real-world examples.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-yellow-300 font-bold text-lg">25,000+ Words</span>
                <span className="text-orange-300 text-sm">Complete Guide</span>
              </div>
              <Link 
                href="/resources/ai-implementation-master-guide-2026"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-bold text-base group"
              >
                Download Guide
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8">Proven Results Across Industries</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-300 mb-2">400%</div>
                <div className="text-blue-200 text-sm font-medium">Average ROI</div>
                <div className="text-blue-300 text-xs">Within 90 days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">$50M+</div>
                <div className="text-blue-200 text-sm font-medium">Annual Savings</div>
                <div className="text-blue-300 text-xs">Fortune 500 companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">95%</div>
                <div className="text-blue-200 text-sm font-medium">Success Rate</div>
                <div className="text-blue-300 text-xs">Following our framework</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-300 mb-2">500+</div>
                <div className="text-blue-200 text-sm font-medium">Projects</div>
                <div className="text-blue-300 text-xs">Successfully delivered</div>
              </div>
            </div>
          </div>

          {/* Tools and Resources */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* ROI Calculator */}
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-500">
              <div className="flex items-center mb-6">
                <Calculator className="w-10 h-10 text-green-300 mr-4" />
                <h3 className="text-white font-bold text-xl">AI ROI Calculator 2026</h3>
              </div>
              <p className="text-blue-100 text-base mb-6 leading-relaxed">
                Calculate your potential AI transformation ROI with our advanced calculator. Get personalized projections based on your industry and company size.
              </p>
              <div className="flex items-center justify-between mb-6">
                <span className="text-yellow-300 font-bold text-lg">Instant Results</span>
                <span className="text-green-300 text-sm">Industry-Specific</span>
              </div>
              <Link 
                href="/tools/ai-roi-calculator-2026"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-bold text-base group"
              >
                Calculate Your ROI
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Implementation Checklist */}
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-500">
              <div className="flex items-center mb-6">
                <BarChart3 className="w-10 h-10 text-blue-300 mr-4" />
                <h3 className="text-white font-bold text-xl">Implementation Checklist</h3>
              </div>
              <p className="text-blue-100 text-base mb-6 leading-relaxed">
                Download our comprehensive implementation checklist to ensure your AI transformation follows proven best practices and achieves maximum ROI.
              </p>
              <div className="flex items-center justify-between mb-6">
                <span className="text-yellow-300 font-bold text-lg">100+ Steps</span>
                <span className="text-blue-300 text-sm">Proven Framework</span>
              </div>
              <Link 
                href="/resources/ai-implementation-checklist-2026"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-bold text-base group"
              >
                Download Checklist
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              href="/blog"
              className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
            >
              Explore All Content
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
            >
              Get Expert Consultation
            </Link>
          </div>

          {/* Final Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/30">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">6</div>
              <div className="text-blue-200 text-sm font-medium">New Content Pieces</div>
              <div className="text-blue-300 text-xs">2026 Edition</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25K+</div>
              <div className="text-blue-200 text-sm font-medium">Words of Content</div>
              <div className="text-blue-300 text-xs">Comprehensive guides</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$100M+</div>
              <div className="text-blue-200 text-sm font-medium">Proven ROI</div>
              <div className="text-blue-300 text-xs">Real case studies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200 text-sm font-medium">Expert Support</div>
              <div className="text-blue-300 text-xs">Implementation help</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2026PromotionBanner;