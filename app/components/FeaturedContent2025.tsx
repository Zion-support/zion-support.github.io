import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, BookOpen, CheckCircle, Star } from 'lucide-react';

export default function FeaturedContent2025() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Fresh Content 2025
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI trends, proven implementation strategies, and real-world transformation stories from leading enterprises.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <TrendingUp className="w-16 h-16 text-white" />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Blog Post</span>
                <span className="ml-3 text-sm text-gray-500">January 2025</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI 2025: Enterprise Automation Revolution
              </h3>
              <p className="text-gray-600 mb-6">
                Transform your enterprise with cutting-edge AI automation technologies. Learn about revolutionary breakthroughs, implementation strategies, and how leading companies are achieving unprecedented efficiency and cost savings.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Enterprise Leaders</span>
                </div>
                <Link 
                  href="/blog/ai-2025-enterprise-automation-revolution"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Case Study</span>
                <span className="ml-3 text-sm text-gray-500">January 2025</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Global Enterprise AI Transformation
              </h3>
              <p className="text-gray-600 mb-6">
                How a Fortune 500 company achieved $50M cost savings and 300% productivity increase through comprehensive AI automation.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span>300% ROI</span>
                </div>
                <Link 
                  href="/case-studies/global-enterprise-ai-transformation-2025"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Guide */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 mr-3" />
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Complete Guide</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                AI Implementation Complete Guide 2025
              </h3>
              <p className="text-purple-100 mb-6">
                Master enterprise AI implementation with our comprehensive 200+ page guide. Includes templates, tools, video tutorials, and expert consultation access.
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-purple-100">Week Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-purple-100">Templates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm text-purple-100">Success Rate</div>
                </div>
              </div>
              <Link 
                href="/resources/ai-implementation-complete-guide-2025"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Download Complete Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">What's Included:</h4>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Complete implementation roadmap
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    50+ templates and tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    20+ video tutorials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Expert consultation access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    15 detailed case studies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/blog"
            className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <div className="flex items-center mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 mr-3" />
              <span className="font-semibold text-gray-900">Latest Blog Posts</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Stay updated with the latest AI trends, insights, and expert analysis.
            </p>
            <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700">
              Explore All Posts →
            </span>
          </Link>

          <Link 
            href="/case-studies"
            className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all"
          >
            <div className="flex items-center mb-3">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
              <span className="font-semibold text-gray-900">Success Stories</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Learn from real-world AI transformation success stories and best practices.
            </p>
            <span className="text-green-600 text-sm font-medium group-hover:text-green-700">
              View Case Studies →
            </span>
          </Link>

          <Link 
            href="/resources"
            className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
          >
            <div className="flex items-center mb-3">
              <BookOpen className="w-5 h-5 text-purple-600 mr-3" />
              <span className="font-semibold text-gray-900">Implementation Resources</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Access comprehensive guides, templates, and tools for AI implementation.
            </p>
            <span className="text-purple-600 text-sm font-medium group-hover:text-purple-700">
              Browse Resources →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}