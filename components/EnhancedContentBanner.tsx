import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
  readTime?: string;
  isNew?: boolean;
  icon?: string;
}

interface EnhancedContentBannerProps {
  variant?: 'default' | 'gradient' | 'minimal';
  maxItems?: number;
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  className?: string;
}

const featuredContent: ContentItem[] = [
  {
    title: 'AI 2025: Breakthrough Innovations That Will Reshape Industries',
    description: 'Discover the most significant AI breakthroughs of 2025 that are transforming industries, from quantum-enhanced machine learning to autonomous AI systems.',
    href: '/blog/ai-2025-breakthrough-innovations',
    type: 'blog',
    readTime: '25 min read',
    isNew: true,
    icon: '🚀'
  },
  {
    title: 'AI Startup Ecosystem 2025: Complete Guide to Building AI Companies',
    description: 'Comprehensive guide to the AI startup ecosystem in 2025, covering funding trends, market opportunities, and growth strategies.',
    href: '/blog/ai-startup-ecosystem-2025',
    type: 'blog',
    readTime: '30 min read',
    isNew: true,
    icon: '💼'
  },
  {
    title: 'Fortune 500 AI Transformation: 300% Revenue Growth Case Study',
    description: 'How a Fortune 500 retail company achieved 300% revenue growth through comprehensive AI transformation.',
    href: '/case-studies/ai-transformation-fortune-500-2025',
    type: 'case-study',
    readTime: '20 min read',
    isNew: true,
    icon: '📈'
  },
  {
    title: 'AI Implementation Master Guide 2026: Complete Blueprint for Success',
    description: 'The definitive guide to implementing AI in enterprise environments, covering strategy, technology, and best practices.',
    href: '/resources/ai-implementation-master-guide-2026',
    type: 'resource',
    readTime: '45 min read',
    isNew: true,
    icon: '📚'
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

export default function EnhancedContentBanner({
  variant = 'default',
  maxItems = 4,
  title = 'Fresh AI & Tech Insights',
  subtitle = 'Expert insights to accelerate your digital transformation',
  showViewAll = true,
  className = ''
}: EnhancedContentBannerProps) {
  const displayContent = featuredContent.slice(0, maxItems);

  const getVariantStyles = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white';
      case 'minimal':
        return 'bg-gray-50 text-gray-900';
      default:
        return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white';
    }
  };

  return (
    <section className={`py-16 ${getVariantStyles()} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ JUST PUBLISHED</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          {showViewAll && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/blog"
                className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                📋 Download Free Resources
              </Link>
            </div>
          )}
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  {item.isNew && (
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90 mb-3 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs opacity-75">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {getTypeLabel(item.type)}
                  </span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional CTA */}
        {showViewAll && (
          <div className="text-center mt-12">
            <p className="text-lg opacity-90 mb-6">
              Join 10,000+ professionals who trust our content for AI insights and strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/newsletter"
                className="bg-white bg-opacity-20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors"
              >
                Subscribe to Newsletter
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}