import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const NewContent2025UltimateBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-400 text-black rounded-full px-6 py-2 mb-6 font-bold">
            <Star className="w-5 h-5 mr-2" />
            🚀 NEW CONTENT 2025 - ULTIMATE COLLECTION
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Revolutionary AI Content Just Released
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the latest breakthroughs in AI 2025, quantum computing, and enterprise transformation. 
            Our comprehensive guides and case studies reveal the secrets to 400% ROI and market leadership.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Enterprise Transformation Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Enterprise AI Transformation</h3>
            <p className="text-gray-200 mb-6">
              Complete guide to achieving 300-500% ROI with AI implementation. 
              Real strategies from Fortune 500 companies.
            </p>
            <div className="flex items-center text-sm text-green-400 mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span>400% Average ROI Achieved</span>
            </div>
            <Link 
              href="/blog/ai-2025-enterprise-transformation-complete-guide"
              className="inline-flex items-center text-white bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Guide
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Quantum Computing Breakthrough */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Quantum AI Breakthrough</h3>
            <p className="text-gray-200 mb-6">
              The quantum computing revolution that's changing everything. 
              Learn how quantum AI solves impossible problems.
            </p>
            <div className="flex items-center text-sm text-blue-400 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              <span>1000x Faster Processing</span>
            </div>
            <Link 
              href="/blog/ai-2025-quantum-computing-breakthrough"
              className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Discover Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Success Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">Success Story</h3>
            <p className="text-gray-200 mb-6">
              From $50M loss to $200M profit in 18 months. 
              Real case study of enterprise AI transformation.
            </p>
            <div className="flex items-center text-sm text-yellow-400 mb-4">
              <Users className="w-4 h-4 mr-2" />
              <span>Fortune 500 Company</span>
            </div>
            <Link 
              href="/case-studies/enterprise-ai-transformation-success-story"
              className="inline-flex items-center text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Case Study
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Implementation Checklist */}
        <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">🎯 AI Implementation Checklist 2025</h3>
              <p className="text-gray-200">
                The definitive step-by-step guide to AI success. Don't miss any critical steps.
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-yellow-400">95%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">18 Months</div>
              <div className="text-sm text-gray-300">To Full ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
              <div className="text-sm text-gray-300">Companies Helped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">$2.8B+</div>
              <div className="text-sm text-gray-300">Value Created</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources/ai-implementation-checklist-2025"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Checklist
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
            <Link 
              href="/consultation"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">Trusted by leading organizations worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">Fortune 500</div>
            <div className="text-2xl font-bold">Enterprise</div>
            <div className="text-2xl font-bold">Startups</div>
            <div className="text-2xl font-bold">Government</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBanner;