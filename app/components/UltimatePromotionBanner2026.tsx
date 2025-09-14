import React from 'react';
import Link from 'next/link';

const UltimatePromotionBanner2026 = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-4 mb-8">
            <span className="text-xl font-bold">🌟 ULTIMATE 2025 COLLECTION</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Master AI in 2025
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            The most comprehensive collection of AI guides, strategies, and implementation 
            frameworks. Transform your business with cutting-edge AI technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Featured Content */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-30">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">🚀</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Generative AI Revolution</h3>
                  <p className="text-lg opacity-90">Enterprise transformation guide</p>
                </div>
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                Complete implementation framework for generative AI in enterprise environments. 
                Learn from real-world case studies and proven strategies.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="bg-purple-500 px-4 py-2 rounded-full text-sm font-semibold">15 min read</span>
                  <span className="text-green-300 font-semibold">⭐ Featured</span>
                </div>
                <Link 
                  href="/blog/ai-2025-generative-ai-enterprise-transformation-ultimate-guide"
                  className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Read Now →
                </Link>
              </div>
            </div>

            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-30">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">⚛️</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Quantum Computing</h3>
                  <p className="text-lg opacity-90">Business revolution guide</p>
                </div>
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                Discover how quantum computing is transforming business operations. 
                Complete guide to quantum AI, optimization, and enterprise applications.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="bg-blue-500 px-4 py-2 rounded-full text-sm font-semibold">18 min read</span>
                  <span className="text-green-300 font-semibold">⭐ Featured</span>
                </div>
                <Link 
                  href="/blog/ai-2025-quantum-computing-business-revolution-complete-guide"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Read Now →
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Stats and Benefits */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-30">
              <h3 className="text-3xl font-bold mb-6">Why Choose Our Guides?</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">✅</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Expert-Authored Content</h4>
                    <p className="text-gray-200">Written by industry experts with real-world experience</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">📊</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Data-Driven Insights</h4>
                    <p className="text-gray-200">Based on latest market research and case studies</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">🛠️</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Practical Implementation</h4>
                    <p className="text-gray-200">Step-by-step guides with actionable strategies</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">🚀</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Future-Ready</h4>
                    <p className="text-gray-200">Prepared for the AI revolution of 2025 and beyond</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-30">
              <h3 className="text-3xl font-bold mb-6">Proven Results</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">340%</div>
                  <div className="text-gray-200">ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">67%</div>
                  <div className="text-gray-200">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">89%</div>
                  <div className="text-gray-200">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-300 mb-2">24/7</div>
                  <div className="text-gray-200">Autonomous Ops</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Preview */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-20 mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">More Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-xl font-bold mb-2">Autonomous Systems</h4>
              <p className="text-gray-200 mb-4">Master guide to implementing autonomous AI systems</p>
              <Link 
                href="/blog/ai-2025-autonomous-systems-enterprise-implementation-master-guide"
                className="text-yellow-300 hover:text-yellow-200 font-semibold"
              >
                Read Guide →
              </Link>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-xl font-bold mb-2">Cybersecurity Revolution</h4>
              <p className="text-gray-200 mb-4">Next-generation threat protection strategies</p>
              <Link 
                href="/blog/ai-2025-cybersecurity-revolution-ultimate-guide"
                className="text-yellow-300 hover:text-yellow-200 font-semibold"
              >
                Read Guide →
              </Link>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="text-xl font-bold mb-2">Enterprise Automation</h4>
              <p className="text-gray-200 mb-4">Complete enterprise transformation guide</p>
              <Link 
                href="/blog/ai-2025-enterprise-automation-revolution"
                className="text-yellow-300 hover:text-yellow-200 font-semibold"
              >
                Read Guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/blog"
              className="bg-white text-purple-900 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-purple-900 transition-colors shadow-lg"
            >
              Get Expert Help
            </Link>
          </div>
          <p className="text-lg mt-6 opacity-90">
            Join thousands of businesses already transforming with our AI guides
          </p>
        </div>
      </div>
    </div>
  );
};

export default UltimatePromotionBanner2026;