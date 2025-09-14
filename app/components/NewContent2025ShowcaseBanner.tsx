import React from 'react';
import Link from 'next/link';

const NewContent2025ShowcaseBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover cutting-edge insights, breakthrough technologies, and proven strategies 
            that are transforming enterprises worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Cloud Native Architecture */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-4">☁️</div>
            <h3 className="text-xl font-bold mb-3">Cloud-Native Architecture Revolution</h3>
            <p className="text-gray-200 mb-4">
              10x performance gains and 80% cost reductions through AI-powered cloud architectures.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm bg-green-500 px-3 py-1 rounded-full">10x Performance</span>
              <Link 
                href="/blog/ai-2025-cloud-native-architecture-revolution"
                className="text-blue-300 hover:text-white font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Data Analytics Breakthrough */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Data Analytics Breakthrough</h3>
            <p className="text-gray-200 mb-4">
              15x faster insights and 95% accuracy improvements with AI-powered analytics.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm bg-green-500 px-3 py-1 rounded-full">15x Faster</span>
              <Link 
                href="/blog/ai-2025-data-analytics-breakthrough"
                className="text-blue-300 hover:text-white font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Customer Experience Transformation */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Customer Experience Transformation</h3>
            <p className="text-gray-200 mb-4">
              25x personalization and 95% satisfaction rates through AI-powered CX solutions.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm bg-green-500 px-3 py-1 rounded-full">25x Personalization</span>
              <Link 
                href="/blog/ai-2025-customer-experience-transformation"
                className="text-blue-300 hover:text-white font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-2xl font-bold mb-4">Fortune 500 Success Story</h3>
          <p className="text-lg text-gray-200 mb-6">
            Discover how a Fortune 500 manufacturing company achieved $50M in cost savings 
            and 340% ROI through comprehensive AI transformation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">$50M</div>
              <div className="text-sm text-gray-300">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">340%</div>
              <div className="text-sm text-gray-300">ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">99.9%</div>
              <div className="text-sm text-gray-300">Efficiency</div>
            </div>
          </div>
          <Link 
            href="/case-studies/fortune-500-manufacturing-ai-transformation"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Read Full Case Study →
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-200 mb-6">
            Ready to transform your business with AI? Get started with our comprehensive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025ShowcaseBanner;