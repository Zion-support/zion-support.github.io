import React, { useState, useEffect } from 'react';

interface ContentItem {
  id: string;
  title: string;
  type: 'page' | 'blog' | 'case-study' | 'resource';
  status: 'published' | 'draft' | 'archived';
  views: number;
  engagement: number;
  lastUpdated: string;
  seoScore: number;
}

export default function ContentManagementSystem() {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<'all' | 'published' | 'draft' | 'archived'>('all');
  const [sortBy, setSortBy] = useState<'views' | 'engagement' | 'seo' | 'updated'>('views');

  useEffect(() => {
    // Simulate content data
    const generateContent = () => {
      const contentTypes = ['page', 'blog', 'case-study', 'resource'] as const;
      const statuses = ['published', 'draft', 'archived'] as const;
      
      const items: ContentItem[] = [
        {
          id: 'ai-2025-breakthrough',
          title: 'AI 2025 Ultimate Breakthrough Revolution',
          type: 'page',
          status: 'published',
          views: 15420,
          engagement: 89.5,
          lastUpdated: '2025-01-08',
          seoScore: 94
        },
        {
          id: 'global-transformation-case',
          title: 'Global Transformation Breakthrough - 10,000% ROI',
          type: 'case-study',
          status: 'published',
          views: 12850,
          engagement: 92.3,
          lastUpdated: '2025-01-08',
          seoScore: 91
        },
        {
          id: 'ai-2025-trends-predictions',
          title: 'AI 2025 Revolutionary Trends & Predictions',
          type: 'blog',
          status: 'published',
          views: 11200,
          engagement: 87.1,
          lastUpdated: '2025-01-08',
          seoScore: 88
        },
        {
          id: 'quantum-computing-2030',
          title: 'Quantum Computing Breakthrough 2030',
          type: 'page',
          status: 'published',
          views: 9850,
          engagement: 85.7,
          lastUpdated: '2025-01-08',
          seoScore: 90
        },
        {
          id: 'neural-consciousness-breakthrough',
          title: 'AI 2026 Neural Consciousness Breakthrough',
          type: 'page',
          status: 'published',
          views: 8750,
          engagement: 83.2,
          lastUpdated: '2025-01-08',
          seoScore: 87
        },
        {
          id: 'automation-implementation-guide',
          title: 'AI 2025 Automation Implementation Guide',
          type: 'resource',
          status: 'published',
          views: 7200,
          engagement: 91.8,
          lastUpdated: '2025-01-08',
          seoScore: 93
        },
        {
          id: 'ultimate-content-showcase-2026',
          title: 'Ultimate Content Showcase 2026',
          type: 'page',
          status: 'published',
          views: 6500,
          engagement: 79.4,
          lastUpdated: '2025-01-08',
          seoScore: 85
        },
        {
          id: 'ai-2026-healthcare-breakthrough',
          title: 'AI 2026 Neural Consciousness Healthcare Breakthrough',
          type: 'case-study',
          status: 'published',
          views: 5800,
          engagement: 88.6,
          lastUpdated: '2025-01-08',
          seoScore: 89
        },
        {
          id: 'quantum-neural-fusion',
          title: 'AI 2026 Quantum Neural Fusion Breakthrough',
          type: 'page',
          status: 'draft',
          views: 0,
          engagement: 0,
          lastUpdated: '2025-01-08',
          seoScore: 76
        },
        {
          id: 'future-predictions-2030',
          title: 'AI 2026-2030 Future Predictions Breakthrough',
          type: 'blog',
          status: 'draft',
          views: 0,
          engagement: 0,
          lastUpdated: '2025-01-08',
          seoScore: 82
        }
      ];

      setContent(items);
    };

    generateContent();
    const interval = setInterval(() => {
      setContent(prev => prev.map(item => ({
        ...item,
        views: item.status === 'published' ? item.views + Math.floor(Math.random() * 5) : item.views,
        engagement: item.status === 'published' ? Math.min(100, item.engagement + Math.random() * 0.5) : item.engagement
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredContent = content.filter(item => 
    filter === 'all' || item.status === filter
  ).sort((a, b) => {
    switch (sortBy) {
      case 'views': return b.views - a.views;
      case 'engagement': return b.engagement - a.engagement;
      case 'seo': return b.seoScore - a.seoScore;
      case 'updated': return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      default: return 0;
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20';
      case 'draft': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20';
      case 'archived': return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20';
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page': return '📄';
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200"
      >
        {isVisible ? 'Hide' : 'Show'} CMS
      </button>

      {isVisible && (
        <div className="absolute bottom-16 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-96 border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Content Management System
          </h3>
          
          {/* Filters and Controls */}
          <div className="mb-4 space-y-2">
            <div className="flex space-x-2">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
              >
                <option value="all">All Content</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
              >
                <option value="views">Sort by Views</option>
                <option value="engagement">Sort by Engagement</option>
                <option value="seo">Sort by SEO</option>
                <option value="updated">Sort by Updated</option>
              </select>
            </div>
          </div>

          {/* Content List */}
          <div className="space-y-2">
            {filteredContent.map((item) => (
              <div key={item.id} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{getTypeIcon(item.type)}</span>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {item.title}
                    </h4>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 dark:text-gray-300">
                  <div>
                    <span className="font-medium">Views:</span> {formatNumber(item.views)}
                  </div>
                  <div>
                    <span className="font-medium">Engagement:</span> {item.engagement.toFixed(1)}%
                  </div>
                  <div>
                    <span className="font-medium">SEO:</span> {item.seoScore}
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Updated: {item.lastUpdated}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-600 dark:text-gray-300">Total Content:</span>
                <span className="ml-2 font-medium text-gray-900 dark:text-white">
                  {content.length}
                </span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-300">Published:</span>
                <span className="ml-2 font-medium text-green-600 dark:text-green-400">
                  {content.filter(item => item.status === 'published').length}
                </span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-300">Total Views:</span>
                <span className="ml-2 font-medium text-blue-600 dark:text-blue-400">
                  {formatNumber(content.reduce((sum, item) => sum + item.views, 0))}
                </span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-300">Avg SEO:</span>
                <span className="ml-2 font-medium text-purple-600 dark:text-purple-400">
                  {Math.round(content.reduce((sum, item) => sum + item.seoScore, 0) / content.length)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}