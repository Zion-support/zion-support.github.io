import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
  category: string;
  readTime: string;
  description: string;
  featured?: boolean;
  new?: boolean;
}

const contentRecommendations: ContentItem[] = [
  {
    title: 'Advanced Neural Networks 2025',
    href: '/blog/ai-2025-advanced-neural-networks',
    type: 'blog',
    category: 'AI Architecture',
    readTime: '25 min',
    description: 'Next-generation AI architecture with quantum-enhanced models and self-evolving networks',
    featured: true,
    new: true
  },
  {
    title: 'Enterprise AI Governance Framework',
    href: '/blog/ai-2025-enterprise-ai-governance',
    type: 'blog',
    category: 'AI Ethics',
    readTime: '20 min',
    description: 'Comprehensive framework for building trust and compliance in AI systems',
    featured: true,
    new: true
  },
  {
    title: '$2.3B Manufacturing Success Story',
    href: '/case-studies/ai-transformation-global-manufacturing-giant-2025',
    type: 'case-study',
    category: 'Manufacturing',
    readTime: '30 min',
    description: 'Fortune 100 manufacturing giant achieves unprecedented growth through AI transformation',
    featured: true
  },
  {
    title: 'AI Implementation Success Framework',
    href: '/resources/ai-implementation-success-framework-2025',
    type: 'resource',
    category: 'Implementation',
    readTime: '35 min',
    description: 'Complete guide to successful AI implementation in enterprise environments',
    featured: true,
    new: true
  },
  {
    title: 'AI Healthcare Diagnosis Revolution',
    href: '/blog/ai-2025-healthcare-diagnosis-revolution',
    type: 'blog',
    category: 'Healthcare',
    readTime: '22 min',
    description: '95-98% diagnostic accuracy transforming medical care worldwide'
  },
  {
    title: 'Quantum Computing Business Impact',
    href: '/blog/quantum-computing-business-impact-2025',
    type: 'blog',
    category: 'Quantum Computing',
    readTime: '18 min',
    description: 'How quantum computing is revolutionizing business operations and AI capabilities'
  }
];

const ContentRecommendationWidget: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-orange-100 text-orange-800';
      case 'resource':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Architecture':
        return 'bg-purple-100 text-purple-800';
      case 'AI Ethics':
        return 'bg-green-100 text-green-800';
      case 'Manufacturing':
        return 'bg-orange-100 text-orange-800';
      case 'Implementation':
        return 'bg-blue-100 text-blue-800';
      case 'Healthcare':
        return 'bg-red-100 text-red-800';
      case 'Quantum Computing':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">💡 Recommended for You</h3>
        <div className="text-sm text-gray-500">
          Based on your interests
        </div>
      </div>
      
      <div className="space-y-4">
        {contentRecommendations.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 hover:border-blue-200"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="text-2xl">{getTypeIcon(item.type)}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                    {item.title}
                  </h4>
                  {item.featured && (
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                  {item.new && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center space-x-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                    {item.type.toUpperCase()}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link
            href="/content-showcase"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Explore All Content →
          </Link>
          <button className="text-sm text-gray-500 hover:text-gray-700">
            Refresh Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentRecommendationWidget;