"use client";
import React from 'react';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔥 TRENDING NOW</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Expert Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay ahead with our latest articles on AI, cloud architecture, growth strategies, 
            and emerging technologies. Fresh content published weekly.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Link href="/blog/ai-productivity-automation-2025" className="group">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                <div className="text-8xl">🤖</div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  NEW
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    AI & Technology
                  </span>
                  <span className="text-gray-500 text-sm">15 min read</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  AI Productivity Automation 2025: Transform Your Business with 300% Productivity Gains
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover how AI automation can transform your business operations, reduce costs by 40%, 
                  and increase productivity by 300%. Complete implementation guide with real case studies.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">ZT</span>
                    </div>
                    <span className="text-sm text-gray-600">Zion Tech Group</span>
                  </div>
                  <span className="text-blue-600 font-medium group-hover:underline">
                    Read Article →
                  </span>
                </div>
              </div>
            </article>
          </Link>

          <Link href="/blog/ai-startup-funding-guide-2025" className="group">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                <div className="text-8xl">💰</div>
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  NEW
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Startup Strategy
                  </span>
                  <span className="text-gray-500 text-sm">22 min read</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  AI Startup Funding Guide 2025: From Seed to Series A with $47B Market Insights
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Master AI startup funding in 2025 with our comprehensive guide. Learn from $47B market 
                  insights, pitch templates, and real success stories from seed to Series A.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">ZT</span>
                    </div>
                    <span className="text-sm text-gray-600">Zion Tech Group</span>
                  </div>
                  <span className="text-green-600 font-medium group-hover:underline">
                    Read Article →
                  </span>
                </div>
              </div>
            </article>
          </Link>

          <Link href="/case-studies/ai-healthcare-diagnosis-success-2025" className="group">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                <div className="text-8xl">🏥</div>
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  NEW
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Case Study
                  </span>
                  <span className="text-gray-500 text-sm">Healthcare AI</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  AI Healthcare Diagnosis Success Story: 95% Accuracy and 80% Faster Processing
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover how a leading healthcare provider achieved 95% diagnostic accuracy and 80% 
                  faster processing times using AI. Complete case study with implementation details and results.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">ZT</span>
                    </div>
                    <span className="text-sm text-gray-600">Zion Tech Group</span>
                  </div>
                  <span className="text-green-600 font-medium group-hover:underline">
                    Read Case Study →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </div>

        {/* Resources Showcase */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Free Resources & Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/resources/ai-implementation-playbook-2025" className="group">
              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    AI Implementation Playbook
                  </h4>
                  <p className="text-sm text-gray-600">150+ pages of templates and strategies</p>
                  <div className="text-xs text-purple-600 font-medium mt-1">Free Download</div>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-workforce-transformation-playbook-2025" className="group">
              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    AI Workforce Transformation Playbook
                  </h4>
                  <p className="text-sm text-gray-600">150+ pages of workforce strategies</p>
                  <div className="text-xs text-blue-600 font-medium mt-1">Free Download</div>
                </div>
              </div>
            </Link>

            <Link href="/resources/green-ai-implementation-guide-2025" className="group">
              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    Green AI Implementation Guide
                  </h4>
                  <p className="text-sm text-gray-600">Build sustainable AI systems</p>
                  <div className="text-xs text-green-600 font-medium mt-1">Free Download</div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            View All Articles
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}