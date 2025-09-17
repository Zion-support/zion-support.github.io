import React from 'react';
import Link from 'next/link';

const NewContent2026PromotionBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Revolutionary AI Insights
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in enterprise AI orchestration, human-AI symbiosis, 
            and responsible AI implementation that are reshaping industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Article 1 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Enterprise AI</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Enterprise Agent Orchestration at Scale</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Master the art of coordinating thousands of AI agents across your organization with proven orchestration patterns.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">12 min read</span>
              <Link 
                href="/blog/ai-2026-enterprise-agent-orchestration-scale"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Read Article →
              </Link>
            </div>
          </div>

          {/* Featured Article 2 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Human-AI Collaboration</span>
            </div>
            <h3 className="text-xl font-bold mb-3">The Future of Human-AI Collaboration</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Explore how humans and AI are evolving toward true symbiotic relationships that amplify both capabilities.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">15 min read</span>
              <Link 
                href="/blog/future-human-ai-collaboration-symbiotic-intelligence"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Read Article →
              </Link>
            </div>
          </div>

          {/* Featured Article 3 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Business Innovation</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Driven Business Model Innovation</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Discover how AI is enabling entirely new business models and value propositions.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">14 min read</span>
              <Link 
                href="/blog/ai-driven-business-model-innovation-value-propositions"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Read Article →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Explore All New Content 2026
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026PromotionBanner;