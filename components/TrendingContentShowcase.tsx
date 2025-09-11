import React from 'react';
import Link from 'next/link';

interface TrendingItem {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
  readTime?: string;
  views?: number;
  trending?: boolean;
  icon?: string;
  category?: string;
}

interface TrendingContentShowcaseProps {
  maxItems?: number;
  showStats?: boolean;
  className?: string;
}

const trendingContent: TrendingItem[] = [
  {
    title: 'AI 2025: Breakthrough Innovations That Will Reshape Industries',
    description: 'Discover the most significant AI breakthroughs of 2025 that are transforming industries, from quantum-enhanced machine learning to autonomous AI systems.',
    href: '/blog/ai-2025-breakthrough-innovations',
    type: 'blog',
    readTime: '25 min read',
    views: 12500,
    trending: true,
    icon: '🚀',
    category: 'AI Innovation'
  },
  {
    title: 'AI Startup Ecosystem 2025: Complete Guide to Building AI Companies',
    description: 'Comprehensive guide to the AI startup ecosystem in 2025, covering funding trends, market opportunities, and growth strategies.',
    href: '/blog/ai-startup-ecosystem-2025',
    type: 'blog',
    readTime: '30 min read',
    views: 8900,
    trending: true,
    icon: '💼',
    category: 'Startup Strategy'
  },
  {
    title: 'Fortune 500 AI Transformation: 300% Revenue Growth Case Study',
    description: 'How a Fortune 500 retail company achieved 300% revenue growth through comprehensive AI transformation.',
    href: '/case-studies/ai-transformation-fortune-500-2025',
    type: 'case-study',
    readTime: '20 min read',
    views: 15600,
    trending: true,
    icon: '📈',
    category: 'Case Study'
  },
  {
    title: 'AI Implementation Master Guide 2026: Complete Blueprint for Success',
    description: 'The definitive guide to implementing AI in enterprise environments, covering strategy, technology, and best practices.',
    href: '/resources/ai-implementation-master-guide-2026',
    type: 'resource',
    readTime: '45 min read',
    views: 11200,
    trending: true,
    icon: '📚',
    category: 'Master Guide'
  },
  {
    title: 'AI 2026 Predictions: The Next Frontier',
    description: 'Expert insights and predictions for the most significant AI developments expected to reshape technology and society in 2026.',
    href: '/blog/ai-2026-predictions',
    type: 'blog',
    readTime: '22 min read',
    views: 9800,
    trending: true,
    icon: '🔮',
    category: 'Future Predictions'
  },
  {
    title: 'AI Workforce Transformation 2025',
    description: 'Complete reskilling guide with 340% ROI for transforming your workforce for the AI era.',
    href: '/blog/ai-workforce-transformation-2025',
    type: 'blog',
    readTime: '12 min read',
    views: 7600,
    trending: true,
    icon: '👥',
    category: 'Workforce'
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'blog':
      return 'bg-blue-100 text-blue-800';
    case 'case-study':
      return 'bg-green-100 text-green-800';
    case 'resource':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'blog':
      return 'Article';
    case 'case-study':
      return 'Case Study';
    case 'resource':
      return 'Resource';
    default:
      return 'Content';
  }
};

const formatViews = (views: number) => {
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}k`;
  }
  return views.toString();
};

export default function TrendingContentShowcase({
  maxItems = 6,
  showStats = true,
  className = ''
}: TrendingContentShowcaseProps) {
  const displayContent = trendingContent.slice(0, maxItems);

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-100 text-red-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔥 TRENDING NOW</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Most Popular Content This Week
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the most read and shared articles from our AI experts. 
            Fresh insights, practical guides, and real-world case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-8xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  {item.trending && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      #{index + 1} TRENDING
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                    <span className="text-gray-500 text-sm">{item.readTime}</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{item.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {showStats && (
                        <span className="flex items-center gap-1">
                          <span>👁️</span>
                          <span>{formatViews(item.views || 0)}</span>
                        </span>
                      )}
                      <span className="text-blue-600 font-medium group-hover:underline">
                        Read {getTypeLabel(item.type)} →
                      </span>
                    </div>
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
            View All Trending Content
            <span>→</span>
          </Link>
        </div>

        {/* Stats Section */}
        {showStats && (
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Content Performance This Week</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">125K+</div>
                <div className="text-gray-600">Total Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">15K+</div>
                <div className="text-gray-600">Shares</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">8.5K+</div>
                <div className="text-gray-600">Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}