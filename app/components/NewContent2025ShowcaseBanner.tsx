import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Award } from 'lucide-react';

const NewContent2025ShowcaseBanner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover cutting-edge AI insights, implementation guides, and success stories 
            that will transform your business in 2025 and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 mr-2 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400">FEATURED BLOG</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI 2025 Enterprise Transformation: Complete Implementation Guide
            </h3>
            <p className="text-gray-200 mb-4">
              Master the complete AI transformation journey for enterprise success in 2025. 
              From strategy to implementation, discover proven frameworks and real-world case studies.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">15 min read</span>
              <Link 
                href="/blog/ai-2025-enterprise-transformation-complete-guide"
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 mr-2 text-green-400" />
              <span className="text-sm font-semibold text-green-400">SUCCESS STORY</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI 2025 Retail Transformation: 500% Revenue Growth
            </h3>
            <p className="text-gray-200 mb-4">
              Discover how a major retail chain achieved 500% revenue growth through 
              strategic AI transformation. Learn the strategies and technologies that drove this success.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">12 min read</span>
              <Link 
                href="/case-studies/ai-2025-retail-transformation-ultimate-success-story"
                className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Featured Resource */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 mr-2 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">RESOURCE TOOLKIT</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI 2025 Implementation Toolkit: Complete Guide
            </h3>
            <p className="text-gray-200 mb-4">
              Comprehensive toolkit for AI implementation in 2025. Includes frameworks, 
              templates, checklists, and best practices for successful AI transformation.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Toolkit</span>
              <Link 
                href="/resources/ai-2025-implementation-toolkit"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
              >
                Access Toolkit <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Content Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10">
            <h4 className="text-lg font-bold mb-4">Latest Blog Posts</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/blog/ai-2025-cloud-native-architecture-revolution"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  AI 2025 Cloud-Native Architecture Revolution
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog/ai-2025-enterprise-automation-revolution"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  AI 2025 Enterprise Automation Revolution
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog/ai-2025-cybersecurity-revolution"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  AI 2025 Cybersecurity Revolution
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10">
            <h4 className="text-lg font-bold mb-4">Success Stories</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Fortune 500 AI Transformation Success
                </Link>
              </li>
              <li>
                <Link 
                  href="/case-studies/healthcare-ai-transformation-2025"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Healthcare AI Transformation 2025
                </Link>
              </li>
              <li>
                <Link 
                  href="/case-studies/fintech-ai-transformation-2025-ultimate-success-story"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Fintech AI Transformation Success
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-lg text-gray-200 mb-6">
              Explore our comprehensive collection of AI resources, case studies, and implementation guides 
              to accelerate your AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Explore All Content <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025ShowcaseBanner;