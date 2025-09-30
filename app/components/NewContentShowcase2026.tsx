import React from 'react';
import Link from 'next/link';

export default function NewContentShowcase2026() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🚀 New Content Alert: AI 2026 Revolution
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Discover the latest insights, case studies, and solutions shaping the future of AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Blog Post */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">NEW</span>
              <span className="text-blue-200 text-sm">Blog Post</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Enterprise Transformation 2026</h3>
            <p className="text-blue-100 mb-4">
              Complete guide to AI transformation strategies, emerging technologies, and implementation best practices.
            </p>
            <Link 
              href="/blog/ai-2026-enterprise-transformation"
              className="inline-flex items-center text-white font-semibold hover:text-yellow-300 transition-colors"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">SUCCESS</span>
              <span className="text-blue-200 text-sm">Case Study</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Healthcare Revolution</h3>
            <p className="text-blue-100 mb-4">
              90% faster diagnosis times and 75% cost reduction achieved with AI-powered medical systems.
            </p>
            <Link 
              href="/case-studies/ai-healthcare-revolution-2026"
              className="inline-flex items-center text-white font-semibold hover:text-yellow-300 transition-colors"
            >
              View Case Study
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Featured Service */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">HOT</span>
              <span className="text-blue-200 text-sm">Service</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Business Automation Platform</h3>
            <p className="text-blue-100 mb-4">
              Comprehensive automation platform with 85% cost reduction and 300% productivity increase.
            </p>
            <Link 
              href="/services/ai-business-automation-platform"
              className="inline-flex items-center text-white font-semibold hover:text-yellow-300 transition-colors"
            >
              Explore Platform
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Expert Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}