import React from 'react';
import Link from 'next/link';

export default function LatestContentPromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🔥 LATEST CONTENT DROP - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 New AI Resources Just Released!
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover our latest content: Advanced AI Architecture, Automation Revolution, 
            Manufacturing Success Stories, and the Ultimate Implementation Toolkit. 
            Everything you need to succeed with AI in 2025.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/blog/ai-2025-advanced-ai-architecture" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300">Advanced AI Architecture</h3>
              <p className="text-sm opacity-90 mb-3">Master scalable, resilient AI systems with microservices and MLOps</p>
              <div className="flex items-center text-xs opacity-75">
                <span>15 min read</span>
                <span className="mx-2">•</span>
                <span>Jan 15, 2025</span>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-2025-automation-revolution" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300">AI Automation Revolution</h3>
              <p className="text-sm opacity-90 mb-3">Transform industries and create new opportunities with AI automation</p>
              <div className="flex items-center text-xs opacity-75">
                <span>12 min read</span>
                <span className="mx-2">•</span>
                <span>Jan 16, 2025</span>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-manufacturing-transformation-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300">Manufacturing Success</h3>
              <p className="text-sm opacity-90 mb-3">30% efficiency gains through AI transformation in Fortune 500 company</p>
              <div className="flex items-center text-xs opacity-75">
                <span>8 min read</span>
                <span className="mx-2">•</span>
                <span>Jan 17, 2025</span>
              </div>
            </div>
          </Link>

          <Link href="/resources/ai-2025-ultimate-implementation-toolkit" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300">Ultimate Toolkit</h3>
              <p className="text-sm opacity-90 mb-3">Complete implementation guide with frameworks, templates, and checklists</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Comprehensive</span>
                <span className="mx-2">•</span>
                <span>Jan 18, 2025</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🎯 Explore All New Content
            </Link>
            <Link
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              📚 Download Ultimate Toolkit
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">4</div>
              <div className="text-sm opacity-90">New Resources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Implementation Templates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">200%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}