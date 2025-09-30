import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'case-study' | 'guide';
  readTime: string;
  category: string;
  href: string;
  stats: {
    metric: string;
    value: string;
  }[];
  featured: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-breakthrough',
    title: 'AI 2025 Enterprise Breakthrough: The $50B Transformation Revolution',
    description: 'Discover how AI is creating a $50B enterprise transformation market in 2025. Learn about breakthrough technologies, implementation strategies, and real-world success stories.',
    type: 'article',
    readTime: '25 min read',
    category: 'AI Trends',
    href: '/blog/ai-2025-enterprise-breakthrough',
    stats: [
      { metric: 'Market Size', value: '$50B' },
      { metric: 'Average ROI', value: '300%' },
      { metric: 'Cost Reduction', value: '70%' }
    ],
    featured: true
  },
  {
    id: 'ai-autonomous-systems',
    title: 'AI Autonomous Systems 2025: Self-Managing Enterprise Operations',
    description: 'Explore how AI autonomous systems are revolutionizing enterprise operations with self-managing workflows, intelligent automation, and minimal human intervention.',
    type: 'article',
    readTime: '20 min read',
    category: 'AI Technology',
    href: '/blog/ai-autonomous-systems-2025',
    stats: [
      { metric: 'Process Automation', value: '90%' },
      { metric: 'Uptime', value: '99.9%' },
      { metric: 'Operation', value: '24/7' }
    ],
    featured: true
  },
  {
    id: 'ai-transformation-success',
    title: 'AI Transformation Mega Success: 500% ROI in 6 Months',
    description: 'Discover how GlobalCorp achieved 500% ROI through comprehensive AI transformation. Learn about their implementation strategy, challenges overcome, and lessons learned.',
    type: 'case-study',
    readTime: '15 min read',
    category: 'Success Stories',
    href: '/case-studies/ai-transformation-mega-success-2025',
    stats: [
      { metric: 'ROI', value: '500%' },
      { metric: 'Annual Savings', value: '$15M' },
      { metric: 'Efficiency Gain', value: '80%' }
    ],
    featured: true
  },
  {
    id: 'ai-multimodal-integration',
    title: 'AI Multimodal Integration 2025: The Future of Enterprise AI',
    description: 'Discover how multimodal AI is revolutionizing enterprise operations with text, image, voice, and video integration. Achieve 250% efficiency gains.',
    type: 'article',
    readTime: '22 min read',
    category: 'AI Technology',
    href: '/blog/ai-multimodal-integration-2025',
    stats: [
      { metric: 'Efficiency Gains', value: '250%' },
      { metric: 'Response Time', value: '80% faster' },
      { metric: 'Cost Reduction', value: '60%' }
    ],
    featured: false
  },
  {
    id: 'ai-enterprise-adoption',
    title: 'AI Enterprise Adoption 2025: Complete Implementation Guide',
    description: 'Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI.',
    type: 'guide',
    readTime: '20 min read',
    category: 'Implementation',
    href: '/blog/ai-enterprise-adoption-2025',
    stats: [
      { metric: 'ROI', value: '300%' },
      { metric: 'Implementation', value: '6 months' },
      { metric: 'Success Rate', value: '95%' }
    ],
    featured: false
  },
  {
    id: 'ai-supply-chain-optimization',
    title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain',
    description: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.',
    type: 'case-study',
    readTime: '18 min read',
    category: 'Success Stories',
    href: '/case-studies/ai-supply-chain-optimization-2025',
    stats: [
      { metric: 'Cost Reduction', value: '60%' },
      { metric: 'Efficiency Gain', value: '90%' },
      { metric: 'Annual Savings', value: '$12M' }
    ],
    featured: false
  }
];

const categories = ['All', 'AI Trends', 'AI Technology', 'Success Stories', 'Implementation'];

export default function InteractiveContentShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const featuredItems = contentItems.filter(item => item.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Interactive Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest AI insights, case studies, and implementation guides. 
            Filter by category to find exactly what you're looking for.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Content */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Featured Content
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.type === 'article' ? 'bg-blue-100 text-blue-800' :
                        item.type === 'case-study' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {item.type === 'article' ? '📄 Article' :
                         item.type === 'case-study' ? '📈 Case Study' :
                         '📚 Guide'}
                      </span>
                      <span className="text-gray-500 text-sm">{item.readTime}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {item.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.metric}</div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={item.href}
                      className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                        hoveredItem === item.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {item.type === 'article' || item.type === 'guide' ? 'Read More' : 'View Case Study'} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.type === 'article' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'case-study' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {item.type === 'article' ? '📄 Article' :
                     item.type === 'case-study' ? '📈 Case Study' :
                     '📚 Guide'}
                  </span>
                  <span className="text-gray-500 text-sm">{item.readTime}</span>
                  {item.featured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {item.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-sm font-bold text-blue-600">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.metric}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={item.href}
                  className={`block w-full text-center py-2 rounded-lg font-semibold transition-colors text-sm ${
                    hoveredItem === item.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {item.type === 'article' || item.type === 'guide' ? 'Read More' : 'View Case Study'} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Content →
          </Link>
        </div>
      </div>
    </section>
  );
}