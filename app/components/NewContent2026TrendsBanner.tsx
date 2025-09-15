import React from 'react';
import Link from 'next/link';

export default function NewContent2026TrendsBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-500"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 JUST PUBLISHED - JANUARY 30, 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 AI 2026 Trends & Predictions
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            The Ultimate Guide to Next-Generation Intelligence. Discover the most transformative AI trends 
            that will reshape technology and business in 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2026-trends-predictions-ultimate-guide"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              📚 Read the Complete Guide
            </Link>
            <Link
              href="/case-studies/ai-transformation-2026-ultimate-success-story"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              🏆 View Success Story
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link href="/blog/ai-2026-trends-predictions-ultimate-guide" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
              <h3 className="text-lg font-semibold mb-2">AI 2026 Trends & Predictions</h3>
              <p className="text-sm opacity-90 mb-3">Complete guide to the most transformative AI trends for 2026</p>
              <div className="flex items-center text-xs opacity-75">
                <span>25 min read</span>
                <span className="mx-2">•</span>
                <span>New</span>
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-transformation-2026-ultimate-success-story" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
              <h3 className="text-lg font-semibold mb-2">AI Transformation Success Story</h3>
              <p className="text-sm opacity-90 mb-3">How TechCorp achieved 500% ROI in 18 months</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Case Study</span>
                <span className="mx-2">•</span>
                <span>500% ROI</span>
              </div>
            </div>
          </Link>

          <Link href="/resources/ai-2026-implementation-ultimate-guide" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-lg font-semibold mb-2">AI 2026 Implementation Guide</h3>
              <p className="text-sm opacity-90 mb-3">Step-by-step guide to implementing AI in 2026</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Free Download</span>
                <span className="mx-2">•</span>
                <span>Complete Guide</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">500%</div>
            <div className="text-sm opacity-90">ROI Achieved</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">90%</div>
            <div className="text-sm opacity-90">Efficiency Improvement</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">25</div>
            <div className="text-sm opacity-90">Countries Reached</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">18</div>
            <div className="text-sm opacity-90">Months to Success</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg mb-6 opacity-90">
            Ready to transform your business with AI? Get started with our free resources and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Free AI Strategy Consultation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-block"
            >
              Download Free Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}