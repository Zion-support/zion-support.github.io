import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Award } from 'lucide-react';

const NewContent2025PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Header */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Star className="h-5 w-5 text-yellow-300 mr-2" />
              <span className="text-white font-medium">New Content Available</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Just Released
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest insights, strategies, and success stories from the AI transformation revolution. 
            Get exclusive access to content that's helping companies achieve <span className="text-yellow-300 font-semibold">2,500% ROI</span>.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-blue-100 text-sm md:text-base">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">2,500%</div>
              <div className="text-blue-100 text-sm md:text-base">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">$2B+</div>
              <div className="text-blue-100 text-sm md:text-base">Total Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">15x</div>
              <div className="text-blue-100 text-sm md:text-base">Efficiency Gains</div>
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Blog Post */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-300 mr-3" />
                <span className="text-green-300 font-semibold text-sm">Latest Blog</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-yellow-300 transition-colors">
                AI 2025 Enterprise Automation Mastery
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Complete guide to achieving 2,500% ROI through strategic AI implementation. 
                Learn from 500+ successful transformations.
              </p>
              <Link 
                href="/blog/ai-2025-enterprise-automation-mastery-complete-guide"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-medium text-sm group"
              >
                Read Full Guide
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Case Study */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-purple-300 mr-3" />
                <span className="text-purple-300 font-semibold text-sm">Success Story</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-yellow-300 transition-colors">
                $2 Billion ROI Case Study
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                How a global enterprise achieved $2 billion ROI in 18 months through 
                comprehensive AI transformation.
              </p>
              <Link 
                href="/case-studies/global-enterprise-ai-transformation-2025-ultimate-success-2-billion-roi"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-medium text-sm group"
              >
                View Case Study
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Implementation Guide */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-300 mr-3" />
                <span className="text-blue-300 font-semibold text-sm">Implementation</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-yellow-300 transition-colors">
                Ultimate Implementation Roadmap
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Step-by-step guide with timelines, checklists, and proven strategies 
                for AI implementation success.
              </p>
              <Link 
                href="/resources/ai-2025-ultimate-implementation-roadmap-complete-guide"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-medium text-sm group"
              >
                Get Roadmap
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Personalized Assessment
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 text-sm mb-4">Trusted by leading organizations worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">Fortune 500 Companies</div>
              <div className="text-white font-semibold">Global Enterprises</div>
              <div className="text-white font-semibold">Innovation Leaders</div>
              <div className="text-white font-semibold">AI Pioneers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300/10 rounded-full blur-xl animate-pulse delay-500"></div>
    </div>
  );
};

export default NewContent2025PromotionBanner;