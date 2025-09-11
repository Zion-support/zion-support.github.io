import React from 'react';
import Link from 'next/link';

interface TrendingItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime: string;
  type: 'article' | 'case-study' | 'resource';
  category: string;
  trendingScore: number;
  views: number;
  shares: number;
  publishedDate: string;
}

interface TrendingContentShowcaseProps {
  maxItems?: number;
  showMetrics?: boolean;
  className?: string;
}

const trendingItems: TrendingItem[] = [
  {
    title: 'AI 2026 Predictions: The Next Frontier',
    description: 'Expert insights and predictions for the most significant AI developments expected to reshape technology and society in 2026.',
    href: '/blog/ai-2026-predictions',
    icon: '🔮',
    readTime: '22 min read',
    type: 'article',
    category: 'AI Trends',
    trendingScore: 95,
    views: 12500,
    shares: 340,
    publishedDate: '2025-01-28'
  },
  {
    title: 'AI Productivity Automation 2025',
    description: 'Achieve 300% productivity boost with AI-powered automation. Complete guide to implementing intelligent workflows and process optimization.',
    href: '/blog/ai-productivity-automation-2025',
    icon: '⚡',
    readTime: '25 min read',
    type: 'article',
    category: 'Productivity',
    trendingScore: 92,
    views: 9800,
    shares: 280,
    publishedDate: '2025-01-28'
  },
  {
    title: 'AI Transformation: 300% Revenue Growth',
    description: 'How a Fortune 500 retail company achieved unprecedented growth through comprehensive AI transformation and operational automation.',
    href: '/case-studies/ai-transformation-retail-giant-2025',
    icon: '🏪',
    readTime: '15 min read',
    type: 'case-study',
    category: 'Case Study',
    trendingScore: 88,
    views: 8700,
    shares: 195,
    publishedDate: '2025-01-28'
  },
  {
    title: 'AI Implementation Master Guide 2025',
    description: 'Complete 200+ page playbook with proven strategies, frameworks, checklists, and templates for successful AI transformation.',
    href: '/resources/ai-implementation-master-guide-2025',
    icon: '📚',
    readTime: '200+ pages',
    type: 'resource',
    category: 'Guide',
    trendingScore: 85,
    views: 15200,
    shares: 420,
    publishedDate: '2025-01-28'
  },
  {
    title: 'AI 2025: Year in Review',
    description: 'Comprehensive analysis of the most significant AI developments, breakthroughs, and industry transformations that shaped 2025.',
    href: '/blog/ai-2025-year-in-review',
    icon: '📊',
    readTime: '18 min read',
    type: 'article',
    category: 'Analysis',
    trendingScore: 82,
    views: 11200,
    shares: 310,
    publishedDate: '2025-01-27'
  },
  {
    title: 'AI Multimodal Revolution',
    description: 'Beyond text to vision, audio, and code - how multimodal AI is transforming human-computer interaction and creative industries.',
    href: '/blog/ai-multimodal-revolution-2025',
    icon: '🎯',
    readTime: '22 min read',
    type: 'article',
    category: 'Technology',
    trendingScore: 78,
    views: 7600,
    shares: 180,
    publishedDate: '2025-01-26'
  }
];

const getTrendingBadge = (score: number) => {
  if (score >= 90) return { text: '🔥 HOT', color: 'bg-red-500 text-white' };
  if (score >= 80) return { text: '📈 RISING', color: 'bg-orange-500 text-white' };
  if (score >= 70) return { text: '⭐ POPULAR', color: 'bg-blue-500 text-white' };
  return { text: '📊 TRENDING', color: 'bg-gray-500 text-white' };
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'article':
      return 'text-blue-600 bg-blue-100';
    case 'case-study':
      return 'text-green-600 bg-green-100';
    case 'resource':
      return 'text-purple-600 bg-purple-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

const formatNumber = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

export default function TrendingContentShowcase({
  maxItems = 6,
  showMetrics = true,
  className = ''
}: TrendingContentShowcaseProps) {
  const displayItems = trendingItems.slice(0, maxItems);

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔥 TRENDING NOW</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Most Popular Content This Week
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the most read and shared AI content from our experts. 
            Fresh insights, practical guides, and real-world case studies that are trending now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item, index) => {
            const trendingBadge = getTrendingBadge(item.trendingScore);
            return (
              <Link key={index} href={item.href} className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                    <div className="text-8xl">{item.icon}</div>
                    <div className="absolute top-4 left-4">
                      <div className={`${trendingBadge.color} px-3 py-1 rounded-full text-sm font-medium`}>
                        #{index + 1} {trendingBadge.text}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className={`${getTypeColor(item.type)} px-3 py-1 rounded-full text-sm font-medium`}>
                        {item.type === 'article' && '📝 Article'}
                        {item.type === 'case-study' && '📊 Case Study'}
                        {item.type === 'resource' && '📋 Resource'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-gray-500 text-sm">{item.readTime}</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">{item.publishedDate}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {showMetrics && (
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <span>👁️</span>
                            <span>{formatNumber(item.views)} views</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>📤</span>
                            <span>{item.shares} shares</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-500">Trending</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-blue-600 font-medium group-hover:underline">
                        {item.type === 'article' && 'Read Article →'}
                        {item.type === 'case-study' && 'Read Case Study →'}
                        {item.type === 'resource' && 'Download Resource →'}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Trending Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">This Week's Trending Stats</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">45K+</div>
              <div className="text-gray-600">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1.2K+</div>
              <div className="text-gray-600">Social Shares</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">8.5K+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Engagement Rate</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            View All Trending Content
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}