import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest comprehensive guides, case studies, and resources that are transforming how businesses approach AI in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Enterprise Automation Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">AI 2025 Enterprise Automation Mastery</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete guide to digital transformation with AI automation. Learn implementation strategies, ROI optimization, and real-world success stories.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-300">15 min read</span>
              <span className="text-sm text-green-400 font-semibold">NEW</span>
            </div>
            <Link 
              href="/blog/ai-2025-enterprise-automation-mastery-ultimate-guide"
              className="inline-flex items-center text-white bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Guide
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Quantum AI Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">Quantum AI 2025 Business Revolution</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete guide to next-generation intelligence. Discover how quantum AI is revolutionizing business operations and creating new opportunities.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-300">18 min read</span>
              <span className="text-sm text-green-400 font-semibold">NEW</span>
            </div>
            <Link 
              href="/blog/quantum-ai-2025-business-revolution-complete-guide"
              className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Guide
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Cybersecurity Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-4">AI 2025 Cybersecurity Revolution</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ultimate guide to next-generation threat protection. Master AI-powered cybersecurity for threat detection, prevention, and response.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-300">16 min read</span>
              <span className="text-sm text-green-400 font-semibold">NEW</span>
            </div>
            <Link 
              href="/blog/ai-2025-cybersecurity-revolution-ultimate-guide"
              className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Guide
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-center">
          <div className="text-4xl mb-4">📈</div>
          <h3 className="text-3xl font-bold mb-4">Real Success Story: 340% ROI Achieved</h3>
          <p className="text-xl mb-6 opacity-90">
            Discover how a global manufacturing company achieved 340% ROI through comprehensive AI transformation using our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/case-studies/ai-transformation-success-story-2025"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Case Study
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Start Your Journey
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg mb-6 opacity-90">
            Ready to transform your business with AI? Get started with our comprehensive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Explore All Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBanner;