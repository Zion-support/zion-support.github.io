import React from 'react';
import RevolutionaryContent2025Banner from './components/RevolutionaryContent2025Banner';
import UltimateContentShowcase2025 from './components/UltimateContentShowcase2025';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Revolutionary Content 2025 Banner */}
      <RevolutionaryContent2025Banner />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 AI & TECHNOLOGY SOLUTIONS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with AI
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge AI, cloud infrastructure, and micro SaaS solutions. 
              Expert consulting and implementation services for enterprise success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">2,000%</div>
              <div className="text-gray-600">Maximum ROI Achieved</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultimate Content Showcase */}
      <UltimateContentShowcase2025 />

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Automation</h3>
              <p className="text-gray-600 mb-4">
                Intelligent automation solutions that streamline operations and boost productivity across your organization.
              </p>
              <a href="/services/ai-automation" className="text-purple-600 font-semibold hover:text-purple-800">
                Learn More →
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Scalable, secure cloud solutions designed to support your business growth and digital transformation.
              </p>
              <a href="/services/cloud-infrastructure" className="text-purple-600 font-semibold hover:text-purple-800">
                Learn More →
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
              <p className="text-gray-600 mb-4">
                Custom micro SaaS applications that solve specific business challenges with modern, scalable solutions.
              </p>
              <a href="/services/micro-saas" className="text-purple-600 font-semibold hover:text-purple-800">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of Fortune 500 companies achieving unprecedented ROI through AI automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </a>
            <a
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Resources
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
