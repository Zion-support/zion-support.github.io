'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, Award, Target } from 'lucide-react';

const UltimateContent2025ShowcaseBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🚀 ULTIMATE CONTENT 2025 SHOWCASE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Revolutionary AI Content Collection
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI transformation guides, 
            case studies, and breakthrough technologies that are reshaping enterprise operations in 2025.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Generative AI Revolution */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Generative AI Revolution</h3>
                <p className="text-sm opacity-80">Ultimate Breakthrough Guide</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Discover how generative AI is revolutionizing enterprise operations with unprecedented automation and creativity.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">NEW</span>
              <Link href="/blog/ai-2025-generative-ai-enterprise-revolution-ultimate-breakthrough" 
                    className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold flex items-center">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Edge Computing Revolution */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Edge Computing Revolution</h3>
                <p className="text-sm opacity-80">Real-Time Intelligence Guide</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Explore how edge computing enables real-time processing and unprecedented scalability across enterprise environments.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full">FEATURED</span>
              <Link href="/blog/ai-2025-edge-computing-revolution-ultimate-guide" 
                    className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold flex items-center">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Fortune 500 Success Story */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Fortune 500 Success</h3>
                <p className="text-sm opacity-80">400% ROI Transformation</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Learn how a Fortune 500 company achieved 400% ROI through comprehensive edge computing implementation.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-orange-500 text-white px-3 py-1 rounded-full">CASE STUDY</span>
              <Link href="/case-studies/ai-2025-fortune-500-edge-computing-transformation-ultimate-success" 
                    className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold flex items-center">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">150+</div>
            <div className="text-sm opacity-80">AI Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">85+</div>
            <div className="text-sm opacity-80">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500%</div>
            <div className="text-sm opacity-80">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-sm opacity-80">Expert Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center"
            >
              <Award className="w-5 h-5 mr-2" />
              View Success Stories
            </Link>
          </div>
          
          <p className="text-sm opacity-80 max-w-2xl mx-auto">
            Join thousands of enterprise leaders who have transformed their organizations 
            using our proven AI strategies and implementation guides.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UltimateContent2025ShowcaseBanner;