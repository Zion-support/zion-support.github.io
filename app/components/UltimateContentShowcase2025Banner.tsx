import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Award } from 'lucide-react';

const UltimateContentShowcase2025Banner = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">NEW 2025 CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-white to-blue-300 bg-clip-text text-transparent">
            Ultimate AI Content Collection 2025
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive library of AI transformation resources, case studies, and implementation guides. 
            Everything you need to succeed with AI in 2025.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Transformation Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Complete AI Guide</h3>
                <p className="text-blue-200 text-sm">15 min read</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              The ultimate roadmap for AI transformation in 2025. Learn proven strategies, implementation frameworks, and real-world success stories.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm">340% ROI</span>
                </div>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 mr-1" />
                  <span className="text-sm">4.9/5</span>
                </div>
              </div>
              <Link 
                href="/blog/ai-transformation-2025-complete-guide"
                className="text-white hover:text-yellow-400 transition-colors group-hover:translate-x-1 transform duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Enterprise Success Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Success Story</h3>
                <p className="text-blue-200 text-sm">12 min read</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              How a Fortune 500 company achieved 340% ROI in 6 months. Real results, proven strategies, and actionable insights.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm">$50M Value</span>
                </div>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 mr-1" />
                  <span className="text-sm">4.8/5</span>
                </div>
              </div>
              <Link 
                href="/case-studies/ai-transformation-enterprise-success-2025"
                className="text-white hover:text-yellow-400 transition-colors group-hover:translate-x-1 transform duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Implementation Checklist */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Implementation Checklist</h3>
                <p className="text-blue-200 text-sm">20 min read</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Your complete guide to AI implementation success. 150+ checkpoints covering strategy, technology, and execution.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm">150+ Points</span>
                </div>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 mr-1" />
                  <span className="text-sm">4.9/5</span>
                </div>
              </div>
              <Link 
                href="/resources/ai-implementation-checklist-2025"
                className="text-white hover:text-yellow-400 transition-colors group-hover:translate-x-1 transform duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-300">Expert Resources</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">340%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300">Expert Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/resources"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Resources
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Expert Consultation
            </Link>
          </div>
          
          <p className="text-gray-300 text-lg">
            Join 10,000+ professionals who have transformed their businesses with our AI resources
          </p>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025Banner;