import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBreakthroughBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW ULTIMATE BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            AI 2025: The Ultimate Business Automation Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI solutions transforming businesses worldwide. 
            Complete implementation guides, real-world success stories, and proven strategies for 2500% ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-4">Complete Implementation Guide</h3>
            <p className="text-gray-300 mb-6">
              Step-by-step guide to implementing AI solutions in 2025. From strategy to execution, 
              everything you need for successful AI transformation.
            </p>
            <Link 
              href="/resources/ai-2025-implementation-guide"
              className="inline-flex items-center text-white bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Guide →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-4">Fortune 500 Success Story</h3>
            <p className="text-gray-300 mb-6">
              How a Fortune 500 company achieved 2500% ROI through comprehensive AI transformation, 
              reducing costs by 60% and increasing efficiency by 400%.
            </p>
            <Link 
              href="/case-studies/fortune-500-ai-transformation-2500-roi-ultimate-success-story"
              className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Case Study →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-4">Revolutionary AI Guide</h3>
            <p className="text-gray-300 mb-6">
              The ultimate business automation revolution guide. Discover how AI is transforming 
              operations, delivering unprecedented efficiency gains and competitive advantages.
            </p>
            <Link 
              href="/blog/ai-2025-ultimate-business-automation-revolution-complete-guide"
              className="inline-flex items-center text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Article →
            </Link>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Join thousands of companies already achieving breakthrough results with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBreakthroughBanner;