import React from 'react';
import Link from 'next/link';

export default function NewContent2026ShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🔥 LATEST 2026 CONTENT
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔮</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">AI Mega Trends 2026</h3>
                <p className="text-sm text-gray-500">Complete Enterprise Guide</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Discover the 15 mega trends reshaping enterprise AI. From autonomous operations to quantum computing, 
              learn how to capitalize on $50B+ market opportunities.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">45 min read</div>
              <Link
                href="/blog/ai-2026-mega-trends"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Read Mega Trends →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">$25M Success Story</h3>
                <p className="text-sm text-gray-500">Fortune 500 Case Study</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 
              99% automation, 90% cost reduction, and complete business revolution.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">30 min read</div>
              <Link
                href="/case-studies/ai-autonomous-enterprise-success-2026"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                View Success Story →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Implementation Playbook</h3>
                <p className="text-sm text-gray-500">Step-by-Step Guide</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Complete guide to enterprise AI implementation with proven frameworks, 
              strategies, and real-world case studies for guaranteed success.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">25 min read</div>
              <Link
                href="/blog/ai-implementation-playbook-2026"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Get Playbook →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            Explore All AI Content
          </Link>
        </div>
      </div>
    </section>
  );
}