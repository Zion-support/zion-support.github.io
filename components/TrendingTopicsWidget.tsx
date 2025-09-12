import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface TrendingTopic {
  id: string;
  title: string;
  category: string;
  views: number;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
  url: string;
  tags: string[];
  publishDate: string;
  readTime: string;
}

const trendingTopics: TrendingTopic[] = [
  {
    id: '1',
    title: 'AI Advanced Automation 2025: Complete Business Transformation Guide',
    category: 'AI & Automation',
    views: 2340,
    trend: 'up',
    changePercent: 15,
    url: '/blog/ai-2025-advanced-automation',
    tags: ['AI', 'Automation', 'Business', '2025'],
    publishDate: '2025-01-15',
    readTime: '15 min'
  },
  {
    id: '2',
    title: 'Quantum Computing Business Revolution 2025: The Next Frontier',
    category: 'Quantum Technology',
    views: 1890,
    trend: 'up',
    changePercent: 22,
    url: '/blog/quantum-computing-business-revolution-2025',
    tags: ['Quantum', 'Computing', 'Business', 'Innovation'],
    publishDate: '2025-01-14',
    readTime: '18 min'
  },
  {
    id: '3',
    title: 'AI Implementation Success Framework 2025: Complete Guide',
    category: 'Implementation',
    views: 3120,
    trend: 'up',
    changePercent: 8,
    url: '/resources/ai-implementation-success-framework-2025',
    tags: ['AI', 'Implementation', 'Framework', 'Success'],
    publishDate: '2025-01-13',
    readTime: '45 min'
  },
  {
    id: '4',
    title: 'Multimodal AI Revolution: Beyond Text and Images',
    category: 'AI Innovation',
    views: 1560,
    trend: 'up',
    changePercent: 12,
    url: '/blog/ai-2025-multimodal-revolution',
    tags: ['AI', 'Multimodal', 'Innovation', 'Technology'],
    publishDate: '2025-01-12',
    readTime: '12 min'
  },
  {
    id: '5',
    title: 'Enterprise AI Security: Advanced Threat Protection',
    category: 'Security',
    views: 2780,
    trend: 'up',
    changePercent: 18,
    url: '/resources/ai-enterprise-security-2025',
    tags: ['AI', 'Security', 'Enterprise', 'Protection'],
    publishDate: '2025-01-11',
    readTime: '30 min'
  },
  {
    id: '6',
    title: 'Robotics & Automation: The Future of Manufacturing',
    category: 'Robotics',
    views: 1420,
    trend: 'up',
    changePercent: 25,
    url: '/blog/ai-2025-robotics-automation',
    tags: ['Robotics', 'Automation', 'Manufacturing', 'Future'],
    publishDate: '2025-01-10',
    readTime: '14 min'
  },
  {
    id: '7',
    title: 'AI Data Strategy: Building Enterprise Data Foundations',
    category: 'Data Strategy',
    views: 1980,
    trend: 'up',
    changePercent: 6,
    url: '/resources/ai-data-strategy-enterprise-2025',
    tags: ['AI', 'Data', 'Strategy', 'Enterprise'],
    publishDate: '2025-01-09',
    readTime: '35 min'
  },
  {
    id: '8',
    title: 'Sustainability & Green Tech: AI for Environmental Impact',
    category: 'Sustainability',
    views: 1650,
    trend: 'up',
    changePercent: 20,
    url: '/blog/ai-2025-sustainability-green-tech',
    tags: ['AI', 'Sustainability', 'Green Tech', 'Environment'],
    publishDate: '2025-01-08',
    readTime: '16 min'
  }
];

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case 'up': return '📈';
    case 'down': return '📉';
    default: return '➡️';
  }
};

const getTrendColor = (trend: string) => {
  switch (trend) {
    case 'up': return 'text-green-600';
    case 'down': return 'text-red-600';
    default: return 'text-gray-600';
  }
};

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    'AI & Automation': 'bg-blue-100 text-blue-800',
    'Quantum Technology': 'bg-purple-100 text-purple-800',
    'Implementation': 'bg-green-100 text-green-800',
    'AI Innovation': 'bg-pink-100 text-pink-800',
    'Security': 'bg-red-100 text-red-800',
    'Robotics': 'bg-orange-100 text-orange-800',
    'Data Strategy': 'bg-cyan-100 text-cyan-800',
    'Sustainability': 'bg-emerald-100 text-emerald-800'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
};

export default function TrendingTopicsWidget() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('views');

  const categories = ['All', ...Array.from(new Set(trendingTopics.map(topic => topic.category)))];

  const filteredTopics = selectedCategory === 'All' 
    ? trendingTopics 
    : trendingTopics.filter(topic => topic.category === selectedCategory);

  const sortedTopics = [...filteredTopics].sort((a, b) => {
    switch (sortBy) {
      case 'views':
        return b.views - a.views;
      case 'trend':
        return b.changePercent - a.changePercent;
      case 'recent':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      default:
        return 0;
    }
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Trending Topics</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="views">Most Views</option>
            <option value="trend">Trending</option>
            <option value="recent">Most Recent</option>
          </select>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Trending Topics List */}
      <div className="space-y-4">
        {sortedTopics.slice(0, 8).map((topic, index) => (
          <div key={topic.id} className="group">
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                  {index + 1}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(topic.category)}`}>
                    {topic.category}
                  </span>
                  <span className="text-xs text-gray-500">{topic.readTime}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">{topic.publishDate}</span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  <Link href={topic.url}>
                    {topic.title}
                  </Link>
                </h4>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-600">👁️</span>
                      <span className="text-sm font-medium text-gray-900">{topic.views.toLocaleString()}</span>
                    </div>
                    <div className={`flex items-center space-x-1 ${getTrendColor(topic.trend)}`}>
                      <span className="text-sm">{getTrendIcon(topic.trend)}</span>
                      <span className="text-sm font-medium">+{topic.changePercent}%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {topic.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <Link
          href="/content-showcase"
          className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All Trending Content
        </Link>
      </div>

      {/* Stats Summary */}
      <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {trendingTopics.reduce((sum, topic) => sum + topic.views, 0).toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Total Views</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {trendingTopics.length}
          </div>
          <div className="text-sm text-gray-600">Active Topics</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">
            +{Math.round(trendingTopics.reduce((sum, topic) => sum + topic.changePercent, 0) / trendingTopics.length)}%
          </div>
          <div className="text-sm text-gray-600">Avg Growth</div>
        </div>
      </div>
    </div>
  );
}