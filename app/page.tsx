import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services."
        keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation"
        url="/"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI & Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Cutting-edge AI automation, cloud infrastructure, and micro SaaS solutions. 
              Expert consulting and implementation services for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/content-showcase"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Explore Content
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive technology solutions for modern businesses</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Automation</h3>
              <p className="text-gray-600 mb-6">
                Transform your operations with intelligent automation solutions that reduce costs and increase efficiency.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-6">
                Scalable, secure, and reliable cloud solutions that grow with your business needs.
              </p>
              <Link href="/services" className="text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
              <p className="text-gray-600 mb-6">
                Custom software solutions designed to solve specific business challenges efficiently.
              </p>
              <Link href="/services" className="text-purple-600 font-semibold hover:text-purple-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600">Stay ahead with our expert analysis and insights</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <Link href="/blog/ai-2025-revolutionary-breakthroughs" className="hover:text-blue-600">
                  AI 2025 Revolutionary Breakthroughs
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the revolutionary AI breakthroughs of 2025 that are transforming industries.
              </p>
              <Link href="/blog/ai-2025-revolutionary-breakthroughs" className="text-blue-600 font-semibold">
                Read More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <Link href="/blog/ai-productivity-automation-2025" className="hover:text-blue-600">
                  AI Productivity Automation 2025
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Transform your business with AI automation achieving 300% productivity gains.
              </p>
              <Link href="/blog/ai-productivity-automation-2025" className="text-blue-600 font-semibold">
                Read More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <Link href="/blog/startup-pricing-strategy-2025" className="hover:text-blue-600">
                  Startup Pricing Strategy 2025
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Master startup pricing with data-driven strategies that validate customer willingness to pay.
              </p>
              <Link href="/blog/startup-pricing-strategy-2025" className="text-blue-600 font-semibold">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our AI and technology solutions can drive your success.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}