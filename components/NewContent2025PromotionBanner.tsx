import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Star, Zap } from 'lucide-react';

const NewContent2025PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            NEW CONTENT 2025
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            AI 2025 Revolution is Here
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Discover the breakthrough strategies, case studies, and implementation guides 
            that are transforming businesses worldwide with 400-800% ROI
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <span className="font-semibold">400-800% ROI</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold">30-60% Cost Reduction</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Star className="w-6 h-6 text-purple-400" />
              <span className="font-semibold">50+ Case Studies</span>
            </div>
          </div>

          {/* Content Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link 
              href="/blog/ai-2025-business-automation-revolution" 
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-left">
                <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                  Business Automation Revolution
                </h3>
                <p className="text-blue-200 text-sm mb-4">
                  Discover how AI is transforming every industry with unprecedented automation capabilities
                </p>
                <div className="flex items-center text-yellow-400 group-hover:text-yellow-300">
                  <span className="text-sm font-semibold">Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link 
              href="/case-studies/enterprise-ai-transformation-2025-500-million-roi" 
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-left">
                <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                  $500M ROI Success Story
                </h3>
                <p className="text-blue-200 text-sm mb-4">
                  Fortune 500 company achieves staggering ROI through comprehensive AI transformation
                </p>
                <div className="flex items-center text-yellow-400 group-hover:text-yellow-300">
                  <span className="text-sm font-semibold">View Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link 
              href="/resources/ai-2025-implementation-guide" 
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-left">
                <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                  Implementation Master Guide
                </h3>
                <p className="text-blue-200 text-sm mb-4">
                  Complete roadmap for AI transformation with proven methodologies and best practices
                </p>
                <div className="flex items-center text-yellow-400 group-hover:text-yellow-300">
                  <span className="text-sm font-semibold">Get Guide</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/resources/ai-2025-implementation-guide"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center">
                Start Your AI Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              href="/blog"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="flex items-center">
                Explore All Content
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 text-sm mb-4">Trusted by Fortune 500 companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-2xl font-bold">$2.3B+</div>
              <div className="text-2xl font-bold">95%</div>
              <div className="text-2xl font-bold">18M+</div>
            </div>
            <p className="text-blue-300 text-xs mt-2">
              Successful Implementations • Total ROI Generated • Customer Satisfaction • Users Transformed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025PromotionBanner;