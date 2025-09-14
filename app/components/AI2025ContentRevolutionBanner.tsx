import React from 'react';
import Link from 'next/link';

const AI2025ContentRevolutionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 CONTENT REVOLUTION 2025</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Master AI Transformation with Our Complete Content Library
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Access our comprehensive collection of AI guides, real-world case studies, 
            and practical resources. Everything you need to succeed with AI in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Enterprise Automation */}
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">Enterprise Automation</h3>
            <p className="text-sm opacity-90 mb-4">
              Master AI-powered automation with our complete implementation guide
            </p>
            <div className="text-2xl font-bold text-yellow-400 mb-2">500%+ ROI</div>
            <div className="text-sm opacity-75">Average Results</div>
            <Link 
              href="/blog/ai-2025-enterprise-automation-mastery-complete-guide"
              className="inline-block mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-sm"
            >
              Read Guide
            </Link>
          </div>

          {/* Data Analytics */}
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Data Analytics</h3>
            <p className="text-sm opacity-90 mb-4">
              Transform your data into actionable insights with AI-powered analytics
            </p>
            <div className="text-2xl font-bold text-yellow-400 mb-2">600%+ ROI</div>
            <div className="text-sm opacity-75">Average Results</div>
            <Link 
              href="/blog/ai-2025-data-analytics-revolution-enterprise-intelligence"
              className="inline-block mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-sm"
            >
              Read Guide
            </Link>
          </div>

          {/* Digital Transformation */}
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Digital Transformation</h3>
            <p className="text-sm opacity-90 mb-4">
              Complete guide to AI-powered digital transformation success
            </p>
            <div className="text-2xl font-bold text-yellow-400 mb-2">700%+ ROI</div>
            <div className="text-sm opacity-75">Average Results</div>
            <Link 
              href="/blog/ai-2025-digital-transformation-complete-enterprise-guide"
              className="inline-block mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-sm"
            >
              Read Guide
            </Link>
          </div>

          {/* Free Resources */}
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm text-center">
            <div className="text-4xl mb-4">📥</div>
            <h3 className="text-xl font-bold mb-3">Free Resources</h3>
            <p className="text-sm opacity-90 mb-4">
              Download our comprehensive AI implementation checklist and tools
            </p>
            <div className="text-2xl font-bold text-yellow-400 mb-2">100% Free</div>
            <div className="text-sm opacity-75">No Cost</div>
            <Link 
              href="/resources/ai-implementation-checklist-2025"
              className="inline-block mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-sm"
            >
              Download Now
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join 800+ successful organizations that have achieved extraordinary results with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025ContentRevolutionBanner;