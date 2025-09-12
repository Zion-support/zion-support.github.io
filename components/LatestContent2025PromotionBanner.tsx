import React from 'react';
import Link from 'next/link';

export default function LatestContent2025PromotionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🔥 LATEST CONTENT - JANUARY 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Revolutionary AI Content Just Released!
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-4xl mx-auto">
            Discover our latest breakthrough content: Advanced Neural Networks, Financial Services AI Revolution, 
            and the Ultimate Implementation Toolkit. Everything you need to succeed with AI in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-advanced-neural-networks"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🧠 Read Neural Networks Guide
            </Link>
            <Link
              href="/case-studies/ai-2025-financial-services-revolution"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              💰 View 2000% ROI Case Study
            </Link>
            <Link
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              🛠️ Get Implementation Toolkit
            </Link>
          </div>
          
          {/* Featured Content Preview */}
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <Link href="/blog/ai-2025-advanced-neural-networks" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="text-2xl mb-2">🧠</div>
                <h3 className="text-sm font-semibold mb-1">Advanced Neural Networks</h3>
                <p className="text-xs opacity-90">Future of AI Architecture</p>
              </div>
            </Link>
            <Link href="/case-studies/ai-2025-financial-services-revolution" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="text-sm font-semibold mb-1">Financial AI Revolution</h3>
                <p className="text-xs opacity-90">2000% ROI Success Story</p>
              </div>
            </Link>
            <Link href="/resources/ai-2025-ultimate-implementation-toolkit" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="text-2xl mb-2">🛠️</div>
                <h3 className="text-sm font-semibold mb-1">Implementation Toolkit</h3>
                <p className="text-xs opacity-90">Complete AI Deployment Guide</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}