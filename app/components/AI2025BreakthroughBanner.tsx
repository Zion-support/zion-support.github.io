import React from 'react';
import Link from 'next/link';
import { Zap, Brain, Target, Rocket, TrendingUp, Award } from 'lucide-react';

const AI2025BreakthroughBanner = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 mr-2" />
            <span className="text-sm font-bold">AI 2025 BREAKTHROUGH</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            The Future of AI is Here
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced AI solutions, breakthrough technologies, and 
            revolutionary insights that will define the next decade of artificial intelligence.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">500%</div>
            <div className="text-gray-300">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-gray-300">Implementation Success Rate</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">340%</div>
            <div className="text-gray-300">Revenue Growth</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">#1</div>
            <div className="text-gray-300">Industry Leadership</div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Main Feature */}
          <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-2xl p-8 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <Rocket className="w-6 h-6 mr-2 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400">BREAKTHROUGH TECHNOLOGY</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              AI 2025 Enterprise Transformation: Complete Implementation Guide
            </h3>
            <p className="text-gray-200 mb-6">
              Master the complete AI transformation journey for enterprise success in 2025. 
              From strategy to implementation, discover proven frameworks and real-world case studies 
              that have delivered 500% revenue growth for Fortune 500 companies.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">15 min read</span>
                <span className="text-sm text-yellow-400">★ 4.9/5 rating</span>
              </div>
              <Link 
                href="/blog/ai-2025-enterprise-transformation-complete-guide"
                className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Read Now
              </Link>
            </div>
          </div>

          {/* Secondary Features */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-800 to-teal-800 rounded-xl p-6 border border-white border-opacity-20">
              <div className="flex items-center mb-3">
                <Brain className="w-5 h-5 mr-2 text-green-400" />
                <span className="text-sm font-semibold text-green-400">SUCCESS STORY</span>
              </div>
              <h4 className="text-lg font-bold mb-2">
                AI 2025 Retail Transformation: 500% Revenue Growth
              </h4>
              <p className="text-gray-200 text-sm mb-3">
                Discover how a major retail chain achieved unprecedented growth through strategic AI implementation.
              </p>
              <Link 
                href="/case-studies/ai-2025-retail-transformation-ultimate-success-story"
                className="text-green-400 hover:text-green-300 font-semibold text-sm"
              >
                Read Success Story →
              </Link>
            </div>

            <div className="bg-gradient-to-r from-purple-800 to-pink-800 rounded-xl p-6 border border-white border-opacity-20">
              <div className="flex items-center mb-3">
                <Target className="w-5 h-5 mr-2 text-purple-400" />
                <span className="text-sm font-semibold text-purple-400">IMPLEMENTATION TOOLKIT</span>
              </div>
              <h4 className="text-lg font-bold mb-2">
                AI 2025 Implementation Toolkit: Complete Guide
              </h4>
              <p className="text-gray-200 text-sm mb-3">
                Comprehensive toolkit with frameworks, templates, and best practices for AI transformation.
              </p>
              <Link 
                href="/resources/ai-2025-implementation-toolkit"
                className="text-purple-400 hover:text-purple-300 font-semibold text-sm"
              >
                Access Toolkit →
              </Link>
            </div>
          </div>
        </div>

        {/* Technology Highlights */}
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Revolutionary AI Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">Cloud-Native AI</h4>
              <p className="text-gray-300 text-sm">
                Scalable, resilient AI systems built for the cloud era
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">Real-time Processing</h4>
              <p className="text-gray-300 text-sm">
                Instant AI decisions with sub-100ms response times
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">Predictive Analytics</h4>
              <p className="text-gray-300 text-sm">
                Anticipate trends and opportunities before they happen
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-black">
            <h3 className="text-3xl font-bold mb-4">Ready to Lead the AI Revolution?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of forward-thinking organizations already transforming their business 
              with our proven AI solutions and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-black text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center"
              >
                Explore AI Services <Rocket className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-yellow-400 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025BreakthroughBanner;