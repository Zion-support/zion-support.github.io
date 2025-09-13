import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, CheckCircle, BookOpen, Zap } from 'lucide-react';

export default function NewContentNavigation() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Fresh Content Alert
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Don't Miss Our Latest AI Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay ahead with our newest content covering the latest AI trends, success stories, and implementation guides.
          </p>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link 
            href="/blog/ai-2025-enterprise-automation-revolution"
            className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg hover:border-blue-300 transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-blue-800">Latest Blog</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              AI 2025: Enterprise Automation Revolution
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Transform your enterprise with cutting-edge AI automation technologies and achieve unprecedented efficiency.
            </p>
            <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
              Read Article
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link 
            href="/case-studies/global-enterprise-ai-transformation-2025"
            className="group p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg hover:border-green-300 transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-green-800">Success Story</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
              Global Enterprise AI Transformation
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              How a Fortune 500 company achieved $50M savings and 300% productivity increase.
            </p>
            <div className="flex items-center text-green-600 text-sm font-medium group-hover:text-green-700">
              View Case Study
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link 
            href="/resources/ai-implementation-complete-guide-2025"
            className="group p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg hover:border-purple-300 transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-purple-800">Complete Guide</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
              AI Implementation Complete Guide 2025
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              200+ page guide with templates, tools, and expert consultation access.
            </p>
            <div className="flex items-center text-purple-600 text-sm font-medium group-hover:text-purple-700">
              Download Guide
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link 
            href="/contact"
            className="group p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:shadow-lg hover:border-orange-300 transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-orange-800">Get Started</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
              Start Your AI Transformation
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Ready to transform your business? Get expert consultation and personalized implementation guidance.
            </p>
            <div className="flex items-center text-orange-600 text-sm font-medium group-hover:text-orange-700">
              Schedule Call
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Latest AI Insights
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get weekly updates on AI trends, case studies, and implementation strategies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}