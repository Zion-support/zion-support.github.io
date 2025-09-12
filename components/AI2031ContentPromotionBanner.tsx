import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Brain, Globe, TrendingUp } from 'lucide-react';

export default function AI2031ContentPromotionBanner() {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full px-6 py-3 mb-6 text-sm font-bold shadow-lg">
            <Star className="w-4 h-4 mr-2" />
            🔥 AI 2031 BREAKTHROUGH CONTENT - JANUARY 2025
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of AI is 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Here</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking AI 2031 predictions, 5000% ROI case studies, and comprehensive implementation guides. 
            The most advanced AI content collection ever created.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">5000%</div>
              <div className="text-sm text-blue-200">ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">25+</div>
              <div className="text-sm text-blue-200">New Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">AGI</div>
              <div className="text-sm text-blue-200">Ready</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-1">2031</div>
              <div className="text-sm text-blue-200">Future Vision</div>
            </div>
          </div>
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* AI 2031 Predictions */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold">AI 2031 Predictions</h3>
            </div>
            <p className="text-blue-100 mb-4 text-sm">
              Comprehensive analysis of AGI emergence, quantum AI integration, and neural interface breakthroughs.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-yellow-400 font-semibold">BREAKTHROUGH</span>
              <Link 
                href="/blog/ai-2031-future-predictions"
                className="text-white hover:text-yellow-400 transition-colors flex items-center text-sm font-semibold"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
          
          {/* Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-xl font-bold">5000% ROI Case Study</h3>
            </div>
            <p className="text-blue-100 mb-4 text-sm">
              Real-world Fortune 500 transformation achieving unprecedented returns through AI 2031 implementation.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-green-400 font-semibold">SUCCESS STORY</span>
              <Link 
                href="/case-studies/ai-2031-enterprise-transformation-breakthrough"
                className="text-white hover:text-green-400 transition-colors flex items-center text-sm font-semibold"
              >
                View Case Study <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
          
          {/* Implementation Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold">Master Guide</h3>
            </div>
            <p className="text-blue-100 mb-4 text-sm">
              Complete roadmap for implementing AI 2031 technologies with step-by-step strategies and best practices.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-400 font-semibold">MASTER GUIDE</span>
              <Link 
                href="/resources/ai-2031-implementation-master-guide"
                className="text-white hover:text-blue-400 transition-colors flex items-center text-sm font-semibold"
              >
                Download Guide <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/content-showcase"
            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <Globe className="w-5 h-5" />
            Explore All AI 2031 Content
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2"
          >
            Get Expert Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-blue-200 text-sm">
            Join 10,000+ enterprises already transforming with AI 2031 technologies
          </p>
        </div>
      </div>
    </section>
  );
}