import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, BookOpen, TrendingUp, Award } from 'lucide-react';

export default function UltraContentPromotionBanner2025() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            🚀 150+ New AI Resources Just Released
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Future of AI is Here
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Transform Your Business Today
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI insights, proven case studies, and implementation guides 
            that are already helping Fortune 500 companies achieve breakthrough results.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$50M+</div>
              <div className="text-white/80">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Successful Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.8%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>

          {/* Featured Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-yellow-300 mr-3" />
                <span className="text-white font-semibold">Multimodal AI Revolution</span>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Explore how AI is combining text, vision, and audio for unprecedented capabilities.
              </p>
              <Link 
                href="/blog/ai-2025-multimodal-revolution"
                className="text-yellow-300 hover:text-yellow-200 font-medium text-sm inline-flex items-center"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-green-300 mr-3" />
                <span className="text-white font-semibold">Financial Services Breakthrough</span>
              </div>
              <p className="text-white/80 text-sm mb-4">
                How a Fortune 500 company achieved $50M revenue increase in 6 months.
              </p>
              <Link 
                href="/case-studies/ai-2025-financial-services-breakthrough"
                className="text-green-300 hover:text-green-200 font-medium text-sm inline-flex items-center"
              >
                View Case Study <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-purple-300 mr-3" />
                <span className="text-white font-semibold">Ultimate Implementation Guide</span>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Complete step-by-step guide to successfully implementing AI in your organization.
              </p>
              <Link 
                href="/resources/ai-2025-implementation-master-guide-ultimate"
                className="text-purple-300 hover:text-purple-200 font-medium text-sm inline-flex items-center"
              >
                Get Guide <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services/ai-consulting"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/mega-content-showcase"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Explore All Content
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white/50 font-semibold">Fortune 500</div>
              <div className="text-white/50 font-semibold">•</div>
              <div className="text-white/50 font-semibold">Startups</div>
              <div className="text-white/50 font-semibold">•</div>
              <div className="text-white/50 font-semibold">Government</div>
              <div className="text-white/50 font-semibold">•</div>
              <div className="text-white/50 font-semibold">Healthcare</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}