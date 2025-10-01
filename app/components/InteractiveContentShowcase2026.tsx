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
      },
      {
        id: 2,
        title: 'AI Quantum Computing Breakthroughs 2026',
        description: 'Discover the latest AI quantum computing breakthroughs and their profound implications for enterprise capabilities.',
        link: '/blog/ai-quantum-computing-breakthrough-2026',
        category: 'Blog',
        date: 'Oct 26, 2025',
      },
      {
        id: 3,
        title: 'AI Enterprise Automation Revolution 2026',
        description: 'Unlock 500% ROI with our next-gen autonomous AI systems. A complete guide to enterprise automation.',
        link: '/blog/ai-2026-enterprise-automation-revolution',
        category: 'Blog',
        date: 'Oct 20, 2025',
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
      },
      {
        id: 2,
        title: 'AI Quantum Financial Optimization 2026',
        description: 'A financial institution leveraged quantum AI to optimize trading strategies, achieving unprecedented returns.',
        link: '/case-studies/ai-2026-quantum-financial-optimization',
        category: 'Case Study',
        company: 'FinTech Innovators',
        roi: '350%',
      },
      {
        id: 3,
        title: 'AI Autonomous Enterprise Transformation 2026',
        description: 'A Fortune 500 company achieved full autonomous operations, reducing costs by 70% and boosting productivity.',
        link: '/case-studies/ai-autonomous-enterprise-transformation-2026',
        category: 'Case Study',
        company: 'Fortune 500 Corp',
        roi: '400%',
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-blue-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Explore Our Latest 2026 AI Content
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Dive into cutting-edge articles and transformative case studies shaping the future of AI in enterprise.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-white p-2 rounded-full shadow-md flex space-x-2">
            <button
              onClick={() => setActiveTab('articles')}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeTab === 'articles' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Articles
            </button>
            <button
              onClick={() => setActiveTab('caseStudies')}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeTab === 'caseStudies' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Case Studies
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'articles' &&
            content.articles.map((item) => (
              <Link href={item.link} key={item.id} className="group block">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 h-full flex flex-col">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold mb-3 self-start">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                    <span>{item.date}</span>
                    <span className="text-blue-600 group-hover:underline">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}

          {activeTab === 'caseStudies' &&
            content.caseStudies.map((item) => (
              <Link href={item.link} key={item.id} className="group block">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 h-full flex flex-col">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-3 self-start">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                    <span>ROI: {item.roi}</span>
                    <span className="text-blue-600 group-hover:underline">View Case Study →</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}