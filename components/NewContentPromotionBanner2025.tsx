import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, TrendingUp, Users, Star } from 'lucide-react';

export default function NewContentPromotionBanner2025() {
  return (
    <section className="py-8 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">🔥 NEW CONTENT JUST RELEASED</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Revolutionary AI Content: Transform Your Business in 2025
          </h2>
          
          <p className="text-xl opacity-90 mb-6 max-w-4xl mx-auto">
            Discover our latest breakthrough content: Generative AI Enterprise Transformation, 
            Global Retail Success Stories, and Complete Implementation Master Guides. 
            Get expert insights on achieving 300% revenue growth and 85% cost reduction with AI.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 mr-2" />
                <span className="text-2xl font-bold">300%</span>
              </div>
              <p className="text-sm opacity-90">Revenue Growth Achieved</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 mr-2" />
                <span className="text-2xl font-bold">2,000+</span>
              </div>
              <p className="text-sm opacity-90">Stores Transformed</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="w-6 h-6 mr-2" />
                <span className="text-2xl font-bold">45+</span>
              </div>
              <p className="text-sm opacity-90">Countries Served</p>
            </div>
          </div>

          {/* Featured Content Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link
              href="/blog/ai-2025-generative-ai-enterprise-transformation"
              className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                Generative AI Enterprise Guide
              </h3>
              <p className="text-sm opacity-90 mb-3">
                Complete guide to transforming your enterprise with generative AI
              </p>
              <div className="flex items-center text-cyan-300 group-hover:text-white transition-colors">
                <span className="text-sm font-medium">Read Now</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link
              href="/case-studies/ai-2025-global-retail-transformation-breakthrough"
              className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                Global Retail Success Story
              </h3>
              <p className="text-sm opacity-90 mb-3">
                How a retail giant achieved 300% revenue growth with AI
              </p>
              <div className="flex items-center text-purple-300 group-hover:text-white transition-colors">
                <span className="text-sm font-medium">View Case Study</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link
              href="/resources/ai-2025-complete-implementation-master-guide"
              className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-300 transition-colors">
                Implementation Master Guide
              </h3>
              <p className="text-sm opacity-90 mb-3">
                Step-by-step roadmap to AI implementation success
              </p>
              <div className="flex items-center text-pink-300 group-hover:text-white transition-colors">
                <span className="text-sm font-medium">Download Guide</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <span>Get Expert Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}