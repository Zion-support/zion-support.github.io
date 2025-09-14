import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContent2025Banner() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-semibold">🚀 REVOLUTIONARY CONTENT 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The Future of Business is
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Here Today
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking insights, proven strategies, and real-world success stories that are reshaping industries and creating unprecedented opportunities for growth.
          </p>

          {/* Featured Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-bold mb-2">AI Innovation</h3>
              <p className="text-sm text-gray-200">Cutting-edge AI strategies and implementations</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Autonomous Systems</h3>
              <p className="text-sm text-gray-200">Self-managing business operations</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Success Stories</h3>
              <p className="text-sm text-gray-200">Real-world transformation results</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold mb-2">Proven ROI</h3>
              <p className="text-sm text-gray-200">Measurable business outcomes</p>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-lg text-gray-200">Businesses Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">$2B+</div>
              <div className="text-lg text-gray-200">Total Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-lg text-gray-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-lg text-gray-200">Continuous Innovation</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Join the Revolution
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors text-xl"
            >
              See Success Stories
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white border-opacity-20">
            <p className="text-gray-300 mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Fortune 100</div>
              <div className="text-2xl font-bold">Enterprise</div>
              <div className="text-2xl font-bold">Startups</div>
              <div className="text-2xl font-bold">SMBs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}