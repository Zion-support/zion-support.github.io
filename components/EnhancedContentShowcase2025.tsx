'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'case-study' | 'service' | 'guide';
  category: string;
  readTime: string;
  publishedDate: string;
  featured: boolean;
  metrics?: {
    roi?: string;
    savings?: string;
    efficiency?: string;
    accuracy?: string;
  };
  tags: string[];
  link: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-enterprise-adoption-2025',
    title: 'AI Enterprise Adoption 2025: Complete Implementation Guide',
    description: 'Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI.',
    type: 'guide',
    category: 'Enterprise AI',
    readTime: '20 min read',
    publishedDate: '2025-01-20',
    featured: true,
    metrics: {
      roi: '300%',
      savings: '$2.3M',
      efficiency: '70%'
    },
    tags: ['AI Strategy', 'ROI', 'Implementation'],
    link: '/blog/ai-enterprise-adoption-2025'
  },
  {
    id: 'ai-trends-2025-predictions',
    title: 'AI Trends 2025: Top 10 Predictions & Industry Insights',
    description: 'Discover the top AI trends shaping 2025. From autonomous agents to edge computing, explore transformative technologies.',
    type: 'article',
    category: 'AI Trends',
    readTime: '15 min read',
    publishedDate: '2025-01-20',
    featured: true,
    metrics: {
      efficiency: '40%',
      savings: '$2.8T',
      accuracy: '95%'
    },
    tags: ['Predictions', 'Trends', 'Future'],
    link: '/blog/ai-trends-2025-predictions'
  },
  {
    id: 'ai-autonomous-agents-2025',
    title: 'AI Autonomous Agents 2025: Enterprise Implementation Guide',
    description: 'Master autonomous AI agents with 300% ROI strategies and enterprise-ready deployment patterns.',
    type: 'guide',
    category: 'Autonomous AI',
    readTime: '18 min read',
    publishedDate: '2025-01-20',
    featured: true,
    metrics: {
      roi: '300%',
      efficiency: '85%',
      accuracy: '90%'
    },
    tags: ['Autonomous Agents', 'Automation', 'ROI'],
    link: '/blog/ai-autonomous-agents-2025'
  },
  {
    id: 'techcorp-ai-transformation',
    title: 'TechCorp: 90% Efficiency Gain with AI',
    description: 'See how TechCorp achieved $500K annual savings and 90% efficiency improvement with AI transformation.',
    type: 'case-study',
    category: 'E-commerce',
    readTime: '12 min read',
    publishedDate: '2025-01-20',
    featured: true,
    metrics: {
      efficiency: '90%',
      savings: '$500K',
      roi: '6 months'
    },
    tags: ['Success Story', 'E-commerce', 'Transformation'],
    link: '/case-studies/techcorp-ai-transformation'
  },
  {
    id: 'ai-supply-chain-optimization-2025',
    title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain',
    description: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.',
    type: 'case-study',
    category: 'Manufacturing',
    readTime: '15 min read',
    publishedDate: '2025-01-20',
    featured: true,
    metrics: {
      savings: '$12M',
      efficiency: '90%',
      accuracy: '95%'
    },
    tags: ['Supply Chain', 'Manufacturing', 'Optimization'],
    link: '/case-studies/ai-supply-chain-optimization-2025'
  },
  {
    id: 'ai-data-analytics',
    title: 'AI Data Analytics Platform',
    description: 'Transform data into actionable insights with advanced AI-powered analytics and real-time dashboards.',
    type: 'service',
    category: 'AI Services',
    readTime: '5 min read',
    publishedDate: '2025-01-20',
    featured: false,
    metrics: {
      efficiency: '300%',
      savings: '80%'
    },
    tags: ['Analytics', 'Data', 'Insights'],
    link: '/services/ai-data-analytics'
  },
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation',
    description: 'Automate complex business processes with intelligent workflow design and smart triggers.',
    type: 'service',
    category: 'AI Services',
    readTime: '5 min read',
    publishedDate: '2025-01-20',
    featured: false,
    metrics: {
      efficiency: '75%',
      savings: '60%'
    },
    tags: ['Automation', 'Workflow', 'Process'],
    link: '/services/ai-workflow-automation'
  },
  {
    id: 'ai-virtual-assistant',
    title: 'AI Virtual Assistant',
    description: '24/7 intelligent customer support with natural language processing and multi-channel capabilities.',
    type: 'service',
    category: 'AI Services',
    readTime: '5 min read',
    publishedDate: '2025-01-20',
    featured: false,
    metrics: {
      efficiency: '40%',
      savings: '60%'
    },
    tags: ['Customer Support', 'AI Assistant', '24/7'],
    link: '/services/ai-virtual-assistant'
  }
];

