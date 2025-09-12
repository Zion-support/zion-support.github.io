import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface TrendingItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  readTime: string;
  category: string;
  views: number;
  growth: number;
  href: string;
  icon: string;
  rank: number;
}

const TrendingContentWidget: React.FC = () => {
  const [trendingContent, setTrendingContent] = useState<TrendingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to get trending content
    const fetchTrendingContent = async () => {
      setIsLoading(true);
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const content: TrendingItem[] = [
        {
          id: 'llm-optimization',
          title: 'LLM Optimization Masterclass',
          description: 'Master Large Language Model optimization with 10x performance improvements',
          type: 'blog',
          readTime: '25 min read',
          category: 'AI Optimization',
          views: 15420,
          growth: 340,
          href: '/blog/ai-2025-llm-optimization-masterclass',
          icon: '🚀',
          rank: 1
        },
        {
          id: 'edge-computing',
          title: 'Edge Computing Revolution',
          description: '10x performance with AI at the edge, ultra-low latency processing',
          type: 'blog',
          readTime: '22 min read',
          category: 'Edge AI',
          views: 12850,
          growth: 280,
          href: '/blog/ai-2025-edge-computing-revolution',
          icon: '⚡',
          rank: 2
        },
        {
          id: 'manufacturing-ai',
          title: 'Manufacturing AI Revolution',
          description: 'Fortune 100 transformation with $2.8B value creation',
          type: 'case-study',
          readTime: '20 min read',
          category: 'Success Stories',
          views: 11200,
          growth: 250,
          href: '/case-studies/ai-2025-global-manufacturing-ai-revolution',
          icon: '🏆',
          rank: 3
        },
        {
          id: 'enterprise-security',
          title: 'Enterprise Security Masterclass',
          description: 'Complete AI security framework for enterprise protection',
          type: 'blog',
          readTime: '30 min read',
          category: 'Security',
          views: 9850,
          growth: 220,
          href: '/blog/ai-2025-enterprise-security-masterclass',
          icon: '🔒',
          rank: 4
        },
        {
          id: 'quantum-ai',
          title: 'Quantum AI Transformation',
          description: 'Fortune 500 quantum AI success with $3.2B value creation',
          type: 'case-study',
          readTime: '18 min read',
          category: 'Success Stories',
          views: 8750,
          growth: 190,
          href: '/case-studies/ai-2025-fortune-500-quantum-transformation',
          icon: '⚛️',
          rank: 5
        },
        {
          id: 'ai-agents',
          title: 'Advanced AI Agents Revolution',
          description: 'Autonomous intelligence systems with 300-500% efficiency gains',
          type: 'blog',
          readTime: '15 min read',
          category: 'AI Agents',
          views: 7650,
          growth: 165,
          href: '/blog/ai-2025-advanced-ai-agents',
          icon: '🤖',
          rank: 6
        }
      ];
      
      setTrendingContent(content);
      setIsLoading(false);
    };

    fetchTrendingContent();
  }, []);

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const getGrowthColor = (growth: number) => {
    if (growth >= 300) return 'text-green-600';
    if (growth >= 200) return 'text-blue-600';
    if (growth >= 100) return 'text-orange-600';
    return 'text-gray-600';
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return `#${rank}`;
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Trending Content</h3>
        <div className="flex items-center text-sm text-gray-500">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
          Live updates
        </div>
      </div>

      <div className="space-y-4">
        {trendingContent.slice(0, 5).map((item) => (
          <Link key={item.id} href={item.href} className="block group">
            <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {getRankIcon(item.rank)}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{formatViews(item.views)} views</span>
                      <span className={`text-xs font-semibold ${getGrowthColor(item.growth)}`}>
                        +{item.growth}%
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 line-clamp-1">
                    {item.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <span className="flex items-center">
                        <span className="mr-1">{item.icon}</span>
                        {item.type === 'case-study' ? 'Case Study' : 'Article'}
                      </span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>
                    <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-600">Articles Published</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">25+</div>
            <div className="text-sm text-gray-600">Case Studies</div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Link
          href="/content-showcase"
          className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all font-medium"
        >
          Explore All Trending Content
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default TrendingContentWidget;