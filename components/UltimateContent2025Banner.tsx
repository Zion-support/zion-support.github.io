import React from 'react';
import Link from 'next/link';

const UltimateContent2025Banner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🚀 NEW ULTIMATE CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            AI 2025-2026 Ultimate Business Transformation
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI technologies transforming businesses with proven 10,000% ROI strategies, 
            real-world success stories, and complete implementation frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">10,000% ROI Framework</h3>
            <p className="text-lg opacity-90 mb-6">
              Complete implementation guide with proven strategies for achieving unprecedented returns on AI investments.
            </p>
            <Link 
              href="/resources/ai-2025-2026-implementation-ultimate-master-guide-10000-roi"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
            >
              Get Implementation Guide →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-4">5,000% ROI Success Story</h3>
            <p className="text-lg opacity-90 mb-6">
              Real Fortune 100 case study showing how one company achieved 5,000% ROI in just 18 months.
            </p>
            <Link 
              href="/case-studies/ai-2025-2026-ultimate-transformation-5000-roi-success-story"
              className="inline-flex items-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-500 hover:to-blue-600 transition-all duration-300"
            >
              Read Success Story →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Ultimate Transformation Guide</h3>
            <p className="text-lg opacity-90 mb-6">
              Comprehensive guide covering AI technologies, implementation strategies, and proven business transformation methods.
            </p>
            <Link 
              href="/blog/ai-2025-2026-ultimate-business-transformation-revolution-ultimate-guide"
              className="inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-600 transition-all duration-300"
            >
              Read Complete Guide →
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-6">
            Join thousands of companies achieving unprecedented success with AI transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContent2025Banner;