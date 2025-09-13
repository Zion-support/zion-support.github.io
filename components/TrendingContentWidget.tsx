import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface TrendingItem {
  id: string;
  title: string;
  href: string;
  type: 'blog' | 'case-study' | 'service' | 'resource';
  category: string;
  views: number;
  trend: 'up' | 'down' | 'stable';
  change: number;
}

const TrendingContentWidget: React.FC = () => {
  const [trendingItems, setTrendingItems] = useState<TrendingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchTrendingContent = async () => {
      setIsLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockData: TrendingItem[] = [
        {
          id: '1',
          title: 'AI Neural Architecture Revolution 2025',
          href: '/blog/ai-2025-neural-architecture-revolution',
          type: 'blog',
          category: 'AI Architecture',
          views: 15420,
          trend: 'up',
          change: 23
        },
        {
          id: '2',
          title: 'AI Manufacturing Transformation: $200M Success',
          href: '/case-studies/ai-manufacturing-transformation-2025',
          type: 'case-study',
          category: 'Case Study',
          views: 12850,
          trend: 'up',
          change: 18
        },
        {
          id: '3',
          title: 'Quantum Machine Learning 2025',
          href: '/blog/ai-2025-quantum-machine-learning',
          type: 'blog',
          category: 'Quantum AI',
          views: 11200,
          trend: 'up',
          change: 15
        },
        {
          id: '4',
          title: 'AI Ethical Governance Framework 2025',
          href: '/blog/ai-2025-ethical-governance-framework',
          type: 'blog',
          category: 'AI Ethics',
          views: 9850,
          trend: 'up',
          change: 12
        },
        {
          id: '5',
          title: 'AI Implementation Master Guide 2026',
          href: '/resources/ai-implementation-master-guide-2026',
          type: 'resource',
          category: 'Implementation',
          views: 8750,
          trend: 'stable',
          change: 2
        }
      ];
      
      setTrendingItems(mockData);
      setIsLoading(false);
    };

    fetchTrendingContent();
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'service':
        return '🚀';
      case 'resource':
        return '📚';
      default:
        return '✨';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Architecture':
        return 'bg-blue-100 text-blue-800';
      case 'Quantum AI':
        return 'bg-purple-100 text-purple-800';
      case 'AI Ethics':
        return 'bg-green-100 text-green-800';
      case 'Case Study':
        return 'bg-emerald-100 text-emerald-800';
      case 'Implementation':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return '📈';
      case 'down':
        return '📉';
      case 'stable':
        return '➡️';
      default:
        return '📊';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      case 'stable':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">🔥</span>
          <h3 className="text-xl font-bold text-gray-900">Trending Content</h3>
        </div>
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">🔥</span>
        <h3 className="text-xl font-bold text-gray-900">Trending Content</h3>
        <span className="text-sm text-gray-500">Live</span>
      </div>
      
      <div className="space-y-4">
        {trendingItems.map((item, index) => (
          <Link key={item.id} href={item.href} className="group">
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0">
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {getTypeIcon(item.type)}
                </span>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">#{index + 1}</span>
                </div>
                
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    👁️ {formatViews(item.views)} views
                  </span>
                  <span className={`flex items-center gap-1 ${getTrendColor(item.trend)}`}>
                    {getTrendIcon(item.trend)} +{item.change}%
                  </span>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <Link 
          href="/content-showcase"
          className="flex items-center justify-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors"
        >
          View All Content
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default TrendingContentWidget;