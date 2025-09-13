'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Globe, Brain } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Ultimate Content Showcase 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Transforms Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI solutions, automation tools, and digital transformation strategies that are reshaping industries worldwide.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Innovation Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Innovation Hub</h3>
            <p className="text-gray-600 mb-6">
              Explore the latest breakthroughs in artificial intelligence, machine learning, and neural networks that are revolutionizing business operations.
            </p>
            <Link href="/ai-innovation-hub" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
              Explore AI Innovations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Automation Solutions Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Automation Solutions</h3>
            <p className="text-gray-600 mb-6">
              Streamline your business processes with intelligent automation tools that reduce costs and increase efficiency by up to 300%.
            </p>
            <Link href="/automation-solutions" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700">
              Discover Automation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Cloud Infrastructure Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
            <p className="text-gray-600 mb-6">
              Build scalable, secure, and high-performance cloud solutions that grow with your business and adapt to changing demands.
            </p>
            <Link href="/cloud-infrastructure" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700">
              Explore Cloud Solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Security & Compliance Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
            <p className="text-gray-600 mb-6">
              Protect your business with enterprise-grade security solutions and ensure compliance with industry standards and regulations.
            </p>
            <Link href="/security-compliance" className="inline-flex items-center text-red-600 font-semibold hover:text-red-700">
              Learn About Security
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Success Stories Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
            <p className="text-gray-600 mb-6">
              Read about how leading companies have transformed their operations and achieved remarkable results with our solutions.
            </p>
            <Link href="/success-stories" className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700">
              View Success Stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Future Predictions Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Future Predictions</h3>
            <p className="text-gray-600 mb-6">
              Stay ahead of the curve with our expert insights and predictions about the future of technology and business transformation.
            </p>
            <Link href="/future-predictions" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700">
              Explore Predictions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already using our solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get Started Today
              </Link>
              <Link 
                href="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;