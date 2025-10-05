import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'guide';
  readTime: string;
  publishDate: string;
  category: string;
  featured?: boolean;
  href: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI-Powered Enterprise Solutions',
    description: 'Discover how our AI solutions are transforming enterprise operations and driving unprecedented growth.',
    type: 'blog',
    readTime: '5 min read',
    publishDate: '2026-01-15',
    category: 'AI Solutions',
    featured: true,
    href: '/blog/ai-enterprise-solutions',
    metrics: [
      { label: 'Views', value: '12.5K' },
      { label: 'Shares', value: '847' }
    ]
  },
  {
    id: '2',
    title: 'Quantum Computing Breakthroughs',
    description: 'Explore the latest advances in quantum computing and their applications in modern business.',
    type: 'case-study',
    readTime: '7 min read',
    publishDate: '2026-01-12',
    category: 'Technology',
    featured: true,
    href: '/case-studies/quantum-computing',
    metrics: [
      { label: 'Views', value: '8.2K' },
      { label: 'Shares', value: '523' }
    ]
  },
  {
    id: '3',
    title: 'Automation Best Practices',
    description: 'Learn the essential strategies for implementing successful automation in your organization.',
    type: 'guide',
    readTime: '4 min read',
    publishDate: '2026-01-10',
    category: 'Automation',
    featured: false,
    href: '/guides/automation-best-practices',
    metrics: [
      { label: 'Views', value: '6.8K' },
      { label: 'Shares', value: '312' }
    ]
  }
];

const EnhancedContentShowcase2026: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredItems = selectedType === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === selectedType);

  const typeColors = {
    blog: 'bg-blue-100 text-blue-800',
    'case-study': 'bg-green-100 text-green-800',
    guide: 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enhanced Content Showcase 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest insights, case studies, and technical deep-dives
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            {['all', 'blog', 'case-study', 'guide'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedType === type
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {type === 'all' ? 'All Content' : type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${typeColors[item.type]}`}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1).replace('-', ' ')}
                  </span>
                  {item.featured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    {item.readTime}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(item.publishDate).toLocaleDateString()}
                  </span>
                </div>

                {item.metrics && (
                  <div className="flex space-x-4 mb-4">
                    {item.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  to={item.href}
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/content"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Content
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2026;