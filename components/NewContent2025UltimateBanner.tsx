import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover cutting-edge insights, comprehensive guides, and real-world success stories 
            that will transform your understanding of AI and technology in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">AI Automation Guide</h3>
            <p className="text-lg opacity-90 mb-6">
              The complete guide to AI automation in 2025. Learn implementation strategies, 
              real-world applications, and achieve 340% ROI increases.
            </p>
            <Link 
              href="/blog/ai-automation-2025-comprehensive-guide"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
            >
              Read Guide →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
            <p className="text-lg opacity-90 mb-6">
              Explore revolutionary quantum computing applications for business. 
              Discover how to gain competitive advantages with quantum technology.
            </p>
            <Link 
              href="/blog/quantum-computing-business-applications-2025"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
            >
              Explore Now →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
            <p className="text-lg opacity-90 mb-6">
              Real-world case studies showing 340% ROI increases and $50M+ cost savings 
              through AI transformation. Learn from industry leaders.
            </p>
            <Link 
              href="/case-studies/ai-transformation-success-story"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-8 text-lg">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-yellow-400 mr-2">340%</span>
              <span className="opacity-90">ROI Increase</span>
            </div>
            <div className="flex items-center">
              <span className="text-3xl font-bold text-yellow-400 mr-2">$50M+</span>
              <span className="opacity-90">Cost Savings</span>
            </div>
            <div className="flex items-center">
              <span className="text-3xl font-bold text-yellow-400 mr-2">99.8%</span>
              <span className="opacity-90">Accuracy Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBanner;