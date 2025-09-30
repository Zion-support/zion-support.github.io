import React from 'react';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Dynamic Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI content, from beginner guides to advanced implementation strategies. Find everything you need to master AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Learning Hub</h3>
                <p className="text-sm text-gray-500">Educational Content</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Access comprehensive guides, tutorials, and educational resources to master AI concepts and implementation strategies.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Step-by-step tutorials</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Interactive learning modules</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Expert-led webinars</span>
              </div>
            </div>
            <Link
              href="/learning-hub"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Explore Learning Hub →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Case Studies</h3>
                <p className="text-sm text-gray-500">Real Results</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Learn from real-world implementations and discover how companies achieved measurable results with AI transformation.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Industry-specific examples</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">ROI measurements</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Implementation details</span>
              </div>
            </div>
            <Link
              href="/case-studies"
              className="text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              View Case Studies →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔮</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Market Insights</h3>
                <p className="text-sm text-gray-500">Expert Analysis</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Stay ahead with expert analysis, market trends, and predictions from industry leaders and practitioners.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Trend analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Market predictions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Expert interviews</span>
              </div>
            </div>
            <Link
              href="/insights"
              className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
            >
              Read Insights →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/content-hub"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All Content
          </Link>
        </div>
      </div>
    </section>
  );
}