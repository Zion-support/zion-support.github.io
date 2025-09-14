import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Services - Transform Your Business | Zion Tech Group',
  description: 'Comprehensive AI automation solutions for businesses. Streamline operations, boost productivity, and achieve unprecedented efficiency with our cutting-edge AI technologies.',
  keywords: ['AI automation', 'business automation', 'AI solutions', 'process automation', 'AI consulting', 'digital transformation'],
};

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Automation Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Transform your business with intelligent automation solutions that streamline operations, 
              boost productivity, and drive unprecedented growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI Automation Solutions</h2>
            <p className="text-xl text-gray-600">
              Comprehensive automation services designed to revolutionize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Process Automation</h3>
              <p className="text-gray-600 mb-6">
                Automate repetitive tasks and workflows to increase efficiency and reduce human error.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Document processing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Data entry automation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Workflow optimization
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="text-purple-600 font-semibold hover:text-purple-700"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Intelligent Analytics</h3>
              <p className="text-gray-600 mb-6">
                AI-powered analytics that provide deep insights and predictive capabilities for better decision-making.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Predictive modeling
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Real-time insights
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Automated reporting
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Explore →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-6">💬</div>
              <h3 className="text-2xl font-bold mb-4 text-green-600">AI Chatbots</h3>
              <p className="text-gray-600 mb-6">
                Intelligent conversational AI that provides 24/7 customer support and engagement.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Natural language processing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Multi-channel support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Personalized interactions
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="text-green-600 font-semibold hover:text-green-700"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our AI Automation?</h2>
            <p className="text-xl text-gray-600">
              Proven benefits that deliver measurable results for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">90% Faster</h3>
              <p className="text-gray-600">Process execution times reduced by up to 90%</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">60% Cost Savings</h3>
              <p className="text-gray-600">Significant reduction in operational costs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">99.9% Accuracy</h3>
              <p className="text-gray-600">Near-perfect accuracy in automated processes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold mb-3">340% ROI</h3>
              <p className="text-gray-600">Average return on investment within 12 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Implementation Process</h2>
            <p className="text-xl text-gray-600">
              A proven methodology for successful AI automation deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Assessment</h3>
              <p className="text-gray-600">Comprehensive analysis of your current processes and automation opportunities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Strategy</h3>
              <p className="text-gray-600">Custom automation roadmap tailored to your business goals and requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-gray-600">Building and testing AI automation solutions with minimal business disruption</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Optimization</h3>
              <p className="text-gray-600">Continuous monitoring and improvement to maximize performance and ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies already transforming their operations with AI automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-12 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}