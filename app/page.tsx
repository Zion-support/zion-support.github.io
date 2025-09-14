import React from 'react';
import { ArrowRight, Star, TrendingUp, Users, Clock, CheckCircle, Play } from 'lucide-react';
import UltimateContent2025Banner from './components/UltimateContent2025Banner';
import UltimateContentShowcase2025 from './components/UltimateContentShowcase2025';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Ultimate Content Banner */}
      <UltimateContent2025Banner />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI 2025: The Ultimate
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Business Revolution
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Join 500+ Fortune 500 companies achieving up to 1,100% ROI through AI transformation. 
              Discover the complete roadmap to AI success with our proven implementation strategies.
            </p>
            
            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">1,100%</div>
                <div className="text-sm text-gray-300">Max ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">$420M</div>
                <div className="text-sm text-gray-300">Max Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">500+</div>
                <div className="text-sm text-gray-300">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">12</div>
                <div className="text-sm text-gray-300">Months</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-pink-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-pink-300 transition-all duration-200"
              >
                <span>Start Your AI Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/resources"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
              >
                <Play className="w-5 h-5" />
                <span>View Success Stories</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ultimate Content Showcase */}
      <UltimateContentShowcase2025 />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Fortune 500 Companies Choose ZionTech Group
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped 500+ companies achieve extraordinary AI transformation results through our proven methodology and comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Proven ROI</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our clients achieve an average ROI of 1,000% within 12 months, with some reaching up to 1,100% ROI through our comprehensive AI implementation strategies.
              </p>
              <div className="flex items-center space-x-2 text-green-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>98% Success Rate</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Fortune 500 Expertise</h3>
              </div>
              <p className="text-gray-600 mb-4">
                We've successfully transformed 500+ Fortune 500 companies across all industries, delivering measurable results and sustainable competitive advantages.
              </p>
              <div className="flex items-center space-x-2 text-blue-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>500+ Companies</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Rapid Implementation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our streamlined approach delivers results in 12 months or less, with most clients seeing positive ROI within the first 3 months of implementation.
              </p>
              <div className="flex items-center space-x-2 text-purple-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>12 Month Average</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Success Stories from Fortune 500 Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how leading companies achieved extraordinary results through AI transformation with our proven methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-green-800">Manufacturing Success</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                $3.8B Manufacturing Company
              </h3>
              <p className="text-gray-600 mb-4">
                Achieved 1,100% ROI and $420M in annual savings through comprehensive AI transformation across 47 manufacturing facilities.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-green-600">1,100% ROI</div>
                <a href="/case-studies/ai-2025-manufacturing-transformation-ultimate-success" className="text-green-600 hover:text-green-700 font-medium">
                  Read Case Study →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-blue-800">Financial Services</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                $850M Financial Services
              </h3>
              <p className="text-gray-600 mb-4">
                Achieved 520% ROI and $67M in annual savings through AI-powered intelligent banking and customer experience transformation.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600">520% ROI</div>
                <a href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read Case Study →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-purple-800">Healthcare Transformation</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                $200M Health System
              </h3>
              <p className="text-gray-600 mb-4">
                Achieved 300% ROI and $18.7M in annual savings through AI-powered patient care and operational efficiency improvements.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-purple-600">300% ROI</div>
                <a href="/case-studies" className="text-purple-600 hover:text-purple-700 font-medium">
                  Read Case Study →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your AI Transformation Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join 500+ Fortune 500 companies that have already transformed their business with AI. 
            Get your free consultation and discover how you can achieve up to 1,100% ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/resources"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
            >
              <span>Download Resources</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}