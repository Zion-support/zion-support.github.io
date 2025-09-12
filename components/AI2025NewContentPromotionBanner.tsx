import React from 'react';
import Link from 'next/link';

export default function AI2025NewContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <span className="text-yellow-300 text-sm font-semibold mr-2">🚀 NEW</span>
            <span className="text-sm">January 2025 Content Release</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Discover cutting-edge AI insights, success stories, and implementation guides that are transforming businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">📝</span>
              <h3 className="text-lg font-semibold">Enterprise Automation Revolution</h3>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Learn how AI automation is revolutionizing enterprise operations with 300-500% efficiency gains.
            </p>
            <Link 
              href="/blog/ai-2025-enterprise-automation-revolution"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">🏆</span>
              <h3 className="text-lg font-semibold">600% ROI Success Story</h3>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Discover how a global retail chain achieved 600% ROI through strategic AI implementation.
            </p>
            <Link 
              href="/case-studies/ai-2025-global-retail-transformation-success"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              View Case Study →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">🛠️</span>
              <h3 className="text-lg font-semibold">Ultimate Implementation Toolkit</h3>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Get everything you need for successful AI implementation with our comprehensive toolkit.
            </p>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              Download Toolkit →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-sm font-semibold">500+ Successful Implementations</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-sm font-semibold">Average 400% ROI</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-sm font-semibold">Fortune 500 Clients</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/content-showcase"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}