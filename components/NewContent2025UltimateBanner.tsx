import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content Now Available
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI insights, implementation guides, and real-world success stories that will transform your business in 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Posts */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">Latest AI Articles</h3>
            <ul className="space-y-2 text-sm opacity-90 mb-4">
              <li>• AI 2025 Enterprise Integration Revolution</li>
              <li>• Smart Automation Breakthrough Guide</li>
              <li>• Data Intelligence Revolution</li>
            </ul>
            <Link 
              href="/blog" 
              className="inline-flex items-center text-white font-semibold hover:text-yellow-300 transition-colors"
            >
              Read All Articles →
            </Link>
          </div>

          {/* Case Studies */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Success Stories</h3>
            <ul className="space-y-2 text-sm opacity-90 mb-4">
              <li>• 340% ROI Manufacturing Case Study</li>
              <li>• 99.8% Fraud Detection Success</li>
              <li>• Enterprise AI Transformation</li>
            </ul>
            <Link 
              href="/case-studies" 
              className="inline-flex items-center text-white font-semibold hover:text-yellow-300 transition-colors"
            >
              View Case Studies →
            </Link>
          </div>

          {/* Resources */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">📖</div>
            <h3 className="text-xl font-bold mb-3">Free Resources</h3>
            <ul className="space-y-2 text-sm opacity-90 mb-4">
              <li>• Complete AI Implementation Guide</li>
              <li>• ROI Calculator & Templates</li>
              <li>• Best Practices Whitepapers</li>
            </ul>
            <Link 
              href="/resources" 
              className="inline-flex items-center text-white font-semibold hover:text-yellow-300 transition-colors"
            >
              Download Resources →
            </Link>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
            <div className="text-sm opacity-90">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">340%</div>
            <div className="text-sm opacity-90">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">99.8%</div>
            <div className="text-sm opacity-90">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
            <div className="text-sm opacity-90">Support Available</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Explore Our Services
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 500+ successful organizations that have transformed their business with AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBanner;