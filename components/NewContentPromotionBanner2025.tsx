import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, Users, Award } from 'lucide-react';

export default function NewContentPromotionBanner2025() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">NEW CONTENT AVAILABLE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionary AI Content & Services
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover cutting-edge AI transformation strategies, success stories, and automation solutions that deliver 400% ROI
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
            <h3 className="text-lg font-bold mb-2">400% ROI Case Study</h3>
            <p className="text-blue-100 text-sm mb-4">
              Real Fortune 500 transformation story with measurable results
            </p>
            <Link 
              href="/blog/ai-2025-enterprise-transformation-success-story"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium"
            >
              Read Case Study
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Zap className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
            <h3 className="text-lg font-bold mb-2">AI Automation Services</h3>
            <p className="text-blue-100 text-sm mb-4">
              Comprehensive automation solutions with guaranteed ROI
            </p>
            <Link 
              href="/services/ai-automation-transformation"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Users className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
            <h3 className="text-lg font-bold mb-2">Multimodal AI Revolution</h3>
            <p className="text-blue-100 text-sm mb-4">
              Next frontier of AI technology and business applications
            </p>
            <Link 
              href="/blog/ai-2025-multimodal-revolution-next-frontier"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">400%</div>
            <div className="text-blue-100 text-sm">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">$2.4M</div>
            <div className="text-blue-100 text-sm">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">75%</div>
            <div className="text-blue-100 text-sm">Process Automation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">6</div>
            <div className="text-blue-100 text-sm">Months to Results</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Award className="w-5 h-5 mr-2" />
              Start Your AI Transformation
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore All Services
            </Link>
          </div>
          
          <p className="text-blue-100 text-sm mt-4">
            Join 500+ companies already transforming with AI automation
          </p>
        </div>
      </div>
    </div>
  );
}