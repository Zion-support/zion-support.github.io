import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface TrendingTopic {
  id: string;
  title: string;
  category: string;
  url: string;
  trend: 'up' | 'down' | 'stable';
  views: number;
  engagement: number;
  publishDate: string;
}

const trendingTopics: TrendingTopic[] = [
  {
    id: '1',
    title: 'AI Agents 2025: Autonomous Intelligence Revolution',
    category: 'AI Agents',
    url: '/blog/ai-2025-advanced-ai-agents',
    trend: 'up',
    views: 15420,
    engagement: 89,
    publishDate: '2025-01-20'
  },
  {
    id: '2',
    title: 'Smart Manufacturing: Industry 4.0 AI Transformation',
    category: 'Manufacturing',
    url: '/blog/ai-2025-smart-manufacturing-revolution',
    trend: 'up',
    views: 12850,
    engagement: 92,
    publishDate: '2025-01-18'
  },
  {
    id: '3',
    title: 'Financial Services AI: 450% ROI Success Story',
    category: 'Case Study',
    url: '/case-studies/ai-2025-financial-services-ai-transformation-success',
    trend: 'up',
    views: 18750,
    engagement: 95,
    publishDate: '2025-01-16'
  },
  {
    id: '4',
    title: 'AI Implementation Master Checklist 2025',
    category: 'Resources',
    url: '/resources/ai-2025-implementation-master-checklist',
    trend: 'up',
    views: 11200,
    engagement: 87,
    publishDate: '2025-01-15'
  },
  {
    id: '5',
    title: 'AI Advanced Automation: Business Transformation',
    category: 'Automation',
    url: '/blog/ai-2025-advanced-automation',
    trend: 'stable',
    views: 25600,
    engagement: 91,
    publishDate: '2025-01-15'
  },
  {
    id: '6',
    title: 'Quantum Computing Business Revolution 2025',
    category: 'Quantum Tech',
    url: '/blog/quantum-computing-business-revolution-2025',
    trend: 'up',
    views: 9850,
    engagement: 85,
    publishDate: '2025-01-14'
  },
  {
    id: '7',
    title: 'AI Healthcare Diagnosis Revolution',
    category: 'Healthcare',
    url: '/blog/ai-2025-healthcare-diagnosis-revolution',
    trend: 'up',
    views: 14200,
    engagement: 88,
    publishDate: '2025-01-12'
  },
  {
    id: '8',
    title: 'AI Cybersecurity Advanced Protection 2025',
    category: 'Cybersecurity',
    url: '/blog/ai-2025-cybersecurity-advanced',
    trend: 'up',
    views: 16800,
    engagement: 90,
    publishDate: '2025-01-10'
  }
];

const TrendingTopicsWidget: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredTopics, setFilteredTopics] = useState<TrendingTopic[]>(trendingTopics);

  const categories = ['all', 'AI Agents', 'Manufacturing', 'Case Study', 'Resources', 'Automation', 'Quantum Tech', 'Healthcare', 'Cybersecurity'];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredTopics(trendingTopics);
    } else {
      setFilteredTopics(trendingTopics.filter(topic => topic.category === selectedCategory));
    }
  }, [selectedCategory]);

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

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">🔥 Trending Topics</h2>
        <div className="flex items-center text-sm text-gray-600">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Live Updates
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category === 'all' ? 'All Topics' : category}
          </button>
        ))}
      </div>

      {/* Trending Topics List */}
      <div className="space-y-4">
        {filteredTopics.slice(0, 6).map((topic, index) => (
          <Link
            key={topic.id}
            href={topic.url}
            className="group block p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold text-gray-400 mr-3">#{index + 1}</span>
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {topic.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {topic.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 space-x-4">
                  <span className="flex items-center">
                    👁️ {formatNumber(topic.views)} views
                  </span>
                  <span className="flex items-center">
                    💬 {topic.engagement}% engagement
                  </span>
                  <span className="flex items-center">
                    {getTrendIcon(topic.trend)} <span className={`ml-1 ${getTrendColor(topic.trend)}`}>
                      Trending {topic.trend}
                    </span>
                  </span>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  {topic.category.charAt(0)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6 text-center">
        <Link
          href="/content-showcase"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          View All Trending Content
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Stats Summary */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">{trendingTopics.length}</div>
            <div className="text-sm text-gray-600">Total Topics</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {Math.round(trendingTopics.reduce((acc, topic) => acc + topic.engagement, 0) / trendingTopics.length)}%
            </div>
            <div className="text-sm text-gray-600">Avg Engagement</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">
              {formatNumber(trendingTopics.reduce((acc, topic) => acc + topic.views, 0))}
            </div>
            <div className="text-sm text-gray-600">Total Views</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopicsWidget;