import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2026 = () => {
  return (
    <section className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 ULTIMATE 2025 CONTENT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The Future of AI is Now
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Experience the most comprehensive collection of AI insights, strategies, and 
            success stories that are shaping the future of enterprise technology.
          </p>
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Main Feature */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-10">
            <div className="text-6xl mb-6">🌟</div>
            <h3 className="text-3xl font-bold mb-4">Revolutionary AI Content Collection</h3>
            <p className="text-lg text-gray-200 mb-6">
              Discover the most advanced AI strategies, implementation frameworks, and 
              real-world success stories that are transforming industries worldwide.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">15+</div>
                <div className="text-sm text-gray-300">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">500+</div>
                <div className="text-sm text-gray-300">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">$2.8B</div>
                <div className="text-sm text-gray-300">Value Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">99.9%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>
            <Link 
              href="/blog"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Content →
            </Link>
          </div>

          {/* Featured Articles */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">☁️</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">Cloud-Native Architecture Revolution</h4>
                  <p className="text-gray-200 mb-3">
                    10x performance gains and 80% cost reductions through AI-powered cloud architectures.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-green-500 px-3 py-1 rounded-full">10x Performance</span>
                    <Link 
                      href="/blog/ai-2025-cloud-native-architecture-revolution"
                      className="text-purple-300 hover:text-white font-semibold"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📊</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">Data Analytics Breakthrough</h4>
                  <p className="text-gray-200 mb-3">
                    15x faster insights and 95% accuracy improvements with AI-powered analytics.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-green-500 px-3 py-1 rounded-full">15x Faster</span>
                    <Link 
                      href="/blog/ai-2025-data-analytics-breakthrough"
                      className="text-purple-300 hover:text-white font-semibold"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🎯</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">Customer Experience Transformation</h4>
                  <p className="text-gray-200 mb-3">
                    25x personalization and 95% satisfaction rates through AI-powered CX solutions.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-green-500 px-3 py-1 rounded-full">25x Personalization</span>
                    <Link 
                      href="/blog/ai-2025-customer-experience-transformation"
                      className="text-purple-300 hover:text-white font-semibold"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-10 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Real-World Success Stories</h3>
            <p className="text-lg text-gray-200">
              See how Fortune 500 companies are achieving breakthrough results with our AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-xl font-bold mb-2">Manufacturing Giant</h4>
              <div className="text-3xl font-bold text-green-400 mb-2">$50M</div>
              <div className="text-sm text-gray-300 mb-2">Cost Savings</div>
              <div className="text-2xl font-bold text-blue-400 mb-2">340%</div>
              <div className="text-sm text-gray-300">ROI Achieved</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🏪</div>
              <h4 className="text-xl font-bold mb-2">E-commerce Platform</h4>
              <div className="text-3xl font-bold text-green-400 mb-2">$100M</div>
              <div className="text-sm text-gray-300 mb-2">Revenue Growth</div>
              <div className="text-2xl font-bold text-blue-400 mb-2">25x</div>
              <div className="text-sm text-gray-300">Personalization</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h4 className="text-xl font-bold mb-2">Financial Institution</h4>
              <div className="text-3xl font-bold text-green-400 mb-2">$45M</div>
              <div className="text-sm text-gray-300 mb-2">Cost Savings</div>
              <div className="text-2xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">Satisfaction</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/case-studies"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Case Studies →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join the AI revolution and achieve breakthrough results like our Fortune 500 clients. 
            Get started with our comprehensive AI solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Explore AI Solutions
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Read All Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026;