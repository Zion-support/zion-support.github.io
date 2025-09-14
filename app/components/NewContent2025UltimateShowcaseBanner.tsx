import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimateShowcaseBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🎉 NEW CONTENT ALERT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionary New Content for 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Discover our latest groundbreaking resources, success stories, and implementation guides 
            designed to transform your business with cutting-edge AI technology.
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* New Blog Post */}
          <Link href="/blog/ai-2025-trends-ultimate-predictions" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-105">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold mb-3">AI 2025: Ultimate Predictions</h3>
              <p className="text-white opacity-90 mb-4 leading-relaxed">
                Explore the most groundbreaking AI trends and predictions that will reshape 
                the business landscape in 2025.
              </p>
              <div className="flex items-center text-sm font-semibold">
                <span>Read Article →</span>
              </div>
            </div>
          </Link>

          {/* New Case Study */}
          <Link href="/case-studies/ai-2025-retail-revolution-success-story" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-105">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">Retail AI Revolution</h3>
              <p className="text-white opacity-90 mb-4 leading-relaxed">
                Discover how a major retail chain achieved 450% revenue growth using 
                AI-driven personalization and autonomous operations.
              </p>
              <div className="flex items-center text-sm font-semibold">
                <span>View Success Story →</span>
              </div>
            </div>
          </Link>

          {/* New Resource Guide */}
          <Link href="/resources/ai-2025-implementation-success-framework" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-105">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-3">Implementation Success Framework</h3>
              <p className="text-white opacity-90 mb-4 leading-relaxed">
                Master AI implementation with our proven success framework and 
                step-by-step transformation guide.
              </p>
              <div className="flex items-center text-sm font-semibold">
                <span>Get Framework →</span>
              </div>
            </div>
          </Link>

        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">450%</div>
            <div className="text-sm opacity-90">Average Revenue Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">98%</div>
            <div className="text-sm opacity-90">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">500+</div>
            <div className="text-sm opacity-90">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">24/7</div>
            <div className="text-sm opacity-90">Expert Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful companies that have revolutionized their operations 
              with our AI solutions and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 text-center">
          <p className="text-sm opacity-75 mb-4">More Resources Available:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/resources" className="hover:underline opacity-90 hover:opacity-100">
              Implementation Guides
            </Link>
            <span className="opacity-50">•</span>
            <Link href="/case-studies" className="hover:underline opacity-90 hover:opacity-100">
              Success Stories
            </Link>
            <span className="opacity-50">•</span>
            <Link href="/blog" className="hover:underline opacity-90 hover:opacity-100">
              Latest Articles
            </Link>
            <span className="opacity-50">•</span>
            <Link href="/tools" className="hover:underline opacity-90 hover:opacity-100">
              AI Tools
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}