import React from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ NEW CONTENT - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 Fresh AI & Business Insights
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest breakthrough content: AI 2025 Ultimate Trends, Enterprise Transformation Case Studies, 
            and comprehensive implementation guides. Expert insights to accelerate your growth in 2025.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">🔮</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">AI 2025 Ultimate Trends</h3>
                <p className="text-sm opacity-90">Revolutionary Predictions</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Discover the most revolutionary AI trends and predictions for 2025. From quantum computing 
              breakthroughs to autonomous operations.
            </p>
            <Link
              href="/blog/ai-2025-ultimate-trends-predictions"
              className="inline-flex items-center text-blue-300 hover:text-white font-semibold text-sm"
            >
              Read Full Article →
            </Link>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">🏆</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Enterprise Transformation</h3>
                <p className="text-sm opacity-90">1,200% ROI Success Story</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              How a Fortune 500 company achieved 1,200% ROI through revolutionary AI 2025 implementation, 
              transforming their entire business operations.
            </p>
            <Link
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="inline-flex items-center text-green-300 hover:text-white font-semibold text-sm"
            >
              Read Success Story →
            </Link>
          </div>

          {/* Featured Resource */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">📚</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Implementation Guide</h3>
                <p className="text-sm opacity-90">Complete Business Transformation</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              The most comprehensive guide to implementing AI 2025 technologies in your business. 
              Step-by-step instructions for 2,500% ROI.
            </p>
            <Link
              href="/resources/ai-2025-ultimate-implementation-guide"
              className="inline-flex items-center text-purple-300 hover:text-white font-semibold text-sm"
            >
              Download Free Guide →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              📚 Explore All Content
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              📋 Download Resources
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              💬 Get Expert Consultation
            </Link>
          </div>
          
          {/* Additional Content Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link
              href="/case-studies"
              className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-opacity-20 transition-all"
            >
              <div className="text-2xl mb-2">📊</div>
              <div className="text-sm font-semibold">Case Studies</div>
            </Link>
            <Link
              href="/tools"
              className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-opacity-20 transition-all"
            >
              <div className="text-2xl mb-2">🛠️</div>
              <div className="text-sm font-semibold">Tools</div>
            </Link>
            <Link
              href="/webinars"
              className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-opacity-20 transition-all"
            >
              <div className="text-2xl mb-2">🎥</div>
              <div className="text-sm font-semibold">Webinars</div>
            </Link>
            <Link
              href="/contact"
              className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-opacity-20 transition-all"
            >
              <div className="text-2xl mb-2">💬</div>
              <div className="text-sm font-semibold">Contact</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}