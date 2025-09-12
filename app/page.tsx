import React from 'react';
import Link from 'next/link';
import EnhancedContentPromotionBanner2025 from '../components/EnhancedContentPromotionBanner2025';
import ContentShowcase2025 from '../components/ContentShowcase2025';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Content Promotion Banner */}
      <EnhancedContentPromotionBanner2025 />
      
      {/* Main Content Sections */}
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Innovation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Zion Tech Group delivers cutting-edge AI solutions, automation systems, and technology consulting 
                to help businesses achieve unprecedented growth and efficiency in 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Showcase */}
        <ContentShowcase2025 />

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI & Technology Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to accelerate your digital transformation and drive measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Automation</h3>
                <p className="text-gray-600 mb-4">
                  Streamline operations with intelligent automation solutions that reduce costs and improve efficiency.
                </p>
                <Link href="/services/ai-automation" className="text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Scalable, secure cloud solutions that grow with your business and enable digital innovation.
                </p>
                <Link href="/services/cloud-infrastructure" className="text-green-600 font-semibold hover:text-green-700">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Transform raw data into actionable insights with advanced analytics and machine learning.
                </p>
                <Link href="/services/data-analytics" className="text-purple-600 font-semibold hover:text-purple-700">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border border-orange-200">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance on technology strategy, implementation, and optimization for maximum ROI.
                </p>
                <Link href="/services/consulting" className="text-orange-600 font-semibold hover:text-orange-700">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl border border-red-200">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cybersecurity</h3>
                <p className="text-gray-600 mb-4">
                  Protect your digital assets with comprehensive security solutions and best practices.
                </p>
                <Link href="/services/cybersecurity" className="text-red-600 font-semibold hover:text-red-700">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl border border-teal-200">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability Tech</h3>
                <p className="text-gray-600 mb-4">
                  Green technology solutions that help reduce environmental impact while improving efficiency.
                </p>
                <Link href="/services/sustainability" className="text-teal-600 font-semibold hover:text-teal-700">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-gray-600">
                Our solutions deliver measurable impact across industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 font-semibold">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">40%</div>
                <div className="text-gray-600 font-semibold">Average Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">$2.3M</div>
                <div className="text-gray-600 font-semibold">Average Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">98%</div>
                <div className="text-gray-600 font-semibold">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations with our AI solutions. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}