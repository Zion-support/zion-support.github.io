import React from 'react';
import Link from 'next/link';

export default function NewContent2025PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              NEW CONTENT
            </span>
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              BREAKTHROUGH
            </span>
            <span className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              REVOLUTIONARY
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Discover Our Latest AI 2025 Breakthrough Content
          </h2>
          
          <p className="text-lg md:text-xl mb-6 text-blue-100">
            Revolutionary insights, success stories, and implementation guides that are transforming businesses worldwide
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-yellow-300">
                🔬 Breakthrough Innovations
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Revolutionary AI technologies delivering 2,500% ROI and transforming business operations
              </p>
              <Link 
                href="/blog/ai-2025-breakthrough-innovations"
                className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Read Article →
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-green-300">
                🏆 Mega Success Story
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Global enterprise achieves 15,000% ROI through AI transformation across 50+ countries
              </p>
              <Link 
                href="/case-studies/ai-2025-global-enterprise-transformation-mega-success"
                className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition-colors"
              >
                View Case Study →
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-purple-300">
                📚 Ultimate Playbook
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Complete step-by-step guide to AI implementation with proven strategies and frameworks
              </p>
              <Link 
                href="/resources/ai-2025-ultimate-implementation-playbook"
                className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-400 transition-colors"
              >
                Get Playbook →
              </Link>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/blog"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Blog Posts
            </Link>
            <Link 
              href="/case-studies"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Case Studies
            </Link>
            <Link 
              href="/resources"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}