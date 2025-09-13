import React from 'react';
import Link from 'next/link';

interface TrendingTopic {
  title: string;
  href: string;
  category: string;
  trend: 'up' | 'down' | 'stable';
  readTime: string;
  hot?: boolean;
}

const trendingTopics: TrendingTopic[] = [
  {
    title: 'Advanced Neural Networks 2025',
    href: '/blog/ai-2025-advanced-neural-networks',
    category: 'AI Architecture',
    trend: 'up',
    readTime: '25 min',
    hot: true
  },
  {
    title: 'Enterprise AI Governance',
    href: '/blog/ai-2025-enterprise-ai-governance',
    category: 'AI Ethics',
    trend: 'up',
    readTime: '20 min',
    hot: true
  },
  {
    title: '$2.3B Manufacturing Success',
    href: '/case-studies/ai-transformation-global-manufacturing-giant-2025',
    category: 'Case Study',
    trend: 'up',
    readTime: '30 min'
  },
  {
    title: 'AI Implementation Framework',
    href: '/resources/ai-implementation-success-framework-2025',
    category: 'Implementation',
    trend: 'up',
    readTime: '35 min'
  },
  {
    title: 'Quantum Computing Breakthrough',
    href: '/blog/ai-2025-quantum-computing-breakthrough',
    category: 'Quantum AI',
    trend: 'stable',
    readTime: '22 min'
  },
  {
    title: 'Multimodal AI Revolution',
    href: '/blog/ai-2025-multimodal-revolution',
    category: 'AI Technology',
    trend: 'up',
    readTime: '18 min'
  }
];

const TrendingTopicsWidget: React.FC = () => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return '📈';
      case 'down':
        return '📉';
      default:
        return '➡️';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Architecture':
        return 'bg-purple-100 text-purple-800';
      case 'AI Ethics':
        return 'bg-green-100 text-green-800';
      case 'Case Study':
        return 'bg-orange-100 text-orange-800';
      case 'Implementation':
        return 'bg-blue-100 text-blue-800';
      case 'Quantum AI':
        return 'bg-indigo-100 text-indigo-800';
      case 'AI Technology':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">🔥 Trending Topics</h3>
        <div className="flex items-center text-sm text-gray-500">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Live
        </div>
      </div>
      
      <div className="space-y-4">
        {trendingTopics.map((topic, index) => (
          <Link
            key={index}
            href={topic.href}
            className="group block p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                  {topic.title}
                </h4>
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(topic.category)}`}>
                    {topic.category}
                  </span>
                  {topic.hot && (
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                      HOT
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>{getTrendIcon(topic.trend)}</span>
                <span>{topic.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <Link
          href="/content-showcase"
          className="block text-center text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          View All Trending Content →
        </Link>
      </div>
    </div>
  );
};

export default TrendingTopicsWidget;