'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentShowcase2026() {
  const [activeTab, setActiveTab] = useState('articles');

  const content = {
    articles: [
      {
        id: 1,
        title: 'AI-Powered Autonomous Business Systems 2026',
        description: 'Explore the revolutionary impact of AI-powered autonomous business systems in 2026, driving efficiency and innovation.',
        link: '/blog/ai-autonomous-business-systems-2026',
        category: 'Blog',
        date: 'Oct 26, 2025',
        readTime: '12 min read',
        featured: true
      },
      {
        id: 2,
        title: 'AI Quantum Computing Breakthroughs 2026',
        description: 'Discover the latest AI quantum computing breakthroughs and their profound implications for enterprise capabilities.',
        link: '/blog/ai-quantum-computing-breakthrough-2026',
        category: 'Research',
        date: 'Oct 26, 2025',
        readTime: '18 min read',
        featured: true
      },
      {
        id: 3,
        title: 'AI Enterprise Automation Revolution 2026',
        description: 'Unlock 500% ROI with our next-gen autonomous AI systems. A complete guide to enterprise automation.',
        link: '/blog/ai-2026-enterprise-automation-revolution',
        category: 'Guide',
        date: 'Oct 20, 2025',
        readTime: '15 min read',
        featured: false
      },
    ],
    caseStudies: [
      {
        id: 1,
        title: 'Manufacturing AI Mega Transformation Success 2026',
        description: 'See how a leading manufacturing giant achieved 500% ROI and 90% efficiency gains through AI-driven transformation.',
        link: '/case-studies/ai-manufacturing-transformation-mega-success-2026',
        category: 'Case Study',
        company: 'Global Manufacturer',
        roi: '500%',
        featured: true
      },
      {
        id: 2,
        title: 'AI Quantum Financial Optimization 2026',
        description: 'A financial institution leveraged quantum AI to optimize trading strategies, achieving unprecedented returns.',
        link: '/case-studies/ai-2026-quantum-financial-optimization',
        category: 'Case Study',
        company: 'FinTech Innovators',
        roi: '350%',
        featured: true
      },
      {
        id: 3,
        title: 'AI Autonomous Enterprise Transformation 2026',
        description: 'A Fortune 500 company achieved full autonomous operations, reducing costs by 70% and boosting productivity.',
        link: '/case-studies/ai-autonomous-enterprise-transformation-2026',
        category: 'Case Study',
        company: 'Fortune 500 Corp',
        roi: '400%',
        featured: false
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our Latest 2026 AI Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive into cutting-edge articles and transformative case studies shaping the future of AI in enterprise.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-full shadow-lg">
              <button
                onClick={() => setActiveTab('articles')}
                className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                  activeTab === 'articles'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Articles
              </button>
              <button
                onClick={() => setActiveTab('caseStudies')}
                className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                  activeTab === 'caseStudies'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Case Studies
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === 'articles' && content.articles.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className={`group block p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  item.featured
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.featured
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {item.category}
                    </span>
                    {item.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{item.date} • {item.readTime}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                  Read More →
                </div>
              </Link>
            ))}

            {activeTab === 'caseStudies' && content.caseStudies.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className={`group block p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  item.featured
                    ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50'
                    : 'border-gray-200 bg-white hover:border-green-300'
                }`}
              >
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.featured
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {item.category}
                    </span>
                    {item.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{item.company}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-600 font-medium group-hover:text-green-800 transition-colors">
                    View Case Study →
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    ROI: {item.roi}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href={activeTab === 'articles' ? '/blog' : '/case-studies'}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All {activeTab === 'articles' ? 'Articles' : 'Case Studies'}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}