const categoryColors = {
  'Enterprise AI': 'bg-blue-100 text-blue-800',
  'AI Trends': 'bg-purple-100 text-purple-800',
  'Autonomous AI': 'bg-green-100 text-green-800',
  'E-commerce': 'bg-orange-100 text-orange-800',
  'Manufacturing': 'bg-cyan-100 text-cyan-800',
  'AI Services': 'bg-indigo-100 text-indigo-800'
};

const typeIcons = {
  'article': '📝',
  'case-study': '📊',
  'service': '🛠️',
  'guide': '📚'
};

export default function EnhancedContentShowcase2025() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredContent, setFilteredContent] = useState(contentItems);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredContent(contentItems);
    } else {
      setFilteredContent(contentItems.filter(item => item.type === activeFilter));
    }
  }, [activeFilter]);

  const featuredContent = contentItems.filter(item => item.featured);
  const regularContent = contentItems.filter(item => !item.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Latest AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover cutting-edge AI insights, proven strategies, and real-world success stories 
            that are transforming businesses worldwide.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Content
            </button>
            <button
              onClick={() => setActiveFilter('guide')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === 'guide'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              📚 Guides
            </button>
            <button
              onClick={() => setActiveFilter('article')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === 'article'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              📝 Articles
            </button>
            <button
              onClick={() => setActiveFilter('case-study')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === 'case-study'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              📊 Case Studies
            </button>
            <button
              onClick={() => setActiveFilter('service')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === 'service'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              🛠️ Services
            </button>
          </div>
        </div>

        {/* Featured Content */}
        {activeFilter === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              ⭐ Featured Content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredContent.map((item) => (
                <ContentCard key={item.id} item={item} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* All Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <ContentCard key={item.id} item={item} featured={false} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Get personalized AI recommendations and implementation strategies for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentCard({ item, featured }: { item: ContentItem; featured: boolean }) {
  return (
    <Link href={item.link} className="group">
      <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
        featured ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-white' : 'border-gray-200 hover:border-blue-300'
      }`}>
        {featured && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-t-xl">
            <div className="flex items-center gap-2">
              <span className="text-lg">⭐</span>
              <span className="font-semibold">Featured Content</span>
            </div>
          </div>
        )}
        
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{typeIcons[item.type]}</span>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[item.category]}`}>
                {item.category}
              </span>
            </div>
            <span className="text-sm text-gray-500">{item.readTime}</span>
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
          {item.metrics && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {item.metrics.roi && (
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                  <div className="text-xs text-gray-500">ROI</div>
                </div>
              )}
              {item.metrics.savings && (
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                  <div className="text-xs text-gray-500">Savings</div>
                </div>
              )}
              {item.metrics.efficiency && (
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">{item.metrics.efficiency}</div>
                  <div className="text-xs text-gray-500">Efficiency</div>
                </div>
              )}
              {item.metrics.accuracy && (
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-600">{item.metrics.accuracy}</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
              )}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{item.publishedDate}</span>
            <span className="text-blue-600 font-semibold group-hover:text-blue-800">
              {item.type === 'service' ? 'Learn More' : 'Read More'} →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}