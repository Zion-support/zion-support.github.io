import React, { useState, useEffect } from 'react';

interface ContentStats {
  totalArticles: number;
  totalViews: number;
  averageEngagement: number;
  topCategories: {
    name: string;
    count: number;
    percentage: number;
  }[];
  monthlyGrowth: {
    month: string;
    views: number;
    articles: number;
  }[];
  topPerforming: {
    title: string;
    views: number;
    engagement: number;
    category: string;
  }[];
}

const ContentStatistics: React.FC = () => {
  const [stats, setStats] = useState<ContentStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('month');

  // Mock data - in a real app, this would come from an API
  const mockStats: ContentStats = {
    totalArticles: 28,
    totalViews: 156750,
    averageEngagement: 89.2,
    topCategories: [
      { name: 'AI Transformation', count: 8, percentage: 28.6 },
      { name: 'Enterprise Architecture', count: 6, percentage: 21.4 },
      { name: 'Cost Optimization', count: 5, percentage: 17.9 },
      { name: 'AI Agents', count: 4, percentage: 14.3 },
      { name: 'Mega Trends', count: 3, percentage: 10.7 },
      { name: 'Success Stories', count: 2, percentage: 7.1 }
    ],
    monthlyGrowth: [
      { month: 'Jan 2025', views: 12500, articles: 3 },
      { month: 'Feb 2025', views: 18750, articles: 4 },
      { month: 'Mar 2025', views: 22300, articles: 5 },
      { month: 'Apr 2025', views: 28900, articles: 6 },
      { month: 'May 2025', views: 31200, articles: 4 },
      { month: 'Jun 2025', views: 35600, articles: 6 }
    ],
    topPerforming: [
      { title: 'AI Enterprise Transformation: $50M Annual Savings Blueprint', views: 18750, engagement: 97, category: 'Success Story' },
      { title: 'AI 2025-2026 Mega Trends Breakthrough', views: 12500, engagement: 94, category: 'Mega Trends' },
      { title: 'AI Cost Optimization Breakthrough 2026', views: 9800, engagement: 92, category: 'Cost Optimization' },
      { title: 'AI 2026: Autonomous Enterprise Architecture Revolution', views: 8900, engagement: 91, category: 'Architecture' },
      { title: 'AI 2026: Autonomous Agent Factories Revolution', views: 7200, engagement: 88, category: 'AI Agents' }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats(mockStats);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  if (loading) {
    return (
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(item => (
              <div key={item} className="bg-gray-100 rounded-lg p-6 animate-pulse">
                <div className="h-8 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Content Performance Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time analytics and engagement metrics showcasing the impact of our AI content
          </p>
        </div>

        {/* Period selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1">
            {(['week', 'month', 'year'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedPeriod === period
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">
              {stats.totalArticles}
            </div>
            <div className="text-gray-700 font-medium">Total Articles</div>
            <div className="text-sm text-gray-500 mt-1">+12% this month</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {formatNumber(stats.totalViews)}
            </div>
            <div className="text-gray-700 font-medium">Total Views</div>
            <div className="text-sm text-gray-500 mt-1">+28% this month</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {stats.averageEngagement}%
            </div>
            <div className="text-gray-700 font-medium">Avg Engagement</div>
            <div className="text-sm text-gray-500 mt-1">+5% this month</div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {stats.topPerforming.length}
            </div>
            <div className="text-gray-700 font-medium">Top Performers</div>
            <div className="text-sm text-gray-500 mt-1">90%+ engagement</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Categories */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Content Categories</h3>
            <div className="space-y-4">
              {stats.topCategories.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 mr-3"></div>
                    <span className="text-gray-700 font-medium">{category.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">
                      {category.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performing Articles */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Top Performing Articles</h3>
            <div className="space-y-4">
              {stats.topPerforming.slice(0, 5).map((article, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate">
                      {article.title}
                    </div>
                    <div className="text-xs text-gray-500">{article.category}</div>
                  </div>
                  <div className="flex items-center space-x-4 ml-4">
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">
                        {formatNumber(article.views)}
                      </div>
                      <div className="text-xs text-gray-500">views</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">
                        {article.engagement}%
                      </div>
                      <div className="text-xs text-gray-500">engagement</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Growth Chart */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Content Growth Trend</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.monthlyGrowth.map((month) => (
              <div key={month.month} className="text-center">
                <div className="text-sm text-gray-600 mb-2">{month.month}</div>
                <div className="bg-indigo-500 rounded-t-lg mx-auto mb-2" style={{ height: `${(month.views / 40000) * 100}px`, width: '20px' }}></div>
                <div className="text-xs text-gray-500">{formatNumber(month.views)} views</div>
                <div className="text-xs text-gray-400">{month.articles} articles</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Create Impactful Content?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our content creation program and get access to our proven frameworks for 
              creating high-engagement AI content that drives business results.
            </p>
            <div className="space-x-4">
              <a
                href="/contact"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Join Content Program
              </a>
              <a
                href="/blog"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Explore All Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;