import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimateBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content for 2025
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest comprehensive guides, case studies, and tools covering 
            enterprise AI transformation, quantum computing, and autonomous systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-2">Enterprise AI Transformation</h3>
              <p className="text-sm opacity-90 mb-4">
                Complete guide to AI transformation with 400% ROI success stories
              </p>
              <Link 
                href="/blog/ai-2025-enterprise-ai-transformation-complete-guide"
                className="text-blue-200 hover:text-white font-semibold text-sm"
              >
                Read Guide →
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-2">Quantum Computing Revolution</h3>
              <p className="text-sm opacity-90 mb-4">
                How quantum computing is transforming business operations
              </p>
              <Link 
                href="/blog/ai-2025-quantum-computing-business-revolution"
                className="text-blue-200 hover:text-white font-semibold text-sm"
              >
                Explore Now →
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">Autonomous Systems</h3>
              <p className="text-sm opacity-90 mb-4">
                Master autonomous AI systems implementation
              </p>
              <Link 
                href="/blog/ai-2025-autonomous-systems-enterprise-implementation"
                className="text-blue-200 hover:text-white font-semibold text-sm"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/ai-transformation-readiness-assessment"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Take AI Readiness Assessment
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm opacity-75">
              Join 10,000+ executives who have transformed their organizations with our AI strategies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}