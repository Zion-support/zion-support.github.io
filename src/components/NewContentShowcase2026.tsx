import React from 'react';
import { Link } from 'react-router-dom';

const NewContentShowcase2026: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            NEW CONTENT • JANUARY 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest AI Insights & Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the newest content covering AI ethics, quantum computing, edge AI, and advanced services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-green-400 text-sm font-semibold">NEW</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              AI Ethics in 2026: A Comprehensive Guide
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Explore the latest developments in AI ethics, responsible AI development, and regulatory frameworks.
            </p>
            <Link 
              to="/ai-ethics-guide-2026" 
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-blue-400 text-sm font-semibold">FEATURED</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Quantum Computing Breakthroughs
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Latest advances in quantum computing and their implications for AI and machine learning.
            </p>
            <Link 
              to="/quantum-computing-2026" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span className="text-purple-400 text-sm font-semibold">TRENDING</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Edge AI Implementation Guide
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Complete guide to implementing AI at the edge for real-time processing and reduced latency.
            </p>
            <Link 
              to="/edge-ai-guide-2026" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            View All Content
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;