import React from 'react';
import Link from 'next/link';

export default function NewContentBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🚀 New Content
            </span>
            <span className="text-sm opacity-90">2026 AI Insights</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Discover the Future of AI
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Explore our latest AI trends, success stories, and implementation guides. 
            Stay ahead with cutting-edge insights from industry experts.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">6+</div>
              <div className="text-sm opacity-90">New Blog Posts</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">4+</div>
              <div className="text-sm opacity-90">Case Studies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">$100M+</div>
              <div className="text-sm opacity-90">Client Savings</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Blog Posts
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}