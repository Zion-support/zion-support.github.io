import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-400 text-black rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, and enterprise transformation. 
            Complete guides, implementation strategies, and cutting-edge insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">AI 2025 Enterprise Revolution</h3>
            <p className="text-gray-200 mb-4">
              Complete guide to transforming your business with cutting-edge AI solutions. 
              Real-world case studies, ROI strategies, and actionable insights.
            </p>
            <Link 
              href="/blog/ai-2025-enterprise-ai-revolution-complete-guide"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Read Complete Guide →
            </Link>
          </div>

          {/* Quantum AI Content */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum AI 2025 Breakthrough</h3>
            <p className="text-gray-200 mb-4">
              Explore the revolutionary intersection of quantum computing and AI. 
              Next-gen intelligence applications and business opportunities.
            </p>
            <Link 
              href="/blog/quantum-ai-2025-business-breakthrough-ultimate-guide"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Discover Quantum AI →
            </Link>
          </div>

          {/* Implementation Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-3">AI Implementation Master Guide</h3>
            <p className="text-gray-200 mb-4">
              Ultimate roadmap to successful AI implementation. Step-by-step strategies 
              from planning to deployment and optimization.
            </p>
            <Link 
              href="/resources/ai-2025-implementation-master-guide-ultimate"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Get Implementation Guide →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
            >
              Explore All Content
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              View Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBanner;