import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Success Stories & Case Studies - Zion Tech Group',
  description: 'Explore real-world AI transformation success stories. Learn how Fortune 500 companies achieved 340% ROI through comprehensive AI implementation.',
  keywords: ['case studies', 'AI success stories', 'Fortune 500', 'ROI', 'AI transformation', 'business results'],
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🏆 SUCCESS STORIES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Success Stories & Case Studies
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Real-world transformations that deliver measurable results. 
              Discover how leading companies achieved unprecedented success with AI.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Story</h2>
            <p className="text-lg text-gray-600">Our most impressive transformation to date</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-2">340%</div>
                    <div className="text-xl">ROI in 12 Months</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-medium">🏆 FEATURED</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Fortune 500 AI Transformation Success
                </h3>
                <p className="text-gray-600 mb-6">
                  A leading manufacturing company achieved unprecedented results through comprehensive AI implementation. 
                  Learn the strategies and technologies that drove 340% ROI in just 12 months.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$2.3B</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">25%</div>
                    <div className="text-sm text-gray-600">Revenue Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">60%</div>
                    <div className="text-sm text-gray-600">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">90%</div>
                    <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  </div>
                </div>
                <Link
                  href="/case-studies/fortune-500-ai-transformation-success"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Read Full Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Success Stories</h2>
            <p className="text-lg text-gray-600">Explore our complete portfolio of AI transformation successes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fortune 500 Case Study */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">340%</div>
                  <div className="text-lg">ROI</div>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 mb-3">
                  <span className="text-xs font-medium">MANUFACTURING</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fortune 500 AI Transformation
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Comprehensive AI implementation across all business units resulting in unprecedented ROI and operational excellence.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">12 months</div>
                  <Link
                    href="/case-studies/fortune-500-ai-transformation-success"
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Healthcare AI Case Study */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <div className="text-lg">Accuracy</div>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 mb-3">
                  <span className="text-xs font-medium">HEALTHCARE</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Medical Diagnosis AI System
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  AI-powered diagnostic system that improved accuracy by 85% and reduced diagnosis time by 60%.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">8 months</div>
                  <Link
                    href="#"
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Coming Soon →
                  </Link>
                </div>
              </div>
            </div>

            {/* Financial Services Case Study */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">50%</div>
                  <div className="text-lg">Cost Reduction</div>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 mb-3">
                  <span className="text-xs font-medium">FINANCE</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Banking Automation Platform
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Intelligent automation platform that reduced operational costs by 50% while improving customer satisfaction.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">6 months</div>
                  <Link
                    href="#"
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Coming Soon →
                  </Link>
                </div>
              </div>
            </div>

            {/* Retail AI Case Study */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">30%</div>
                  <div className="text-lg">Sales Increase</div>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-3 py-1 mb-3">
                  <span className="text-xs font-medium">RETAIL</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  E-commerce Personalization
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  AI-driven personalization engine that increased sales by 30% and customer engagement by 45%.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">4 months</div>
                  <Link
                    href="#"
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Coming Soon →
                  </Link>
                </div>
              </div>
            </div>

            {/* Supply Chain Case Study */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-green-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">40%</div>
                  <div className="text-lg">Efficiency</div>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-flex items-center bg-teal-100 text-teal-800 rounded-full px-3 py-1 mb-3">
                  <span className="text-xs font-medium">LOGISTICS</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Supply Chain Optimization
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  AI-powered supply chain optimization that improved efficiency by 40% and reduced costs by 25%.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">10 months</div>
                  <Link
                    href="#"
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Coming Soon →
                  </Link>
                </div>
              </div>
            </div>

            {/* Manufacturing Case Study */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">45%</div>
                  <div className="text-lg">Quality Improvement</div>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 mb-3">
                  <span className="text-xs font-medium">MANUFACTURING</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Smart Manufacturing AI
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Intelligent manufacturing system that improved quality by 45% and reduced waste by 30%.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">7 months</div>
                  <Link
                    href="#"
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Coming Soon →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join the companies that have already transformed their business with AI. 
            Let us help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}