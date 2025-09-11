import React from 'react';
import Link from 'next/link';

interface TrendingItem {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
  readTime: string;
  category: string;
  icon: string;
  trendingRank?: number;
  views?: string;
  isHot?: boolean;
}

interface TrendingContentShowcaseProps {
  maxItems?: number;
  showRanking?: boolean;
  title?: string;
  subtitle?: string;
}

const trendingContent: TrendingItem[] = [
  {
    title: 'AI 2025: Year in Review',
    description: 'Comprehensive analysis of the most significant AI developments and industry transformations',
    href: '/blog/ai-2025-year-in-review',
    type: 'blog',
    readTime: '18 min read',
    category: 'AI Trends',
    icon: '📊',
    trendingRank: 1,
    views: '25K views',
    isHot: true
  },
  {
    title: 'AI 2026 Predictions: The Next Frontier',
    description: 'Expert insights and predictions for the most significant AI developments expected in 2026',
    href: '/blog/ai-2026-predictions',
    type: 'blog',
    readTime: '22 min read',
    category: 'Future Predictions',
    icon: '🔮',
    trendingRank: 2,
    views: '18K views',
    isHot: true
  },
  {
    title: 'AI Transformation: 300% Revenue Growth',
    description: 'How a Fortune 500 retail company achieved 300% revenue growth through AI transformation',
    href: '/case-studies/ai-transformation-retail-giant-2025',
    type: 'case-study',
    readTime: '15 min read',
    category: 'Case Study',
    icon: '🏪',
    trendingRank: 3,
    views: '12K views',
    isHot: false
  },
  {
    title: 'AI Breakthrough Innovations 2025',
    description: 'The technologies reshaping business and creating new opportunities',
    href: '/blog/ai-2025-breakthrough-innovations',
    type: 'blog',
    readTime: '25 min read',
    category: 'AI Innovation',
    icon: '🚀',
    trendingRank: 4,
    views: '8K views',
    isHot: true
  },
  {
    title: 'AI Productivity Automation 2025',
    description: 'Transform your business operations with intelligent automation',
    href: '/blog/ai-productivity-automation-2025',
    type: 'blog',
    readTime: '15 min read',
    category: 'Productivity',
    icon: '⚡',
    trendingRank: 5,
    views: '6K views',
    isHot: false
  },
  {
    title: 'AI Implementation Master Guide 2025',
    description: 'Complete blueprint for successful AI adoption and implementation',
    href: '/resources/ai-implementation-master-guide-2025',
    type: 'resource',
    readTime: '45 min read',
    category: 'Master Guide',
    icon: '📚',
    trendingRank: 6,
    views: '4K views',
    isHot: false
  }
];

export default function TrendingContentShowcase({ 
  maxItems = 6,
  showRanking = true,
  title = "Most Popular Articles This Week",
  subtitle = "Discover the most read and shared articles from our AI experts. Fresh insights, practical guides, and real-world case studies."
}: TrendingContentShowcaseProps) {
  const content = trendingContent.slice(0, maxItems);

  const getRankingColor = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-yellow-500 text-white';
      case 2: return 'bg-gray-400 text-white';
      case 3: return 'bg-orange-500 text-white';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI Trends': 'bg-blue-100 text-blue-800',
      'Future Predictions': 'bg-purple-100 text-purple-800',
      'Case Study': 'bg-green-100 text-green-800',
      'AI Innovation': 'bg-indigo-100 text-indigo-800',
      'Productivity': 'bg-green-100 text-green-800',
      'Master Guide': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-100 text-red-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔥 TRENDING NOW</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                  <div className="text-8xl">{item.icon}</div>
                  {showRanking && item.trendingRank && (
                    <div className={`absolute top-4 left-4 ${getRankingColor(item.trendingRank)} px-3 py-1 rounded-full text-sm font-medium`}>
                      #{item.trendingRank} TRENDING
                    </div>
                  )}
                  {item.isHot && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium animate-pulse">
                      🔥 HOT
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`${getCategoryColor(item.category)} text-sm font-medium px-3 py-1 rounded-full`}>
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">{item.readTime}</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{item.views}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'} →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            View All Articles
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}