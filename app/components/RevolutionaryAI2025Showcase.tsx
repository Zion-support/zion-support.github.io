'use client';

import React from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: string;
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
  };
  readingTime: string;
  description: string;
  category: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
    title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
    type: 'blog',
    url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
    metrics: {
      roi: '2,500%',
      savings: '$3.2B+',
      efficiency: '95%'
    },
    readingTime: '25 min read',
    description: 'Discover how Fortune 500 companies are achieving unprecedented 2,500% ROI through revolutionary AI implementation strategies.',
    category: 'AI Innovation'
  },
  {
    id: 'fortune-500-ai-transformation-2500-roi-success-story',
    title: 'Fortune 500 AI Transformation Success: $3.2B Annual Savings',
    type: 'case-study',
    url: '/case-studies/fortune-500-ai-transformation-2500-roi-success-story',
    metrics: {
      roi: '2,500%',
      savings: '$3.2B',
      efficiency: '99.2%'
    },
    readingTime: '18 min read',
    description: 'Real-world case study of a Fortune 500 manufacturing leader achieving 2,500% ROI through strategic AI implementation.',
    category: 'Success Story'
  },
  {
    id: 'ai-2025-implementation-ultimate-roadmap-2500-roi',
    title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 2,500% ROI',
    type: 'resource',
    url: '/resources/ai-2025-implementation-ultimate-roadmap-2500-roi',
    metrics: {
      roi: '2,500%',
      savings: '$2.5B-5B',
      efficiency: '85-95%'
    },
    readingTime: '25 min read',
    description: 'Complete step-by-step roadmap for achieving 2,500% ROI through strategic AI implementation in 18 months.',
    category: 'Implementation Guide'
  }
];

const RevolutionaryAI2025Showcase: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 text-sm font-medium mb-4">
            🚀 REVOLUTIONARY AI 2025 CONTENT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimate AI Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the proven strategies and real-world success stories that are delivering unprecedented 2,500% ROI through AI implementation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contentItems.map((item, index) => (
            <div key={item.id} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Category Badge */}
                <div className="px-6 pt-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                      <div className="text-xs text-gray-500">Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{item.metrics.efficiency}</div>
                      <div className="text-xs text-gray-500">Efficiency</div>
                    </div>
                  </div>

                  {/* Reading Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{item.readingTime}</span>
                    <span className="text-sm font-medium text-purple-600 capitalize">{item.type}</span>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={item.url}
                    className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Read Full {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Proven Results Across Industries</h3>
            <p className="text-lg opacity-90">Fortune 500 companies achieving unprecedented success with AI implementation</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">2,500%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">$3.2B+</div>
              <div className="text-sm opacity-90">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-sm opacity-90">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">18</div>
              <div className="text-sm opacity-90">Months to ROI</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Achieve Similar Results?</h3>
            <p className="text-lg text-gray-600">Get personalized consultation and implementation roadmap for your organization</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Implementation Help
            </Link>
            <Link
              href="/services"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAI2025Showcase;