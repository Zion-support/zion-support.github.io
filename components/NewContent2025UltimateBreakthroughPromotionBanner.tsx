import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimateBreakthroughPromotionBanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT ALERT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Our Latest 2025 Breakthrough Content
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Explore revolutionary AI insights, quantum computing breakthroughs, and autonomous business operations 
            that are reshaping the future of technology and business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* AI 2025 Ultimate Breakthrough */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">AI 2025 Ultimate Breakthrough</h3>
            <p className="text-gray-200 mb-6">
              Discover the revolutionary AI breakthroughs that are delivering 50,000% ROI increases 
              and transforming businesses worldwide.
            </p>
            <Link
              href="/ai-2025-ultimate-breakthrough"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Now →
            </Link>
          </div>

          {/* Quantum AI Revolution */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum AI Revolution 2025</h3>
            <p className="text-gray-200 mb-6">
              Experience the unprecedented fusion of quantum computing and AI, 
              creating solutions that were previously impossible.
            </p>
            <Link
              href="/quantum-ai-revolution-2025"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          {/* Autonomous Business Operations */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Autonomous Business Operations</h3>
            <p className="text-gray-200 mb-6">
              Transform your enterprise with fully autonomous systems that manage, 
              optimize, and scale without human intervention.
            </p>
            <Link
              href="/autonomous-business-operations-2025"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started →
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2">50,000%</div>
            <div className="text-lg font-semibold">ROI Increase</div>
            <div className="text-sm opacity-80">Proven Results</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-300 mb-2">10,000x</div>
            <div className="text-lg font-semibold">Speed Boost</div>
            <div className="text-sm opacity-80">Quantum Computing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-300 mb-2">99.9%</div>
            <div className="text-lg font-semibold">Accuracy</div>
            <div className="text-sm opacity-80">Autonomous Systems</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-300 mb-2">24/7</div>
            <div className="text-lg font-semibold">Operation</div>
            <div className="text-sm opacity-80">Continuous Optimization</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
            >
              View All Services
            </Link>
          </div>
          <p className="text-sm opacity-80 mt-4">
            Join thousands of businesses already transforming with our breakthrough technologies
          </p>
        </div>
      </div>
    </section>
  );
}