'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Target, TrendingUp, Users } from 'lucide-react';

const GenerativeAI2025BreakthroughBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/ai-pattern.svg')] bg-repeat opacity-10"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-16 left-16 w-24 h-24 bg-pink-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-24 w-20 h-20 bg-indigo-500 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-24 left-1/3 w-16 h-16 bg-purple-500 rounded-full opacity-25 animate-ping"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">✨ GENERATIVE AI 2025 BREAKTHROUGH</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Generative AI Enterprise Revolution
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge generative AI. 
            Achieve <span className="text-yellow-400 font-bold">340% ROI</span> with revolutionary AI automation solutions.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
            <Zap className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-lg font-bold mb-3">340% ROI Increase</h3>
            <p className="text-gray-300 text-sm">
              Proven results with early adopters achieving massive returns.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
            <Target className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-lg font-bold mb-3">67% Cost Reduction</h3>
            <p className="text-gray-300 text-sm">
              Dramatic reduction in operational costs through AI automation.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
            <Users className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-lg font-bold mb-3">89% Customer Satisfaction</h3>
            <p className="text-gray-300 text-sm">
              Significant improvement in customer experience and satisfaction.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
            <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-lg font-bold mb-3">$2.3T Market Value</h3>
            <p className="text-gray-300 text-sm">
              Projected market value for generative AI by 2025.
            </p>
          </div>
        </div>

        {/* Featured Content Links */}
        <div className="bg-white bg-opacity-5 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-10 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Featured Generative AI Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/blog/ai-2025-generative-ai-enterprise-revolution-ultimate-breakthrough"
              className="group bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    Generative AI Enterprise Guide
                  </h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Complete guide to generative AI implementation, ROI strategies, and transformative business outcomes.
                  </p>
                  <div className="flex items-center text-yellow-400 text-sm font-medium">
                    Read Complete Guide <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/services/generative-ai"
              className="group bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    Generative AI Services
                  </h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Explore our comprehensive generative AI services and implementation solutions.
                  </p>
                  <div className="flex items-center text-purple-400 text-sm font-medium">
                    View Services <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="bg-white bg-opacity-5 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-10 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Industry Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Financial Services</h4>
              <p className="text-gray-300 text-sm">95% accuracy in fraud detection, 340% increase in portfolio returns</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Healthcare</h4>
              <p className="text-gray-300 text-sm">94% accuracy in early disease detection, 45% improvement in outcomes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Manufacturing</h4>
              <p className="text-gray-300 text-sm">85% reduction in downtime, 99.7% defect detection accuracy</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/services/generative-ai"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your AI Transformation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Free AI Consultation
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm text-gray-300">
            <div className="flex items-center">
              <span className="text-yellow-400 font-bold">500+</span>
              <span className="ml-1">AI Projects Delivered</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 font-bold">$2.3B+</span>
              <span className="ml-1">Client Value Created</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 font-bold">98%</span>
              <span className="ml-1">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerativeAI2025BreakthroughBanner;