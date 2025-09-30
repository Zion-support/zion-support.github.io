import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentShowcase2026() {
  const [activeTab, setActiveTab] = useState('all');

  const contentItems = {
    all: [
      {
        id: 1,
        title: 'AI Enterprise Implementation 2026',
        type: 'Strategic Guide',
        description: 'Master AI enterprise implementation with proven frameworks, ROI strategies, and real-world success patterns.',
        readTime: '25 min read',
        category: 'Implementation',
        href: '/blog/ai-enterprise-implementation-2026',
        featured: true,
        metrics: { roi: '300%', savings: '$50M' }
      },
      {
        id: 2,
        title: 'AI Trends 2026: Top 10 Predictions',
        type: 'Featured Article',
        description: 'Discover the top AI trends shaping 2026. From autonomous agents to edge computing, explore transformative technologies.',
        readTime: '15 min read',
        category: 'Trends',
        href: '/blog/ai-trends-2026-predictions',
        featured: true,
        metrics: { market: '$2.5T', adoption: '85%' }
      },
      {
        id: 3,
        title: '$50M AI Transformation Success',
        type: 'Success Story',
        description: 'How a Fortune 500 company achieved $50M annual savings and 400% ROI with comprehensive AI transformation.',
        readTime: '20 min read',
        category: 'Case Study',
        href: '/case-studies/ai-enterprise-transformation-mega-success-2026',
        featured: true,
        metrics: { roi: '400%', savings: '$50M' }
      },
      {
        id: 4,
        title: 'AI Supply Chain Optimization',
        type: 'Success Story',
        description: '60% cost reduction and 90% efficiency improvement in supply chain operations with AI optimization.',
        readTime: '12 min read',
        category: 'Case Study',
        href: '/case-studies/ai-supply-chain-optimization-2025',
        featured: false,
        metrics: { reduction: '60%', efficiency: '90%' }
      },
      {
        id: 5,
        title: 'AI Governance Framework 2025',
        type: 'Featured Article',
        description: 'Master AI governance with 70% risk reduction and comprehensive enterprise frameworks.',
        readTime: '15 min read',
        category: 'Governance',
        href: '/blog/ai-governance-framework-2025',
        featured: false,
        metrics: { risk: '70%', compliance: '95%' }
      },
      {
        id: 6,
        title: 'AI Autonomous Agents 2025',
        type: 'New Article',
        description: 'Master autonomous AI agents with 300% ROI strategies and enterprise-ready deployment patterns.',
        readTime: '18 min read',
        category: 'Technology',
        href: '/blog/ai-autonomous-agents-2025',
        featured: false,
        metrics: { roi: '300%', automation: '85%' }
      }
    ],
    featured: [
      {
        id: 1,
        title: 'AI Enterprise Implementation 2026',
        type: 'Strategic Guide',
        description: 'Master AI enterprise implementation with proven frameworks, ROI strategies, and real-world success patterns.',
        readTime: '25 min read',
        category: 'Implementation',
        href: '/blog/ai-enterprise-implementation-2026',
        featured: true,
        metrics: { roi: '300%', savings: '$50M' }
      },
      {
        id: 2,
        title: 'AI Trends 2026: Top 10 Predictions',
        type: 'Featured Article',
        description: 'Discover the top AI trends shaping 2026. From autonomous agents to edge computing, explore transformative technologies.',
        readTime: '15 min read',
        category: 'Trends',
        href: '/blog/ai-trends-2026-predictions',
        featured: true,
        metrics: { market: '$2.5T', adoption: '85%' }
      },
      {
        id: 3,
        title: '$50M AI Transformation Success',
        type: 'Success Story',
        description: 'How a Fortune 500 company achieved $50M annual savings and 400% ROI with comprehensive AI transformation.',
        readTime: '20 min read',
        category: 'Case Study',
        href: '/case-studies/ai-enterprise-transformation-mega-success-2026',
        featured: true,
        metrics: { roi: '400%', savings: '$50M' }
      }
    ],
    caseStudies: [
      {
        id: 3,
        title: '$50M AI Transformation Success',
        type: 'Success Story',
        description: 'How a Fortune 500 company achieved $50M annual savings and 400% ROI with comprehensive AI transformation.',
        readTime: '20 min read',
        category: 'Case Study',
        href: '/case-studies/ai-enterprise-transformation-mega-success-2026',
        featured: true,
        metrics: { roi: '400%', savings: '$50M' }
      },
      {
        id: 4,
        title: 'AI Supply Chain Optimization',
        type: 'Success Story',
        description: '60% cost reduction and 90% efficiency improvement in supply chain operations with AI optimization.',
        readTime: '12 min read',
        category: 'Case Study',
        href: '/case-studies/ai-supply-chain-optimization-2025',
        featured: false,
        metrics: { reduction: '60%', efficiency: '90%' }
      }
    ],
    guides: [
      {
        id: 1,
        title: 'AI Enterprise Implementation 2026',
        type: 'Strategic Guide',
        description: 'Master AI enterprise implementation with proven frameworks, ROI strategies, and real-world success patterns.',
        readTime: '25 min read',
        category: 'Implementation',
        href: '/blog/ai-enterprise-implementation-2026',
        featured: true,
        metrics: { roi: '300%', savings: '$50M' }
      },
      {
        id: 5,
        title: 'AI Governance Framework 2025',
        type: 'Featured Article',
        description: 'Master AI governance with 70% risk reduction and comprehensive enterprise frameworks.',
        readTime: '15 min read',
        category: 'Governance',
        href: '/blog/ai-governance-framework-2025',
        featured: false,
        metrics: { risk: '70%', compliance: '95%' }
      },
      {
        id: 6,
        title: 'AI Autonomous Agents 2025',
        type: 'New Article',
        description: 'Master autonomous AI agents with 300% ROI strategies and enterprise-ready deployment patterns.',
        readTime: '18 min read',
        category: 'Technology',
        href: '/blog/ai-autonomous-agents-2025',
        featured: false,
        metrics: { roi: '300%', automation: '85%' }
      }
    ]
  };

  const tabs = [
    { id: 'all', label: 'All Content', count: contentItems.all.length },
    { id: 'featured', label: 'Featured', count: contentItems.featured.length },
    { id: 'caseStudies', label: 'Case Studies', count: contentItems.caseStudies.length },
    { id: 'guides', label: 'Guides', count: contentItems.guides.length }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Implementation': 'bg-blue-100 text-blue-800',
      'Trends': 'bg-purple-100 text-purple-800',
      'Case Study': 'bg-green-100 text-green-800',
      'Governance': 'bg-red-100 text-red-800',
      'Technology': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Strategic Guide': 'bg-blue-500',
      'Featured Article': 'bg-purple-500',
      'Success Story': 'bg-green-500',
      'New Article': 'bg-orange-500'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest AI insights, success stories, and implementation guides. 
            Filter by category to find exactly what you need.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
              <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems[activeTab as keyof typeof contentItems].map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    {item.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className={`w-3 h-3 rounded-full ${getTypeColor(item.type)}`}></div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="flex items-center gap-4 mb-4">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    <span>Read More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Content
          </Link>
        </div>
      </div>
    </section>
  );
}