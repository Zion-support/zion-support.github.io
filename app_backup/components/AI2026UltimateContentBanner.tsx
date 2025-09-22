import React from 'react';
import Link from 'next/link';

const AI2026UltimateContentBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI 2026 Ultimate Content Collection
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the future of AI with our comprehensive 2026 content series. 
            From enterprise transformation to quantum AI breakthroughs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Content 1 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-bold mb-3">Enterprise Transformation Guide</h3>
            <p className="text-gray-200 mb-4">
              Complete roadmap for implementing AI 2026 in your enterprise with proven strategies and real-world case studies.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm bg-green-500 text-white px-3 py-1 rounded-full">NEW</span>
              <Link 
                href="/blog/ai-2026-enterprise-transformation-ultimate-guide"
                className="text-blue-300 hover:text-blue-100 font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Featured Content 2 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum AI Revolution</h3>
            <p className="text-gray-200 mb-4">
              Explore how quantum AI is revolutionizing business operations with unprecedented computational power and intelligence.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm bg-purple-500 text-white px-3 py-1 rounded-full">FEATURED</span>
              <Link 
                href="/blog/quantum-ai-2026-business-revolution-complete-guide"
                className="text-blue-300 hover:text-blue-100 font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Featured Content 3 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-3">Implementation Master Guide</h3>
            <p className="text-gray-200 mb-4">
              The definitive blueprint for AI 2026 implementation with step-by-step instructions and best practices.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm bg-orange-500 text-white px-3 py-1 rounded-full">ULTIMATE</span>
              <Link 
                href="/resources/ai-2026-implementation-master-guide-ultimate"
                className="text-blue-300 hover:text-blue-100 font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white bg-opacity-5 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our AI 2026 Content?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">450%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">67%</div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">234%</div>
              <div className="text-sm text-gray-300">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">189%</div>
              <div className="text-sm text-gray-300">Revenue Growth</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Resources
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Get Implementation Help
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026UltimateContentBanner;