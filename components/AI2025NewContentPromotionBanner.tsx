import React from 'react';
import Link from 'next/link';

export default function AI2025NewContentPromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-5 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🚀 JUST PUBLISHED - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI 2025 Content
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the future of AI with our latest predictionsbreakthrough case studies
            and comprehensive implementation guides. Expert insights to accelerate your transformation in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-year-ahead-predictions"
              className="bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🔮 Read AI 2025 Predictions
            </Link>
            <Link
              href="/case-studies/ai-2025-enterprise-transformation-breakthrough"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg backdrop-blur-sm"
            >
              🏆 View Success Stories
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/blog/ai-2025-year-ahead-predictions" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 group-hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
              <h3 className="text-lg font-semibold mb-2">AI 2025 Predictions</h3>
              <p className="text-sm opacity-90 mb-3">15 revolutionary predictions that will transform business</p>
              <div className="flex items-center text-xs opacity-75">
                <span>25 min read</span>
                <span className="mx-2">•</span>
                <span className="bg-green-500 text-white px-2 py-1 rounded-full">NEW</span>
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-2025-enterprise-transformation-breakthrough" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 group-hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
              <h3 className="text-lg font-semibold mb-2">Enterprise Success Story</h3>
              <p className="text-sm opacity-90 mb-3">1,200% ROI through comprehensive AI transformation</p>
              <div className="flex items-center text-xs opacity-75">
                <span>18 min read</span>
                <span className="mx-2">•</span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded-full">BREAKTHROUGH</span>
              </div>
            </div>
          </Link>
          
          <Link href="/resources/ai-2025-enterprise-implementation-guide" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 group-hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-lg font-semibold mb-2">Implementation Guide</h3>
              <p className="text-sm opacity-90 mb-3">Complete roadmap with templates and tools</p>
              <div className="flex items-center text-xs opacity-75">
                <span>150+ pages</span>
                <span className="mx-2">•</span>
                <span className="bg-purple-500 text-white px-2 py-1 rounded-full">ESSENTIAL</span>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-2025-quantum-breakthrough" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 group-hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚛️</div>
              <h3 className="text-lg font-semibold mb-2">Quantum AI Revolution</h3>
              <p className="text-sm opacity-90 mb-3">10,000x performance improvements in optimization</p>
              <div className="flex items-center text-xs opacity-75">
                <span>22 min read</span>
                <span className="mx-2">•</span>
                <span className="bg-indigo-500 text-white px-2 py-1 rounded-full">REVOLUTIONARY</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-lg opacity-90 mb-6">
            Join 10,000+ executives who are already transforming their organizations with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="bg-white bg-opacity-20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors backdrop-blur-sm"
            >
              📋 Browse All Resources
            </Link>
            <Link
              href="/webinars"
              className="bg-white bg-opacity-20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors backdrop-blur-sm"
            >
              🎥 Watch Webinars
            </Link>
            <Link
              href="/contact"
              className="bg-white bg-opacity-20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors backdrop-blur-sm"
            >
              💬 Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}