'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Target, Zap, Star } from 'lucide-react';

export default function NewContent2025UltimateBanner() {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Now Available
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI insights, breakthrough case studies, and interactive tools 
            that will transform your business in 2025 and beyond.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Neural Architecture Search */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Neural Architecture Search</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Master the revolutionary technology delivering 300% faster model development and 40% better performance.
            </p>
            <div className="flex items-center text-sm text-yellow-400 mb-4">
              <Star className="w-4 h-4 mr-1" />
              <span className="font-semibold">400% Performance Improvement</span>
            </div>
            <Link 
              href="/blog/ai-2025-neural-architecture-search-revolution-enterprise-breakthrough"
              className="inline-flex items-center text-white font-semibold hover:text-yellow-400 transition-colors"
            >
              Read More <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Federated Learning */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Federated Learning</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Achieve 99% data privacy compliance while enabling 200% faster model training across organizations.
            </p>
            <div className="flex items-center text-sm text-yellow-400 mb-4">
              <Star className="w-4 h-4 mr-1" />
              <span className="font-semibold">100% Privacy Compliance</span>
            </div>
            <Link 
              href="/blog/ai-2025-federated-learning-enterprise-privacy-breakthrough"
              className="inline-flex items-center text-white font-semibold hover:text-yellow-400 transition-colors"
            >
              Read More <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Multimodal AI */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Multimodal AI</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Integrate text, image, audio, and video processing for 400% better business outcomes.
            </p>
            <div className="flex items-center text-sm text-yellow-400 mb-4">
              <Star className="w-4 h-4 mr-1" />
              <span className="font-semibold">400% Better Outcomes</span>
            </div>
            <Link 
              href="/blog/ai-2025-multimodal-ai-enterprise-transformation-complete-guide"
              className="inline-flex items-center text-white font-semibold hover:text-yellow-400 transition-colors"
            >
              Read More <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Real-World Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-5 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-2">Retail Transformation</h4>
              <p className="text-gray-300 mb-3">
                Global retail chain achieved 400% revenue growth using multimodal AI
              </p>
              <div className="flex items-center text-sm text-yellow-400 mb-3">
                <Star className="w-4 h-4 mr-1" />
                <span className="font-semibold">$2.5B Additional Revenue</span>
              </div>
              <Link 
                href="/case-studies/ai-2025-multimodal-retail-transformation-ultimate-success"
                className="inline-flex items-center text-white font-semibold hover:text-yellow-400 transition-colors"
              >
                View Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-white bg-opacity-5 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-2">Healthcare Breakthrough</h4>
              <p className="text-gray-300 mb-3">
                Healthcare network achieved 90% diagnostic accuracy with 100% privacy compliance
              </p>
              <div className="flex items-center text-sm text-yellow-400 mb-3">
                <Star className="w-4 h-4 mr-1" />
                <span className="font-semibold">$500M Cost Savings</span>
              </div>
              <Link 
                href="/case-studies/ai-2025-federated-learning-healthcare-breakthrough-success"
                className="inline-flex items-center text-white font-semibold hover:text-yellow-400 transition-colors"
              >
                View Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Tools Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Interactive AI Tools</h3>
          <div className="text-center">
            <div className="bg-white bg-opacity-5 rounded-xl p-8 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">AI 2025 Readiness Assessment</h4>
              <p className="text-gray-300 mb-6">
                Comprehensive evaluation of your organization's AI transformation readiness. 
                Get personalized recommendations and a detailed action plan.
              </p>
              <div className="flex items-center justify-center text-sm text-yellow-400 mb-6">
                <Star className="w-4 h-4 mr-1" />
                <span className="font-semibold">Free Assessment • 15 Minutes • Instant Results</span>
              </div>
              <Link 
                href="/tools/ai-2025-readiness-assessment-ultimate"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Start Assessment <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our AI solutions to achieve 
            unprecedented growth and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}