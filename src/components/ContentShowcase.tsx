import React from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishDate: string;
  image?: string;
  featured?: boolean;
  tags?: string[];
}

interface ContentShowcaseProps {
  title?: string;
  subtitle?: string;
  items?: ContentItem[];
  maxItems?: number;
  showCategories?: boolean;
  showTags?: boolean;
}

const ContentShowcase: React.FC<ContentShowcaseProps> = ({
  title = "Latest Content",
  subtitle = "Discover our latest insights, tutorials, and industry updates",
  items = [],
  maxItems = 6,
  showCategories = true,
  showTags = true
}) => {
  // Default content items if none provided
  const defaultItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI Implementation Guide 2025',
      description: 'Complete roadmap for enterprise AI adoption with practical examples and best practices.',
      category: 'AI Strategy',
      readTime: '15 min read',
      publishDate: '2025-01-15',
      featured: true,
      tags: ['AI', 'Strategy', 'Enterprise']
    },
    {
      id: '2',
      title: 'ROI Optimization Strategies',
      description: 'Maximize returns on your AI investments with proven optimization techniques.',
      category: 'Business',
      readTime: '12 min read',
      publishDate: '2025-01-12',
      tags: ['ROI', 'Optimization', 'Business']
    },
    {
      id: '3',
      title: 'Technical Deep Dive: Neural Networks',
      description: 'Advanced concepts for AI practitioners with hands-on examples and code.',
      category: 'Technical',
      readTime: '20 min read',
      publishDate: '2025-01-10',
      tags: ['Neural Networks', 'Technical', 'Deep Learning']
    },
    {
      id: '4',
      title: 'Industry Case Studies',
      description: 'Real-world AI success stories from leading companies across industries.',
      category: 'Case Studies',
      readTime: '10 min read',
      publishDate: '2025-01-08',
      tags: ['Case Studies', 'Success Stories', 'Industry']
    },
    {
      id: '5',
      title: 'Future of AI Technology',
      description: 'Trends and predictions for 2025 and beyond in artificial intelligence.',
      category: 'Trends',
      readTime: '18 min read',
      publishDate: '2025-01-05',
      tags: ['Future', 'Trends', 'Predictions']
    },
    {
      id: '6',
      title: 'AI Security Best Practices',
      description: 'Essential security measures for AI systems and data protection.',
      category: 'Security',
      readTime: '14 min read',
      publishDate: '2025-01-03',
      tags: ['Security', 'Best Practices', 'AI Safety']
    }
  ];

  const displayItems = items.length > 0 ? items.slice(0, maxItems) : defaultItems.slice(0, maxItems);

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      'AI Strategy': 'bg-blue-100 text-blue-800',
      'Business': 'bg-green-100 text-green-800',
      'Technical': 'bg-purple-100 text-purple-800',
      'Case Studies': 'bg-orange-100 text-orange-800',
      'Trends': 'bg-pink-100 text-pink-800',
      'Security': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
                item.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {item.image && (
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {item.title.charAt(0)}
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  {showCategories && (
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  )}
                  {item.featured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {showTags && item.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{item.readTime}</span>
                  <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                </div>

                <Link
                  to={`/content/${item.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Content
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;